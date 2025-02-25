import { Container } from "@/ui/components/container/container";
import { SocialNetwokbuttons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-sytem/button/button";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface FeaturesListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const FeaturesData: FeaturesListInterface[] = [
  {
    imagePath: "/assets/svg/Model.svg",
    imageAlt: "illustration",
    title: "Ressources",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imagePath: "/assets/svg/voiture.svg",
    imageAlt: "illustration",
    title: "Entrainement",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imagePath: "/assets/svg/chaussure.svg",
    imageAlt: "illustration",
    title: "Visibilité",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imagePath: "/assets/svg/ordi.svg",
    imageAlt: "illustration",
    title: "Relations",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export const FeaturedView = () => {
  const FeaturedList = FeaturesData.map((feature) => {
    return (
      <div
        key={uuidv4()}
        className="flex flex-col items-center justify-center bg-white rounded p-7"
      >
        <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
          <Image
            fill
            src={feature.imagePath}
            alt={feature.imageAlt}
            className="object-scale-down blur-2xl"
          />
          <Image
            fill
            src={feature.imagePath}
            alt={feature.imageAlt}
            className="object-scale-down"
          />
        </div>
        <Typography
          variant="lead"
          component="h3"
          weight="medium"
          className="text-center mb-2.5"
        >
          {feature.title}
        </Typography>
        <Typography
          variant="body-base"
          component="p"
          theme="gray"
          className="text-center"
        >
          {feature.description}
        </Typography>
      </div>
    );
  });
  return (
    <div className="bg-gray-300 ">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="grid grid-cols-2 col-span-7 gap-7  ">
          {FeaturedList}
        </div>
        <div className="flex flex-col justify-between gap-10 col-span-5 ">
          <div>
            <Typography variant="h2" component="h2" className="mb-5">
              L'endroit le plus cool pour se faire plaisir
            </Typography>
            <Typography
              variant="body-lg"
              theme="gray"
              component="p"
              className="mb-8"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellat, porro.let's go
            </Typography>
            <Button
              variant="secondary"
              baseUrl=""
              icon={{ icon: RiArrowRightLine }}
              iconPosition="right"
            >
              Commencer
            </Button>
          </div>
          <div>
            <Typography
              variant="caption4"
              theme="gray"
              component="div"
              className="mb-4"
            >
              Nos reseaux sociaux
            </Typography>
            <SocialNetwokbuttons />
          </div>
        </div>
      </Container>
    </div>
  );
};
