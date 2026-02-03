import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const takeawayBudgetFlatsConfig: ScenarioConfig = {
  pageKey: "takeaway_budget_flats",

  recognition: {
    heading: "When money is tight, small unfairness becomes big tension.",
    subtitle: "Power, heating, and shared groceries shouldn’t turn into quiet resentment.",
    body: "Kinly keeps shared expectations visible — so money-stress arguments don’t start in the first place.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For tight-budget flats, it keeps fairness clear without turning your home into a budgeting spreadsheet.",

  hero: {
    headline: "Fair shared living — even on a tight budget.",
    subhead: "Light structure for shared costs and shared standards, without awkward call-outs.",
    body: "Agree what’s shared, what’s personal, and how to handle uneven weeks. Kinly helps the house reset calmly — so it stays fair.",
    ctaHeading: "Keep it fair this week",
  },

  howSteps: [
    {
      title: "Agree what fair looks like (with photos)",
      body: "Show what “shared” means for pantry, fridge, and heating so nobody guesses the baseline.",
    },
    {
      title: "Reset weekly before blame builds",
      body: "Once a week, surface bills, usage, and top-ups so you adjust before it turns into resentment.",
    },
    {
      title: "Keep costs and tasks visible",
      body: "Everyone can see agreed costs and light tasks, so help is clear without chasing or shaming.",
    },
  ],

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What’s stressing the house this week?",
      copy: "Groceries, heating, power — and the little things that quietly add up.",
      footer: "Notice friction early, before it turns into an argument.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Reset",
      headline: "Set the baseline once",
      copy: "What counts as shared, how to handle uneven usage, and how to adjust when someone is stretched.",
      footer: "Less blaming. More clarity. Everyone stays on the same page.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "Make expectations easy to see",
      copy: "Simple house standards — so nobody has to hint, nag, or keep score.",
      footer: "Fairness feels lighter when it’s visible.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],

  chips: [
    "When budgets are tight, small unfairness feels personal.",
    "Unequal usage (food, power, heating) builds resentment fast.",
    "Weekly resets keep one hard week from becoming a house conflict.",
  ],

  rolePoints: [
    "Makes shared expectations visible so you don’t have to call people out.",
    "Helps the house adjust fairly when someone is week-to-week.",
  ],

  formingPoints: [
    "New flatmates and changing schedules — the baseline stays clear.",
    "If it slips, you reset next week without shame or blame.",
  ],

  audience: [
    "Student flats living week-to-week.",
    "Shared homes where groceries, heating, or power cause repeated tension.",
  ],

  notList: [
    "Not a budgeting app.",
    "Not a debt tracker.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so money conversations stay calm and fair.",
    points: [
      "Check in weekly so small issues don’t stack up.",
      "Adjust expectations without blame — just clarity.",
      "Agree next week’s baseline and move on.",
    ],
  },

  toolsHeading: "Supported by practical tools",
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction — without turning shared living into a task system.",
  toolsList: [
    "Shared flows (with assignments if you want) for groceries, bins, and heating/AC so fairness stays visible.",
    "Shared bills so due dates and amounts are clear without awkward chasing.",
    "Calm check-ins so everyone feels seen when cash is tight.",
  ],

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      whatHeading: "Qué es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. En pisos con presupuesto ajustado mantiene claros los acuerdos sin convertir la casa en una hoja de cálculo.",
      recognition: {
        heading: "Cuando el dinero está justo, una pequeña injusticia se vuelve una gran tensión.",
        subtitle: "Luz, calefacción y compras compartidas no deberían convertirse en resentimiento silencioso.",
        body: "Kinly deja claras las expectativas compartidas — para que las discusiones por dinero no empiecen.",
      },
      hero: {
        headline: "Convivencia justa — incluso con presupuesto ajustado.",
        subhead: "Estructura ligera para costos y estándares compartidos, sin indirectas incómodas.",
        body: "Acordad qué es compartido, qué es personal y cómo manejar semanas desiguales. Kinly ayuda a reiniciar con calma — para que siga siendo justo.",
        ctaHeading: "Mantenerlo justo esta semana",
      },
      howSteps: [
        {
          title: "Definan lo compartido con fotos",
          body: "Muestren qué es “justo” en despensa, nevera y calefacción para que nadie adivine el estándar.",
        },
        {
          title: "Reinicio semanal antes de que arda",
          body: "Cada semana, pongan facturas, uso y recargas sobre la mesa para ajustar antes de que sea culpa.",
        },
        {
          title: "Visibilidad compartida",
          body: "Costos acordados y tareas ligeras visibles, sin persecución ni vergüenza.",
        },
      ],
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "¿Qué está estresando al piso esta semana?",
          copy: "Compras, calefacción, luz — y esas cosas pequeñas que se acumulan.",
          footer: "Detecta fricción temprano, antes de que se convierta en discusión.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Reiniciar",
          headline: "Acordar la base una vez",
          copy: "Qué cuenta como compartido, cómo manejar usos desiguales y cómo ajustar cuando alguien va justo.",
          footer: "Menos reproches. Más claridad. Misma página para todos.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Normas compartidas",
          headline: "Expectativas fáciles de ver",
          copy: "Normas simples del piso — para no tener que insinuar, insistir o llevar la cuenta.",
          footer: "La equidad se siente más ligera cuando es visible.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/hub.png",
        },
      ],
      chips: [
        "Con presupuestos ajustados, una pequeña injusticia se siente personal.",
        "El uso desigual (comida, luz, calefacción) genera resentimiento rápido.",
        "Los reinicios semanales evitan que una semana dura se vuelva conflicto.",
      ],
      rolePoints: [
        "Hace visibles las expectativas para no tener que señalar a nadie.",
        "Ayuda a ajustar de forma justa cuando alguien vive semana a semana.",
      ],
      formingPoints: [
        "Cambian los compis y horarios — la base sigue clara.",
        "Si se desordena, se reinicia la próxima semana sin culpas.",
      ],
      audience: [
        "Pisos de estudiantes viviendo al día.",
        "Casas compartidas donde compras, calefacción o luz causan tensión repetida.",
      ],
      notList: [
        "No es una app de presupuesto.",
        "No es un registro de deudas.",
        "No es un marcador.",
        "No es un jefe de tareas.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que hablar de dinero sea calmado y justo.",
        points: [
          "Revisa semanalmente para que lo pequeño no se acumule.",
          "Ajusta expectativas sin reproches — solo claridad.",
          "Acordad la base de la semana y seguid adelante.",
        ],
        heading: "Reflexión semanal, a ritmo humano",
      },
      toolsHeading: "Apoyado por herramientas prácticas",
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricción diaria — sin convertir la vida compartida en un sistema de tareas.",
      toolsList: [
        "Flujos compartidos (con asignaciones si quieren) para compras, basura y calefacción/AC, manteniendo la equidad visible.",
        "Cuentas compartidas para que montos y fechas sean claros sin persecuciones incómodas.",
        "Revisiones calmadas para que todos se sientan vistos cuando el dinero está ajustado.",
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
        "كينلي هو تطبيق للعيش المشترك صُمم لمن يعيشون معاً. للبيوت ذات الميزانية الضيقة يبقي التوقعات واضحة بدون تحويل المنزل إلى جدول حسابات.",
      recognition: {
        heading: "عندما يكون المال محدوداً، يصبح عدم العدل الصغير توتراً كبيراً.",
        subtitle: "الكهرباء والتدفئة ومشتريات البيت المشتركة لا يجب أن تتحول إلى استياء صامت.",
        body: "كينلي يجعل التوقعات المشتركة واضحة — حتى لا تبدأ خلافات ضغط المصروف من الأساس.",
      },
      hero: {
        headline: "سكن مشترك عادل — حتى مع ميزانية ضيقة.",
        subhead: "تنظيم خفيف للمصاريف والمعايير المشتركة، بدون إحراج أو تلميحات.",
        body: "اتفقوا على ما هو مشترك وما هو شخصي، وكيف تتعاملون مع الأسابيع غير المتساوية. كينلي يساعدكم على إعادة الضبط بهدوء — ليبقى الأمر عادلاً.",
        ctaHeading: "خلّوه عادلاً هذا الأسبوع",
      },
      howSteps: [
        {
          title: "حدّدوا ما هو مشترك بالصور",
          body: "أروا شكل “العَدْل” في الثلاجة والمخزن والتدفئة حتى لا يخمّن أحد المعايير.",
        },
        {
          title: "إعادة ضبط أسبوعية قبل الانفجار",
          body: "كل أسبوع، أظهروا الفواتير والاستخدام والشحنات لتُعدَّل قبل أن تصبح لوماً.",
        },
        {
          title: "حافظوا على وضوح مشترك",
          body: "تكاليف متفق عليها ومهام خفيفة مرئية، بلا ملاحقة أو إحراج.",
        },
      ],
      screens: [
        {
          title: "اليوم",
          eyebrow: "الآن",
          headline: "ما الذي يضغط على البيت هذا الأسبوع؟",
          copy: "مشتريات مشتركة، تدفئة، كهرباء — وأشياء صغيرة تتراكم بهدوء.",
          footer: "لاحظوا الاحتكاك مبكراً قبل أن يتحول إلى خلاف.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/today.png",
        },
        {
          title: "إدارة",
          eyebrow: "إعادة ضبط",
          headline: "حددوا الأساس مرة واحدة",
          copy: "ما الذي يُحسب مشتركاً، وكيف تتعاملون مع الاستخدام غير المتساوي، وكيف تعدّلون عندما يكون أحدكم مضغوطاً.",
          footer: "لوم أقل. وضوح أكثر. الكل على نفس الصفحة.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/explore.png",
        },
        {
          title: "مركز المنزل",
          eyebrow: "معايير مشتركة",
          headline: "اجعلوا التوقعات سهلة الرؤية",
          copy: "معايير بسيطة للبيت — بدون تلميح أو إلحاح أو عدّ للنقاط.",
          footer: "العدل يصبح أخف عندما يكون واضحاً.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/hub.png",
        },
      ],
      chips: [
        "عندما تكون الميزانية ضيقة، يبدو عدم العدل الصغير شخصياً.",
        "الاستخدام غير المتساوي (الطعام، الكهرباء، التدفئة) يبني استياء بسرعة.",
        "إعادة الضبط أسبوعياً تمنع أسبوعاً صعباً من أن يصبح صراعاً.",
      ],
      rolePoints: [
        "يجعل التوقعات المشتركة واضحة حتى لا تضطروا لإحراج أحد.",
        "يساعد البيت على التكيف بعدل عندما يعيش أحدكم أسبوعاً بأسبوع.",
      ],
      formingPoints: [
        "زملاء سكن جدد وجداول تتغير — الأساس يبقى واضحاً.",
        "إذا حصل خلل، تعيدون الضبط الأسبوع القادم بدون لوم.",
      ],
      audience: [
        "شقق طلاب يعيشون أسبوعاً بأسبوع.",
        "منازل مشتركة تتكرر فيها توترات حول المشتريات أو التدفئة أو الكهرباء.",
      ],
      notList: [
        "ليس تطبيق ميزانية.",
        "ليس سجل ديون.",
        "ليس لوحة نقاط أو ترتيب.",
        "ليس رئيس مهام.",
      ],
      weekly: {
        intro: "كينلي يستخدم إيقاعاً أسبوعياً حتى تبقى أحاديث المصروف هادئة وعادلة.",
        points: [
          "تفقدوا أسبوعياً حتى لا تتراكم الأمور الصغيرة.",
          "عدّلوا التوقعات بدون لوم — فقط وضوح.",
          "اتفقوا على أساس الأسبوع القادم وامضوا قدماً.",
        ],
        heading: "تأمل أسبوعي، بإيقاع بشري",
      },
      toolsHeading: "مدعوم بأدوات عملية",
      toolsIntro:
        "بعد أن تتفقوا على التوقعات، يقدم كينلي أدوات بسيطة تقلل الاحتكاكات اليومية — بدون تحويل العيش المشترك إلى نظام مهام.",
      toolsList: [
        "تدفّقات مشتركة (مع تعيينات إذا أردتم) للمشتريات والقمامة والتدفئة/التبريد لتبقى العدالة مرئية.",
        "فواتير مشتركة لعرض المبالغ والمواعيد بدون ملاحقة محرجة.",
        "مراجعات هادئة ليشعر الجميع بأنهم مرئيون عندما يكون المال شحيحاً.",
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
