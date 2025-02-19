import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/Seo";
import { Avatar } from "@/ui/design-sytem/avatar/avatar";
import { Button } from "@/ui/design-sytem/button/button";
import { Logo } from "@/ui/design-sytem/logo/logo";
import { Spinner } from "@/ui/design-sytem/spinner/spinner";
import { Typography } from "@/ui/design-sytem/typography/Typography";
import { RiNotification2Fill, RiShieldUserLine } from "react-icons/ri";

export default function DesignSystem() {
  return (
    <>
      <Seo title="Design-system" description="description" />
      <Navigation />
      <Container className="py-10 space-y-5">
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Typographie
          </Typography>
          <div className="flex flex-col gap-2 p-5 border border-x-gray-400 divide-y-2 divide-gray-400 rounded">
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Display
              </Typography>
              <Typography variant="display">Nothing is impossible</Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H1
              </Typography>
              <Typography variant="h1">
                Nothing is impossible, the word itself say, I'm possible
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H2
              </Typography>
              <Typography variant="h2">
                Your time is limited, so don't waste it living someone else's
                life
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H3
              </Typography>
              <Typography variant="h3">
                The only way to do great work is to love what you do
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H4
              </Typography>
              <Typography variant="h4">
                If you want to achieve greatness stop asking for permission
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H5
              </Typography>
              <Typography variant="h5">
                The best time to plant a tree was 20 years ago. The second best
                time is now
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                lead
              </Typography>
              <Typography variant="lead" weight="medium">
                The best revenge is massive success
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body-lg
              </Typography>
              <Typography variant="body-lg">
                The best revenge is massive success
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body-base
              </Typography>
              <Typography variant="body-base">
                The best revenge is massive success
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body-sm
              </Typography>
              <Typography variant="body-sm">
                The best revenge is massive success
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption1
              </Typography>
              <Typography variant="caption1">
                The best revenge is massive success
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption2
              </Typography>
              <Typography variant="caption2">
                The best revenge is massive success
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption3
              </Typography>
              <Typography variant="caption3">
                The best revenge is massive success
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption4
              </Typography>
              <Typography variant="caption4">
                The best revenge is massive success
              </Typography>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-7">
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Spinner
              </Typography>
              <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                <Spinner size="small" />
                <Spinner />
                <Spinner size="large" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-7">
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Logo
              </Typography>
              <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                <Logo size="very-small" />
                <Logo size="small" />
                <Logo />
                <Logo size="large" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-7">
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Avatar
              </Typography>
              <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                <Avatar
                  size="small"
                  src="/assets/imgs/media.png"
                  alt="Avatar de profil"
                />
                <Avatar src="/assets/imgs/media.png" alt="Avatar de profil" />
                <Avatar
                  src="/assets/imgs/fete.jpg"
                  alt="Avatar de profil"
                  size="large"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Button
          </Typography>
          <div className="p-5 space-y-8 border border-gray-400 rounded">
            <div className="space-y-2">
              <Typography variant="caption3" weight="medium">
                Small
              </Typography>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button isLoading size="small">
                    Accent
                  </Button>
                  <Button
                    isLoading
                    size="small"
                    icon={{ icon: RiShieldUserLine }}
                  >
                    Accent
                  </Button>
                  <Button isLoading size="small" variant="secondary">
                    Secondary
                  </Button>
                  <Button
                    isLoading
                    size="small"
                    variant="ico"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button
                    isLoading
                    size="small"
                    variant="ico"
                    iconTheme="secondary"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button
                    isLoading
                    size="small"
                    variant="ico"
                    iconTheme="gray"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button isLoading size="small" variant="outline">
                    Outline
                  </Button>
                  <Button isLoading size="small" variant="disabled">
                    Disabled
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button size="small">Accent</Button>
                  <Button size="small" icon={{ icon: RiShieldUserLine }}>
                    Accent
                  </Button>
                  <Button size="small" variant="secondary">
                    Secondary
                  </Button>
                  <Button
                    size="small"
                    variant="ico"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button
                    size="small"
                    variant="ico"
                    iconTheme="secondary"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button
                    size="small"
                    variant="ico"
                    iconTheme="gray"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button size="small" variant="outline">
                    Outline
                  </Button>
                  <Button size="small" variant="disabled">
                    Disabled
                  </Button>
                </div>
              </div>
              <Typography variant="caption3" weight="medium">
                Medium
              </Typography>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button isLoading>Accent</Button>
                  <Button
                    isLoading
                    size="small"
                    icon={{ icon: RiShieldUserLine }}
                  >
                    Accent
                  </Button>
                  <Button isLoading variant="secondary">
                    Secondary
                  </Button>
                  <Button
                    isLoading
                    variant="ico"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button
                    isLoading
                    variant="ico"
                    iconTheme="secondary"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button
                    isLoading
                    variant="ico"
                    iconTheme="gray"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button isLoading variant="outline">
                    Outline
                  </Button>
                  <Button isLoading variant="disabled">
                    Disabled
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button>Accent</Button>
                  <Button icon={{ icon: RiShieldUserLine }}>Accent</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ico" icon={{ icon: RiNotification2Fill }} />
                  <Button
                    variant="ico"
                    iconTheme="secondary"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button
                    variant="ico"
                    iconTheme="gray"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button variant="outline">Outline</Button>
                  <Button variant="disabled">Disabled</Button>
                </div>
              </div>
              <Typography variant="caption3" weight="medium">
                Large
              </Typography>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button isLoading size="large">
                    Accent
                  </Button>
                  <Button
                    isLoading
                    size="large"
                    icon={{ icon: RiShieldUserLine }}
                  >
                    Accent
                  </Button>
                  <Button isLoading size="large" variant="secondary">
                    Secondary
                  </Button>
                  <Button
                    isLoading
                    size="large"
                    variant="ico"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button
                    isLoading
                    size="large"
                    variant="ico"
                    iconTheme="secondary"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button
                    isLoading
                    size="large"
                    variant="ico"
                    iconTheme="gray"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button isLoading size="large" variant="outline">
                    Outline
                  </Button>
                  <Button isLoading size="large" variant="disabled">
                    Disabled
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button size="large">Accent</Button>
                  <Button size="large" icon={{ icon: RiShieldUserLine }}>
                    Accent
                  </Button>
                  <Button size="large" variant="secondary">
                    Secondary
                  </Button>
                  <Button
                    size="large"
                    variant="ico"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button
                    size="large"
                    variant="ico"
                    iconTheme="secondary"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button
                    size="large"
                    variant="ico"
                    iconTheme="gray"
                    icon={{ icon: RiNotification2Fill }}
                  />
                  <Button size="large" variant="outline">
                    Outline
                  </Button>
                  <Button size="large" variant="disabled">
                    Disabled
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
