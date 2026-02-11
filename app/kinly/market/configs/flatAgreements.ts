import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const flatAgreementsConfig: ScenarioConfig = {
  pageKey: "flat_agreements",

  recognition: {
    heading: "Agreements matter, but paperwork isn’t the vibe.",
    subtitle: "You need clarity on shared living without feeling like a landlord.",
    body: "Kinly keeps house agreements visible, calm, and human — no policing, no legalese.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps agreements visible and calm without turning your flat into a contract negotiation.",

  hero: {
    headline: "Clear agreements, human tone.",
    subhead: "One place for house norms, shared costs, and expectations — no lecture required.",
    body: "Kinly lets everyone see the same baseline for noise, guests, cleaning, and shared costs, while staying pressure-free.",
    ctaHeading: "Set the baseline together",
  },

  howSteps: [
    {
      title: "Agree expectations with photos",
      body: "Show what “done” looks like for kitchen, bathroom, and bins so the baseline is shared without debate.",
    },
    {
      title: "Reset weekly, lightly",
      body: "Once a week, surface what felt off (noise, guests, bills) so you adjust before it becomes conflict.",
    },
    {
      title: "Keep shared visibility",
      body: "Everyone sees norms and light tasks, so reminders feel fair — not personal.",
    },
  ],

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Noise, guests, shared chores and quick resets — without sounding bossy.",
      footer: "Clear signals, no policing.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Keep agreements current",
      copy: "Tweak quiet hours, guest rules, or cleaning standards as the flat changes.",
      footer: "Everyone stays aligned, nothing is locked in.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference",
      copy: "Noise, guests, bills, and cleaning expectations in one place — no group-chat essays.",
      footer: "Shared clarity, human tone.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  chips: [
    "We need clarity without sounding like landlords.",
    "Guests, noise, and cleaning need one baseline.",
    "Keep it fair without nagging.",
  ],

  rolePoints: [
    "Keeps agreements visible without turning anyone into the enforcer.",
    "Makes adjustments easy when the flat changes.",
  ],

  formingPoints: [
    "New flatmates can see the baseline on day one.",
    "If it drifts, you reset next week without blame.",
  ],

  audience: [
    "Flats formalising house norms without heavy paperwork.",
    "Groups who want clarity on guests/noise/cleaning without policing.",
  ],

  notList: [
    "Not a legal document.",
    "Not surveillance.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  weekly: {
    intro: "Kinly runs on a weekly rhythm so agreements stay fresh and human.",
    points: [
      "Check in weekly so small issues don’t stack up.",
      "Adjust the baseline without blame — just clarity.",
      "Keep guests/noise/cleaning aligned without long threads.",
    ],
  },

  toolsHeading: "Supported by practical tools",
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction — without turning shared living into a task system.",
  toolsList: [
    "Shared flows (with assignments if you want) for cleaning and bins so standards stay clear.",
    "Shared bills so due dates and amounts are visible without chasing.",
    "Calm check-ins so everyone feels seen without policing.",
  ],

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      whatHeading: "Qué es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. Mantiene los acuerdos visibles y tranquilos sin convertir el piso en una negociación de contrato.",
      recognition: {
        heading: "Los acuerdos importan, pero el papeleo no es el ambiente.",
        subtitle: "Necesitas claridad sin parecer casero.",
        body: "Kinly mantiene visibles los acuerdos de la casa con un tono humano — sin vigilancia ni legalismos.",
      },
      hero: {
        headline: "Acuerdos claros, tono humano.",
        subhead: "Un lugar para normas, costos y expectativas — sin sermones.",
        body: "Kinly deja a todos ver la misma base para ruido, visitas, limpieza y costos, sin presión.",
        ctaHeading: "Fijen la base juntos",
      },
      howSteps: [
        {
          title: "Acordar expectativas con fotos",
          body: "Muestren cómo se ve “listo” en cocina, baño y basura para que la base sea compartida sin debates.",
        },
        {
          title: "Reajuste semanal, sin fricción",
          body: "Cada semana, pongan ruido, visitas y facturas sobre la mesa para ajustar antes de que sea conflicto.",
        },
        {
          title: "Mantener visibilidad compartida",
          body: "Todos ven normas y tareas ligeras, así los recordatorios se sienten justos, no personales.",
        },
      ],
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "Qué necesita atención",
          copy: "Ruido, visitas, tareas y resets rápidos — sin sonar mandón.",
          footer: "Señales claras, sin vigilancia.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Mantener acuerdos al día",
          copy: "Ajusta silencio, visitas o limpieza cuando el piso cambia.",
          footer: "Todos alineados, nada queda fijo.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Un referente tranquilo",
          copy: "Ruido, visitas, facturas y limpieza en un lugar — sin novelas en el chat.",
          footer: "Claridad compartida, tono humano.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Necesitamos claridad sin sonar a caseros.",
        "Visitas, ruido y limpieza necesitan una base.",
        "Mantenerlo justo sin regaños.",
      ],
      rolePoints: [
        "Mantiene los acuerdos visibles sin volver a nadie el guardián.",
        "Facilita ajustar cuando el piso cambia.",
      ],
      formingPoints: [
        "Los nuevos compis ven la base desde el primer día.",
        "Si se desvía, se reinicia la próxima semana sin culpas.",
      ],
      audience: [
        "Pisos que formalizan normas sin papeleo pesado.",
        "Grupos que quieren claridad en visitas/ruido/limpieza sin vigilancia.",
      ],
      notList: [
        "No es un documento legal.",
        "No es vigilancia.",
        "No es un marcador.",
        "No es un jefe de tareas.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que los acuerdos sigan frescos y humanos.",
        points: [
          "Revisa semanalmente para que lo pequeño no se acumule.",
          "Ajusta la base sin culpas — solo claridad.",
          "Mantén alineados visitas/ruido/limpieza sin hilos eternos.",
        ],
        heading: "Reflexión semanal, a ritmo humano",
      },
      toolsHeading: "Apoyado por herramientas prácticas",
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricción diaria — sin convertir la vida compartida en un sistema de tareas.",
      toolsList: [
        "Flujos compartidos (con asignaciones si quieren) para limpieza y basura para que los estándares sean claros.",
        "Cuentas compartidas para que montos y fechas sean visibles sin persecución.",
        "Revisiones calmadas para que todos se sientan vistos sin vigilancia.",
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
        "كينلي هو تطبيق للعيش المشترك صُمم لمن يعيشون معاً. يبقي الاتفاقات واضحة وهادئة دون أن يحول البيت إلى تفاوض عقدي.",
      recognition: {
        heading: "الاتفاقات مهمة، لكن الأوراق الرسمية ليست الأسلوب.",
        subtitle: "تحتاج وضوحاً في السكن المشترك دون أن تبدو كمالك عقار.",
        body: "كينلي يبقي اتفاقات البيت مرئية وهادئة وبشرية — بلا مراقبة ولا لغة قانونية.",
      },
      hero: {
        headline: "اتفاقات واضحة، بنبرة إنسانية.",
        subhead: "مكان واحد لقواعد البيت والتكاليف والتوقعات — بلا خطب.",
        body: "كينلي يتيح للجميع رؤية نفس الأساس للضوضاء والضيوف والتنظيف والتكاليف، مع بقاء الضغط صفراً.",
        ctaHeading: "ضعوا الأساس معاً",
      },
      howSteps: [
        {
          title: "اتفقوا على التوقعات بالصور",
          body: "أروا كيف يبدو “جاهز” للمطبخ والحمام والقمامة حتى يكون الأساس مشتركاً دون جدال.",
        },
        {
          title: "إعادة ضبط أسبوعية وخفيفة",
          body: "مرة في الأسبوع، أظهروا الضوضاء والضيوف والفواتير لتعديلها قبل أن تصبح خلافاً.",
        },
        {
          title: "حافظوا على وضوح مشترك",
          body: "يرى الجميع المعايير والمهام الخفيفة، فيشعر التذكير بأنه عادل لا شخصي.",
        },
      ],
      screens: [
        {
          title: "اليوم",
          eyebrow: "الآن",
          headline: "ما يحتاج انتباهاً",
          copy: "ضوضاء، ضيوف، تنظيفات سريعة — دون أن تبدو آمراً.",
          footer: "إشارات واضحة، بلا مراقبة.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "إدارة",
          eyebrow: "تعديل",
          headline: "أبقوا الاتفاقات محدثة",
          copy: "عدّلوا ساعات الهدوء أو قواعد الضيوف أو معايير التنظيف مع تغيّر البيت.",
          footer: "الجميع متوافق، ولا شيء مقفل.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "مركز المنزل",
          eyebrow: "مرجع",
          headline: "مرجع هادئ واحد",
          copy: "الضوضاء والضيوف والفواتير والتنظيف في مكان واحد — بلا مقالات دردشة.",
          footer: "وضوح مشترك، نبرة إنسانية.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "نحتاج وضوحاً دون أن نبدو كمالكين.",
        "الضيوف والضوضاء والتنظيف تحتاج أساساً واحداً.",
        "نحافظ على العدل بلا توبيخ.",
      ],
      rolePoints: [
        "يبقي الاتفاقات مرئية دون أن يجعل أحداً منفّذاً.",
        "يسهّل التعديل عندما يتغير البيت.",
      ],
      formingPoints: [
        "المقيمون الجدد يرون الأساس من اليوم الأول.",
        "إذا انحرف، تعيدونه الأسبوع القادم بدون لوم.",
      ],
      audience: [
        "بيوت تضع قواعد واضحة دون أوراق ثقيلة.",
        "مجموعات تريد وضوح الضيوف/الضوضاء/التنظيف دون مراقبة.",
      ],
      notList: [
        "ليس وثيقة قانونية.",
        "ليس مراقبة.",
        "ليس لوحة نقاط.",
        "ليس رئيس مهام.",
      ],
      weekly: {
        intro: "كينلي يعمل بإيقاع أسبوعي لتبقى الاتفاقات حديثة وبشرية.",
        points: [
          "راجعوا أسبوعياً حتى لا تتراكم الأمور الصغيرة.",
          "عدّلوا الأساس بدون لوم — فقط وضوح.",
          "أبقوا الضيوف/الضوضاء/التنظيف منسقة دون خيوط طويلة.",
        ],
        heading: "تأمل أسبوعي، بإيقاع بشري",
      },
      toolsHeading: "مدعوم بأدوات عملية",
      toolsIntro:
        "بعد أن تتفقوا على التوقعات، يقدم كينلي أدوات بسيطة تقلل الاحتكاكات اليومية — بدون تحويل العيش المشترك إلى نظام مهام.",
      toolsList: [
        "تدفّقات مشتركة (مع تعيينات إذا أردتم) للتنظيف والقمامة لتبقى المعايير واضحة.",
        "فواتير مشتركة لعرض المبالغ والمواعيد بدون ملاحقة.",
        "مراجعات هادئة ليشعر الجميع بأنهم مرئيون بلا مراقبة.",
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
