// "use client";
// import Link from 'next/link';
// import { ShieldCheck, Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useState } from 'react';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useAuth } from '@/contexts/AuthContext';

// // Base navigation items that all users can see
// const baseNavItems = [
//   { href: '/', label: 'الرئيسية' },
//   { href: '/#insurance-plans', label: 'خطط التأمين' },
//   { href: '/#calculator', label: 'حاسبة الأقساط' },
//   { href: '/contact', label: 'اتصل بنا' },
// ];

// // Admin-only navigation items
// const adminNavItems = [
//   { href: '/admin/dashboard', label: 'لوحة التحكم' },
//   { href: '/lead-analyzer', label: 'محلل العملاء (تجريبي)' },
// ];

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { isAdmin } = useAuth();
  
//   // Combine navigation items based on user role
//   const navItems = isAdmin 
//     ? [...baseNavItems, ...adminNavItems] 
//     : baseNavItems;

//   return (
//     <header className="bg-card shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
//           <ShieldCheck className="h-8 w-8" />
//           <span className="text-2xl font-bold">تأمين مصر</span>
//         </Link>
//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-6 items-center">
//           {navItems.map((item) => (
//             <Link key={item.label} href={item.href} className="text-foreground hover:text-primary transition-colors font-medium">
//               {item.label}
//             </Link>
//           ))}
//           <Button asChild variant="default">
//             <Link href="/#get-quote">احصل على عرض سعر</Link>
//           </Button>
//         </nav>
//         {/* Mobile Navigation Trigger */}
//         <div className="md:hidden">
//           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <Menu className="h-6 w-6" />
//                 <span className="sr-only">افتح القائمة</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[280px] bg-card p-6">
//               <div className="flex justify-between items-center mb-8">
//                 <Link href="/" className="flex items-center gap-2 text-primary" onClick={() => setIsMobileMenuOpen(false)}>
//                   <ShieldCheck className="h-7 w-7" />
//                   <span className="text-xl font-bold">تأمين مصر</span>
//                 </Link>
//                 <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
//                   <X className="h-6 w-6" />
//                   <span className="sr-only">أغلق القائمة</span>
//                 </Button>
//               </div>
//               <nav className="flex flex-col gap-6">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     className="text-lg text-foreground hover:text-primary transition-colors font-medium"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//                 <Button asChild variant="default" className="mt-4 w-full" onClick={() => setIsMobileMenuOpen(false)}>
//                   <Link href="/#get-quote">احصل على عرض سعر</Link>
//                 </Button>
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";
import Link from 'next/link';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from '@/contexts/AuthContext';
import LogoutButton from '@/components/LogoutButton';

// Base navigation items that all users can see
const baseNavItems = [
  { href: '/', label: 'الرئيسية' },
  { href: '/#insurance-plans', label: 'خطط التأمين' },
  { href: '/#calculator', label: 'حاسبة الأقساط' },
  { href: '/contact', label: 'اتصل بنا' },
];

// Admin-only navigation items
const adminNavItems = [
  { href: '/admin/dashboard', label: 'لوحة التحكم' },
  { href: '/lead-analyzer', label: 'محلل العملاء (تجريبي)' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAdmin } = useAuth();
  
  // Combine navigation items based on user role
  const navItems = isAdmin 
    ? [...baseNavItems, ...adminNavItems] 
    : baseNavItems;

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <ShieldCheck className="h-8 w-8" />
          <span className="text-2xl font-bold">تأمين مصر</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-foreground hover:text-primary transition-colors font-medium">
              {item.label}
            </Link>
          ))}
          <Button asChild variant="default">
            <Link href="/#get-quote">احصل على عرض سعر</Link>
          </Button>
          <LogoutButton />
        </nav>
        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">افتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center gap-2 text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  <ShieldCheck className="h-7 w-7" />
                  <span className="text-xl font-bold">تأمين مصر</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">أغلق القائمة</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild variant="default" className="mt-4 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/#get-quote">احصل على عرض سعر</Link>
                </Button>
                <div className="mt-4">
                  <LogoutButton />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}