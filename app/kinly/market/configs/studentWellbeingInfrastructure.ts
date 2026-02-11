import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const studentWellbeingInfrastructureConfig: ScenarioConfig = {
  pageKey: "student_wellbeing_infrastructure",

  recognition: {
    heading: "Wellbeing systems fail when they feel like surveillance.",
    subtitle: "Students need calm visibility, not policing.",
    body: "Kinly keeps shared norms visible and human-paced so student housing stays caring without pressure.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps wellbeing expectations visible without turning student housing into monitoring.",

  hero: {
    headline: "Calm shared living that supports wellbeing.",
    subhead: "Visibility without surveillance; clarity without blame.",
    body: "Kinly shows how the house is feeling and what needs attention — without scoreboards or enforcement.",
    ctaHeading: "Keep the house steady",
  },

  howSteps: [
    {
      title: "Agree expectations with photos",
      body: "Show what “ready” and “quiet” look like for shared areas so wellbeing feels practical and fair.",
    },
    {
      title: "Reset weekly, lightly",
      body: "Once a week, surface noise, guests, cleanliness, and wellbeing signals so support is proactive, not reactive.",
    },
    {
      title: "Keep shared visibility",
      body: "Everyone sees light tasks and norms, so care is shared without policing.",
    },
  ],

  screens: [
    {
      title: "Today",
      eyebrow: "Signals",
      headline: "What the house needs now",
      copy: "Quiet hours, shared spaces, and any light tasks that keep the vibe steady.",
      footer: "Support without pressure.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Tweak norms without enforcement",
      copy: "Update noise/guests/cleaning expectations as cohorts change — no one gets singled out.",
      footer: "Neutral updates, student-friendly tone.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference for everyone",
      copy: "Noise, guests, wellbeing notes, and shared costs in one place — no streaks or scores.",
      footer: "Clarity that feels caring, not monitoring.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  chips: [
    "We want wellbeing without feeling watched.",
    "Quiet hours, guests, and cleaning need one calm baseline.",
    "Support should be proactive, not punitive.",
  ],

  rolePoints: [
    "Keeps expectations visible without surveillance.",
    "Shares responsibility for care instead of singling people out.",
  ],

  formingPoints: [
    "Cohorts change; the baseline stays clear.",
    "If things drift, reset next week without blame.",
  ],

  audience: [
    "Student housing teams and resident advisors.",
    "Shared student homes that want calm wellbeing signals.",
  ],

  notList: [
    "Not surveillance.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
    "Not a reporting tool.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so support stays human-paced.",
    points: [
      "Check in weekly, not daily — no streaks to maintain.",
      "Reflections are for understanding, not grading.",
      "Reset calmly when the vibe shifts.",
    ],
  },

  toolsHeading: "Supported by practical tools",
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction — without turning wellbeing into monitoring.",
  toolsList: [
    "Shared flows (with assignments if you want) for cleaning and quiet hours so standards stay clear.",
    "Shared bills so utilities and shared supplies are visible without chasing.",
    "Calm check-ins so everyone feels seen without pressure.",
  ],

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      whatHeading: "Qué es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. Mantiene visibles las expectativas de bienestar sin convertir la vivienda estudiantil en monitoreo.",
      recognition: {
        heading: "Los sistemas de bienestar fallan cuando se sienten vigilancia.",
        subtitle: "Los estudiantes necesitan visibilidad tranquila, no control.",
        body: "Kinly mantiene visibles las normas con ritmo humano para que la vivienda estudiantil sea cuidada sin presión.",
      },
      hero: {
        headline: "Convivencia tranquila que apoya el bienestar.",
        subhead: "Visibilidad sin vigilancia; claridad sin culpas.",
        body: "Kinly muestra cómo se siente la casa y qué necesita atención — sin marcadores ni enforcement.",
        ctaHeading: "Mantén la casa estable",
      },
      howSteps: [
        {
          title: "Acordar expectativas con fotos",
          body: "Muestren cómo se ve “listo” y “silencio” en las áreas compartidas para que el bienestar sea práctico y justo.",
        },
        {
          title: "Reajuste semanal, sin presión",
          body: "Cada semana, pongan ruido, visitas, limpieza y señales de bienestar sobre la mesa para apoyar antes de que haya conflicto.",
        },
        {
          title: "Mantener visibilidad compartida",
          body: "Todos ven tareas ligeras y normas, así el cuidado se comparte sin vigilancia.",
        },
      ],
      screens: [
        {
          title: "Hoy",
          eyebrow: "Señales",
          headline: "Qué necesita la casa ahora",
          copy: "Horas de silencio, espacios comunes y tareas ligeras que mantienen el ambiente estable.",
          footer: "Apoyo sin presión.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Ajusta normas sin enforcement",
          copy: "Actualiza ruido/visitas/limpieza cuando cambian las cohortes — nadie es señalado.",
          footer: "Actualizaciones neutrales, tono estudiantil.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Un referente tranquilo para todos",
          copy: "Ruido, visitas, notas de bienestar y costos compartidos en un lugar — sin rachas ni puntajes.",
          footer: "Claridad que se siente cuidado, no monitoreo.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Queremos bienestar sin sentirnos vigilados.",
        "Silencio, visitas y limpieza necesitan una base tranquila.",
        "El apoyo debe ser proactivo, no punitivo.",
      ],
      rolePoints: [
        "Mantiene las expectativas visibles sin vigilancia.",
        "Comparte la responsabilidad del cuidado en lugar de señalar a personas.",
      ],
      formingPoints: [
        "Las cohortes cambian; la base sigue clara.",
        "Si se desvía, se reinicia la próxima semana sin culpas.",
      ],
      audience: [
        "Equipos de vivienda estudiantil y RAs.",
        "Casas de estudiantes que quieren señales de bienestar tranquilas.",
      ],
      notList: [
        "No es vigilancia.",
        "No es un marcador.",
        "No es un jefe de tareas.",
        "No es una herramienta de reportes.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que el apoyo sea a ritmo humano.",
        points: [
          "Revisa semanalmente, no a diario — sin rachas que mantener.",
          "Las reflexiones son para entender, no para calificar.",
          "Reinicia con calma cuando cambie el ambiente.",
        ],
        heading: "Reflexión semanal, a ritmo humano",
      },
      toolsHeading: "Apoyado por herramientas prácticas",
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricción diaria — sin convertir el bienestar en monitoreo.",
      toolsList: [
        "Flujos compartidos (con asignaciones si quieren) para limpieza y horas de silencio para que los estándares sean claros.",
        "Cuentas compartidas para que los servicios e insumos sean visibles sin persecución.",
        "Revisiones calmadas para que todos se sientan vistos sin presión.",
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
        "كينلي هو تطبيق للعيش المشترك صُمم لمن يعيشون معاً. يبقي توقعات الرفاه واضحة دون أن يحول السكن الطلابي إلى مراقبة.",
      recognition: {
        heading: "تفشل أنظمة الرفاه حين تشعر بالمراقبة.",
        subtitle: "يحتاج الطلاب إلى وضوح هادئ، لا ضبط.",
        body: "كينلي يبقي المعايير مرئية وبإيقاع بشري ليبقى السكن الطلابي داعماً دون ضغط.",
      },
      hero: {
        headline: "معيشة مشتركة هادئة تدعم الرفاه.",
        subhead: "وضوح بلا مراقبة؛ شفافية بلا لوم.",
        body: "كينلي يُظهر شعور البيت وما يحتاجه — بلا لوحات نقاط أو فرض.",
        ctaHeading: "أبقِ البيت مستقراً",
      },
      howSteps: [
        {
          title: "اتفقوا على التوقعات بالصور",
          body: "أروا كيف يبدو “جاهز” و“هادئ” في المساحات المشتركة ليكون الرفاه عملياً وعادلاً.",
        },
        {
          title: "إعادة ضبط أسبوعية وخفيفة",
          body: "مرة في الأسبوع، أظهروا الضوضاء والضيوف والنظافة وإشارات الرفاه لتقديم الدعم قبل أن يصبح خلافاً.",
        },
        {
          title: "حافظوا على وضوح مشترك",
          body: "يرى الجميع المهام الخفيفة والمعايير، فيتشارك الجميع العناية دون مراقبة.",
        },
      ],
      screens: [
        {
          title: "اليوم",
          eyebrow: "إشارات",
          headline: "ما يحتاجه البيت الآن",
          copy: "ساعات هدوء، مساحات مشتركة، ومهام خفيفة تحافظ على استقرار الجو.",
          footer: "دعم بلا ضغط.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "إدارة",
          eyebrow: "تعديل",
          headline: "عدّلوا المعايير بلا فرض",
          copy: "حدثوا توقعات الضوضاء/الضيوف/النظافة مع تغير المجموعات — دون أن يُستهدف أحد.",
          footer: "تحديثات محايدة، بلهجة صديقة للطلاب.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "مركز المنزل",
          eyebrow: "مرجع",
          headline: "مرجع هادئ للجميع",
          copy: "الضوضاء والضيوف وملاحظات الرفاه والتكاليف المشتركة في مكان واحد — بلا سلاسل أو نقاط.",
          footer: "وضوح يشعر بالعناية، لا المراقبة.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "نريد رفاه دون أن نشعر بالمراقبة.",
        "ساعات الهدوء والضيوف والتنظيف تحتاج أساساً هادئاً.",
        "يجب أن يكون الدعم استباقياً لا عقابياً.",
      ],
      rolePoints: [
        "يبقي التوقعات مرئية دون مراقبة.",
        "يشارك المسؤولية عن الرعاية بدلاً من استهداف الأفراد.",
      ],
      formingPoints: [
        "تتغير المجموعات؛ الأساس يبقى واضحاً.",
        "إذا انحرف، تعيدونه الأسبوع القادم بلا لوم.",
      ],
      audience: [
        "فرق السكن الطلابي والمشرفون.",
        "بيوت طلابية تريد إشارات رفاه هادئة.",
      ],
      notList: [
        "ليست مراقبة.",
        "ليست لوحة نقاط.",
        "ليست رئيس مهام.",
        "ليست أداة تقارير.",
      ],
      weekly: {
        intro: "كينلي يستخدم إيقاعاً أسبوعياً ليبقى الدعم بإيقاع بشري.",
        points: [
          "راجعوا أسبوعياً، لا يومياً — بلا سلاسل للحفاظ عليها.",
          "التأملات للفهم، لا للتقييم.",
          "أعيدوا الضبط بهدوء عندما يتغير الجو.",
        ],
        heading: "تأمل أسبوعي، بإيقاع بشري",
      },
      toolsHeading: "مدعوم بأدوات عملية",
      toolsIntro:
        "بعد أن تتفقوا على التوقعات، يقدم كينلي أدوات بسيطة تقلل الاحتكاكات اليومية — بدون تحويل الرفاه إلى مراقبة.",
      toolsList: [
        "تدفّقات مشتركة (مع تعيينات إذا أردتم) للتنظيف وساعات الهدوء للحفاظ على وضوح المعايير.",
        "فواتير مشتركة لعرض الخدمات والإمدادات بدون ملاحقة.",
        "مراجعات هادئة ليشعر الجميع بأنهم مرئيون بلا ضغط.",
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
