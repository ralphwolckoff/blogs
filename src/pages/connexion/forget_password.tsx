import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/Seo";
import { ForgetpasswordContainer } from "@/ui/modules/authentication/forget-password/forget-password.container";

export default function ForgetPassword() {
  return (
    <>
      <Seo
        title="Récupération de mot de passe"
        description="Récupération de mot de passe"
      />
      <Layout>
        <ForgetpasswordContainer />
      </Layout>
    </>
  );
}
