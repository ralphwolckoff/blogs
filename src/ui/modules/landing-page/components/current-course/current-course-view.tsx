import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";

export const CurrentCourseView = () => {
  return (
    <div className="bg-gray-300">
      <Container className="py-24 text-center">
        <Typography variant="h2" component="h2" className="mb-2.5">
          Formation Gratuite
        </Typography>
        <Typography variant="lead" component="h3" className="mb-5">
          Apprends à te faire plaisir et obtiens un plus
        </Typography>
        <Typography
          variant="caption3"
          component="p"
          theme="gray"
          className="mb-16"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          blanditiis eum nisi neque eveniet aperiam obcaecati accusantium!
          Ducimus, amet quam.
        </Typography>
        <a href="#/" target="_blank">
          <div className="relative bg-gray-400 rounded h-[626px]">
            <div className="relative flex flex-col items-center justify-center h-full bg-gray-800 opacity-0 hover:opacity-90 animate z-10 rounded">
              <RiPlayCircleLine size={42} />
              <Typography
                variant="caption2"
                theme="white"
                className="uppercase"
                weight="medium"
              >
                Lire la formation
              </Typography>
            </div>
            <Image
              fill
              src="assets/imgs/fete.jpg"
              alt=""
              className="object-cover object-center"
            />
          </div>
        </a>
      </Container>
    </div>
  );
};
