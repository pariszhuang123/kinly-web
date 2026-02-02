import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const homestayOwnerConfig: ScenarioConfig = {
  pageKey: "homestay_owner_welcome",

  recognition: {
    heading: "You want students to feel at home without constant explanations.",
    subtitle: "You are caring for wellbeing, family rhythms, and cultural welcome.",
    body: "Kinly keeps shared expectations visible so care stays warm, not controlling.",
  },

  hero: {
    headline: "A gentler way to welcome students into your home.",
    subhead: "Explain family rhythms once, help students settle faster.",
    body: "Kinly reduces emotional labour with a calm, shared reference point. No monitoring, no scoring, no reporting.",
    ctaHeading: "Welcome with calm clarity",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Family rhythm",
      headline: "What matters for the home this week",
      copy: "Meal times, quiet hours, shared spaces, and the small rhythms that keep everyone steady.",
      footer: "Gentle clarity without awkward reminders.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Set once",
      headline: "Explain the rhythm once",
      copy: "Shared expectations and cultural context in one calm place.",
      footer: "Students settle faster with clear, kind guidance.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared care",
      headline: "Keep the home calm for everyone",
      copy: "Quiet routines, guest expectations, and shared care that protect family space.",
      footer: "Supportive without control.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],

  chips: [
    "I want this student to feel at home.",
    "I do not want to constantly explain everything.",
    "I need to protect my kids’ routines.",
    "I do not want tension in my family space.",
  ],

  rolePoints: [
    "Keeps family rhythms clear without repeated reminders.",
    "Builds cultural clarity without confrontation.",
  ],

  formingPoints: [
    "New students arrive and settle at different speeds.",
    "A shared baseline keeps the home steady through change.",
  ],

  audience: [
    "Homestay families welcoming international students.",
    "Caregivers who want calm, shared expectations at home.",
  ],

  notList: [
    "Not monitoring.",
    "Not scoring.",
    "Not reporting.",
    "Not feedback loops about kids.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so care stays calm and consistent.",
    points: [
      "Check in weekly to keep expectations gentle and clear.",
      "Reduce awkward reminders with a shared reference.",
      "Protect family routines while helping students settle.",
    ],
  },

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      recognition: {
        heading: "Quieres que el estudiante se sienta en casa sin explicar todo una y otra vez.",
        subtitle: "Cuidas el bienestar, los ritmos familiares y la bienvenida cultural.",
        body: "Kinly mantiene visibles las expectativas para que el cuidado sea cálido, no controlador.",
      },
      hero: {
        headline: "Una forma más amable de recibir estudiantes en casa.",
        subhead: "Explica los ritmos familiares una vez y ayúdales a adaptarse más rápido.",
        body: "Kinly reduce la carga emocional con un punto de referencia compartido. Sin monitoreo, sin puntajes, sin reportes.",
        ctaHeading: "Recibe con calma y claridad",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ritmo familiar",
          headline: "Lo que importa en casa esta semana",
          copy: "Comidas, horas de silencio, espacios compartidos y pequeños ritmos que mantienen el equilibrio.",
          footer: "Claridad amable sin recordatorios incómodos.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Acordar",
          headline: "Explica el ritmo una vez",
          copy: "Expectativas compartidas y contexto cultural en un solo lugar tranquilo.",
          footer: "Los estudiantes se adaptan más rápido con guía clara y amable.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Cuidado compartido",
          headline: "Un hogar tranquilo para todos",
          copy: "Rutinas de descanso, visitas y cuidado compartido que protegen el espacio familiar.",
          footer: "Apoyo sin control.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/hub.png",
        },
      ],
      chips: [
        "Quiero que el estudiante se sienta en casa.",
        "No quiero explicar todo constantemente.",
        "Necesito proteger las rutinas de mis hijos.",
        "No quiero tensión en mi espacio familiar.",
      ],
      rolePoints: [
        "Mantiene claros los ritmos familiares sin recordatorios repetidos.",
        "Aporta claridad cultural sin confrontación.",
      ],
      formingPoints: [
        "Cada estudiante se adapta a su ritmo.",
        "Una base compartida mantiene el hogar estable.",
      ],
      audience: [
        "Familias de homestay que reciben estudiantes internacionales.",
        "Cuidadores que quieren expectativas compartidas y calmadas.",
      ],
      notList: [
        "No es monitoreo.",
        "No es puntuación.",
        "No es reporte.",
        "No es feedback sobre niños.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que el cuidado sea calmado y constante.",
        points: [
          "Revisa semanalmente para mantener expectativas claras y amables.",
          "Reduce recordatorios incómodos con un referente compartido.",
          "Protege las rutinas familiares mientras los estudiantes se adaptan.",
        ],
        heading: "Reflexión semanal, a ritmo humano",
      },
      sectionHeadings: {
        howItWorks: "Cómo funciona Kinly",
        howItWorksSubtitle: "Nada se comparte sin intención.",
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
      recognition: {
        heading: "تريد أن يشعر الطالب بأنه في المنزل دون شرح متكرر.",
        subtitle: "أنت تعتني بالرفاهية وإيقاع الأسرة والترحيب الثقافي.",
        body: "كينلي يُبقي التوقعات واضحة حتى يبقى الاهتمام دافئاً وليس مسيطراً.",
      },
      hero: {
        headline: "طريقة ألطف للترحيب بالطلاب في منزلك.",
        subhead: "اشرحوا إيقاع الأسرة مرة واحدة وساعدوا الطالب على الاستقرار بسرعة.",
        body: "كينلي يخفف العبء العاطفي بمرجع مشترك هادئ. بدون مراقبة، بدون نقاط، بدون تقارير.",
        ctaHeading: "رحبوا بوضوح وهدوء",
      },
      screens: [
        {
          title: "اليوم",
          eyebrow: "إيقاع الأسرة",
          headline: "ما الذي يهم في المنزل هذا الأسبوع",
          copy: "أوقات الوجبات، ساعات الهدوء، المساحات المشتركة، والإيقاعات الصغيرة التي تحفظ الهدوء.",
          footer: "وضوح لطيف بدون تذكير محرج.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/today.png",
        },
        {
          title: "إدارة",
          eyebrow: "تثبيت",
          headline: "اشرحوا الإيقاع مرة واحدة",
          copy: "توقعات مشتركة وسياق ثقافي في مكان هادئ واحد.",
          footer: "يستقر الطلاب أسرع مع توجيه واضح ولطيف.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/explore.png",
        },
        {
          title: "مركز المنزل",
          eyebrow: "رعاية مشتركة",
          headline: "منزل هادئ للجميع",
          copy: "روتين الراحة، الضيوف، والرعاية المشتركة التي تحمي مساحة الأسرة.",
          footer: "دعم بدون تحكم.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/hub.png",
        },
      ],
      chips: [
        "أريد أن يشعر الطالب بأنه في المنزل.",
        "لا أريد شرح كل شيء باستمرار.",
        "أحتاج لحماية روتين أطفالي.",
        "لا أريد توتراً في مساحة الأسرة.",
      ],
      rolePoints: [
        "يبقي إيقاع الأسرة واضحاً بدون تذكير متكرر.",
        "يبني وضوحاً ثقافياً بدون مواجهة.",
      ],
      formingPoints: [
        "كل طالب يستقر بطريقته.",
        "الأساس المشترك يبقي المنزل مستقراً.",
      ],
      audience: [
        "عائلات الاستضافة التي ترحب بالطلاب الدوليين.",
        "مقدمو الرعاية الذين يريدون توقعات مشتركة وهادئة.",
      ],
      notList: [
        "ليس مراقبة.",
        "ليس نقاطاً.",
        "ليس تقارير.",
        "ليس تغذية راجعة عن الأطفال.",
      ],
      weekly: {
        intro: "كينلي يستخدم إيقاعاً أسبوعياً ليبقى الاهتمام هادئاً ومتسقاً.",
        points: [
          "راجعوا أسبوعياً للحفاظ على توقعات واضحة ولطيفة.",
          "قللوا التذكير المحرج بمرجع مشترك.",
          "احموا روتين الأسرة بينما يستقر الطلاب.",
        ],
        heading: "تأمل أسبوعي، بإيقاع بشري",
      },
      sectionHeadings: {
        howItWorks: "كيف يعمل كينلي",
        howItWorksSubtitle: "لا شيء يُشارك بدون قصد.",
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
