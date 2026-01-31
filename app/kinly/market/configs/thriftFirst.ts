import { ScenarioConfig } from "../ScenarioLandingClient";
import { LocaleCopy } from "./shared/locale";

export const thriftFirstConfig: ScenarioConfig = {
  pageKey: "kinly_market_thrift_first",
  recognition: {
    heading: "Budget choices are easier when the house is aligned.",
    subtitle: "Second-hand first shouldn’t create second thoughts at home.",
    body: "Kinly keeps wishlists, pickups, and shared standards clear so everyone feels good about the decision.",
  },
  hero: {
    headline: "Thrift finds, calmer shared living.",
    subhead: "Shared lists, quick yes/no, and smooth pickups — without awkward group chats.",
    body: "See what the home needs, who can grab it, and the price/condition standards you agreed on. No pressure. No chasing.",
    ctaHeading: "Plan a calm pickup",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What does the house need next?",
      copy: "Furniture, kitchen basics, and small fixes — in one shared list.",
      footer: "Clear must-haves vs nice-to-haves before anyone buys.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Decide",
      headline: "Claim or pass fast",
      copy: "Quick yes/no on a listing, and reassign pickup when plans change.",
      footer: "If someone can’t go, Kinly adjusts without guilt or blame.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "Agree the standards once",
      copy: "Condition, price caps, and deal-breakers the whole house can see.",
      footer: "Shared understanding for buying used — so it stays calm.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],
  chips: [
    "Great finds can turn into clutter without shared agreement.",
    "Prices and quality vary — clarity helps everyone feel okay about it.",
    "Pickups fall through when shifts change — plans need to flex.",
    "Keep decisions calm so nobody feels pushed into a buy.",
  ],
  rolePoints: [
    "Makes shared decisions visible before anyone commits.",
    "Keeps pickups and responsibility clear without nagging.",
  ],
  formingPoints: [
    "New flatmates each term still stay in sync.",
    "Uncertainty is normal — Kinly treats it as healthy, not as failure.",
  ],
  audience: [
    "New shared homes setting up on a budget.",
    "Student flats coordinating second-hand pickups and marketplace runs.",
  ],
  notList: ["Not a marketplace tool.", "Not a scorecard or leaderboard.", "Not a chore boss."],
  weekly: {
    intro: "Kinly uses a weekly rhythm so decisions feel calm, not frantic.",
    points: [
      "Check in weekly so everyone sees what matters next.",
      "Reflections are for understanding, not judging purchases.",
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
        heading: "Las decisiones con poco presupuesto son más fáciles cuando el piso está alineado.",
        subtitle: "Ir a segunda mano no debería traer dudas en casa.",
        body: "Kinly deja claras las listas, recogidas y estándares compartidos para que todos se sientan bien con la decisión.",
      },
      hero: {
        headline: "Hallazgos de segunda mano, convivencia más tranquila.",
        subhead: "Listas compartidas, sí/no rápido y recogidas sin caos — sin chats incómodos.",
        body: "Ve qué necesita la casa, quién puede recogerlo y los topes de precio/condición acordados. Sin presión. Sin persecución.",
        ctaHeading: "Planear una recogida tranquila",
      },
      screens: [
        {
          title: "Hoy",
          eyebrow: "Ahora",
          headline: "¿Qué necesita la casa ahora?",
          copy: "Muebles, básicos de cocina y pequeños arreglos — en una lista compartida.",
          footer: "Imprescindibles vs opcionales antes de que alguien compre.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
        },
        {
          title: "Gestionar",
          eyebrow: "Decidir",
          headline: "Apúntate o pasa rápido",
          copy: "Sí/no rápido a un anuncio y reasigna la recogida si cambian los planes.",
          footer: "Si alguien no puede ir, Kinly ajusta sin culpa ni reproches.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
        },
        {
          title: "Hub",
          eyebrow: "Normas compartidas",
          headline: "Acordar estándares una vez",
          copy: "Condición, topes de precio y líneas rojas visibles para todos.",
          footer: "Entendimiento compartido para comprar usado — y mantener la calma.",
          image:
            "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
        },
      ],
      chips: [
        "Un buen hallazgo puede volverse trasto sin acuerdo compartido.",
        "Precio y calidad varían — la claridad ayuda a sentirse bien.",
        "Las recogidas fallan cuando cambian los turnos — hay que ser flexible.",
        "Mantén la decisión tranquila para que nadie se sienta presionado.",
      ],
      rolePoints: [
        "Hace visibles las decisiones antes de comprometerse.",
        "Deja claras las recogidas y responsabilidades sin regañar.",
      ],
      formingPoints: [
        "Nuevos compis cada semestre siguen al día.",
        "La incertidumbre es normal — Kinly la trata como sana, no como fallo.",
      ],
      audience: [
        "Nuevas casas compartidas montando hogar con poco presupuesto.",
        "Pisos de estudiantes coordinando recogidas y marketplace.",
      ],
      notList: ["No es una herramienta de marketplace.", "No es marcador ni ranking.", "No es un jefe de tareas."],
      weekly: {
        intro: "Kinly usa un ritmo semanal para decisiones tranquilas, no frenéticas.",
        points: [
          "Revisa cada semana para ver qué importa ahora.",
          "Reflexiones para entender, no para juzgar compras.",
          "Puedes pausar, cambiar o pasar sin presión.",
        ],
        heading: "Reflexión semanal, a ritmo humano",
      },
      sectionHeadings: {
        howItWorks: "Cómo funciona Kinly",
        howItWorksSubtitle: "Nada se comparte sin intención.",
        soundsLikeYou: "¿Te suena familiar?",
        roleHeading: "El rol de Kinly: reflexión primero",
        formingHeading: "Si tu hogar aún se está formando",
        audienceHeading: "Para quién es esto",
        notListHeading: "Kinly no es...",
        readyHeading: "Cuando estés listo",
        readySubtitle: "Kinly vive en la app - empieza en iOS o Android.",
      },
      availability: {
        body: "Kinly está disponible en Nueva Zelanda y Singapur. Te avisaremos cuando abra en tu región.",
      },
    } satisfies LocaleCopy,
  },
};
