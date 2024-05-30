import { siteMap } from "@/data/data";
export const SiteMap = () => {
	return (
		<div className="mt-9 lg:mt-12 flex flex-auto flex-col  gap-7 px-6 md:flex-row ">
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
