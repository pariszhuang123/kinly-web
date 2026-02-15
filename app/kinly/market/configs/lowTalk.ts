import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const lowTalkConfig: ScenarioConfig = {
  pageKey: "kinly_market_low_talk",
  recognition: {
    heading: "Signals over speeches.",
    subtitle: "Keep the place clear without long conversations.",
    body: "Kinly gives calm signals about what the home needs so no one has to rally a meeting or deliver a lecture.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For low-talk homes, it keeps expectations clear without forcing group chats or sit-down talks.",
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
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Tweak without debate",
      copy: "Shift turns or pause a task when someone is slammed - no guilt trips.",
      footer: "Everyone stays informed without reminders.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "Shared clarity in one place",
      copy: "Quiet hours, guest signals, and quick norms that keep the vibe steady.",
      footer: "Signals stay visible; no speeches required.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared flows",
      benefit: "Add context and photos so tasks stay clear without long explanations.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Quickly add what is needed with notes and photos so shopping stays coordinated.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep splits clear with amount, date, and context in one calm view.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use simple weekly check-ins so concerns surface early without big talks.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "Need clarity without group-chat essays.",
    "No one wants to nag - or be nagged.",
    "We prefer signals to sit-down talks.",
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
        "Kinly es una app de convivencia para quienes viven juntos. Para casas de pocas palabras mantiene las expectativas claras sin forzar chats largos ni reuniones.",
      recognition: {
        heading: "SeÃ±ales sin discursos.",
        subtitle: "MantÃ©n claridad sin conversaciones largas.",
        body: "Kinly da seÃ±ales tranquilas sobre lo que la casa necesita sin convocar reuniones ni sermones.",
      },
      hero: {
        headline: "Claridad sin hablar de mÃ¡s.",
        subhead: "Ve quÃ© necesita atenciÃ³n y quÃ© puede esperar, sin novelas en el chat.",
        body: "Kinly muestra las seÃ±ales importantes y elimina la presiÃ³n de â€œhay que hablarloâ€ cada vez. Sin marcadores, sin vigilancia, sin culpa.",
        ctaHeading: "Recibe la seÃ±al, evita el discurso",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "SeÃ±al",
          headline: "QuÃ© necesita atenciÃ³n ahora",
          copy: "Avisos ligeros para ruido, visitas o un reset rÃ¡pido antes del dÃ­a.",
          footer: "Accionable sin convertirse en reuniÃ³n.",
          image:
            LANDING_SCREEN_ASSETS.es.today,
        },
        {
          title: "Gestionar",
          eyebrow: "Ajustar",
          headline: "Ajusta sin debate",
          copy: "Cambia turnos o pausa tareas cuando alguien estÃ¡ a tope, sin culpas.",
          footer: "Todos informados sin recordatorios.",
          image:
            LANDING_SCREEN_ASSETS.es.manage,
        },
        {
          title: "Hub",
          eyebrow: "Referencia",
          headline: "Claridad compartida en un lugar",
          copy: "Horas de silencio, seÃ±ales de visitas y normas rÃ¡pidas que mantienen el ambiente estable.",
          footer: "Las seÃ±ales siguen visibles; no hacen falta discursos.",
          image:
            LANDING_SCREEN_ASSETS.es.hub,
        },
      ],
      chips: [
        "Claridad sin novelas en el chat.",
        "Nadie quiere regaÃ±ar ni ser regaÃ±ado.",
        "Preferimos seÃ±ales a largas charlas.",
      ],
      rolePoints: [
        "Muestra lo importante con seÃ±ales suaves, no discursos.",
        "Mantiene lo justo sin culpas ni marcadores.",
      ],
      formingPoints: [
        "La gente rota; Kinly mantiene las seÃ±ales compartidas.",
        "Semanas ocupadas son normales; pausar no es fallo.",
      ],
      audience: [
        "Casas que buscan claridad tranquila sin largas conversaciones.",
        "Quienes prefieren seÃ±ales en vez de recordatorios.",
      ],
      notList: ["No es un marcador.", "No es vigilancia.", "No es para regaÃ±ar."],
      weekly: {
        intro: "Kinly usa ritmo semanal para que las seÃ±ales sigan calmadas, no constantes.",
        points: [
          "Revisa cada semana - sin rachas, sin presiÃ³n.",
          "Reflexiones para entender, no para calificar.",
          "Pausa o ajusta una semana sin culpa.",
        ],
        heading: "ReflexiÃ³n semanal, a ritmo humano",
      },
      toolsIntro:
        "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricciÃ³n diaria .  sin convertir la vida compartida en un sistema de tareas.",
      sectionHeadings: {
        howItWorks: "CÃ³mo funciona Kinly",
        soundsLikeYou: "Â¿Te suena familiar?",
        roleHeading: "El rol de Kinly: reflexiÃ³n primero",
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
        "ÙƒÙŠÙ†Ù„ÙŠ Ù‡Ùˆ ØªØ·Ø¨ÙŠÙ‚ Ù„Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ ØµÙÙ…Ù… Ù„Ù…Ù† ÙŠØ¹ÙŠØ´ÙˆÙ† Ù…Ø¹Ø§Ù‹. Ù„Ù„Ù…Ù†Ø§Ø²Ù„ Ù‚Ù„ÙŠÙ„Ø© Ø§Ù„ÙƒÙ„Ø§Ù… ÙŠØ¨Ù‚ÙŠ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª ÙˆØ§Ø¶Ø­Ø© Ø¨Ø¯ÙˆÙ† ÙØ±Ø¶ Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ø·ÙˆÙŠÙ„Ø© Ø£Ùˆ Ø¯Ø±Ø¯Ø´Ø§Øª Ø¬Ù…Ø§Ø¹ÙŠØ©.",
      recognition: {
        heading: "Ø¥Ø´Ø§Ø±Ø§Øª Ø¨Ø¯Ù„Ø§Ù‹ Ù…Ù† Ø®Ø·Ø§Ø¨Ø§Øª.",
        subtitle: "Ø­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø§Ù„ÙˆØ¶ÙˆØ­ Ø¨Ø¯ÙˆÙ† Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ø·ÙˆÙŠÙ„Ø©.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¹Ø·ÙŠ Ø¥Ø´Ø§Ø±Ø§Øª Ù‡Ø§Ø¯Ø¦Ø© Ø¹Ù…Ø§ ÙŠØ­ØªØ§Ø¬Ù‡ Ø§Ù„Ù…Ù†Ø²Ù„ ÙÙ„Ø§ Ø£Ø­Ø¯ ÙŠØ­ØªØ§Ø¬ Ù„Ø¹Ù‚Ø¯ Ø§Ø¬ØªÙ…Ø§Ø¹ Ø£Ùˆ Ø¥Ù„Ù‚Ø§Ø¡ Ù…Ø­Ø§Ø¶Ø±Ø©.",
      },
      hero: {
        headline: "ÙˆØ¶ÙˆØ­ Ø¨Ø¯ÙˆÙ† Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ø·ÙˆÙŠÙ„Ø©.",
        subhead: "Ø§Ø¹Ø±Ù Ù…Ø§ ÙŠØ­ØªØ§Ø¬ Ø¥Ù†Ø¬Ø§Ø²Ù‡ ÙˆÙ…Ø§ ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠÙ†ØªØ¸Ø±ØŒ Ø¨Ø¯ÙˆÙ† Ù…Ù‚Ø§Ù„Ø§Øª ÙÙŠ Ø§Ù„Ø¯Ø±Ø¯Ø´Ø© Ø§Ù„Ø¬Ù…Ø§Ø¹ÙŠØ©.",
        body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠÙØ¸Ù‡Ø± Ø§Ù„Ø¥Ø´Ø§Ø±Ø§Øª Ø§Ù„Ù…Ù‡Ù…Ø© ÙˆÙŠØ²ÙŠÙ„ Ø§Ù„Ø¶ØºØ· Ù„Ù€â€œÙ…Ù†Ø§Ù‚Ø´Ø© Ø§Ù„Ø£Ù…ÙˆØ±â€ ÙƒÙ„ Ù…Ø±Ø©. Ù„Ø§ Ù„ÙˆØ­Ø§Øª Ù†Ù‚Ø§Ø·ØŒ Ù„Ø§ Ù…Ø±Ø§Ù‚Ø¨Ø©ØŒ Ù„Ø§ Ø°Ù†Ø¨.",
        ctaHeading: "Ø§Ø­ØµÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ø¥Ø´Ø§Ø±Ø©ØŒ ØªØ¬Ø§ÙˆØ² Ø§Ù„Ø®Ø·Ø§Ø¨",
      },
      screens: [
        {
          title: "Ø§Ù„ÙŠÙˆÙ…",
          eyebrow: "Ø¥Ø´Ø§Ø±Ø©",
          headline: "Ù…Ø§ ÙŠØ­ØªØ§Ø¬ Ø§Ù†ØªØ¨Ø§Ù‡ Ø§Ù„Ø¢Ù†",
          copy: "ØªÙ†Ø¨ÙŠÙ‡Ø§Øª Ø®ÙÙŠÙØ© Ù„Ù„Ø¶ÙˆØ¶Ø§Ø¡ØŒ Ø§Ù„Ø¶ÙŠÙˆÙØŒ Ø£Ùˆ Ø¥Ø¹Ø§Ø¯Ø© Ø¶Ø¨Ø· Ø³Ø±ÙŠØ¹Ø© Ù‚Ø¨Ù„ Ø¨Ø¯Ø¡ Ø§Ù„ÙŠÙˆÙ….",
          footer: "Ù‚Ø§Ø¨Ù„ Ù„Ù„ØªÙ†ÙÙŠØ° Ø¨Ø¯ÙˆÙ† Ø§Ù„ØªØ­ÙˆÙ„ Ù„Ø§Ø¬ØªÙ…Ø§Ø¹.",
          image:
            LANDING_SCREEN_ASSETS.ar.today,
        },
        {
          title: "Ø¥Ø¯Ø§Ø±Ø©",
          eyebrow: "ØªØ¹Ø¯ÙŠÙ„",
          headline: "Ø¹Ø¯Ù‘Ù„ Ø¨Ø¯ÙˆÙ† Ù†Ù‚Ø§Ø´",
          copy: "Ø¨Ø¯Ù‘Ù„ Ø§Ù„Ø£Ø¯ÙˆØ§Ø± Ø£Ùˆ Ø£ÙˆÙ‚Ù Ù…Ù‡Ù…Ø© Ø¹Ù†Ø¯Ù…Ø§ ÙŠÙƒÙˆÙ† Ø´Ø®Øµ Ù…Ø´ØºÙˆÙ„ - Ø¨Ø¯ÙˆÙ† ØªØ£Ù†ÙŠØ¨.",
          footer: "Ø§Ù„Ø¬Ù…ÙŠØ¹ Ø¹Ù„Ù‰ Ø¹Ù„Ù… Ø¨Ø¯ÙˆÙ† ØªØ°ÙƒÙŠØ±Ø§Øª.",
          image:
            LANDING_SCREEN_ASSETS.ar.manage,
        },
        {
          title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ù†Ø²Ù„",
          eyebrow: "Ù…Ø±Ø¬Ø¹",
          headline: "ÙˆØ¶ÙˆØ­ Ù…Ø´ØªØ±Ùƒ ÙÙŠ Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯",
          copy: "Ø³Ø§Ø¹Ø§Øª Ø§Ù„Ù‡Ø¯ÙˆØ¡ØŒ Ø¥Ø´Ø§Ø±Ø§Øª Ø§Ù„Ø¶ÙŠÙˆÙØŒ ÙˆÙ‚ÙˆØ§Ø¹Ø¯ Ø³Ø±ÙŠØ¹Ø© ØªØ­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø¬ÙˆØ§Ø¡ Ù…Ø³ØªÙ‚Ø±Ø©.",
          footer: "Ø§Ù„Ø¥Ø´Ø§Ø±Ø§Øª ØªØ¨Ù‚Ù‰ Ù…Ø±Ø¦ÙŠØ©Ø› Ù„Ø§ Ø­Ø§Ø¬Ø© Ù„Ø®Ø·Ø§Ø¨Ø§Øª.",
          image:
            LANDING_SCREEN_ASSETS.ar.hub,
        },
      ],
      chips: [
        "Ù†Ø­ØªØ§Ø¬ ÙˆØ¶ÙˆØ­ Ø¨Ø¯ÙˆÙ† Ù…Ù‚Ø§Ù„Ø§Øª ÙÙŠ Ø§Ù„Ø¯Ø±Ø¯Ø´Ø©.",
        "Ù„Ø§ Ø£Ø­Ø¯ ÙŠØ±ÙŠØ¯ Ø£Ù† ÙŠØ²Ø¹Ø¬ Ø£Ùˆ ÙŠÙØ²Ø¹ÙŽØ¬.",
        "Ù†ÙØ¶Ù„ Ø§Ù„Ø¥Ø´Ø§Ø±Ø§Øª Ø¹Ù„Ù‰ Ø§Ù„Ø¬Ù„Ø³Ø§Øª Ø§Ù„Ø·ÙˆÙŠÙ„Ø©.",
      ],
      rolePoints: [
        "ÙŠÙØ¸Ù‡Ø± Ù…Ø§ ÙŠÙ‡Ù… Ø¨Ø¥Ø´Ø§Ø±Ø§Øª Ù„Ø·ÙŠÙØ©ØŒ Ù„ÙŠØ³ Ø®Ø·Ø§Ø¨Ø§Øª.",
        "ÙŠØ¨Ù‚ÙŠ Ø§Ù„Ø®Ø·Ø· Ø¹Ø§Ø¯Ù„Ø© Ø¨Ø¯ÙˆÙ† Ù„ÙˆÙ… Ø£Ùˆ Ù„ÙˆØ­Ø§Øª Ù†Ù‚Ø§Ø· Ø£Ùˆ Ø°Ù†Ø¨.",
      ],
      formingPoints: [
        "Ø§Ù„Ù†Ø§Ø³ ÙŠØ£ØªÙˆÙ† ÙˆÙŠØ°Ù‡Ø¨ÙˆÙ† - ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø§Ù„Ø¥Ø´Ø§Ø±Ø§Øª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© Ø«Ø§Ø¨ØªØ©.",
        "Ø§Ù„Ø£Ø³Ø§Ø¨ÙŠØ¹ Ø§Ù„Ù…Ø´ØºÙˆÙ„Ø© ØªØ­Ø¯Ø«Ø› Ø¥ÙŠÙ‚Ø§Ù Ø§Ù„Ù…Ù‡Ø§Ù… Ø·Ø¨ÙŠØ¹ÙŠØŒ Ù„ÙŠØ³ ÙØ´Ù„Ø§Ù‹.",
      ],
      audience: [
        "Ù…Ù†Ø§Ø²Ù„ ØªØ±ÙŠØ¯ ÙˆØ¶ÙˆØ­Ø§Ù‹ Ù‡Ø§Ø¯Ø¦Ø§Ù‹ Ø¨Ø¯ÙˆÙ† Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ø·ÙˆÙŠÙ„Ø©.",
        "Ù…Ø´Ø§Ø±ÙƒÙˆÙ† Ù…Ø´ØºÙˆÙ„ÙˆÙ† ÙŠÙØ¶Ù„ÙˆÙ† Ø§Ù„Ø¥Ø´Ø§Ø±Ø§Øª Ø¹Ù„Ù‰ Ø§Ù„ØªØ°ÙƒÙŠØ±Ø§Øª.",
      ],
      notList: ["Ù„ÙŠØ³ Ù„ÙˆØ­Ø© Ù†Ù‚Ø§Ø·.", "Ù„ÙŠØ³ Ù…Ø±Ø§Ù‚Ø¨Ø©.", "Ù„ÙŠØ³ Ø£Ø¯Ø§Ø© Ø¥Ø²Ø¹Ø§Ø¬."],
      weekly: {
        intro: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¹Ù…Ù„ Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø£Ø³Ø¨ÙˆØ¹ÙŠ ÙØªØ¨Ù‚Ù‰ Ø§Ù„Ø¥Ø´Ø§Ø±Ø§Øª Ù‡Ø§Ø¯Ø¦Ø©ØŒ Ù„ÙŠØ³Øª Ù…Ø³ØªÙ…Ø±Ø©.",
        points: [
          "Ø±Ø§Ø¬Ø¹ Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ - Ù„Ø§ Ø³Ù„Ø§Ø³Ù„ØŒ Ù„Ø§ Ø¶ØºØ· Ù„Ù„Ù…ØªØ§Ø¨Ø¹Ø©.",
          "Ø§Ù„ØªØ£Ù…Ù„Ø§Øª Ù„Ù„ÙÙ‡Ù…ØŒ Ù„ÙŠØ³ Ù„ØªÙ‚ÙŠÙŠÙ… Ø£Ø­Ø¯.",
          "Ø£ÙˆÙ‚ÙØŒ Ø¹Ø¯Ù‘Ù„ØŒ Ø£Ùˆ ØªØ®Ø·Ù‰ Ø£Ø³Ø¨ÙˆØ¹Ø§Ù‹ Ø¨Ø¯ÙˆÙ† Ø°Ù†Ø¨.",
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

