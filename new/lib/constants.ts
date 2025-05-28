// Comprehensive car types list in both Arabic and English
export const vehicleTypes = [
  // Small Cars
  'سيارة صغيرة (هاتشباك)',
  'سيارة صغيرة (سيدان)',
  'سيارة صغيرة (كوبيه)',
  
  // Medium Cars
  'سيارة متوسطة (سيدان)',
  'سيارة متوسطة (هاتشباك)',
  'سيارة متوسطة (كوبيه)',
  'سيارة متوسطة (واجن)',
  
  // Large Cars
  'سيارة كبيرة (سيدان)',
  'سيارة كبيرة (ليموزين)',
  
  // SUVs
  'دفع رباعي صغير (SUV)',
  'دفع رباعي متوسط (SUV)',
  'دفع رباعي كبير (SUV)',
  'دفع رباعي فاخر (SUV)',
  'كروس أوفر (Crossover)',
  
  // Trucks
  'شاحنة صغيرة (بيك أب)',
  'شاحنة متوسطة',
  'شاحنة كبيرة',
  
  // Vans & Buses
  'حافلة صغيرة (ميني فان)',
  'حافلة متوسطة',
  'حافلة كبيرة',
  'فان تجاري',
  
  // Sports & Luxury
  'سيارة رياضية',
  'سيارة فاخرة',
  'سيارة كلاسيكية',
  
  // Other
  'دراجة نارية',
  'سيارة كهربائية'
] as const;

export const vehicleTypesMap = {
  // Small Cars
  'سيارة صغيرة (هاتشباك)': 'Small Car (Hatchback)',
  'سيارة صغيرة (سيدان)': 'Small Car (Sedan)',
  'سيارة صغيرة (كوبيه)': 'Small Car (Coupe)',
  
  // Medium Cars
  'سيارة متوسطة (سيدان)': 'Medium Car (Sedan)',
  'سيارة متوسطة (هاتشباك)': 'Medium Car (Hatchback)',
  'سيارة متوسطة (كوبيه)': 'Medium Car (Coupe)',
  'سيارة متوسطة (واجن)': 'Medium Car (Wagon)',
  
  // Large Cars
  'سيارة كبيرة (سيدان)': 'Large Car (Sedan)',
  'سيارة كبيرة (ليموزين)': 'Large Car (Limousine)',
  
  // SUVs
  'دفع رباعي صغير (SUV)': 'Small SUV',
  'دفع رباعي متوسط (SUV)': 'Medium SUV',
  'دفع رباعي كبير (SUV)': 'Large SUV',
  'دفع رباعي فاخر (SUV)': 'Luxury SUV',
  'كروس أوفر (Crossover)': 'Crossover',
  
  // Trucks
  'شاحنة صغيرة (بيك أب)': 'Small Truck (Pickup)',
  'شاحنة متوسطة': 'Medium Truck',
  'شاحنة كبيرة': 'Large Truck',
  
  // Vans & Buses
  'حافلة صغيرة (ميني فان)': 'Minibus (Minivan)',
  'حافلة متوسطة': 'Medium Bus',
  'حافلة كبيرة': 'Large Bus',
  'فان تجاري': 'Commercial Van',
  
  // Sports & Luxury
  'سيارة رياضية': 'Sports Car',
  'سيارة فاخرة': 'Luxury Car',
  'سيارة كلاسيكية': 'Classic Car',
  
  // Other
  'دراجة نارية': 'Motorcycle',
  'سيارة كهربائية': 'Electric Car'
} as const;

