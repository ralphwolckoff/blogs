import { LinkTypes } from "@/lib/link-type";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-sytem/button/button";
import { Logo } from "@/ui/design-sytem/logo/logo";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Image from "next/image";

export const AudreySlackView = () => {
  return (
    <Container className="flex justify-between">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">
        <div className="flex items-center gap-2">
          <Logo size="very-small" />
          <Typography variant="caption2" component="span" weight="medium">
            Ralph Pubs
          </Typography>
        </div>
        <Typography variant="h2" component="h2">
          Rejoins-nous sur le slack de Ralph Pubs
        </Typography>
        <Typography
          variant="body-lg"
          component="p"
          theme="gray"
          className="max-w-lg"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          ut inventore quod necessitatibus fugiat obcaecati.
        </Typography>
        <Button baseUrl="#/" linkType={LinkTypes.EXTERNAL}>
          rejoindre le groupe d'aide
        </Button>
      </div>
      <div className="relative w-[600px] h-[600px]">
        <Image fill src={"/assets/svg/voiture.svg"} alt="Groupe Slack Audrey" />
      </div>
    </Container>
  );
};
