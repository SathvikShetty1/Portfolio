'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

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

const AnimatedCharacter = () => (
    <svg viewBox="0 0 250 200" className="w-64 h-64 md:w-80 md:h-80">
        <g>
            {/* Background */}
            <rect x="0" y="0" width="250" height="200" fill="hsl(var(--background))" />
            
            {/* Window */}
            <rect x="150" y="20" width="90" height="60" fill="#87CEEB" rx="5" />
            <rect x="145" y="15" width="100" height="70" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" rx="5" />
            <line x1="195" y1="15" x2="195" y2="85" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <line x1="145" y1="50" x2="245" y2="50" stroke="hsl(var(--foreground))" strokeWidth="2" />

            {/* Desk */}
            <rect x="5" y="150" width="240" height="45" fill="hsl(var(--muted))" rx="5" />
            <rect x="5" y="150" width="240" height="5" fill="hsl(var(--muted-foreground))" opacity="0.2" rx="2" />

            {/* Laptop */}
            <path d="M 120 125 L 115 152 L 155 152 L 150 125 Z" fill="hsl(var(--secondary))" />
            <rect x="122" y="100" width="56" height="30" fill="hsl(var(--secondary-foreground))" rx="3" />
            <rect x="124" y="103" width="52" height="24" fill="hsl(var(--background))" />
             <circle cx="150" cy="118" r="2" fill="hsl(var(--primary))" />


            {/* Person */}
            <rect x="75" y="110" width="50" height="40" fill="hsl(var(--primary))" rx="10" />
            <circle cx="100" cy="90" r="15" fill="hsl(var(--primary-foreground))" stroke="hsl(var(--primary))" strokeWidth="2" />
            <circle cx="95" cy="88" r="1.5" fill="hsl(var(--primary))" />
            <circle cx="105" cy="88" r="1.5" fill="hsl(var(--primary))" />
            <path d="M 95 95 Q 100 100 105 95" stroke="hsl(var(--primary))" fill="none" strokeWidth="1" />

            {/* Owl */}
            <path d="M 50 120 C 40 155, 80 155, 70 120 Z" fill="hsl(var(--accent))" />
            <circle cx="55" cy="130" r="7" fill="white" />
            <circle cx="65" cy="130" r="7" fill="white" />
            <circle cx="55" cy="130" r="3" fill="black" />
            <circle cx="65" cy="130" r="3" fill="black" />
            <path d="M 58 138 L 62 138 L 60 142 Z" fill="orange" />


            {/* Books */}
            <rect x="20" y="135" width="40" height="15" fill="#DC2626" rx="2" />
            <rect x="20" y="120" width="40" height="15" fill="#2563EB" rx="2" />
            <rect x="20" y="105" width="40" height="15" fill="#16A34A" rx="2" />
            
            {/* Mug */}
            <rect x="165" y="135" width="20" height="15" fill="#3B82F6" rx="3" />
            <rect x="183" y="138" width="5" height="8" fill="none" stroke="#3B82F6" strokeWidth="2" rx="2" />

        </g>
    </svg>
);


export default function Home() {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-8 mb-32">
        <div className="space-y-6 md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline">
            <span className="block mb-2">Sathvik Shetty</span>
            <span className="text-muted-foreground">Aspiring Cloud & Network Engineer</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
            I'm on an exciting journey exploring the vast world of AWS Cloud and Network Engineering. This portfolio is a living document of my projects, learnings, and growth in building robust and scalable cloud infrastructure.
          </p>
          <div className="flex gap-4 pt-4 justify-center md:justify-start">
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
        <div className="relative">
          <AnimatedCharacter />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-md hover:shadow-xl">
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
              <CardFooter className="flex justify-end gap-2">
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
      </section>

      {/* Contact Section */}
      <section id="contact">
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
      </section>
    </div>
  );
}
