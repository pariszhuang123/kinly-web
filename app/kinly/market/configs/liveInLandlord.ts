import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const liveInLandlordConfig: ScenarioConfig = {
  pageKey: "live_in_landlord_home",

  recognition: {
    heading: "You want calm at home without micromanaging anyone.",
    subtitle: "You are still responsible, but you do not want to police.",
    body: "Kinly keeps expectations visible so reminders do not become conflict in your own home.",
  },

  hero: {
    headline: "A calmer way to share the home you live in.",
    subhead: "Clear standards once, fewer repeated conversations.",
    body: "Kinly reduces emotional load with simple, shared clarity. No surveillance, no scoring, no tracking behavior.",
    ctaHeading: "Keep your home calm",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Signal",
      headline: "What needs a light touch this week",
      copy: "Guests, noise, shared spaces, or a small reset before things build.",
      footer: "Clarity early prevents tension later.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Set once",
      headline: "Agree the baseline, then relax",
      copy: "Put shared expectations in writing so you do not have to repeat them.",
      footer: "Less reminding. More calm.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "Keep standards visible for everyone",
      copy: "Quiet hours, guest rules, and shared care in one neutral place.",
      footer: "Responsible without being controlling.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],

  chips: [
    "I do not want to micromanage.",
    "I want calm in the home I live in.",
    "I am still responsible for the house.",
    "Repeated reminders create friction.",
  ],

  rolePoints: [
    "Keeps expectations clear without repeated conversations.",
    "Protects calm without monitoring anyone.",
  ],

  formingPoints: [
    "House dynamics change; the baseline stays steady.",
    "Small resets keep tension from building.",
  ],

  audience: [
    "Live-in landlords sharing the home with tenants.",
    "Homeowners who want calm, clear shared standards.",
  ],

  notList: [
    "Not surveillance.",
    "Not a scorecard or leaderboard.",
    "Not behavior tracking.",
    "Not enforcement.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so clarity stays light and consistent.",
    points: [
      "Check in weekly so small issues stay small.",
      "Reset expectations without conflict.",
      "Keep responsibility clear without pressure.",
    ],
  },

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      recognition: {
        heading: "Quieres calma en casa sin microgestionar.",
        subtitle: "Sigues siendo responsable, pero no quieres vigilar.",
        body: "Kinly mantiene claras las expectativas para que los recordatorios no se conviertan en conflicto.",
      },
      hero: {
        headline: "Una forma más tranquila de compartir la casa donde vives.",
        subhead: "Estándares claros una vez, menos conversaciones repetidas.",
        body: "Kinly reduce la carga emocional con claridad compartida. Sin vigilancia, sin puntajes, sin seguimiento de conducta.",
        ctaHeading: "Mantén la calma en casa",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Señal",
          headline: "Qué necesita un toque ligero esta semana",
          copy: "Visitas, ruido, espacios compartidos o un pequeño reinicio antes de que se acumule.",
          footer: "La claridad temprana evita tensión después.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Acordar",
          headline: "Define la base y luego relájate",
          copy: "Pon las expectativas por escrito para no repetirlas.",
          footer: "Menos recordatorios. Más calma.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Normas compartidas",
          headline: "Estándares visibles para todos",
          copy: "Horas de silencio, reglas de visitas y cuidado compartido en un lugar neutral.",
          footer: "Responsable sin ser controlador.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/hub.png",
        },
      ],
      chips: [
        "No quiero microgestionar.",
        "Quiero calma en la casa donde vivo.",
        "Sigo siendo responsable del hogar.",
        "Los recordatorios repetidos generan fricción.",
      ],
      rolePoints: [
        "Mantiene expectativas claras sin conversaciones repetidas.",
        "Protege la calma sin vigilar a nadie.",
      ],
      formingPoints: [
        "La dinámica cambia; la base se mantiene.",
        "Pequeños reinicios evitan que la tensión crezca.",
      ],
      audience: [
        "Propietarios que viven en casa y comparten con inquilinos.",
        "Dueños de casa que quieren estándares claros y tranquilos.",
      ],
      notList: [
        "No es vigilancia.",
        "No es marcador ni ranking.",
        "No es seguimiento de conducta.",
        "No es control.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para mantener la claridad ligera y constante.",
        points: [
          "Revisa semanalmente para que lo pequeño no crezca.",
          "Ajusta expectativas sin conflicto.",
          "Mantén la responsabilidad clara sin presión.",
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
        heading: "تريد الهدوء في المنزل بدون إدارة دقيقة.",
        subtitle: "ما زلت مسؤولاً، لكنك لا تريد المراقبة.",
        body: "كينلي يُبقي التوقعات واضحة حتى لا تتحول التذكيرات إلى صراع.",
      },
      hero: {
        headline: "طريقة أهدأ لمشاركة المنزل الذي تعيش فيه.",
        subhead: "معايير واضحة مرة واحدة، ومحادثات أقل تكراراً.",
        body: "كينلي يخفف العبء العاطفي بوضوح مشترك. بدون مراقبة، بدون نقاط، بدون تتبع سلوك.",
        ctaHeading: "حافظ على هدوء المنزل",
      },
      screens: [
        {
          title: "اليوم",
          eyebrow: "إشارة",
          headline: "ما الذي يحتاج لمسة خفيفة هذا الأسبوع",
          copy: "ضيوف، ضوضاء، مساحات مشتركة، أو إعادة ضبط صغيرة قبل أن تتراكم.",
          footer: "الوضوح المبكر يمنع التوتر لاحقاً.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/today.png",
        },
        {
          title: "إدارة",
          eyebrow: "تثبيت",
          headline: "اتفقوا على الأساس ثم ارتاحوا",
          copy: "ضعوا التوقعات كتابة حتى لا تتكرر.",
          footer: "تذكير أقل. هدوء أكثر.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/explore.png",
        },
        {
          title: "مركز المنزل",
          eyebrow: "معايير مشتركة",
          headline: "اجعلوا المعايير واضحة للجميع",
          copy: "ساعات هدوء، قواعد ضيوف، ورعاية مشتركة في مكان حيادي.",
          footer: "مسؤولية بدون تحكم.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/hub.png",
        },
      ],
      chips: [
        "لا أريد إدارة دقيقة.",
        "أريد هدوءاً في المنزل الذي أعيش فيه.",
        "ما زلت مسؤولاً عن المنزل.",
        "التذكيرات المتكررة تخلق احتكاكاً.",
      ],
      rolePoints: [
        "يبقي التوقعات واضحة بدون محادثات متكررة.",
        "يحمي الهدوء بدون مراقبة أي شخص.",
      ],
      formingPoints: [
        "ديناميكيات المنزل تتغير؛ الأساس يبقى ثابتاً.",
        "إعادات الضبط الصغيرة تمنع تراكم التوتر.",
      ],
      audience: [
        "مالكو المنازل الذين يعيشون فيها ويشاركون مع مستأجرين.",
        "أصحاب منازل يريدون معايير واضحة وهادئة.",
      ],
      notList: [
        "ليس مراقبة.",
        "ليس لوحة نقاط أو ترتيب.",
        "ليس تتبع سلوك.",
        "ليس أداة فرض.",
      ],
      weekly: {
        intro: "كينلي يستخدم إيقاعاً أسبوعياً ليبقى الوضوح خفيفاً وثابتاً.",
        points: [
          "راجعوا أسبوعياً حتى تبقى الأمور صغيرة.",
          "أعيدوا ضبط التوقعات بدون صراع.",
          "ابقوا المسؤولية واضحة بدون ضغط.",
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
