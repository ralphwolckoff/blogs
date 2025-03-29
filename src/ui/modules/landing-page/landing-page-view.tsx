import { CallToAcctionView } from "@/ui/design-sytem/call-to-action.view/call-to-action.view";
import { CurrentCourseView } from "./components/current-course/current-course-view";
import { HeroTopView } from "./components/hero-top-view/hero-top";

export const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <CurrentCourseView />
      <CallToAcctionView />
    </>
  );
};
