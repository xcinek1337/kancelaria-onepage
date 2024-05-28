import { ContactBar } from "@/ui/molecules/ContactBar";
import { Navigation } from "@/ui/molecules/Navigation";

export const Header = () => {
	return (
		<header>
			<ContactBar />
			<div className="border-2 border-orange-300 md:sticky md:top-0 ">
				<Navigation />
			</div>
		</header>
	);
};
