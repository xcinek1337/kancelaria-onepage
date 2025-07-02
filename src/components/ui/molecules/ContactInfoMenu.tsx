import { Mail, Phone } from "lucide-react";

import { ContactIcons } from "../atoms/ContactIcons";

export const ContactInfoMenu = () => {
	return (
		<div className="mb-4 flex flex-col gap-4 justify-between border-b border-gray-300 pb-5">
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
	);
};
