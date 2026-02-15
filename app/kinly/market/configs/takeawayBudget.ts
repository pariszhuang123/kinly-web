import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const takeawayBudgetFlatsConfig: ScenarioConfig = {
  pageKey: "takeaway_budget_flats",

  recognition: {
    heading: "When money is tight, small unfairness becomes big tension.",
    subtitle: "Power, heating, and shared groceries shouldn't turn into quiet resentment.",
    body: "Kinly keeps shared expectations visible .  so money-stress arguments don't start in the first place.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For tight-budget flats, it keeps fairness clear without turning your home into a budgeting spreadsheet.",

  hero: {
    headline: "Fair shared living, even on a tight budget.",
    subhead: "Light structure for shared costs and shared standards, without awkward call-outs.",
    body: "Agree what's shared, what's personal, and how to handle uneven weeks. Kinly helps the house reset calmly .  so it stays fair.",
    ctaHeading: "Keep it fair this week",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What's stressing the house this week?",
      copy: "Groceries, heating, power .  and the little things that quietly add up.",
      footer: "Notice friction early, before it turns into an argument.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Reset",
      headline: "Set the baseline once",
      copy: "What counts as shared, how to handle uneven usage, and how to adjust when someone is stretched.",
      footer: "Less blaming. More clarity. Everyone stays on the same page.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "Make expectations easy to see",
      copy: "Simple house standards .  so nobody has to hint, nag, or keep score.",
      footer: "Fairness feels lighter when it's visible.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared flows",
      benefit: "Add context and photos to recurring tasks so household standards stay clear.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Capture grocery items, quantities, and notes so shops are clear before anyone heads out.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Turn shared purchases into fair splits with dates and amounts in one place.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to reset money tension early before it builds.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "When budgets are tight, small unfairness feels personal.",
    "Unequal usage (food, power, heating) builds resentment fast.",
    "Weekly resets keep one hard week from becoming a house conflict.",
  ],

  rolePoints: [
    "Makes shared expectations visible so you don't have to call people out.",
    "Helps the house adjust fairly when someone is week-to-week.",
  ],

  formingPoints: [
    "New flatmates and changing schedules .  the baseline stays clear.",
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
      "Check in weekly so small issues don't stack up.",
      "Adjust expectations without blame .  just clarity.",
      "Agree next week's baseline and move on.",
    ],
  },
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning shared living into a task system.",

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      whatHeading: "QuÃ© es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. En pisos con presupuesto ajustado mantiene claros los acuerdos sin convertir la casa en una hoja de cÃ¡lculo.",
      recognition: {
        heading: "Cuando el dinero estÃ¡ justo, una pequeÃ±a injusticia se vuelve una gran tensiÃ³n.",
        subtitle: "Luz, calefacciÃ³n y compras compartidas no deberÃ­an convertirse en resentimiento silencioso.",
        body: "Kinly deja claras las expectativas compartidas .  para que las discusiones por dinero no empiecen.",
      },
      hero: {
        headline: "Convivencia justa .  incluso con presupuesto ajustado.",
        subhead: "Estructura ligera para costos y estÃ¡ndares compartidos, sin indirectas incÃ³modas.",
        body: "Acordad quÃ© es compartido, quÃ© es personal y cÃ³mo manejar semanas desiguales. Kinly ayuda a reiniciar con calma .  para que siga siendo justo.",
        ctaHeading: "Mantenerlo justo esta semana",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "Â¿QuÃ© estÃ¡ estresando al piso esta semana?",
          copy: "Compras, calefacciÃ³n, luz .  y esas cosas pequeÃ±as que se acumulan.",
          footer: "Detecta fricciÃ³n temprano, antes de que se convierta en discusiÃ³n.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Reiniciar",
          headline: "Acordar la base una vez",
          copy: "QuÃ© cuenta como compartido, cÃ³mo manejar usos desiguales y cÃ³mo ajustar cuando alguien va justo.",
          footer: "Menos reproches. MÃ¡s claridad. Misma pÃ¡gina para todos.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Normas compartidas",
          headline: "Expectativas fÃ¡ciles de ver",
          copy: "Normas simples del piso .  para no tener que insinuar, insistir o llevar la cuenta.",
          footer: "La equidad se siente mÃ¡s ligera cuando es visible.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Con presupuestos ajustados, una pequeÃ±a injusticia se siente personal.",
        "El uso desigual (comida, luz, calefacciÃ³n) genera resentimiento rÃ¡pido.",
        "Los reinicios semanales evitan que una semana dura se vuelva conflicto.",
      ],
      rolePoints: [
        "Hace visibles las expectativas para no tener que seÃ±alar a nadie.",
        "Ayuda a ajustar de forma justa cuando alguien vive semana a semana.",
      ],
      formingPoints: [
        "Cambian los compis y horarios .  la base sigue clara.",
        "Si se desordena, se reinicia la prÃ³xima semana sin culpas.",
      ],
      audience: [
        "Pisos de estudiantes viviendo al dÃ­a.",
        "Casas compartidas donde compras, calefacciÃ³n o luz causan tensiÃ³n repetida.",
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
          "Revisa semanalmente para que lo pequeÃ±o no se acumule.",
          "Ajusta expectativas sin reproches .  solo claridad.",
          "Acordad la base de la semana y seguid adelante.",
        ],
        heading: "ReflexiÃ³n semanal, a ritmo humano",
      },
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricciÃ³n diaria .  sin convertir la vida compartida en un sistema de tareas.",
      sectionHeadings: {
        howItWorks: "CÃ³mo funciona Kinly",
        soundsLikeYou: "Â¿Te suena familiar?",
        roleHeading: "El rol de Kinly: claridad primero",
        formingHeading: "Si tu hogar aÃºn se estÃ¡ formando",
        audienceHeading: "Para quiÃ©n es esto",
        notListHeading: "Kinly no es...",
        readyHeading: "Cuando estÃ©s listo",
        readySubtitle: "Kinly vive en la app - empieza en iOS o Android.",
      },
      availability: {
        body: "Kinly estÃ¡ disponible en Nueva Zelanda y Singapur. Te avisaremos cuando abra en tu regiÃ³n.",
      },
    } satisfies LocaleCopy,

    ar: {
      whatHeading: "Ù…Ø§ Ù‡Ùˆ ÙƒÙŠÙ†Ù„ÙŠ",
      whatBody:
        "ÙƒÙŠÙ†Ù„ÙŠ Ù‡Ùˆ ØªØ·Ø¨ÙŠÙ‚ Ù„Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ ØµÙÙ…Ù… Ù„Ù…Ù† ÙŠØ¹ÙŠØ´ÙˆÙ† Ù…Ø¹Ø§Ù‹. Ù„Ù„Ø¨ÙŠÙˆØª Ø°Ø§Øª Ø§Ù„Ù…ÙŠØ²Ø§Ù†ÙŠØ© Ø§Ù„Ø¶ÙŠÙ‚Ø© ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª ÙˆØ§Ø¶Ø­Ø© Ø¨Ø¯ÙˆÙ† ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù…Ù†Ø²Ù„ Ø¥Ù„Ù‰ Ø¬Ø¯ÙˆÙ„ Ø­Ø³Ø§Ø¨Ø§Øª.",
      recognition: {
        heading: "Ø¹Ù†Ø¯Ù…Ø§ ÙŠÙƒÙˆÙ† Ø§Ù„Ù…Ø§Ù„ Ù…Ø­Ø¯ÙˆØ¯Ø§Ù‹ØŒ ÙŠØµØ¨Ø­ Ø¹Ø¯Ù… Ø§Ù„Ø¹Ø¯Ù„ Ø§Ù„ØµØºÙŠØ± ØªÙˆØªØ±Ø§Ù‹ ÙƒØ¨ÙŠØ±Ø§Ù‹.",
        subtitle: "Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ ÙˆØ§Ù„ØªØ¯ÙØ¦Ø© ÙˆÙ…Ø´ØªØ±ÙŠØ§Øª Ø§Ù„Ø¨ÙŠØª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© Ù„Ø§ ÙŠØ¬Ø¨ Ø£Ù† ØªØªØ­ÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ø³ØªÙŠØ§Ø¡ ØµØ§Ù…Øª.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¬Ø¹Ù„ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© ÙˆØ§Ø¶Ø­Ø© .  Ø­ØªÙ‰ Ù„Ø§ ØªØ¨Ø¯Ø£ Ø®Ù„Ø§ÙØ§Øª Ø¶ØºØ· Ø§Ù„Ù…ØµØ±ÙˆÙ Ù…Ù† Ø§Ù„Ø£Ø³Ø§Ø³.",
      },
      hero: {
        headline: "Ø³ÙƒÙ† Ù…Ø´ØªØ±Ùƒ Ø¹Ø§Ø¯Ù„ .  Ø­ØªÙ‰ Ù…Ø¹ Ù…ÙŠØ²Ø§Ù†ÙŠØ© Ø¶ÙŠÙ‚Ø©.",
        subhead: "ØªÙ†Ø¸ÙŠÙ… Ø®ÙÙŠÙ Ù„Ù„Ù…ØµØ§Ø±ÙŠÙ ÙˆØ§Ù„Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ù…Ø´ØªØ±ÙƒØ©ØŒ Ø¨Ø¯ÙˆÙ† Ø¥Ø­Ø±Ø§Ø¬ Ø£Ùˆ ØªÙ„Ù…ÙŠØ­Ø§Øª.",
        body: "Ø§ØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ù…Ø§ Ù‡Ùˆ Ù…Ø´ØªØ±Ùƒ ÙˆÙ…Ø§ Ù‡Ùˆ Ø´Ø®ØµÙŠØŒ ÙˆÙƒÙŠÙ ØªØªØ¹Ø§Ù…Ù„ÙˆÙ† Ù…Ø¹ Ø§Ù„Ø£Ø³Ø§Ø¨ÙŠØ¹ ØºÙŠØ± Ø§Ù„Ù…ØªØ³Ø§ÙˆÙŠØ©. ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ³Ø§Ø¹Ø¯ÙƒÙ… Ø¹Ù„Ù‰ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø¶Ø¨Ø· Ø¨Ù‡Ø¯ÙˆØ¡ .  Ù„ÙŠØ¨Ù‚Ù‰ Ø§Ù„Ø£Ù…Ø± Ø¹Ø§Ø¯Ù„Ø§Ù‹.",
        ctaHeading: "Ø®Ù„Ù‘ÙˆÙ‡ Ø¹Ø§Ø¯Ù„Ø§Ù‹ Ù‡Ø°Ø§ Ø§Ù„Ø£Ø³Ø¨ÙˆØ¹",
      },
      screens: [
        {
          title: "Ø§Ù„ÙŠÙˆÙ…",
          eyebrow: "Ø§Ù„Ø¢Ù†",
          headline: "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØ¶ØºØ· Ø¹Ù„Ù‰ Ø§Ù„Ø¨ÙŠØª Ù‡Ø°Ø§ Ø§Ù„Ø£Ø³Ø¨ÙˆØ¹ØŸ",
          copy: "Ù…Ø´ØªØ±ÙŠØ§Øª Ù…Ø´ØªØ±ÙƒØ©ØŒ ØªØ¯ÙØ¦Ø©ØŒ ÙƒÙ‡Ø±Ø¨Ø§Ø¡ .  ÙˆØ£Ø´ÙŠØ§Ø¡ ØµØºÙŠØ±Ø© ØªØªØ±Ø§ÙƒÙ… Ø¨Ù‡Ø¯ÙˆØ¡.",
          footer: "Ù„Ø§Ø­Ø¸ÙˆØ§ Ø§Ù„Ø§Ø­ØªÙƒØ§Ùƒ Ù…Ø¨ÙƒØ±Ø§Ù‹ Ù‚Ø¨Ù„ Ø£Ù† ÙŠØªØ­ÙˆÙ„ Ø¥Ù„Ù‰ Ø®Ù„Ø§Ù.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "Ø¥Ø¯Ø§Ø±Ø©",
          eyebrow: "Ø¥Ø¹Ø§Ø¯Ø© Ø¶Ø¨Ø·",
          headline: "Ø­Ø¯Ø¯ÙˆØ§ Ø§Ù„Ø£Ø³Ø§Ø³ Ù…Ø±Ø© ÙˆØ§Ø­Ø¯Ø©",
          copy: "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠÙØ­Ø³Ø¨ Ù…Ø´ØªØ±ÙƒØ§Ù‹ØŒ ÙˆÙƒÙŠÙ ØªØªØ¹Ø§Ù…Ù„ÙˆÙ† Ù…Ø¹ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ØºÙŠØ± Ø§Ù„Ù…ØªØ³Ø§ÙˆÙŠØŒ ÙˆÙƒÙŠÙ ØªØ¹Ø¯Ù‘Ù„ÙˆÙ† Ø¹Ù†Ø¯Ù…Ø§ ÙŠÙƒÙˆÙ† Ø£Ø­Ø¯ÙƒÙ… Ù…Ø¶ØºÙˆØ·Ø§Ù‹.",
          footer: "Ù„ÙˆÙ… Ø£Ù‚Ù„. ÙˆØ¶ÙˆØ­ Ø£ÙƒØ«Ø±. Ø§Ù„ÙƒÙ„ Ø¹Ù„Ù‰ Ù†ÙØ³ Ø§Ù„ØµÙØ­Ø©.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ù†Ø²Ù„",
          eyebrow: "Ù…Ø¹Ø§ÙŠÙŠØ± Ù…Ø´ØªØ±ÙƒØ©",
          headline: "Ø§Ø¬Ø¹Ù„ÙˆØ§ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ø³Ù‡Ù„Ø© Ø§Ù„Ø±Ø¤ÙŠØ©",
          copy: "Ù…Ø¹Ø§ÙŠÙŠØ± Ø¨Ø³ÙŠØ·Ø© Ù„Ù„Ø¨ÙŠØª .  Ø¨Ø¯ÙˆÙ† ØªÙ„Ù…ÙŠØ­ Ø£Ùˆ Ø¥Ù„Ø­Ø§Ø­ Ø£Ùˆ Ø¹Ø¯Ù‘ Ù„Ù„Ù†Ù‚Ø§Ø·.",
          footer: "Ø§Ù„Ø¹Ø¯Ù„ ÙŠØµØ¨Ø­ Ø£Ø®Ù Ø¹Ù†Ø¯Ù…Ø§ ÙŠÙƒÙˆÙ† ÙˆØ§Ø¶Ø­Ø§Ù‹.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "Ø¹Ù†Ø¯Ù…Ø§ ØªÙƒÙˆÙ† Ø§Ù„Ù…ÙŠØ²Ø§Ù†ÙŠØ© Ø¶ÙŠÙ‚Ø©ØŒ ÙŠØ¨Ø¯Ùˆ Ø¹Ø¯Ù… Ø§Ù„Ø¹Ø¯Ù„ Ø§Ù„ØµØºÙŠØ± Ø´Ø®ØµÙŠØ§Ù‹.",
        "Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ØºÙŠØ± Ø§Ù„Ù…ØªØ³Ø§ÙˆÙŠ (Ø§Ù„Ø·Ø¹Ø§Ù…ØŒ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ØŒ Ø§Ù„ØªØ¯ÙØ¦Ø©) ÙŠØ¨Ù†ÙŠ Ø§Ø³ØªÙŠØ§Ø¡ Ø¨Ø³Ø±Ø¹Ø©.",
        "Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø¶Ø¨Ø· Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ ØªÙ…Ù†Ø¹ Ø£Ø³Ø¨ÙˆØ¹Ø§Ù‹ ØµØ¹Ø¨Ø§Ù‹ Ù…Ù† Ø£Ù† ÙŠØµØ¨Ø­ ØµØ±Ø§Ø¹Ø§Ù‹.",
      ],
      rolePoints: [
        "ÙŠØ¬Ø¹Ù„ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© ÙˆØ§Ø¶Ø­Ø© Ø­ØªÙ‰ Ù„Ø§ ØªØ¶Ø·Ø±ÙˆØ§ Ù„Ø¥Ø­Ø±Ø§Ø¬ Ø£Ø­Ø¯.",
        "ÙŠØ³Ø§Ø¹Ø¯ Ø§Ù„Ø¨ÙŠØª Ø¹Ù„Ù‰ Ø§Ù„ØªÙƒÙŠÙ Ø¨Ø¹Ø¯Ù„ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¹ÙŠØ´ Ø£Ø­Ø¯ÙƒÙ… Ø£Ø³Ø¨ÙˆØ¹Ø§Ù‹ Ø¨Ø£Ø³Ø¨ÙˆØ¹.",
      ],
      formingPoints: [
        "Ø²Ù…Ù„Ø§Ø¡ Ø³ÙƒÙ† Ø¬Ø¯Ø¯ ÙˆØ¬Ø¯Ø§ÙˆÙ„ ØªØªØºÙŠØ± .  Ø§Ù„Ø£Ø³Ø§Ø³ ÙŠØ¨Ù‚Ù‰ ÙˆØ§Ø¶Ø­Ø§Ù‹.",
        "Ø¥Ø°Ø§ Ø­ØµÙ„ Ø®Ù„Ù„ØŒ ØªØ¹ÙŠØ¯ÙˆÙ† Ø§Ù„Ø¶Ø¨Ø· Ø§Ù„Ø£Ø³Ø¨ÙˆØ¹ Ø§Ù„Ù‚Ø§Ø¯Ù… Ø¨Ø¯ÙˆÙ† Ù„ÙˆÙ….",
      ],
      audience: [
        "Ø´Ù‚Ù‚ Ø·Ù„Ø§Ø¨ ÙŠØ¹ÙŠØ´ÙˆÙ† Ø£Ø³Ø¨ÙˆØ¹Ø§Ù‹ Ø¨Ø£Ø³Ø¨ÙˆØ¹.",
        "Ù…Ù†Ø§Ø²Ù„ Ù…Ø´ØªØ±ÙƒØ© ØªØªÙƒØ±Ø± ÙÙŠÙ‡Ø§ ØªÙˆØªØ±Ø§Øª Ø­ÙˆÙ„ Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª Ø£Ùˆ Ø§Ù„ØªØ¯ÙØ¦Ø© Ø£Ùˆ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡.",
      ],
      notList: [
        "Ù„ÙŠØ³ ØªØ·Ø¨ÙŠÙ‚ Ù…ÙŠØ²Ø§Ù†ÙŠØ©.",
        "Ù„ÙŠØ³ Ø³Ø¬Ù„ Ø¯ÙŠÙˆÙ†.",
        "Ù„ÙŠØ³ Ù„ÙˆØ­Ø© Ù†Ù‚Ø§Ø· Ø£Ùˆ ØªØ±ØªÙŠØ¨.",
        "Ù„ÙŠØ³ Ø±Ø¦ÙŠØ³ Ù…Ù‡Ø§Ù….",
      ],
      weekly: {
        intro: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ³ØªØ®Ø¯Ù… Ø¥ÙŠÙ‚Ø§Ø¹Ø§Ù‹ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ Ø­ØªÙ‰ ØªØ¨Ù‚Ù‰ Ø£Ø­Ø§Ø¯ÙŠØ« Ø§Ù„Ù…ØµØ±ÙˆÙ Ù‡Ø§Ø¯Ø¦Ø© ÙˆØ¹Ø§Ø¯Ù„Ø©.",
        points: [
          "ØªÙÙ‚Ø¯ÙˆØ§ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ Ø­ØªÙ‰ Ù„Ø§ ØªØªØ±Ø§ÙƒÙ… Ø§Ù„Ø£Ù…ÙˆØ± Ø§Ù„ØµØºÙŠØ±Ø©.",
          "Ø¹Ø¯Ù‘Ù„ÙˆØ§ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ø¨Ø¯ÙˆÙ† Ù„ÙˆÙ… .  ÙÙ‚Ø· ÙˆØ¶ÙˆØ­.",
          "Ø§ØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ø£Ø³Ø§Ø³ Ø§Ù„Ø£Ø³Ø¨ÙˆØ¹ Ø§Ù„Ù‚Ø§Ø¯Ù… ÙˆØ§Ù…Ø¶ÙˆØ§ Ù‚Ø¯Ù…Ø§Ù‹.",
        ],
        heading: "ØªØ£Ù…Ù„ Ø£Ø³Ø¨ÙˆØ¹ÙŠØŒ Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø¨Ø´Ø±ÙŠ",
      },
      toolsIntro:
        "Ø¨Ø¹Ø¯ Ø£Ù† ØªØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§ØªØŒ ÙŠÙ‚Ø¯Ù… ÙƒÙŠÙ†Ù„ÙŠ Ø£Ø¯ÙˆØ§Øª Ø¨Ø³ÙŠØ·Ø© ØªÙ‚Ù„Ù„ Ø§Ù„Ø§Ø­ØªÙƒØ§ÙƒØ§Øª Ø§Ù„ÙŠÙˆÙ…ÙŠØ© .  Ø¨Ø¯ÙˆÙ† ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ Ø¥Ù„Ù‰ Ù†Ø¸Ø§Ù… Ù…Ù‡Ø§Ù….",
      sectionHeadings: {
        howItWorks: "ÙƒÙŠÙ ÙŠØ¹Ù…Ù„ ÙƒÙŠÙ†Ù„ÙŠ",
        soundsLikeYou: "Ù‡Ù„ ÙŠØ¨Ø¯Ùˆ Ù‡Ø°Ø§ Ù…Ø«Ù„ Ù…ÙƒØ§Ù†ÙƒØŸ",
        roleHeading: "Ø¯ÙˆØ± ÙƒÙŠÙ†Ù„ÙŠ: ÙˆØ¶ÙˆØ­ Ø£ÙˆÙ„Ø§Ù‹",
        formingHeading: "Ø¥Ø°Ø§ ÙƒØ§Ù† Ù…Ù†Ø²Ù„Ùƒ Ù„Ø§ ÙŠØ²Ø§Ù„ ÙŠØªØ´ÙƒÙ„",
        audienceHeading: "Ù„Ù…Ù† Ù‡Ø°Ø§",
        notListHeading: "ÙƒÙŠÙ†Ù„ÙŠ Ù„ÙŠØ³...",
        readyHeading: "Ø¹Ù†Ø¯Ù…Ø§ ØªÙƒÙˆÙ† Ø¬Ø§Ù‡Ø²Ø§Ù‹",
        readySubtitle: "ÙƒÙŠÙ†Ù„ÙŠ Ù…ÙˆØ¬ÙˆØ¯ ÙÙŠ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ - Ø§Ø¨Ø¯Ø£ Ø¹Ù„Ù‰ iOS Ø£Ùˆ Android.",
      },
      availability: {
        body: "ÙƒÙŠÙ†Ù„ÙŠ Ù…ØªØ§Ø­ Ø­Ø§Ù„ÙŠØ§Ù‹ ÙÙŠ Ù†ÙŠÙˆØ²ÙŠÙ„Ù†Ø¯Ø§ ÙˆØ³Ù†ØºØ§ÙÙˆØ±Ø©. Ø³Ù†Ø±Ø§Ø³Ù„Ùƒ Ø¹Ù†Ø¯Ù…Ø§ ÙŠÙØªØ­ ÙƒÙŠÙ†Ù„ÙŠ ÙÙŠ Ù…Ù†Ø·Ù‚ØªÙƒ.",
      },
    } satisfies LocaleCopy,
  },
};

