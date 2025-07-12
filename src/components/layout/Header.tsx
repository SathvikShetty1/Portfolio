'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Cloud, Wand2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
  { href: '/blog-optimizer', label: 'Blog Optimizer', icon: <Wand2 className="h-4 w-4" /> },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Cloud className="h-6 w-6 text-primary" />
          <span className="font-headline">CloudFolio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                'transition-colors hover:text-accent',
                 pathname === href ? 'text-accent' : 'text-foreground/60',
                 'flex items-center gap-1'
              )}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                  <Cloud className="h-6 w-6 text-primary" />
                  <span className="font-headline">CloudFolio</span>
                </Link>
                <nav className="flex flex-col gap-4 text-lg">
                 {navLinks.map(({ href, label, icon }) => (
                    <Link
                      key={label}
                      href={href}
                       className={cn(
                        'transition-colors hover:text-accent',
                         pathname === href ? 'text-accent' : 'text-foreground/80',
                         'flex items-center gap-2'
                      )}
                    >
                      {icon}
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
