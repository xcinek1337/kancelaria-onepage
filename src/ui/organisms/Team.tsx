import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Wrapper } from "@/ui/atoms/Wrapper";

import { members } from "@/data/data";

export const Team = () => {
	return (
		<section id="o-nas" className="mb-12 mt-8 px-4 text-center">
			<Wrapper>
				<h2 className="mt-4 px-4 font-playfair text-4xl underline decoration-brownie decoration-4 md:text-5xl lg:mt-12 lg:text-6xl">
					Poznaj Nas
				</h2>
				<div className="mt-10 flex flex-col items-center justify-between gap-9 md:grid md:grid-cols-3 md:gap-11 lg:mt-16">
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
								<h3 className="mt-4 font-playfair text-2xl md:text-3xl lg:text-4xl">
									{member.name}
								</h3>
								<div className="mx-auto mt-4 h-1 w-12 rounded-md bg-brownie md:w-20"></div>
								<p className="my-6 md:my-8 px-4 font-serif text-sm tracking-wide text-gray-500 md:text-base lg:mt-12 lg:text-lg">
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
