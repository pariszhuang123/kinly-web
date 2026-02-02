import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const lowTalkConfig: ScenarioConfig = {
  pageKey: "kinly_market_low_talk",
  recognition: {
    heading: "Signals over speeches.",
    subtitle: "Keep the place clear without long conversations.",
    body: "Kinly gives calm signals about what the home needs so no one has to rally a meeting or deliver a lecture.",
  },
  hero: {
    headline: "Clarity without long conversations.",
    subhead: "See what needs doing and what can wait, without group-chat essays.",
    body: "Kinly surfaces the signals that matter and drops the pressure to \"talk it out\" every time. No scoreboards, no policing, no guilt.",
    ctaHeading: "Get the signal, skip the speech",
  },
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
    "Keep calm even when people are busy.",
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
  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },
  defaultLocale: "en",
  translations: {
    es: {
      recognition: {
        heading: "Senales sin discursos.",
        subtitle: "Manten claridad sin conversaciones largas.",
        body: "Kinly da senales tranquilas sobre lo que la casa necesita sin convocar reuniones ni sermones.",
      },
      hero: {
        headline: "Claridad sin hablar de mas.",
        subhead: "Ve que necesita atencion y que puede esperar, sin novelas en el chat.",
        body: "Kinly muestra las senales importantes y elimina la presion de \"hay que hablarlo\" cada vez. Sin marcadores, sin vigilancia, sin culpa.",
        ctaHeading: "Recibe la senal, evita el discurso",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Senal",
          headline: "Que necesita atencion ahora",
          copy: "Avisos ligeros para ruido, visitas o un reset rapido antes del dia.",
          footer: "Accionable sin convertirse en reunion.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Ajusta sin debate",
          copy: "Cambia turnos o pausa tareas cuando alguien esta a tope, sin culpas.",
          footer: "Todos informados sin recordatorios.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Claridad compartida en un lugar",
          copy: "Horas de silencio, senales de visitas y normas rapidas que mantienen el ambiente estable.",
          footer: "Las senales siguen visibles; no hacen falta discursos.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/ES/hub.png",
        },
      ],
      chips: [
        "Claridad sin novelas en el chat.",
        "Nadie quiere reganar ni ser reganado.",
        "Preferimos senales a largas charlas.",
        "Calma incluso cuando todos van justos de tiempo.",
      ],
      rolePoints: [
        "Muestra lo importante con senales suaves, no discursos.",
        "Mantiene lo justo sin culpas ni marcadores.",
      ],
      formingPoints: [
        "La gente rota; Kinly mantiene las senales compartidas.",
        "Semanas ocupadas son normales; pausar no es fallo.",
      ],
      audience: [
        "Casas que buscan claridad tranquila sin largas conversaciones.",
        "Quienes prefieren senales en vez de recordatorios.",
      ],
      notList: ["No es un marcador.", "No es vigilancia.", "No es para reganar."],
      weekly: {
        intro: "Kinly usa ritmo semanal para que las senales sigan calmadas, no constantes.",
        points: [
          "Revisa cada semana - sin rachas, sin presion.",
          "Reflexiones para entender, no para calificar.",
          "Pausa o ajusta una semana sin culpa.",
        ],
        heading: "Reflexion semanal, a ritmo humano",
      },
      sectionHeadings: {
        howItWorks: "Como funciona Kinly",
        howItWorksSubtitle: "Nada se comparte sin intencion.",
        soundsLikeYou: "¿Te suena familiar?",
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
      recognition: {
        heading: "إشارات بدلاً من خطابات.",
        subtitle: "حافظ على الوضوح بدون محادثات طويلة.",
        body: "كينلي يعطي إشارات هادئة عما يحتاجه المنزل فلا أحد يحتاج لعقد اجتماع أو إلقاء محاضرة.",
      },
      hero: {
        headline: "وضوح بدون محادثات طويلة.",
        subhead: "اعرف ما يحتاج إنجازه وما يمكن أن ينتظر، بدون مقالات في الدردشة الجماعية.",
        body: "كينلي يُظهر الإشارات المهمة ويزيل الضغط لـ\"مناقشة الأمور\" كل مرة. لا لوحات نقاط، لا مراقبة، لا ذنب.",
        ctaHeading: "احصل على الإشارة، تجاوز الخطاب",
      },
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
          copy: "بدّل الأدوار أو أوقف مهمة عندما يكون شخص مشغول - بدون تأنيب ضمير.",
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
        "لا أحد يريد أن يُزعج - أو يُزعَج.",
        "نفضل الإشارات على الجلسات الطويلة.",
        "ابق هادئاً حتى عندما الناس مشغولون.",
      ],
      rolePoints: [
        "يُظهر ما يهم بإشارات لطيفة، ليس خطابات.",
        "يبقي الخطط عادلة بدون لوم أو لوحات نقاط أو ذنب.",
      ],
      formingPoints: [
        "الناس يأتون ويذهبون - كينلي يحافظ على الإشارات المشتركة ثابتة.",
        "الأسابيع المشغولة تحدث؛ إيقاف المهام طبيعي، ليس فشل.",
      ],
      audience: [
        "منازل تريد وضوح هادئ بدون محادثات طويلة.",
        "مشاركون مشغولون يفضلون الإشارات على التذكيرات.",
      ],
      notList: ["ليس لوحة نقاط.", "ليس مراقبة.", "ليس أداة إزعاج."],
      weekly: {
        intro: "كينلي يعمل بإيقاع أسبوعي فتبقى الإشارات هادئة، ليست مستمرة.",
        points: [
          "راجع أسبوعياً - لا سلاسل، لا ضغط للمتابعة.",
          "التأملات للفهم، ليس لتقييم أحد.",
          "أوقف، عدّل، أو تخطى أسبوع بدون ذنب.",
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
