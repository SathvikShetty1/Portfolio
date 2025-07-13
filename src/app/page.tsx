'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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
  const { toast } = useToast();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };
  
  const imageSrc = resolvedTheme === 'dark' ? '/images/nn.png' : '/images/i.png';

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="py-8 md:py-20">
        <div className="container mx-auto text-center">
            <div className="flex justify-center mb-8">
              {mounted ? (
                  <Image 
                    src={imageSrc}
                    alt="Sathvik Shetty" 
                    width={600} 
                    height={600}
                  />
              ) : (
                <div style={{width: 600, height: 600}} />
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight">
              Sathvik Shetty
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mt-3 mb-8">
              Aspiring Cloud & Network Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm on an exciting journey exploring the vast world of AWS Cloud and Network Engineering. This portfolio is a living document of my projects, learnings, and growth in building robust and scalable cloud infrastructure.
            </p>
            <div className="flex gap-4 pt-8 justify-center">
              <Button size="lg" asChild>
                <a href="#projects">
                  View My Projects <ArrowRight />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  Get In Touch <Mail />
                </a>
              </Button>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-card">
                <CardHeader className="p-0">
                   <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover" data-ai-hint={project.hint} />
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                  <CardDescription className="mt-2">{project.description}</CardDescription>
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
      <section id="contact" className="py-20 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Contact Me</h2>
          <Card className="max-w-2xl mx-auto shadow-lg">
              <CardHeader>
                  <CardTitle>Let's Connect</CardTitle>
                  <CardDescription>Have a question or want to work together? Drop me a message.</CardDescription>
              </CardHeader>
              <CardContent>
                  <form className="space-y-4" onSubmit={handleContactSubmit}>
                      <Input placeholder="Your Name" type="text" required />
                      <Input placeholder="Your Email" type="email" required />
                      <Textarea placeholder="Your Message" rows={5} required />
                      <Button type="submit" className="w-full">
                          Send Message <ArrowRight />
                      </Button>
                  </form>
              </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
