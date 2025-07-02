import { ContactIcons } from "../atoms/ContactIcons";

export const FooterBar = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className=" mt-10 flex flex-col items-center">
			<ContactIcons />
			<p className="text-xs font-lato my-3 text-gray-500">{year} © GOŁĘBIOWSKI & KRYSKA</p>
		</div>
	);
};
