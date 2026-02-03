import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const lowTalkConfig: ScenarioConfig = {
  pageKey: "kinly_market_low_talk",
  recognition: {
    heading: "Signals over speeches.",
    subtitle: "Keep the place clear without long conversations.",
    body: "Kinly gives calm signals about what the home needs so no one has to rally a meeting or deliver a lecture.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For low-talk homes, it keeps expectations clear without forcing group chats or sit-down talks.",
  hero: {
    headline: "Clarity without long conversations.",
    subhead: "See what needs doing and what can wait, without group-chat essays.",
    body: "Kinly surfaces the signals that matter and drops the pressure to \"talk it out\" every time. No scoreboards, no policing, no guilt.",
    ctaHeading: "Get the signal, skip the speech",
  },
  howSteps: [
    {
      title: "Agree expectations with photos",
      body: "Show what “quiet” and “guest-ready” look like so signals stay simple and clear.",
    },
    {
      title: "Reset weekly, lightly",
      body: "Once a week, surface noise, guests, and quick resets so tension doesn’t build between check-ins.",
    },
    {
      title: "Keep shared visibility",
      body: "Everyone sees light tasks and signals, so you can help without reminders or speeches.",
    },
  ],
  screens: [
    {
      title: "Today",
      eyebrow: "Signal",
      headline: "What needs attention now",
      copy: "Light-touch cues for noise, guests, or a quick reset before the day starts.",
      footer: "Actionable without turning into a meeting.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Tweak without debate",
      copy: "Shift turns or pause a task when someone is slammed - no guilt trips.",
      footer: "Everyone stays informed without reminders.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "Shared clarity in one place",
      copy: "Quiet hours, guest signals, and quick norms that keep the vibe steady.",
      footer: "Signals stay visible; no speeches required.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],
  chips: [
    "Need clarity without group-chat essays.",
    "No one wants to nag - or be nagged.",
    "We prefer signals to sit-down talks.",
  ],
  rolePoints: [
    "Surfaces what matters with gentle signals, not speeches.",
    "Keeps plans fair without blame, scoreboards, or guilt.",
  ],
  formingPoints: [
    "People move in and out - Kinly keeps shared signals steady.",
    "Busy weeks happen; pausing tasks is normal, not a failure.",
  ],
  audience: [
    "Households that want calm clarity without long conversations.",
    "Busy sharers who prefer signals over reminders.",
  ],
  notList: ["Not a scoreboard.", "Not policing.", "Not a nagging tool."],
  weekly: {
    intro: "Kinly runs on a weekly rhythm so signals stay calm, not constant.",
    points: [
      "Check in weekly - no streaks, no pressure to keep up.",
      "Reflections are for understanding, not grading anyone.",
      "Pause, adjust, or skip a week without guilt.",
    ],
  },
  toolsHeading: "Supported by practical tools",
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction — without turning shared living into a task system.",
  toolsList: [
    "Shared flows (with assignments if you want) for quick resets, guests, and quiet hours without nagging.",
    "Optional assignments so busy people can swap turns without debate.",
    "Calm check-ins so everyone feels seen without group-chat essays.",
  ],
  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },
  defaultLocale: "en",
  translations: {
    es: {
      whatHeading: "Qué es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. Para casas de pocas palabras mantiene las expectativas claras sin forzar chats largos ni reuniones.",
      recognition: {
        heading: "Señales sin discursos.",
        subtitle: "Mantén claridad sin conversaciones largas.",
        body: "Kinly da señales tranquilas sobre lo que la casa necesita sin convocar reuniones ni sermones.",
      },
      hero: {
        headline: "Claridad sin hablar de más.",
        subhead: "Ve qué necesita atención y qué puede esperar, sin novelas en el chat.",
        body: "Kinly muestra las señales importantes y elimina la presión de “hay que hablarlo” cada vez. Sin marcadores, sin vigilancia, sin culpa.",
        ctaHeading: "Recibe la señal, evita el discurso",
      },
      howSteps: [
        {
          title: "Acordar expectativas con fotos",
          body: "Muestren cómo se ve “silencio” y “listo para visitas” para que las señales sean simples y claras.",
        },
        {
          title: "Reajuste semanal, sin presión",
          body: "Cada semana, pongan ruido, visitas y resets rápidos sobre la mesa para evitar tensión entre revisiones.",
        },
        {
          title: "Mantener visibilidad compartida",
          body: "Todos ven tareas ligeras y señales, así pueden ayudar sin recordatorios ni discursos.",
        },
      ],
      screens: [
        {
          title: "Hoy",
          eyebrow: "Señal",
          headline: "Qué necesita atención ahora",
          copy: "Avisos ligeros para ruido, visitas o un reset rápido antes del día.",
          footer: "Accionable sin convertirse en reunión.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Ajusta sin debate",
          copy: "Cambia turnos o pausa tareas cuando alguien está a tope, sin culpas.",
          footer: "Todos informados sin recordatorios.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Claridad compartida en un lugar",
          copy: "Horas de silencio, señales de visitas y normas rápidas que mantienen el ambiente estable.",
          footer: "Las señales siguen visibles; no hacen falta discursos.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/hub.png",
        },
      ],
      chips: [
        "Claridad sin novelas en el chat.",
        "Nadie quiere regañar ni ser regañado.",
        "Preferimos señales a largas charlas.",
      ],
      rolePoints: [
        "Muestra lo importante con señales suaves, no discursos.",
        "Mantiene lo justo sin culpas ni marcadores.",
      ],
      formingPoints: [
        "La gente rota; Kinly mantiene las señales compartidas.",
        "Semanas ocupadas son normales; pausar no es fallo.",
      ],
      audience: [
        "Casas que buscan claridad tranquila sin largas conversaciones.",
        "Quienes prefieren señales en vez de recordatorios.",
      ],
      notList: ["No es un marcador.", "No es vigilancia.", "No es para regañar."],
      weekly: {
        intro: "Kinly usa ritmo semanal para que las señales sigan calmadas, no constantes.",
        points: [
          "Revisa cada semana - sin rachas, sin presión.",
          "Reflexiones para entender, no para calificar.",
          "Pausa o ajusta una semana sin culpa.",
        ],
        heading: "Reflexión semanal, a ritmo humano",
      },
      toolsHeading: "Apoyado por herramientas prácticas",
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricción diaria — sin convertir la vida compartida en un sistema de tareas.",
      toolsList: [
        "Flujos compartidos (con asignaciones si quieren) para resets rápidos, visitas y horas de silencio sin regaños.",
        "Asignaciones opcionales para cambiar turnos cuando alguien está a tope, sin debate.",
        "Revisiones calmadas para que todos se sientan vistos sin novelas en el chat.",
      ],
      sectionHeadings: {
        howItWorks: "Cómo funciona Kinly",
        howItWorksSubtitle: "Tres pasos simples que mantienen a todos alineados.",
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
      whatHeading: "ما هو كينلي",
      whatBody:
        "كينلي هو تطبيق للعيش المشترك صُمم لمن يعيشون معاً. للمنازل قليلة الكلام يبقي التوقعات واضحة بدون فرض محادثات طويلة أو دردشات جماعية.",
      recognition: {
        heading: "إشارات بدلاً من خطابات.",
        subtitle: "حافظ على الوضوح بدون محادثات طويلة.",
        body: "كينلي يعطي إشارات هادئة عما يحتاجه المنزل فلا أحد يحتاج لعقد اجتماع أو إلقاء محاضرة.",
      },
      hero: {
        headline: "وضوح بدون محادثات طويلة.",
        subhead: "اعرف ما يحتاج إنجازه وما يمكن أن ينتظر، بدون مقالات في الدردشة الجماعية.",
        body: "كينلي يُظهر الإشارات المهمة ويزيل الضغط لـ“مناقشة الأمور” كل مرة. لا لوحات نقاط، لا مراقبة، لا ذنب.",
        ctaHeading: "احصل على الإشارة، تجاوز الخطاب",
      },
      howSteps: [
        {
          title: "اتفقوا على التوقعات بالصور",
          body: "أروا كيف يبدو “الهدوء” و“جاهز للضيوف” لتبقى الإشارات بسيطة وواضحة.",
        },
        {
          title: "إعادة ضبط أسبوعية وخفيفة",
          body: "مرة في الأسبوع، أظهروا الضجيج والضيوف وإعادات الضبط السريعة حتى لا يتراكم التوتر بين المراجعات.",
        },
        {
          title: "حافظوا على وضوح مشترك",
          body: "يرى الجميع المهام الخفيفة والإشارات، ليتمكنوا من المساعدة بدون تذكيرات أو خطابات.",
        },
      ],
      screens: [
        {
          title: "اليوم",
          eyebrow: "إشارة",
          headline: "ما يحتاج انتباه الآن",
          copy: "تنبيهات خفيفة للضوضاء، الضيوف، أو إعادة ضبط سريعة قبل بدء اليوم.",
          footer: "قابل للتنفيذ بدون التحول لاجتماع.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/today.png",
        },
        {
          title: "إدارة",
          eyebrow: "تعديل",
          headline: "عدّل بدون نقاش",
          copy: "بدّل الأدوار أو أوقف مهمة عندما يكون شخص مشغول - بدون تأنيب.",
          footer: "الجميع على علم بدون تذكيرات.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/explore.png",
        },
        {
          title: "مركز المنزل",
          eyebrow: "مرجع",
          headline: "وضوح مشترك في مكان واحد",
          copy: "ساعات الهدوء، إشارات الضيوف، وقواعد سريعة تحافظ على الأجواء مستقرة.",
          footer: "الإشارات تبقى مرئية؛ لا حاجة لخطابات.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/AR/hub.png",
        },
      ],
      chips: [
        "نحتاج وضوح بدون مقالات في الدردشة.",
        "لا أحد يريد أن يزعج أو يُزعَج.",
        "نفضل الإشارات على الجلسات الطويلة.",
      ],
      rolePoints: [
        "يُظهر ما يهم بإشارات لطيفة، ليس خطابات.",
        "يبقي الخطط عادلة بدون لوم أو لوحات نقاط أو ذنب.",
      ],
      formingPoints: [
        "الناس يأتون ويذهبون - كينلي يحافظ على الإشارات المشتركة ثابتة.",
        "الأسابيع المشغولة تحدث؛ إيقاف المهام طبيعي، ليس فشلاً.",
      ],
      audience: [
        "منازل تريد وضوحاً هادئاً بدون محادثات طويلة.",
        "مشاركون مشغولون يفضلون الإشارات على التذكيرات.",
      ],
      notList: ["ليس لوحة نقاط.", "ليس مراقبة.", "ليس أداة إزعاج."],
      weekly: {
        intro: "كينلي يعمل بإيقاع أسبوعي فتبقى الإشارات هادئة، ليست مستمرة.",
        points: [
          "راجع أسبوعياً - لا سلاسل، لا ضغط للمتابعة.",
          "التأملات للفهم، ليس لتقييم أحد.",
          "أوقف، عدّل، أو تخطى أسبوعاً بدون ذنب.",
        ],
        heading: "تأمل أسبوعي، بإيقاع بشري",
      },
      toolsHeading: "مدعوم بأدوات عملية",
      toolsIntro:
        "بعد أن تتفقوا على التوقعات، يقدم كينلي أدوات بسيطة تقلل الاحتكاكات اليومية — بدون تحويل العيش المشترك إلى نظام مهام.",
      toolsList: [
        "تدفّقات مشتركة (مع تعيينات إذا أردتم) لإعادات الضبط السريعة والضيوف وساعات الهدوء بدون إزعاج.",
        "تعيينات اختيارية لتبديل الأدوار عندما يكون أحدكم مشغولاً، بدون نقاش.",
        "مراجعات هادئة ليشعر الجميع بأنهم مرئيون بدون مقالات في الدردشة.",
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
