import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/Seo";
import { LoginContainer } from "@/ui/modules/authentication/login/login-container";

export default function Connexion() {
  return (
    <>
      <Seo title="Connexion" description="Pagw de connexion" />
      <Layout>
        <LoginContainer />
      </Layout>
    </>
  );
}
