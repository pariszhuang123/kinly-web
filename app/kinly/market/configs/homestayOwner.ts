import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const homestayOwnerConfig: ScenarioConfig = {
  pageKey: "homestay_owner",

  recognition: {
    heading: "You want guests to feel welcome .  and your home to run smoothly.",
    subtitle: "Clear house norms should feel warm, not formal.",
    body: "Kinly keeps expectations visible in a calm, human way so hosting feels welcoming and fair.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps homestay expectations clear and calm without turning hosting into rule enforcement.",

  hero: {
    headline: "A welcoming home with clear norms.",
    subhead: "Set the baseline once, keep it warm and human.",
    body: "Kinly shows guests and residents the same simple expectations for noise, shared spaces, and contributions .  without awkward reminders.",
    ctaHeading: "Host with clarity",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Welcome",
      headline: "What guests should know now",
      copy: "Quiet hours, shared spaces, and todayâ€™s simple asks.",
      footer: "Clarity keeps the welcome warm.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update norms without tension",
      copy: "Tweak house rules or hosting notes as guests change .  no awkward talks.",
      footer: "One place to keep everyone aligned.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference for hosts and guests",
      copy: "Noise, guests, cleaning standards, and shared costs visible to all.",
      footer: "Welcoming, not policing.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  chips: [
    "I want guests to feel welcome and informed.",
    "I need clarity on noise, guests, and cleaning without sounding strict.",
    "I do not want to chase people for shared costs.",
  ],

  rolePoints: [
    "Keeps expectations visible so you are not the enforcer.",
    "Gives guests a calm reference without formal rules.",
  ],

  formingPoints: [
    "Guests change; the baseline stays clear.",
    "If something slips, you reset next week without awkwardness.",
  ],

  audience: [
    "Homestay owners and hosts who want calm clarity.",
    "Households hosting guests while living together.",
  ],

  notList: [
    "Not a surveillance tool.",
    "Not a legal contract.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so hosting stays calm and fair.",
    points: [
      "Check in weekly so small issues do not stack up.",
      "Adjust expectations without blame .  just clarity.",
      "Keep the welcome warm while staying aligned.",
    ],
  },
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning hosting into a task system.",

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      whatHeading: "QuÃ© es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. Mantiene claras y tranquilas las expectativas de homestay sin convertir la hospitalidad en hacer cumplir reglas.",
      recognition: {
        heading: "Quieres que los huÃ©spedes se sientan bienvenidos .  y que la casa funcione.",
        subtitle: "Las normas deben sentirse cÃ¡lidas, no formales.",
        body: "Kinly mantiene visibles las expectativas con un tono humano para que hospedar sea acogedor y justo.",
      },
      hero: {
        headline: "Un hogar acogedor con normas claras.",
        subhead: "Fija la base una vez, con calidez.",
        body: "Kinly muestra a huÃ©spedes y residentes las mismas expectativas simples sobre ruido, espacios y aportes .  sin recordatorios incÃ³modos.",
        ctaHeading: "Recibe con claridad",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Bienvenida",
          headline: "Lo que los huÃ©spedes deben saber",
          copy: "Horas de silencio, espacios compartidos y los pedidos simples de hoy.",
          footer: "La claridad mantiene cÃ¡lida la bienvenida.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Actualiza normas sin tensiÃ³n",
          copy: "Ajusta reglas de la casa o notas de anfitriÃ³n cuando cambian los huÃ©spedes .  sin charlas incÃ³modas.",
          footer: "Un lugar para mantener a todos alineados.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Un referente tranquilo para anfitriones y huÃ©spedes",
          copy: "Ruido, visitas, estÃ¡ndares de limpieza y aportes visibles para todos.",
          footer: "Acogedor, no controlador.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Quiero que los huÃ©spedes se sientan bienvenidos e informados.",
        "Necesito claridad en ruido, visitas y limpieza sin sonar estricto.",
        "No quiero perseguir a nadie por los aportes compartidos.",
      ],
      rolePoints: [
        "Mantiene visibles las expectativas para que no seas el ejecutor.",
        "Da a huÃ©spedes un referente calmado sin reglas formales.",
      ],
      formingPoints: [
        "Los huÃ©spedes cambian; la base sigue clara.",
        "Si algo se desliza, lo reinicias la prÃ³xima semana sin incomodidad.",
      ],
      audience: [
        "Anfitriones de homestay que quieren claridad tranquila.",
        "Hogares que reciben huÃ©spedes mientras conviven.",
      ],
      notList: [
        "No es vigilancia.",
        "No es un contrato legal.",
        "No es un marcador.",
        "No es un jefe de tareas.",
      ],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que la hospitalidad se mantenga calmada y justa.",
        points: [
          "Revisa semanalmente para que lo pequeÃ±o no se acumule.",
          "Ajusta expectativas sin culpas .  solo claridad.",
          "MantÃ©n cÃ¡lida la bienvenida mientras siguen alineados.",
        ],
        heading: "ReflexiÃ³n semanal, a ritmo humano",
      },
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricciÃ³n diaria .  sin convertir la hospitalidad en un sistema de tareas.",
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
        "ÙƒÙŠÙ†Ù„ÙŠ Ù‡Ùˆ ØªØ·Ø¨ÙŠÙ‚ Ù„Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ ØµÙÙ…Ù… Ù„Ù…Ù† ÙŠØ¹ÙŠØ´ÙˆÙ† Ù…Ø¹Ø§Ù‹. ÙŠØ¨Ù‚ÙŠ ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ø§Ø³ØªØ¶Ø§ÙØ© ÙˆØ§Ø¶Ø­Ø© ÙˆÙ‡Ø§Ø¯Ø¦Ø© Ø¯ÙˆÙ† Ø£Ù† ÙŠØ­ÙˆÙ„ Ø§Ù„Ø¶ÙŠØ§ÙØ© Ø¥Ù„Ù‰ ÙØ±Ø¶ Ù‚ÙˆØ§Ø¹Ø¯.",
      recognition: {
        heading: "ØªØ±ÙŠØ¯ Ø£Ù† ÙŠØ´Ø¹Ø± Ø§Ù„Ø¶ÙŠÙˆÙ Ø¨Ø§Ù„ØªØ±Ø­ÙŠØ¨ .  ÙˆØ£Ù† ÙŠØ¹Ù…Ù„ Ù…Ù†Ø²Ù„Ùƒ Ø¨Ø³Ù„Ø§Ø³Ø©.",
        subtitle: "ÙŠØ¬Ø¨ Ø£Ù† ØªØ¨Ø¯Ùˆ Ù‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ù…Ù†Ø²Ù„ Ø¯Ø§ÙØ¦Ø©ØŒ Ù„Ø§ Ø±Ø³Ù…ÙŠØ©.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ù…Ø±Ø¦ÙŠØ© Ø¨Ù†Ø¨Ø±Ø© Ù‡Ø§Ø¯Ø¦Ø© Ø­ØªÙ‰ ØªÙƒÙˆÙ† Ø§Ù„Ø§Ø³ØªØ¶Ø§ÙØ© Ù…Ø±Ø­Ø¨Ø© ÙˆØ¹Ø§Ø¯Ù„Ø©.",
      },
      hero: {
        headline: "Ù…Ù†Ø²Ù„ Ù…Ø±Ø­Ù‘ÙØ¨ Ø¨Ù…Ø¹Ø§ÙŠÙŠØ± ÙˆØ§Ø¶Ø­Ø©.",
        subhead: "Ø¶Ø¹ Ø§Ù„Ø£Ø³Ø§Ø³ Ù…Ø±Ø©ØŒ ÙˆØ§Ø¨Ù‚Ù‡ Ø¯Ø§ÙØ¦Ø§Ù‹ ÙˆØ¨Ø´Ø±ÙŠØ§Ù‹.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠÙØ¸Ù‡Ø± Ù„Ù„Ø¶ÙŠÙˆÙ ÙˆØ§Ù„Ù…Ù‚ÙŠÙ…ÙŠÙ† Ù†ÙØ³ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ø¨Ø³ÙŠØ·Ø© Ø­ÙˆÙ„ Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡ ÙˆØ§Ù„Ù…Ø³Ø§Ø­Ø§Øª ÙˆØ§Ù„Ù…Ø³Ø§Ù‡Ù…Ø§Øª .  Ø¨Ø¯ÙˆÙ† ØªØ°ÙƒÙŠØ±Ø§Øª Ù…Ø­Ø±Ø¬Ø©.",
        ctaHeading: "Ø§Ø³ØªØ¶Ù Ø¨ÙˆØ¶ÙˆØ­",
      },
      screens: [
        {
          title: "Ø§Ù„ÙŠÙˆÙ…",
          eyebrow: "ØªØ±Ø­ÙŠØ¨",
          headline: "Ù…Ø§ ÙŠÙ†Ø¨ØºÙŠ Ø£Ù† ÙŠØ¹Ø±ÙÙ‡ Ø§Ù„Ø¶ÙŠÙˆÙ Ø§Ù„Ø¢Ù†",
          copy: "Ø³Ø§Ø¹Ø§Øª Ø§Ù„Ù‡Ø¯ÙˆØ¡ØŒ Ø§Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ©ØŒ ÙˆØ·Ù„Ø¨Ø§Øª Ø§Ù„ÙŠÙˆÙ… Ø§Ù„Ø¨Ø³ÙŠØ·Ø©.",
          footer: "Ø§Ù„ÙˆØ¶ÙˆØ­ ÙŠØ­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø¯ÙØ¡ Ø§Ù„ØªØ±Ø­ÙŠØ¨.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "Ø¥Ø¯Ø§Ø±Ø©",
          eyebrow: "ØªØ¹Ø¯ÙŠÙ„",
          headline: "Ø­Ø¯Ø«ÙˆØ§ Ø§Ù„Ù‚ÙˆØ§Ø¹Ø¯ Ø¨Ù„Ø§ ØªÙˆØªØ±",
          copy: "Ø¹Ø¯Ù‘Ù„ÙˆØ§ Ù‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ø¨ÙŠØª Ø£Ùˆ Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ø§Ù„Ø§Ø³ØªØ¶Ø§ÙØ© Ù…Ø¹ ØªØºÙŠÙ‘Ø± Ø§Ù„Ø¶ÙŠÙˆÙ .  Ø¯ÙˆÙ† Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ù…Ø­Ø±Ø¬Ø©.",
          footer: "Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯ Ù„Ø¥Ø¨Ù‚Ø§Ø¡ Ø§Ù„Ø¬Ù…ÙŠØ¹ Ù…ØªÙ†Ø§ØºÙ…ÙŠÙ†.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ù†Ø²Ù„",
          eyebrow: "Ù…Ø±Ø¬Ø¹",
          headline: "Ù…Ø±Ø¬Ø¹ Ù‡Ø§Ø¯Ø¦ Ù„Ù„Ù…Ø¶ÙŠÙÙŠÙ† ÙˆØ§Ù„Ø¶ÙŠÙˆÙ",
          copy: "Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡ ÙˆØ§Ù„Ø¶ÙŠÙˆÙ ÙˆÙ…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„ØªÙ†Ø¸ÙŠÙ ÙˆØ§Ù„ØªÙƒØ§Ù„ÙŠÙ Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© Ù…Ø±Ø¦ÙŠØ© Ù„Ù„Ø¬Ù…ÙŠØ¹.",
          footer: "ØªØ±Ø­ÙŠØ¨ Ø¨Ù„Ø§ Ø±Ù‚Ø§Ø¨Ø©.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "Ø£Ø±ÙŠØ¯ Ø£Ù† ÙŠØ´Ø¹Ø± Ø§Ù„Ø¶ÙŠÙˆÙ Ø¨Ø§Ù„ØªØ±Ø­ÙŠØ¨ ÙˆØ§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø©.",
        "Ø£Ø­ØªØ§Ø¬ ÙˆØ¶ÙˆØ­Ø§Ù‹ ÙÙŠ Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡ ÙˆØ§Ù„Ø¶ÙŠÙˆÙ ÙˆØ§Ù„ØªÙ†Ø¸ÙŠÙ Ø¯ÙˆÙ† Ø£Ù† Ø£Ø¨Ø¯Ùˆ ØµØ§Ø±Ù…Ø§Ù‹.",
        "Ù„Ø§ Ø£Ø±ÙŠØ¯ Ù…Ù„Ø§Ø­Ù‚Ø© Ø£Ø­Ø¯ Ù„Ù„Ù…Ø³Ø§Ù‡Ù…Ø§Øª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ©.",
      ],
      rolePoints: [
        "ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ù…Ø±Ø¦ÙŠØ© ÙÙ„Ø§ ØªÙƒÙˆÙ† Ø£Ù†Øª Ø§Ù„Ù…Ù†ÙÙ‘Ø°.",
        "ÙŠØ¹Ø·ÙŠ Ø§Ù„Ø¶ÙŠÙˆÙ Ù…Ø±Ø¬Ø¹Ø§Ù‹ Ù‡Ø§Ø¯Ø¦Ø§Ù‹ Ø¨Ù„Ø§ Ù‚ÙˆØ§Ø¹Ø¯ Ø±Ø³Ù…ÙŠØ©.",
      ],
      formingPoints: [
        "Ø§Ù„Ø¶ÙŠÙˆÙ ÙŠØªØºÙŠØ±ÙˆÙ†Ø› Ø§Ù„Ø£Ø³Ø§Ø³ ÙŠØ¨Ù‚Ù‰ ÙˆØ§Ø¶Ø­Ø§Ù‹.",
        "Ø¥Ø°Ø§ Ø§Ù†Ø²Ù„Ù‚ Ø´ÙŠØ¡ØŒ ØªØ¹ÙŠØ¯ÙˆÙ† Ø§Ù„Ø¶Ø¨Ø· Ø§Ù„Ø£Ø³Ø¨ÙˆØ¹ Ø§Ù„Ù‚Ø§Ø¯Ù… Ø¨Ù„Ø§ Ø¥Ø­Ø±Ø§Ø¬.",
      ],
      audience: [
        "Ù…Ø¶ÙŠÙÙˆ Ù‡ÙˆÙ…Ø³ØªØ§ÙŠ ÙŠØ±ÙŠØ¯ÙˆÙ† ÙˆØ¶ÙˆØ­Ø§Ù‹ Ù‡Ø§Ø¯Ø¦Ø§Ù‹.",
        "Ù…Ù†Ø§Ø²Ù„ ØªØ³ØªØ¶ÙŠÙ Ø¶ÙŠÙˆÙØ§Ù‹ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„ØªØ¹Ø§ÙŠØ´.",
      ],
      notList: [
        "Ù„ÙŠØ³Øª Ø£Ø¯Ø§Ø© Ù…Ø±Ø§Ù‚Ø¨Ø©.",
        "Ù„ÙŠØ³Øª Ø¹Ù‚Ø¯Ø§Ù‹ Ù‚Ø§Ù†ÙˆÙ†ÙŠØ§Ù‹.",
        "Ù„ÙŠØ³Øª Ù„ÙˆØ­Ø© Ù†Ù‚Ø§Ø·.",
        "Ù„ÙŠØ³Øª Ø±Ø¦ÙŠØ³ Ù…Ù‡Ø§Ù….",
      ],
      weekly: {
        intro: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¹Ù…Ù„ Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø£Ø³Ø¨ÙˆØ¹ÙŠ Ù„ØªØ¨Ù‚Ù‰ Ø§Ù„Ø¶ÙŠØ§ÙØ© Ù‡Ø§Ø¯Ø¦Ø© ÙˆØ¹Ø§Ø¯Ù„Ø©.",
        points: [
          "Ø±Ø§Ø¬Ø¹ÙˆØ§ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ Ø­ØªÙ‰ Ù„Ø§ ØªØªØ±Ø§ÙƒÙ… Ø§Ù„Ø£Ù…ÙˆØ± Ø§Ù„ØµØºÙŠØ±Ø©.",
          "Ø¹Ø¯Ù‘Ù„ÙˆØ§ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ø¨Ù„Ø§ Ù„ÙˆÙ… .  ÙÙ‚Ø· ÙˆØ¶ÙˆØ­.",
          "Ø­Ø§ÙØ¸ÙˆØ§ Ø¹Ù„Ù‰ Ø¯ÙØ¡ Ø§Ù„ØªØ±Ø­ÙŠØ¨ Ù…Ø¹ Ø§Ù„Ø¨Ù‚Ø§Ø¡ Ù…ØªÙˆØ§ÙÙ‚ÙŠÙ†.",
        ],
        heading: "ØªØ£Ù…Ù„ Ø£Ø³Ø¨ÙˆØ¹ÙŠØŒ Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø¨Ø´Ø±ÙŠ",
      },
      toolsIntro:
        "Ø¨Ø¹Ø¯ Ø£Ù† ØªØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§ØªØŒ ÙŠÙ‚Ø¯Ù… ÙƒÙŠÙ†Ù„ÙŠ Ø£Ø¯ÙˆØ§Øª Ø¨Ø³ÙŠØ·Ø© ØªÙ‚Ù„Ù„ Ø§Ù„Ø§Ø­ØªÙƒØ§ÙƒØ§Øª Ø§Ù„ÙŠÙˆÙ…ÙŠØ© .  Ø¨Ø¯ÙˆÙ† ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¶ÙŠØ§ÙØ© Ø¥Ù„Ù‰ Ù†Ø¸Ø§Ù… Ù…Ù‡Ø§Ù….",
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


