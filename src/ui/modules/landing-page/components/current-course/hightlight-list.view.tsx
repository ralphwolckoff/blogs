import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-sytem/button/button";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Image from "next/image";
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri";

export const HightlightListView = () => {
  return (
    <Container className="py-24 space-y10">
      <div className="flex justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image
            fill
            src="/assets/svg/chaussure.svg"
            alt="illustration d'un article"
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Typography>
          <div className="space-y-3">
            <ListPoint>Lorem ipsum dolor sit amet.</ListPoint>
            <ListPoint>Lorem ipsum dolor sit amet.</ListPoint>
            <ListPoint>Lorem ipsum dolor sit amet.</ListPoint>
          </div>
          <div className="relative">
            <Button
              baseUrl=""
              icon={{ icon: RiArrowRightLine }}
              iconPosition="right"
            >
              Let'go
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image
            fill
            src="/assets/svg/voiture.svg"
            alt="illustration d'un article"
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Typography>
          <div className="space-y-3">
            <ListPoint>Lorem ipsum dolor sit amet.</ListPoint>
            <ListPoint>Lorem ipsum dolor sit amet.</ListPoint>
            <ListPoint>Lorem ipsum dolor sit amet.</ListPoint>
          </div>
          <div className="relative">
            <Button
              variant="secondary"
              baseUrl=""
              icon={{ icon: RiArrowRightLine }}
              iconPosition="right"
            >
              Demarrer
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

interface Props {
  children: React.ReactNode;
}
const ListPoint = ({ children }: Props) => {
  return (
    <div className="flex items-start gap-2">
      <RiCheckboxCircleLine size={24} className="mt-1 text-secondary" />
      <Typography variant="body-lg" component="span">
        {children}
      </Typography>
    </div>
  );
};
