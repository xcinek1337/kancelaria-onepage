import { Mail, Phone } from "lucide-react";

import { ContactIcons } from "@/ui/atoms/ContactIcons";
import { Wrapper } from "@/ui/atoms/Wrapper";

export const ContactBar = () => {
	return (
		<Wrapper>
			<div className="mb-2 flex justify-between border-b border-gray-300   px-3 py-2 md:px-4 ">
				<div className="flex flex-col gap-3 text-xs text-gray-400 sm:flex-row">
					<a href="tel:717171257" className="hover:scale-125 duration-300 flex items-center gap-2 not-italic">
						<Phone color="grey" size={16} />
						<span>71 71 71 257</span>
					</a>

					<a className="hover:scale-105 duration-300 flex items-center gap-2" href="mailto:kancelariapartnerska@gmail.com">
						<Mail color="grey" size={16} />
						kancelariapartnerska@gmail.com
					</a>
				</div>

				<ContactIcons />
			</div>
		</Wrapper>
	);
};
