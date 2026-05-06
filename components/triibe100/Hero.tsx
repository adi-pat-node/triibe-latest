export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: "#ffffff", padding: "144px 0 64px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <img
          src="/TRIIBEI00-logo.png"
          alt="TRIIBE I00"
          style={{
            width: "auto",
            height: "120px",
            objectFit: "contain",
            margin: "0 auto",
            display: "block",
            marginBottom: "20px",
          }}
        />

        <p
          style={{
            fontSize: "16px",
            color: "#303641",
            opacity: 0.65,
            fontWeight: 400,
            maxWidth: "420px",
            margin: "0 auto",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          The definitive list of next-gen nonprofit founders under 30 to know.
        </p>

        <p
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#002C19",
            border: "1px solid #002C19",
            padding: "4px 14px",
            borderRadius: "99px",
            marginTop: "20px",
          }}
        >
          Coming Soon
        </p>
      </div>
    </section>
  );
}
