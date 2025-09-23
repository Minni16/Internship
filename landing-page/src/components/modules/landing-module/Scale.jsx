export default function Scale() {
    const scaleList = [
        { logo: "/src/assets/3.png", heading: "API-First Architecture", caption: "RESTful APIs and comprehensive SDKs for all major platforms" },
        { logo: "/src/assets/5.png", heading: "Platform Compatibility", caption: "Works with web, mobile, desktop, and hybrid applications" },
        { logo: "/src/assets/1.png", heading: "Security & Compliance", caption: "End to End encryption compatible with enterprise standards" },
        { logo: "/src/assets/4.png", heading: "Scalability & Performance", caption: "Real time chat with sub-100ms response times" }
    ];
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-4 md:py-8 text-center">
            <h1 className="mx-auto font-bold text-3xl mb-6">
                From Startup to Enterprise — Built to Scale with You.
            </h1>

            <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
                {scaleList.map((scale, index) => (
                    <div key={index} className="flex flex-col items-center text-center border-3 border-[#F3F4F6] rounded-xl px-4 py-6">
                        <img
                            src={scale.logo}
                            alt="scale logo"
                            className="h-12 w-auto object-contain mb-4"
                        />
                        <h3 className="text-base font-bold mb-2">{scale.heading}</h3>
                        <p className="text-gray-600 text-sm">{scale.caption}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}