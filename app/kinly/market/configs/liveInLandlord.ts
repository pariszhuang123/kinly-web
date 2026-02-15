import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const liveInLandlordConfig: ScenarioConfig = {
  pageKey: "live_in_landlord",

  recognition: {
    heading: "You live with your tenants .  clarity matters more.",
    subtitle: "You want a calm home, not a power imbalance.",
    body: "Kinly keeps house expectations visible in a neutral, human way so everyone feels comfortable sharing the space.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps expectations clear without making you the enforcer or your tenants feel policed.",

  hero: {
    headline: "A calmer shared home with your tenants.",
    subhead: "Neutral clarity for noise, guests, and shared spaces.",
    body: "Kinly shows the same baseline to you and your tenants .  so running the home stays fair, not formal.",
    ctaHeading: "Set a calm baseline",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Quiet hours, shared spaces, and light asks that keep the peace.",
      footer: "Clarity without confrontation.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update the baseline without awkwardness",
      copy: "Tweak expectations as peopleâ€™s schedules change .  nothing is locked in.",
      footer: "Neutral updates, no power plays.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference for everyone",
      copy: "Noise, guests, cleaning, and shared costs in one place .  no repeated speeches.",
      footer: "Shared clarity, respectful tone.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  chips: [
    "I want clarity without feeling like the boss.",
    "I live here too .  the home should feel fair to everyone.",
    "I need guests/noise/cleaning clear without awkward talks.",
  ],

  rolePoints: [
    "Keeps expectations neutral so you are not the enforcer.",
    "Makes adjustments easy when routines change.",
  ],

  formingPoints: [
    "Tenants may change; the baseline stays clear.",
    "If it drifts, you reset next week without confrontation.",
  ],

  audience: [
    "Live-in landlords and resident owners.",
    "Homes where owners and tenants share space daily.",
  ],

  notList: [
    "Not a legal document.",
    "Not surveillance.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so shared living stays human and calm.",
    points: [
      "Check in weekly so small issues donâ€™t stack up.",
      "Adjust expectations without blame .  just clarity.",
      "Keep the home warm while staying aligned.",
    ],
  },
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning your home into a rulebook.",

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      whatHeading: "QuÃ© es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. Mantiene claras las expectativas sin que tengas que ser el ejecutor ni que tus inquilinos se sientan vigilados.",
      recognition: {
        heading: "Vives con tus inquilinos .  la claridad importa mÃ¡s.",
        subtitle: "Quieres un hogar tranquilo, no una relaciÃ³n de poder.",
        body: "Kinly mantiene visibles las expectativas de forma neutral y humana para que todos se sientan cÃ³modos compartiendo el espacio.",
      },
      hero: {
        headline: "Un hogar tranquilo con tus inquilinos.",
        subhead: "Claridad neutral para ruido, visitas y espacios.",
        body: "Kinly muestra la misma base a ti y a tus inquilinos .  asÃ­ la convivencia es justa, no formal.",
        ctaHeading: "Fija una base tranquila",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "QuÃ© necesita atenciÃ³n",
          copy: "Horas de silencio, espacios compartidos y peticiones ligeras para mantener la paz.",
          footer: "Claridad sin confrontaciÃ³n.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Actualiza la base sin incomodidad",
          copy: "Ajusta expectativas a medida que cambian los horarios .  nada queda fijo.",
          footer: "Actualizaciones neutrales, sin juegos de poder.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Un referente tranquilo para todos",
          copy: "Ruido, visitas, limpieza y costos en un solo lugar .  sin discursos repetidos.",
          footer: "Claridad compartida, tono respetuoso.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Quiero claridad sin sentirme jefe.",
        "TambiÃ©n vivo aquÃ­ .  debe sentirse justo para todos.",
        "Necesito visitas/ruido/limpieza claros sin charlas incÃ³modas.",
      ],
      rolePoints: [
        "Mantiene las expectativas neutrales para que no seas el ejecutor.",
        "Facilita ajustes cuando cambian las rutinas.",
      ],
      formingPoints: [
        "Los inquilinos pueden cambiar; la base sigue clara.",
        "Si se desvÃ­a, se reinicia la prÃ³xima semana sin confrontaciÃ³n.",
      ],
      audience: [
        "Propietarios residentes y caseros que viven en la casa.",
        "Hogares donde propietarios e inquilinos comparten el espacio a diario.",
      ],
      notList: [
        "No es un documento legal.",
        "No es vigilancia.",
        "No es un marcador.",
        "No es un jefe de tareas.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que la convivencia siga siendo humana y tranquila.",
        points: [
          "Revisa semanalmente para que lo pequeÃ±o no se acumule.",
          "Ajusta expectativas sin culpas .  solo claridad.",
          "MantÃ©n el hogar cÃ¡lido mientras siguen alineados.",
        ],
        heading: "ReflexiÃ³n semanal, a ritmo humano",
      },
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricciÃ³n diaria .  sin convertir el hogar en un libro de reglas.",
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
        "ÙƒÙŠÙ†Ù„ÙŠ Ù‡Ùˆ ØªØ·Ø¨ÙŠÙ‚ Ù„Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ ØµÙÙ…Ù… Ù„Ù…Ù† ÙŠØ¹ÙŠØ´ÙˆÙ† Ù…Ø¹Ø§Ù‹. ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª ÙˆØ§Ø¶Ø­Ø© Ø¯ÙˆÙ† Ø£Ù† ÙŠØ¬Ø¹Ù„Ùƒ Ù…Ù†ÙÙ‘Ø°Ø§Ù‹ Ø£Ùˆ ÙŠØ¬Ø¹Ù„ Ø§Ù„Ù…Ø³ØªØ£Ø¬Ø±ÙŠÙ† ÙŠØ´Ø¹Ø±ÙˆÙ† Ø¨Ø§Ù„Ø±Ù‚Ø§Ø¨Ø©.",
      recognition: {
        heading: "Ø£Ù†Øª ØªØ¹ÙŠØ´ Ù…Ø¹ Ù…Ø³ØªØ£Ø¬Ø±ÙŠÙƒ .  Ø§Ù„ÙˆØ¶ÙˆØ­ Ø£Ù‡Ù….",
        subtitle: "ØªØ±ÙŠØ¯ Ø¨ÙŠØªØ§Ù‹ Ù‡Ø§Ø¯Ø¦Ø§Ù‹ Ù„Ø§ Ø¹Ù„Ø§Ù‚Ø© Ù‚ÙˆØ©.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¨Ù‚ÙŠ ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ø¨ÙŠØª Ù…Ø±Ø¦ÙŠØ© Ø¨Ù†Ø¨Ø±Ø© Ù…Ø­Ø§ÙŠØ¯Ø© ÙˆØ¨Ø´Ø±ÙŠØ© Ù„ÙŠØ´Ø¹Ø± Ø§Ù„Ø¬Ù…ÙŠØ¹ Ø¨Ø§Ù„Ø±Ø§Ø­Ø© ÙÙŠ Ø§Ù„Ù…Ø´Ø§Ø±ÙƒØ©.",
      },
      hero: {
        headline: "Ø¨ÙŠØª Ù‡Ø§Ø¯Ø¦ ØªØ´Ø§Ø±ÙƒÙ‡ Ù…Ø¹ Ø§Ù„Ù…Ø³ØªØ£Ø¬Ø±ÙŠÙ†.",
        subhead: "ÙˆØ¶ÙˆØ­ Ù…Ø­Ø§ÙŠØ¯ Ù„Ù„Ø¶ÙˆØ¶Ø§Ø¡ ÙˆØ§Ù„Ø¶ÙŠÙˆÙ ÙˆØ§Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ©.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠÙØ¸Ù‡Ø± Ù†ÙØ³ Ø§Ù„Ø£Ø³Ø§Ø³ Ù„Ùƒ ÙˆÙ„Ù„Ù…Ø³ØªØ£Ø¬Ø±ÙŠÙ† .  ÙÙŠØ¨Ù‚Ù‰ ØªØ¯Ø¨ÙŠØ± Ø§Ù„Ø¨ÙŠØª Ø¹Ø§Ø¯Ù„Ø§Ù‹ Ù„Ø§ Ø±Ø³Ù…ÙŠØ§Ù‹.",
        ctaHeading: "Ø¶Ø¹ Ø£Ø³Ø§Ø³Ø§Ù‹ Ù‡Ø§Ø¯Ø¦Ø§Ù‹",
      },
      screens: [
        {
          title: "Ø§Ù„ÙŠÙˆÙ…",
          eyebrow: "Ø§Ù„Ø¢Ù†",
          headline: "Ù…Ø§ ÙŠØ­ØªØ§Ø¬ Ø§Ù†ØªØ¨Ø§Ù‡Ø§Ù‹",
          copy: "Ø³Ø§Ø¹Ø§Øª Ù‡Ø¯ÙˆØ¡ ÙˆÙ…Ø³Ø§Ø­Ø§Øª Ù…Ø´ØªØ±ÙƒØ© ÙˆØ·Ù„Ø¨Ø§Øª Ø®ÙÙŠÙØ© ØªØ­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ù„Ø§Ù….",
          footer: "ÙˆØ¶ÙˆØ­ Ø¨Ù„Ø§ Ù…ÙˆØ§Ø¬Ù‡Ø©.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "Ø¥Ø¯Ø§Ø±Ø©",
          eyebrow: "ØªØ¹Ø¯ÙŠÙ„",
          headline: "Ø­Ø¯Ù‘Ø« Ø§Ù„Ø£Ø³Ø§Ø³ Ø¨Ù„Ø§ Ø¥Ø­Ø±Ø§Ø¬",
          copy: "Ø¹Ø¯Ù‘Ù„ÙˆØ§ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ù…Ø¹ ØªØºÙŠØ± Ø§Ù„Ø¬Ø¯Ø§ÙˆÙ„ .  Ù„Ø§ Ø´ÙŠØ¡ Ù…Ù‚ÙÙ„.",
          footer: "ØªØ­Ø¯ÙŠØ«Ø§Øª Ù…Ø­Ø§ÙŠØ¯Ø© Ø¨Ù„Ø§ ØµØ±Ø§Ø¹Ø§Øª Ù‚ÙˆØ©.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ù†Ø²Ù„",
          eyebrow: "Ù…Ø±Ø¬Ø¹",
          headline: "Ù…Ø±Ø¬Ø¹ Ù‡Ø§Ø¯Ø¦ Ù„Ù„Ø¬Ù…ÙŠØ¹",
          copy: "Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡ ÙˆØ§Ù„Ø¶ÙŠÙˆÙ ÙˆØ§Ù„ØªÙ†Ø¸ÙŠÙ ÙˆØ§Ù„ØªÙƒØ§Ù„ÙŠÙ ÙÙŠ Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯ .  Ø¨Ù„Ø§ Ø®Ø·Ø¨ Ù…ÙƒØ±Ø±Ø©.",
          footer: "ÙˆØ¶ÙˆØ­ Ù…Ø´ØªØ±ÙƒØŒ Ù†Ø¨Ø±Ø© Ù…Ø­ØªØ±Ù…Ø©.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "Ø£Ø±ÙŠØ¯ ÙˆØ¶ÙˆØ­Ø§Ù‹ Ø¯ÙˆÙ† Ø£Ù† Ø£Ø¨Ø¯Ùˆ Ø±Ø¦ÙŠØ³Ø§Ù‹.",
        "Ø£Ù†Ø§ Ø£Ø¹ÙŠØ´ Ù‡Ù†Ø§ Ø£ÙŠØ¶Ø§Ù‹ .  ÙŠØ¬Ø¨ Ø£Ù† ÙŠØ´Ø¹Ø± Ø§Ù„Ø¬Ù…ÙŠØ¹ Ø¨Ø§Ù„Ø¹Ø¯Ù„.",
        "Ø£Ø­ØªØ§Ø¬ ÙˆØ¶ÙˆØ­ Ø§Ù„Ø¶ÙŠÙˆÙ/Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡/Ø§Ù„ØªÙ†Ø¸ÙŠÙ Ø¨Ù„Ø§ Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ù…Ø­Ø±Ø¬Ø©.",
      ],
      rolePoints: [
        "ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ù…Ø­Ø§ÙŠØ¯Ø© ÙÙ„Ø§ ØªÙƒÙˆÙ† Ø§Ù„Ù…Ù†ÙÙ‘Ø°.",
        "ÙŠØ³Ù‡Ù‘Ù„ Ø§Ù„ØªØ¹Ø¯ÙŠÙ„ Ø¹Ù†Ø¯ ØªØºÙŠÙ‘Ø± Ø§Ù„Ø±ÙˆØªÙŠÙ†.",
      ],
      formingPoints: [
        "Ù‚Ø¯ ÙŠØªØºÙŠØ± Ø§Ù„Ù…Ø³ØªØ£Ø¬Ø±ÙˆÙ†Ø› Ø§Ù„Ø£Ø³Ø§Ø³ ÙŠØ¨Ù‚Ù‰ ÙˆØ§Ø¶Ø­Ø§Ù‹.",
        "Ø¥Ø°Ø§ Ø§Ù†Ø­Ø±ÙØŒ ØªØ¹ÙŠØ¯ÙˆÙ†Ù‡ Ø§Ù„Ø£Ø³Ø¨ÙˆØ¹ Ø§Ù„Ù‚Ø§Ø¯Ù… Ø¨Ù„Ø§ Ù…ÙˆØ§Ø¬Ù‡Ø©.",
      ],
      audience: [
        "Ù…Ø§Ù„ÙƒÙˆÙ† Ù…Ù‚ÙŠÙ…ÙˆÙ† ÙˆØ£ØµØ­Ø§Ø¨ ÙŠØ³ÙƒÙ†ÙˆÙ† ÙÙŠ Ø§Ù„Ù…Ù†Ø²Ù„.",
        "Ø¨ÙŠÙˆØª ÙŠØ´Ø§Ø±Ùƒ ÙÙŠÙ‡Ø§ Ø§Ù„Ù…Ø§Ù„Ùƒ ÙˆØ§Ù„Ù…Ø³ØªØ£Ø¬Ø±ÙˆÙ† Ù†ÙØ³ Ø§Ù„Ù…Ø³Ø§Ø­Ø© ÙŠÙˆÙ…ÙŠØ§Ù‹.",
      ],
      notList: [
        "Ù„ÙŠØ³ ÙˆØ«ÙŠÙ‚Ø© Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©.",
        "Ù„ÙŠØ³ Ù…Ø±Ø§Ù‚Ø¨Ø©.",
        "Ù„ÙŠØ³ Ù„ÙˆØ­Ø© Ù†Ù‚Ø§Ø·.",
        "Ù„ÙŠØ³ Ø±Ø¦ÙŠØ³ Ù…Ù‡Ø§Ù….",
      ],
      weekly: {
        intro: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¹Ù…Ù„ Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø£Ø³Ø¨ÙˆØ¹ÙŠ Ù„ØªØ¨Ù‚Ù‰ Ø§Ù„Ù…Ø¹ÙŠØ´Ø© Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© Ø¨Ø´Ø±ÙŠØ© ÙˆÙ‡Ø§Ø¯Ø¦Ø©.",
        points: [
          "Ø±Ø§Ø¬Ø¹ÙˆØ§ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ Ø­ØªÙ‰ Ù„Ø§ ØªØªØ±Ø§ÙƒÙ… Ø§Ù„Ø£Ù…ÙˆØ± Ø§Ù„ØµØºÙŠØ±Ø©.",
          "Ø¹Ø¯Ù‘Ù„ÙˆØ§ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ø¨Ø¯ÙˆÙ† Ù„ÙˆÙ… .  ÙÙ‚Ø· ÙˆØ¶ÙˆØ­.",
          "Ø­Ø§ÙØ¸ÙˆØ§ Ø¹Ù„Ù‰ Ø¯ÙØ¡ Ø§Ù„Ø¨ÙŠØª Ù…Ø¹ Ø§Ù„Ø¨Ù‚Ø§Ø¡ Ù…ØªÙˆØ§ÙÙ‚ÙŠÙ†.",
        ],
        heading: "ØªØ£Ù…Ù„ Ø£Ø³Ø¨ÙˆØ¹ÙŠØŒ Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø¨Ø´Ø±ÙŠ",
      },
      toolsIntro:
        "Ø¨Ø¹Ø¯ Ø£Ù† ØªØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§ØªØŒ ÙŠÙ‚Ø¯Ù… ÙƒÙŠÙ†Ù„ÙŠ Ø£Ø¯ÙˆØ§Øª Ø¨Ø³ÙŠØ·Ø© ØªÙ‚Ù„Ù„ Ø§Ù„Ø§Ø­ØªÙƒØ§ÙƒØ§Øª Ø§Ù„ÙŠÙˆÙ…ÙŠØ© .  Ø¨Ø¯ÙˆÙ† ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù…Ù†Ø²Ù„ Ø¥Ù„Ù‰ ÙƒØªØ§Ø¨ Ù‚ÙˆØ§Ø¹Ø¯.",
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


