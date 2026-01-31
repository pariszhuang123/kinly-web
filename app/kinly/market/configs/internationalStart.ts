import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const internationalStartConfig: ScenarioConfig = {
  pageKey: "kinly_market_new_place",
  recognition: {
    heading: "New place, unclear norms.",
    subtitle: "You want to fit in without asking awkward questions.",
    body: "Kinly shows what matters in the home so you can contribute without guessing or overstepping.",
  },
  hero: {
    headline: "Clarity in a new place.",
    subhead: "See what the home needs before anyone has to explain it.",
    body: "New routines, new people, new expectations. Kinly surfaces what matters so you can settle in calmly.",
    ctaHeading: "Start settling in with clarity",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Quiet hours, shared meals, who is around tonight.",
      footer: "Things to notice without needing to ask.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Contribute at your own pace",
      copy: "Pick up tasks when you can, swap when life changes.",
      footer: "You are always in control - nothing is locked in.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "Norms everyone can see",
      copy: "Quiet hours, guests, cleaning expectations - all in one calm place.",
      footer: "No surprises, no awkward questions.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],
  chips: [
    "I want to help but I am not sure what is expected.",
    "Asking about norms feels awkward.",
    "I do not want to overstep or underdo it.",
    "I care but I need clarity, not guesswork.",
  ],
  rolePoints: [
    "Surfaces norms so you do not have to ask.",
    "Keeps contributions visible without pressure or judgement.",
  ],
  formingPoints: [
    "Settling in takes time - Kinly keeps context as you adjust.",
    "New routines are normal, not failures.",
  ],
  audience: [
    "People settling into a new shared home.",
    "Anyone adjusting to unfamiliar routines.",
    "Housemates who want calm clarity, not awkward conversations.",
  ],
  notList: ["Not a surveillance tool.", "Not a scorecard or leaderboard.", "Not a chore boss."],
  weekly: {
    intro: "Kinly uses a weekly rhythm so you can settle in without daily pressure.",
    points: [
      "Check in weekly, not daily - no streaks to maintain.",
      "Reflections are for understanding, not grading anyone.",
      "Kinly never forces conversations - it helps you decide when to talk.",
    ],
  },
  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },
  defaultLocale: "en",
  translations: {
    es: {
      recognition: {
        heading: "Lugar nuevo, normas poco claras.",
        subtitle: "Quieres encajar sin hacer preguntas incómodas.",
        body: "Kinly muestra lo que importa en casa para que puedas contribuir sin adivinar ni pasarte.",
      },
      hero: {
        headline: "Claridad en un lugar nuevo.",
        subhead: "Ve lo que necesita la casa antes de que alguien tenga que explicarlo.",
        body: "Nuevas rutinas, nuevas personas, nuevas expectativas. Kinly muestra lo que importa para que te adaptes con calma.",
        ctaHeading: "Empieza a instalarte con claridad",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "Qué necesita atención",
          copy: "Horas de silencio, comidas compartidas, quién está en casa esta noche.",
          footer: "Cosas para notar sin necesidad de preguntar.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Contribuye a tu ritmo",
          copy: "Toma tareas cuando puedas, intercambia cuando la vida cambie.",
          footer: "Siempre tienes el control - nada queda fijo.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Hogar",
          headline: "Normas que todos pueden ver",
          copy: "Silencio, visitas, expectativas de limpieza - todo en un lugar tranquilo.",
          footer: "Sin sorpresas, sin preguntas incómodas.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
        },
      ],
      chips: [
        "Quiero ayudar pero no sé qué se espera.",
        "Preguntar sobre normas se siente incómodo.",
        "No quiero pasarme ni quedarme corto.",
        "Me importa pero necesito claridad, no adivinanzas.",
      ],
      rolePoints: [
        "Muestra normas para que no tengas que preguntar.",
        "Mantiene las contribuciones visibles sin presión ni juicios.",
      ],
      formingPoints: [
        "Adaptarse lleva tiempo - Kinly guarda el contexto mientras te ajustas.",
        "Las nuevas rutinas son normales, no fallos.",
      ],
      audience: [
        "Personas instalándose en un nuevo hogar compartido.",
        "Cualquiera ajustándose a rutinas desconocidas.",
        "Compañeros que quieren claridad tranquila, no conversaciones incómodas.",
      ],
      notList: ["No es vigilancia.", "No es marcador ni ranking.", "No es un jefe de tareas."],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que te adaptes sin presión diaria.",
        points: [
          "Revisa semanalmente, no a diario - sin rachas que mantener.",
          "Reflexiones para entender, no para juzgar.",
          "Kinly nunca fuerza conversaciones - te ayuda a decidir cuándo hablar.",
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
      },
    } satisfies LocaleCopy,
    ar: {
      recognition: {
        heading: "مكان جديد، قواعد غير واضحة.",
        subtitle: "تريد الانسجام بدون طرح أسئلة محرجة.",
        body: "كينلي يُظهر ما يهم في المنزل حتى تتمكن من المساهمة بدون تخمين أو تجاوز.",
      },
      hero: {
        headline: "وضوح في مكان جديد.",
        subhead: "اعرف ما يحتاجه المنزل قبل أن يضطر أحد لشرحه.",
        body: "روتين جديد، أشخاص جدد، توقعات جديدة. كينلي يُظهر ما يهم حتى تستقر بهدوء.",
        ctaHeading: "ابدأ الاستقرار بوضوح",
      },
      screens: [
        {
          title: "اليوم",
          eyebrow: "الآن",
          headline: "ما يحتاج انتباه",
          copy: "ساعات الهدوء، الوجبات المشتركة، من موجود الليلة.",
          footer: "أشياء لملاحظتها بدون الحاجة للسؤال.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
        },
        {
          title: "إدارة",
          eyebrow: "تعديل",
          headline: "ساهم بإيقاعك الخاص",
          copy: "تولَّ المهام عندما تستطيع، بدّل عندما تتغير الحياة.",
          footer: "أنت دائماً مسيطر - لا شيء مقفل.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
        },
        {
          title: "مركز المنزل",
          eyebrow: "المنزل المشترك",
          headline: "قواعد يراها الجميع",
          copy: "ساعات الهدوء، الضيوف، توقعات النظافة - كلها في مكان واحد هادئ.",
          footer: "لا مفاجآت، لا أسئلة محرجة.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
        },
      ],
      chips: [
        "أريد المساعدة لكن لست متأكداً مما هو متوقع.",
        "السؤال عن القواعد يبدو محرجاً.",
        "لا أريد التجاوز أو التقصير.",
        "أهتم لكن أحتاج وضوح، ليس تخمين.",
      ],
      rolePoints: [
        "يُظهر القواعد حتى لا تضطر للسؤال.",
        "يبقي المساهمات مرئية بدون ضغط أو حكم.",
      ],
      formingPoints: [
        "الاستقرار يحتاج وقت - كينلي يحفظ السياق بينما تتأقلم.",
        "الروتين الجديد طبيعي، ليس فشلاً.",
      ],
      audience: [
        "أشخاص يستقرون في منزل مشترك جديد.",
        "أي شخص يتأقلم مع روتين غير مألوف.",
        "زملاء السكن الذين يريدون وضوح هادئ، لا محادثات محرجة.",
      ],
      notList: ["ليس أداة مراقبة.", "ليس بطاقة نقاط أو لوحة صدارة.", "ليس رئيس مهام."],
      weekly: {
        intro: "كينلي يستخدم إيقاعاً أسبوعياً حتى تستقر بدون ضغط يومي.",
        points: [
          "راجع أسبوعياً، ليس يومياً - لا سلاسل للحفاظ عليها.",
          "التأملات للفهم، ليس لتقييم أحد.",
          "كينلي لا يفرض محادثات - يساعدك تقرر متى تتكلم.",
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
      },
    } satisfies LocaleCopy,
  },
};
