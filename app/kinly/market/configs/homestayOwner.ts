import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const homestayOwnerConfig: ScenarioConfig = {
  pageKey: "homestay_owner",

  recognition: {
    heading: "You want guests to feel welcome — and your home to run smoothly.",
    subtitle: "Clear house norms should feel warm, not formal.",
    body: "Kinly keeps expectations visible in a calm, human way so hosting feels welcoming and fair.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps homestay expectations clear and calm without turning hosting into rule enforcement.",

  hero: {
    headline: "A welcoming home with clear norms.",
    subhead: "Set the baseline once, keep it warm and human.",
    body: "Kinly shows guests and residents the same simple expectations for noise, shared spaces, and contributions — without awkward reminders.",
    ctaHeading: "Host with clarity",
  },

  howSteps: [
    {
      title: "Agree expectations with photos",
      body: "Show what “ready” looks like for kitchen, bathroom, and common areas so everyone matches your standard.",
    },
    {
      title: "Reset weekly, lightly",
      body: "Once a week, surface any friction (noise, guests, cleanups) so it is addressed calmly before it becomes conflict.",
    },
    {
      title: "Keep shared visibility",
      body: "Guests and hosts see the same norms and light tasks, so reminders feel fair and welcoming.",
    },
  ],

  screens: [
    {
      title: "Today",
      eyebrow: "Welcome",
      headline: "What guests should know now",
      copy: "Quiet hours, shared spaces, and today’s simple asks.",
      footer: "Clarity keeps the welcome warm.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update norms without tension",
      copy: "Tweak house rules or hosting notes as guests change — no awkward talks.",
      footer: "One place to keep everyone aligned.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference for hosts and guests",
      copy: "Noise, guests, cleaning standards, and shared costs visible to all.",
      footer: "Welcoming, not policing.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],

  chips: [
    "I want guests to feel welcome and informed.",
    "I need clarity on noise, guests, and cleaning without sounding strict.",
    "I do not want to chase people for shared costs.",
  ],

  rolePoints: [
    "Keeps expectations visible so you are not the enforcer.",
    "Gives guests a calm reference without formal rules.",
  ],

  formingPoints: [
    "Guests change; the baseline stays clear.",
    "If something slips, you reset next week without awkwardness.",
  ],

  audience: [
    "Homestay owners and hosts who want calm clarity.",
    "Households hosting guests while living together.",
  ],

  notList: [
    "Not a surveillance tool.",
    "Not a legal contract.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so hosting stays calm and fair.",
    points: [
      "Check in weekly so small issues do not stack up.",
      "Adjust expectations without blame — just clarity.",
      "Keep the welcome warm while staying aligned.",
    ],
  },

  toolsHeading: "Supported by practical tools",
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction — without turning hosting into a task system.",
  toolsList: [
    "Shared flows (with assignments if you want) for cleaning turnarounds and common areas.",
    "Shared bills so contributions (power, heating, shared items) are clear without chasing.",
    "Calm check-ins so guests and hosts feel seen without awkward talks.",
  ],

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      whatHeading: "Qué es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. Mantiene claras y tranquilas las expectativas de homestay sin convertir la hospitalidad en hacer cumplir reglas.",
      recognition: {
        heading: "Quieres que los huéspedes se sientan bienvenidos — y que la casa funcione.",
        subtitle: "Las normas deben sentirse cálidas, no formales.",
        body: "Kinly mantiene visibles las expectativas con un tono humano para que hospedar sea acogedor y justo.",
      },
      hero: {
        headline: "Un hogar acogedor con normas claras.",
        subhead: "Fija la base una vez, con calidez.",
        body: "Kinly muestra a huéspedes y residentes las mismas expectativas simples sobre ruido, espacios y aportes — sin recordatorios incómodos.",
        ctaHeading: "Recibe con claridad",
      },
      howSteps: [
        {
          title: "Acordar expectativas con fotos",
          body: "Muestren cómo se ve “listo” en cocina, baño y áreas comunes para que todos coincidan con tu estándar.",
        },
        {
          title: "Reajuste semanal, sin fricción",
          body: "Cada semana, pongan ruido, visitas y limpiezas sobre la mesa para resolverlo antes de que sea conflicto.",
        },
        {
          title: "Mantener visibilidad compartida",
          body: "Huéspedes y anfitriones ven las mismas normas y tareas ligeras, así los recordatorios se sienten justos y acogedores.",
        },
      ],
      screens: [
        {
          title: "Hoy",
          eyebrow: "Bienvenida",
          headline: "Lo que los huéspedes deben saber",
          copy: "Horas de silencio, espacios compartidos y los pedidos simples de hoy.",
          footer: "La claridad mantiene cálida la bienvenida.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Actualiza normas sin tensión",
          copy: "Ajusta reglas de la casa o notas de anfitrión cuando cambian los huéspedes — sin charlas incómodas.",
          footer: "Un lugar para mantener a todos alineados.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Un referente tranquilo para anfitriones y huéspedes",
          copy: "Ruido, visitas, estándares de limpieza y aportes visibles para todos.",
          footer: "Acogedor, no controlador.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/hub.png",
        },
      ],
      chips: [
        "Quiero que los huéspedes se sientan bienvenidos e informados.",
        "Necesito claridad en ruido, visitas y limpieza sin sonar estricto.",
        "No quiero perseguir a nadie por los aportes compartidos.",
      ],
      rolePoints: [
        "Mantiene visibles las expectativas para que no seas el ejecutor.",
        "Da a huéspedes un referente calmado sin reglas formales.",
      ],
      formingPoints: [
        "Los huéspedes cambian; la base sigue clara.",
        "Si algo se desliza, lo reinicias la próxima semana sin incomodidad.",
      ],
      audience: [
        "Anfitriones de homestay que quieren claridad tranquila.",
        "Hogares que reciben huéspedes mientras conviven.",
      ],
      notList: [
        "No es vigilancia.",
        "No es un contrato legal.",
        "No es un marcador.",
        "No es un jefe de tareas.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que la hospitalidad se mantenga calmada y justa.",
        points: [
          "Revisa semanalmente para que lo pequeño no se acumule.",
          "Ajusta expectativas sin culpas — solo claridad.",
          "Mantén cálida la bienvenida mientras siguen alineados.",
        ],
        heading: "Reflexión semanal, a ritmo humano",
      },
      toolsHeading: "Apoyado por herramientas prácticas",
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricción diaria — sin convertir la hospitalidad en un sistema de tareas.",
      toolsList: [
        "Flujos compartidos (con asignaciones si quieren) para limpiezas y áreas comunes.",
        "Cuentas compartidas para que aportes (luz, calefacción, insumos) sean claros sin persecuciones.",
        "Revisiones calmadas para que huéspedes y anfitriones se sientan vistos sin charlas incómodas.",
      ],
      sectionHeadings: {
        howItWorks: "Cómo funciona Kinly",
        howItWorksSubtitle: "Tres pasos simples que mantienen a todos alineados.",
        soundsLikeYou: "¿Te suena familiar?",
        roleHeading: "El rol de Kinly: claridad primero",
        formingHeading: "Si tu hogar aún se está formando",
        audienceHeading: "Para quién es esto",
        notListHeading: "Kinly no es...",
        readyHeading: "Cuando estés listo",
        readySubtitle: "Kinly vive en la app - empieza en iOS o Android.",
      },
      availability: {
        body: "Kinly está disponible en Nueva Zelanda y Singapur. Te avisaremos cuando abra en tu región.",
      },
    } satisfies LocaleCopy,

    ar: {
      whatHeading: "ما هو كينلي",
      whatBody:
        "كينلي هو تطبيق للعيش المشترك صُمم لمن يعيشون معاً. يبقي توقعات الاستضافة واضحة وهادئة دون أن يحول الضيافة إلى فرض قواعد.",
      recognition: {
        heading: "تريد أن يشعر الضيوف بالترحيب — وأن يعمل منزلك بسلاسة.",
        subtitle: "يجب أن تبدو قواعد المنزل دافئة، لا رسمية.",
        body: "كينلي يبقي التوقعات مرئية بنبرة هادئة حتى تكون الاستضافة مرحبة وعادلة.",
      },
      hero: {
        headline: "منزل مرحِّب بمعايير واضحة.",
        subhead: "ضع الأساس مرة، وابقه دافئاً وبشرياً.",
        body: "كينلي يُظهر للضيوف والمقيمين نفس التوقعات البسيطة حول الضوضاء والمساحات والمساهمات — بدون تذكيرات محرجة.",
        ctaHeading: "استضف بوضوح",
      },
      howSteps: [
        {
          title: "اتفقوا على التوقعات بالصور",
          body: "أروا كيف يبدو “جاهز” للمطبخ والحمام والمساحات المشتركة ليطابق الجميع معيارك.",
        },
        {
          title: "إعادة ضبط أسبوعية وخفيفة",
          body: "مرة في الأسبوع، أظهروا الضوضاء والضيوف والتنظيفات ليُعالَج بهدوء قبل أن يصبح خلافاً.",
        },
        {
          title: "حافظوا على وضوح مشترك",
          body: "يرى الضيوف والمضيفون نفس المعايير والمهام الخفيفة، فيشعر التذكير بأنه عادل ومرحِّب.",
        },
      ],
      screens: [
        {
          title: "اليوم",
          eyebrow: "ترحيب",
          headline: "ما ينبغي أن يعرفه الضيوف الآن",
          copy: "ساعات الهدوء، المساحات المشتركة، وطلبات اليوم البسيطة.",
          footer: "الوضوح يحافظ على دفء الترحيب.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/today.png",
        },
        {
          title: "إدارة",
          eyebrow: "تعديل",
          headline: "حدثوا القواعد بلا توتر",
          copy: "عدّلوا قواعد البيت أو ملاحظات الاستضافة مع تغيّر الضيوف — دون محادثات محرجة.",
          footer: "مكان واحد لإبقاء الجميع متناغمين.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/explore.png",
        },
        {
          title: "مركز المنزل",
          eyebrow: "مرجع",
          headline: "مرجع هادئ للمضيفين والضيوف",
          copy: "الضوضاء والضيوف ومعايير التنظيف والتكاليف المشتركة مرئية للجميع.",
          footer: "ترحيب بلا رقابة.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/hub.png",
        },
      ],
      chips: [
        "أريد أن يشعر الضيوف بالترحيب والمعلومة.",
        "أحتاج وضوحاً في الضوضاء والضيوف والتنظيف دون أن أبدو صارماً.",
        "لا أريد ملاحقة أحد للمساهمات المشتركة.",
      ],
      rolePoints: [
        "يبقي التوقعات مرئية فلا تكون أنت المنفّذ.",
        "يعطي الضيوف مرجعاً هادئاً بلا قواعد رسمية.",
      ],
      formingPoints: [
        "الضيوف يتغيرون؛ الأساس يبقى واضحاً.",
        "إذا انزلق شيء، تعيدون الضبط الأسبوع القادم بلا إحراج.",
      ],
      audience: [
        "مضيفو هومستاي يريدون وضوحاً هادئاً.",
        "منازل تستضيف ضيوفاً أثناء التعايش.",
      ],
      notList: [
        "ليست أداة مراقبة.",
        "ليست عقداً قانونياً.",
        "ليست لوحة نقاط.",
        "ليست رئيس مهام.",
      ],
      weekly: {
        intro: "كينلي يعمل بإيقاع أسبوعي لتبقى الضيافة هادئة وعادلة.",
        points: [
          "راجعوا أسبوعياً حتى لا تتراكم الأمور الصغيرة.",
          "عدّلوا التوقعات بلا لوم — فقط وضوح.",
          "حافظوا على دفء الترحيب مع البقاء متوافقين.",
        ],
        heading: "تأمل أسبوعي، بإيقاع بشري",
      },
      toolsHeading: "مدعوم بأدوات عملية",
      toolsIntro:
        "بعد أن تتفقوا على التوقعات، يقدم كينلي أدوات بسيطة تقلل الاحتكاكات اليومية — بدون تحويل الضيافة إلى نظام مهام.",
      toolsList: [
        "تدفّقات مشتركة (مع تعيينات إذا أردتم) لتنظيف التجهيزات والمساحات المشتركة.",
        "فواتير مشتركة لعرض المبالغ والمواعيد بدون ملاحقة.",
        "مراجعات هادئة ليشعر الضيوف والمضيفون بأنهم مرئيون بدون محادثات محرجة.",
      ],
      sectionHeadings: {
        howItWorks: "كيف يعمل كينلي",
        howItWorksSubtitle: "ثلاث خطوات بسيطة تبقي الجميع على توافق.",
        soundsLikeYou: "هل يبدو هذا مثل مكانك؟",
        roleHeading: "دور كينلي: وضوح أولاً",
        formingHeading: "إذا كان منزلك لا يزال يتشكل",
        audienceHeading: "لمن هذا",
        notListHeading: "كينلي ليس...",
        readyHeading: "عندما تكون جاهزاً",
        readySubtitle: "كينلي موجود في التطبيق - ابدأ على iOS أو Android.",
      },
      availability: {
        body: "كينلي متاح حالياً في نيوزيلندا وسنغافورة. سنراسلك عندما يفتح كينلي في منطقتك.",
      },
    } satisfies LocaleCopy,
  },
};
