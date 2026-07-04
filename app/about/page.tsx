import AboutClient from "./AboutClient";

export const metadata = {
  title: "About TRIIBE | Empowering Next-Gen Nonprofit Innovators",
  description:
    "Meet the global team behind TRIIBE, empowering next-gen nonprofit innovators under 30 with funding and mentorship.",
  alternates: {
    canonical: "https://www.triibe.org/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
