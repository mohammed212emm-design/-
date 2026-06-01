# يمن ماركت — Yemen Market

منصة تسوق إلكتروني متكاملة مخصصة للسوق اليمني، مبنية بـ HTML وTailwind CSS وVanilla JavaScript.

## المميزات

- واجهة عربية RTL كاملة بخط Tajawal
- 25 منتجاً موزعاً على 4 أقسام (نسائي، رجالي، أطفال، منزلي)
- قسم عروض عيد الأضحى مع عداد تنازلي
- تصفية فورية بين الأقسام مع أنيميشن سلس
- سلة تسوق جانبية تفاعلية
- شريط بحث
- قائمة المفضلة
- صفحة تسجيل دخول + إنشاء حساب جديد مع التحقق من البيانات

## التقنيات

- **HTML5** — هيكل الصفحات
- **Tailwind CSS** (CDN) — التنسيق
- **Vanilla JavaScript** — التفاعل والتصفية
- **Google Fonts** (Tajawal) — الخط العربي

## تشغيل المشروع محلياً

```bash
# الخيار 1: فتح مباشر
open index.html

# الخيار 2: خادم محلي بسيط
npx serve .
# أو
python3 -m http.server 8000
```

## هيكل الملفات

```
/
├── index.html      # الصفحة الرئيسية للمتجر
├── login.html      # صفحة تسجيل الدخول والتسجيل
├── netlify.toml    # إعدادات Netlify
└── README.md
```

## إضافة منتجات جديدة

افتح `index.html` وابحث عن `const products = [` ثم أضف كائنات بالشكل التالي:

```javascript
{
  id: 26,                      // رقم فريد
  name: "اسم المنتج",
  category: ["women", "eid"],  // الأقسام: all, women, men, kids, home, eid
  price: 3500,                 // السعر بالريال
  originalPrice: 5000,         // السعر الأصلي (اختياري للتخفيض)
  badge: "eid",                // eid | sale | new
  image: "https://...",        // رابط الصورة
  rating: 4.7,
  reviews: 88
}
```
