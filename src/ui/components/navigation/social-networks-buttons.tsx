import { Button } from "@/ui/design-sytem/button/button";
import { footerSocialNetwordLinks } from "./applinks";
import { v4 as uuidv4 } from "uuid";
import { RiFacebookFill } from "react-icons/ri";
import clsx from "clsx";

interface Props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}

export const SocialNetwokbuttons = ({ className, theme = "accent" }: Props) => {
  const IcoList = footerSocialNetwordLinks.map((socialNetwork) => {
    return (
      <Button
        key={uuidv4()}
        variant="ico"
        iconTheme={theme}
        icon={{
          icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookFill,
        }}
        baseUrl={socialNetwork.baseUrl}
        linkType={socialNetwork.type}
      />
    );
  });

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {IcoList}
    </div>
  );
};
