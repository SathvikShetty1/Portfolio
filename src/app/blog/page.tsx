import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/blog-data';
import { ArrowRight, Calendar } from 'lucide-react';
import { format } from 'date-fns';

export const metadata = {
  title: 'Blog - CloudFolio',
  description: 'My learning journey in AWS Cloud and Network Engineering.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Learning Journey</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Documenting my progress in AWS Cloud and Network Engineering.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="transition-shadow duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="flex items-center gap-2 pt-2">
                <Calendar className="h-4 w-4" />
                <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="px-0">
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
