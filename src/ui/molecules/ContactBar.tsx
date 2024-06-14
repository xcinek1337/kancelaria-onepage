import { Mail, Phone } from "lucide-react";

import { ContactIcons } from "@/ui/atoms/ContactIcons";
import { Wrapper } from "@/ui/atoms/Wrapper";

export const ContactBar = () => {
	return (
		<Wrapper>
			<div className="flex justify-between border-b px-3 md:px-4   border-gray-300 py-2 mb-2 ">
				<div className="flex flex-col gap-3 text-xs text-gray-400 sm:flex-row">
					<address className="flex items-center gap-2 not-italic">
						<Phone color="grey" size={16} />
						<a href="tel:717171257">71 71 71 257</a>
					</address>

					<a className="flex items-center gap-2" href="mailto:kancelariapartnerska@gmail.com">
						<Mail color="grey" size={16} />
						kancelariapartnerska@gmail.com
					</a>
				</div>

				<ContactIcons />
			</div>
		</Wrapper>
	);
};
