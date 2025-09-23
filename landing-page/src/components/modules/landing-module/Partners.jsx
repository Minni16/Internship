export default function Partners() {
    const partnerList = [
        { logo: "/src/assets/partner.png"},
        { logo: "/src/assets/ktmbees-big.png"},
    ];
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-4 md:py-8 text-center">
            <p className="max-w-2xl mx-auto font-bold text-3xl mb-6">
                Our Partners
            </p>

            <div className="flex items-center justify-center gap-2 flex-wrap">
                {partnerList.map((partner, index) => (
                    <div key={index} className="p-2">
                        <img
                            src={partner.logo}
                            alt="Partner logo"
                            className="h-15 w-auto md:h-30 object-contain"
                        />
                    </div>
                ))}
                <p className="font-bold text-2xl md:text-6xl">KtmBees</p>
            </div>

        </section>
    );
}