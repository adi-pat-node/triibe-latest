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
  { id: 5, name: "Name", org: "Non Profit", bio: "Coming soon." },
  { id: 6, name: "Name", org: "Non Profit", bio: "Coming soon." },
  { id: 7, name: "Name", org: "Non Profit", bio: "Coming soon." },
  { id: 8, name: "Name", org: "Non Profit", bio: "Coming soon." },
  { id: 9, name: "Name", org: "Non Profit", bio: "Coming soon." },
  { id: 10, name: "Name", org: "Non Profit", bio: "Coming soon." },
];

const rest: Founder[] = Array.from({ length: 90 }, (_, i) => ({
  id: i + 11,
  name: "Name",
  org: "Non Profit",
  bio: "Coming soon.",
}));

export const founders: Founder[] = [...firstTen, ...rest];
