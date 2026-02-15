import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const flatAgreementsConfig: ScenarioConfig = {
  pageKey: "flat_agreements",

  recognition: {
    heading: "Agreements matter, but paperwork isn't the vibe.",
    subtitle: "You need clarity on shared living without feeling like a landlord.",
    body: "Kinly keeps house agreements visible, calm, and human .  no policing, no legalese.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps agreements visible and calm without turning your flat into a contract negotiation.",

  hero: {
    headline: "Clear agreements, human tone.",
    subhead: "One place for house norms, shared costs, and expectations .  no lecture required.",
    body: "Kinly lets everyone see the same baseline for noise, guests, cleaning, and shared costs, while staying pressure-free.",
    ctaHeading: "Set the baseline together",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Noise, guests, shared chores and quick resets .  without sounding bossy.",
      footer: "Clear signals, no policing.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Keep agreements current",
      copy: "Tweak quiet hours, guest rules, or cleaning standards as the flat changes.",
      footer: "Everyone stays aligned, nothing is locked in.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference",
      copy: "Noise, guests, bills, and cleaning expectations in one place .  no group-chat essays.",
      footer: "Shared clarity, human tone.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  chips: [
    "We need clarity without sounding like landlords.",
    "Guests, noise, and cleaning need one baseline.",
    "Keep it fair without nagging.",
  ],

  rolePoints: [
    "Keeps agreements visible without turning anyone into the enforcer.",
    "Makes adjustments easy when the flat changes.",
  ],

  formingPoints: [
    "New flatmates can see the baseline on day one.",
    "If it drifts, you reset next week without blame.",
  ],

  audience: [
    "Flats formalising house norms without heavy paperwork.",
    "Groups who want clarity on guests/noise/cleaning without policing.",
  ],

  notList: [
    "Not a legal document.",
    "Not surveillance.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  weekly: {
    intro: "Kinly runs on a weekly rhythm so agreements stay fresh and human.",
    points: [
      "Check in weekly so small issues don't stack up.",
      "Adjust the baseline without blame .  just clarity.",
      "Keep guests/noise/cleaning aligned without long threads.",
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
        "Kinly es una app de convivencia para quienes viven juntos. Mantiene los acuerdos visibles y tranquilos sin convertir el piso en una negociaciÃ³n de contrato.",
      recognition: {
        heading: "Los acuerdos importan, pero el papeleo no es el ambiente.",
        subtitle: "Necesitas claridad sin parecer casero.",
        body: "Kinly mantiene visibles los acuerdos de la casa con un tono humano .  sin vigilancia ni legalismos.",
      },
      hero: {
        headline: "Acuerdos claros, tono humano.",
        subhead: "Un lugar para normas, costos y expectativas .  sin sermones.",
        body: "Kinly deja a todos ver la misma base para ruido, visitas, limpieza y costos, sin presiÃ³n.",
        ctaHeading: "Fijen la base juntos",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "QuÃ© necesita atenciÃ³n",
          copy: "Ruido, visitas, tareas y resets rÃ¡pidos .  sin sonar mandÃ³n.",
          footer: "SeÃ±ales claras, sin vigilancia.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Mantener acuerdos al dÃ­a",
          copy: "Ajusta silencio, visitas o limpieza cuando el piso cambia.",
          footer: "Todos alineados, nada queda fijo.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Un referente tranquilo",
          copy: "Ruido, visitas, facturas y limpieza en un lugar .  sin novelas en el chat.",
          footer: "Claridad compartida, tono humano.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Necesitamos claridad sin sonar a caseros.",
        "Visitas, ruido y limpieza necesitan una base.",
        "Mantenerlo justo sin regaÃ±os.",
      ],
      rolePoints: [
        "Mantiene los acuerdos visibles sin volver a nadie el guardiÃ¡n.",
        "Facilita ajustar cuando el piso cambia.",
      ],
      formingPoints: [
        "Los nuevos compis ven la base desde el primer dÃ­a.",
        "Si se desvÃ­a, se reinicia la prÃ³xima semana sin culpas.",
      ],
      audience: [
        "Pisos que formalizan normas sin papeleo pesado.",
        "Grupos que quieren claridad en visitas/ruido/limpieza sin vigilancia.",
      ],
      notList: [
        "No es un documento legal.",
        "No es vigilancia.",
        "No es un marcador.",
        "No es un jefe de tareas.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que los acuerdos sigan frescos y humanos.",
        points: [
          "Revisa semanalmente para que lo pequeÃ±o no se acumule.",
          "Ajusta la base sin culpas .  solo claridad.",
          "MantÃ©n alineados visitas/ruido/limpieza sin hilos eternos.",
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
        "ÙƒÙŠÙ†Ù„ÙŠ Ù‡Ùˆ ØªØ·Ø¨ÙŠÙ‚ Ù„Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ ØµÙÙ…Ù… Ù„Ù…Ù† ÙŠØ¹ÙŠØ´ÙˆÙ† Ù…Ø¹Ø§Ù‹. ÙŠØ¨Ù‚ÙŠ Ø§Ù„Ø§ØªÙØ§Ù‚Ø§Øª ÙˆØ§Ø¶Ø­Ø© ÙˆÙ‡Ø§Ø¯Ø¦Ø© Ø¯ÙˆÙ† Ø£Ù† ÙŠØ­ÙˆÙ„ Ø§Ù„Ø¨ÙŠØª Ø¥Ù„Ù‰ ØªÙØ§ÙˆØ¶ Ø¹Ù‚Ø¯ÙŠ.",
      recognition: {
        heading: "Ø§Ù„Ø§ØªÙØ§Ù‚Ø§Øª Ù…Ù‡Ù…Ø©ØŒ Ù„ÙƒÙ† Ø§Ù„Ø£ÙˆØ±Ø§Ù‚ Ø§Ù„Ø±Ø³Ù…ÙŠØ© Ù„ÙŠØ³Øª Ø§Ù„Ø£Ø³Ù„ÙˆØ¨.",
        subtitle: "ØªØ­ØªØ§Ø¬ ÙˆØ¶ÙˆØ­Ø§Ù‹ ÙÙŠ Ø§Ù„Ø³ÙƒÙ† Ø§Ù„Ù…Ø´ØªØ±Ùƒ Ø¯ÙˆÙ† Ø£Ù† ØªØ¨Ø¯Ùˆ ÙƒÙ…Ø§Ù„Ùƒ Ø¹Ù‚Ø§Ø±.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¨Ù‚ÙŠ Ø§ØªÙØ§Ù‚Ø§Øª Ø§Ù„Ø¨ÙŠØª Ù…Ø±Ø¦ÙŠØ© ÙˆÙ‡Ø§Ø¯Ø¦Ø© ÙˆØ¨Ø´Ø±ÙŠØ© .  Ø¨Ù„Ø§ Ù…Ø±Ø§Ù‚Ø¨Ø© ÙˆÙ„Ø§ Ù„ØºØ© Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©.",
      },
      hero: {
        headline: "Ø§ØªÙØ§Ù‚Ø§Øª ÙˆØ§Ø¶Ø­Ø©ØŒ Ø¨Ù†Ø¨Ø±Ø© Ø¥Ù†Ø³Ø§Ù†ÙŠØ©.",
        subhead: "Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯ Ù„Ù‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ø¨ÙŠØª ÙˆØ§Ù„ØªÙƒØ§Ù„ÙŠÙ ÙˆØ§Ù„ØªÙˆÙ‚Ø¹Ø§Øª .  Ø¨Ù„Ø§ Ø®Ø·Ø¨.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØªÙŠØ­ Ù„Ù„Ø¬Ù…ÙŠØ¹ Ø±Ø¤ÙŠØ© Ù†ÙØ³ Ø§Ù„Ø£Ø³Ø§Ø³ Ù„Ù„Ø¶ÙˆØ¶Ø§Ø¡ ÙˆØ§Ù„Ø¶ÙŠÙˆÙ ÙˆØ§Ù„ØªÙ†Ø¸ÙŠÙ ÙˆØ§Ù„ØªÙƒØ§Ù„ÙŠÙØŒ Ù…Ø¹ Ø¨Ù‚Ø§Ø¡ Ø§Ù„Ø¶ØºØ· ØµÙØ±Ø§Ù‹.",
        ctaHeading: "Ø¶Ø¹ÙˆØ§ Ø§Ù„Ø£Ø³Ø§Ø³ Ù…Ø¹Ø§Ù‹",
      },
      screens: [
        {
          title: "Ø§Ù„ÙŠÙˆÙ…",
          eyebrow: "Ø§Ù„Ø¢Ù†",
          headline: "Ù…Ø§ ÙŠØ­ØªØ§Ø¬ Ø§Ù†ØªØ¨Ø§Ù‡Ø§Ù‹",
          copy: "Ø¶ÙˆØ¶Ø§Ø¡ØŒ Ø¶ÙŠÙˆÙØŒ ØªÙ†Ø¸ÙŠÙØ§Øª Ø³Ø±ÙŠØ¹Ø© .  Ø¯ÙˆÙ† Ø£Ù† ØªØ¨Ø¯Ùˆ Ø¢Ù…Ø±Ø§Ù‹.",
          footer: "Ø¥Ø´Ø§Ø±Ø§Øª ÙˆØ§Ø¶Ø­Ø©ØŒ Ø¨Ù„Ø§ Ù…Ø±Ø§Ù‚Ø¨Ø©.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "Ø¥Ø¯Ø§Ø±Ø©",
          eyebrow: "ØªØ¹Ø¯ÙŠÙ„",
          headline: "Ø£Ø¨Ù‚ÙˆØ§ Ø§Ù„Ø§ØªÙØ§Ù‚Ø§Øª Ù…Ø­Ø¯Ø«Ø©",
          copy: "Ø¹Ø¯Ù‘Ù„ÙˆØ§ Ø³Ø§Ø¹Ø§Øª Ø§Ù„Ù‡Ø¯ÙˆØ¡ Ø£Ùˆ Ù‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ø¶ÙŠÙˆÙ Ø£Ùˆ Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„ØªÙ†Ø¸ÙŠÙ Ù…Ø¹ ØªØºÙŠÙ‘Ø± Ø§Ù„Ø¨ÙŠØª.",
          footer: "Ø§Ù„Ø¬Ù…ÙŠØ¹ Ù…ØªÙˆØ§ÙÙ‚ØŒ ÙˆÙ„Ø§ Ø´ÙŠØ¡ Ù…Ù‚ÙÙ„.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ù†Ø²Ù„",
          eyebrow: "Ù…Ø±Ø¬Ø¹",
          headline: "Ù…Ø±Ø¬Ø¹ Ù‡Ø§Ø¯Ø¦ ÙˆØ§Ø­Ø¯",
          copy: "Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡ ÙˆØ§Ù„Ø¶ÙŠÙˆÙ ÙˆØ§Ù„ÙÙˆØ§ØªÙŠØ± ÙˆØ§Ù„ØªÙ†Ø¸ÙŠÙ ÙÙŠ Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯ .  Ø¨Ù„Ø§ Ù…Ù‚Ø§Ù„Ø§Øª Ø¯Ø±Ø¯Ø´Ø©.",
          footer: "ÙˆØ¶ÙˆØ­ Ù…Ø´ØªØ±ÙƒØŒ Ù†Ø¨Ø±Ø© Ø¥Ù†Ø³Ø§Ù†ÙŠØ©.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "Ù†Ø­ØªØ§Ø¬ ÙˆØ¶ÙˆØ­Ø§Ù‹ Ø¯ÙˆÙ† Ø£Ù† Ù†Ø¨Ø¯Ùˆ ÙƒÙ…Ø§Ù„ÙƒÙŠÙ†.",
        "Ø§Ù„Ø¶ÙŠÙˆÙ ÙˆØ§Ù„Ø¶ÙˆØ¶Ø§Ø¡ ÙˆØ§Ù„ØªÙ†Ø¸ÙŠÙ ØªØ­ØªØ§Ø¬ Ø£Ø³Ø§Ø³Ø§Ù‹ ÙˆØ§Ø­Ø¯Ø§Ù‹.",
        "Ù†Ø­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø§Ù„Ø¹Ø¯Ù„ Ø¨Ù„Ø§ ØªÙˆØ¨ÙŠØ®.",
      ],
      rolePoints: [
        "ÙŠØ¨Ù‚ÙŠ Ø§Ù„Ø§ØªÙØ§Ù‚Ø§Øª Ù…Ø±Ø¦ÙŠØ© Ø¯ÙˆÙ† Ø£Ù† ÙŠØ¬Ø¹Ù„ Ø£Ø­Ø¯Ø§Ù‹ Ù…Ù†ÙÙ‘Ø°Ø§Ù‹.",
        "ÙŠØ³Ù‡Ù‘Ù„ Ø§Ù„ØªØ¹Ø¯ÙŠÙ„ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØªØºÙŠØ± Ø§Ù„Ø¨ÙŠØª.",
      ],
      formingPoints: [
        "Ø§Ù„Ù…Ù‚ÙŠÙ…ÙˆÙ† Ø§Ù„Ø¬Ø¯Ø¯ ÙŠØ±ÙˆÙ† Ø§Ù„Ø£Ø³Ø§Ø³ Ù…Ù† Ø§Ù„ÙŠÙˆÙ… Ø§Ù„Ø£ÙˆÙ„.",
        "Ø¥Ø°Ø§ Ø§Ù†Ø­Ø±ÙØŒ ØªØ¹ÙŠØ¯ÙˆÙ†Ù‡ Ø§Ù„Ø£Ø³Ø¨ÙˆØ¹ Ø§Ù„Ù‚Ø§Ø¯Ù… Ø¨Ø¯ÙˆÙ† Ù„ÙˆÙ….",
      ],
      audience: [
        "Ø¨ÙŠÙˆØª ØªØ¶Ø¹ Ù‚ÙˆØ§Ø¹Ø¯ ÙˆØ§Ø¶Ø­Ø© Ø¯ÙˆÙ† Ø£ÙˆØ±Ø§Ù‚ Ø«Ù‚ÙŠÙ„Ø©.",
        "Ù…Ø¬Ù…ÙˆØ¹Ø§Øª ØªØ±ÙŠØ¯ ÙˆØ¶ÙˆØ­ Ø§Ù„Ø¶ÙŠÙˆÙ/Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡/Ø§Ù„ØªÙ†Ø¸ÙŠÙ Ø¯ÙˆÙ† Ù…Ø±Ø§Ù‚Ø¨Ø©.",
      ],
      notList: [
        "Ù„ÙŠØ³ ÙˆØ«ÙŠÙ‚Ø© Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©.",
        "Ù„ÙŠØ³ Ù…Ø±Ø§Ù‚Ø¨Ø©.",
        "Ù„ÙŠØ³ Ù„ÙˆØ­Ø© Ù†Ù‚Ø§Ø·.",
        "Ù„ÙŠØ³ Ø±Ø¦ÙŠØ³ Ù…Ù‡Ø§Ù….",
      ],
      weekly: {
        intro: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¹Ù…Ù„ Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø£Ø³Ø¨ÙˆØ¹ÙŠ Ù„ØªØ¨Ù‚Ù‰ Ø§Ù„Ø§ØªÙØ§Ù‚Ø§Øª Ø­Ø¯ÙŠØ«Ø© ÙˆØ¨Ø´Ø±ÙŠØ©.",
        points: [
          "Ø±Ø§Ø¬Ø¹ÙˆØ§ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ Ø­ØªÙ‰ Ù„Ø§ ØªØªØ±Ø§ÙƒÙ… Ø§Ù„Ø£Ù…ÙˆØ± Ø§Ù„ØµØºÙŠØ±Ø©.",
          "Ø¹Ø¯Ù‘Ù„ÙˆØ§ Ø§Ù„Ø£Ø³Ø§Ø³ Ø¨Ø¯ÙˆÙ† Ù„ÙˆÙ… .  ÙÙ‚Ø· ÙˆØ¶ÙˆØ­.",
          "Ø£Ø¨Ù‚ÙˆØ§ Ø§Ù„Ø¶ÙŠÙˆÙ/Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡/Ø§Ù„ØªÙ†Ø¸ÙŠÙ Ù…Ù†Ø³Ù‚Ø© Ø¯ÙˆÙ† Ø®ÙŠÙˆØ· Ø·ÙˆÙŠÙ„Ø©.",
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


