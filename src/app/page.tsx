import { HeroImg } from "@/ui/organisms/HeroImg";
import { AboutCompany } from "@/ui/organisms/AboutCompany";

export default function Home() {
	return (
		<main className="min-h-[120vh] w-full">
			<HeroImg />
			<AboutCompany />
		</main>
	);
}
