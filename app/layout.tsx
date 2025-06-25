import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo, Tajawal, Almarai } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  display: "swap",
});

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مختبر الإبداع | مختبر التعليم المتخصص في تطوير المهارات الإبداعية والتقنية",
  description: "مختبر التعليم المتخصص في تطوير المهارات الإبداعية والتقنية من خلال محتوى حصري ومتميز مع أساتذة محترفين. سعر موحد على جميع المنصات.",
  keywords: [
    "مختبر الإبداع",
    "التعليم الإلكتروني",
    "المهارات الإبداعية",
    "المهارات التقنية",
    "محتوى تعليمي",
    "أساتذة محترفين",
    "التعلم عبر الإنترنت",
    "دورات تدريبية",
    "تطوير المهارات"
  ],
  authors: [{ name: "مختبر الإبداع" }],
  creator: "مختبر الإبداع",
  publisher: "مختبر الإبداع",
  applicationName: "مختبر الإبداع",
  category: "التعليم",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    title: "مختبر الإبداع | مختبر التعليم المتخصص في تطوير المهارات الإبداعية والتقنية",
    description: "مختبر التعليم المتخصص في تطوير المهارات الإبداعية والتقنية من خلال محتوى حصري ومتميز مع أساتذة محترفين",
    siteName: "مختبر الإبداع",
  },
  twitter: {
    card: "summary_large_image",
    title: "مختبر الإبداع | مختبر التعليم المتخصص في تطوير المهارات الإبداعية والتقنية",
    description: "مختبر التعليم المتخصص في تطوير المهارات الإبداعية والتقنية من خلال محتوى حصري ومتميز مع أساتذة محترفين",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "DPFUmZ6wUk69t-4Xpgo2NhrQV4Iuesk2zlUgghf72UI", // أضف Google Search Console verification code هنا
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} ${tajawal.variable} ${almarai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}