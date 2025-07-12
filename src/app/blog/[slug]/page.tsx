import { notFound } from 'next/navigation';
import { blogPosts, type BlogPost } from '@/lib/blog-data';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Function to generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Function to generate metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps) {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: `${post.title} - CloudFolio Blog`,
        description: post.excerpt,
    }
}

// A simple function to convert markdown-like syntax to HTML
function renderContent(content: string) {
    const htmlContent = content
      .replace(/## (.*)/g, '<h2 class="text-2xl font-bold mt-8 mb-4 font-headline">$1</h2>')
      .replace(/\`\`\`(bash|json|javascript|typescript|html|css|shell)\n([\s\S]*?)\`\`\`/g, '<pre><code class="language-$1">$2</code></pre>')
      .replace(/\`([^\`]+)\`/g, '<code>$1</code>')
      .replace(/\n/g, '<br />');

    return <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <Link href="/blog">
            <Badge variant="secondary" className="mb-4 hover:bg-muted cursor-pointer">
              &larr; Back to Blog
            </Badge>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold font-headline mb-2">{post.title}</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
          </div>
        </header>

        <div className="text-lg leading-relaxed space-y-6">
            {renderContent(post.content)}
        </div>
      </article>
    </div>
  );
}
