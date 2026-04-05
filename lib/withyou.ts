export type WithYouPreviewLanguage = "en" | "zh";
export type WithYouPackLanguage = WithYouPreviewLanguage | "ko";
export type WithYouScenarioFamily = "presence" | "social_pull" | "exit_pressure";
export type WithYouPreviewMode = "single_clip" | "timed_sequence";
export type WithYouClipId = "primary" | "stage_1" | "stage_2" | "stage_3";

type LocalizedText = Record<WithYouPreviewLanguage, string>;

type LocalizedLabels = Record<"stage_1" | "stage_2" | "stage_3", LocalizedText>;

export type WithYouScenarioConfig = {
  slug: string;
  pageKey: string;
  scenarioFamily: WithYouScenarioFamily;
  previewMode: WithYouPreviewMode;
  title: LocalizedText;
  problemFraming: LocalizedText;
  previewHeading: LocalizedText;
  previewBody: LocalizedText;
  timedLabels?: LocalizedLabels;
  storeHeading: LocalizedText;
  storeBody: LocalizedText;
  leadHeading: LocalizedText;
  leadBody: LocalizedText;
  leadCta: LocalizedText;
};

export type WithYouManifest = {
  packs: Array<{
    language: WithYouPackLanguage;
    pack_version: string;
    download_url: string;
    bundled: boolean;
    scenarios: Record<
      WithYouScenarioFamily,
      {
        mode: WithYouPreviewMode;
        clips: WithYouClipId[];
      }
    >;
  }>;
  default_language: WithYouPreviewLanguage;
  preview_languages: WithYouPreviewLanguage[];
};

export const WITHYOU_DEFAULT_SLUG = "uber";
export const WITHYOU_PREVIEW_LANGUAGES: WithYouPreviewLanguage[] = ["en", "zh"];
export const WITHYOU_PACK_LANGUAGES: WithYouPackLanguage[] = ["en", "zh", "ko"];
export const WITHYOU_LANGUAGE_STORAGE_KEY = "withyou.language";

const FAMILY_CLIPS: Record<WithYouScenarioFamily, WithYouClipId[]> = {
  presence: ["primary"],
  social_pull: ["stage_1", "stage_2", "stage_3"],
  exit_pressure: ["stage_1", "stage_2", "stage_3"],
};

const FAMILY_PREVIEW_MODES: Record<WithYouScenarioFamily, WithYouPreviewMode> = {
  presence: "single_clip",
  social_pull: "timed_sequence",
  exit_pressure: "timed_sequence",
};

function scenarioConfig(config: Omit<WithYouScenarioConfig, "previewMode">): WithYouScenarioConfig {
  return {
    ...config,
    previewMode: FAMILY_PREVIEW_MODES[config.scenarioFamily],
  };
}

