import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Container } from "../container/container";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
}

export const Layout = ({
  children,
  isDisplayBreadcrumbs = true,
  withSidebar,
}: Props) => {
  let view: React.ReactElement = <></>;
  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3 bg-primary"></div>
          <div className="col-span-9 bg-secondary"></div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }
  return (
    <>
      <Navigation />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {/* {children} */}
      <Footer />
    </>
  );
};
