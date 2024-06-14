// import { Wrapper } from "@/ui/atoms/Wrapper";

// import { tiles } from "@/data/data";
// export const Services = () => {
// 	return (
// 		<section id="obszary-doradztwa" className="mt-14 text-center ">
// 			<Wrapper>
// 				<h2 className="mt-4 px-4 font-playfair text-4xl underline decoration-brownie decoration-4 md:text-5xl lg:mt-16 lg:text-6xl">
// 					Nasze Dziedziny Praktyk
// 				</h2>
// 				<p className="text- mt-9 px-4 text-sm tracking-wider text-gray-600 lg:mt-10">
// 					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad sequi dolore rem doloremque
// 					expedita, pariatur quam eius ullam consequuntur molestiae! Veniam eum doloribus dicta
// 					veritatis totam exercitationem dolorem ullam id consecte Lorem ipsum dolor sit amet
// 					consectetur adipisicing i omnis repellendus! tur!
// 				</p>
// 			</Wrapper>
// 			<div className="mt-10 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4  ">
// 				{tiles.map((tile, i) => {
// 					return (
// 						<div
// 							key={i}
// 							className="content h-[250px] bg-cover bg-center bg-no-repeat "
// 							style={{ backgroundImage: `url(${tile.url})` }}
// 						>
// 							<div className=" flex h-full w-full items-center  justify-center  bg-transparent/60 duration-700  hover:backdrop-sepia ">
// 								<h3 className="font-playfair text-3xl font-semibold  text-white">{tile.txt}</h3>
// 							</div>
// 							<div className="">
// 								<p>back</p>
// 							</div>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</section>
// 	);
// };
import { Wrapper } from "@/ui/atoms/Wrapper";
import { tiles } from "@/data/data";

export const Services = () => {
	return (
		<section id="obszary-doradztwa" className="mt-14 text-center">
			<Wrapper>
				<h2 className="mt-4 px-4 font-playfair text-4xl underline decoration-brownie decoration-4 md:text-5xl lg:mt-16 lg:text-6xl">
					Nasze Dziedziny Praktyk
				</h2>
				<p className="mt-9 px-4 text-sm tracking-wider text-gray-600 lg:mt-10">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad sequi dolore rem doloremque
					expedita, pariatur quam eius ullam consequuntur molestiae! Veniam eum doloribus dicta
					veritatis totam exercitationem dolorem ullam id consecte Lorem ipsum dolor sit amet
					consectetur adipisicing i omnis repellendus! tur!
				</p>
			</Wrapper>
			<div className="mt-10 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
				{tiles.map((tile, i) => {
					return (
						<div key={i} className="perspective  h-[250px]">
							<div className="flip-card  bg-cover bg-center bg-no-repeat">
								<div className="flip-card-inner ">
									<div
										className="flip-card-front  "
										style={{ backgroundImage: `url(${tile.url})` }}
									>
										<div className=" flex h-full w-full items-center justify-center bg-transparent/60">
											<h3 className="font-playfair text-3xl font-semibold text-white">
												{tile.txt}
											</h3>
										</div>
									</div>
									<div className="flip-card-back font-playfair p-5 flex items-center justify-center bg-gray-700 text-white">
										<ul>
											{tile.describe.map((desc, i) => {
												return <li key={i}>- {desc}</li>;
											})}
										</ul>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
