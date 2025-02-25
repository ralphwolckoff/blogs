import { Container } from "@/ui/components/container/container";
import { Typography } from "../typography/Typography";
import { Button } from "../button/button";
import { LinkTypes } from "@/lib/link-type";
import Image from "next/image";

export const CallToAcctionView = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
      <Container className="py-15">
        <div className="relative z-10 max-w-3xl space-y-5">
          <Typography variant="h2" theme="white" component="h2">
            Lorem ipsum dolor sit amet consectetur, adipis
          </Typography>
          <div>
            <Button variant="success" baseUrl="" linkType={LinkTypes.EXTERNAL}>
              Lorem ipsum dolor sit.
            </Button>
          </div>
        </div>
        <div>
          <Image
            width={1210}
            height={1210}
            src="/assets/svg/xxx.svg"
            alt="un soleil..."
            className="absolute -bottom-[620px] right-[0px]"
          />
        </div>
      </Container>
    </div>
  );
};
