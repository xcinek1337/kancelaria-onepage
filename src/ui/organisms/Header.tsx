"use client";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, Menu, Phone, Twitter, X } from "lucide-react";

export const Header = () => {
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
		<header className="p-3 sm:p-6">
			<div className="mx-auto w-full max-w-[1200px]">
				<div className="mb-4 flex justify-between border-b border-gray-300 pb-5">
					<div className="flex flex-col gap-3 text-xs text-gray-400 sm:flex-row">
						<address className="flex items-center gap-2 not-italic">
							<Phone color="grey" size={16} />
							<a href="tel:0001112222">(000) 111-2222</a>
						</address>

						<a className="flex items-center gap-2" href="mailto:contact@example.com">
							<Mail color="grey" size={16} />
							contact@example.com
						</a>
					</div>

					<div className="flex gap-2">
						<a href="https://www.linkedin.com" aria-label="LinkedIn">
							<Linkedin color="grey" size={16} />
						</a>
						<a href="https://www.instagram.com" aria-label="Instagram">
							<Instagram color="grey" size={16} />
						</a>
						<a href="https://www.facebook.com" aria-label="Facebook">
							<Facebook color="grey" size={16} />
						</a>
						<a href="https://www.twitter.com" aria-label="Twitter">
							<Twitter color="grey" size={16} />
						</a>
					</div>
				</div>

				<nav className="mx-auto flex items-center justify-between">
					<div>
						<img className="w-24 md:w-32" src="logo.svg" alt="" />
					</div>
					<div
						className="z-50 cursor-pointer md:hidden"
						aria-label="Open menu"
						onClick={toggleMenu}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</div>
					<ul
						className={` absolute left-0 flex min-h-[70vh]  w-[50%] flex-col  items-start gap-10 bg-white/90 px-3 pt-20 font-mono duration-500 md:static md:min-h-fit md:w-auto md:flex-row md:pt-0 ${
							isMenuOpen ? "top-[0%]" : "top-[-100%]"
						}`}
					>
						<li>
							<a href="#home">Start</a>
						</li>
						<li>
							<a href="#practice-areas">Obszary doradztwa </a>
						</li>
						<li>
							<a href="#about">Nasz Zespół</a>
						</li>

						<button className="hidden md:block">Kontakt</button>
					</ul>
				</nav>
			</div>
		</header>
	);
};
