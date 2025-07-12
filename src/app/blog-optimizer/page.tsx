'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { generateBlogSummary, type GenerateBlogSummaryOutput } from '@/ai/flows/generate-blog-summary';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Copy, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function BlogOptimizerPage() {
  const [blogPost, setBlogPost] = useState('');
  const [result, setResult] = useState<GenerateBlogSummaryOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogPost.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter some blog content to optimize.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const output = await generateBlogSummary({ blogPost });
      setResult(output);
    } catch (error) {
      console.error('Error generating summary:', error);
      toast({
        title: 'Optimization Failed',
        description: 'An error occurred while generating suggestions. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = (text: string, field: 'Title' | 'Summary') => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to Clipboard!',
      description: `${field} has been copied.`,
    });
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <Wand2 className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mt-4">Blog Optimizer</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Paste your blog post below and let AI generate an alternative title and summary to maximize reader engagement.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Your Blog Post</CardTitle>
            <CardDescription>Enter the full content of your article here.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGenerate} className="space-y-4">
              <Textarea
                placeholder="Start writing or paste your blog post here..."
                className="min-h-[300px] text-base"
                value={blogPost}
                onChange={(e) => setBlogPost(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" /> Generate Suggestions
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>AI-Powered Suggestions</CardTitle>
            <CardDescription>Here are the generated title and summary.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {isLoading && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Alternative Title</h3>
                  <Skeleton className="h-8 w-full" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Alternative Summary</h3>
                  <Skeleton className="h-24 w-full" />
                </div>
              </div>
            )}
            
            {!isLoading && result && (
              <>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">Alternative Title</h3>
                    <Button variant="ghost" size="icon" onClick={() => handleCopy(result.title, 'Title')}>
                        <Copy className="h-4 w-4"/>
                    </Button>
                  </div>
                  <p className="text-primary-foreground bg-primary/10 p-3 rounded-md border border-primary/20">{result.title}</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">Alternative Summary</h3>
                    <Button variant="ghost" size="icon" onClick={() => handleCopy(result.summary, 'Summary')}>
                        <Copy className="h-4 w-4"/>
                    </Button>
                  </div>
                  <p className="text-muted-foreground bg-muted/50 p-3 rounded-md border">{result.summary}</p>
                </div>
              </>
            )}

            {!isLoading && !result && (
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-full min-h-[200px] bg-muted/30 rounded-lg p-8">
                    <Wand2 className="h-10 w-10 mb-4"/>
                    <p>Your suggestions will appear here once generated.</p>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
