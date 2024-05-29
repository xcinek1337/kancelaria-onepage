"use client";
import { useEffect, useState } from "react";

const slides = [
	{
		url: "/pic4-high.jpg",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum?",
		title: "Eksperci w Prawie, Partnerzy w Życiu",
	},
	{
		url: "/pic2-high.jpg",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
		title: "Profesjonalizm i Zaufanie w Każdym Kroku",
	},
	{
		url: "/pic3-high.jpg",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi aliquam porro ipsam.",
		title: "Twoje Prawa, Nasza Misja",
	},
];

export const HeroImg = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);
	{
		slides[currentSlide].title;
	}
	return (
		<div
			className="relative h-[50vh] w-screen bg-cover bg-center bg-no-repeat md:h-[65vh] lg:h-[86vh]"
			style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
		>
			<div className="- flex h-full  items-center justify-center bg-amber-50/25 backdrop-brightness-[.45] text-center">
				<h1 className="z-50 text-3xl font-playfair text-white md:text-6xl lg:text-7xl">
					{slides[currentSlide].title}
					<span className="mt-4  block  text-xs sm:text-sm  md:text-xl lg:text-2xl">
						{slides[currentSlide].description}
					</span>
				</h1>
			</div>
		</div>
	);
};
