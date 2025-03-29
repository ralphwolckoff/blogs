import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/Seo";
import { AudreySlackView } from "@/ui/modules/landing-page/components/audrey-slack/audrey-slack-view";
import { CurrentCourseView } from "@/ui/modules/landing-page/components/current-course/current-course-view";

export default function Blogs() {
  return (
    <>
      <Seo title="Produits / details " description="description" />
      <Layout>
        <AudreySlackView />
      </Layout>
    </>
  );
}
