import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingNavbar from '../../components/FloatingNavbar';
import EnhancedFooter from '../../components/EnhancedFooter';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shantanu Gondane - Full Stack Developer",
  description: "Full Stack Developer based in Mumbai, building beautiful websites and innovative solutions",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingNavbar />
        <EnhancedFooter />
      </body>
    </html>
  );
}
