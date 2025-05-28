
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import PremiumCalculator from '@/components/PremiumCalculator';
// import InsurancePlanTable from '@/components/InsurancePlanTable';
// import LeadCaptureForm from '@/components/LeadCaptureForm';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// import { faqItems } from '@/lib/constants';
// import { CheckSquare, Users, TrendingUp, MessageSquareHeart, FileText, HelpCircle, ShieldQuestion } from 'lucide-react';
// import Link from 'next/link';

// export default function Home() {
//   const whyChooseUsPoints = [
//     { icon: <CheckSquare className="h-8 w-8 text-primary" />, title: 'تسويات مطالبات سريعة', description: 'تمتع بمعالجة مطالبات سريعة وخالية من المتاعب، لتستأنف حياتك بدون تأخير.' },
//     { icon: <Users className="h-8 w-8 text-primary" />, title: 'تغطية شاملة ومخصصة', description: 'خطط تأمين مصممة بعناية لتناسب احتياجاتك وميزانيتك الخاصة، مع تغطية لكل التفاصيل.' },
//     { icon: <TrendingUp className="h-8 w-8 text-primary" />, title: 'أسعار تنافسية وعادلة', description: 'احصل على أفضل قيمة مقابل أموالك مع أسعارنا المدروسة والمعقولة في السوق المصري.' },
//     { icon: <MessageSquareHeart className="h-8 w-8 text-primary" />, title: 'دعم عملاء متميز', description: 'فريقنا المتفاني والودود دائمًا هنا لمساعدتك والإجابة على استفساراتك بكفاءة عالية.' },
//   ];

//   return (
//     <div className="space-y-20">
//       {/* Hero Section */}
//       <section className="text-center py-16 bg-card rounded-lg shadow-lg">
//         <div className="container mx-auto px-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
//             أمّن رحلتك بثقة مع تأمين مصر لسيارتك
//           </h1>
//           <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
//             نقدم حلول تأمين سيارات موثوقة ومصممة خصيصًا لتلبية احتياجاتك في مصر. انعم براحة البال على الطريق مع خيارات تغطية شاملة وخدمة عملاء استثنائية.
//           </p>
//           <div className="space-x-4 rtl:space-x-reverse">
//             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
//               <Link href="/#get-quote">احصل على عرض سعر مجاني الآن</Link>
//             </Button>
//             <Button asChild variant="outline" size="lg">
//               <Link href="/#insurance-plans">اكتشف خطط التأمين المتنوعة</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* About Us Snippet */}
//       <section id="about-us" className="py-12">
//         <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <Image 
//               src="https://placehold.co/600x400.png?text=سيارات+حديثة+ومؤمنة" 
//               alt="مجموعة سيارات حديثة على الطريق" 
//               width={600} 
//               height={400} 
//               className="rounded-lg shadow-xl object-cover"
//               data-ai-hint="modern cars road" 
//             />
//           </div>
//           <div className="text-center md:text-right">
//             <h2 className="text-3xl font-bold text-foreground mb-4">شريكك الموثوق لتأمين سيارتك في مصر</h2>
//             <p className="text-muted-foreground mb-4">
//               "تأمين مصر" هي شركة متخصصة في تقديم حلول تأمين سيارات تتسم بالشفافية، الأسعار المعقولة، والموثوقية العالية لجميع عملائنا في جمهورية مصر العربية. نحن نتفهم تمامًا الاحتياجات المحلية ونلتزم بتقديم وثائق تأمين توفر الحماية الحقيقية لك ولمركبتك.
//             </p>
//             <p className="text-muted-foreground">
//               مهمتنا هي تبسيط إجراءات التأمين، وجعلها في متناول الجميع ومفهومة بوضوح. مع تركيزنا الأساسي على رضا العملاء واستخدام أحدث التقنيات، نطمح لأن نكون الخيار الأول والرائد لتأمين السيارات في المنطقة.
//             </p>
//           </div>
//         </div>
//       </section>
      
