
// "use client";

// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm, type SubmitHandler } from 'react-hook-form';
// import { z } from 'zod';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';
// import { Mail, Phone, MessageSquare, MapPin, Send } from 'lucide-react';
// import Image from 'next/image';

// const contactSchema = z.object({
//   name: z.string().min(2, 'يجب أن يتكون الاسم من حرفين على الأقل').max(50),
//   email: z.string().email('عنوان بريد إلكتروني غير صالح'),
//   subject: z.string().min(5, 'يجب أن يتكون الموضوع من 5 أحرف على الأقل').max(100),
//   message: z.string().min(10, 'يجب أن تتكون الرسالة من 10 أحرف على الأقل').max(500),
// });

// type ContactFormValues = z.infer<typeof contactSchema>;

// export default function ContactPage() {
//   const { toast } = useToast();
//   const form = useForm<ContactFormValues>({
//     resolver: zodResolver(contactSchema),
//   });

//   const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
//     console.log('Contact form data:', data); 
//     toast({
//       title: 'تم إرسال الرسالة!',
//       description: 'شكرًا لتواصلك معنا. سنعود إليك قريبًا.',
//     });
//     form.reset();
//   };

//   const contactDetails = [
//     { icon: <Mail className="h-6 w-6 text-primary" />, label: 'البريد الإلكتروني', value: 'info@masrinsurance.com', href: 'mailto:info@masrinsurance.com' },
//     { icon: <Phone className="h-6 w-6 text-primary" />, label: 'الهاتف', value: '+20 123 456 7890', href: 'tel:+201234567890' },
//     { icon: <MessageSquare className="h-6 w-6 text-primary" />, label: 'واتساب', value: '+20 123 456 7890', href: 'https://wa.me/201234567890' },
//     { icon: <MapPin className="h-6 w-6 text-primary" />, label: 'العنوان', value: '123 شارع التأمين، القاهرة، مصر' },
//   ];

//   return (
//     <div className="space-y-12">
//       <section className="text-center py-12 bg-card rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold text-primary mb-4">تواصل معنا</h1>
//         <p className="text-lg text-foreground max-w-xl mx-auto">
//           نحن هنا للمساعدة! سواء كانت لديك أسئلة حول خططنا، أو تحتاج إلى مساعدة، أو ترغب في تقديم ملاحظات، فلا تتردد في التواصل.
//         </p>
//       </section>

//       <section className="grid md:grid-cols-2 gap-12 items-start">
//         <div className="space-y-8">
//           <h2 className="text-3xl font-semibold text-foreground">معلومات الاتصال</h2>
//           {contactDetails.map((detail, index) => (
//             <Card key={index} className="overflow-hidden">
//               <CardContent className="p-6 flex items-center gap-4">
//                 {detail.icon}
//                 <div>
//                   <h3 className="text-lg font-medium text-foreground">{detail.label}</h3>
//                   {detail.href ? (
//                     <a href={detail.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
//                       {detail.value}
//                     </a>
//                   ) : (
//                     <p className="text-muted-foreground">{detail.value}</p>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//            <div className="mt-8">
//             <Image 
//               src="https://placehold.co/600x350.png?text=موقع+مكتبنا"
//               alt="خريطة موقع المكتب"
//               width={600}
//               height={350}
//               className="rounded-lg shadow-md object-cover"
//               data-ai-hint="map office"
//             />
//           </div>
//         </div>

//         <Card className="shadow-xl">
//           <CardHeader>
//             <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
//             <CardDescription>املأ النموذج وسنرد عليك في أقرب وقت ممكن.</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>الاسم بالكامل</FormLabel>
//                       <FormControl>
//                         <Input placeholder="اسمك بالكامل" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>عنوان البريد الإلكتروني</FormLabel>
//                       <FormControl>
//                         <Input type="email" placeholder="بريدك@الإلكتروني.com" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="subject"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>الموضوع</FormLabel>
//                       <FormControl>
//                         <Input placeholder="بخصوص..." {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="message"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>الرسالة</FormLabel>
//                       <FormControl>
//                         <Textarea placeholder="رسالتك..." {...field} rows={5} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
//                   {form.formState.isSubmitting ? 'جارٍ الإرسال...' : (
//                     <>
//                      <Send className="mr-2 h-4 w-4" /> إرسال الرسالة
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>
//       </section>
//     </div>
//   );
// }
"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MessageSquare, MapPin, Send } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'يجب أن يتكون الاسم من حرفين على الأقل').max(50),
  email: z.string().email('عنوان بريد إلكتروني غير صالح'),
  subject: z.string().min(5, 'يجب أن يتكون الموضوع من 5 أحرف على الأقل').max(100),
  message: z.string().min(10, 'يجب أن تتكون الرسالة من 10 أحرف على الأقل').max(500),
});

