import { Wrapper } from "../atoms/Wrapper";
import { FooterBar } from "../molecules/FooterBar";
import { SiteMap } from "../molecules/SiteMap";

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
