
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/contexts/AuthContext';
import AuthGate from '@/components/auth/AuthGate';

const inter = Inter({ 
  subsets: ['latin', 'arabic'], 
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'تأمين مصر - شريك تأمين سيارتك الموثوق به',
  description: 'حلول تأمين سيارات شاملة وبأسعار معقولة في مصر. احصل على عرض أسعارك اليوم!',
};

// Background images data
const backgroundImages = [
  {
    src: '/images/car-insurance-hero.jpg',
    alt: 'Car Insurance Background 1',
    className: 'slide-1'
  },
  {
    src: '/images/accident-coverage.jpg',
    alt: 'Accident Coverage Background',
    className: 'slide-2'
  },
  {
    src: '/images/vehicle-protection.jpg',
    alt: 'Vehicle Protection Background',
    className: 'slide-3'
  },
  {
    src: '/images/insurance-safety.jpg',
    alt: 'Insurance Safety Background',
    className: 'slide-4'
  },
  {
    src: '/images/comprehensive-coverage.jpg',
    alt: 'Comprehensive Coverage Background',
    className: 'slide-5'
  }
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): any {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Dynamic Background Slider with Real Images */}
        <div className="dynamic-background">
          <div className="background-slider">
            {backgroundImages.map((image, index) => (
              <div key={index} className={`background-slide ${image.className}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80 backdrop-blur-sm"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Vision OS Container */}
        <div className="vision-container">
          <AuthProvider>
            <AuthGate>
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
                <div className="glass-card p-8 min-h-[70vh] vision-shadow-lg">
                  {children}
                </div>
              </main>
              <Footer />
            </AuthGate>
            <Toaster />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}