import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://your-domain.com'; // Replace with your actual domain

  const posts = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt).toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.8,
  }));

  const routes = ['', '/blog', '/blog-optimizer'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: route === '' ? 1 : 0.9,
  }));

  return [...routes, ...posts];
}
