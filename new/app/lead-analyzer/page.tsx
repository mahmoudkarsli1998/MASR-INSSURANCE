
"use client";

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { classifyLeadInterest, type ClassifyLeadInterestInput, type ClassifyLeadInterestOutput } from '@/ai/flows/lead-interest-classifier';
import { vehicleTypes, geographicRegions } from '@/lib/constants';
import { BrainCircuit, Zap, Thermometer, TrendingUp, Lightbulb, AlertTriangle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

const leadAnalyzerSchema = z.object({
  calculatorInteraction: z.coerce
    .number()
    .int()
    .min(0, 'لا يمكن أن يكون سالبًا')
    .max(100, 'العدد كبير جداً'),
  websiteVisits: z.coerce
    .number()
    .int()
    .min(0, 'لا يمكن أن يكون سالبًا')
    .max(500, 'العدد كبير جداً'),
  age: z.coerce
    .number()
    .int()
    .min(18, 'يجب أن يكون العمر 18 عامًا أو أكبر')
    .max(100, 'العمر كبير جداً'),
  region: z.string().min(1, 'المنطقة مطلوبة'),
  vehicleType: z.string().min(1, 'نوع المركبة مطلوب'),
});

type LeadAnalyzerFormValues = z.infer<typeof leadAnalyzerSchema>;

export default function LeadAnalyzerPage() {
  const { toast } = useToast();
  const [analysisResult, setAnalysisResult] = useState<ClassifyLeadInterestOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<LeadAnalyzerFormValues>({
    resolver: zodResolver(leadAnalyzerSchema),
    defaultValues: {
      calculatorInteraction: 1,
      websiteVisits: 3,
      age: 30,
    },
  });

  const onSubmit: SubmitHandler<LeadAnalyzerFormValues> = async (data) => {
    setIsLoading(true);
    setAnalysisResult(null);
    setError(null);
    
    try {
      // Validate that the AI service is available
      if (!classifyLeadInterest) {
        throw new Error('خدمة الذكاء الاصطناعي غير متاحة حالياً');
      }

      const result = await classifyLeadInterest(data);
      
      if (!result || !result.interestLevel) {
        throw new Error('لم يتم الحصول على نتيجة صحيحة من التحليل');
      }

      setAnalysisResult(result);
      
      const translatedInterestLevel = result.interestLevel === 'hot' 
        ? 'حار' 
        : result.interestLevel === 'warm' 
        ? 'دافئ' 
        : 'بارد';
        
      toast({
        title: 'اكتمل التحليل',
        description: `تم تصنيف العميل المحتمل كـ ${translatedInterestLevel}.`,
      });
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'حدث خطأ غير متوقع';
        
      console.error('Error classifying lead:', error);
      setError(errorMessage);
      
      toast({
        title: 'فشل التحليل',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const getInterestLevelColor = (level?: 'hot' | 'warm' | 'cold') => {
    switch (level) {
      case 'hot': return 'text-red-500';
      case 'warm': return 'text-orange-500';
      case 'cold': return 'text-blue-500';
      default: return 'text-foreground';
    }
  };

  const getInterestLevelBg = (level?: 'hot' | 'warm' | 'cold') => {
    switch (level) {
      case 'hot': return 'bg-red-50 border-red-200';
      case 'warm': return 'bg-orange-50 border-orange-200';
      case 'cold': return 'bg-blue-50 border-blue-200';
      default: return 'bg-muted/50';
    }
  };

  const translateInterestLevel = (level?: 'hot' | 'warm' | 'cold') => {
    switch (level) {
      case 'hot': return 'حار';
      case 'warm': return 'دافئ';
      case 'cold': return 'بارد';
      default: return '';
    }
  };

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-card rounded-lg shadow-lg">
        <BrainCircuit className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary mb-4">محلل اهتمام العملاء المحتملين بالذكاء الاصطناعي</h1>
        <p className="text-lg text-foreground max-w-xl mx-auto">
          استفد من الذكاء الاصطناعي لتصنيف اهتمام العملاء المحتملين. أدخل بيانات العميل المحتمل أدناه لمعرفة التصنيف.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          (هذا عرض توضيحي لقدرة الذكاء الاصطناعي التوليدي)
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">إدخال بيانات العميل المحتمل</CardTitle>
            <CardDescription>أدخل معلومات العميل المحتمل لتحليلها بواسطة الذكاء الاصطناعي.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="calculatorInteraction"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>تفاعلات الحاسبة</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="مثال: 5" 
                          {...field}
                          min={0}
                          max={100}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="websiteVisits"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>زيارات الموقع</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="مثال: 10" 
                          {...field}
                          min={0}
                          max={500}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>العمر</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="مثال: 35" 
                          {...field}
                          min={18}
                          max={100}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>المنطقة الجغرافية</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر المنطقة" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {geographicRegions.map((region) => (
                            <SelectItem key={region} value={region}>
                              {region}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vehicleType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نوع المركبة</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر نوع المركبة" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {vehicleTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" 
                  disabled={isLoading}
                >
                  {isLoading ? 'جارٍ التحليل...' : (
                    <>
                      <Zap className="mr-2 h-4 w-4" /> تحليل العميل المحتمل
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {error && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isLoading && (
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">التحليل جارٍ...</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-64">
              <BrainCircuit className="h-16 w-16 text-primary animate-pulse mb-4" />
              <p className="text-muted-foreground mb-4">الذكاء الاصطناعي يعالج البيانات. يرجى الانتظار.</p>
              <Progress value={50} className="w-3/4 animate-pulse" />
            </CardContent>
          </Card>
        )}

        {analysisResult && !isLoading && (
          <Card className={`shadow-xl border-2 ${getInterestLevelBg(analysisResult.interestLevel)}`}>
            <CardHeader>
              <CardTitle className="text-2xl">نتيجة تحليل الذكاء الاصطناعي</CardTitle>
              <CardDescription>تصنيف الذكاء الاصطناعي لمستوى اهتمام العميل المحتمل.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">مستوى الاهتمام</Label>
                <div className={`flex items-center gap-2 text-3xl font-bold ${getInterestLevelColor(analysisResult.interestLevel)}`}>
                  <Thermometer className="h-8 w-8" />
                  <span className="capitalize">{translateInterestLevel(analysisResult.interestLevel)}</span>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">درجة الاهتمام</Label>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-semibold text-foreground">
                    {(analysisResult.score * 100).toFixed(0)}%
                  </span>
                </div>
                <Progress 
                  value={analysisResult.score * 100} 
                  className="h-3"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">الأساس المنطقي</Label>
                <div className="flex items-start gap-2 mt-2 p-3 bg-muted/50 rounded-md border">
                  <Lightbulb className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">{analysisResult.rationale}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                هذا التحليل تم إنشاؤه بواسطة الذكاء الاصطناعي ولأغراض العرض التوضيحي.
              </p>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}