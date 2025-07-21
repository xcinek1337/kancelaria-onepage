import {
  Scale,
  FileText,
  FileStack,
  HandHelping,
  Megaphone,
  Users,
  Factory,
} from "lucide-react";
export const services = [
  {
    txt: "Porady prawne",
    icon: Scale,
  },
  {
    txt: "Sporządzanie umów",
    icon: FileText,
  },
  {
    txt: "Opiniowanie umów",
    icon: FileStack,
  },
  {
    txt: "Negocjacje prawne",
    icon: HandHelping,
  },
  // {
  //   txt: "Mediacja sądowa",
  //   icon: Megaphone,
  // },
  {
    txt: "Zastępstwo procesowe",
    icon: Users,
  },
  {
    txt: "Obsługa prawna przedsiębiorców",
    icon: Factory,
  },
];
export const navigation = [
  { style: "md:hidden", href: "/#start", text: "", logo: true },
  { style: "border-b-2 border-brownie", href: "/#start", text: "Start" },
  { style: "", href: "/#specjalizacje", text: "Specjalizacje" },
  { style: "", href: "/#uslugi", text: "Usługi" },
  { style: "", href: "/#o-nas", text: "Nasz Zespół" },
  { style: "md:hidden", href: "#kontakt", text: "Kontakt" },
  { style: "md:hidden", href: "#start", text: "", icons: true },
];
export const AboutCompanyCards = [
  {
    title: "15+",
    description: "Ponad 15 lat doświadczenia",
  },
  {
    handshake: true,
    description: "Zaufanie stawiamy na pierwszym miejscu",
  },
  {
    calendar: true,
    description: "Gwarantujemy świetne terminy rozpoczęcia współpracy",
  },
];
export const tiles = [
  {
    txt: "Prawo spółek handlowych",
    url: "prawoSH.jpg",
    slug: "prawo-spolki",
    describe: [
      "Zakładanie, przekształcanie, łączenie, podział i likwidacja spółek",
      "Obsługa prawna organów spółek kapitałowych",
      "Przygotowywanie projektów uchwał wspólników w spółkach osobowych",
      "Przygotowanie projektów uchwał organów spółek kapitałowych",
    ],
  },
  {
    txt: "Prawo pracy",
    url: "prawopracy.jpg",
    slug: "prawo-pracy",
    describe: [
      "Bieżąca obsługa prawna pracodawców, w tym: przygotowywanie opinii prawnych, umów o pracę, regulaminów pracy, regulaminów wynagradzania, układów zbiorowego prawa pracy",
      "Prowadzenie spraw z zakresu prawa pracy, w tym dotyczących: rozwiązania stosunku pracy, mobbingu, ustalenia stosunku pracy, roszczeń odszkodowawczych, stosowania kar porządkowych",
    ],
  },
  {
    txt: "Prawo nieruchomości",
    url: "prawoNieruch.jpg",
    slug: "prawo-nieruchomosci",
    describe: [
      "Obsługa prawna obrotu nieruchomościami i przygotowywanie umów",
      "Reprezentacja przed organami administracji i sądami w sprawach uwłaszczeniowych i komunalizacyjnych",
      "Reprezentacja w sprawach opłat i stawek użytkowania wieczystego",
      "Obsługa prawna wspólnot mieszkaniowych",
      "Prowadzenie sporów o uchylenie uchwał wspólnot mieszkaniowych",
    ],
  },
  {
    txt: "Prawo spadkowe",
    url: "prawoSpadkowe.jpg",
    slug: "prawo-spadkowe",
    describe: [
      "Doradztwo w zakresie dziedziczenia ustawowego i testamentowego",
      "Dział spadku",
      "Reprezentacja w sprawach o zachowek ",
    ],
  },
  {
    txt: "Prawo administracyjne",
    url: "prawoAdminist.jpg",
    slug: "prawo-administracyjne",
    describe: [
      "Prawo budowlane w zakresie wydawanych decyzji przez organy nadzoru budowlanego",
      "Odwołania i skargi w zakresie decyzji administracyjnych dotyczących wpisu do obiektu do rejestru zabytków",
      "Komunalizacja mienia, uwłaszczenie przedsiębiorstw państwowych",
      "Reprezentacja strony w postępowaniach administracyjnych i sądowo-administracyjnych",
    ],
  },
  {
    txt: "Prawo upadłościowe",
    url: "prawoUpadlosc.jpg",
    slug: "prawo-upadlosciowe",
    describe: [
      "Składanie wniosków o ogłoszenie upadłości konsumenckiej i upadłości gospodarczej",
      "Reprezentacja przed sądem upadłościowym w postępowaniu wywołanym wnioskiem o ogłoszenie upadłości",
      "Przygotowywanie pism procesowych, w tym: skarga na czynności syndyka, wniosek o wyłączenie z masy upadłości ruchomości",
    ],
  },
  {
    txt: "Windykacja i ochrona dłużnika w postępowaniu egzekucyjnym",
    url: "windykacja.jpg",
    slug: "windykacja",
    describe: [
      "Przygotowywanie wezwań do zapłaty",
      "Przygotowywanie pozwów o zapłatę",
      "Reprezentacja przed sądami powszechnymi i Sądem Najwyższym",
      "Reprezentowanie wierzyciela/dłużnika w toku przed organem egzekucyjnym",
      "Pomoc dłużnikom w sprawach związanych z prowadzeniem postępowania egzekucyjnego w stosunku do ich nieruchomości",
      "Pomoc dłużnikom w sprawach eksmisji z nieruchomości",
    ],
  },
  {
    txt: "Prawo cywilne",
    url: "prawoCywilne.jpg",
    slug: "prawo-cywilne",
    describe: [
      "Odszkodowania i zadośćuczynienia",
      "Doradztwo prawne,",
      "Pomoc przy negocjacjach z kontrahentami,",
      "Podział majątku",
      "Opiniowanie i sporządzanie umów cywilnoprawnych",
      "Sprawy o zapłatę",
      "Zasiedzenie",
      "Eksmisja",
      "Zniesienie współwłasności",
      "Aktualizacja opłat z tytułu oddanie nieruchomości w użytkowanie wieczyste i stawki procentowej",
      "Rozwiązanie użytkowania wieczystego",
    ],
  },
];

