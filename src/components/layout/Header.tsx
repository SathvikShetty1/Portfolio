'use client';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled={true}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="hover:bg-transparent"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function Header() {
  return (
    <header className="absolute top-0 right-0 p-4 z-50">
      <ThemeToggle />
    </header>
  );
}