//       {/* Premium Calculator & Lead Capture Section */}
//       <section id="get-quote" className="py-12 bg-background">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-foreground mb-10">
//             احصل على عرض تأمينك الشخصي لسيارتك
//           </h2>
//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             <div id="calculator" className="flex justify-center md:justify-start">
//               <PremiumCalculator />
//             </div>
//             <div className="flex justify-center md:justify-end">
//               <LeadCaptureForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Insurance Types Section */}
//       <section id="insurance-plans" className="py-12">
//         <div className="container mx-auto px-6">
//           <InsurancePlanTable />
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section id="why-choose-us" className="py-12 bg-card rounded-lg shadow-lg">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-foreground mb-12">
//             لماذا تختار "تأمين مصر" لسيارتك؟
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {whyChooseUsPoints.map((point, index) => (
//               <div key={index} className="text-center p-6 bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
//                 <div className="flex justify-center mb-4">{point.icon}</div>
//                 <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
//                 <p className="text-muted-foreground text-sm">{point.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Insurance Education Snippet */}
//       <section id="insurance-education" className="py-12">
//         <div className="container mx-auto px-6 text-center">
//            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
//           <h2 className="text-3xl font-bold text-foreground mb-4">افهم وثيقة تأمين سيارتك بشكل أفضل</h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//             قد يبدو تأمين السيارات معقدًا للوهلة الأولى، ولكنه مصمم أساسًا لحمايتك من الخسائر المالية الكبيرة التي قد تنجم عن الحوادث، السرقة، أو غيرها من الأحداث غير المتوقعة. تقدم خطط التأمين المختلفة مستويات تغطية متفاوتة، بدءًا من المسؤولية الأساسية تجاه الغير وصولاً إلى الحماية الشاملة التي تغطي الأضرار التي تلحق بمركبتك. فهم تفاصيل وثيقتك هو المفتاح لضمان حصولك على التغطية المناسبة لاحتياجاتك والشعور بالأمان التام على الطريق.
//           </p>
//           <Button asChild variant="outline">
//             <Link href="/#faq">تعرّف على المزيد في قسم الأسئلة الشائعة</Link>
//           </Button>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="py-12">
//         <div className="container mx-auto px-6 max-w-3xl">
//           <div className="text-center mb-12">
//              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
//             <h2 className="text-3xl font-bold text-foreground">الأسئلة الشائعة حول تأمين السيارات</h2>
//           </div>
//           <Accordion type="single" collapsible className="w-full">
//             {faqItems.map((item, index) => (
//               <AccordionItem key={index} value={`item-${index}`}>
//                 <AccordionTrigger className="text-lg hover:text-primary text-right">
//                   <div className="flex items-center gap-2">
//                     <ShieldQuestion className="h-5 w-5 text-primary/80 shrink-0" />
//                     {item.question}
//                   </div>
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground text-base pr-7 text-right">
//                   {item.answer}
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </section>
//     </div>
//   );
// }
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PremiumCalculator from '@/components/PremiumCalculator';
import InsurancePlanTable from '@/components/InsurancePlanTable';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqItems } from '@/lib/constants';
import { CheckSquare, Users, TrendingUp, MessageSquareHeart, FileText, HelpCircle, ShieldQuestion, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, SetStateAction } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-slide images
  const autoSlideImages = [
    '/images/car-insurance-hero.jpg',
    '/images/accident-coverage.jpg',
    '/images/vehicle-protection.jpg',
    '/images/insurance-safety.jpg'
  ];

  const whyChooseUsPoints = [
    { icon: <CheckSquare className="h-8 w-8 text-primary" />, title: 'تسويات مطالبات سريعة', description: 'تمتع بمعالجة مطالبات سريعة وخالية من المتاعب، لتستأنف حياتك بدون تأخير.' },
    { icon: <Users className="h-8 w-8 text-primary" />, title: 'تغطية شاملة ومخصصة', description: 'خطط تأمين مصممة بعناية لتناسب احتياجاتك وميزانيتك الخاصة، مع تغطية لكل التفاصيل.' },
    { icon: <TrendingUp className="h-8 w-8 text-primary" />, title: 'أسعار تنافسية وعادلة', description: 'احصل على أفضل قيمة مقابل أموالك مع أسعارنا المدروسة والمعقولة في السوق المصري.' },
    { icon: <MessageSquareHeart className="h-8 w-8 text-primary" />, title: 'دعم عملاء متميز', description: 'فريقنا المتفاني والودود دائمًا هنا لمساعدتك والإجابة على استفساراتك بكفاءة عالية.' },
  ];

  // Auto-advance slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % autoSlideImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoSlideImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % autoSlideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + autoSlideImages.length) % autoSlideImages.length);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-16 bg-card rounded-lg shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            أمّن رحلتك بثقة مع تأمين مصر لسيارتك
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
            نقدم حلول تأمين سيارات موثوقة ومصممة خصيصًا لتلبية احتياجاتك في مصر. انعم براحة البال على الطريق مع خيارات تغطية شاملة وخدمة عملاء استثنائية.
          </p>
          <div className="space-x-4 rtl:space-x-reverse">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#get-quote">احصل على عرض سعر مجاني الآن</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#insurance-plans">اكتشف خطط التأمين المتنوعة</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section with Auto-Dynamic Slider */}
      <section id="about-us" className="py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Auto-Dynamic Image Slider */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-xl">
            {/* Image Container */}
            <div className="relative w-full h-full">
              {autoSlideImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image 
                    src={image}
                    alt={`صورة تأمين السيارات ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="الصورة السابقة"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="الصورة التالية"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 rtl:space-x-reverse">
              {autoSlideImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary scale-110' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`انتقل إلى الصورة ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentSlide + 1} / {autoSlideImages.length}
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-right">
            <h2 className="text-3xl font-bold text-foreground mb-4">شريكك الموثوق لتأمين سيارتك في مصر</h2>
            <p className="text-muted-foreground mb-4">
              "تأمين مصر" هي شركة متخصصة في تقديم حلول تأمين سيارات تتسم بالشفافية، الأسعار المعقولة، والموثوقية العالية لجميع عملائنا في جمهورية مصر العربية. نحن نتفهم تمامًا الاحتياجات المحلية ونلتزم بتقديم وثائق تأمين توفر الحماية الحقيقية لك ولمركبتك.
            </p>
            <p className="text-muted-foreground">
              مهمتنا هي تبسيط إجراءات التأمين، وجعلها في متناول الجميع ومفهومة بوضوح. مع تركيزنا الأساسي على رضا العملاء واستخدام أحدث التقنيات، نطمح لأن نكون الخيار الأول والرائد لتأمين السيارات في المنطقة.
            </p>
          </div>
        </div>
      </section>
      
      {/* Premium Calculator & Lead Capture Section */}
      <section id="get-quote" className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            احصل على عرض تأمينك الشخصي لسيارتك
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div id="calculator" className="flex justify-center md:justify-start">
              <PremiumCalculator />
            </div>
            <div className="flex justify-center md:justify-end">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section id="insurance-plans" className="py-12">
        <div className="container mx-auto px-6">
          <InsurancePlanTable />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-12 bg-card rounded-lg shadow-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            لماذا تختار "تأمين مصر" لسيارتك؟
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Insurance Education Snippet */}
      <section id="insurance-education" className="py-12">
        <div className="container mx-auto px-6 text-center">
           <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">افهم وثيقة تأمين سيارتك بشكل أفضل</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            قد يبدو تأمين السيارات معقدًا للوهلة الأولى، ولكنه مصمم أساسًا لحمايتك من الخسائر المالية الكبيرة التي قد تنجم عن الحوادث، السرقة، أو غيرها من الأحداث غير المتوقعة. تقدم خطط التأمين المختلفة مستويات تغطية متفاوتة، بدءًا من المسؤولية الأساسية تجاه الغير وصولاً إلى الحماية الشاملة التي تغطي الأضرار التي تلحق بمركبتك. فهم تفاصيل وثيقتك هو المفتاح لضمان حصولك على التغطية المناسبة لاحتياجاتك والشعور بالأمان التام على الطريق.
          </p>
          <Button asChild variant="outline">
            <Link href="/#faq">تعرّف على المزيد في قسم الأسئلة الشائعة</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
             <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground">الأسئلة الشائعة حول تأمين السيارات</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg hover:text-primary text-right">
                  <div className="flex items-center gap-2">
                    <ShieldQuestion className="h-5 w-5 text-primary/80 shrink-0" />
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pr-7 text-right">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}