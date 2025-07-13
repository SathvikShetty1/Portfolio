import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

export const metadata: Metadata = {
  title: 'Sathvik',
  description: 'A portfolio showcasing my journey in AWS Cloud and Network Engineering.',
  icons: {
    icon: [
      { url: '/images/i.png' },
      new URL('/images/i.png', 'https://your-domain.com'), // Absolute URL for better compatibility
    ],
    shortcut: ['/images/i.png'],
    apple: [
      { url: '/images/i.png' },
      { url: '/images/i.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased', 'flex flex-col min-h-screen bg-background transition-colors duration-300')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="flex-grow mt-[-30px]">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
