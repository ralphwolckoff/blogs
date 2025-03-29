import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/Seo";
import { HightlightListView } from "@/ui/modules/landing-page/components/current-course/hightlight-list.view";

export default function Blogs() {
  return (
    <>
      <Seo title="Produits / lists " description="description" />
      <Layout>
        <HightlightListView />
      </Layout>
    </>
  );
}
