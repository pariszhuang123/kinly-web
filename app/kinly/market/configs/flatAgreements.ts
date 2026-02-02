import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const flatAgreementsConfig: ScenarioConfig = {
  pageKey: "flat_agreed_expectations",

  recognition: {
    heading: "You want to know what the flat actually agrees on.",
    subtitle: "No politics, no personal calls, just shared clarity.",
    body: "Kinly makes agreed expectations visible so the shared home feels fair and predictable.",
  },

  hero: {
    headline: "Know what the flat agrees on — without flat politics.",
    subhead: "Shared visibility and neutral wording, without side conversations.",
    body: "Kinly keeps expectations clear for everyone. No surveillance, no reporting, no power moves.",
    ctaHeading: "Keep it fair and clear",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Clarity",
      headline: "What the shared home needs this week",
      copy: "Shared spaces, guests, or a light reset before tensions build.",
      footer: "Less guesswork, fewer politics.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Agreed",
      headline: "Expectations everyone can see",
      copy: "A neutral reference point so no one feels singled out.",
      footer: "Clear, shared, and calm.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "Keep the baseline visible",
      copy: "Quiet hours, guests, and shared care in one steady place.",
      footer: "Fairness without friction.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],

  chips: [
    "Why do they get to decide?",
    "I do not want flat politics.",
    "Rules feel personal.",
    "I do not know what is actually agreed.",
  ],

  rolePoints: [
    "Makes agreed expectations visible without anyone acting like the boss.",
    "Keeps the shared home fair and predictable.",
  ],

  formingPoints: [
    "Shared homes shift; the agreements stay clear.",
    "When things change, everyone sees the update.",
  ],

  audience: [
    "People sharing a flat with friends or acquaintances.",
    "Anyone who wants fairness without side conversations.",
  ],

  notList: [
    "Not a rule engine.",
    "Not surveillance.",
    "Not a reporting tool.",
    "Not landlord-facing.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so shared expectations stay steady.",
    points: [
      "Check in weekly so agreements stay current.",
      "Reduce side conversations with a shared reference.",
      "Keep the flat calm and fair.",
    ],
  },

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      recognition: {
        heading: "Quieres saber qué ha acordado realmente el piso.",
        subtitle: "Sin política, sin personalismos, solo claridad compartida.",
        body: "Kinly hace visibles las expectativas acordadas para que la convivencia sea justa y predecible.",
      },
      hero: {
        headline: "Saber lo que el piso acuerda — sin política de piso.",
        subhead: "Visibilidad compartida y lenguaje neutral, sin conversaciones paralelas.",
        body: "Kinly mantiene claras las expectativas para todos. Sin vigilancia, sin reportes, sin maniobras de poder.",
        ctaHeading: "Mantén la claridad y la justicia",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Claridad",
          headline: "Lo que necesita el hogar compartido esta semana",
          copy: "Espacios comunes, visitas o un reinicio ligero antes de que suba la tensión.",
          footer: "Menos dudas, menos política.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Acordado",
          headline: "Expectativas que todos pueden ver",
          copy: "Un referente neutral para que nadie se sienta señalado.",
          footer: "Claro, compartido y calmado.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Normas compartidas",
          headline: "Mantén visible la base",
          copy: "Horas de silencio, visitas y cuidado compartido en un solo lugar.",
          footer: "Equidad sin fricción.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/hub.png",
        },
      ],
      chips: [
        "¿Por qué ellos deciden?",
        "No quiero política en el piso.",
        "Las reglas se sienten personales.",
        "No sé qué está realmente acordado.",
      ],
      rolePoints: [
        "Hace visibles las expectativas acordadas sin que nadie sea el jefe.",
        "Mantiene el hogar compartido justo y predecible.",
      ],
      formingPoints: [
        "La convivencia cambia; los acuerdos siguen claros.",
        "Cuando algo cambia, todos lo ven.",
      ],
      audience: [
        "Personas que comparten piso con amigos o conocidos.",
        "Quienes quieren equidad sin conversaciones paralelas.",
      ],
      notList: [
        "No es un motor de reglas.",
        "No es vigilancia.",
        "No es una herramienta de reportes.",
        "No es para propietarios.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para mantener expectativas compartidas y claras.",
        points: [
          "Revisa semanalmente para mantener acuerdos vigentes.",
          "Reduce conversaciones paralelas con un referente común.",
          "Mantén el piso calmado y justo.",
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
        heading: "تريد أن تعرف ما اتفق عليه السكن فعلاً.",
        subtitle: "لا سياسة، لا شخصنة، فقط وضوح مشترك.",
        body: "كينلي يجعل التوقعات المتفق عليها واضحة حتى يشعر الجميع بالعدل والتوقع.",
      },
      hero: {
        headline: "اعرف ما اتفق عليه السكن — بدون سياسة داخلية.",
        subhead: "وضوح مشترك وصياغة محايدة، بلا أحاديث جانبية.",
        body: "كينلي يبقي التوقعات واضحة للجميع. بدون مراقبة، بدون تقارير، بدون تحركات قوة.",
        ctaHeading: "اجعلها عادلة وواضحة",
      },
      screens: [
        {
          title: "اليوم",
          eyebrow: "وضوح",
          headline: "ما يحتاجه المنزل المشترك هذا الأسبوع",
          copy: "المساحات المشتركة، الضيوف، أو إعادة ضبط خفيفة قبل أن تتصاعد الأمور.",
          footer: "تخمين أقل، سياسة أقل.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/today.png",
        },
        {
          title: "إدارة",
          eyebrow: "متفق عليه",
          headline: "توقعات يراها الجميع",
          copy: "مرجع محايد حتى لا يشعر أحد بأنه مستهدف.",
          footer: "واضح ومشترك وهادئ.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/explore.png",
        },
        {
          title: "مركز المنزل",
          eyebrow: "معايير مشتركة",
          headline: "اجعل الأساس واضحاً",
          copy: "ساعات الهدوء، الضيوف، والرعاية المشتركة في مكان ثابت.",
          footer: "عدل بدون احتكاك.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/hub.png",
        },
      ],
      chips: [
        "لماذا يقررون هم؟",
        "لا أريد سياسة في السكن.",
        "القواعد تبدو شخصية.",
        "لا أعرف ما تم الاتفاق عليه فعلاً.",
      ],
      rolePoints: [
        "يبقي التوقعات المتفق عليها واضحة بدون أن يتصرف أحد كرئيس.",
        "يحافظ على عدالة وتوقع السكن.",
      ],
      formingPoints: [
        "السكن المشترك يتغير؛ الاتفاقات تبقى واضحة.",
        "عند التغيير، يراه الجميع.",
      ],
      audience: [
        "أشخاص يشاركون السكن مع أصدقاء أو معارف.",
        "من يريدون عدلاً بدون أحاديث جانبية.",
      ],
      notList: [
        "ليس محرك قواعد.",
        "ليس مراقبة.",
        "ليس أداة تقارير.",
        "ليس موجهاً للمالك.",
      ],
      weekly: {
        intro: "كينلي يستخدم إيقاعاً أسبوعياً ليبقي التوقعات المشتركة واضحة.",
        points: [
          "راجعوا أسبوعياً لتبقى الاتفاقات محدثة.",
          "قللوا الأحاديث الجانبية بمرجع مشترك.",
          "حافظوا على هدوء وعدالة السكن.",
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
