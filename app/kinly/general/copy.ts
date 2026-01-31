type LandingScreen = {
  title: string;
  eyebrow: string;
  headline: string;
  copy: string;
  footer: string;
  image: string;
};

export type LandingCopy = {
  recognition: {
    heading: string;
    subhead: string;
    body: string;
  };
  hero: {
    headline: string;
    subhead: string;
    body: string;
    ctaHeading: string;
    privacyNote: string;
  };
  storeLabels: { app: string; play: string };
  howHeading: string;
  howSubhead: string;
  screens: LandingScreen[];
  chipsHeading: string;
  chips: string[];
  roleHeading: string;
  rolePoints: string[];
  formingHeading: string;
  formingPoints: string[];
  audienceHeading: string;
  audience: string[];
  notHeading: string;
  notList: string[];
  weeklyHeading: string;
  weeklyIntro: string;
  weeklyPoints: string[];
  availabilityHeading: string;
  availabilityBody: string;
  availabilityCta: string;
  storeSectionHeading: string;
  storeSectionSubhead: string;
};

const LANDING_COPY_EN: LandingCopy = {
  recognition: {
    heading: "Shared living gets heavy.",
    subhead: "Even when no one is doing anything wrong.",
    body: "Kinly helps you notice what the home needs — before anyone feels blamed.",
  },
  hero: {
    headline: "A calmer way to live together.",
    subhead: "A calm, shared place to notice how the home feels before anyone asks you to do anything.",
    body: "You open Kinly to see what matters in the home right now — without pressure, chasing, or judgement.",
    ctaHeading: "Ready to start",
    privacyNote: "Private by default. No ads. No surveillance.",
  },
  storeLabels: {
    app: "Download on the App Store",
    play: "Get it on Google Play",
  },
  howHeading: "How Kinly works",
  howSubhead: "Nothing is shared without intent.",
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs your attention",
      copy: "Things to do, things to notice, and gentle next steps",
      footer: "Today's tasks, unfinished items, and updates from your home.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Make changes",
      headline: "Change how things work",
      copy: "Edit, assign, comment on, or remove flows and shares",
      footer: "You're always in control - nothing is locked in.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "What matters in our home",
      copy: "Moments, norms, and shared references",
      footer: "Gratitude, house vibe, and important notes - shared by everyone.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
    },
  ],
  chipsHeading: "Does this sound like your place?",
  chips: [
    "We care about each other, but chore charts make things tense.",
    "We want to know how the house feels without assigning blame.",
    "We avoid drama, but we still want to be seen.",
    "If you want streaks, scores, or accountability pressure — Kinly isn't that.",
  ],
  roleHeading: "Kinly role: reflection first",
  rolePoints: [
    "Reflects how the home is feeling before asking for action.",
    "Makes care visible without assigning responsibility.",
  ],
  formingHeading: "If your home is still forming",
  formingPoints: [
    "Uncertainty is normal — not a failure.",
    "Kinly treats figuring it out as healthy, not something to fix.",
  ],
  audienceHeading: "Who this is for",
  audience: [
    "Flatmates who did not choose each other but want calm.",
    "Homes adjusting to change or new rhythms.",
    "People who care but do not want pressure tactics.",
  ],
  notHeading: "Kinly is not...",
  notList: ["...a surveillance tool.", "...a scorecard or leaderboard.", "...a chore boss."],
  weeklyHeading: "Weekly reflection, human-paced",
  weeklyIntro: "Kinly moves on weekly rhythm. It notices the home mood without streaks, checklists, or pressure.",
  weeklyPoints: [
    "You can check in weekly, not daily. No streaks, no pressure to keep up.",
    "Reflections are for understanding, not grading.",
    "Kinly never forces conversations — it helps you understand before you decide whether to talk.",
  ],
  availabilityHeading: "Availability",
  availabilityBody:
    "Kinly is currently available in New Zealand and Singapore. We'll email you when Kinly opens in your area — no spam.",
  availabilityCta: "Express interest when Kinly is available in your area.",
  storeSectionHeading: "When you are ready",
  storeSectionSubhead: "Kinly lives in the app — start on iOS or Android.",
};

