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
    org: "Zoe's Dolls",
    bio: "",
    image: "/images/triibe100/Zoe Terry.png",
  },
  {
    id: 2,
    name: "Varuni Chopra",
    org: "Bridge The Gap",
    bio: "",
    image: "/images/triibe100/Varuni Chopra.png",
  },
  {
    id: 3,
    name: "Trisha Prabhu",
    org: "ReThink Foundation",
    bio: "",
    image: "/images/triibe100/Trisha Prabhu.png",
  },
  {
    id: 4,
    name: "Shrusti Amula",
    org: "Rise N Shine Foundation",
    bio: "",
    image: "/images/triibe100/Shrusti Amula.png",
  },
  {
    id: 5,
    name: "Sharona Shnayder",
    org: "Tuesdays for Trash",
    bio: "",
    image: "/images/triibe100/Sharona Shnayder.png",
  },
  {
    id: 6,
    name: "Sayed Zubaer Hasan",
    org: "Krishi Shwapno",
    bio: "",
    image: "/images/triibe100/Sayed-Zubaer-Hasan 2.png",
  },
  {
    id: 7,
    name: "Samin Bhan",
    org: "Lookup",
    bio: "",
    image: "/images/triibe100/Samin Bhan.png",
  },
  {
    id: 8,
    name: "Rimza Razaque",
    org: "Al Arzen",
    bio: "",
    image: "/images/triibe100/Rimza Razaque.png",
  },
  {
    id: 9,
    name: "Rachel Parent",
    org: "Kids Right to Know",
    bio: "",
    image: "/images/triibe100/Rachel Parent.png",
  },
  {
    id: 10,
    name: "Olivia Zhang",
    org: "Cancer Kids First",
    bio: "",
    image: "/images/triibe100/Olivia Zhang.png",
  },
];

const restOverrides: Partial<Founder>[] = [
  {
    name: "Nils Rauscher",
    org: "Liberating Education Organization",
    bio: "",
    image: "/images/triibe100/Nils Rauscher.png",
  },
  {
    name: "Nayla Jimenez",
    org: "Philippine Health Initiative",
    bio: "",
    image: "/images/triibe100/Nayla Jimenez.png",
  },
  {
    name: "Mirus Ponon",
    org: "ASEAN Youth Advocates Network (AYAN)",
    bio: "",
    image: "/images/triibe100/Mirus Ponon.png",
  },
  {
    name: "Mathias Charles Yabe",
    org: "AkoFresh",
    bio: "",
    image: "/images/triibe100/Mathias Charles Yabe.png",
  },
  {
    name: "Maria Keller",
    org: "Read Indeed",
    bio: "",
    image: "/images/triibe100/Maria Keller.png",
  },
  {
    name: "Josh Fields",
    org: "The Next Step Programs",
    bio: "",
    image: "/images/triibe100/Josh Fields.png",
  },
  {
    name: "Jared Fenton",
    org: "The Reflect Organization",
    bio: "",
    image: "/images/triibe100/Jared Fenton.png",
  },
  {
    name: "Jahnavi Rao",
    org: "New Voters",
    bio: "",
    image: "/images/triibe100/Jahnavi Rao.png",
  },
  {
    name: "Stanley Anigbogu",
    org: "LightEd Impact Foundation",
    bio: "",
    image: "/images/triibe100/Stanley Anigbogu.png",
  },
  {
    name: "Hikaru (Wakeel) Hayakawa",
    org: "Climate Cardinals",
    bio: "",
    image: "/images/triibe100/Hikaru Wakeel Hayakawa.png",
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
