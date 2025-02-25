import { CallToAcctionView } from "@/ui/design-sytem/call-to-action.view/call-to-action.view";
import { AudreySlackView } from "./components/audrey-slack/audrey-slack-view";
import { CurrentCourseView } from "./components/current-course/current-course-view";
import { HightlightListView } from "./components/current-course/hightlight-list.view";
import { FeaturedView } from "./components/featured-view/featured-view";
import { HeroTopView } from "./components/hero-top-view/hero-top";

export const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <AudreySlackView />
      <CurrentCourseView />
      <HightlightListView />
      <CallToAcctionView />
    </>
  );
};
