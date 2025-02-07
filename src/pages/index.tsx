import React from "react";
import { Seo } from "@/ui/components/Seo";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import { Button } from "@/ui/design-sytem/typography/button/button";
import { RiUser6Fill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo title="audrey" description="description" />
      <div className="flex items-center gap-4 p-10">
        <Button size="small">accent</Button>
        <Button size="small" variant="secondary">
          secondary
        </Button>
        <Button size="small" variant="outline">
          outline
        </Button>
        <Button size="small" variant="disabled">
          disabled
        </Button>
        <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button>accent</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="disabled">disabled</Button>
        <Button variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button size="large">accent</Button>
        <Button size="large" variant="secondary">
          secondary
        </Button>
        <Button size="large" variant="outline">
          outline
        </Button>
        <Button size="large" variant="disabled">
          disabled
        </Button>
        <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>

      {/*<div>
        <Typography theme="primary" variant="display" component="div">
          Welcome to audrey
        </Typography>
      </div>*/}
    </>
  );
}
