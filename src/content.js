import loungePhoto from './assets/photos/lounge.jpg'
import heroLoungePhoto from './assets/photos/hero-lounge.png'
import balootPhoto from './assets/photos/baloot.jpg'
import tableTennisPhoto from './assets/photos/table-tennis.jpg'
import billiardsPhoto from './assets/photos/billiards.jpg'
import airHockeyPhoto from './assets/photos/air-hockey.jpg'
import fifaPhoto from './assets/photos/fifa.jpg'
import playstationPhoto from './assets/photos/playstation.jpg'
import tetoArt from './assets/teto-art.svg'

export const heroImage = heroLoungePhoto

export const contactLinks = {
  maps: 'https://maps.app.goo.gl/LJoh32rZRuPBGQjb8?g_st=ic',
  phone: 'tel:+966555577457',
  whatsapp: 'https://wa.me/966555577457',
}

export const games = [
  { key: 'baloot', featured: true, image: balootPhoto, name: { ar: 'بلوت', en: 'Baloot' }, alt: { ar: 'لاعب يوزع أوراق اللعب على طاولة خشبية', en: 'A player dealing cards on a wooden table' } },
  { key: 'table-tennis', image: tableTennisPhoto, name: { ar: 'تنس طاولة', en: 'Table Tennis' }, alt: { ar: 'مضرب وكرة على طاولة تنس', en: 'Paddle and ball on a table tennis table' } },
  { key: 'billiards', image: billiardsPhoto, name: { ar: 'بلياردو', en: 'Billiards' }, alt: { ar: 'طاولة بلياردو وكرات جاهزة للعب', en: 'Pool table and balls ready for a game' } },
  { key: 'air-hockey', image: airHockeyPhoto, name: { ar: 'هوكي طاولة', en: 'Air Hockey' }, alt: { ar: 'قرص أحمر على طاولة هوكي', en: 'Red puck on an air hockey table' } },
  { key: 'fifa', image: fifaPhoto, name: { ar: 'فيفا', en: 'FIFA' }, alt: { ar: 'لاعبان يحملان وحدتي تحكم للألعاب', en: 'Two players holding game controllers' } },
  { key: 'playstation', image: playstationPhoto, name: { ar: 'بلايستيشن 5', en: 'PlayStation 5' }, alt: { ar: 'جهاز بلايستيشن 5 ووحدة التحكم', en: 'PlayStation 5 console and controller' } },
  { key: 'teto', image: tetoArt, name: { ar: 'تيتو', en: 'Teto' }, alt: { ar: 'رسم تجريدي لطاولة ألعاب', en: 'Abstract tabletop game artwork' } },
]

export const hours = [
  { day: 'sunday' }, { day: 'monday' }, { day: 'tuesday' }, { day: 'wednesday' }, { day: 'thursday', allDay: true }, { day: 'friday', closed: true }, { day: 'saturday', closed: true },
]

