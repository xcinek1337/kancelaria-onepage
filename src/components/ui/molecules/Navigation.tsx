"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ContactInfoMenu } from "../molecules/ContactInfoMenu";
import { Logo } from "../atoms/Logo";
import { Wrapper } from "../atoms/Wrapper";

import { navigation } from "../../data/data";
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
		<nav className="relative bg-white px-3 py-4 shadow-md md:px-4 ">
			<Wrapper>
				<div className="flex items-center justify-between">
					<div className="cursor-pointer">
						<a href="#start">
							<Logo />
						</a>
					</div>

					<div
						className="z-60 cursor-pointer md:hidden"
						aria-label="Open menu"
						onClick={toggleMenu}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</div>

					<ul
						className={` z-60 absolute left-0 top-0 flex min-h-[100vh] w-[50%] flex-col  items-start md:items-center gap-12 bg-white/95  px-3 pt-10 font-mono text-lg duration-500 md:static md:min-h-fit md:w-auto md:flex-row md:bg-transparent md:pt-0 ${
							isMenuOpen ? "left-[0%]" : "left-[-100%]"
						}`}
					>
						{navigation.map((link, i) => {
							return (
								<li
									className={`${link.style} border-b-2 border-transparent duration-300 ease-in hover:border-b-2 hover:border-brownie `}
									key={i}
								>
									{link.text && <a href={link.href}>{link.text}</a>}
									{link.logo && <Logo />}
									{link.icons && <ContactInfoMenu />}
								</li>
							);
						})}

						<a
							href="#kontakt"
							className="hidden rounded-lg border-2 border-brownie bg-brownie/50 px-4 py-1.5 md:block hover:bg-brownie duration-300 ease-in"
						>
							Kontakt
						</a>
					</ul>
				</div>
			</Wrapper>
		</nav>
	);
};
