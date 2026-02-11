import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const freshersConfig: ScenarioConfig = {
  pageKey: "kinly_market_freshers",
  recognition: {
    heading: "Move-in chaos without the tension.",
    subtitle: "Keep the flat calm while everyone figures things out.",
    body: "Kinly makes norms and shared plans visible so first-year flats stay kind, even when plans change.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For first-year flats, it keeps expectations clear and calm without turning your place into a chore chart.",
  hero: {
    headline: "A calmer way to live together at uni.",
    subhead: "See what the flat needs before it turns into drama.",
    body: "Late labs, early lectures, and new roommates are messy. Kinly shows tonight's needs without pressure, scoring, or nagging.",
    ctaHeading: "Start your first-year flat calm",
  },
  howSteps: [
    {
      title: "Set shared standards with photos",
      body: "Snap what “done” looks like for the kitchen and bathroom so move-in debates do not drag on.",
    },
    {
      title: "Reset weekly before crunch",
      body: "Each week, surface noise, bins, and guests so exam weeks stay calm without chasing anyone.",
    },
    {
      title: "Keep everyone in the loop",
      body: "Quiet hours, who is hosting, and light tasks stay visible, so no one is surprised or blamed.",
    },
  ],
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Quiet hours for exam weeks, bins before pickup, who is hosting tonight.",
      footer: "Things to do and notice without blame.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Switch",
      headline: "Swap turns without awkwardness",
      copy: "If someone is on a late shift or out of cash this week, reassign quietly.",
      footer: "You are always in control - nothing is locked in.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "House rules everyone sees",
      copy: "Quiet hours, guests, cleaning standards, and shared costs in one calm place.",
      footer: "No surprises, no chore charts.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  chips: [
    "We never agreed on cleaning rules.",
    "Exam weeks need quiet without resentment.",
    "Guests policy is fuzzy and causes friction.",
    "We care about each other but hate chore charts.",
  ],
  rolePoints: [
    "Surfaces norms before conflict starts.",
    "Keeps tasks light - no points, no leaderboards.",
  ],
  formingPoints: [
    "New flatmates each semester - Kinly keeps context as people come and go.",
    "Late nights, early mornings, and tight weeks are normal, not failures.",
  ],
  audience: ["First-year uni flats and dorm suites.", "Shared rentals near campus.", "Roommates who want calm, not drama."],
  notList: ["Not a surveillance tool.", "Not a scorecard or leaderboard.", "Not a chore boss."],
  weekly: {
    intro: "Kinly uses a weekly rhythm so you can focus on classes without streak anxiety.",
    points: [
      "Check in weekly, not daily - no streaks to maintain.",
      "Reflections are for understanding, not grading anyone.",
      "Kinly never forces conversations - it helps you decide when to talk.",
    ],
  },
  toolsHeading: "Supported by practical tools",
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction — without turning your flat into a task system.",
  toolsList: [
    "Shared flows (with assignments if you want) for bins, bathrooms, and quiet hours during exam weeks.",
    "Shared bills so power, internet, and the flat kitty are clear without chasing anyone.",
    "Calm check-ins so everyone feels seen and supported without nagging.",
  ],
  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },
  defaultLocale: "en",
  translations: {
    es: {
      whatHeading: "Que es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. En pisos de primer año mantiene las expectativas claras y tranquilas sin convertir la casa en un cuadro de tareas.",
      recognition: {
        heading: "Caos de mudanza sin tension.",
        subtitle: "Mantengan el piso tranquilo mientras todos se acomodan.",
        body: "Kinly hace visibles las normas y planes compartidos para que los pisos de primer aÃ±o sigan amables, incluso si los planes cambian.",
      },
      hero: {
        headline: "Una forma mas tranquila de vivir juntos en la uni.",
        subhead: "Ve lo que necesita el piso antes de que se vuelva drama.",
        body: "Laboratorios tarde, clases temprano y nuevos compis son un lio. Kinly muestra lo de hoy sin presion, puntajes ni reganos.",
        ctaHeading: "Empieza tu piso de primer aÃ±o en calma",
      },
      howSteps: [
        {
          title: "Alineen estandares con fotos",
          body: "Saquen una foto de como se ve “listo” en cocina y baño para evitar discusiones eternas.",
        },
        {
          title: "Reajuste semanal antes de examenes",
          body: "Cada semana, pongan sobre la mesa ruido, basura y visitas para que los examenes sigan tranquilos sin perseguir a nadie.",
        },
        {
          title: "Mantengan a todos al tanto",
          body: "Silencio, quien recibe visitas y tareas ligeras visibles, sin sorpresas ni culpas.",
        },
      ],
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "Que necesita atencion",
          copy: "Horas de silencio en examenes, sacar basura, quien recibe visitas.",
          footer: "Cosas por hacer o notar sin culpas.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Cambiar",
          headline: "Intercambia turnos sin incomodidad",
          copy: "Si alguien tiene turno tarde o poco dinero esta semana, reasigna en silencio.",
          footer: "Siempre en control - nada queda fijo.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Casa",
          headline: "Reglas que todos ven",
          copy: "Silencio, visitas, estandares de limpieza y gastos compartidos en un solo lugar.",
          footer: "Sin sorpresas, sin cuadros de tareas.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Nunca acordamos reglas de limpieza.",
        "Las semanas de examenes necesitan silencio sin resentimiento.",
        "La politica de visitas es confusa y causa friccion.",
        "Nos importa la gente pero odiamos los cuadros de tareas.",
      ],
      rolePoints: [
        "Muestra normas antes de que empiece el conflicto.",
        "Mantiene tareas ligeras - sin puntos ni rankings.",
      ],
      formingPoints: [
        "Nuevos compis cada semestre - Kinly guarda el contexto.",
        "Noches largas, mananas tempranas y semanas justas son normales.",
      ],
      audience: [
        "Pisos de primer ano y suites de residencia.",
        "Alquileres compartidos cerca del campus.",
        "Compis que quieren calma, no drama.",
      ],
      notList: ["No es vigilancia.", "No es marcador ni ranking.", "No es un jefe de tareas."],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que te enfoques en clases sin ansiedad de rachas.",
        points: [
          "Revisa semanalmente, no a diario - sin rachas que mantener.",
          "Reflexiones para entender, no para juzgar.",
          "Kinly nunca fuerza conversaciones - te ayuda a decidir cuando hablar.",
        ],
        heading: "Reflexion semanal, a ritmo humano",
      },
      toolsHeading: "Apoyado por herramientas practicas",
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la friccion diaria — sin convertir el piso en un sistema de tareas.",
      toolsList: [
        "Flujos compartidos (con asignaciones si quieren) para basura, baños y silencio en semanas de examenes.",
        "Cuentas compartidas para luz, internet y fondo comun sin perseguir pagos.",
        "Revisiones calmadas para que todos se sientan vistos y apoyados sin senalar a nadie.",
      ],
      sectionHeadings: {
        howItWorks: "Como funciona Kinly",
        howItWorksSubtitle: "Tres pasos simples que mantienen a todos alineados.",
        soundsLikeYou: "Â¿Te suena familiar?",
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
        "كينلي هو تطبيق للعيش المشترك صُمم لمن يعيشون معاً. لطلاب السنة الأولى يبقي التوقعات واضحة وهادئة بدون تحويل البيت إلى جدول مهام.",
      recognition: {
        heading: "فوضى الانتقال بدون توتر.",
        subtitle: "حافظ على هدوء الشقة بينما يتأقلم الجميع.",
        body: "كينلي يجعل القواعد والخطط المشتركة مرئية حتى تبقى شقق السنة الأولى لطيفة، حتى عندما تتغير الخطط.",
      },
      hero: {
        headline: "طريقة أهدأ للعيش معاً في الجامعة.",
        subhead: "اعرف ما تحتاجه الشقة قبل أن يتحول لدراما.",
        body: "المعامل المتأخرة، والمحاضرات المبكرة، وزملاء السكن الجدد فوضوية. كينلي يُظهر احتياجات الليلة بدون ضغط أو تسجيل نقاط أو إزعاج.",
        ctaHeading: "ابدأ شقة السنة الأولى بهدوء",
      },
      howSteps: [
        {
          title: "حددوا المعايير بالصور",
          body: "التقطوا صورة لما يبدو عليه “الإنجاز” في المطبخ والحمام لتجنب نقاشات لا تنتهي.",
        },
        {
          title: "إعادة ضبط أسبوعية قبل الأسابيع الحرجة",
          body: "كل أسبوع، أظهروا الضجيج والقمامة والضيوف ليبقى الهدوء في أسابيع الامتحانات بدون ملاحقة.",
        },
        {
          title: "حافظوا على وضوح مشترك",
          body: "ساعات الهدوء، من يستضيف، والمهام الخفيفة تبقى مرئية بلا مفاجآت أو لوم.",
        },
      ],
      screens: [
        {
          title: "اليوم",
          eyebrow: "الآن",
          headline: "ما يحتاج انتباه",
          copy: "ساعات الهدوء لأسابيع الامتحانات، إخراج القمامة، من يستضيف الليلة.",
          footer: "أشياء للقيام بها وملاحظتها بدون لوم.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "إدارة",
          eyebrow: "تبديل",
          headline: "بدّل الأدوار بدون إحراج",
          copy: "إذا كان شخص في وردية متأخرة أو ضيق مادياً هذا الأسبوع، أعد التوزيع بهدوء.",
          footer: "أنت دائماً مسيطر - لا شيء مقفل.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "مركز المنزل",
          eyebrow: "المنزل المشترك",
          headline: "قواعد البيت يراها الجميع",
          copy: "ساعات الهدوء، الضيوف، معايير النظافة، والتكاليف المشتركة في مكان واحد هادئ.",
          footer: "لا مفاجآت، لا جداول مهام.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "لم نتفق على قواعد النظافة.",
        "أسابيع الامتحانات تحتاج هدوء بدون استياء.",
        "سياسة الضيوف غامضة وتسبب احتكاك.",
        "نهتم ببعض لكن نكره جداول المهام.",
      ],
      rolePoints: [
        "يُظهر القواعد قبل بدء الصراع.",
        "يبقي المهام خفيفة - لا نقاط، لا لوحات صدارة.",
      ],
      formingPoints: [
        "زملاء جدد كل فصل - كينلي يحفظ السياق مع تغير الأشخاص.",
        "الليالي المتأخرة، الصباحات المبكرة، والأسابيع الضيقة طبيعية، ليست فشلاً.",
      ],
      audience: [
        "شقق السنة الأولى وأجنحة السكن الجامعي.",
        "الإيجارات المشتركة قرب الحرم.",
        "زملاء السكن الذين يريدون هدوء، لا دراما.",
      ],
      notList: ["ليس أداة مراقبة.", "ليس بطاقة نقاط أو لوحة صدارة.", "ليس رئيس مهام."],
      weekly: {
        intro: "كينلي يستخدم إيقاعاً أسبوعياً لتركز على دراستك بدون قلق السلاسل.",
        points: [
          "راجع أسبوعياً، ليس يومياً - لا سلاسل للحفاظ عليها.",
          "التأملات للفهم، ليس لتقييم أحد.",
          "كينلي لا يفرض محادثات - يساعدك تقرر متى تتكلم.",
        ],
        heading: "تأمل أسبوعي، بإيقاع بشري",
      },
      toolsHeading: "مدعوم بأدوات عملية",
      toolsIntro:
        "بعد أن تتفقوا على التوقعات، يقدم كينلي أدوات بسيطة تقلل الاحتكاكات اليومية — بدون تحويل البيت إلى نظام مهام.",
      toolsList: [
        "تدفّقات مشتركة (مع تعيينات إذا أردتم) للقمامة، الحمام، وساعات الهدوء في أسابيع الامتحانات.",
        "فواتير مشتركة لعرض المبالغ والمواعيد بدون ملاحقة.",
        "مراجعات هادئة تجعل الجميع مرئيين ومدعومين بدون توجيه أصابع الاتهام.",
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