export const copy = {
  ar: {
    brandHome: 'كهف ثقة — الرئيسية', mainNav: 'القائمة الرئيسية', languageLabel: 'اختر اللغة', openMenu: 'افتح القائمة', closeMenu: 'أغلق القائمة', skipLink: 'الانتقال إلى المحتوى',
    nav: { home: 'الرئيسية', games: 'الألعاب', hours: 'أوقات العمل', events: 'الفعاليات', contact: 'تواصل معنا' },
    metaDescription: 'كهف ثقة: مش هتقدر تغمض عينيك. بلوت، ألعاب طاولة، بلياردو، بلايستيشن، وليالي الخميس.',
    heroAlt: 'جلسات ومقاعد داخل مقهى دافئ بجدران مقوسة', heroTitle: 'كهف ثقة', heroSubtitle: 'مش هتقدر تغمض عينيك', exploreGames: 'استكشف الألعاب',
    gamesKicker: 'على راحتك', gamesTitle: 'اللعبة اللي تجمعنا', gamesIntro: 'من البلوت إلى ألعاب الطاولة والبلايستيشن، اختر جوّك.', featured: 'اللعبة المفضلة',
    hoursKicker: 'متى نلتقي؟', hoursTitle: 'أوقات الفلة', hoursIntro: 'الجدول الأسبوعي الحالي', standardHours: '٩:٠٠ م – ٢:٠٠ ص', allDay: 'مفتوح 24 ساعة', closed: 'مغلق',
    days: { sunday: 'الأحد', monday: 'الإثنين', tuesday: 'الثلاثاء', wednesday: 'الأربعاء', thursday: 'الخميس', friday: 'الجمعة', saturday: 'السبت' },
    eventsKicker: 'كل خميس', eventsTitle: 'ليالي الخميس', eventsText: 'أجواء طرب مع الطبلة والعود والغناء مع المغني أبو غسة.', eventsTags: ['طبلة', 'غناء', 'عود'], eventVideoLabel: 'فيديو من ليالي الخميس مع صوت العود والغناء', eventSoundAction: 'اضغط لتشغيل الصوت',
    contactKicker: 'نلقاك قريب', contactTitle: 'تواصل معنا', contactItems: [{ key: 'location', label: 'الموقع والخريطة' }, { key: 'phone', label: 'الهاتف وواتساب' }], mapAction: 'افتح الخريطة', whatsappAction: 'واتساب',
    backHome: 'العودة للرئيسية', legalLabel: 'معلومات الموقع', footerTagline: 'مش هتقدر تغمض عينيك', footerExplore: 'اكتشف', footerInformation: 'معلومات', rights: 'جميع الحقوق محفوظة.', footerClosing: 'نلتقي قريبًا.',
    legal: {
      privacy: { title: 'سياسة الخصوصية', intro: 'نوضح هنا المعلومات التي تخص استخدام هذا الموقع.', sections: [
        { title: 'تفضيل اللغة', body: 'يحفظ الموقع اختيارك للعربية أو الإنجليزية في مساحة التخزين المحلية في متصفحك، حتى تظهر اللغة نفسها في زياراتك التالية. يمكنك حذف هذا التفضيل من إعدادات المتصفح.' },
        { title: 'التواصل والخدمات', body: 'لا يحتوي الموقع حاليًا على نموذج تواصل أو حسابات مستخدمين أو حجوزات أو مدفوعات. لن نطلب منك إدخال بيانات شخصية عبر الموقع.' },
        { title: 'المحتوى والروابط الخارجية', body: 'تُحمّل الخطوط من خدمة خارجية، وقد يتصل متصفحك بها لعرضها. عند فتح روابط الخرائط أو واتساب، تنتقل إلى خدمات خارجية تخضع لسياسات مقدميها.' },
        { title: 'التحديثات', body: 'قد نحدّث هذه الصفحة إذا تغيّرت خصائص الموقع أو توفرت وسائل تواصل رسمية. راجعها لمعرفة أحدث المعلومات.' },
      ] },
      terms: { title: 'الشروط والأحكام', intro: 'هذه الشروط تخص استخدام الموقع ومحتواه التعريفي.', sections: [
        { title: 'معلومات الموقع', body: 'يعرض الموقع الألعاب والفعاليات وأوقات العمل المتاحة لدينا. قد تتغير هذه المعلومات؛ يُرجى التحقق من التفاصيل قبل الزيارة عندما تتوفر وسائل التواصل الرسمية.' },
        { title: 'التوفر والمواعيد', body: 'لا يضمن عرض أي لعبة أو فعالية توفرها في وقت معين. أوقات العمل من الأحد إلى الأربعاء من ٩:٠٠ مساءً إلى ٢:٠٠ صباحًا، والخميس مفتوح ٢٤ ساعة، والجمعة والسبت مغلقان.' },
        { title: 'الاستخدام', body: 'استخدم الموقع لأغراض الاطلاع الشخصي. لا يوفر الموقع حجزًا أو شراءً أو دفعًا إلكترونيًا.' },
        { title: 'روابط الطرف الثالث', body: 'قد تظهر روابط لمصادر الصور أو خدمات خارجية. تخضع تلك المواقع لشروطها وسياساتها الخاصة.' },
      ] },
    },
  },
  en: {
    brandHome: 'Thigah Cave — Home', mainNav: 'Main navigation', languageLabel: 'Choose language', openMenu: 'Open menu', closeMenu: 'Close menu', skipLink: 'Skip to content',
    nav: { home: 'Home', games: 'Games', hours: 'Opening Hours', events: 'Events', contact: 'Contact' },
    metaDescription: "Thigah Cave: You won't be able to close your eyes. Baloot, table games, billiards, PlayStation, and Thursday nights.",
    heroAlt: 'Warm café seating with arched interior walls', heroTitle: 'Thigah Cave', heroSubtitle: "You won't be able to close your eyes", exploreGames: 'Explore the games',
    gamesKicker: 'Make yourself at home', gamesTitle: 'Games worth gathering for', gamesIntro: 'From Baloot to table games and PlayStation, find your game.', featured: 'The main event',
    hoursKicker: 'When to visit', hoursTitle: 'Opening Hours', hoursIntro: 'Our current weekly schedule', standardHours: '9:00 PM – 2:00 AM', allDay: 'Open 24 hours', closed: 'Closed',
    days: { sunday: 'Sunday', monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday' },
    eventsKicker: 'Every Thursday', eventsTitle: 'Thursday Nights', eventsText: 'Traditional entertainment with tabla, oud, and singing with singer Abu Ghassah.', eventsTags: ['Tabla', 'Singing', 'Oud'], eventVideoLabel: 'Thursday Nights video with live oud and singing', eventSoundAction: 'Tap for sound',
    contactKicker: 'See you soon', contactTitle: 'Contact', contactItems: [{ key: 'location', label: 'Location & map' }, { key: 'phone', label: 'Phone & WhatsApp' }], mapAction: 'Open map', whatsappAction: 'WhatsApp',
    backHome: 'Back to home', legalLabel: 'Website information', footerTagline: "You won't be able to close your eyes", footerExplore: 'Explore', footerInformation: 'Information', rights: 'All rights reserved.', footerClosing: 'See you soon.',
    legal: {
      privacy: { title: 'Privacy Policy', intro: 'This page explains information relevant to using this website.', sections: [
        { title: 'Language preference', body: 'The website saves your Arabic or English choice in your browser’s local storage so the same language appears on later visits. You can remove this preference in your browser settings.' },
        { title: 'Contact and services', body: 'The website currently has no contact form, user accounts, bookings, or payments. It does not ask you to enter personal information.' },
        { title: 'External content and links', body: 'Fonts load from an external service, and your browser may connect to it to display them. Opening the map or WhatsApp links takes you to external services governed by their providers’ policies.' },
        { title: 'Updates', body: 'We may update this page if the website changes or official contact channels become available. Check this page for the latest information.' },
      ] },
      terms: { title: 'Terms & Conditions', intro: 'These terms cover use of this informational website and its content.', sections: [
        { title: 'Website information', body: 'The website describes games, events, and the opening hours provided to us. This information may change; please confirm details before visiting when official contact channels are available.' },
        { title: 'Availability and hours', body: 'Listing a game or event does not guarantee its availability at a particular time. Opening hours are Sunday through Wednesday, 9:00 PM–2:00 AM; Thursday, open 24 hours; and Friday and Saturday, closed.' },
        { title: 'Use of the site', body: 'Use the website for personal information. It does not offer online booking, purchases, or payments.' },
        { title: 'Third-party links', body: 'Links to image sources or external services may appear. Those websites have their own terms and policies.' },
      ] },
    },
  },
}
