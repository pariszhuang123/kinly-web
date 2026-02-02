import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const headTenantConfig: ScenarioConfig = {
  pageKey: "head_tenant_shared_responsibility",

  recognition: {
    heading: "You did not sign up to manage the flat.",
    subtitle: "If you step in, you get blamed. If you do not, things fall apart.",
    body: "Kinly keeps shared expectations clear so the load is not on one person.",
  },

  hero: {
    headline: "A calmer way to share responsibility in your flat.",
    subhead: "One neutral reference point, less personal confrontation.",
    body: "Kinly reduces the pressure of being the default organiser without turning you into the boss. No surveillance, no reporting, no enforcement tools.",
    ctaHeading: "Share the load calmly",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Signal",
      headline: "What needs attention without the blame",
      copy: "Small resets, shared spaces, and the things that quietly pile up.",
      footer: "Clarity early keeps things smooth.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Reset",
      headline: "Share expectations, not commands",
      copy: "Agree the baseline once so no one has to enforce it.",
      footer: "Less personal conflict, more shared responsibility.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "Keep the reference point neutral",
      copy: "Clear expectations in one place so you are not the messenger.",
      footer: "No escalation. No policing.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],

  chips: [
    "If I do nothing, things fall apart.",
    "If I step in, people resent me.",
    "I just want the flat to run smoothly.",
    "I am carrying risk for everyone.",
  ],

  rolePoints: [
    "Keeps shared expectations visible without making you the boss.",
    "Reduces personal confrontation with a neutral reference point.",
  ],

  formingPoints: [
    "House dynamics shift; the baseline stays clear.",
    "Quiet burnout eases when responsibility is shared.",
  ],

  audience: [
    "Head tenants who keep the flat running.",
    "Organisers who want shared responsibility without role escalation.",
  ],

  notList: [
    "Not a rule engine.",
    "Not surveillance.",
    "Not a reporting tool.",
    "Not landlord-facing.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so shared responsibility stays human.",
    points: [
      "Check in weekly so issues do not stack up.",
      "Reset expectations without making it personal.",
      "Keep the flat calm without escalation.",
    ],
  },

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      recognition: {
        heading: "No te apuntaste para dirigir el piso.",
        subtitle: "Si intervienes, te culpan. Si no, todo se desordena.",
        body: "Kinly mantiene claras las expectativas compartidas para que la carga no recaiga en una sola persona.",
      },
      hero: {
        headline: "Una forma más tranquila de compartir la responsabilidad en tu piso.",
        subhead: "Un referente neutral, menos confrontación personal.",
        body: "Kinly reduce la presión de ser el organizador por defecto sin convertirte en jefe. Sin vigilancia, sin reportes, sin herramientas de control.",
        ctaHeading: "Compartir la carga con calma",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Señal",
          headline: "Lo que necesita atención sin culpas",
          copy: "Pequeños reinicios, espacios compartidos y lo que se acumula en silencio.",
          footer: "La claridad temprana mantiene la calma.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Reiniciar",
          headline: "Expectativas compartidas, no órdenes",
          copy: "Acordad la base una vez para que nadie tenga que imponerla.",
          footer: "Menos conflicto personal, más responsabilidad compartida.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Normas compartidas",
          headline: "Un referente neutral",
          copy: "Expectativas claras en un solo lugar para que no seas el mensajero.",
          footer: "Sin escaladas. Sin vigilancia.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/hub.png",
        },
      ],
      chips: [
        "Si no hago nada, todo se desordena.",
        "Si intervengo, la gente me resiente.",
        "Solo quiero que el piso funcione bien.",
        "Estoy cargando el riesgo de todos.",
      ],
      rolePoints: [
        "Mantiene visibles las expectativas sin convertirte en jefe.",
        "Reduce la confrontación personal con un referente neutral.",
      ],
      formingPoints: [
        "La dinámica cambia; la base sigue clara.",
        "El desgaste disminuye cuando la responsabilidad es compartida.",
      ],
      audience: [
        "Quienes coordinan y mantienen el piso funcionando.",
        "Organizadores que quieren responsabilidad compartida sin escaladas.",
      ],
      notList: [
        "No es un motor de reglas.",
        "No es vigilancia.",
        "No es una herramienta de reportes.",
        "No es para propietarios.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que la responsabilidad siga siendo humana.",
        points: [
          "Revisa semanalmente para que los problemas no se acumulen.",
          "Ajusta expectativas sin hacerlo personal.",
          "Mantén el piso calmado sin escalar.",
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
        heading: "لم توقع لتدير البيت.",
        subtitle: "إذا تدخلت، يلومك الآخرون. وإذا لم تتدخل، تتفكك الأمور.",
        body: "كينلي يُبقي التوقعات المشتركة واضحة حتى لا يقع الحمل على شخص واحد.",
      },
      hero: {
        headline: "طريقة أهدأ لتقاسم المسؤولية في شقتك.",
        subhead: "مرجع محايد وتقليل المواجهات الشخصية.",
        body: "كينلي يخفف ضغط أن تكون المنظم الافتراضي دون أن يجعلك المدير. بدون مراقبة، بدون تقارير، بدون أدوات فرض.",
        ctaHeading: "شارك الحمل بهدوء",
      },
      screens: [
        {
          title: "اليوم",
          eyebrow: "إشارة",
          headline: "ما يحتاج انتباهاً بدون لوم",
          copy: "إعادات ضبط صغيرة ومساحات مشتركة وما يتراكم بهدوء.",
          footer: "الوضوح المبكر يحافظ على الهدوء.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/today.png",
        },
        {
          title: "إدارة",
          eyebrow: "إعادة ضبط",
          headline: "توقعات مشتركة، لا أوامر",
          copy: "اتفقوا على الأساس مرة واحدة حتى لا يفرضه أحد.",
          footer: "مواجهة أقل، مسؤولية أكثر مشاركة.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/explore.png",
        },
        {
          title: "مركز المنزل",
          eyebrow: "معايير مشتركة",
          headline: "مرجع محايد للجميع",
          copy: "توقعات واضحة في مكان واحد حتى لا تكون أنت المرسل.",
          footer: "لا تصعيد. لا مراقبة.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/hub.png",
        },
      ],
      chips: [
        "إذا لم أتدخل، تتفكك الأمور.",
        "إذا تدخلت، يستاء مني الآخرون.",
        "أريد فقط أن يعمل البيت بسلاسة.",
        "أنا أحمل المخاطر للجميع.",
      ],
      rolePoints: [
        "يبقي التوقعات واضحة بدون جعلك المدير.",
        "يقلل المواجهة الشخصية بمرجع محايد.",
      ],
      formingPoints: [
        "ديناميكيات البيت تتغير؛ الأساس يبقى واضحاً.",
        "الاحتراق الهادئ يخف عندما تتقاسمون المسؤولية.",
      ],
      audience: [
        "من يديرون التفاصيل ليبقى البيت يعمل.",
        "منظمون يريدون مسؤولية مشتركة بدون تصعيد الأدوار.",
      ],
      notList: [
        "ليس محرك قواعد.",
        "ليس مراقبة.",
        "ليس أداة تقارير.",
        "ليس موجهاً للمالك.",
      ],
      weekly: {
        intro: "كينلي يستخدم إيقاعاً أسبوعياً لتبقى المسؤولية بشرية.",
        points: [
          "راجعوا أسبوعياً حتى لا تتراكم المشكلات.",
          "أعيدوا ضبط التوقعات بدون جعلها شخصية.",
          "حافظوا على الهدوء بدون تصعيد.",
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
