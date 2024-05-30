"use client";
import { useEffect, useState } from "react";
import { slides } from "@/data/data";

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
			className="relative h-[50vh] duration-500 w-screen bg-cover bg-center bg-no-repeat md:h-[65vh] lg:h-[86vh]"
			style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
		>
			<div className="- flex h-full  items-center justify-center bg-amber-50/25 text-center backdrop-brightness-[.45]">
				<h1 className="z-50 font-playfair text-3xl text-white md:text-6xl lg:text-7xl">
					{slides[currentSlide].title}
					<span className="mt-4  block  text-xs sm:text-sm  md:text-xl lg:text-2xl">
						{slides[currentSlide].description}
					</span>
				</h1>
			</div>
		</div>
	);
};
