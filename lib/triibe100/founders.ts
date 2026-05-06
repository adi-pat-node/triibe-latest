export type Founder = {
  id: number;
  name: string;
  org: string;
  bio: string;
};

const firstTen: Founder[] = [
  { id: 1, name: "Name", org: "Non Profit", bio: "Coming soon." },
  { id: 2, name: "Name", org: "Non Profit", bio: "Coming soon." },
  { id: 3, name: "Name", org: "Non Profit", bio: "Coming soon." },
  { id: 4, name: "Name", org: "Non Profit", bio: "Coming soon." },
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
