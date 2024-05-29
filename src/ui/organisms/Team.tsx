import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Wrapper } from "@/ui/atoms/Wrapper";

const members = [
	{
		name: "Mariusz Gołębiowski",
		position: "radca prawny",
		description:
			"Radca prawny od 2003 r. skupiający swoją praktykę zawodową na obsłudze prawnej spółek prawa handlowego takich jak PKP CARGO S.A. oraz PKP S.A. Oddział Gospodarowania Nieruchomościami we Wrocławiu. ",
		img: "member1.jpg",
		fb: "",
		ln: "#home",
		tt: "#home",
	},
	{
		name: "Jarosław Kryska",
		position: "radca prawny",
		description:
			"Radca prawny od ... specjalizujący się w szeroko rozumianym prawie cywilnym (prawo rzeczowe, prawo spadkowe), prawie pracy oraz w prawie budowlanym.",
		img: "member2.jpg",
		ln: "",
		fb: "home",
		tt: "home",
	},
	{
		name: "Magdalena George",
		position: "Specjalista ds prawnych",
		description:
			"Absolwentka studiów licencjackich na kierunku administracja oraz obecnie studentka prawa.",
		img: "member3.jpg",
		ln: "https://www.linkedin.com/in/magdalena-george?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADnl-d4BQqhf3tljFhOXhPePBa-Nlg5Nqy8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BWvzjjcDjTmafXDNkjx%2B%2BlQ%3D%3D",
		fb: "https://www.facebook.com/magdaa.george",
		tt: "#home",
	},
];

export const Team = () => {
	return (
		<section className="mb-12 mt-8 px-4 text-center">
			<Wrapper>
				<h2 className="font-playfair decoration-brownie mt-4 px-4 text-4xl underline decoration-4 md:text-5xl lg:mt-8 lg:text-6xl">
					Poznaj Nas
				</h2>
				<div className="mt-10 flex flex-col items-center justify-between gap-9 md:grid md:grid-cols-3 md:gap-11">
					{members.map((member, i) => {
						return (
							<div key={i} className="mx-auto h-full w-full max-w-xs">
								<img
									className="h-auto w-full rounded-3xl object-cover shadow-lg"
									src={member.img}
									alt={member.name}
								/>
								<p className="mt-4 text-sm text-gray-600">{member.position.toUpperCase()}</p>
								<div className="mt-6 flex items-center justify-center gap-2 text-gray-600">
									{member.ln && (
										<a href={member.ln} target="_blank" rel="noopener noreferrer">
											<Linkedin size={14} />
										</a>
									)}
									{member.fb && (
										<a href={member.fb} target="_blank" rel="noopener noreferrer">
											<Facebook size={14} />
										</a>
									)}
									{member.tt && (
										<a href={member.tt} target="_blank" rel="noopener noreferrer">
											<Twitter size={14} />
										</a>
									)}
								</div>
								<h3 className="font-playfair mt-4 text-2xl md:text-3xl lg:text-4xl">
									{member.name}
								</h3>
								<div className="bg-brownie mx-auto mt-4 h-1 w-12 rounded-md md:w-20"></div>
								<p className="mt-4 font-sans text-sm tracking-wider text-gray-600 lg:text-base">
									{member.description}
								</p>
							</div>
						);
					})}
				</div>
			</Wrapper>
		</section>
	);
};
