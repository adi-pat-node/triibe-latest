export const metadata = {
  title: "The TRIIBUNE Blog",
  description: "Read the latest updates from TRIIBE.",
};

export default function BlogIframePage() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://blog.triibe.org"
        className="w-full h-full border-none"
        title="TRIIBUNE Blog"
      />
    </div>
  );
}
