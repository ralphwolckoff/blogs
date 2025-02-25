import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-sytem/button/button";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <Container className="flex items-center  pt-40 pb-52 overflow-hidden">
      <div className="w-full max-w-2xl space-y-5">
        <Typography variant="h1" component="h1" className="max-w-lg">
          Rejoins Ralph Pubs
        </Typography>
        <Typography
          variant="body-lg"
          theme="gray"
          component="p"
          className="max-w-xl"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A animi
          numquam dolor deserunt temporibus impedit nostrum, molestias, illo non
          labore magni nihil. Veniam fuga aut asperiores eum sunt quo eveniet
          hic pariatur eos, incidunt quasi dignissimos enim, repellat totam at
          autem in laudantium nulla sequi. Consequatur nisi rerum quam odit!
        </Typography>
        <div className="space-x-5 pt-2.5 ">
          <Button baseUrl="">Commencer</Button>
          <Button baseUrl="" variant="secondary">
            En savoir plus
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          src="/assets/svg/Calque.svg"
          alt="illustration d'un d'ordinateur"
          width={811}
          height={696}
          className=" top-0 right-0 z-0"
        />
      </div>
    </Container>
  );
};
