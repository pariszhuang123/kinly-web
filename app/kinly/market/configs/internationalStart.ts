import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const internationalStartConfig: ScenarioConfig = {
  pageKey: "kinly_market_new_place",
  recognition: {
    heading: "New place, unclear norms.",
    subtitle: "You want to fit in without asking awkward questions.",
    body: "Kinly shows what matters in the home so you can contribute without guessing or overstepping.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. When you move into a new place, it keeps expectations clear without turning the home into a checklist.",
  hero: {
    headline: "Clarity in a new place.",
    subhead: "See what the home needs before anyone has to explain it.",
    body: "New routines, new people, new expectations. Kinly surfaces what matters so you can settle in calmly.",
    ctaHeading: "Start settling in with clarity",
  },
  howSteps: [
    {
      title: "Agree expectations with photos",
      body: "Snap what “done” looks like for shared areas so you do not have to guess standards.",
    },
    {
      title: "Reset weekly, lightly",
      body: "Once a week, surface what feels off (noise, dishes, guests) so it is fixed before it becomes conflict.",
    },
    {
      title: "Keep shared visibility",
      body: "Everyone can see light tasks and norms, so you can help without overstepping or waiting to be asked.",
    },
  ],
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Quiet hours, shared meals, who is around tonight.",
      footer: "Things to notice without needing to ask.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Contribute at your own pace",
      copy: "Pick up tasks when you can, swap when life changes.",
      footer: "You are always in control - nothing is locked in.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "Norms everyone can see",
      copy: "Quiet hours, guests, cleaning expectations - all in one calm place.",
      footer: "No surprises, no awkward questions.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
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
  toolsHeading: "Supported by practical tools",
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction — without turning shared living into a task system.",
  toolsList: [
    "Shared flows (with assignments if you want) for dishes, bins, and guests so you can help without guessing.",
    "Shared bills so amounts and due dates are visible without awkward chasing.",
    "Calm check-ins so everyone feels seen while you are still settling in.",
  ],
  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },
  defaultLocale: "en",
  translations: {
    es: {
      whatHeading: "Que es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. Al mudarte a un lugar nuevo, mantiene claras las expectativas sin convertir la casa en una lista de tareas.",
      recognition: {
        heading: "Lugar nuevo, normas poco claras.",
        subtitle: "Quieres encajar sin hacer preguntas incomodas.",
        body: "Kinly muestra lo que importa en casa para que puedas contribuir sin adivinar ni pasarte.",
      },
      hero: {
        headline: "Claridad en un lugar nuevo.",
        subhead: "Ve lo que necesita la casa antes de que alguien tenga que explicarlo.",
        body: "Nuevas rutinas, nuevas personas, nuevas expectativas. Kinly muestra lo que importa para que te adaptes con calma.",
        ctaHeading: "Empieza a instalarte con claridad",
      },
      howSteps: [
        {
          title: "Acordar expectativas con fotos",
          body: "Toma una foto de como se ve “listo” en las zonas compartidas para no adivinar los estandares.",
        },
        {
          title: "Reajuste semanal, sin presion",
          body: "Cada semana, pongan ruido, platos o visitas sobre la mesa para resolverlo antes de que sea conflicto.",
        },
        {
          title: "Mantener visibilidad compartida",
          body: "Todos ven tareas ligeras y normas, asi puedes ayudar sin pasarte ni esperar a que te pidan.",
        },
      ],
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "Que necesita atencion",
          copy: "Horas de silencio, comidas compartidas, quien esta en casa esta noche.",
          footer: "Cosas para notar sin necesidad de preguntar.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Contribuye a tu ritmo",
          copy: "Toma tareas cuando puedas, intercambia cuando la vida cambie.",
          footer: "Siempre tienes el control - nada queda fijo.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Hogar",
          headline: "Normas que todos pueden ver",
          copy: "Silencio, visitas, expectativas de limpieza - todo en un lugar tranquilo.",
          footer: "Sin sorpresas, sin preguntas incomodas.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Quiero ayudar pero no se que se espera.",
        "Preguntar sobre normas se siente incomodo.",
        "No quiero pasarme ni quedarme corto.",
        "Me importa pero necesito claridad, no adivinanzas.",
      ],
      rolePoints: [
        "Muestra normas para que no tengas que preguntar.",
        "Mantiene las contribuciones visibles sin presion ni juicios.",
      ],
      formingPoints: [
        "Adaptarse lleva tiempo - Kinly guarda el contexto mientras te ajustas.",
        "Las nuevas rutinas son normales, no fallos.",
      ],
      audience: [
        "Personas instalandoce en un nuevo hogar compartido.",
        "Cualquiera ajustandose a rutinas desconocidas.",
        "Companeros que quieren claridad tranquila, no conversaciones incomodas.",
      ],
      notList: ["No es vigilancia.", "No es marcador ni ranking.", "No es un jefe de tareas."],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que te adaptes sin presion diaria.",
        points: [
          "Revisa semanalmente, no a diario - sin rachas que mantener.",
          "Reflexiones para entender, no para juzgar.",
          "Kinly nunca fuerza conversaciones - te ayuda a decidir cuando hablar.",
        ],
        heading: "Reflexion semanal, a ritmo humano",
      },
      toolsHeading: "Apoyado por herramientas practicas",
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la friccion diaria — sin convertir la vida compartida en un sistema de tareas.",
      toolsList: [
        "Flujos compartidos (con asignaciones si quieren) para platos, basura y visitas, sin adivinar.",
        "Cuentas compartidas para ver montos y fechas sin tener que perseguir a nadie.",
        "Revisiones calmadas para que todos se sientan vistos mientras te adaptas.",
      ],
      sectionHeadings: {
        howItWorks: "Como funciona Kinly",
        howItWorksSubtitle: "Tres pasos simples que mantienen a todos alineados.",
        soundsLikeYou: "Te suena familiar?",
        roleHeading: "El rol de Kinly: reflexion primero",
        formingHeading: "Si tu hogar aun se esta formando",
        audienceHeading: "Para quien es esto",
        notListHeading: "Kinly no es...",
        readyHeading: "Cuando estes listo",
        readySubtitle: "Kinly vive en la app - empieza en iOS o Android.",
      },
      availability: {
        body: "Kinly esta disponible en Nueva Zelanda y Singapur. Te avisaremos cuando abra en tu region.",
      },
    } satisfies LocaleCopy,
    ar: {
      whatHeading: "ما هو كينلي",
      whatBody:
        "كينلي هو تطبيق للعيش المشترك صُمم لمن يعيشون معاً. عند الانتقال لمكان جديد يبقي التوقعات واضحة بدون تحويل المنزل إلى قائمة مهام.",
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
      howSteps: [
        {
          title: "اتفقوا على التوقعات بالصور",
          body: "التقط صورة لما يبدو عليه “الإنجاز” في المساحات المشتركة حتى لا تخمن المعايير.",
        },
        {
          title: "إعادة ضبط أسبوعية وخفيفة",
          body: "مرة في الأسبوع، أظهروا الضجيج أو الأطباق أو الضيوف لتُحل قبل أن تصبح خلافاً.",
        },
        {
          title: "حافظوا على وضوح مشترك",
          body: "يرى الجميع المهام الخفيفة والقواعد، لتستطيع المساعدة دون تجاوز أو انتظار الطلب.",
        },
      ],
      screens: [
        {
          title: "اليوم",
          eyebrow: "الآن",
          headline: "ما يحتاج انتباه",
          copy: "ساعات الهدوء، الوجبات المشتركة، من موجود الليلة.",
          footer: "أشياء لملاحظتها دون الحاجة للسؤال.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "إدارة",
          eyebrow: "تعديل",
          headline: "ساهم بإيقاعك الخاص",
          copy: "تولَّ المهام عندما تستطيع، بدّل عندما تتغير الحياة.",
          footer: "أنت دائماً مسيطر - لا شيء مقفل.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "مركز المنزل",
          eyebrow: "المنزل المشترك",
          headline: "قواعد يراها الجميع",
          copy: "ساعات الهدوء، الضيوف، توقعات النظافة - كلها في مكان واحد هادئ.",
          footer: "لا مفاجآت، لا أسئلة محرجة.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "أريد المساعدة لكن لست متأكداً مما هو متوقع.",
        "السؤال عن القواعد يبدو محرجاً.",
        "لا أريد التجاوز أو التقصير.",
        "أهتم لكن أحتاج وضوحاً، ليس تخميناً.",
      ],
      rolePoints: [
        "يُظهر القواعد حتى لا تضطر للسؤال.",
        "يبقي المساهمات مرئية بدون ضغط أو حكم.",
      ],
      formingPoints: [
        "الاستقرار يحتاج وقتاً - كينلي يحفظ السياق بينما تتأقلم.",
        "الروتين الجديد طبيعي، ليس فشلاً.",
      ],
      audience: [
        "أشخاص يستقرون في منزل مشترك جديد.",
        "أي شخص يتأقلم مع روتين غير مألوف.",
        "زملاء السكن الذين يريدون وضوحاً هادئاً، لا محادثات محرجة.",
      ],
      notList: ["ليس أداة مراقبة.", "ليس بطاقة نقاط أو لوحة صدارة.", "ليس رئيس مهام."],
      weekly: {
        intro: "كينلي يستخدم إيقاعاً أسبوعياً حتى تستقر بدون ضغط يومي.",
        points: [
          "راجع أسبوعياً، ليس يومياً - لا سلاسل للحفاظ عليها.",
          "التأملات للفهم، ليست لتقييم أحد.",
          "كينلي لا يفرض محادثات - يساعدك تقرر متى تتكلم.",
        ],
        heading: "تأمل أسبوعي، بإيقاع بشري",
      },
      toolsHeading: "مدعوم بأدوات عملية",
      toolsIntro:
        "بعد أن تتفقوا على التوقعات، يقدم كينلي أدوات بسيطة تقلل الاحتكاكات اليومية — بدون تحويل العيش المشترك إلى نظام مهام.",
      toolsList: [
        "تدفّقات مشتركة (مع تعيينات إذا أردتم) للأطباق والقمامة والضيوف دون تخمين.",
        "فواتير مشتركة لعرض المبالغ والمواعيد بدون ملاحقة محرجة.",
        "مراجعات هادئة ليشعر الجميع بأنهم مرئيون أثناء استقرارك.",
      ],
      sectionHeadings: {
        howItWorks: "كيف يعمل كينلي",
        howItWorksSubtitle: "ثلاث خطوات بسيطة تبقي الجميع على توافق.",
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
