import { HeroImg } from "@/ui/organisms/HeroImg";
import { AboutCompany } from "@/ui/organisms/AboutCompany";
import { Services } from "@/ui/organisms/Services";
import { Team } from "@/ui/organisms/Team";

export default function Home() {
	return (
		<main className="min-h-[120vh] w-full">
			<HeroImg />
			<AboutCompany />
			<Services />
			<Team />
		</main>
	);
}
