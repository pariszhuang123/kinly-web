import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const studentWellbeingInfrastructureConfig: ScenarioConfig = {
  pageKey: "student_wellbeing_infrastructure",

  recognition: {
    heading: "You keep checking in on every room. Nobody should have to hold that much in their head.",
    subtitle: "When one person is the only one noticing tension, support starts to feel lonely.",
    body: "Kinly keeps shared expectations visible so the house can rely less on one person's memory and more on a calm shared baseline.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps expectations visible and calm so support does not depend on one person repeating the same reminders.",

  hero: {
    headline: "Support lands better when the house can see the baseline for itself.",
    subhead: "Shared visibility lowers the need for constant check-ins, repeated reminders, and awkward follow-ups.",
    body: "Kinly makes quiet hours, shared-space expectations, and weekly resets visible so care feels shared instead of carried by one resident lead.",
    ctaHeading: "Share the load across the house",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Signals",
      headline: "What the house needs now",
      copy: "Quiet hours, shared spaces, and small resets the house can notice without waiting for another reminder.",
      footer: "Calm support, no pressure.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update the baseline when the house shifts",
      copy: "Adjust noise, guests, or cleaning expectations as residents change so nobody has to repeat the same conversation room by room.",
      footer: "Shared context, no singling out.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference for everyone",
      copy: "Noise, guests, shared expectations, and weekly reset points in one place, without scores or surveillance vibes.",
      footer: "Care made visible, not monitored.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep shared routines visible with context so residents can refer back instead of waiting to be reminded.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Keep shared supplies visible in one place so contribution feels easy and does not depend on one person chasing.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs transparent with simple context so fairness stays clear without repeated money conversations.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to surface pressure early so support happens before tension turns into another difficult follow-up.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I keep checking in room by room because if I do not, small issues sit there.",
    "I do not want support to depend on me remembering every tension point.",
    "If the house could see the baseline clearly, I would not need to repeat the same reminders.",
  ],

  rolePoints: [
    "Keeps expectations visible without turning care into monitoring.",
    "Reduces the need for one person to carry every reminder and follow-up.",
  ],

  formingPoints: [
    "Cohorts change, but the baseline stays visible.",
    "If things drift, the house can reset next week without blame or public call-outs.",
  ],

  audience: [
    "Resident leads carrying the emotional load of shared living across a student home.",
    "Student homes that want calm visibility before tension grows.",
  ],

  notList: [
    "Not surveillance.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
    "Not a reporting tool.",
  ],

  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning student wellbeing into monitoring.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },

  defaultLocale: "en",

  translations: {
    es: {
      whatHeading: "QuÃ© es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. Mantiene visibles y tranquilas las expectativas para que el apoyo no dependa de repetir los mismos recordatorios.",
      recognition: {
        heading: "Terminas pendiente de cada habitaciÃ³n. Nadie deberÃ­a cargar con tanto.",
        subtitle: "Cuando una sola persona nota toda la tensiÃ³n, cuidar tambiÃ©n se vuelve pesado.",
        body: "Kinly mantiene visible la base compartida para que la casa dependa menos de la memoria de una sola persona.",
      },
      hero: {
        headline: "El apoyo funciona mejor cuando la casa puede ver la base por sÃ­ misma.",
        subhead: "La visibilidad compartida reduce check-ins constantes, recordatorios repetidos y seguimientos incÃ³modos.",
        body: "Kinly hace visibles el silencio, los espacios compartidos y los pequeÃ±os reinicios semanales para que el cuidado se comparta.",
        ctaHeading: "MantÃ©n la casa estable",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "SeÃ±ales",
          headline: "QuÃ© necesita la casa ahora",
          copy: "Horas de silencio, espacios comunes y pequeÃ±os reinicios que la casa puede notar sin otro recordatorio.",
          footer: "Apoyo tranquilo, sin presiÃ³n.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Ajusta la base cuando cambia la casa",
          copy: "Actualiza ruido, visitas o limpieza cuando cambian los residentes para no repetir la misma conversaciÃ³n cuarto por cuarto.",
          footer: "Contexto compartido, sin seÃ±alar a nadie.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Un referente tranquilo para todos",
          copy: "Ruido, visitas, expectativas compartidas y puntos de reinicio en un lugar, sin rachas ni puntajes.",
          footer: "Cuidado visible, no monitoreo.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Voy habitaciÃ³n por habitaciÃ³n porque si no, las pequeÃ±as tensiones se quedan ahÃ­.",
        "No quiero que el apoyo dependa de que yo recuerde cada punto de fricciÃ³n.",
        "Si la casa viera clara la base, no tendrÃ­a que repetir lo mismo cada semana.",
      ],
      rolePoints: [
        "Mantiene visibles las expectativas sin convertir el cuidado en vigilancia.",
        "Reduce la necesidad de que una persona cargue con todos los recordatorios y seguimientos.",
      ],
      formingPoints: [
        "Las cohortes cambian; la base sigue visible.",
        "Si se desvÃ­a, se reinicia la prÃ³xima semana sin culpas ni seÃ±alamientos.",
      ],
      audience: [
        "RAs, lÃ­deres residentes y equipos de vivienda estudiantil que cargan con el peso emocional de la convivencia.",
        "Casas de estudiantes que quieren visibilidad tranquila antes de que crezca la tensiÃ³n.",
      ],
      notList: [
        "No es vigilancia.",
        "No es un marcador.",
        "No es un jefe de tareas.",
        "No es una herramienta de reportes.",
      ],
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricciÃ³n diaria, sin convertir el bienestar estudiantil en monitoreo.",
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
        body: getScenarioAvailabilityBody("es"),
      },
    } satisfies LocaleCopy,

    ar: {
      whatHeading: "Ù…Ø§ Ù‡Ùˆ ÙƒÙŠÙ†Ù„ÙŠ",
      whatBody:
        "ÙƒÙŠÙ†Ù„ÙŠ Ù‡Ùˆ ØªØ·Ø¨ÙŠÙ‚ Ù„Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ ØµÙÙ…Ù… Ù„Ù…Ù† ÙŠØ¹ÙŠØ´ÙˆÙ† Ù…Ø¹Ø§Ù‹. ÙŠØ¨Ù‚ÙŠ ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ø±ÙØ§Ù‡ ÙˆØ§Ø¶Ø­Ø© Ø¯ÙˆÙ† Ø£Ù† ÙŠØ­ÙˆÙ„ Ø§Ù„Ø³ÙƒÙ† Ø§Ù„Ø·Ù„Ø§Ø¨ÙŠ Ø¥Ù„Ù‰ Ù…Ø±Ø§Ù‚Ø¨Ø©.",
      recognition: {
        heading: "ØªÙØ´Ù„ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø±ÙØ§Ù‡ Ø­ÙŠÙ† ØªØ´Ø¹Ø± Ø¨Ø§Ù„Ù…Ø±Ø§Ù‚Ø¨Ø©.",
        subtitle: "ÙŠØ­ØªØ§Ø¬ Ø§Ù„Ø·Ù„Ø§Ø¨ Ø¥Ù„Ù‰ ÙˆØ¶ÙˆØ­ Ù‡Ø§Ø¯Ø¦ØŒ Ù„Ø§ Ø¶Ø¨Ø·.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¨Ù‚ÙŠ Ø§Ù„Ù…Ø¹Ø§ÙŠÙŠØ± Ù…Ø±Ø¦ÙŠØ© ÙˆØ¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø¨Ø´Ø±ÙŠ Ù„ÙŠØ¨Ù‚Ù‰ Ø§Ù„Ø³ÙƒÙ† Ø§Ù„Ø·Ù„Ø§Ø¨ÙŠ Ø¯Ø§Ø¹Ù…Ø§Ù‹ Ø¯ÙˆÙ† Ø¶ØºØ·.",
      },
      hero: {
        headline: "Ù…Ø¹ÙŠØ´Ø© Ù…Ø´ØªØ±ÙƒØ© Ù‡Ø§Ø¯Ø¦Ø© ØªØ¯Ø¹Ù… Ø§Ù„Ø±ÙØ§Ù‡.",
        subhead: "ÙˆØ¶ÙˆØ­ Ø¨Ù„Ø§ Ù…Ø±Ø§Ù‚Ø¨Ø©Ø› Ø´ÙØ§ÙÙŠØ© Ø¨Ù„Ø§ Ù„ÙˆÙ….",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠÙØ¸Ù‡Ø± Ø´Ø¹ÙˆØ± Ø§Ù„Ø¨ÙŠØª ÙˆÙ…Ø§ ÙŠØ­ØªØ§Ø¬Ù‡, Ø¨Ù„Ø§ Ù„ÙˆØ­Ø§Øª Ù†Ù‚Ø§Ø· Ø£Ùˆ ÙØ±Ø¶.",
        ctaHeading: "Ø£Ø¨Ù‚Ù Ø§Ù„Ø¨ÙŠØª Ù…Ø³ØªÙ‚Ø±Ø§Ù‹",
      },
      screens: [
        {
          title: "Ø§Ù„ÙŠÙˆÙ…",
          eyebrow: "Ø¥Ø´Ø§Ø±Ø§Øª",
          headline: "Ù…Ø§ ÙŠØ­ØªØ§Ø¬Ù‡ Ø§Ù„Ø¨ÙŠØª Ø§Ù„Ø¢Ù†",
          copy: "Ø³Ø§Ø¹Ø§Øª Ù‡Ø¯ÙˆØ¡ØŒ Ù…Ø³Ø§Ø­Ø§Øª Ù…Ø´ØªØ±ÙƒØ©ØŒ ÙˆÙ…Ù‡Ø§Ù… Ø®ÙÙŠÙØ© ØªØ­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø§Ø³ØªÙ‚Ø±Ø§Ø± Ø§Ù„Ø¬Ùˆ.",
          footer: "Ø¯Ø¹Ù… Ø¨Ù„Ø§ Ø¶ØºØ·.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "Ø¥Ø¯Ø§Ø±Ø©",
          eyebrow: "ØªØ¹Ø¯ÙŠÙ„",
          headline: "Ø¹Ø¯Ù‘Ù„ÙˆØ§ Ø§Ù„Ù…Ø¹Ø§ÙŠÙŠØ± Ø¨Ù„Ø§ ÙØ±Ø¶",
          copy: "Ø­Ø¯Ø«ÙˆØ§ ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡/Ø§Ù„Ø¶ÙŠÙˆÙ/Ø§Ù„Ù†Ø¸Ø§ÙØ© Ù…Ø¹ ØªØºÙŠØ± Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø§Øª, Ø¯ÙˆÙ† Ø£Ù† ÙŠÙØ³ØªÙ‡Ø¯Ù Ø£Ø­Ø¯.",
          footer: "ØªØ­Ø¯ÙŠØ«Ø§Øª Ù…Ø­Ø§ÙŠØ¯Ø©ØŒ Ø¨Ù„Ù‡Ø¬Ø© ØµØ¯ÙŠÙ‚Ø© Ù„Ù„Ø·Ù„Ø§Ø¨.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ù†Ø²Ù„",
          eyebrow: "Ù…Ø±Ø¬Ø¹",
          headline: "Ù…Ø±Ø¬Ø¹ Ù‡Ø§Ø¯Ø¦ Ù„Ù„Ø¬Ù…ÙŠØ¹",
          copy: "Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡ ÙˆØ§Ù„Ø¶ÙŠÙˆÙ ÙˆÙ…Ù„Ø§Ø­Ø¸Ø§Øª Ø§Ù„Ø±ÙØ§Ù‡ ÙˆØ§Ù„ØªÙƒØ§Ù„ÙŠÙ Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© ÙÙŠ Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯, Ø¨Ù„Ø§ Ø³Ù„Ø§Ø³Ù„ Ø£Ùˆ Ù†Ù‚Ø§Ø·.",
          footer: "ÙˆØ¶ÙˆØ­ ÙŠØ´Ø¹Ø± Ø¨Ø§Ù„Ø¹Ù†Ø§ÙŠØ©ØŒ Ù„Ø§ Ø§Ù„Ù…Ø±Ø§Ù‚Ø¨Ø©.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "Ù†Ø±ÙŠØ¯ Ø±ÙØ§Ù‡ Ø¯ÙˆÙ† Ø£Ù† Ù†Ø´Ø¹Ø± Ø¨Ø§Ù„Ù…Ø±Ø§Ù‚Ø¨Ø©.",
        "Ø³Ø§Ø¹Ø§Øª Ø§Ù„Ù‡Ø¯ÙˆØ¡ ÙˆØ§Ù„Ø¶ÙŠÙˆÙ ÙˆØ§Ù„ØªÙ†Ø¸ÙŠÙ ØªØ­ØªØ§Ø¬ Ø£Ø³Ø§Ø³Ø§Ù‹ Ù‡Ø§Ø¯Ø¦Ø§Ù‹.",
        "ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ù„Ø¯Ø¹Ù… Ø§Ø³ØªØ¨Ø§Ù‚ÙŠØ§Ù‹ Ù„Ø§ Ø¹Ù‚Ø§Ø¨ÙŠØ§Ù‹.",
      ],
      rolePoints: [
        "ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ù…Ø±Ø¦ÙŠØ© Ø¯ÙˆÙ† Ù…Ø±Ø§Ù‚Ø¨Ø©.",
        "ÙŠØ´Ø§Ø±Ùƒ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© Ø¹Ù† Ø§Ù„Ø±Ø¹Ø§ÙŠØ© Ø¨Ø¯Ù„Ø§Ù‹ Ù…Ù† Ø§Ø³ØªÙ‡Ø¯Ø§Ù Ø§Ù„Ø£ÙØ±Ø§Ø¯.",
      ],
      formingPoints: [
        "ØªØªØºÙŠØ± Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø§ØªØ› Ø§Ù„Ø£Ø³Ø§Ø³ ÙŠØ¨Ù‚Ù‰ ÙˆØ§Ø¶Ø­Ø§Ù‹.",
        "Ø¥Ø°Ø§ Ø§Ù†Ø­Ø±ÙØŒ ØªØ¹ÙŠØ¯ÙˆÙ†Ù‡ Ø§Ù„Ø£Ø³Ø¨ÙˆØ¹ Ø§Ù„Ù‚Ø§Ø¯Ù… Ø¨Ù„Ø§ Ù„ÙˆÙ….",
      ],
      audience: [
        "ÙØ±Ù‚ Ø§Ù„Ø³ÙƒÙ† Ø§Ù„Ø·Ù„Ø§Ø¨ÙŠ ÙˆØ§Ù„Ù…Ø´Ø±ÙÙˆÙ†.",
        "Ø¨ÙŠÙˆØª Ø·Ù„Ø§Ø¨ÙŠØ© ØªØ±ÙŠØ¯ Ø¥Ø´Ø§Ø±Ø§Øª Ø±ÙØ§Ù‡ Ù‡Ø§Ø¯Ø¦Ø©.",
      ],
      notList: [
        "Ù„ÙŠØ³Øª Ù…Ø±Ø§Ù‚Ø¨Ø©.",
        "Ù„ÙŠØ³Øª Ù„ÙˆØ­Ø© Ù†Ù‚Ø§Ø·.",
        "Ù„ÙŠØ³Øª Ø±Ø¦ÙŠØ³ Ù…Ù‡Ø§Ù….",
        "Ù„ÙŠØ³Øª Ø£Ø¯Ø§Ø© ØªÙ‚Ø§Ø±ÙŠØ±.",
      ],
      toolsIntro:
        "Ø¨Ø¹Ø¯ Ø£Ù† ØªØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§ØªØŒ ÙŠÙ‚Ø¯Ù… ÙƒÙŠÙ†Ù„ÙŠ Ø£Ø¯ÙˆØ§Øª Ø¨Ø³ÙŠØ·Ø© ØªÙ‚Ù„Ù„ Ø§Ù„Ø§Ø­ØªÙƒØ§ÙƒØ§Øª Ø§Ù„ÙŠÙˆÙ…ÙŠØ©, Ø¨Ø¯ÙˆÙ† ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø±ÙØ§Ù‡ Ø¥Ù„Ù‰ Ù…Ø±Ø§Ù‚Ø¨Ø©.",
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
