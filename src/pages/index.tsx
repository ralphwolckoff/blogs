import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/Seo";

export default function Home() {
  return (
    <>
      <Seo title="audrey" description="description" />
      <Navigation />
      <Footer />
    </>
  );
}
