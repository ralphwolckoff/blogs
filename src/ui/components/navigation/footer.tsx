import { footerLinks } from "@/types/app-links";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { Container } from "../container/container";
import { ActiveLink } from "./active-link";
import { FooterLinks } from "./applinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerNavigationList = FooterLinks.map((colonLinks) => (
    <FooterLink key={uuidv4()} data={colonLinks} />
  ));

  return (
    <div className="bg-gray">
      <Container className="flex justify-between gap-2 pt-14">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Offres en soldes
          </Typography>
          <Typography variant="caption3" theme="gray">
            Rendez-vous au magazin
          </Typography>
          <a href="#/" target="_blank">
            <Image
              src="/assets/svg/média.svg"
              width={229}
              height={216}
              alt="Ralph Pubs | Tik tok"
            />
          </a>
        </div>
        <div className="flex gap-5">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            {`copyright &copy; &middot; ${currentYear} : Propulsed by Ralph Wolckoff`}
          </Typography>
          <div className="d"></div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: footerLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const LinkLists = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === "internal" && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === "external" && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="mb-5"
      >
        {data.label}
      </Typography>
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {LinkLists}
      </Typography>
    </div>
  );
};
