import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const takeawayBudgetConfig: ScenarioConfig = {
  pageKey: "kinly_market_takeaway_budget",
  recognition: {
    heading: "Cheap nights can feel heavier in shared houses.",
    subtitle: "Especially when no one wants to make it awkward.",
    body: "Kinly keeps plans, turns, and paybacks clear so no one feels taken for granted.",
  },
  hero: {
    headline: "A calmer way to coordinate budget nights together.",
    subhead: "Nights like this — fish and chips, something quick, something cheap — are common in shared homes.",
    body: "See tonight’s plan, who’s in, who’s covering it, and what changes if plans shift. No pressure. No chasing.",
    ctaHeading: "Keep tonight simple",
    privacyNote: "Private by default. No ads. No surveillance. Kinly doesn’t move money — it just keeps things clear.",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Tonight",
      headline: "What’s the plan?",
      copy: "A simple option, who’s in, and whose turn it is — without awkward messages.",
      footer: "If someone can’t cover it, Kinly adjusts without blame.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Switch",
      headline: "Swap turns fast",
      copy: "Reassign buying or pickup when shifts change or someone’s week is tight.",
      footer: "No streaks, no scorekeeping — just clarity.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "Agree what works once",
      copy: "Set price caps, sides, and timing before anyone feels uncomfortable.",
      footer: "House norms and shared context in one calm place.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],
  chips: [
    "Fish and chips is just the moment — the real problem is shared-house tension.",
    "Decide who covers it this week without awkwardness.",
    "Keep a shared list of low-cost options everyone’s okay with.",
    "Kinly shows who owes what — but never handles payments.",
  ],
  rolePoints: [
    "Surfaces a simple plan before everyone is hungry.",
    "Keeps turns and paybacks clear so it feels fair without nagging.",
  ],
  formingPoints: [
    "People come and go each term — Kinly keeps the context.",
    "Late shifts or tight weeks are normal, not a failure.",
  ],
  audience: ["Students and roommates coordinating cheap nights.", "Shared homes where money is tight this week."],
  notList: ["Not a budgeting lecture.", "Not a payment app.", "Not a leaderboard or debt collector.", "Not a chore chart."],
  weekly: {
    intro: "Kinly moves at a weekly rhythm to keep things human-paced.",
    points: [
      "Check in weekly, not daily — no streaks to maintain.",
      "Reflections are for understanding, not grading anyone.",
      "Plans can change without drama when someone’s week is tight.",
    ],
  },
  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
    ctaLabel: "Express interest for your region.",
  },
  defaultLocale: "en",
  translations: {
    es: {
      recognition: {
        heading: "Las noches baratas pueden sentirse más pesadas en pisos compartidos.",
        subtitle: "Sobre todo cuando nadie quiere que sea incómodo.",
        body: "Kinly deja claros los planes, turnos y reembolsos para que nadie se sienta aprovechado.",
      },
      hero: {
        headline: "Una forma tranquila de coordinar noches baratas juntos.",
        subhead:
          "Noches como esta — fish and chips, algo rápido, algo barato — son comunes en casas compartidas.",
        body: "Mira el plan de esta noche, quién se apunta, quién cubre y qué cambia si el plan se mueve. Sin presión. Sin persecución.",
        ctaHeading: "Hacer la noche más simple",
        privacyNote: "Privado por defecto. Sin anuncios. Sin vigilancia. Kinly no mueve dinero — solo mantiene claridad.",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Esta noche",
          headline: "¿Cuál es el plan?",
          copy: "Una opción simple, quién se apunta y a quién le toca — sin mensajes incómodos.",
          footer: "Si alguien no puede pagar, Kinly ajusta sin culpas.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Cambiar",
          headline: "Cambia turnos rápido",
          copy: "Reasigna pago o recogida cuando cambian turnos o la semana está ajustada.",
          footer: "Sin rachas ni marcadores — solo claridad.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Normas compartidas",
          headline: "Acordar qué funciona una vez",
          copy: "Define topes de precio, acompañamientos y horarios antes de que sea incómodo.",
          footer: "Normas del piso y contexto compartido en un solo lugar tranquilo.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
        },
      ],
      chips: [
        "Fish and chips es solo el momento — el problema real es la tensión en casa compartida.",
        "Decidir quién cubre esta semana sin incomodidad.",
        "Lista compartida de opciones baratas con las que todos están bien.",
        "Kinly muestra quién debe qué — pero nunca gestiona pagos.",
      ],
      rolePoints: [
        "Muestra un plan simple antes de que llegue el hambre.",
        "Mantiene claros turnos y reembolsos sin regañar.",
      ],
      formingPoints: [
        "Gente entra y sale cada semestre — Kinly guarda el contexto.",
        "Turnos tarde o semanas ajustadas son normales, no fallos.",
      ],
      audience: [
        "Estudiantes y compis de piso coordinando noches baratas.",
        "Casas compartidas con dinero justo esta semana.",
      ],
      notList: ["No es una clase de finanzas.", "No es una app de pagos.", "No es marcador ni cobrador.", "No es un cuadro de tareas."],
      weekly: {
        intro: "Kinly usa un ritmo semanal para mantener lo humano primero.",
        points: [
          "Revisa cada semana, no cada día — sin rachas.",
          "Reflexiones para entender, no para juzgar.",
          "Los planes pueden cambiar sin drama cuando la semana está ajustada.",
        ],
        heading: "Reflexión semanal, a ritmo humano",
      },
      sectionHeadings: {
        howItWorks: "Cómo funciona Kinly",
        howItWorksSubtitle: "Nada se comparte sin intención.",
        soundsLikeYou: "¿Te suena familiar?",
        roleHeading: "El rol de Kinly: reflexión primero",
        formingHeading: "Si tu hogar aún se está formando",
        audienceHeading: "Para quién es esto",
        notListHeading: "Kinly no es...",
        readyHeading: "Cuando estés listo",
        readySubtitle: "Kinly vive en la app - empieza en iOS o Android.",
      },
      availability: {
        body: "Kinly está disponible en Nueva Zelanda y Singapur. Te avisaremos cuando abra en tu región.",
        ctaLabel: "Apúntate para tu región.",
      },
    } satisfies LocaleCopy,
    ar: {
      recognition: {
        heading: "ليالي الطلبات الخارجية بدون الإحراج.",
        subtitle: "تناوبوا على العشاء بدون متابعة من يدين لمن.",
        body: "كينلي يُظهر من يغطي الليلة وكيف تتوازن الأمور مع مرور الوقت - بدون جداول أو تذكيرات.",
      },
      hero: {
        headline: "ليالي الطلبات الخارجية، بدون حسابات.",
        subhead: "اعرف من يغطي ومتى يتوازن الأمر، بدون متابعة.",
        body: "كينلي يُظهر نوبات الطلبات الخارجية بلطف حتى لا أحد يشعر بالاستغلال. لا جداول، لا حسابات، لا ذنب.",
        ctaHeading: "ابدأ ليالي طلبات خارجية أعدل",
      },
      screens: [
        {
          title: "اليوم",
          eyebrow: "الليلة",
          headline: "من يغطي العشاء",
          copy: "شاهد من دوره ومن غطى آخر مرة - بدون سؤال.",
          footer: "بسيط وواضح، بدون إحراج.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
        },
        {
          title: "إدارة",
          eyebrow: "تبديل",
          headline: "بدّل الأدوار بدون دراما",
          copy: "إذا كان شخص ضيق هذا الأسبوع، عدّل بهدوء.",
          footer: "الجميع يبقى على علم.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
        },
        {
          title: "مركز المنزل",
          eyebrow: "قواعد المنزل",
          headline: "الخيارات المشتركة في مكان واحد",
          copy: "الأماكن المفضلة، نطاقات الميزانية، والقواعد المتفق عليها.",
          footer: "قواعد المنزل والسياق المشترك في مكان واحد هادئ.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
        },
      ],
      chips: [
        "السمك والبطاطس مجرد لحظة - المشكلة الحقيقية هي التوتر في السكن المشترك.",
        "تحديد من يغطي هذا الأسبوع بدون إحراج.",
        "قائمة مشتركة بالخيارات الرخيصة التي يوافق عليها الجميع.",
        "عندما يكون شخص ضيق، يمكن للآخرين التغطية بدون ضغط.",
      ],
      rolePoints: [
        "يُظهر نوبات الطلبات الخارجية بلطف حتى لا أحد يشعر بالاستغلال.",
        "يبقي الخطط خفيفة - لا جداول، لا متابعة، لا ذنب.",
      ],
      formingPoints: [
        "زملاء السكن يتغيرون - كينلي يحفظ السياق المشترك مستمر.",
        "الأسابيع الضيقة طبيعية؛ التعديل أو التخطي ليس فشل.",
      ],
      audience: [
        "الطلاب وزملاء الشقق ينسقون ليالي رخيصة.",
        "المنازل المشتركة بميزانية ضيقة هذا الأسبوع.",
      ],
      notList: ["ليس درس مالي.", "ليس تطبيق دفع.", "ليس لوحة نقاط أو محصّل.", "ليس جدول مهام."],
      weekly: {
        intro: "كينلي يستخدم إيقاعاً أسبوعياً للحفاظ على الإنسانية أولاً.",
        points: [
          "راجع كل أسبوع، ليس كل يوم - لا سلاسل.",
          "التأملات للفهم، ليس للحكم.",
          "الخطط يمكن أن تتغير بدون دراما عندما يكون الأسبوع ضيق.",
        ],
        heading: "تأمل أسبوعي، بإيقاع بشري",
      },
      sectionHeadings: {
        howItWorks: "كيف يعمل كينلي",
        howItWorksSubtitle: "لا شيء يُشارك بدون قصد.",
        soundsLikeYou: "هل يبدو هذا مثل مكانك؟",
        roleHeading: "دور كينلي: التأمل أولاً",
        formingHeading: "إذا كان منزلك لا يزال يتشكل",
        audienceHeading: "لمن هذا",
        notListHeading: "كينلي ليس...",
        readyHeading: "عندما تكون جاهزاً",
        readySubtitle: "كينلي موجود في التطبيق - ابدأ على iOS أو Android.",
      },
      availability: {
        body: "كينلي متاح حالياً في نيوزيلندا وسنغافورة. سنراسلك عندما يفتح كينلي في منطقتك.",
        ctaLabel: "سجّل لمنطقتك.",
      },
    } satisfies LocaleCopy,
  },
};
