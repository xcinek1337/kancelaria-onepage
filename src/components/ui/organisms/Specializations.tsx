import { Wrapper } from "../atoms/Wrapper";
import { tiles } from "../../data/data";

export const Specializations = () => {
  return (
    <section id="specjalizacje" className="mt-14 text-center">
      <Wrapper>
        <h2 className="mt-4 mb-9 lg:mb-10 px-4 font-LoraCustom text-4xl underline decoration-brownie decoration-4 md:text-5xl lg:mt-16 lg:text-6xl">
          Specjalizacje
        </h2>
      </Wrapper>
      <div className="mt-10 grid grid-cols-1 gap-2 px-2 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-4">
        {tiles.map((tile, i) => (
          <a
            href={`/specjalizacje/${tile.slug}`}
            key={i}
            className="perspective h-[300px]"
          >
            <label className="flip-card cursor-pointer block h-full">
              <div className="flip-card-inner transition-transform duration-600 transform-style-preserve-3d peer-checked:rotate-y-180">
                <div
                  className="flip-card-front rounded-3xl"
                  style={{ backgroundImage: `url(${tile.url})` }}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-3xl bg-transparent/60">
                    <h3 className="rounded-3xl font-Mulish text-3xl font-semibold text-white">
                      {tile.txt}
                    </h3>
                  </div>
                </div>
                <div className="flip-card-back flex items-center justify-center bg-gray-700 p-5 font-Lora text-white">
                  <ul>
                    {tile.describe.map((desc, i) => (
                      <li key={i}>- {desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </label>
          </a>
        ))}
      </div>
    </section>
  );
};