// Car manufacturers list in both Arabic and English
export const carManufacturers = [
  // Japanese
  { arabic: 'تويوتا', english: 'Toyota' },
  { arabic: 'هوندا', english: 'Honda' },
  { arabic: 'نيسان', english: 'Nissan' },
  { arabic: 'مازدا', english: 'Mazda' },
  { arabic: 'سوبارو', english: 'Subaru' },
  { arabic: 'ميتسوبيشي', english: 'Mitsubishi' },
  { arabic: 'سوزوكي', english: 'Suzuki' },
  { arabic: 'لكزس', english: 'Lexus' },
  { arabic: 'إنفينيتي', english: 'Infiniti' },
  { arabic: 'أكيورا', english: 'Acura' },
  
  // American
  { arabic: 'فورد', english: 'Ford' },
  { arabic: 'شيفروليه', english: 'Chevrolet' },
  { arabic: 'جي إم سي', english: 'GMC' },
  { arabic: 'دودج', english: 'Dodge' },
  { arabic: 'جيب', english: 'Jeep' },
  { arabic: 'كاديلاك', english: 'Cadillac' },
  { arabic: 'كرايسلر', english: 'Chrysler' },
  { arabic: 'لينكولن', english: 'Lincoln' },
  { arabic: 'بويك', english: 'Buick' },
  { arabic: 'تسلا', english: 'Tesla' },
  { arabic: 'رام', english: 'RAM' },
  
  // German
  { arabic: 'مرسيدس بنز', english: 'Mercedes-Benz' },
  { arabic: 'بي إم دبليو', english: 'BMW' },
  { arabic: 'أودي', english: 'Audi' },
  { arabic: 'فولكس فاجن', english: 'Volkswagen' },
  { arabic: 'بورش', english: 'Porsche' },
  { arabic: 'أوبل', english: 'Opel' },
  
  // Korean
  { arabic: 'هيونداي', english: 'Hyundai' },
  { arabic: 'كيا', english: 'Kia' },
  { arabic: 'جينيسيس', english: 'Genesis' },
  
  // Italian
  { arabic: 'فيات', english: 'Fiat' },
  { arabic: 'ألفا روميو', english: 'Alfa Romeo' },
  { arabic: 'فيراري', english: 'Ferrari' },
  { arabic: 'لامبورغيني', english: 'Lamborghini' },
  { arabic: 'مازيراتي', english: 'Maserati' },
  
  // French
  { arabic: 'رينو', english: 'Renault' },
  { arabic: 'بيجو', english: 'Peugeot' },
  { arabic: 'سيتروين', english: 'Citroen' },
  { arabic: 'بوجاتي', english: 'Bugatti' },
  
  // British
  { arabic: 'لاند روفر', english: 'Land Rover' },
  { arabic: 'جاكوار', english: 'Jaguar' },
  { arabic: 'ميني', english: 'Mini' },
  { arabic: 'رولز رويس', english: 'Rolls-Royce' },
  { arabic: 'بنتلي', english: 'Bentley' },
  { arabic: 'أستون مارتن', english: 'Aston Martin' },
  { arabic: 'لوتس', english: 'Lotus' },
  { arabic: 'ماكلارين', english: 'McLaren' },
  
  // Swedish
  { arabic: 'فولفو', english: 'Volvo' },
  { arabic: 'ساب', english: 'Saab' },
  
  // Chinese
  { arabic: 'بي واي دي', english: 'BYD' },
  { arabic: 'جيلي', english: 'Geely' },
  { arabic: 'شيري', english: 'Chery' },
  { arabic: 'هافال', english: 'Haval' },
  { arabic: 'جريت وول', english: 'Great Wall' },
  { arabic: 'نيو', english: 'NIO' },
  
  // Indian
  { arabic: 'تاتا', english: 'Tata' },
  { arabic: 'ماهيندرا', english: 'Mahindra' },
  { arabic: 'ماروتي سوزوكي', english: 'Maruti Suzuki' },
  
  // Czech
  { arabic: 'سكودا', english: 'Škoda' },
  
  // Spanish
  { arabic: 'سيات', english: 'SEAT' },
  
  // Romanian
  { arabic: 'داسيا', english: 'Dacia' },
  
  // Malaysian
  { arabic: 'بروتون', english: 'Proton' },
  
  // Vietnamese
  { arabic: 'فينفاست', english: 'VinFast' }
];

// Original constants
export type InsurancePlan = {
  name: string;
  price: string;
  features: string[];
  idealFor: string;
};

