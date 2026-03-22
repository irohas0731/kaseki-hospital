import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/lib/siteConfig';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.hospitalName,
    template: `%s｜${siteConfig.hospitalName}`,
  },
  description: `${siteConfig.hospitalName}の公式ホームページです。外来・入院・リハビリテーション・在宅サービスなど、地域に根ざした総合的な医療を提供しています。`,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteConfig.url,
    siteName: siteConfig.hospitalName,
    title: siteConfig.hospitalName,
    description: `${siteConfig.hospitalName}の公式ホームページです。外来・入院・リハビリテーション・在宅サービスなど、地域に根ざした総合的な医療を提供しています。`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
