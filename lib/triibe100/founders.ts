export type Founder = {
  id: number;
  name: string;
  org: string;
  bio: string;
  image?: string;
};

const firstTen: Founder[] = [
  {
    id: 1,
    name: "Zoe Terry",
    org: "",
    bio: "Founder and CEO - Zoe's Dolls",
    image: "/images/triibe100/Zoe Terry.png",
  },
  {
    id: 2,
    name: "Varuni Chopra",
    org: "",
    bio: "Founder - Bridge The Gap",
    image: "/images/triibe100/VaruniChopra.png",
  },
  {
    id: 3,
    name: "Trisha Prabhu",
    org: "",
    bio: "Founder and CEO - ReThink Citizens",
    image: "/images/triibe100/Trisha Prabhu.png",
  },
  {
    id: 4,
    name: "Shrusti Amula",
    org: "",
    bio: "Founder - Rise N Shine Foundation",
    image: "/images/triibe100/Shrusti Amula.png",
  },
  {
    id: 5,
    name: "Sharona Shnayder",
    org: "",
    bio: "Founder - Tuesdays for Trash",
    image: "/images/triibe100/Sharona Shnayder.png",
  },
  {
    id: 6,
    name: "Sayed Zubaer Hasan",
    org: "",
    bio: "Founder and CEO - Krishi Shwapno",
    image: "/images/triibe100/Sayed-Zubaer-Hasan 2.png",
  },
  {
    id: 7,
    name: "Samin Bhan",
    org: "",
    bio: "Founder - Lookup",
    image: "/images/triibe100/SaminBhan.jpg",
  },
  {
    id: 8,
    name: "Rimza Razaque",
    org: "",
    bio: "Founder - Al Arzen",
    image: "/images/triibe100/Rimza Razaque.png",
  },
  {
    id: 9,
    name: "Rachel Parent",
    org: "",
    bio: "Founder - Kids Right to Know",
    image: "/images/triibe100/Rachel Parent.png",
  },
  {
    id: 10,
    name: "Olivia Zhang",
    org: "",
    bio: "Founder - Cancer Kids First",
    image: "/images/triibe100/Olivia Zhang.png",
  },
];

const restOverrides: Partial<Founder>[] = [
  {
    name: "Nils Rauscher",
    org: "",
    bio: "Co-Founder - Zukunftsforum Baden-Baden",
    image: "/images/triibe100/Nils Rauscher.png",
  },
  {
    name: "Nayla Jimenez",
    org: "",
    bio: "Executive Director - Philippine Health Initiative",
    image: "/images/triibe100/NaylaJimenez.jpg",
  },
  {
    name: "Mirus Ponon",
    org: "",
    bio: "Founder - ASEAN Youth Advocates Network",
    image: "/images/triibe100/Mirus Ponon.png",
  },
  {
    name: "Mathias Charles Yabe",
    org: "",
    bio: "CEO - AkoFresh",
    image: "/images/triibe100/Mathias Charles Yabe.png",
  },
  {
    name: "Maria Keller",
    org: "",
    bio: "Founder - Read Indeed",
    image: "/images/triibe100/Maria Keller.png",
  },
  {
    name: "Josh Fields",
    org: "",
    bio: "Executive Director - The Next Step Programs",
    image: "/images/triibe100/Josh Fields.png",
  },
  {
    name: "Jared Fenton",
    org: "",
    bio: "Founder - The Reflect Organization",
    image: "/images/triibe100/Jared Fenton.png",
  },
  {
    name: "Jahnavi Rao",
    org: "",
    bio: "President and Founder - New Voters",
    image: "/images/triibe100/Jahnavi Rao.png",
  },
  {
    name: "Stanley Anigbogu",
    org: "",
    bio: "Founder - LightED Impact Foundation",
    image: "/images/triibe100/Stanley Anigbogu.png",
  },
  {
    name: "Hikaru (Wakeel) Hayakawa",
    org: "",
    bio: "Executive Director @ Climate Cardinals | Featured on Forbes, ABC News and Kelly Clarkson Show",
    image: "/images/triibe100/Hikaru Wakeel Hayakawa.png",
  },
  {
    name: "Hayfa Sdiri",
    org: "",
    bio: "Co-Founder and CIO - RIVET | BBC 100 2019",
    image: "/images/triibe100/Hayfa Sdiri.png",
  },
  {
    name: "Grace Liu",
    org: "",
    bio: "Founder - Research To Empower",
    image: "/images/triibe100/Grace Liu.png",
  },
  {
    name: "Gitanjali Rao",
    org: "",
    bio: "Mentor, Global Keynote & Public Speaker - Vervient Foundation",
    image: "/images/triibe100/Gitanjali Rao.png",
  },
  {
    name: "Esha Venkat",
    org: "",
    bio: "COO, Speaker and Founder - NEST4US",
    image: "/images/triibe100/Esha Venkat.png",
  },
  {
    name: "Dr. Khadija Serwaah Owusu",
    org: "",
    bio: "Founder - AKAYA",
    image: "/images/triibe100/Dr. Khadija Serwaah Owusu.png",
  },
  {
    name: "Diana Chao",
    org: "",
    bio: "Founder - Letters to Strangers",
    image: "/images/triibe100/Diana Chao.png",
  },
  {
    name: "Cole Mattox",
    org: "",
    bio: "Co-Founder and Co-Chairman - First Generation Investors",
    image: "/images/triibe100/Cole Mattox.png",
  },
  {
    name: "Claire Chi",
    org: "",
    bio: "Founder and Executive Director - Dancing Against Hunger",
    image: "/images/triibe100/Claire Chi.png",
  },
  {
    name: "Chethan M",
    org: "",
    bio: "Founder - Khoon",
    image: "/images/triibe100/Chethan M.png",
  },
  {
    name: "Ben Erler",
    org: "",
    bio: "Former Chairman and Board Member for Education - Young Founders Network",
    image: "/images/triibe100/Ben Erler.png",
  },
  {
    name: "Anna Luísa Beserra",
    org: "",
    bio: "CEO - Sustainable Development & Water For All",
    image: "/images/triibe100/Anna Luísa Beserra.png",
  },
  {
    name: "Alexia Hilbertidou",
    org: "",
    bio: "Founder & CEO - GirlBoss New Zealand",
    image: "/images/triibe100/AlexiaHilbertidou.jpg",
  },
];

const rest: Founder[] = Array.from({ length: 90 }, (_, i) => ({
  id: i + 11,
  name: "Name",
  org: "Non Profit",
  bio: "Coming soon.",
  ...restOverrides[i],
}));

export const founders: Founder[] = [...firstTen, ...rest];
