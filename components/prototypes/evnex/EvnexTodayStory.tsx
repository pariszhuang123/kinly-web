import { StoryBlock } from "../../shared/StoryBlock";

type EvnexTodayStoryProps = {
  story: string;
};

export function EvnexTodayStory({ story }: EvnexTodayStoryProps) {
  return <StoryBlock eyebrow="Operating story" title="What is driving today’s pressure" body={story} />;
}
