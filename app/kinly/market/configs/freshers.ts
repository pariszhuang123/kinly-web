import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const freshersConfig: ScenarioConfig = {
  pageKey: "kinly_market_freshers",
  recognition: {
    heading: "Someone always ends up running the flat. Is it you?",
    subtitle: "You barely know each other yet — but somehow you are the one keeping things together.",
    body: "Kinly makes norms and shared plans visible so no one person has to remember everything for the flat.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For first-year flats, it keeps expectations clear and calm without turning your place into a chore chart.",
  hero: {
    headline: "Your flat should not depend on one person's memory.",
    subhead: "See what the flat needs before someone has to chase everyone.",
    body: "Late labs, early lectures, and new roommates are messy. Kinly shows what needs doing so nobody has to be the flat manager.",
    ctaHeading: "Give the flat a shared memory",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Quiet hours for exam weeks, bins before pickup, who is hosting tonight.",
      footer: "Things to do and notice without blame.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Switch",
      headline: "Swap turns without awkwardness",
      copy: "If someone is on a late shift or out of cash this week, reassign quietly.",
      footer: "You are always in control - nothing is locked in.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "House rules everyone sees",
      copy: "Quiet hours, guests, cleaning standards, and shared costs in one calm place.",
      footer: "No surprises, no chore charts.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit:
        "Keep move-in basics and weekly routines visible so new housemates know what good looks like.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Clarify shared food expectations before busy campus days so shops stay fair.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs clear by week so tight student budgets stay predictable.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use short weekly check-ins to reset after exam weeks or schedule chaos without blame.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],
  chips: [
    "I ended up making the cleaning rota. Nobody asked me to.",
    "I remind people about quiet hours during exams. Every time.",
    "I know when the bins go out. Nobody else checks.",
    "I care about my flatmates but I did not sign up to manage them.",
  ],
  rolePoints: [
    "Surfaces norms before conflict starts.",
    "Keeps tasks light - no points, no leaderboards.",
  ],
  formingPoints: [
    "New flatmates each semester - Kinly keeps context as people come and go.",
    "Late nights, early mornings, and tight weeks are normal, not failures.",
  ],
  audience: ["First-year uni flats and dorm suites.", "Shared rentals near campus.", "Roommates who want calm, not drama."],
  notList: ["Not a surveillance tool.", "Not a scorecard or leaderboard.", "Not a chore boss."],
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning your flat into a task system.",
  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
  defaultLocale: "en",
  translations: {
    es: {
      whatHeading: "Que es Kinly",
      whatBody:
        "Kinly es una app de convivencia para quienes viven juntos. En pisos de primer aÃ±o mantiene las expectativas claras y tranquilas sin convertir la casa en un cuadro de tareas.",
      recognition: {
        heading: "Caos de mudanza sin tension.",
        subtitle: "Mantengan el piso tranquilo mientras todos se acomodan.",
        body: "Kinly hace visibles las normas y planes compartidos para que los pisos de primer aÃƒÂ±o sigan amables, incluso si los planes cambian.",
      },
      hero: {
        headline: "Una forma mas tranquila de vivir juntos en la uni.",
        subhead: "Ve lo que necesita el piso antes de que se vuelva drama.",
        body: "Laboratorios tarde, clases temprano y nuevos compis son un lio. Kinly muestra lo de hoy sin presion, puntajes ni reganos.",
        ctaHeading: "Empieza tu piso de primer aÃƒÂ±o en calma",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "Que necesita atencion",
          copy: "Horas de silencio en examenes, sacar basura, quien recibe visitas.",
          footer: "Cosas por hacer o notar sin culpas.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Cambiar",
          headline: "Intercambia turnos sin incomodidad",
          copy: "Si alguien tiene turno tarde o poco dinero esta semana, reasigna en silencio.",
          footer: "Siempre en control - nada queda fijo.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Casa",
          headline: "Reglas que todos ven",
          copy: "Silencio, visitas, estandares de limpieza y gastos compartidos en un solo lugar.",
          footer: "Sin sorpresas, sin cuadros de tareas.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Nunca acordamos reglas de limpieza.",
        "Las semanas de examenes necesitan silencio sin resentimiento.",
        "La politica de visitas es confusa y causa friccion.",
        "Nos importa la gente pero odiamos los cuadros de tareas.",
      ],
      rolePoints: [
        "Muestra normas antes de que empiece el conflicto.",
        "Mantiene tareas ligeras - sin puntos ni rankings.",
      ],
      formingPoints: [
        "Nuevos compis cada semestre - Kinly guarda el contexto.",
        "Noches largas, mananas tempranas y semanas justas son normales.",
      ],
      audience: [
        "Pisos de primer ano y suites de residencia.",
        "Alquileres compartidos cerca del campus.",
        "Compis que quieren calma, no drama.",
      ],
      notList: ["No es vigilancia.", "No es marcador ni ranking.", "No es un jefe de tareas."],
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la friccion diaria,sin convertir el piso en un sistema de tareas.",
      sectionHeadings: {
        howItWorks: "Como funciona Kinly",
        soundsLikeYou: "Ã‚Â¿Te suena familiar?",
        roleHeading: "El rol de Kinly: reflexion primero",
        formingHeading: "Si tu hogar aun se esta formando",
        audienceHeading: "Para quien es esto",
        notListHeading: "Kinly no es...",
        readyHeading: "Cuando estes listo",
        readySubtitle: "Kinly vive en la app - empieza en iOS o Android.",
      },
      availability: {
        body: getScenarioAvailabilityBody("es"),
      },
    } satisfies LocaleCopy,
    ar: {
      whatHeading: "Ù…Ø§ Ù‡Ùˆ ÙƒÙŠÙ†Ù„ÙŠ",
      whatBody:
        "ÙƒÙŠÙ†Ù„ÙŠ Ù‡Ùˆ ØªØ·Ø¨ÙŠÙ‚ Ù„Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ ØµÙÙ…Ù… Ù„Ù…Ù† ÙŠØ¹ÙŠØ´ÙˆÙ† Ù…Ø¹Ø§Ù‹. Ù„Ø·Ù„Ø§Ø¨ Ø§Ù„Ø³Ù†Ø© Ø§Ù„Ø£ÙˆÙ„Ù‰ ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª ÙˆØ§Ø¶Ø­Ø© ÙˆÙ‡Ø§Ø¯Ø¦Ø© Ø¨Ø¯ÙˆÙ† ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¨ÙŠØª Ø¥Ù„Ù‰ Ø¬Ø¯ÙˆÙ„ Ù…Ù‡Ø§Ù….",
      recognition: {
        heading: "ÙÙˆØ¶Ù‰ Ø§Ù„Ø§Ù†ØªÙ‚Ø§Ù„ Ø¨Ø¯ÙˆÙ† ØªÙˆØªØ±.",
        subtitle: "Ø­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ù‡Ø¯ÙˆØ¡ Ø§Ù„Ø´Ù‚Ø© Ø¨ÙŠÙ†Ù…Ø§ ÙŠØªØ£Ù‚Ù„Ù… Ø§Ù„Ø¬Ù…ÙŠØ¹.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¬Ø¹Ù„ Ø§Ù„Ù‚ÙˆØ§Ø¹Ø¯ ÙˆØ§Ù„Ø®Ø·Ø· Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© Ù…Ø±Ø¦ÙŠØ© Ø­ØªÙ‰ ØªØ¨Ù‚Ù‰ Ø´Ù‚Ù‚ Ø§Ù„Ø³Ù†Ø© Ø§Ù„Ø£ÙˆÙ„Ù‰ Ù„Ø·ÙŠÙØ©ØŒ Ø­ØªÙ‰ Ø¹Ù†Ø¯Ù…Ø§ ØªØªØºÙŠØ± Ø§Ù„Ø®Ø·Ø·.",
      },
      hero: {
        headline: "Ø·Ø±ÙŠÙ‚Ø© Ø£Ù‡Ø¯Ø£ Ù„Ù„Ø¹ÙŠØ´ Ù…Ø¹Ø§Ù‹ ÙÙŠ Ø§Ù„Ø¬Ø§Ù…Ø¹Ø©.",
        subhead: "Ø§Ø¹Ø±Ù Ù…Ø§ ØªØ­ØªØ§Ø¬Ù‡ Ø§Ù„Ø´Ù‚Ø© Ù‚Ø¨Ù„ Ø£Ù† ÙŠØªØ­ÙˆÙ„ Ù„Ø¯Ø±Ø§Ù…Ø§.",
        body: "Ø§Ù„Ù…Ø¹Ø§Ù…Ù„ Ø§Ù„Ù…ØªØ£Ø®Ø±Ø©ØŒ ÙˆØ§Ù„Ù…Ø­Ø§Ø¶Ø±Ø§Øª Ø§Ù„Ù…Ø¨ÙƒØ±Ø©ØŒ ÙˆØ²Ù…Ù„Ø§Ø¡ Ø§Ù„Ø³ÙƒÙ† Ø§Ù„Ø¬Ø¯Ø¯ ÙÙˆØ¶ÙˆÙŠØ©. ÙƒÙŠÙ†Ù„ÙŠ ÙŠÙØ¸Ù‡Ø± Ø§Ø­ØªÙŠØ§Ø¬Ø§Øª Ø§Ù„Ù„ÙŠÙ„Ø© Ø¨Ø¯ÙˆÙ† Ø¶ØºØ· Ø£Ùˆ ØªØ³Ø¬ÙŠÙ„ Ù†Ù‚Ø§Ø· Ø£Ùˆ Ø¥Ø²Ø¹Ø§Ø¬.",
        ctaHeading: "Ø§Ø¨Ø¯Ø£ Ø´Ù‚Ø© Ø§Ù„Ø³Ù†Ø© Ø§Ù„Ø£ÙˆÙ„Ù‰ Ø¨Ù‡Ø¯ÙˆØ¡",
      },
      screens: [
        {
          title: "Ø§Ù„ÙŠÙˆÙ…",
          eyebrow: "Ø§Ù„Ø¢Ù†",
          headline: "Ù…Ø§ ÙŠØ­ØªØ§Ø¬ Ø§Ù†ØªØ¨Ø§Ù‡",
          copy: "Ø³Ø§Ø¹Ø§Øª Ø§Ù„Ù‡Ø¯ÙˆØ¡ Ù„Ø£Ø³Ø§Ø¨ÙŠØ¹ Ø§Ù„Ø§Ù…ØªØ­Ø§Ù†Ø§ØªØŒ Ø¥Ø®Ø±Ø§Ø¬ Ø§Ù„Ù‚Ù…Ø§Ù…Ø©ØŒ Ù…Ù† ÙŠØ³ØªØ¶ÙŠÙ Ø§Ù„Ù„ÙŠÙ„Ø©.",
          footer: "Ø£Ø´ÙŠØ§Ø¡ Ù„Ù„Ù‚ÙŠØ§Ù… Ø¨Ù‡Ø§ ÙˆÙ…Ù„Ø§Ø­Ø¸ØªÙ‡Ø§ Ø¨Ø¯ÙˆÙ† Ù„ÙˆÙ….",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "Ø¥Ø¯Ø§Ø±Ø©",
          eyebrow: "ØªØ¨Ø¯ÙŠÙ„",
          headline: "Ø¨Ø¯Ù‘Ù„ Ø§Ù„Ø£Ø¯ÙˆØ§Ø± Ø¨Ø¯ÙˆÙ† Ø¥Ø­Ø±Ø§Ø¬",
          copy: "Ø¥Ø°Ø§ ÙƒØ§Ù† Ø´Ø®Øµ ÙÙŠ ÙˆØ±Ø¯ÙŠØ© Ù…ØªØ£Ø®Ø±Ø© Ø£Ùˆ Ø¶ÙŠÙ‚ Ù…Ø§Ø¯ÙŠØ§Ù‹ Ù‡Ø°Ø§ Ø§Ù„Ø£Ø³Ø¨ÙˆØ¹ØŒ Ø£Ø¹Ø¯ Ø§Ù„ØªÙˆØ²ÙŠØ¹ Ø¨Ù‡Ø¯ÙˆØ¡.",
          footer: "Ø£Ù†Øª Ø¯Ø§Ø¦Ù…Ø§Ù‹ Ù…Ø³ÙŠØ·Ø± - Ù„Ø§ Ø´ÙŠØ¡ Ù…Ù‚ÙÙ„.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ù†Ø²Ù„",
          eyebrow: "Ø§Ù„Ù…Ù†Ø²Ù„ Ø§Ù„Ù…Ø´ØªØ±Ùƒ",
          headline: "Ù‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ø¨ÙŠØª ÙŠØ±Ø§Ù‡Ø§ Ø§Ù„Ø¬Ù…ÙŠØ¹",
          copy: "Ø³Ø§Ø¹Ø§Øª Ø§Ù„Ù‡Ø¯ÙˆØ¡ØŒ Ø§Ù„Ø¶ÙŠÙˆÙØŒ Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ù†Ø¸Ø§ÙØ©ØŒ ÙˆØ§Ù„ØªÙƒØ§Ù„ÙŠÙ Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© ÙÙŠ Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯ Ù‡Ø§Ø¯Ø¦.",
          footer: "Ù„Ø§ Ù…ÙØ§Ø¬Ø¢ØªØŒ Ù„Ø§ Ø¬Ø¯Ø§ÙˆÙ„ Ù…Ù‡Ø§Ù….",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "Ù„Ù… Ù†ØªÙÙ‚ Ø¹Ù„Ù‰ Ù‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ù†Ø¸Ø§ÙØ©.",
        "Ø£Ø³Ø§Ø¨ÙŠØ¹ Ø§Ù„Ø§Ù…ØªØ­Ø§Ù†Ø§Øª ØªØ­ØªØ§Ø¬ Ù‡Ø¯ÙˆØ¡ Ø¨Ø¯ÙˆÙ† Ø§Ø³ØªÙŠØ§Ø¡.",
        "Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø¶ÙŠÙˆÙ ØºØ§Ù…Ø¶Ø© ÙˆØªØ³Ø¨Ø¨ Ø§Ø­ØªÙƒØ§Ùƒ.",
        "Ù†Ù‡ØªÙ… Ø¨Ø¨Ø¹Ø¶ Ù„ÙƒÙ† Ù†ÙƒØ±Ù‡ Ø¬Ø¯Ø§ÙˆÙ„ Ø§Ù„Ù…Ù‡Ø§Ù….",
      ],
      rolePoints: [
        "ÙŠÙØ¸Ù‡Ø± Ø§Ù„Ù‚ÙˆØ§Ø¹Ø¯ Ù‚Ø¨Ù„ Ø¨Ø¯Ø¡ Ø§Ù„ØµØ±Ø§Ø¹.",
        "ÙŠØ¨Ù‚ÙŠ Ø§Ù„Ù…Ù‡Ø§Ù… Ø®ÙÙŠÙØ© - Ù„Ø§ Ù†Ù‚Ø§Ø·ØŒ Ù„Ø§ Ù„ÙˆØ­Ø§Øª ØµØ¯Ø§Ø±Ø©.",
      ],
      formingPoints: [
        "Ø²Ù…Ù„Ø§Ø¡ Ø¬Ø¯Ø¯ ÙƒÙ„ ÙØµÙ„ - ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ­ÙØ¸ Ø§Ù„Ø³ÙŠØ§Ù‚ Ù…Ø¹ ØªØºÙŠØ± Ø§Ù„Ø£Ø´Ø®Ø§Øµ.",
        "Ø§Ù„Ù„ÙŠØ§Ù„ÙŠ Ø§Ù„Ù…ØªØ£Ø®Ø±Ø©ØŒ Ø§Ù„ØµØ¨Ø§Ø­Ø§Øª Ø§Ù„Ù…Ø¨ÙƒØ±Ø©ØŒ ÙˆØ§Ù„Ø£Ø³Ø§Ø¨ÙŠØ¹ Ø§Ù„Ø¶ÙŠÙ‚Ø© Ø·Ø¨ÙŠØ¹ÙŠØ©ØŒ Ù„ÙŠØ³Øª ÙØ´Ù„Ø§Ù‹.",
      ],
      audience: [
        "Ø´Ù‚Ù‚ Ø§Ù„Ø³Ù†Ø© Ø§Ù„Ø£ÙˆÙ„Ù‰ ÙˆØ£Ø¬Ù†Ø­Ø© Ø§Ù„Ø³ÙƒÙ† Ø§Ù„Ø¬Ø§Ù…Ø¹ÙŠ.",
        "Ø§Ù„Ø¥ÙŠØ¬Ø§Ø±Ø§Øª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© Ù‚Ø±Ø¨ Ø§Ù„Ø­Ø±Ù….",
        "Ø²Ù…Ù„Ø§Ø¡ Ø§Ù„Ø³ÙƒÙ† Ø§Ù„Ø°ÙŠÙ† ÙŠØ±ÙŠØ¯ÙˆÙ† Ù‡Ø¯ÙˆØ¡ØŒ Ù„Ø§ Ø¯Ø±Ø§Ù…Ø§.",
      ],
      notList: ["Ù„ÙŠØ³ Ø£Ø¯Ø§Ø© Ù…Ø±Ø§Ù‚Ø¨Ø©.", "Ù„ÙŠØ³ Ø¨Ø·Ø§Ù‚Ø© Ù†Ù‚Ø§Ø· Ø£Ùˆ Ù„ÙˆØ­Ø© ØµØ¯Ø§Ø±Ø©.", "Ù„ÙŠØ³ Ø±Ø¦ÙŠØ³ Ù…Ù‡Ø§Ù…."],
      toolsIntro:
        "Ø¨Ø¹Ø¯ Ø£Ù† ØªØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§ØªØŒ ÙŠÙ‚Ø¯Ù… ÙƒÙŠÙ†Ù„ÙŠ Ø£Ø¯ÙˆØ§Øª Ø¨Ø³ÙŠØ·Ø© ØªÙ‚Ù„Ù„ Ø§Ù„Ø§Ø­ØªÙƒØ§ÙƒØ§Øª Ø§Ù„ÙŠÙˆÙ…ÙŠØ©,Ø¨Ø¯ÙˆÙ† ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¨ÙŠØª Ø¥Ù„Ù‰ Ù†Ø¸Ø§Ù… Ù…Ù‡Ø§Ù….",
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


