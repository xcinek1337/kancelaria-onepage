"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

export function HeroSection() {
	return (
		<>
			<Swiper
				loop={true}
				autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
				modules={[Autoplay]}
				className="h-full w-full"
			>
				<SwiperSlide className="relative h-full bg-cover bg-center">
					<img className="block h-[500px] w-screen " src="pic2-high.jpg" />
					<h1 className="absolute  right-[50%] top-[50%] z-50 translate-x-[50%] translate-y-[-50%] font-mono text-xl font-bold text-gray-500 md:text-4xl">
						veritatis! Minus
					</h1>
				</SwiperSlide>
				<SwiperSlide className="bg-cover bg-center">
					<img className="block h-[500px] w-screen" src="pic3-high.jpg" />
					<h1 className="absolute right-[50%] top-[50%] z-50 translate-x-[50%]  translate-y-[-50%] font-mono text-xl font-bold text-gray-500 md:text-4xl">
						ducimus nesciunt
					</h1>
				</SwiperSlide>
				<SwiperSlide className="bg-cover bg-center">
					<img className="block h-[500px] w-screen" src="pic4-high.jpg" />
					<h1 className="absolute right-[50%] top-[50%] z-50 translate-x-[50%] translate-y-[-50%] font-mono text-xl font-bold text-gray-500 md:text-4xl">
						Lorem ipsum
					</h1>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
// position: relative;
// height: 100vh;
// background-image: url("../img/header-mini.jpg");
// background-position: center;
// background-size: cover;
// background-attachment: fixed;
// z-index: 0;