export const members = [
  {
    name: "Jarosław Kryska",
    position: "radca prawny",
    img: "member2.jpg",
    ln: "",
    fb: "home",
    tt: "home",
    description:
      "Radca prawny działający od 2003 roku w ramach indywidualnej kancelarii radcy prawnego. W ramach swojej praktyki zajmuje się obsługą prawną przedsiębiorstw oraz spółek. Specjalizuje się w prawie cywilnym, gospodarczym oraz administracyjnym.",
  },
  {
    name: "Magdalena George",
    position: "Specjalista ds prawnych",
    img: "member3.jpg",
    ln: "https://www.linkedin.com/in/magdalena-george?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADnl-d4BQqhf3tljFhOXhPePBa-Nlg5Nqy8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BWvzjjcDjTmafXDNkjx%2B%2BlQ%3D%3D",
    fb: "https://www.facebook.com/magdaa.george",
    tt: "#home",
    description:
      "Absolwentka studiów magisterskich na kierunku prawo oraz studiów licencjackich na kierunku administracja na Uniwersytecie Wrocławskim. Posiada wieloletnie doświadczenie pracy w kancelarii prawnej, obejmujące przygotowywanie projektów pism procesowych, obsługę systemów informatycznych kancelarii monitorowanie spraw sądowych i egzekucyjnych, kontakt z sądami i komornikami.",
  },
];

export type Errors = Partial<Record<FieldName, string>>;
export type FieldName = "name" | "email" | "subject" | "message";
export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export const formFields: {
  type: string;
  placeholder: string;
  name: FieldName;
}[] = [
  { type: "text", placeholder: "Imię", name: "name" },
  { type: "email", placeholder: "Email", name: "email" },
  { type: "text", placeholder: "Temat", name: "subject" },
];
export const siteMap = [
  {
    title: "GODZINY PRACY",
    desc: "Pon - Pt: 8:00 - 15:00",
  },
  {
    title: "ADRES",
    desc: "ul. Joannitów 13/332",
    desc2: "Wroclaw 50-525",
  },
  {
    title: "KONTAKT",
    tel: "telefon: 509-205-482",
    tel1: "telefon: 663-468-649",
    desc2: "email: kancelariakryska@gmail.com",
  },
];
