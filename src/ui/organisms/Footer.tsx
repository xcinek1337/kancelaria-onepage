import { Wrapper } from "@/ui/atoms/Wrapper";
import { FooterBar } from "@/ui/molecules/FooterBar";
import { SiteMap } from "@/ui/molecules/SiteMap";

export const Footer = () => {
	return (
		<footer>
			<Wrapper>
				<SiteMap />
				<FooterBar />
			</Wrapper>
		</footer>
	);
};
