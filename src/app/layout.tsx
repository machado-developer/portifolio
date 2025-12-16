import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Antonio Ulundo Machados | Full Stack Developer',
  description: 'Portfolio de Antonio Ulundo, Analista de TI e Desenvolvedor Full Stack.',
  keywords: ['Antonio Ulundo', 'Full Stack Developer', 'Desenvolvedor Web', 'Portfolio', 'React', 'Next.js', 'Node.js', 'TypeScript', 'IT Analyst'],
  authors: [{ name: 'Antonio Ulundo Machado' }],
  creator: 'Antonio Ulundo Machado',
  publisher: 'Antonio Ulundo Machado',
  openGraph: {
    title: 'Antonio Ulundo Machados | Full Stack Developer',
    description: 'Portfolio de Antonio Ulundo, Analista de TI e Desenvolvedor Full Stack.',
    url: 'https://antonio-machado.vercel.app/', // Replace with your actual domain
    siteName: 'Antonio Ulundo Machados Portfolio',
    images: [
      {
        url: 'https://antonio-machado.vercel.app/m2.jpg', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Antonio Ulundo Machados Portfolio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antonio Ulundo Machados | Full Stack Developer',
    description: 'Portfolio de Antonio Ulundo, Analista de TI e Desenvolvedor Full Stack.',
    creator: '@yourtwitterhandle', // Replace with your Twitter handle
    images: ['https://antonio-machado.vercel.app/m2.jpg'], // Replace with your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://antonio-machado.vercel.app', // Replace with your actual domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
