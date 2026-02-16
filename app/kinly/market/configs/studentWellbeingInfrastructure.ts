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
    body: "Kinly shows how the house is feeling and what needs attention .  without scoreboards or enforcement.",
    ctaHeading: "Keep the house steady",
  },

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
      copy: "Update noise/guests/cleaning expectations as cohorts change .  no one gets singled out.",
      footer: "Neutral updates, student-friendly tone.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference for everyone",
      copy: "Noise, guests, wellbeing notes, and shared costs in one place .  no streaks or scores.",
      footer: "Clarity that feels caring, not monitoring.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared flows",
      benefit: "Keep shared routines visible with context so support feels clear, not corrective.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Keep shared supplies visible in one place so everyone can contribute without pressure.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs transparent with simple context so trust stays steady.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to surface pressure early and support calm resets.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
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
      "Check in weekly, not daily .  no streaks to maintain.",
      "Reflections are for understanding, not grading.",
      "Reset calmly when the vibe shifts.",
    ],
  },
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning wellbeing into monitoring.",

  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },

  defaultLocale: "en",

  translations: {
    es: {
      whatHeading: "QuÃ© es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. Mantiene visibles las expectativas de bienestar sin convertir la vivienda estudiantil en monitoreo.",
      recognition: {
        heading: "Los sistemas de bienestar fallan cuando se sienten vigilancia.",
        subtitle: "Los estudiantes necesitan visibilidad tranquila, no control.",
        body: "Kinly mantiene visibles las normas con ritmo humano para que la vivienda estudiantil sea cuidada sin presiÃ³n.",
      },
      hero: {
        headline: "Convivencia tranquila que apoya el bienestar.",
        subhead: "Visibilidad sin vigilancia; claridad sin culpas.",
        body: "Kinly muestra cÃ³mo se siente la casa y quÃ© necesita atenciÃ³n .  sin marcadores ni enforcement.",
        ctaHeading: "MantÃ©n la casa estable",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "SeÃ±ales",
          headline: "QuÃ© necesita la casa ahora",
          copy: "Horas de silencio, espacios comunes y tareas ligeras que mantienen el ambiente estable.",
          footer: "Apoyo sin presiÃ³n.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Ajusta normas sin enforcement",
          copy: "Actualiza ruido/visitas/limpieza cuando cambian las cohortes .  nadie es seÃ±alado.",
          footer: "Actualizaciones neutrales, tono estudiantil.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Un referente tranquilo para todos",
          copy: "Ruido, visitas, notas de bienestar y costos compartidos en un lugar .  sin rachas ni puntajes.",
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
        "Comparte la responsabilidad del cuidado en lugar de seÃ±alar a personas.",
      ],
      formingPoints: [
        "Las cohortes cambian; la base sigue clara.",
        "Si se desvÃ­a, se reinicia la prÃ³xima semana sin culpas.",
      ],
      audience: [
        "Equipos de vivienda estudiantil y RAs.",
        "Casas de estudiantes que quieren seÃ±ales de bienestar tranquilas.",
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
          "Revisa semanalmente, no a diario .  sin rachas que mantener.",
          "Las reflexiones son para entender, no para calificar.",
          "Reinicia con calma cuando cambie el ambiente.",
        ],
        heading: "ReflexiÃ³n semanal, a ritmo humano",
      },
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricciÃ³n diaria .  sin convertir el bienestar en monitoreo.",
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
        "ÙƒÙŠÙ†Ù„ÙŠ Ù‡Ùˆ ØªØ·Ø¨ÙŠÙ‚ Ù„Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ ØµÙÙ…Ù… Ù„Ù…Ù† ÙŠØ¹ÙŠØ´ÙˆÙ† Ù…Ø¹Ø§Ù‹. ÙŠØ¨Ù‚ÙŠ ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ø±ÙØ§Ù‡ ÙˆØ§Ø¶Ø­Ø© Ø¯ÙˆÙ† Ø£Ù† ÙŠØ­ÙˆÙ„ Ø§Ù„Ø³ÙƒÙ† Ø§Ù„Ø·Ù„Ø§Ø¨ÙŠ Ø¥Ù„Ù‰ Ù…Ø±Ø§Ù‚Ø¨Ø©.",
      recognition: {
        heading: "ØªÙØ´Ù„ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø±ÙØ§Ù‡ Ø­ÙŠÙ† ØªØ´Ø¹Ø± Ø¨Ø§Ù„Ù…Ø±Ø§Ù‚Ø¨Ø©.",
        subtitle: "ÙŠØ­ØªØ§Ø¬ Ø§Ù„Ø·Ù„Ø§Ø¨ Ø¥Ù„Ù‰ ÙˆØ¶ÙˆØ­ Ù‡Ø§Ø¯Ø¦ØŒ Ù„Ø§ Ø¶Ø¨Ø·.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¨Ù‚ÙŠ Ø§Ù„Ù…Ø¹Ø§ÙŠÙŠØ± Ù…Ø±Ø¦ÙŠØ© ÙˆØ¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø¨Ø´Ø±ÙŠ Ù„ÙŠØ¨Ù‚Ù‰ Ø§Ù„Ø³ÙƒÙ† Ø§Ù„Ø·Ù„Ø§Ø¨ÙŠ Ø¯Ø§Ø¹Ù…Ø§Ù‹ Ø¯ÙˆÙ† Ø¶ØºØ·.",
      },
      hero: {
        headline: "Ù…Ø¹ÙŠØ´Ø© Ù…Ø´ØªØ±ÙƒØ© Ù‡Ø§Ø¯Ø¦Ø© ØªØ¯Ø¹Ù… Ø§Ù„Ø±ÙØ§Ù‡.",
        subhead: "ÙˆØ¶ÙˆØ­ Ø¨Ù„Ø§ Ù…Ø±Ø§Ù‚Ø¨Ø©Ø› Ø´ÙØ§ÙÙŠØ© Ø¨Ù„Ø§ Ù„ÙˆÙ….",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠÙØ¸Ù‡Ø± Ø´Ø¹ÙˆØ± Ø§Ù„Ø¨ÙŠØª ÙˆÙ…Ø§ ÙŠØ­ØªØ§Ø¬Ù‡ .  Ø¨Ù„Ø§ Ù„ÙˆØ­Ø§Øª Ù†Ù‚Ø§Ø· Ø£Ùˆ ÙØ±Ø¶.",
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
          copy: "Ø­Ø¯Ø«ÙˆØ§ ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡/Ø§Ù„Ø¶ÙŠÙˆÙ/Ø§Ù„Ù†Ø¸Ø§ÙØ© Ù…Ø¹ ØªØºÙŠØ± Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø§Øª .  Ø¯ÙˆÙ† Ø£Ù† ÙŠÙØ³ØªÙ‡Ø¯Ù Ø£Ø­Ø¯.",
          footer: "ØªØ­Ø¯ÙŠØ«Ø§Øª Ù…Ø­Ø§ÙŠØ¯Ø©ØŒ Ø¨Ù„Ù‡Ø¬Ø© ØµØ¯ÙŠÙ‚Ø© Ù„Ù„Ø·Ù„Ø§Ø¨.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ù†Ø²Ù„",
          eyebrow: "Ù…Ø±Ø¬Ø¹",
          headline: "Ù…Ø±Ø¬Ø¹ Ù‡Ø§Ø¯Ø¦ Ù„Ù„Ø¬Ù…ÙŠØ¹",
          copy: "Ø§Ù„Ø¶ÙˆØ¶Ø§Ø¡ ÙˆØ§Ù„Ø¶ÙŠÙˆÙ ÙˆÙ…Ù„Ø§Ø­Ø¸Ø§Øª Ø§Ù„Ø±ÙØ§Ù‡ ÙˆØ§Ù„ØªÙƒØ§Ù„ÙŠÙ Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© ÙÙŠ Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯ .  Ø¨Ù„Ø§ Ø³Ù„Ø§Ø³Ù„ Ø£Ùˆ Ù†Ù‚Ø§Ø·.",
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
      weekly: {
        intro: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ³ØªØ®Ø¯Ù… Ø¥ÙŠÙ‚Ø§Ø¹Ø§Ù‹ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ Ù„ÙŠØ¨Ù‚Ù‰ Ø§Ù„Ø¯Ø¹Ù… Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø¨Ø´Ø±ÙŠ.",
        points: [
          "Ø±Ø§Ø¬Ø¹ÙˆØ§ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ØŒ Ù„Ø§ ÙŠÙˆÙ…ÙŠØ§Ù‹ .  Ø¨Ù„Ø§ Ø³Ù„Ø§Ø³Ù„ Ù„Ù„Ø­ÙØ§Ø¸ Ø¹Ù„ÙŠÙ‡Ø§.",
          "Ø§Ù„ØªØ£Ù…Ù„Ø§Øª Ù„Ù„ÙÙ‡Ù…ØŒ Ù„Ø§ Ù„Ù„ØªÙ‚ÙŠÙŠÙ….",
          "Ø£Ø¹ÙŠØ¯ÙˆØ§ Ø§Ù„Ø¶Ø¨Ø· Ø¨Ù‡Ø¯ÙˆØ¡ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØªØºÙŠØ± Ø§Ù„Ø¬Ùˆ.",
        ],
        heading: "ØªØ£Ù…Ù„ Ø£Ø³Ø¨ÙˆØ¹ÙŠØŒ Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø¨Ø´Ø±ÙŠ",
      },
      toolsIntro:
        "Ø¨Ø¹Ø¯ Ø£Ù† ØªØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§ØªØŒ ÙŠÙ‚Ø¯Ù… ÙƒÙŠÙ†Ù„ÙŠ Ø£Ø¯ÙˆØ§Øª Ø¨Ø³ÙŠØ·Ø© ØªÙ‚Ù„Ù„ Ø§Ù„Ø§Ø­ØªÙƒØ§ÙƒØ§Øª Ø§Ù„ÙŠÙˆÙ…ÙŠØ© .  Ø¨Ø¯ÙˆÙ† ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø±ÙØ§Ù‡ Ø¥Ù„Ù‰ Ù…Ø±Ø§Ù‚Ø¨Ø©.",
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
