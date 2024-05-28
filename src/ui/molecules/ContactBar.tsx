import { Mail, Phone } from "lucide-react";

import { ContactIcons } from "@/ui/atoms/ContactIcons";
import { Wrapper } from "@/ui/atoms/Wrapper";

export const ContactBar = () => {
	return (
		<Wrapper>
			<div className="flex justify-between border-b border-gray-300 py-2 mb-2 ">
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

				<ContactIcons />
			</div>
		</Wrapper>
	);
};