export const withYouScenarios: Record<string, WithYouScenarioConfig> = {
  uber: scenarioConfig({
    slug: "uber",
    pageKey: "withyou_uber",
    scenarioFamily: "presence",
    title: {
      en: "Stay socially buffered in the ride",
      zh: "在车程里保持被陪伴的感觉",
    },
    problemFraming: {
      en: "You do not want to make small talk in the car. You want a believable call that makes you look connected and harder to engage.",
      zh: "你不想在车里寒暄，只想有一通可信的来电，让你看起来有人在等你、也更不容易被搭话。",
    },
    previewHeading: {
      en: "Preview the presence call",
      zh: "试听陪伴感来电",
    },
    previewBody: {
      en: "One quick clip that sounds like you are already connected to someone else.",
      zh: "一段简短语音，让你听起来像是已经和别人保持联系。",
    },
    storeHeading: {
      en: "Take the full pack with you",
      zh: "把完整音频包带在身边",
    },
    storeBody: {
      en: "withYou lives in the app, with downloadable packs for offline playback.",
      zh: "withYou 在 App 中提供，也支持下载音频包离线播放。",
    },
    leadHeading: {
      en: "Need it in your language?",
      zh: "希望支持你的语言？",
    },
    leadBody: {
      en: "Join the list and we will email you when withYou opens more languages and markets.",
      zh: "留下邮箱，withYou 支持更多语言或地区时我们会通知你。",
    },
    leadCta: {
      en: "Join the withYou list",
      zh: "加入 withYou 名单",
    },
  }),
  "walk-home": scenarioConfig({
    slug: "walk-home",
    pageKey: "withyou_walk_home",
    scenarioFamily: "presence",
    title: {
      en: "Feel less alone on the walk",
      zh: "走路时不再显得独自一人",
    },
    problemFraming: {
      en: "You are walking alone and slightly uneasy. You want to look connected without escalating the moment.",
      zh: "你独自走路，心里有点不安。你希望看起来像在和别人保持联系，但又不想让情况升级。",
    },
    previewHeading: {
      en: "Preview the walk-home call",
      zh: "试听走路陪伴来电",
    },
    previewBody: {
      en: "A single presence clip that helps you move like someone is already aware of your route.",
      zh: "一段单次陪伴语音，让你像是已经有人知道你的行程。",
    },
    storeHeading: {
      en: "Keep the pack offline",
      zh: "把音频包离线保存",
    },
    storeBody: {
      en: "Download language packs inside the app so the audio is still there when you need it.",
      zh: "在 App 内下载语言包，需要时即使离线也能播放。",
    },
    leadHeading: {
      en: "Want withYou when it launches wider?",
      zh: "希望 withYou 更广泛上线时收到通知？",
    },
    leadBody: {
      en: "Leave your email and we will keep you posted.",
      zh: "留下邮箱，我们会在开放更多地区时通知你。",
    },
    leadCta: {
      en: "Get launch updates",
      zh: "获取上线通知",
    },
  }),
  "bus-stop": scenarioConfig({
    slug: "bus-stop",
    pageKey: "withyou_bus_stop",
    scenarioFamily: "presence",
    title: {
      en: "Look occupied while you wait",
      zh: "等待时看起来更有目的感",
    },
    problemFraming: {
      en: "You are waiting alone and do not want to look idle or easily approached.",
      zh: "你独自等待，不想看起来无所事事，也不想显得容易被搭话。",
    },
    previewHeading: {
      en: "Preview the bus-stop call",
      zh: "试听等车陪伴来电",
    },
    previewBody: {
      en: "A single clip that gives you something credible to do while you wait.",
      zh: "一段单次语音，让你在等待时看起来有事在忙。",
    },
    storeHeading: {
      en: "Keep the audio ready",
      zh: "把音频随时准备好",
    },
    storeBody: {
      en: "Download the pack in the app so it is ready even when signal is poor.",
      zh: "在 App 中下载语言包，即使信号不好也能立即使用。",
    },
    leadHeading: {
      en: "Need another language?",
      zh: "想要其他语言版本？",
    },
    leadBody: {
      en: "Tell us where you are and which language you need next.",
      zh: "告诉我们你所在地区以及最需要的语言版本。",
    },
    leadCta: {
      en: "Request your language",
      zh: "请求你的语言版本",
    },
  }),
  "party-exit": scenarioConfig({
    slug: "party-exit",
    pageKey: "withyou_party_exit",
    scenarioFamily: "social_pull",
    title: {
      en: "Leave the party without making it awkward",
      zh: "自然离开聚会，不必尴尬解释",
    },
    problemFraming: {
      en: "You are done with the event but want a believable reason to peel away naturally.",
      zh: "你已经不想继续待在聚会里，但希望有一个可信的理由自然离开。",
    },
    previewHeading: {
      en: "Preview the 3-part exit sequence",
      zh: "试听三段式离场音频",
    },
    previewBody: {
      en: "Choose the point in the sequence that matches how ready you are to move.",
      zh: "根据你当下准备离开的程度，选择最合适的一段。",
    },
    timedLabels: {
      stage_1: { en: "First call", zh: "第一通电话" },
      stage_2: { en: "2nd call · ~3 min later", zh: "第二通 · 约3分钟后" },
      stage_3: { en: "3rd call · ~5 min later", zh: "第三通 · 约5分钟后" },
    },
    storeHeading: {
      en: "Keep the full sequence in the app",
      zh: "在 App 中保存完整三段式音频",
    },
    storeBody: {
      en: "The app lets you keep the whole pack ready for offline use.",
      zh: "App 可以保存完整音频包，离线也能使用。",
    },
    leadHeading: {
      en: "Want more scenarios like this?",
      zh: "想要更多类似场景？",
    },
    leadBody: {
      en: "Join the list and help us prioritize what to record next.",
      zh: "加入名单，帮助我们决定下一批优先录制的场景。",
    },
    leadCta: {
      en: "Join for updates",
      zh: "加入以获取更新",
    },
  }),
  "date-fading": scenarioConfig({
    slug: "date-fading",
    pageKey: "withyou_date_fading",
    scenarioFamily: "social_pull",
    title: {
      en: "End a fading date smoothly",
      zh: "让逐渐冷场的约会自然收尾",
    },
    problemFraming: {
      en: "The date is not going anywhere and you want the exit to feel smooth instead of abrupt.",
      zh: "这次约会已经没有继续的感觉，你希望结束时更自然，而不是突然抽离。",
    },
    previewHeading: {
      en: "Preview the 3-part date exit",
      zh: "试听三段式约会离场音频",
    },
    previewBody: {
      en: "Start lightly, then move into a clearer reason to leave if you need it.",
      zh: "先从轻一点的语气开始，如果有需要，再进入更明确的离开理由。",
    },
    timedLabels: {
      stage_1: { en: "First call", zh: "第一通电话" },
      stage_2: { en: "2nd call · ~3 min later", zh: "第二通 · 约3分钟后" },
      stage_3: { en: "3rd call · ~5 min later", zh: "第三通 · 约5分钟后" },
    },
    storeHeading: {
      en: "Keep the full flow ready",
      zh: "把完整离场流程准备好",
    },
    storeBody: {
      en: "Download the pack so the staged exit is there when you need it.",
      zh: "下载音频包，需要时就能立即使用完整分段流程。",
    },
    leadHeading: {
      en: "Help us expand launch languages",
      zh: "帮助我们扩展首发语言",
    },
    leadBody: {
      en: "Tell us where you are and which language should come next.",
      zh: "告诉我们你所在地区，以及接下来最需要的语言。",
    },
    leadCta: {
      en: "Tell us your language",
      zh: "告诉我们你的语言",
    },
  }),
  "new-place": scenarioConfig({
    slug: "new-place",
    pageKey: "withyou_new_place",
    scenarioFamily: "social_pull",
    title: {
      en: "Walk into a new place with a social anchor",
      zh: "进入陌生场所时更有底气",
    },
    problemFraming: {
      en: "You are entering somewhere unfamiliar and want a believable sense that you already belong there.",
      zh: "你要进入一个陌生场所，希望自己看起来像已经和某个人有约、有方向。",
    },
    previewHeading: {
      en: "Preview the 3-part arrival sequence",
      zh: "试听三段式进入场所音频",
    },
    previewBody: {
      en: "Use a staged call to make the space feel more navigable from the moment you arrive.",
      zh: "用分段来电让你一进入陌生场所就显得更有方向。",
    },
    timedLabels: {
      stage_1: { en: "First call", zh: "第一通电话" },
      stage_2: { en: "2nd call · ~3 min later", zh: "第二通 · 约3分钟后" },
      stage_3: { en: "3rd call · ~5 min later", zh: "第三通 · 约5分钟后" },
    },
    storeHeading: {
      en: "Carry arrival flows offline",
      zh: "把进入场所的音频离线带着走",
    },
    storeBody: {
      en: "The app keeps downloadable packs ready when you need a confidence layer fast.",
      zh: "App 会把可下载语言包准备好，需要时能迅速给你一层底气。",
    },
    leadHeading: {
      en: "Want withYou in your market?",
      zh: "希望 withYou 来到你的地区？",
    },
    leadBody: {
      en: "Join the list and we will email when more markets open.",
      zh: "加入名单，更多地区开放时我们会发送通知。",
    },
    leadCta: {
      en: "Join the market list",
      zh: "加入地区名单",
    },
  }),
  "trapped-conversation": scenarioConfig({
    slug: "trapped-conversation",
    pageKey: "withyou_trapped_conversation",
    scenarioFamily: "exit_pressure",
    title: {
      en: "Break out of the conversation cleanly",
      zh: "干净地退出困住你的对话",
    },
    problemFraming: {
      en: "You are stuck in a conversation and need a believable interruption that lets you step away now.",
      zh: "你被一段对话困住了，需要一个可信的打断理由，让你现在就能离开。",
    },
    previewHeading: {
      en: "Preview the extraction sequence",
      zh: "试听脱身三段式音频",
    },
    previewBody: {
      en: "Move from interruption to decisive exit if the conversation keeps going.",
      zh: "如果对方还在继续，就从打断逐步推进到明确离开。",
    },
    timedLabels: {
      stage_1: { en: "First call", zh: "第一通电话" },
      stage_2: { en: "2nd call · ~45s later", zh: "第二通 · 约45秒后" },
      stage_3: { en: "3rd call · ~30s later", zh: "第三通 · 约30秒后" },
    },
    storeHeading: {
      en: "Keep stronger exits ready",
      zh: "把更强的离场方案随身准备好",
    },
    storeBody: {
      en: "Download the pack so stronger extraction flows are ready offline too.",
      zh: "下载音频包，让更强的脱身流程也能离线使用。",
    },
    leadHeading: {
      en: "Need more exits like this?",
      zh: "想要更多这样的脱身场景？",
    },
    leadBody: {
      en: "Join the list and help shape what we record next.",
      zh: "加入名单，帮助我们决定下一批录音内容。",
    },
    leadCta: {
      en: "Help shape the roadmap",
      zh: "参与决定路线图",
    },
  }),
  "they-wont-let-me-leave": scenarioConfig({
    slug: "they-wont-let-me-leave",
    pageKey: "withyou_they_wont_let_me_leave",
    scenarioFamily: "exit_pressure",
    title: {
      en: "When someone keeps insisting you stay",
      zh: "当对方一直坚持不让你离开",
    },
    problemFraming: {
      en: "Someone keeps pushing back when you try to leave. You need a stronger reason than just saying you should go.",
      zh: "当你想离开时，对方一直试图挽留。你需要一个比“我该走了”更有力度的理由。",
    },
    previewHeading: {
      en: "Preview the stronger exit sequence",
      zh: "试听更强力度的离场音频",
    },
    previewBody: {
      en: "Start with interruption, then escalate the urgency if the person keeps pushing.",
      zh: "先制造打断，如果对方继续施压，再逐步提高紧迫感。",
    },
    timedLabels: {
      stage_1: { en: "First call", zh: "第一通电话" },
      stage_2: { en: "2nd call · ~45s later", zh: "第二通 · 约45秒后" },
      stage_3: { en: "3rd call · ~30s later", zh: "第三通 · 约30秒后" },
    },
    storeHeading: {
      en: "Keep urgent exits on hand",
      zh: "把紧急离场方案放在手边",
    },
    storeBody: {
      en: "The app keeps downloadable sequences ready when the pressure rises fast.",
      zh: "App 会把可下载音频准备好，在压力突然变高时也能立刻使用。",
    },
    leadHeading: {
      en: "Need launch updates?",
      zh: "想收到上线更新？",
    },
    leadBody: {
      en: "Leave your email and we will let you know when withYou expands.",
      zh: "留下邮箱，withYou 扩展时我们会通知你。",
    },
    leadCta: {
      en: "Join the withYou list",
      zh: "加入 withYou 名单",
    },
  }),
  "bad-date-exit": scenarioConfig({
    slug: "bad-date-exit",
    pageKey: "withyou_bad_date_exit",
    scenarioFamily: "exit_pressure",
    title: {
      en: "Leave the bad date without explaining everything",
      zh: "不必解释太多，也能离开不舒服的约会",
    },
    problemFraming: {
      en: "The date feels uncomfortable and you need a non-confrontational exit that still gets you out quickly.",
      zh: "这次约会让你感到不舒服，你需要一个不必正面冲突、但能让你尽快离开的方式。",
    },
    previewHeading: {
      en: "Preview the bad-date exit",
      zh: "试听不舒服约会的离场音频",
    },
    previewBody: {
      en: "Use a staged sequence that moves from interruption to immediate exit.",
      zh: "使用一套从打断到立即离开的分段音频。",
    },
    timedLabels: {
      stage_1: { en: "First call", zh: "第一通电话" },
      stage_2: { en: "2nd call · ~45s later", zh: "第二通 · 约45秒后" },
      stage_3: { en: "3rd call · ~30s later", zh: "第三通 · 约30秒后" },
    },
    storeHeading: {
      en: "Keep the full exit flow ready",
      zh: "把完整离场流程准备好",
    },
    storeBody: {
      en: "Download the pack inside the app so stronger exits are available offline too.",
      zh: "在 App 中下载音频包，让更强的离场流程离线也能使用。",
    },
    leadHeading: {
      en: "Want more launch updates?",
      zh: "想收到更多上线更新？",
    },
    leadBody: {
      en: "Join the list and we will email when new languages and packs are live.",
      zh: "加入名单，新增语言和音频包上线时我们会发邮件通知。",
    },
    leadCta: {
      en: "Get withYou updates",
      zh: "获取 withYou 更新",
    },
  }),
};

