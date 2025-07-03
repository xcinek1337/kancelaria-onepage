import { CalendarHeartIcon, HandshakeIcon } from "lucide-react";
import { Wrapper } from "../atoms/Wrapper";

import { AboutCompanyCards } from "../../data/data";

export const AboutCompany = () => {
  return (
    <section>
      <Wrapper>
        <div className="px-5 pt-10 text-center lg:pt-16">
          <p className="font-Mulish text-sm font-medium italic text-gray-500 md:text-base">
            Witaj w naszej Kancelarii
          </p>

          <p className="font-Mulish leading-tight tracking-wide mt-8 px-4 text-lg md:text-2xl lg:text-4xl">
            Kancelaria specjalizuje się w kompleksowej obsłudze prawnej
            przedsiębiorców, spółek prawa handlowego oraz klientów
            indywidualnych. Dzięki wieloletniemu doświadczeniu zapewniamy naszym
            klientom wsparcie na najwyższym poziomie merytorycznym. Posiadamy
            doświadczenie w występowaniu przed sądami administracyjnymi,
            powszechnymi oraz Sądem Najwyższym. Dzięki dogłębnej wiedzy i
            skuteczności osiągamy wymierne rezultaty w rozwiązywaniu nawet
            najbardziej złożonych problemów prawnych.
          </p>
          <div className="mx-auto mt-8 h-1 w-12 rounded-md bg-brownie md:w-20"></div>

          <h6 className="mt-4 font-LoraCustom text-sm">
            Doświadczenie. Zespół. Rezultaty.
          </h6>

          <p className="mt-8 px-4 font-Mulish text-sm tracking-wide text-gray-500 md:text-base lg:mt-12 lg:text-lg">
            Stawiamy sobie za zadanie dostarczanie naszym klientom usług na
            najwyższym poziomie jakości
          </p>

          <div className="mx-auto mt-10 flex flex-col justify-center gap-14 rounded-sm border-8 border-brownie px-2 py-6 sm:gap-20 md:w-[90%]  md:flex-row lg:mt-16 lg:w-[75%]">
            {AboutCompanyCards.map((card, i) => (
              <div key={i} className="flex flex-col  items-center md:w-1/3 ">
                <p className="font-LoraMulish text-6xl">{card.title}</p>
                {card.handshake && (
                  <p className="font-Mulish text-6xl">
                    <HandshakeIcon size={48} />
                  </p>
                )}
                {card.calendar && (
                  <p className="font-Mulish text-6xl">
                    <CalendarHeartIcon size={48} />
                  </p>
                )}

                <p className="mt-2 text-sm text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
