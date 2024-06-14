import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const ContactIcons = () => {
	return (
		<div className={`flex  flex-row items-center gap-4`}>
			<a  className="hover:scale-110 duration-200"  href="https://www.linkedin.com" aria-label="LinkedIn">
				<Linkedin  color="grey" size={16} />
			</a>
			<a  className="hover:scale-110 duration-200"  href="https://www.instagram.com" aria-label="Instagram">
				<Instagram  color="grey" size={16} />
			</a>
			<a  className="hover:scale-110 duration-200"  href="https://www.facebook.com" aria-label="Facebook">
				<Facebook  color="grey" size={16} />
			</a>
			<a className="hover:scale-125 duration-200"   href="https://www.twitter.com" aria-label="Twitter">
				<Twitter  color="grey" size={16} />
			</a>
		</div>
	);
};