const LANDING_COPY_OVERRIDES: Record<string, Partial<LandingCopy>> = {
  es: {
    recognition: {
      heading: "Vivir juntos puede pesar.",
      subhead: "Incluso cuando nadie hace nada mal.",
      body: "Kinly te ayuda a notar lo que necesita la casa antes de que alguien se sienta culpado.",
    },
    hero: {
      headline: "Una forma más tranquila de vivir juntos.",
      subhead: "Un lugar compartido y calmado para notar cómo se siente la casa antes de que te pidan algo.",
      body: "Abres Kinly para ver qué importa en casa ahora mismo, sin presión, persecución ni juicios.",
      ctaHeading: "Listo para empezar",
      privacyNote: "Privado por defecto. Sin anuncios. Sin vigilancia.",
    },
    storeLabels: {
      app: "Descargar en App Store",
      play: "Obtener en Google Play",
    },
    howHeading: "Cómo funciona Kinly",
    howSubhead: "Nada se comparte sin intención.",
    screens: [
      {
        title: "Hoy",
        eyebrow: "Ahora",
        headline: "Qué necesita tu atención",
        copy: "Cosas por hacer, cosas para notar y próximos pasos suaves",
        footer: "Tareas de hoy, pendientes y novedades de tu hogar.",
        image:
          "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
      },
      {
        title: "Gestionar",
        eyebrow: "Cambios",
        headline: "Cambia cómo funcionan las cosas",
        copy: "Editar, asignar, comentar o quitar flujos y compartidos",
        footer: "Siempre tienes el control: nada queda bloqueado.",
        image:
          "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
      },
      {
        title: "Home Hub",
        eyebrow: "Hogar",
        headline: "Lo que importa en nuestra casa",
        copy: "Momentos, normas y referencias compartidas",
        footer: "Gratitud, ambiente de la casa y notas importantes, compartido por todos.",
        image:
          "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
      },
    ],
    chipsHeading: "¿Suena como tu casa?",
    chips: [
      "Nos importamos, pero las tablas de tareas tensan todo.",
      "Queremos saber cómo se siente la casa sin culpar a nadie.",
      "Evitamos el drama, pero igual queremos ser vistos.",
      "Si buscas rachas, puntajes o presión — Kinly no es eso.",
    ],
    roleHeading: "Rol de Kinly: primero reflexión",
    rolePoints: [
      "Refleja cómo se siente la casa antes de pedir acción.",
      "Hace visible el cuidado sin asignar responsabilidad.",
    ],
    formingHeading: "Si tu hogar aún se está formando",
    formingPoints: [
      "La incertidumbre es normal, no un fallo.",
      "Kinly trata el proceso de descubrirlo como algo sano, no algo que arreglar.",
    ],
    audienceHeading: "Para quién es",
    audience: [
      "Compañeros de piso que no se eligieron pero quieren calma.",
      "Hogares ajustándose a cambios o nuevos ritmos.",
      "Personas que cuidan pero no quieren tácticas de presión.",
    ],
    notHeading: "Kinly no es...",
    notList: ["...una herramienta de vigilancia.", "...un marcador o ranking.", "...un jefe de tareas."],
    weeklyHeading: "Reflexión semanal, a ritmo humano",
    weeklyIntro: "Kinly sigue un ritmo semanal. Nota el ánimo del hogar sin rachas, listas ni presión.",
    weeklyPoints: [
      "Puedes revisar semanalmente, no a diario. Sin rachas ni presión por mantenerlas.",
      "Las reflexiones son para entender, no para calificar.",
      "Kinly nunca fuerza conversaciones; te ayuda a entender antes de decidir hablar.",
    ],
    availabilityHeading: "Disponibilidad",
    availabilityBody:
      "Kinly está disponible en Nueva Zelanda y Singapur. Te avisaremos cuando abra en tu zona; sin spam.",
    availabilityCta: "Avísame cuando Kinly esté disponible en mi zona.",
    storeSectionHeading: "Cuando estés listo",
    storeSectionSubhead: "Kinly vive en la app — empieza en iOS o Android.",
  },
};

export function resolveLandingCopy(lang: string | null): LandingCopy {
  const key = lang?.split("-")[0]?.toLowerCase() ?? "en";
  const overrides = LANDING_COPY_OVERRIDES[key] ?? null;
  return overrides ? { ...LANDING_COPY_EN, ...overrides } : LANDING_COPY_EN;
}
