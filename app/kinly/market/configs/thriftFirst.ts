import { ScenarioConfig } from "../ScenarioLandingClient";
import { EsCopy } from "./shared/es";

export const thriftFirstConfig: ScenarioConfig = {
  pageKey: "kinly_market_thrift_first",
  recognition: {
    heading: "Stretch every dollar, agree what is worth buying used.",
    subtitle: "Second-hand first does not have to mean second-rate.",
    body: "Kinly keeps wishlists, pickups, and house standards visible so everyone feels good about the buy.",
  },
  hero: {
    headline: "Thrift together without the chaos.",
    subhead: "Shared lists, quick yes/no, and calm pickups for marketplace finds.",
    body: "See what the home needs, who can grab it, and the price caps you agreed on. No pressure, no spam.",
    ctaHeading: "Plan your next pickup",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What is needed next",
      copy: "Chairs, shelves, kitchen basics - in one list.",
      footer: "Know the must-haves versus nice-to-haves.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Decide",
      headline: "Claim or pass fast",
      copy: "Quick yes/no on a listing and reassign pickup without drama.",
      footer: "If someone cannot go, the task reassigns without guilt.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "House rules",
      headline: "Agree the standards",
      copy: "Condition, price caps, and deal-breakers the whole house sees.",
      footer: "Shared rules for buying used so everyone feels good.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],
  chips: [
    "Donations and marketplace finds pile up fast.",
    "Pricing is inconsistent without shared rules.",
    "Volunteers or flatmates vary by day - plans change.",
    "We want good deals without clutter or regret.",
  ],
  rolePoints: [
    "Makes thrift plans visible before anyone buys.",
    "Keeps a calm record of who is in for what.",
  ],
  formingPoints: [
    "New flatmates or volunteers each semester still stay in sync.",
    "Uncertainty is normal - Kinly treats it as healthy, not as failure.",
  ],
  audience: [
    "New share homes setting up on a budget.",
    "Student flats and charity pop-ups planning marketplace runs.",
  ],
  notList: ["Not a bidding bot.", "Not a scorecard or leaderboard.", "Not a chore boss."],
  weekly: {
    intro: "Kinly uses a weekly rhythm so decisions are calm, not frantic.",
    points: [
      "Check in weekly so everyone sees what matters next.",
      "Reflections are for understanding, not grading purchases.",
      "You can pause, change, or pass without pressure.",
    ],
  },
  availability: {
    body: "Kinly is currently available in New Zealand and Singapore. We will email you when Kinly opens in your area.",
  },
  defaultLocale: "en",
  translations: {
    es: {
      recognition: {
        heading: "Estira cada dolar y acuerda que vale la pena comprar usado.",
        subtitle: "Lo de segunda mano no tiene que ser de segunda.",
        body: "Kinly mantiene listas de deseos, recogidas y estandares visibles para que todos esten tranquilos con la compra.",
      },
      hero: {
        headline: "Ahorra juntos sin caos.",
        subhead: "Listas compartidas, si/no rapido y recogidas tranquilas para hallazgos de marketplace.",
        body: "Ve que necesita la casa, quien puede recogerlo y los topes de precio acordados. Sin presion ni spam.",
        ctaHeading: "Planea tu proxima recogida",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "Que se necesita",
          copy: "Sillas, estanterias, basicos de cocina en una lista.",
          footer: "Distingue imprescindibles de opcionales.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Decidir",
          headline: "Apunta o pasa rapido",
          copy: "Si/No rapido a un anuncio y reasigna recogida sin drama.",
          footer: "Si alguien no puede ir, la tarea se reasigna sin culpa.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Reglas",
          headline: "Acordar estandares",
          copy: "Condicion, topes de precio y lineas rojas que ve toda la casa.",
          footer: "Reglas compartidas para comprar usado y sentirse bien.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
        },
      ] satisfies EsCopy["screens"],
      chips: [
        "Donaciones y hallazgos se acumulan rapido.",
        "Los precios son inconsistentes sin reglas compartidas.",
        "Voluntarios o compis cambian cada dia - los planes cambian.",
        "Queremos buenas ofertas sin trastos ni arrepentimientos.",
      ],
      rolePoints: [
        "Hace visibles los planes de segunda mano antes de comprar.",
        "Mantiene un registro tranquilo de quien se apunta a que.",
      ],
      formingPoints: [
        "Nuevos compis o voluntarios cada semestre siguen al dia.",
        "La incertidumbre es normal - Kinly la trata como sana, no como fallo.",
      ],
      audience: [
        "Nuevas casas compartidas armando hogar con poco presupuesto.",
        "Pisos de estudiantes y pop-ups solidarios planificando compras.",
      ],
      notList: ["No es un bot de pujas.", "No es marcador ni ranking.", "No es un jefe de tareas."],
      weekly: {
        intro: "Kinly usa ritmo semanal para decisiones tranquilas, no frenéticas.",
        points: [
          "Revisa cada semana para ver que importa ahora.",
          "Reflexiones para entender, no para juzgar compras.",
          "Puedes pausar, cambiar o pasar sin presion.",
        ],
      },
      availability: {
        body: "Kinly esta disponible en Nueva Zelanda y Singapur. Te avisaremos cuando abra en tu region.",
      },
    },
  },
};
