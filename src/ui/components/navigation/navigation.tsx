import { Button } from "@/ui/design-sytem/button/button";
import { Logo } from "@/ui/design-sytem/logo/logo";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import { Container } from "../container/container";
import Link from "next/link";
import { ActiveLink } from "./active-link";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-7">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Ralph Pubs
              </div>
              <Typography variant="caption4" theme="gray" component="span">
                Trouve de l'inspiration & reçoit des feedbacks !
              </Typography>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/design-system">Design-System</ActiveLink>
            <Link href="#/">Projects</Link>
            <Link href="#/">Formations</Link>
            <Link href="#/">Contacts</Link>
          </Typography>
          <div className="flex items-center gap-2">
            <Button baseUrl="/connexion" size="small">
              Connexion
            </Button>
            <Button
              baseUrl="/connexion/inscription"
              size="small"
              variant="secondary"
            >
              Rejoindre
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
