import React from "react";
import { Seo } from "@/ui/components/Seo";
import { Typography } from "@/ui/design-sytem/typography/Typography";

export default function Home() {
  return (
    <>
      <Seo title="audrey" description="description" />
      <div>
        <Typography theme="primary" variant="display" component="div">
          Welcome to audrey
        </Typography>
      </div>
    </>
  );
}
