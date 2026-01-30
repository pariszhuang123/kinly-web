import { ScenarioConfig } from "../ScenarioLandingClient";
import { EsCopy } from "./shared/es";

export const freshersConfig: ScenarioConfig = {
  pageKey: "kinly_market_freshers",
  recognition: {
    heading: "Move-in chaos without the tension.",
    subtitle: "Keep the flat calm while everyone figures things out.",
    body: "Kinly makes norms and shared plans visible so first-year flats stay kind, even when plans change.",
  },
  hero: {
    headline: "A calmer way to live together at uni.",
    subhead: "See what the flat needs before it turns into drama.",
    body: "Late labs, early lectures, and new roommates are messy. Kinly shows tonight's needs without pressure, scoring, or nagging.",
    ctaHeading: "Start your first-year flat calm",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Quiet hours for exam weeks, bins before pickup, who is hosting tonight.",
      footer: "Things to do and notice without blame.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Switch",
      headline: "Swap turns without awkwardness",
      copy: "If someone is on a late shift or out of cash this week, reassign quietly.",
      footer: "You are always in control - nothing is locked in.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "House rules everyone sees",
      copy: "Quiet hours, guests, cleaning standards, and shared costs in one calm place.",
      footer: "No surprises, no chore charts.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],
  chips: [
    "We never agreed on cleaning rules.",
    "Exam weeks need quiet without resentment.",
    "Guests policy is fuzzy and causes friction.",
    "We care about each other but hate chore charts.",
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
  weekly: {
    intro: "Kinly uses a weekly rhythm so you can focus on classes without streak anxiety.",
    points: [
      "Check in weekly, not daily - no streaks to maintain.",
      "Reflections are for understanding, not grading anyone.",
      "Kinly never forces conversations - it helps you decide when to talk.",
    ],
  },
  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },
  defaultLocale: "en",
  translations: {
    es: {
      recognition: {
        heading: "Caos de mudanza sin tension.",
        subtitle: "Mantengan el piso tranquilo mientras todos se acomodan.",
        body: "Kinly hace visibles las normas y planes compartidos para que los pisos de primer año sigan amables, incluso si los planes cambian.",
      },
      hero: {
        headline: "Una forma mas tranquila de vivir juntos en la uni.",
        subhead: "Ve lo que necesita el piso antes de que se vuelva drama.",
        body: "Laboratorios tarde, clases temprano y nuevos compis son un lio. Kinly muestra lo de hoy sin presion, puntajes ni reganos.",
        ctaHeading: "Empieza tu piso de primer año en calma",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "Que necesita atencion",
          copy: "Horas de silencio en examenes, sacar basura, quien recibe visitas.",
          footer: "Cosas por hacer o notar sin culpas.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Cambiar",
          headline: "Intercambia turnos sin incomodidad",
          copy: "Si alguien tiene turno tarde o poco dinero esta semana, reasigna en silencio.",
          footer: "Siempre en control - nada queda fijo.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Casa",
          headline: "Reglas que todos ven",
          copy: "Silencio, visitas, estandares de limpieza y gastos compartidos en un solo lugar.",
          footer: "Sin sorpresas, sin cuadros de tareas.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
        },
      ] satisfies EsCopy["screens"],
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
      weekly: {
        intro: "Kinly usa un ritmo semanal para que te enfoques en clases sin ansiedad de rachas.",
        points: [
          "Revisa semanalmente, no a diario - sin rachas que mantener.",
          "Reflexiones para entender, no para juzgar.",
          "Kinly nunca fuerza conversaciones - te ayuda a decidir cuando hablar.",
        ],
      },
      availability: {
        body: "Kinly esta disponible en Nueva Zelanda y Singapur. Te avisaremos cuando abra en tu region.",
      },
    },
  },
};
