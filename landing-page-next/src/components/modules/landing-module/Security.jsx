export default function Security() {
    const securityList = [
        { logo: "/01.png", heading: "Integrate", caption: "Our comprehensive SDK and RESTful APIs make integration straightforward. Whether you're building a new application or enhancing an existing one, Xylochat fits naturally into your organization workflow." },
        { logo: "/02.png", heading: "Customize", caption: "Customize every aspect of the chat experience to match your brand. From colors and fonts to custom features and workflows, Xylochat adapts to your needs, not the other way around." },
        { logo: "/03.png", heading: "Scale", caption: "As your business expands, Xylochat scales effortlessly. Add new features, support more users, and integrate additional systems without worrying about performance or security." }
    ];
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-4 md:py-8 text-center">
            <h1 className="mx-auto font-bold text-3xl mb-6">
                Three Steps to <span className="text-[#0A7D40]">Secure, Integrated Communication</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
                {securityList.map((secure, index) => (
                    <div key={index} className="flex flex-col items-center text-center px-4 py-2">
                        <img
                            src={secure.logo}
                            alt="secure logo"
                            className="h-12 w-auto object-contain mb-4"
                        />
                        <h3 className="text-base font-bold mb-2">{secure.heading}</h3>
                        <p className="text-gray-600 text-[13px] leading-loose">{secure.caption}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}