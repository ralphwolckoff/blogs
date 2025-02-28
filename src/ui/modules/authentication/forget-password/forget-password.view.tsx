import { Box } from "@/ui/design-sytem/box/box";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/ui/components/container/container";
import { ForgetPasswordForm } from "./forget-password.form";
import { FormsType } from "@/types/form";

interface Props {
  form: FormsType;
}
export const ForgetPasswordView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/imgs/Calque2.png"
            alt="description de l'illustration..."
            className="object-scale-down"
          />
        </div>
      </div>
      <div className=" flex items-center">
        <Box padding_y="px-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Mot de passe perdu ?
            </Typography>
            <Typography variant="caption4" component="span" theme="secondary">
              <Link href="/connexion">Connexion</Link>
            </Typography>
          </div>
          <ForgetPasswordForm form={form} />
        </Box>
      </div>
    </Container>
  );
};
