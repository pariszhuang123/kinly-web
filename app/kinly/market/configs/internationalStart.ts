import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const internationalStartConfig: ScenarioConfig = {
  pageKey: "kinly_market_new_place",
  recognition: {
    heading: "New place, unclear norms.",
    subtitle: "You want to fit in without asking awkward questions.",
    body: "Kinly shows what matters in the home so you can contribute without guessing or overstepping.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. When you move into a new place, it keeps expectations clear without turning the home into a checklist.",
  hero: {
    headline: "Clarity in a new place.",
    subhead: "See what the home needs before anyone has to explain it.",
    body: "New routines, new people, new expectations. Kinly surfaces what matters so you can settle in calmly.",
    ctaHeading: "Start settling in with clarity",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Quiet hours, shared meals, who is around tonight.",
      footer: "Things to notice without needing to ask.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Contribute at your own pace",
      copy: "Pick up tasks when you can, swap when life changes.",
      footer: "You are always in control - nothing is locked in.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "Norms everyone can see",
      copy: "Quiet hours, guests, cleaning expectations - all in one calm place.",
      footer: "No surprises, no awkward questions.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared flows",
      benefit:
        "Surface home routines and context so new housemates can contribute without awkward guesswork.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Clarify what is shared and what is personal before shopping, so no one oversteps.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep contributions visible with simple context so fairness is clear in a new home.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to reset expectations as routines settle, without pressure.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],
  chips: [
    "I want to help but I am not sure what is expected.",
    "Asking about norms feels awkward.",
    "I do not want to overstep or underdo it.",
    "I care but I need clarity, not guesswork.",
  ],
  rolePoints: [
    "Surfaces norms so you do not have to ask.",
    "Keeps contributions visible without pressure or judgement.",
  ],
  formingPoints: [
    "Settling in takes time - Kinly keeps context as you adjust.",
    "New routines are normal, not failures.",
  ],
  audience: [
    "People settling into a new shared home.",
    "Anyone adjusting to unfamiliar routines.",
    "Housemates who want calm clarity, not awkward conversations.",
  ],
  notList: ["Not a surveillance tool.", "Not a scorecard or leaderboard.", "Not a chore boss."],
  weekly: {
    intro: "Kinly uses a weekly rhythm so you can settle in without daily pressure.",
    points: [
      "Check in weekly, not daily - no streaks to maintain.",
      "Reflections are for understanding, not grading anyone.",
      "Kinly never forces conversations - it helps you decide when to talk.",
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
      whatHeading: "Que es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. Al mudarte a un lugar nuevo, mantiene claras las expectativas sin convertir la casa en una lista de tareas.",
      recognition: {
        heading: "Lugar nuevo, normas poco claras.",
        subtitle: "Quieres encajar sin hacer preguntas incomodas.",
        body: "Kinly muestra lo que importa en casa para que puedas contribuir sin adivinar ni pasarte.",
      },
      hero: {
        headline: "Claridad en un lugar nuevo.",
        subhead: "Ve lo que necesita la casa antes de que alguien tenga que explicarlo.",
        body: "Nuevas rutinas, nuevas personas, nuevas expectativas. Kinly muestra lo que importa para que te adaptes con calma.",
        ctaHeading: "Empieza a instalarte con claridad",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "Que necesita atencion",
          copy: "Horas de silencio, comidas compartidas, quien esta en casa esta noche.",
          footer: "Cosas para notar sin necesidad de preguntar.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Contribuye a tu ritmo",
          copy: "Toma tareas cuando puedas, intercambia cuando la vida cambie.",
          footer: "Siempre tienes el control - nada queda fijo.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Hogar",
          headline: "Normas que todos pueden ver",
          copy: "Silencio, visitas, expectativas de limpieza - todo en un lugar tranquilo.",
          footer: "Sin sorpresas, sin preguntas incomodas.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Quiero ayudar pero no se que se espera.",
        "Preguntar sobre normas se siente incomodo.",
        "No quiero pasarme ni quedarme corto.",
        "Me importa pero necesito claridad, no adivinanzas.",
      ],
      rolePoints: [
        "Muestra normas para que no tengas que preguntar.",
        "Mantiene las contribuciones visibles sin presion ni juicios.",
      ],
      formingPoints: [
        "Adaptarse lleva tiempo - Kinly guarda el contexto mientras te ajustas.",
        "Las nuevas rutinas son normales, no fallos.",
      ],
      audience: [
        "Personas instalandoce en un nuevo hogar compartido.",
        "Cualquiera ajustandose a rutinas desconocidas.",
        "Companeros que quieren claridad tranquila, no conversaciones incomodas.",
      ],
      notList: ["No es vigilancia.", "No es marcador ni ranking.", "No es un jefe de tareas."],
      weekly: {
        intro: "Kinly usa un ritmo semanal para que te adaptes sin presion diaria.",
        points: [
          "Revisa semanalmente, no a diario - sin rachas que mantener.",
          "Reflexiones para entender, no para juzgar.",
          "Kinly nunca fuerza conversaciones - te ayuda a decidir cuando hablar.",
        ],
        heading: "Reflexion semanal, a ritmo humano",
      },
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la friccion diaria .  sin convertir la vida compartida en un sistema de tareas.",
      sectionHeadings: {
        howItWorks: "Como funciona Kinly",
        soundsLikeYou: "Te suena familiar?",
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
      whatHeading: "Ù…Ø§ Ù‡Ùˆ ÙƒÙŠÙ†Ù„ÙŠ",
      whatBody:
        "ÙƒÙŠÙ†Ù„ÙŠ Ù‡Ùˆ ØªØ·Ø¨ÙŠÙ‚ Ù„Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ ØµÙÙ…Ù… Ù„Ù…Ù† ÙŠØ¹ÙŠØ´ÙˆÙ† Ù…Ø¹Ø§Ù‹. Ø¹Ù†Ø¯ Ø§Ù„Ø§Ù†ØªÙ‚Ø§Ù„ Ù„Ù…ÙƒØ§Ù† Ø¬Ø¯ÙŠØ¯ ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª ÙˆØ§Ø¶Ø­Ø© Ø¨Ø¯ÙˆÙ† ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù…Ù†Ø²Ù„ Ø¥Ù„Ù‰ Ù‚Ø§Ø¦Ù…Ø© Ù…Ù‡Ø§Ù….",
      recognition: {
        heading: "Ù…ÙƒØ§Ù† Ø¬Ø¯ÙŠØ¯ØŒ Ù‚ÙˆØ§Ø¹Ø¯ ØºÙŠØ± ÙˆØ§Ø¶Ø­Ø©.",
        subtitle: "ØªØ±ÙŠØ¯ Ø§Ù„Ø§Ù†Ø³Ø¬Ø§Ù… Ø¨Ø¯ÙˆÙ† Ø·Ø±Ø­ Ø£Ø³Ø¦Ù„Ø© Ù…Ø­Ø±Ø¬Ø©.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠÙØ¸Ù‡Ø± Ù…Ø§ ÙŠÙ‡Ù… ÙÙŠ Ø§Ù„Ù…Ù†Ø²Ù„ Ø­ØªÙ‰ ØªØªÙ…ÙƒÙ† Ù…Ù† Ø§Ù„Ù…Ø³Ø§Ù‡Ù…Ø© Ø¨Ø¯ÙˆÙ† ØªØ®Ù…ÙŠÙ† Ø£Ùˆ ØªØ¬Ø§ÙˆØ².",
      },
      hero: {
        headline: "ÙˆØ¶ÙˆØ­ ÙÙŠ Ù…ÙƒØ§Ù† Ø¬Ø¯ÙŠØ¯.",
        subhead: "Ø§Ø¹Ø±Ù Ù…Ø§ ÙŠØ­ØªØ§Ø¬Ù‡ Ø§Ù„Ù…Ù†Ø²Ù„ Ù‚Ø¨Ù„ Ø£Ù† ÙŠØ¶Ø·Ø± Ø£Ø­Ø¯ Ù„Ø´Ø±Ø­Ù‡.",
        body: "Ø±ÙˆØªÙŠÙ† Ø¬Ø¯ÙŠØ¯ØŒ Ø£Ø´Ø®Ø§Øµ Ø¬Ø¯Ø¯ØŒ ØªÙˆÙ‚Ø¹Ø§Øª Ø¬Ø¯ÙŠØ¯Ø©. ÙƒÙŠÙ†Ù„ÙŠ ÙŠÙØ¸Ù‡Ø± Ù…Ø§ ÙŠÙ‡Ù… Ø­ØªÙ‰ ØªØ³ØªÙ‚Ø± Ø¨Ù‡Ø¯ÙˆØ¡.",
        ctaHeading: "Ø§Ø¨Ø¯Ø£ Ø§Ù„Ø§Ø³ØªÙ‚Ø±Ø§Ø± Ø¨ÙˆØ¶ÙˆØ­",
      },
      screens: [
        {
          title: "Ø§Ù„ÙŠÙˆÙ…",
          eyebrow: "Ø§Ù„Ø¢Ù†",
          headline: "Ù…Ø§ ÙŠØ­ØªØ§Ø¬ Ø§Ù†ØªØ¨Ø§Ù‡",
          copy: "Ø³Ø§Ø¹Ø§Øª Ø§Ù„Ù‡Ø¯ÙˆØ¡ØŒ Ø§Ù„ÙˆØ¬Ø¨Ø§Øª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ©ØŒ Ù…Ù† Ù…ÙˆØ¬ÙˆØ¯ Ø§Ù„Ù„ÙŠÙ„Ø©.",
          footer: "Ø£Ø´ÙŠØ§Ø¡ Ù„Ù…Ù„Ø§Ø­Ø¸ØªÙ‡Ø§ Ø¯ÙˆÙ† Ø§Ù„Ø­Ø§Ø¬Ø© Ù„Ù„Ø³Ø¤Ø§Ù„.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "Ø¥Ø¯Ø§Ø±Ø©",
          eyebrow: "ØªØ¹Ø¯ÙŠÙ„",
          headline: "Ø³Ø§Ù‡Ù… Ø¨Ø¥ÙŠÙ‚Ø§Ø¹Ùƒ Ø§Ù„Ø®Ø§Øµ",
          copy: "ØªÙˆÙ„Ù‘ÙŽ Ø§Ù„Ù…Ù‡Ø§Ù… Ø¹Ù†Ø¯Ù…Ø§ ØªØ³ØªØ·ÙŠØ¹ØŒ Ø¨Ø¯Ù‘Ù„ Ø¹Ù†Ø¯Ù…Ø§ ØªØªØºÙŠØ± Ø§Ù„Ø­ÙŠØ§Ø©.",
          footer: "Ø£Ù†Øª Ø¯Ø§Ø¦Ù…Ø§Ù‹ Ù…Ø³ÙŠØ·Ø± - Ù„Ø§ Ø´ÙŠØ¡ Ù…Ù‚ÙÙ„.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ù†Ø²Ù„",
          eyebrow: "Ø§Ù„Ù…Ù†Ø²Ù„ Ø§Ù„Ù…Ø´ØªØ±Ùƒ",
          headline: "Ù‚ÙˆØ§Ø¹Ø¯ ÙŠØ±Ø§Ù‡Ø§ Ø§Ù„Ø¬Ù…ÙŠØ¹",
          copy: "Ø³Ø§Ø¹Ø§Øª Ø§Ù„Ù‡Ø¯ÙˆØ¡ØŒ Ø§Ù„Ø¶ÙŠÙˆÙØŒ ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ù†Ø¸Ø§ÙØ© - ÙƒÙ„Ù‡Ø§ ÙÙŠ Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯ Ù‡Ø§Ø¯Ø¦.",
          footer: "Ù„Ø§ Ù…ÙØ§Ø¬Ø¢ØªØŒ Ù„Ø§ Ø£Ø³Ø¦Ù„Ø© Ù…Ø­Ø±Ø¬Ø©.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "Ø£Ø±ÙŠØ¯ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø© Ù„ÙƒÙ† Ù„Ø³Øª Ù…ØªØ£ÙƒØ¯Ø§Ù‹ Ù…Ù…Ø§ Ù‡Ùˆ Ù…ØªÙˆÙ‚Ø¹.",
        "Ø§Ù„Ø³Ø¤Ø§Ù„ Ø¹Ù† Ø§Ù„Ù‚ÙˆØ§Ø¹Ø¯ ÙŠØ¨Ø¯Ùˆ Ù…Ø­Ø±Ø¬Ø§Ù‹.",
        "Ù„Ø§ Ø£Ø±ÙŠØ¯ Ø§Ù„ØªØ¬Ø§ÙˆØ² Ø£Ùˆ Ø§Ù„ØªÙ‚ØµÙŠØ±.",
        "Ø£Ù‡ØªÙ… Ù„ÙƒÙ† Ø£Ø­ØªØ§Ø¬ ÙˆØ¶ÙˆØ­Ø§Ù‹ØŒ Ù„ÙŠØ³ ØªØ®Ù…ÙŠÙ†Ø§Ù‹.",
      ],
      rolePoints: [
        "ÙŠÙØ¸Ù‡Ø± Ø§Ù„Ù‚ÙˆØ§Ø¹Ø¯ Ø­ØªÙ‰ Ù„Ø§ ØªØ¶Ø·Ø± Ù„Ù„Ø³Ø¤Ø§Ù„.",
        "ÙŠØ¨Ù‚ÙŠ Ø§Ù„Ù…Ø³Ø§Ù‡Ù…Ø§Øª Ù…Ø±Ø¦ÙŠØ© Ø¨Ø¯ÙˆÙ† Ø¶ØºØ· Ø£Ùˆ Ø­ÙƒÙ….",
      ],
      formingPoints: [
        "Ø§Ù„Ø§Ø³ØªÙ‚Ø±Ø§Ø± ÙŠØ­ØªØ§Ø¬ ÙˆÙ‚ØªØ§Ù‹ - ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ­ÙØ¸ Ø§Ù„Ø³ÙŠØ§Ù‚ Ø¨ÙŠÙ†Ù…Ø§ ØªØªØ£Ù‚Ù„Ù….",
        "Ø§Ù„Ø±ÙˆØªÙŠÙ† Ø§Ù„Ø¬Ø¯ÙŠØ¯ Ø·Ø¨ÙŠØ¹ÙŠØŒ Ù„ÙŠØ³ ÙØ´Ù„Ø§Ù‹.",
      ],
      audience: [
        "Ø£Ø´Ø®Ø§Øµ ÙŠØ³ØªÙ‚Ø±ÙˆÙ† ÙÙŠ Ù…Ù†Ø²Ù„ Ù…Ø´ØªØ±Ùƒ Ø¬Ø¯ÙŠØ¯.",
        "Ø£ÙŠ Ø´Ø®Øµ ÙŠØªØ£Ù‚Ù„Ù… Ù…Ø¹ Ø±ÙˆØªÙŠÙ† ØºÙŠØ± Ù…Ø£Ù„ÙˆÙ.",
        "Ø²Ù…Ù„Ø§Ø¡ Ø§Ù„Ø³ÙƒÙ† Ø§Ù„Ø°ÙŠÙ† ÙŠØ±ÙŠØ¯ÙˆÙ† ÙˆØ¶ÙˆØ­Ø§Ù‹ Ù‡Ø§Ø¯Ø¦Ø§Ù‹ØŒ Ù„Ø§ Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ù…Ø­Ø±Ø¬Ø©.",
      ],
      notList: ["Ù„ÙŠØ³ Ø£Ø¯Ø§Ø© Ù…Ø±Ø§Ù‚Ø¨Ø©.", "Ù„ÙŠØ³ Ø¨Ø·Ø§Ù‚Ø© Ù†Ù‚Ø§Ø· Ø£Ùˆ Ù„ÙˆØ­Ø© ØµØ¯Ø§Ø±Ø©.", "Ù„ÙŠØ³ Ø±Ø¦ÙŠØ³ Ù…Ù‡Ø§Ù…."],
      weekly: {
        intro: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ³ØªØ®Ø¯Ù… Ø¥ÙŠÙ‚Ø§Ø¹Ø§Ù‹ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ Ø­ØªÙ‰ ØªØ³ØªÙ‚Ø± Ø¨Ø¯ÙˆÙ† Ø¶ØºØ· ÙŠÙˆÙ…ÙŠ.",
        points: [
          "Ø±Ø§Ø¬Ø¹ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ØŒ Ù„ÙŠØ³ ÙŠÙˆÙ…ÙŠØ§Ù‹ - Ù„Ø§ Ø³Ù„Ø§Ø³Ù„ Ù„Ù„Ø­ÙØ§Ø¸ Ø¹Ù„ÙŠÙ‡Ø§.",
          "Ø§Ù„ØªØ£Ù…Ù„Ø§Øª Ù„Ù„ÙÙ‡Ù…ØŒ Ù„ÙŠØ³Øª Ù„ØªÙ‚ÙŠÙŠÙ… Ø£Ø­Ø¯.",
          "ÙƒÙŠÙ†Ù„ÙŠ Ù„Ø§ ÙŠÙØ±Ø¶ Ù…Ø­Ø§Ø¯Ø«Ø§Øª - ÙŠØ³Ø§Ø¹Ø¯Ùƒ ØªÙ‚Ø±Ø± Ù…ØªÙ‰ ØªØªÙƒÙ„Ù….",
        ],
        heading: "ØªØ£Ù…Ù„ Ø£Ø³Ø¨ÙˆØ¹ÙŠØŒ Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø¨Ø´Ø±ÙŠ",
      },
      toolsIntro:
        "Ø¨Ø¹Ø¯ Ø£Ù† ØªØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§ØªØŒ ÙŠÙ‚Ø¯Ù… ÙƒÙŠÙ†Ù„ÙŠ Ø£Ø¯ÙˆØ§Øª Ø¨Ø³ÙŠØ·Ø© ØªÙ‚Ù„Ù„ Ø§Ù„Ø§Ø­ØªÙƒØ§ÙƒØ§Øª Ø§Ù„ÙŠÙˆÙ…ÙŠØ© .  Ø¨Ø¯ÙˆÙ† ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ Ø¥Ù„Ù‰ Ù†Ø¸Ø§Ù… Ù…Ù‡Ø§Ù….",
      sectionHeadings: {
        howItWorks: "ÙƒÙŠÙ ÙŠØ¹Ù…Ù„ ÙƒÙŠÙ†Ù„ÙŠ",
        soundsLikeYou: "Ù‡Ù„ ÙŠØ¨Ø¯Ùˆ Ù‡Ø°Ø§ Ù…Ø«Ù„ Ù…ÙƒØ§Ù†ÙƒØŸ",
        roleHeading: "Ø¯ÙˆØ± ÙƒÙŠÙ†Ù„ÙŠ: Ø§Ù„ØªØ£Ù…Ù„ Ø£ÙˆÙ„Ø§Ù‹",
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

