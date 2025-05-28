
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutDashboard, Users, BarChart3, Settings, ShieldCheck, Phone, Mail, Car, CalendarDays, MapPin, MessageCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import type { LeadFormValues } from '@/components/LeadCaptureForm';

export type Lead = LeadFormValues & {
  id: string;
  submittedAt: string; // Will be stored as a string after conversion
};

async function getLeads(): Promise<Lead[]> {
  try {
    const leadsCollection = collection(db, 'leads');
    const q = query(leadsCollection, orderBy('submittedAt', 'desc'));
    const leadsSnapshot = await getDocs(q);
    
    const leadsData = leadsSnapshot.docs.map(doc => {
      const data = doc.data();
      const submittedAtTimestamp = data.submittedAt as Timestamp; // Assert type
      return {
        id: doc.id,
        name: data.name || '',
        phone: data.phone || '',
        email: data.email || '',
        vehicleType: data.vehicleType || '',
        yearOfManufacture: data.yearOfManufacture || 0,
        region: data.region || '',
        message: data.message || '',
        submittedAt: submittedAtTimestamp ? submittedAtTimestamp.toDate().toLocaleString('ar-EG', { dateStyle: 'medium', timeStyle: 'short' }) : 'غير متوفر',
      } as Lead;
    });
    return leadsData;
  } catch (error) {
    console.error("Error fetching leads: ", error);
    return []; // Return empty array on error
  }
}


export default async function AdminDashboardPage() {
  const leads = await getLeads();

  return (
    <div className="space-y-8">
      <section className="text-center py-10 bg-card rounded-lg shadow-lg">
        <LayoutDashboard className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary mb-2">لوحة تحكم المسؤول</h1>
        <p className="text-lg text-foreground max-w-xl mx-auto">
          مرحباً بك في لوحة تحكم المسؤول. هنا يمكنك إدارة جوانب مختلفة من التطبيق.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المستخدمين (مثال)</CardTitle>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +20.1% عن الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">العملاء المحتملون الجدد</CardTitle>
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leads.length}</div>
            <p className="text-xs text-muted-foreground">
              إجمالي العملاء المسجلين
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إعدادات النظام</CardTitle>
            <Settings className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              إدارة التكوينات العامة. (قيد التطوير)
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <ShieldCheck className="h-7 w-7 text-primary" />
              العملاء المحتملون المسجلون
            </CardTitle>
            <CardDescription>قائمة بالعملاء المحتملين الذين قدموا طلبات عروض أسعار من خلال الموقع.</CardDescription>
          </CardHeader>
          <CardContent>
            {leads.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">الاسم</TableHead>
                      <TableHead><Phone className="inline h-4 w-4 ml-1" />الهاتف</TableHead>
                      <TableHead><Mail className="inline h-4 w-4 ml-1" />البريد الإلكتروني</TableHead>
                      <TableHead><Car className="inline h-4 w-4 ml-1" />نوع السيارة</TableHead>
                      <TableHead><CalendarDays className="inline h-4 w-4 ml-1" />سنة الصنع</TableHead>
                      <TableHead><MapPin className="inline h-4 w-4 ml-1" />المنطقة</TableHead>
                      <TableHead>تاريخ الإرسال</TableHead>
                      <TableHead>الرسالة</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell className="font-medium">{lead.name}</TableCell>
                        <TableCell>{lead.phone}</TableCell>
                        <TableCell>{lead.email}</TableCell>
                        <TableCell>{lead.vehicleType}</TableCell>
                        <TableCell className="text-center">{lead.yearOfManufacture}</TableCell>
                        <TableCell>{lead.region}</TableCell>
                        <TableCell>{lead.submittedAt}</TableCell>
                        <TableCell>
                          {lead.message ? (
                            <div className="flex items-center gap-1 text-sm text-muted-foreground" title={lead.message}>
                              <MessageCircle className="h-4 w-4 shrink-0" />
                              <span className="truncate max-w-[150px]">{lead.message}</span>
                            </div>
                          ) : (
                            <span className="text-muted-foreground/70">-</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-4">لا يوجد عملاء محتملون مسجلون حاليًا في قاعدة البيانات.</p>
            )}
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>الأنشطة الأخيرة (مثال)</CardTitle>
            <CardDescription>قائمة بأحدث الإجراءات في النظام.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>تم تسجيل عميل محتمل جديد: {leads.length > 0 ? leads[0].name : 'لا يوجد'}</li>
              <li>تم تحديث إعدادات النظام (مثال)</li>
              <li>تمت مراجعة خطة تأمين (مثال)</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
