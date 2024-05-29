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
			<div className="px-5 pt-10 text-center lg:pt-16">
				<p className="font-sans text-sm font-medium italic text-gray-500 md:text-base">
					Witaj w naszej Kancelarii
				</p>

				<div className="bg-brownie mx-auto mt-4 h-1 w-12 rounded-md md:w-20"></div>

				<h2 className="font-playfair mt-4 text-4xl md:text-5xl lg:mt-8 lg:text-6xl ">
					Doświadczenie. Zespół. Rezultaty.
				</h2>

				<p className="mt-8 px-4 font-serif text-sm tracking-wide text-gray-500 md:text-base lg:mt-12 lg:text-lg">
					Stawiamy sobie za zadanie dostarczanie naszym klientom usług na najwyższym poziomie
					jakości
				</p>

				<div className="border-brownie mx-auto mt-10 lg:mt-16 flex flex-col justify-center gap-14 rounded-sm border-8 px-2 py-6 sm:gap-20  md:w-[90%] md:flex-row lg:w-[75%]">
					{AboutCompanyCards.map((card, i) => (
						<div key={i} className="flex flex-col  items-center md:w-1/3 ">
							<p className="font-playfair text-6xl">{card.title}</p>
							<p className="mt-2 text-sm text-gray-500">{card.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
