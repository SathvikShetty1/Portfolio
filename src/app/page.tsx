'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, ArrowRight, ExternalLink, Feather } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const projects = [
  {
    title: 'Cloud-Native Web App',
    description: 'A scalable web application deployed on AWS, utilizing services like EC2, S3, and RDS for high availability and performance.',
    image: 'https://placehold.co/600x400.png',
    hint: 'cloud infrastructure',
    tags: ['AWS', 'EC2', 'S3', 'RDS', 'Docker'],
    github: '#',
    live: '#',
  },
  {
    title: 'Serverless API Gateway',
    description: 'Developed a RESTful API using AWS Lambda and API Gateway for a cost-effective, serverless backend solution.',
    image: 'https://placehold.co/600x400.png',
    hint: 'serverless code',
    tags: ['AWS Lambda', 'API Gateway', 'Node.js', 'DynamoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'VPC Network Design',
    description: 'Designed and implemented a secure and scalable Virtual Private Cloud (VPC) architecture on AWS with public/private subnets.',
    image: 'https://placehold.co/600x400.png',
    hint: 'network diagram',
    tags: ['AWS VPC', 'Security Groups', 'NAT Gateway', 'Terraform'],
    github: '#',
    live: '#',
  },
];

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setImageVisible(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setImageVisible(false);
      
      const timer = setTimeout(() => {
        setImageVisible(true);
      }, 500); 

      return () => clearTimeout(timer);
    }
  }, [resolvedTheme, mounted]);

  const imageSrc = resolvedTheme === 'dark' ? '/images/nn.png' : '/images/i.png';

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="py-[70px] md:py-16">
        <div className="container mx-auto text-center">
            <div className="flex justify-center mb-[-60px] md:mb-[-100px] h-[400px] md:h-[600px] items-center">
              {mounted ? (
                  <Image 
                    src={imageSrc}
                    alt="Sathvik Shetty" 
                    width={600} 
                    height={600}
                    priority
                    className={cn(
                      "ease-in-out w-[500px] h-auto md:w-[600px]",
                      imageVisible ? "opacity-100 scale-100 transition-opacity duration-500" : "opacity-0"
                    )}
                  />
              ) : (
                <div style={{width: 600, height: 600}} />
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight">
              Sathvik Shetty
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground mt-3 mb-3">
              Aspiring Cloud & Network Engineer
            </p>
            <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm on an exciting journey exploring the vast world of AWS Cloud and Network Engineering. This portfolio is a living document of my projects, learnings, and growth in building robust and scalable cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#projects">
                  View My Projects <ArrowRight />
                </a>
              </Button>
               <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/blog">
                  Blog <Feather />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href="#contact">
                  Get In Touch <ExternalLink />
                </a>
              </Button>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-24 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="group flex flex-col overflow-hidden bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-primary">
                <CardHeader className="p-0 overflow-hidden">
                   <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover transition-transform duration-300" data-ai-hint={project.hint} />
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <CardTitle className="font-headline transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="mt-2 transition-colors duration-300">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 bg-muted/50 p-4">
                   <Button variant="ghost" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github /> Source
                    </a>
                  </Button>
                   <Button asChild>
                     <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">Contact Me</h2>
          <Card className="max-w-2xl mx-auto shadow-lg">
              <CardHeader>
                  <CardTitle>Let's Connect</CardTitle>
                  <CardDescription>You can reach me at the email address below.</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-primary">sathvikshetty794@gmail.com</p>
              </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
