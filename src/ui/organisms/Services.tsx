import { Wrapper } from "@/ui/atoms/Wrapper";

import { tiles } from "@/data/data";
export const Services = () => {
	return (
		<section className="mt-14   text-center ">
			<Wrapper>
				<h2 className="mt-4 px-4 font-playfair text-4xl underline decoration-brownie decoration-4 md:text-5xl lg:mt-8 lg:text-6xl">
					Nasze Dziedziny Praktyk
				</h2>
				<p className="text- mt-9 px-4 text-sm tracking-wider text-gray-600">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad sequi dolore rem doloremque
					expedita, pariatur quam eius ullam consequuntur molestiae! Veniam eum doloribus dicta
					veritatis totam exercitationem dolorem ullam id consecte Lorem ipsum dolor sit amet
					consectetur adipisicing i omnis repellendus! tur!
				</p>
			</Wrapper>
			<div className="mt-10 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4  ">
				{tiles.map((tile, i) => {
					return (
						<div
							key={i}
							className=" h-[250px] bg-cover bg-center bg-no-repeat "
							style={{ backgroundImage: `url(${tile.url})` }}
						>
							<div className="flex h-full w-full items-center  justify-center  backdrop-brightness-[.25] duration-700  hover:backdrop-sepia ">
								<h3 className="font-playfair font-semibold text-3xl  text-white">{tile.txt}</h3>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