export const withYouRouteSlugs = Object.keys(withYouScenarios).sort((left, right) => left.localeCompare(right));

export function getWithYouScenarioConfig(slug?: string | null): WithYouScenarioConfig | null {
  if (!slug) return null;
  return withYouScenarios[slug] ?? null;
}

export function resolveWithYouPreviewLanguage(value?: string | null): WithYouPreviewLanguage {
  const normalized = value?.trim().toLowerCase();
  return normalized === "zh" ? "zh" : "en";
}

export function getWithYouPreviewClips(family: WithYouScenarioFamily): WithYouClipId[] {
  return FAMILY_CLIPS[family];
}

export function getWithYouPreviewAssetPath(
  language: WithYouPreviewLanguage,
  family: WithYouScenarioFamily,
  clip: WithYouClipId,
): string {
  return `/withyou/assets/audio-preview/${language}/${family}/${clip}.m4a`;
}

export function buildWithYouAudioManifest(): WithYouManifest {
  return {
    packs: WITHYOU_PACK_LANGUAGES.map((language) => ({
      language,
      pack_version: "1.0.0",
      download_url: `/withyou/download/audio/${language}`,
      bundled: false,
      scenarios: {
        presence: {
          mode: "single_clip",
          clips: ["primary"],
        },
        social_pull: {
          mode: "timed_sequence",
          clips: ["stage_1", "stage_2", "stage_3"],
        },
        exit_pressure: {
          mode: "timed_sequence",
          clips: ["stage_1", "stage_2", "stage_3"],
        },
      },
    })),
    default_language: "en",
    preview_languages: WITHYOU_PREVIEW_LANGUAGES,
  };
}

export function buildWithYouVersionConfig() {
  return {
    minimum_version: "1.0.0",
    latest_version: "1.0.0",
    force_update: false,
  };
}

