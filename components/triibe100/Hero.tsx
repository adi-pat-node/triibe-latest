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
            color: "#002c19",
            opacity: 0.65,
            fontWeight: 300,
            maxWidth: "420px",
            margin: "0 auto",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          The definitive global list of nonprofit founders under 30 to know
        </p>
      </div>
    </section>
  );
}
