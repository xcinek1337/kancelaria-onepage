import { CalendarHeartIcon, HandshakeIcon } from "lucide-react";

const AboutCompanyCards = [
	{
		title: "15+",
		description: "Ponad 15 lat doświadczenia",
	},
	{
		title: <HandshakeIcon size={48} />,
		description: "Zaufanie stawiamy na pierwszym miejscu",
	},
	{
		title: <CalendarHeartIcon size={48} />,
		description: "Gwarantujemy świetne terminy rozpoczęcia współpracy",
	},
];

export const AboutCompany = () => {
	return (
		<section>
			<div className="px-5 pt-10 text-center">
				<p className="font-sans text-sm font-medium italic text-gray-500">
					Witaj w naszej Kancelarii
				</p>
				<div className="bg-brownie mx-auto mt-4 h-1 w-12 rounded-md"></div>
				<h2 className="font-playfair pt-4 text-3xl ">Doświadczenie. Zespół. Rezultaty</h2>
				<p className="mt-8 px-4 font-serif text-sm tracking-wide text-gray-500">
					Stawiamy sobie za zadanie dostarczanie naszym klientom usług na najwyższym poziomie
					jakości.
				</p>
				<div className="border-brownie mt-10 flex flex-col justify-center gap-14 rounded-sm  border-8 py-6 md:flex-row">
					{AboutCompanyCards.map((card, i) => (
						<div key={i} className="flex  flex-col items-center ">
							<p className="font-playfair text-6xl">{card.title}</p>
							<p className="mt-2 text-sm text-gray-500">{card.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
