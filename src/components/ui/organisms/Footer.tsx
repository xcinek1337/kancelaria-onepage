import { Wrapper } from "../atoms/Wrapper";
import { FooterBar } from "../molecules/FooterBar";
import { SiteMap } from "../molecules/SiteMap";

export const Footer = ({ currentPath }: { currentPath: string }) => {
  const isOnSpecializationPage = currentPath.startsWith("/specjalizacje");

  return (
    <footer className={isOnSpecializationPage ? "shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pt-2" : ""}>
      <Wrapper>
        <SiteMap />
        <FooterBar />
      </Wrapper>
    </footer>
  );
};
