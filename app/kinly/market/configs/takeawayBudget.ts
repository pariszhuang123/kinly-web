import { ScenarioConfig } from "../ScenarioLandingClient";
import { EsCopy } from "./shared/es";

export const takeawayBudgetConfig: ScenarioConfig = {
  pageKey: "kinly_market_takeaway_budget",
  recognition: {
    heading: "Eat well on a budget without flat tension.",
    subtitle: "Takeaway nights do not have to mean drama.",
    body: "Kinly keeps plans, turns, and paybacks visible so no one feels taken for granted.",
  },
  hero: {
    headline: "A calmer way to plan cheap eats together.",
    subhead: "Plan fish and chips, kebabs, or cheap noodles without guesswork or guilt.",
    body: "See tonight's plan, who is covering it, and what happens if plans change. No pressure tactics, no chasing.",
    ctaHeading: "Plan your next cheap feed",
    privacyNote: "Private by default. No ads. No surveillance. No payment is taken inside Kinly.",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Tonight",
      headline: "What is the move",
      copy: "Cheap options, who is in, and whose turn it is.",
      footer: "If someone cannot cover it, Kinly reassigns without blame.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Switch",
      headline: "Swap turns fast",
      copy: "Reassign buying or pickup when shifts change or money is tight.",
      footer: "No streaks, no scorekeeping.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "Rules for cheap nights",
      copy: "Agree price caps, sides, and timing that work for everyone.",
      footer: "House rules and shared costs in one calm place.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],
  chips: [
    "We default to fish and chips because it is simple, not because it is always fair.",
    "Decide who buys this week without awkwardness.",
    "Keep a shared list of $10 feeds that work for everyone.",
    "No one gets stuck paying twice because someone forgot.",
  ],
  rolePoints: [
    "Surfaces low-cost plans before everyone is hungry.",
    "Keeps turns visible so it feels fair without nagging.",
  ],
  formingPoints: [
    "People come and go each term - Kinly keeps the context.",
    "Late shifts or tight weeks are normal, not a failure.",
  ],
  audience: ["Students and roommates planning cheap takeaway nights.", "Shared homes where money is tight this week."],
  notList: ["Not a budgeting lecture.", "Not a leaderboard or debt collector.", "Not a chore chart."],
  weekly: {
    intro: "Kinly moves at a weekly rhythm to keep things human-paced.",
    points: [
      "Check in weekly, not daily - no streaks to maintain.",
      "Reflections are for understanding, not grading anyone.",
      "Plans can change without drama when the budget is tight.",
    ],
  },
  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
    ctaLabel: "Express interest for your region.",
  },
  defaultLocale: "en",
  translations: {
    es: {
      recognition: {
        heading: "Comer bien con poco sin tensiones en el piso.",
        subtitle: "Las noches de comida para llevar no tienen que ser drama.",
        body: "Kinly muestra planes, turnos y reembolsos para que nadie se sienta aprovechado.",
      },
      hero: {
        headline: "Una forma tranquila de planear comidas baratas juntos.",
        subhead: "Planifica fish and chips, kebab o fideos baratos sin adivinar ni sentir culpa.",
        body: "Mira el plan de esta noche, quien paga y que pasa si cambia. Sin presion ni persecucion.",
        ctaHeading: "Planea tu proxima comida barata",
        privacyNote: "Privado por defecto. Sin anuncios. Kinly no cobra pagos dentro de la app.",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Esta noche",
          headline: "Cual es el plan",
          copy: "Opciones baratas, quien se apunta y a quien le toca.",
          footer: "Si alguien no puede pagar, Kinly reasigna sin culpas.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Cambiar",
          headline: "Cambia turnos rapido",
          copy: "Reasigna pago o recogida cuando cambian turnos o el dinero es justo.",
          footer: "Sin rachas ni marcadores.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Normas",
          headline: "Reglas para noches baratas",
          copy: "Acordar topes de precio, guarniciones y horarios que sirvan a todos.",
          footer: "Reglas y costes compartidos en un solo lugar tranquilo.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
        },
      ] satisfies EsCopy["screens"],
      chips: [
        "Elegimos fish and chips porque es facil, no siempre justo.",
        "Decidir quien paga esta semana sin incomodidad.",
        "Lista compartida de comidas de $10 que gustan a todos.",
        "Nadie paga dos veces porque alguien olvido.",
      ],
      rolePoints: [
        "Muestra planes baratos antes de que llegue el hambre.",
        "Mantiene visibles los turnos sin reganar.",
      ],
      formingPoints: [
        "Gente entra y sale cada semestre - Kinly guarda el contexto.",
        "Turnos tarde o semanas ajustadas son normales, no fallos.",
      ],
      audience: [
        "Estudiantes y compis de piso planeando cenas baratas.",
        "Casas compartidas con dinero justo esta semana.",
      ],
      notList: ["No es una clase de finanzas.", "No es marcador ni cobrador.", "No es un cuadro de tareas."],
      weekly: {
        intro: "Kinly usa un ritmo semanal para mantener lo humano primero.",
        points: [
          "Revisa cada semana, no cada dia - sin rachas.",
          "Reflexiones para entender, no para juzgar.",
          "Los planes pueden cambiar sin drama cuando el dinero es justo.",
        ],
      },
      availability: {
        body:
          "Kinly esta disponible en Nueva Zelanda y Singapur. Te avisaremos cuando abra en tu region.",
        ctaLabel: "Apuntate para tu region.",
      },
    },
  },
};
