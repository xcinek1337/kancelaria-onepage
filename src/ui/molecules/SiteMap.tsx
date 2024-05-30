const siteMap = [
	{
		title: "O NAS",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, error! Libero voluptatum odio tempora iste optio ad perferendis sapiente. Voluptates, dolorum eius! Praesentium omnis obcaecati saepearchitecto quod? Non accusantium commodi esse.",
		desc2: "",
		flex: "flex-1",
	},
	{
		title: "GODZINY PRACY",
		desc: "Pon - Pt: 9:00 - 15:00",
		desc2: "Sobota: 9:00 - 13:00",
		flex: "flex-2",
	},
	{
		title: "ADRES",
		desc: "ul. Lazienna 21/37",
		desc2: "Wroclaw 55-555",
		flex: "flex-2",
	},
	{
		title: "KONTAKT",
		desc: "telefon: 123 123 123 ",
		desc2: "email: przykladowy@wp.pl",
		flex: "flex-2",
	},
];
export const SiteMap = () => {
	return (
		<div className="mt-9 flex flex-auto flex-col  gap-7 px-6 md:flex-row ">
			{siteMap.map((info, i) => {
				return (
					<div className={info.flex} key={i}>
						<h3 className="mb-4 font-medium tracking-wide underline decoration-brownie decoration-4">
							{info.title}
						</h3>
						<p className="text-sm leading-relaxed  text-gray-500">{info.desc}</p>
						{info.desc2 && <p className="text-sm  leading-relaxed text-gray-500">{info.desc2}</p>}
					</div>
				);
			})}
		</div>
	);
};
