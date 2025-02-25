import { Box } from "@/ui/design-sytem/box/box";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Link from "next/link";

import { RiHome2Line } from "react-icons/ri";
import { RegisterForm } from "../register/register.form";
import Image from "next/image";
import { Container } from "@/ui/components/container/container";
import { LoginForm } from "./login.form";

export const LoginView = () => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/imgs/Calque1.png"
            alt="description de l'illustration..."
            className="object-scale-down"
          />
        </div>
      </div>
      <div className=" flex items-center">
        <Box padding_y="px-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Connexion
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption4" component="h2" theme="gray">
                Tu n'as pas de compte ?
              </Typography>
              <Typography variant="caption4" component="span" theme="secondary">
                <Link href="/connexion/inscription">S'inscrire</Link>
              </Typography>
            </div>
          </div>
          <LoginForm />
        </Box>
      </div>
    </Container>
  );
};
