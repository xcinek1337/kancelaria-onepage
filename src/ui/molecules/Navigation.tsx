"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ContactInfoMenu } from "@/ui/molecules/ContactInfoMenu";
import { Logo } from "@/ui/atoms/Logo";
import { Wrapper } from "@/ui/atoms/Wrapper";
export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		if (!isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	};
	return (
		<nav className="bg-white py-4 shadow-md md:sticky md:top-0 ">
			<Wrapper>
				<div className="flex items-center justify-between">
					<div>
						<Logo />
					</div>

					<div
						className="z-50 cursor-pointer md:hidden"
						aria-label="Open menu"
						onClick={toggleMenu}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</div>

					<ul
						className={` absolute left-0 flex min-h-[100vh]  w-[50%] flex-col items-start  gap-12 bg-slate-50/95 px-3 pt-20 font-mono text-lg duration-500 md:static md:min-h-fit md:w-auto md:flex-row md:bg-transparent md:pt-0 ${
							isMenuOpen ? "top-[0%]" : "top-[-100%]"
						}`}
					>
						<li className="md:hidden">
							<Logo />
						</li>
						<li>
							<a href="#home">Start</a>
						</li>
						<li>
							<a href="#practice-areas">Obszary doradztwa </a>
						</li>
						<li>
							<a href="#about">Nasz Zespół</a>
						</li>
						<li className="md:hidden">
							<a href="#kontakt">Skontaktuj się</a>
						</li>
						<li className="md:hidden">
							<ContactInfoMenu />
						</li>

						<button className="hidden md:block">Kontakt</button>
					</ul>
				</div>
			</Wrapper>
		</nav>
	);
};
