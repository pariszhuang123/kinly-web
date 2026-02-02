import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const studentWellbeingInfrastructureConfig: ScenarioConfig = {
  pageKey: "student_wellbeing_infrastructure",

  recognition: {
    heading: "When student conflict stays quiet, outcomes suffer.",
    subtitle: "Mentors see the warning signs before anyone asks for help.",
    body: "Kinly makes shared-living wellbeing visible so conflicts do not turn into dropouts.",
  },

  hero: {
    headline: "Preventative wellbeing infrastructure for shared living.",
    subhead: "Give students a calm way to surface tension and reset norms.",
    body: "Kinly helps cohorts align expectations, check in weekly, and reduce silent conflict, supporting retention and academic focus.",
    ctaHeading: "Support student wellbeing early",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Signals",
      headline: "What is stressing the house this week?",
      copy: "Noise, guests, study pressure, or quiet friction that is building.",
      footer: "Spot strain early before it becomes a crisis.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Reset",
      headline: "Adjust without stigma",
      copy: "Rebalance tasks, ease expectations, and make room when someone is overloaded.",
      footer: "Low-friction resets keep the cohort steady.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "Make expectations easy to see",
      copy: "Quiet hours, guest rules, and shared standards in one calm place.",
      footer: "Clarity supports wellbeing and trust.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],

  chips: [
    "Conflicts go quiet before students disengage.",
    "International students often struggle in silence.",
    "Mental load leaks into academic performance.",
    "Retention improves when expectations stay clear.",
  ],

  rolePoints: [
    "Surfaces early tension signals for mentors without surveillance.",
    "Keeps shared expectations visible so students can self-correct.",
  ],

  formingPoints: [
    "Cohorts change each term while the baseline stays clear.",
    "Weekly resets keep one tough week from becoming a rupture.",
  ],

  audience: [
    "University residence teams and wellbeing staff.",
    "Incubator or accelerator cohort managers.",
    "Advisors supporting students in shared housing.",
  ],

  notList: [
    "Not a crisis hotline.",
    "Not a disciplinary tool.",
    "Not surveillance.",
    "Not a replacement for counseling.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so wellbeing signals stay light and consistent.",
    points: [
      "Check in weekly so issues stay small.",
      "Reset expectations without blame.",
      "Encourage self-led support before escalation.",
    ],
  },

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      recognition: {
        heading: "Cuando el conflicto estudiantil se queda en silencio, los resultados sufren.",
        subtitle: "Los mentores ven las señales antes de que alguien pida ayuda.",
        body: "Kinly hace visible el bienestar en la convivencia para que los conflictos no terminen en abandono.",
      },
      hero: {
        headline: "Infraestructura preventiva de bienestar para la convivencia.",
        subhead: "Da a los estudiantes una forma calmada de mostrar tensión y reajustar normas.",
        body: "Kinly ayuda a las cohortes a alinear expectativas, revisar semanalmente y reducir el conflicto silencioso, apoyando la retención y el enfoque académico.",
        ctaHeading: "Apoya el bienestar desde temprano",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Señales",
          headline: "¿Qué está estresando la casa esta semana?",
          copy: "Ruido, visitas, presión de estudio o fricción silenciosa que se acumula.",
          footer: "Detecta la tensión temprano antes de que sea crisis.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Reiniciar",
          headline: "Ajusta sin estigma",
          copy: "Reequilibra tareas, baja expectativas y da espacio cuando alguien está saturado.",
          footer: "Reinicios ligeros mantienen estable a la cohorte.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Normas compartidas",
          headline: "Expectativas fáciles de ver",
          copy: "Horas de silencio, reglas de visitas y estándares compartidos en un lugar tranquilo.",
          footer: "La claridad apoya el bienestar y la confianza.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/hub.png",
        },
      ],
      chips: [
        "Los conflictos se vuelven silenciosos antes de la desconexión.",
        "Los estudiantes internacionales suelen sufrir en silencio.",
        "La carga mental afecta el rendimiento académico.",
        "La retención mejora cuando las expectativas están claras.",
      ],
      rolePoints: [
        "Muestra señales tempranas de tensión para mentores sin vigilancia.",
        "Mantiene expectativas visibles para que los estudiantes se autorregulen.",
      ],
      formingPoints: [
        "Las cohortes cambian cada ciclo y la base sigue clara.",
        "Reinicios semanales evitan que una semana difícil rompa la convivencia.",
      ],
      audience: [
        "Equipos de residencias universitarias y bienestar.",
        "Gestores de cohortes en incubadoras o aceleradoras.",
        "Asesores que apoyan estudiantes en vivienda compartida.",
      ],
      notList: [
        "No es una línea de crisis.",
        "No es una herramienta disciplinaria.",
        "No es vigilancia.",
        "No reemplaza el acompañamiento profesional.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para mantener señales de bienestar ligeras y constantes.",
        points: [
          "Revisa semanalmente para que lo pequeño no crezca.",
          "Ajusta expectativas sin culpa.",
          "Fomenta apoyo autónomo antes de escalar.",
        ],
        heading: "Reflexión semanal, a ritmo humano",
      },
      sectionHeadings: {
        howItWorks: "Cómo funciona Kinly",
        howItWorksSubtitle: "Nada se comparte sin intención.",
        soundsLikeYou: "¿Te suena familiar?",
        roleHeading: "El rol de Kinly: claridad primero",
        formingHeading: "Si tu cohorte aún se está formando",
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
        heading: "عندما يبقى الصراع الطلابي صامتاً، تتضرر النتائج.",
        subtitle: "المرشدون يلاحظون الإشارات قبل أن يطلب أحد المساعدة.",
        body: "كينلي يجعل رفاهية السكن المشترك واضحة حتى لا تتحول الخلافات إلى انسحاب.",
      },
      hero: {
        headline: "بنية تحتية وقائية للرفاهية في السكن المشترك.",
        subhead: "امنح الطلاب طريقة هادئة لإظهار التوتر وإعادة ضبط القواعد.",
        body: "كينلي يساعد الأفواج على توحيد التوقعات، المراجعة أسبوعياً، وتقليل الصراع الصامت، لدعم الاستمرار والتركيز الأكاديمي.",
        ctaHeading: "ادعم رفاهية الطلاب مبكراً",
      },
      screens: [
        {
          title: "اليوم",
          eyebrow: "إشارات",
          headline: "ما الذي يضغط على البيت هذا الأسبوع؟",
          copy: "ضوضاء، ضيوف، ضغط الدراسة، أو احتكاك صامت يتراكم.",
          footer: "لاحظ التوتر مبكراً قبل أن يصبح أزمة.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/today.png",
        },
        {
          title: "إدارة",
          eyebrow: "إعادة ضبط",
          headline: "عدّل بدون وصمة",
          copy: "أعد توازن المهام وخفف التوقعات عندما يكون أحدهم مثقلاً.",
          footer: "إعادات ضبط خفيفة تبقي الفوج مستقراً.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/explore.png",
        },
        {
          title: "مركز المنزل",
          eyebrow: "معايير مشتركة",
          headline: "اجعل التوقعات سهلة الرؤية",
          copy: "ساعات الهدوء، قواعد الضيوف، ومعايير مشتركة في مكان هادئ واحد.",
          footer: "الوضوح يدعم الرفاهية والثقة.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/hub.png",
        },
      ],
      chips: [
        "الخلافات تصبح صامتة قبل أن يبتعد الطلاب.",
        "الطلاب الدوليون غالباً يعانون بصمت.",
        "العبء الذهني يؤثر على الأداء الأكاديمي.",
        "الاستمرار يتحسن عندما تبقى التوقعات واضحة.",
      ],
      rolePoints: [
        "يُظهر إشارات التوتر المبكرة للمرشدين بدون مراقبة.",
        "يبقي التوقعات المشتركة واضحة حتى يتمكن الطلاب من تصحيح المسار ذاتياً.",
      ],
      formingPoints: [
        "الأفواج تتغير كل فصل والأساس يبقى واضحاً.",
        "إعادات الضبط الأسبوعية تمنع أسبوعاً صعباً من أن يصبح شرخاً.",
      ],
      audience: [
        "فرق السكن الجامعي ورفاهية الطلبة.",
        "مديرو الأفواج في الحاضنات أو المسرعات.",
        "مرشدون يدعمون الطلاب في السكن المشترك.",
      ],
      notList: [
        "ليس خط أزمات.",
        "ليس أداة تأديب.",
        "ليس مراقبة.",
        "ليس بديلاً عن الإرشاد.",
      ],
      weekly: {
        intro: "كينلي يستخدم إيقاعاً أسبوعياً لتبقى إشارات الرفاهية خفيفة وثابتة.",
        points: [
          "راجع أسبوعياً حتى تبقى الأمور صغيرة.",
          "أعد ضبط التوقعات بدون لوم.",
          "شجع الدعم الذاتي قبل التصعيد.",
        ],
        heading: "تأمل أسبوعي، بإيقاع بشري",
      },
      sectionHeadings: {
        howItWorks: "كيف يعمل كينلي",
        howItWorksSubtitle: "لا شيء يُشارك بدون قصد.",
        soundsLikeYou: "هل يبدو هذا مثل مكانك؟",
        roleHeading: "دور كينلي: وضوح أولاً",
        formingHeading: "إذا كانت مجموعتك لا تزال تتشكل",
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
