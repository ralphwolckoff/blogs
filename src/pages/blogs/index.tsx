import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/Seo";
import { FeaturedView } from "@/ui/modules/landing-page/components/featured-view/featured-view";

export default function Blogs() {
  return (
    <>
      <Seo title="Produits" description="description" />
      <Layout>
        <FeaturedView />
      </Layout>
    </>
  );
}
