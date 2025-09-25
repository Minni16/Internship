export default function Platforms() {
    const platformList = [
        { logo: "/windows.png", caption: "Windows" },
        { logo: "/browser.png", caption: "Browser" },
        { logo: "/android.png", caption: "Android" },
        { logo: "/apple.png", caption: "Apple" }
    ];
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-4 md:py-8 text-center">
            <p className="max-w-2xl mx-auto font-bold mb-6 text-2xl ">
                Supported Platforms
            </p>

            <div className="flex items-center justify-center gap-20 flex-wrap">
                {platformList.map((platform, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={platform.logo}
                            alt={platform.caption}
                            className="w-12 h-12"
                        />
                        <p className="mt-2 text-sm font-medium">{platform.caption}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}