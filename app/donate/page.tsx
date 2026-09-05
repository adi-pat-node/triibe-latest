import { redirect } from "next/navigation";

export const metadata = {
  title: "Fund The Nonprofit Startup Sector | TRIIBE",
  description:
    "Channel capital to the nonprofit startup sector through TRIIBE, equitably allocating to the leading young nonprofit founders around the world.",
  openGraph: {
    title: "Fund The Nonprofit Startup Sector | TRIIBE",
    description:
      "Your donation helps TRIIBE provide mentorship and resources to young change makers creating positive social impact.",
    url: "https://www.triibe.org/donate",
  },
  alternates: {
    canonical: "https://www.triibe.org/donate",
  },
};

export default function page() {
  redirect("https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz");
}