export const insurancePlans: InsurancePlan[] = [
  {
    name: 'تغطية أساسية',
    price: 'تبدأ من 1,200 جنيه مصري/سنة',
    features: [
      'مسؤولية الطرف الثالث',
      'مساعدة على الطريق (محدودة)',
      'مساعدة قانونية',
    ],
    idealFor: 'للسائقين المهتمين بالميزانية ويحتاجون إلى تغطية أساسية.',
  },
  {
    name: 'تأمين شامل آمن',
    price: 'تبدأ من 2,500 جنيه مصري/سنة',
    features: [
      'جميع مزايا التغطية الأساسية',
      'تغطية الأضرار الذاتية (الحوادث، السرقة، الحريق)',
      'تغطية الحوادث الشخصية للسائق',
      'مساعدة على الطريق 24/7',
    ],
    idealFor: 'للسائقين الباحثين عن حماية كاملة لمركبتهم وأنفسهم.',
  },
  {
    name: 'بريميوم بلس',
    price: 'تبدأ من 4,000 جنيه مصري/سنة',
    features: [
      'جميع مزايا تأمين شامل آمن',
      'إصلاح في الوكالة',
      'تغطية بدون استهلاك',
      'تغطية حوادث الركاب',
      'سيارة بديلة أثناء الإصلاحات',
    ],
    idealFor: 'لأصحاب السيارات الجديدة وأولئك الذين يريدون أقصى درجات راحة البال.',
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: 'ما هي المستندات التي أحتاجها للحصول على تأمين السيارة؟',
    answer: 'عادةً، ستحتاج إلى بطاقة الرقم القومي، رخصة السيارة (الرخصة)، ورخصة القيادة. قد تختلف المتطلبات المحددة قليلاً.',
  },
  {
    question: 'كيف يتم احتساب قسط التأمين الخاص بي؟',
    answer: 'يعتمد قسط التأمين الخاص بك على عوامل مثل نوع السيارة، سنة الصنع، عمر السائق، تاريخ القيادة، المنطقة الجغرافية، ومستوى التغطية المختار.',
  },
  {
    question: 'ماذا يجب أن أفعل في حال وقوع حادث؟',
    answer: 'حافظ على هدوئك. تأكد من سلامة الجميع. إذا لزم الأمر، اتصل بخدمات الطوارئ. اتصل بخط مطالباتنا الساخن فورًا للإبلاغ عن الحادث. التقط صورًا للضرر وتبادل المعلومات مع الأطراف الأخرى المعنية.',
  },
  {
    question: 'هل يمكنني تغيير خطة التأمين الخاصة بي في منتصف المدة؟',
    answer: 'هذا يعتمد على شروط البوليصة. قد تكون بعض التغييرات ممكنة عند التجديد أو بشروط معينة. يرجى الاتصال بخدمة العملاء للحصول على التفاصيل.',
  },
  {
    question: 'هل خدمة المساعدة على الطريق مشمولة في جميع الخطط؟',
    answer: 'غالبًا ما يتم تضمين المساعدة الأساسية على الطريق، مع توفر دعم أكثر شمولاً في الخطط ذات المستوى الأعلى. تحقق من تفاصيل خطتك المحددة للتغطية.',
  },
];

export const geographicRegions = [
  'القاهرة',
  'الجيزة',
  'الإسكندرية',
  'الدقهلية',
  'الشرقية',
  'القليوبية',
  'كفر الشيخ',
  'الغربية',
  'المنوفية',
  'البحيرة',
  'الإسماعيلية',
  'بور سعيد',
  'السويس',
  'شمال سيناء',
  'جنوب سيناء',
  'الفيوم',
  'بني سويف',
  'المنيا',
  'أسيوط',
  'سوهاج',
  'قنا',
  'الأقصر',
  'أسوان',
  'البحر الأحمر',
  'الوادي الجديد',
  'مطروح'
] as const;

export const regionRiskFactors = {
  'القاهرة': 1.2,
  'الجيزة': 1.15,
  'الإسكندرية': 1.1,
  'الدقهلية': 1.0,
  'الشرقية': 1.0,
  'القليوبية': 1.1,
  'كفر الشيخ': 0.9,
  'الغربية': 0.95,
  'المنوفية': 0.9,
  'البحيرة': 0.9,
  'الإسماعيلية': 1.0,
  'بور سعيد': 1.05,
  'السويس': 1.0,
  'شمال سيناء': 0.8,
  'جنوب سيناء': 0.85,
  'الفيوم': 0.8,
  'بني سويف': 0.8,
  'المنيا': 0.8,
  'أسيوط': 0.8,
  'سوهاج': 0.8,
  'قنا': 0.8,
  'الأقصر': 0.9,
  'أسوان': 0.85,
  'البحر الأحمر': 0.9,
  'الوادي الجديد': 0.7,
  'مطروح': 0.8
} as const;

export type VehicleType = typeof vehicleTypes[number];
export type GeographicRegion = typeof geographicRegions[number];
