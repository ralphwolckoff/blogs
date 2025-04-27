import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/Seo";
import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container";

export default function MonEspace() {
  return (
    <>
      <Seo title="Mon espace" description="Description de page" />
      <Layout>
        <UserAccountContainer />
      </Layout>
    </>
  );
}
