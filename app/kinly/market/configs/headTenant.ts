import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const headTenantConfig: ScenarioConfig = {
  pageKey: "head_tenant_shared_responsibility",

  recognition: {
    heading: "You did not sign up to manage the flat.",
    subtitle: "If you step in, you get blamed. If you do not, things fall apart.",
    body: "Kinly keeps shared expectations clear so the load is not on one person.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps expectations visible and neutral so one person does not become the enforcer.",

  hero: {
    headline: "A calmer way to share responsibility in your flat.",
    subhead: "One neutral reference point, less personal confrontation.",
    body: "Kinly reduces the pressure of being the default organiser without turning you into the boss. No surveillance, no reporting, no enforcement tools.",
    ctaHeading: "Share the load calmly",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Signal",
      headline: "What needs attention without the blame",
      copy: "Small resets, shared spaces, and the things that quietly pile up.",
      footer: "Clarity early keeps things smooth.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Reset",
      headline: "Share expectations, not commands",
      copy: "Agree the baseline once so no one has to enforce it.",
      footer: "Less personal conflict, more shared responsibility.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "Keep the reference point neutral",
      copy: "Clear expectations in one place so you are not the messenger.",
      footer: "No escalation. No policing.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared flows",
      benefit: "Keep recurring standards visible so responsibility is shared, not carried by one person.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Make shared shopping needs visible so no one has to chase reminders.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs transparent so discussions stay neutral and factual.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to reset expectations early and reduce personal confrontation.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "If I do nothing, things fall apart.",
    "If I step in, people resent me.",
    "I just want the flat to run smoothly.",
  ],

  rolePoints: [
    "Keeps shared expectations visible without making you the boss.",
    "Reduces personal confrontation with a neutral reference point.",
  ],

  formingPoints: [
    "House dynamics shift; the baseline stays clear.",
    "Quiet burnout eases when responsibility is shared.",
  ],

  audience: [
    "Head tenants who keep the flat running.",
    "Organisers who want shared responsibility without role escalation.",
  ],

  notList: [
    "Not a rule engine.",
    "Not surveillance.",
    "Not a reporting tool.",
    "Not landlord-facing.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so shared responsibility stays human.",
    points: [
      "Check in weekly so issues do not stack up.",
      "Reset expectations without making it personal.",
      "Keep the flat calm without escalation.",
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
        "Kinly es una app de convivencia para quienes viven juntos. Mantiene las expectativas visibles y neutrales para que una sola persona no cargue con hacerlas cumplir.",
      recognition: {
        heading: "No te apuntaste para dirigir el piso.",
        subtitle: "Si intervienes, te culpan. Si no, todo se desordena.",
        body: "Kinly mantiene claras las expectativas compartidas para que la carga no recaiga en una sola persona.",
      },
      hero: {
        headline: "Una forma mÃ¡s tranquila de compartir la responsabilidad en tu piso.",
        subhead: "Un referente neutral, menos confrontaciÃ³n personal.",
        body: "Kinly reduce la presiÃ³n de ser el organizador por defecto sin convertirte en jefe. Sin vigilancia, sin reportes, sin herramientas de control.",
        ctaHeading: "Compartir la carga con calma",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "SeÃ±al",
          headline: "Lo que necesita atenciÃ³n sin culpas",
          copy: "PequeÃ±os reinicios, espacios compartidos y lo que se acumula en silencio.",
          footer: "La claridad temprana mantiene la calma.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Reiniciar",
          headline: "Expectativas compartidas, no Ã³rdenes",
          copy: "Acordad la base una vez para que nadie tenga que imponerla.",
          footer: "Menos conflicto personal, mÃ¡s responsabilidad compartida.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Normas compartidas",
          headline: "Un referente neutral",
          copy: "Expectativas claras en un solo lugar para que no seas el mensajero.",
          footer: "Sin escaladas. Sin vigilancia.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Si no hago nada, todo se desordena.",
        "Si intervengo, la gente me resiente.",
        "Solo quiero que el piso funcione bien.",
      ],
      rolePoints: [
        "Mantiene visibles las expectativas sin convertirte en jefe.",
        "Reduce la confrontaciÃ³n personal con un referente neutral.",
      ],
      formingPoints: [
        "La dinÃ¡mica cambia; la base sigue clara.",
        "El desgaste disminuye cuando la responsabilidad es compartida.",
      ],
      audience: [
        "Quienes coordinan y mantienen el piso funcionando.",
        "Organizadores que quieren responsabilidad compartida sin escaladas.",
      ],
      notList: [
        "No es un motor de reglas.",
        "No es vigilancia.",
        "No es una herramienta de reportes.",
        "No es para propietarios.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que la responsabilidad siga siendo humana.",
        points: [
          "Revisa semanalmente para que los problemas no se acumulen.",
          "Ajusta expectativas sin hacerlo personal.",
          "MantÃ©n el piso calmado sin escalar.",
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
        "ÙƒÙŠÙ†Ù„ÙŠ Ù‡Ùˆ ØªØ·Ø¨ÙŠÙ‚ Ù„Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ ØµÙÙ…Ù… Ù„Ù…Ù† ÙŠØ¹ÙŠØ´ÙˆÙ† Ù…Ø¹Ø§Ù‹. ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª ÙˆØ§Ø¶Ø­Ø© ÙˆÙ…Ø­Ø§ÙŠØ¯Ø© Ø­ØªÙ‰ Ù„Ø§ ÙŠØªØ­ÙˆÙ„ Ø´Ø®Øµ ÙˆØ§Ø­Ø¯ Ø¥Ù„Ù‰ Ù…Ù†ÙÙ‘Ø° Ø§Ù„Ù‚ÙˆØ§Ø¹Ø¯.",
      recognition: {
        heading: "Ù„Ù… ØªØªÙˆÙ‚Ø¹ Ù„ØªØ¯ÙŠØ± Ø§Ù„Ø¨ÙŠØª.",
        subtitle: "Ø¥Ø°Ø§ ØªØ¯Ø®Ù„ØªØŒ ÙŠÙ„ÙˆÙ…Ùƒ Ø§Ù„Ø¢Ø®Ø±ÙˆÙ†. ÙˆØ¥Ø°Ø§ Ù„Ù… ØªØªØ¯Ø®Ù„ØŒ ØªØªÙÙƒÙƒ Ø§Ù„Ø£Ù…ÙˆØ±.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© ÙˆØ§Ø¶Ø­Ø© Ø­ØªÙ‰ Ù„Ø§ ÙŠÙ‚Ø¹ Ø§Ù„Ø­Ù…Ù„ Ø¹Ù„Ù‰ Ø´Ø®Øµ ÙˆØ§Ø­Ø¯.",
      },
      hero: {
        headline: "Ø·Ø±ÙŠÙ‚Ø© Ø£Ù‡Ø¯Ø£ Ù„ØªÙ‚Ø§Ø³Ù… Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© ÙÙŠ Ø´Ù‚ØªÙƒ.",
        subhead: "Ù…Ø±Ø¬Ø¹ Ù…Ø­Ø§ÙŠØ¯ ÙˆØªÙ‚Ù„ÙŠÙ„ Ø§Ù„Ù…ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ø´Ø®ØµÙŠØ©.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ®ÙÙ Ø¶ØºØ· Ø£Ù† ØªÙƒÙˆÙ† Ø§Ù„Ù…Ù†Ø¸Ù… Ø§Ù„Ø§ÙØªØ±Ø§Ø¶ÙŠ Ø¯ÙˆÙ† Ø£Ù† ÙŠØ¬Ø¹Ù„Ùƒ Ø§Ù„Ù…Ø¯ÙŠØ±. Ø¨Ù„Ø§ Ù…Ø±Ø§Ù‚Ø¨Ø©ØŒ Ø¨Ù„Ø§ ØªÙ‚Ø§Ø±ÙŠØ±ØŒ Ø¨Ù„Ø§ Ø£Ø¯ÙˆØ§Øª ÙØ±Ø¶.",
        ctaHeading: "Ø´Ø§Ø±Ùƒ Ø§Ù„Ø­Ù…Ù„ Ø¨Ù‡Ø¯ÙˆØ¡",
      },
      screens: [
        {
          title: "Ø§Ù„ÙŠÙˆÙ…",
          eyebrow: "Ø¥Ø´Ø§Ø±Ø©",
          headline: "Ù…Ø§ ÙŠØ­ØªØ§Ø¬ Ø§Ù†ØªØ¨Ø§Ù‡Ø§Ù‹ Ø¯ÙˆÙ† Ù„ÙˆÙ…",
          copy: "Ø¥Ø¹Ø§Ø¯Ø§Øª Ø¶Ø¨Ø· ØµØºÙŠØ±Ø© ÙˆÙ…Ø³Ø§Ø­Ø§Øª Ù…Ø´ØªØ±ÙƒØ© ÙˆÙ…Ø§ ÙŠØªØ±Ø§ÙƒÙ… Ø¨Ù‡Ø¯ÙˆØ¡.",
          footer: "Ø§Ù„ÙˆØ¶ÙˆØ­ Ø§Ù„Ù…Ø¨ÙƒØ± ÙŠØ­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø§Ù„Ù‡Ø¯ÙˆØ¡.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "Ø¥Ø¯Ø§Ø±Ø©",
          eyebrow: "Ø¥Ø¹Ø§Ø¯Ø© Ø¶Ø¨Ø·",
          headline: "ØªÙˆÙ‚Ø¹Ø§Øª Ù…Ø´ØªØ±ÙƒØ©ØŒ Ù„Ø§ Ø£ÙˆØ§Ù…Ø±",
          copy: "Ø§ØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø³Ø§Ø³ Ù…Ø±Ø© ÙˆØ§Ø­Ø¯Ø© Ø­ØªÙ‰ Ù„Ø§ ÙŠÙØ±Ø¶Ù‡ Ø£Ø­Ø¯.",
          footer: "Ù…ÙˆØ§Ø¬Ù‡Ø© Ø£Ù‚Ù„ØŒ Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© Ø£ÙƒØ«Ø± Ù…Ø´Ø§Ø±ÙƒØ©.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ù†Ø²Ù„",
          eyebrow: "Ù…Ø¹Ø§ÙŠÙŠØ± Ù…Ø´ØªØ±ÙƒØ©",
          headline: "Ù…Ø±Ø¬Ø¹ Ù…Ø­Ø§ÙŠØ¯ Ù„Ù„Ø¬Ù…ÙŠØ¹",
          copy: "ØªÙˆÙ‚Ø¹Ø§Øª ÙˆØ§Ø¶Ø­Ø© ÙÙŠ Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯ Ø­ØªÙ‰ Ù„Ø§ ØªÙƒÙˆÙ† Ø£Ù†Øª Ø§Ù„Ù…Ø±Ø³Ù„.",
          footer: "Ù„Ø§ ØªØµØ¹ÙŠØ¯. Ù„Ø§ Ù…Ø±Ø§Ù‚Ø¨Ø©.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "Ø¥Ø°Ø§ Ù„Ù… Ø£ØªØ¯Ø®Ù„ØŒ ØªØªÙÙƒÙƒ Ø§Ù„Ø£Ù…ÙˆØ±.",
        "Ø¥Ø°Ø§ ØªØ¯Ø®Ù„ØªØŒ ÙŠØ³ØªØ§Ø¡ Ù…Ù†ÙŠ Ø§Ù„Ø¢Ø®Ø±ÙˆÙ†.",
        "Ø£Ø±ÙŠØ¯ ÙÙ‚Ø· Ø£Ù† ÙŠØ¹Ù…Ù„ Ø§Ù„Ø¨ÙŠØª Ø¨Ø³Ù„Ø§Ø³Ø©.",
      ],
      rolePoints: [
        "ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª ÙˆØ§Ø¶Ø­Ø© Ø¯ÙˆÙ† Ø£Ù† ÙŠØ¬Ø¹Ù„Ùƒ Ø§Ù„Ù…Ø¯ÙŠØ±.",
        "ÙŠÙ‚Ù„Ù„ Ø§Ù„Ù…ÙˆØ§Ø¬Ù‡Ø© Ø§Ù„Ø´Ø®ØµÙŠØ© Ø¨Ù…Ø±Ø¬Ø¹ Ù…Ø­Ø§ÙŠØ¯.",
      ],
      formingPoints: [
        "Ø¯ÙŠÙ†Ø§Ù…ÙŠÙƒÙŠØ§Øª Ø§Ù„Ø¨ÙŠØª ØªØªØºÙŠØ±Ø› Ø§Ù„Ø£Ø³Ø§Ø³ ÙŠØ¨Ù‚Ù‰ ÙˆØ§Ø¶Ø­Ø§Ù‹.",
        "Ø§Ù„Ø¥Ø±Ù‡Ø§Ù‚ Ø§Ù„Ù‡Ø§Ø¯Ø¦ ÙŠØ®Ù Ø¹Ù†Ø¯Ù…Ø§ ØªÙØ´Ø§Ø±Ùƒ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ©.",
      ],
      audience: [
        "Ù…Ù† ÙŠØ¯ÙŠØ±ÙˆÙ† Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ù„ÙŠØ¨Ù‚Ù‰ Ø§Ù„Ø¨ÙŠØª ÙŠØ¹Ù…Ù„.",
        "Ù…Ù†Ø¸Ù…ÙˆÙ† ÙŠØ±ÙŠØ¯ÙˆÙ† Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© Ù…Ø´ØªØ±ÙƒØ© Ø¨Ù„Ø§ ØªØµØ¹ÙŠØ¯ Ù„Ù„Ø£Ø¯ÙˆØ§Ø±.",
      ],
      notList: [
        "Ù„ÙŠØ³ Ù…Ø­Ø±Ùƒ Ù‚ÙˆØ§Ø¹Ø¯.",
        "Ù„ÙŠØ³ Ù…Ø±Ø§Ù‚Ø¨Ø©.",
        "Ù„ÙŠØ³ Ø£Ø¯Ø§Ø© ØªÙ‚Ø§Ø±ÙŠØ±.",
        "Ù„ÙŠØ³ Ù…ÙˆØ¬Ù‡Ø§Ù‹ Ù„Ù„Ù…Ø§Ù„Ùƒ.",
      ],
      weekly: {
        intro: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ³ØªØ®Ø¯Ù… Ø¥ÙŠÙ‚Ø§Ø¹Ø§Ù‹ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ Ù„ØªØ¨Ù‚Ù‰ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© Ø¨Ø´Ø±ÙŠØ©.",
        points: [
          "Ø±Ø§Ø¬Ø¹ÙˆØ§ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ Ø­ØªÙ‰ Ù„Ø§ ØªØªØ±Ø§ÙƒÙ… Ø§Ù„Ù…Ø´ÙƒÙ„Ø§Øª.",
          "Ø£Ø¹ÙŠØ¯ÙˆØ§ Ø¶Ø¨Ø· Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ø¯ÙˆÙ† Ø¬Ø¹Ù„Ù‡Ø§ Ø´Ø®ØµÙŠØ©.",
          "Ø­Ø§ÙØ¸ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ù„Ù‡Ø¯ÙˆØ¡ Ø¯ÙˆÙ† ØªØµØ¹ÙŠØ¯.",
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

