import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'uz',
    lng: 'uz',
    interpolation: { escapeValue: false },
    resources: {
      uz: {
        translation: {
          navbar: {
            home: 'Bosh sahifa',
            about: "Ma'lumot",
            admission: 'Qabul',
            contact: 'Aloqa',
            mobileTitle: 'Namangan Prezident Maktabi',
          },
          home: {
            title1: 'Namangan',
            title2: 'Prezident Maktabi',
            body: 'Iqtidorli yoshlarni aniqlash, tanlash, o‘qitish va tarbiyalash, yosh iste’dodlarni yanada qo‘llab-quvvatlash va rag‘batlantirish, darsliklar va o‘quv-uslubiy qo‘llanmalarni tayyorlash va nashr etishdagi muammolarni bartaraf qilish ishlarini sifat jihatidan yangi bosqichga ko‘tarish',
          },
          about: {
            title: 'Maktabimiz haqida',
            body1:
              "Maktabda tibbiyot honasi mavjud bo’lib o’quvchilar sog’liqlari doimiy nazoratda, o’quv muassasasida sportga katta e'tibor beriladi. Maktabning sport majmuasi barcha zarur sport anjomlari bilan ta’minlangan, cho’milish havzasi, basketbol va futbol maydonchalari o’quvchilar ixtiyorida. Maktabda o’quvchilar o’rtasida turli sport musobaqalari o’tkazilib kelinadi. Maktab kutubhonasida               badiiy va o’quv adabiyotlari mavjud bo’lib o’quvchlar ulardan o’zlarining bo’sh vaqtlarida foydalanib kelishmoqda.",
            body2:
              "Maktabimiz standart texnik maktab jihozlaridan tashqari, nazariy bilimlarni amalda mustahkamlash uchun maxsus ishlab chiqilgan uskunalar bilan boyitilgan. STEAM fanlari uchun maxsus jihozlangan zamonaviy o’quv xonalarga ega. So’nggi rusumdagi texnologiyalar bilan jihozlangan komptuter sinflari  o'quv maqsadlariga mo'ljallangan bo’lib, o'quvchilar darsdan tashqari vaqtda ham kompyuterda izlanish olib borish imkoniyatiga egalar. Har bir o’quv sinfida Smartboardlar bor.",

            body3: `Maktabimizda darslar hamda qo'shimcha to'garak
                    mashg'ulotlari yuqori salohiyatli o'qituvchilar tomonidan
                    olib boriladi. Umumiy hisobda 27ta o'qituvchi 166 ta
                    o'quvchiga dars berib kelmoqda. O'qituvchilarning 20 nafari
                    mahalliy qolgan 7 nafari esa xalqaro ustozlaridir. Maktab
                    o'quvchilariga matematika, fizika,kimyo, biologiya va
                    axborot texnologiyalari hamda xorijiy tillar ilgʻor taʼlim
                    metodologiyalari asosida chuqur oʻrgatiladi. Ta'lim o'zbek
                    hamda ingliz tillarida olib boriladi.`,
          },
          admission: {
            title1: 'Qabul Talablari',
            title2:
              "Prezident Maktabiga 4-sinfni tamomlagan o'quvchilar qabul qilinadi",
            box1: {
              title:
                '1-bosqich: Hujjatlar onlayn elektron tarzda veb-sayt orqali qabul komissiyasiga topshiriladi',
              step1:
                "Talabgorning tug'ilganlik to'g'risida guvohnomasi (kinder pasport) nusxasi",
              step2:
                "Tasdiqlangan shakldagi ma'lumotnomani talabgor ta'lim olayotgan maktab direktori tomonidan tasdiqlangan nusxasi",
              step3:
                "Talabgorning oxirgi 2 oy davomida tushgan 3x4 o'lchamdagi rasmi",
              step4:
                "2020-2021 o'quv yili natijasiga ko'ra, talabgor baholar tabelining maktab direktori tomonidan tasdiqlangan nusxasi",
              step5:
                "Talabgor hamda uning ota-onasi yoki ularni o'rnini bosuvchi shaxslar (kelgusida - qonuniy vakillar) fuqarolik pasporti ma'lumotlari",
            },
            box2: {
              title: '2-bosqich: Imtihon',
              step1:
                'Saralash imtihoni matematika fanidan 30 ta topshiriqdan iborat test.',
              step2: "2-bosqich quyidagilardan iborat bo'ladi:",
              step3: "Tanqidiy fikrlash bo'yicha - 16 ta masala",
              step4: "Muammoni yechish bo'yicha - 24 ta masala",
              step5: 'Ingliz tilidan test savollari',
            },
            box3: {
              title:
                "3-bosqich: Nomzodlarning umumiy ballari bo'yicha ro'yhatini e'lon qilish",
              step1: "Natijalar veb sayt orqali e'lon qilinadi",
            },
          },
          footer: {
            box1: {
              title: 'Ish Grafigi',
              info1: 'Dushanba – Juma: 9:00 – 18:00',
              info2: 'Tushlik: 13:00 – 14:00',
              info3: 'Dam olish kunlari: shanba va yakshanba',
            },
            box2: {
              title: "Aloqa ma'lumotlari",
              address: "Namangan shahri, Islom Karimov ko'chasi",
            },
            box3: {
              title: "Qo'shimcha linklar",
              telegram: 'Telegram kanalimiz',
              facebook: 'Facebook sahifamiz',
              instagram: 'Instagram sahifamiz',
            },
          },
        },
      },
      en: {
        translation: {
          navbar: {
            home: 'Home',
            about: 'About',
            admission: 'Admission',
            contact: 'Contact',
            mobileTitle: 'Namangan Presidential School',
          },
          home: {
            title1: 'Namangan',
            title2: 'Presidential School',
            body: 'To achieve a new high-quality level of the work on identifying, selection, training and education of gifted youth, further support and stimulation of young talents, elimination of problems in the preparation and publication of textbooks and teaching tools, as well as the creation of a specialized system for the management and organization of the activities of educational institutions',
          },
          about: {
            title: 'About our school',
            body1:
              'The school has a medical office equipped with all the necessary equipment, the health of students is constantly monitored by specialist doctors. The educational institution pays great attention to sports. The sports complex of the school is equipped with modern sports simulators. There is a swimming pool, basketball and football field at the disposal of pupils, also various of sports competitions are regularly held. There are more than 4 thousand different fiction and educational literature in the library of the school, where students can develop their knowledge in their free time.',
            body2:
              'In addition to the standard equipment of educational institutions, our school is equipped with modern equipment specially designed to consolidate the theoretical knowledge of students. For classes in special subjects (STEAM) there are modern specially equipped classrooms. Information technology classrooms are equipped with modern computers, where students have the opportunity to conduct computer research outside the classroom. Each classroom has Smart boards.',
            body3:
              'Lessons and extra curricular activities are edified by well-qualified teachers. In total, 27 teachers have been teaching 166 students so far. From these, 20 teachers are foreigners and other 7 teachers are local ones. School children are taught mathematics, physics, chemistry, biology, computer science and foreign languages in support of great methods. The lessons are held in two languages: Uzbek and English.',
          },
          admission: {
            title1: 'Admission requirements',
            title2: '4th grade graduates can apply for Presidential School',
            box1: {
              title:
                'Step 1 - Documents are submitted to the Admissions Office online via the website',
              step1:
                "A copy of the applicant's birth certificate (kinder passport)",
              step2:
                'A certified copy of the certificate in the approved form by the principal of the school where the applicant is studying',
              step3: 'A 3x4 size photo of the applicant(in the last 2 months)',
              step4:
                'A copy of the applicant grade sheet approved by the school principal for the 2020-2021 school year',
              step5:
                'Passport information of the applicant and his/her parents or their substitutes (hereinafter - the legal representatives)',
            },
            box2: {
              title: 'Step 2 - Exam',
              step1:
                'The qualifying test that consists of 30 tasks in mathematics',
              step2: 'Phase 2 will consist of:',
              step3: 'Critical thinking - 16 tasks',
              step4: 'Problem solving - 24 tasks',
              step5: 'Test questions related to English',
            },
            box3: {
              title:
                'Step 3 - Announcing the list of candidates in terms of total score',
              step1: 'The results will be announced on the website',
            },
          },
          footer: {
            box1: {
              title: 'Work schedule',
              info1: 'Monday - Friday: 9:00 - 18:00',
              info2: 'Dinner: 13:00 - 14:00',
              info3: 'Holiday: Saturday and Sunday',
            },
            box2: {
              title: 'Contact Info',
              address: 'Namangan city, I.Karimov Street',
            },
            box3: {
              title: 'Additional Links',
              telegram: 'Telegram channel',
              facebook: 'Facebook page',
              instagram: 'Instagram page',
            },
          },
        },
      },
    },
  });
