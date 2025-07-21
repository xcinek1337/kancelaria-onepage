import { siteMap } from "../../data/data";
export const SiteMap = () => {
	return (
		<div className="mt-9 flex flex-auto flex-col gap-7 px-6 md:flex-row md:justify-center sm:gap-28 lg:mt-12 ">
			{siteMap.map((info, i) => {
				return (
					<div key={i}>
						<h3 className="mb-4 font-Mulish font-medium tracking-wide underline decoration-brownie decoration-4">
							{info.title}
						</h3>
						{info.desc && <p className="text-sm leading-relaxed  text-gray-500">{info.desc}</p>}
						<p className="text-sm leading-relaxed  text-gray-500">{info.tel}</p>
						<p className="text-sm leading-relaxed  text-gray-500">{info.tel1}</p>
						{info.desc2 && <p className="text-sm  leading-relaxed text-gray-500">{info.desc2}</p>}
					</div>
				);
			})}
		</div>
	);
};