type ContactFormValues = z.infer<typeof contactSchema>;

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

// Office images data
const officeImages = [
  // {
  //   src: '/images/office-exterior.jpg',
  //   alt: 'مبنى المكتب الخارجي',
  //   className: 'office-slide-1'
  // },
  // {
  //   src: '/images/office-interior.jpg',
  //   alt: 'المكتب من الداخل',
  //   className: 'office-slide-2'
  // },
  // {
  //   src: '/images/office-meeting-room.jpg',
  //   alt: 'غرفة الاجتماعات',
  //   className: 'office-slide-3'
  // },
  // {
  //   src: '/images/office-reception.jpg',
  //   alt: 'منطقة الاستقبال',
  //   className: 'office-slide-4'
  // },
  // {
  //   src: '/images/office-location-map.jpg',
  //   alt: 'خريطة موقع المكتب',
  //   className: 'office-slide-5'
  // }
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

// Dynamic Slideshow Component
function DynamicSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`الانتقال إلى الشريحة ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            خدمات التأمين المتميزة
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            حماية شاملة لسيارتك وراحة البال لك
          </p>
        </div>
      </div>
    </div>
  );
}

// Office Dynamic Slideshow Component
function OfficeSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % officeImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-md">
      {officeImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {officeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`الانتقال إلى صورة المكتب ${index + 1}`}
          />
        ))}
      </div>

      {/* Optional overlay with office info */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg">
        <p className="text-sm font-medium">مكتبنا</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log('Contact form data:', data); 
    toast({
      title: 'تم إرسال الرسالة!',
      description: 'شكرًا لتواصلك معنا. سنعود إليك قريبًا.',
    });
    form.reset();
  };

  const contactDetails = [
    { icon: <Mail className="h-6 w-6 text-primary" />, label: 'البريد الإلكتروني', value: 'info@masrinsurance.com', href: 'mailto:info@masrinsurance.com' },
    { icon: <Phone className="h-6 w-6 text-primary" />, label: 'الهاتف', value: '+20 123 456 7890', href: 'tel:+201234567890' },
    { icon: <MessageSquare className="h-6 w-6 text-primary" />, label: 'واتساب', value: '+20 123 456 7890', href: 'https://wa.me/201234567890' },
    { icon: <MapPin className="h-6 w-6 text-primary" />, label: 'العنوان', value: '123 شارع التأمين، القاهرة، مصر' },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-card rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-primary mb-4">تواصل معنا</h1>
        <p className="text-lg text-foreground max-w-xl mx-auto">
          نحن هنا للمساعدة! سواء كانت لديك أسئلة حول خططنا، أو تحتاج إلى مساعدة، أو ترغب في تقديم ملاحظات، فلا تتردد في التواصل.
        </p>
      </section>

      {/* Dynamic Slideshow Section */}
      <section>
        <DynamicSlideshow />
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-foreground">معلومات الاتصال</h2>
          {contactDetails.map((detail, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6 flex items-center gap-4">
                {detail.icon}
                <div>
                  <h3 className="text-lg font-medium text-foreground">{detail.label}</h3>
                  {detail.href ? (
                    <a href={detail.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{detail.value}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="mt-8">
            <OfficeSlideshow />
          </div>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
            <CardDescription>املأ النموذج وسنرد عليك في أقرب وقت ممكن.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الاسم بالكامل</FormLabel>
                      <FormControl>
                        <Input placeholder="اسمك بالكامل" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>عنوان البريد الإلكتروني</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="بريدك@الإلكتروني.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الموضوع</FormLabel>
                      <FormControl>
                        <Input placeholder="بخصوص..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الرسالة</FormLabel>
                      <FormControl>
                        <Textarea placeholder="رسالتك..." {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'جارٍ الإرسال...' : (
                    <>
                     <Send className="mr-2 h-4 w-4" /> إرسال الرسالة
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}