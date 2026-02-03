import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const liveInLandlordConfig: ScenarioConfig = {
  pageKey: "live_in_landlord",

  recognition: {
    heading: "You live with your tenants — clarity matters more.",
    subtitle: "You want a calm home, not a power imbalance.",
    body: "Kinly keeps house expectations visible in a neutral, human way so everyone feels comfortable sharing the space.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps expectations clear without making you the enforcer or your tenants feel policed.",

  hero: {
    headline: "A calmer shared home with your tenants.",
    subhead: "Neutral clarity for noise, guests, and shared spaces.",
    body: "Kinly shows the same baseline to you and your tenants — so running the home stays fair, not formal.",
    ctaHeading: "Set a calm baseline",
  },

  howSteps: [
    {
      title: "Agree expectations with photos",
      body: "Show what “ready” looks like for kitchen, bathroom, and shared spaces so standards feel fair, not top-down.",
    },
    {
      title: "Reset weekly, lightly",
      body: "Once a week, surface noise, guests, and light maintenance so tension is handled before it feels like enforcement.",
    },
    {
      title: "Keep shared visibility",
      body: "Everyone sees norms and light tasks, so reminders feel neutral and respectful.",
    },
  ],

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Quiet hours, shared spaces, and light asks that keep the peace.",
      footer: "Clarity without confrontation.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update the baseline without awkwardness",
      copy: "Tweak expectations as people’s schedules change — nothing is locked in.",
      footer: "Neutral updates, no power plays.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference for everyone",
      copy: "Noise, guests, cleaning, and shared costs in one place — no repeated speeches.",
      footer: "Shared clarity, respectful tone.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],

  chips: [
    "I want clarity without feeling like the boss.",
    "I live here too — the home should feel fair to everyone.",
    "I need guests/noise/cleaning clear without awkward talks.",
  ],

  rolePoints: [
    "Keeps expectations neutral so you are not the enforcer.",
    "Makes adjustments easy when routines change.",
  ],

  formingPoints: [
    "Tenants may change; the baseline stays clear.",
    "If it drifts, you reset next week without confrontation.",
  ],

  audience: [
    "Live-in landlords and resident owners.",
    "Homes where owners and tenants share space daily.",
  ],

  notList: [
    "Not a legal document.",
    "Not surveillance.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so shared living stays human and calm.",
    points: [
      "Check in weekly so small issues don’t stack up.",
      "Adjust expectations without blame — just clarity.",
      "Keep the home warm while staying aligned.",
    ],
  },

  toolsHeading: "Supported by practical tools",
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction — without turning your home into a rulebook.",
  toolsList: [
    "Shared flows (with assignments if you want) for cleaning and bins so standards stay clear.",
    "Shared bills so contributions are visible without chasing.",
    "Calm check-ins so everyone feels seen without hierarchy.",
  ],

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      whatHeading: "Qué es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. Mantiene claras las expectativas sin que tengas que ser el ejecutor ni que tus inquilinos se sientan vigilados.",
      recognition: {
        heading: "Vives con tus inquilinos — la claridad importa más.",
        subtitle: "Quieres un hogar tranquilo, no una relación de poder.",
        body: "Kinly mantiene visibles las expectativas de forma neutral y humana para que todos se sientan cómodos compartiendo el espacio.",
      },
      hero: {
        headline: "Un hogar tranquilo con tus inquilinos.",
        subhead: "Claridad neutral para ruido, visitas y espacios.",
        body: "Kinly muestra la misma base a ti y a tus inquilinos — así la convivencia es justa, no formal.",
        ctaHeading: "Fija una base tranquila",
      },
      howSteps: [
        {
          title: "Acordar expectativas con fotos",
          body: "Muestren cómo se ve “listo” en cocina, baño y zonas comunes para que el estándar se sienta justo, no impuesto.",
        },
        {
          title: "Reajuste semanal, sin fricción",
          body: "Cada semana, pongan ruido, visitas y mantenimiento sobre la mesa para resolverlo antes de que sea conflicto.",
        },
        {
          title: "Mantener visibilidad compartida",
          body: "Todos ven normas y tareas ligeras, así los recordatorios son neutrales y respetuosos.",
        },
      ],
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "Qué necesita atención",
          copy: "Horas de silencio, espacios compartidos y peticiones ligeras para mantener la paz.",
          footer: "Claridad sin confrontación.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Actualiza la base sin incomodidad",
          copy: "Ajusta expectativas a medida que cambian los horarios — nada queda fijo.",
          footer: "Actualizaciones neutrales, sin juegos de poder.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Un referente tranquilo para todos",
          copy: "Ruido, visitas, limpieza y costos en un solo lugar — sin discursos repetidos.",
          footer: "Claridad compartida, tono respetuoso.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/hub.png",
        },
      ],
      chips: [
        "Quiero claridad sin sentirme jefe.",
        "También vivo aquí — debe sentirse justo para todos.",
        "Necesito visitas/ruido/limpieza claros sin charlas incómodas.",
      ],
      rolePoints: [
        "Mantiene las expectativas neutrales para que no seas el ejecutor.",
        "Facilita ajustes cuando cambian las rutinas.",
      ],
      formingPoints: [
        "Los inquilinos pueden cambiar; la base sigue clara.",
        "Si se desvía, se reinicia la próxima semana sin confrontación.",
      ],
      audience: [
        "Propietarios residentes y caseros que viven en la casa.",
        "Hogares donde propietarios e inquilinos comparten el espacio a diario.",
      ],
      notList: [
        "No es un documento legal.",
        "No es vigilancia.",
        "No es un marcador.",
        "No es un jefe de tareas.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que la convivencia siga siendo humana y tranquila.",
        points: [
          "Revisa semanalmente para que lo pequeño no se acumule.",
          "Ajusta expectativas sin culpas — solo claridad.",
          "Mantén el hogar cálido mientras siguen alineados.",
        ],
        heading: "Reflexión semanal, a ritmo humano",
      },
      toolsHeading: "Apoyado por herramientas prácticas",
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricción diaria — sin convertir el hogar en un libro de reglas.",
      toolsList: [
        "Flujos compartidos (con asignaciones si quieren) para limpieza y basura para mantener claros los estándares.",
        "Cuentas compartidas para que las contribuciones sean visibles sin persecución.",
        "Revisiones calmadas para que todos se sientan vistos sin jerarquías.",
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
        "كينلي هو تطبيق للعيش المشترك صُمم لمن يعيشون معاً. يبقي التوقعات واضحة دون أن يجعلك منفّذاً أو يجعل المستأجرين يشعرون بالرقابة.",
      recognition: {
        heading: "أنت تعيش مع مستأجريك — الوضوح أهم.",
        subtitle: "تريد بيتاً هادئاً لا علاقة قوة.",
        body: "كينلي يبقي توقعات البيت مرئية بنبرة محايدة وبشرية ليشعر الجميع بالراحة في المشاركة.",
      },
      hero: {
        headline: "بيت هادئ تشاركه مع المستأجرين.",
        subhead: "وضوح محايد للضوضاء والضيوف والمساحات المشتركة.",
        body: "كينلي يُظهر نفس الأساس لك وللمستأجرين — فيبقى تدبير البيت عادلاً لا رسمياً.",
        ctaHeading: "ضع أساساً هادئاً",
      },
      howSteps: [
        {
          title: "اتفقوا على التوقعات بالصور",
          body: "أروا كيف يبدو “جاهز” للمطبخ والحمام والمساحات المشتركة ليشعر الجميع أن المعايير عادلة وليست من أعلى لأسفل.",
        },
        {
          title: "إعادة ضبط أسبوعية وخفيفة",
          body: "مرة في الأسبوع، أظهروا الضوضاء والضيوف والصيانة الخفيفة ليُعالج التوتر قبل أن يبدو كفرض.",
        },
        {
          title: "حافظوا على وضوح مشترك",
          body: "يرى الجميع المعايير والمهام الخفيفة، فيشعر التذكير بأنه محايد ومحترم.",
        },
      ],
      screens: [
        {
          title: "اليوم",
          eyebrow: "الآن",
          headline: "ما يحتاج انتباهاً",
          copy: "ساعات هدوء ومساحات مشتركة وطلبات خفيفة تحافظ على السلام.",
          footer: "وضوح بلا مواجهة.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/today.png",
        },
        {
          title: "إدارة",
          eyebrow: "تعديل",
          headline: "حدّث الأساس بلا إحراج",
          copy: "عدّلوا التوقعات مع تغير الجداول — لا شيء مقفل.",
          footer: "تحديثات محايدة بلا صراعات قوة.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/explore.png",
        },
        {
          title: "مركز المنزل",
          eyebrow: "مرجع",
          headline: "مرجع هادئ للجميع",
          copy: "الضوضاء والضيوف والتنظيف والتكاليف في مكان واحد — بلا خطب مكررة.",
          footer: "وضوح مشترك، نبرة محترمة.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/hub.png",
        },
      ],
      chips: [
        "أريد وضوحاً دون أن أبدو رئيساً.",
        "أنا أعيش هنا أيضاً — يجب أن يشعر الجميع بالعدل.",
        "أحتاج وضوح الضيوف/الضوضاء/التنظيف بلا محادثات محرجة.",
      ],
      rolePoints: [
        "يبقي التوقعات محايدة فلا تكون المنفّذ.",
        "يسهّل التعديل عند تغيّر الروتين.",
      ],
      formingPoints: [
        "قد يتغير المستأجرون؛ الأساس يبقى واضحاً.",
        "إذا انحرف، تعيدونه الأسبوع القادم بلا مواجهة.",
      ],
      audience: [
        "مالكون مقيمون وأصحاب يسكنون في المنزل.",
        "بيوت يشارك فيها المالك والمستأجرون نفس المساحة يومياً.",
      ],
      notList: [
        "ليس وثيقة قانونية.",
        "ليس مراقبة.",
        "ليس لوحة نقاط.",
        "ليس رئيس مهام.",
      ],
      weekly: {
        intro: "كينلي يعمل بإيقاع أسبوعي لتبقى المعيشة المشتركة بشرية وهادئة.",
        points: [
          "راجعوا أسبوعياً حتى لا تتراكم الأمور الصغيرة.",
          "عدّلوا التوقعات بدون لوم — فقط وضوح.",
          "حافظوا على دفء البيت مع البقاء متوافقين.",
        ],
        heading: "تأمل أسبوعي، بإيقاع بشري",
      },
      toolsHeading: "مدعوم بأدوات عملية",
      toolsIntro:
        "بعد أن تتفقوا على التوقعات، يقدم كينلي أدوات بسيطة تقلل الاحتكاكات اليومية — بدون تحويل المنزل إلى كتاب قواعد.",
      toolsList: [
        "تدفّقات مشتركة (مع تعيينات إذا أردتم) للتنظيف والقمامة للحفاظ على وضوح المعايير.",
        "فواتير مشتركة لعرض المبالغ والمواعيد بدون ملاحقة.",
        "مراجعات هادئة ليشعر الجميع بأنهم مرئيون بلا تسلسل هرمي.",
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
