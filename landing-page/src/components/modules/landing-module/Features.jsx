export default function Features() {
    const featureList = [
        { logo: "/src/assets/1.png", heading: "End-to-End Encryption", caption: "Military-grade security ensures your conversations stay private" },
        { logo: "/src/assets/2.png", heading: "White-Label Solution", caption: "Your brand, your domain, your complete control" },
        { logo: "/src/assets/3.png", heading: "API-First Integration", caption: "Seamlessly embed into any software with our developer-friendly APIs" },
        { logo: "/src/assets/4.png", heading: "Enterprise Scalability", caption: "From small teams to global organizations, Xylochat grows with you" }
    ];
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-4 md:py-8 text-center">
            <h1 className="max-w-2xl mx-auto font-bold text-3xl mb-6">
                Stop Compromising on Communication
            </h1>

            <p className="mb-6 text-slate-600 text-lg md:text-xl font-medium text-center">Most businesses struggle with chat solutions that either compromise on security, lack proper integration capabilities, or force unwanted third-party branding onto their platforms.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {featureList.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center border-3 border-[#F3F4F6] rounded-xl px-4 py-8 md:py-12">
                        <img
                            src={feature.logo}
                            alt="feature logo"
                            className="h-10 md:h-12 w-auto object-contain mb-3 md:mb-4"
                        />
                        <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2">{feature.heading}</h3>
                        <p className="text-gray-600 text-xs md:text-sm">{feature.caption}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}