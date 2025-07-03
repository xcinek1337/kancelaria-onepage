import { services } from "../../data/data";
import { Wrapper } from "../atoms/Wrapper";

export const Services = () => {
  return (
    <section id="uslugi" className="mt-14 text-center">
      <Wrapper>
        <h2 className="mt-4 mb-9 lg:mb-10 px-4 font-LoraCustom text-4xl underline decoration-brownie decoration-4 md:text-5xl lg:mt-16 lg:text-6xl">
          Usługi
        </h2>
        <ul className="px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mt-10 rounded-lg ">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <li
                key={index}
                className="flex items-center gap-3 p-6 bg-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_-4px_6px_rgba(0,0,0,0.15)] transition-shadow duration-300"
              >
                <Icon className="w-6 h-6 sm:w-10 sm:h-10 text-brownie" />
                <span className="text-lg font-medium font-Mulish">{service.txt}</span>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </section>
  );
};
