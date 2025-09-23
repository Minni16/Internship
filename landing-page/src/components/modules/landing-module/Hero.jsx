import Button from '../../common/Button';

export default function Hero() {
    const getStartedButton = { label: 'Get Started', to: '/get-started' };
    return (
        <section className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24 text-center">
            <div className="mb-4">
                <p className="mx-auto w-fit rounded-lg border border-[#BADAC9] px-3 py-1 text-[10px] text-[#0A7D40] bg-[#E6F1EB]">Organization Wide Messaging</p>
            </div>

            <div className="relative my-4 md:my-6 flex items-center justify-center">
                <img
                    src="/src/assets/chat.png"
                    alt="Chat Icon"
                    className="hidden md:block absolute md:left-0 bottom-0 md:bottom-30 w-10 md:w-16 lg:w-24 lg:bottom-40 h-auto"
                />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-snug">
                    Enterprise chat belongs on <br className="hidden sm:block" />
                    <span className="text-[#0A7D40]">enterprise</span> software
                </h1>
                <img
                    src="/src/assets/chat1.png"
                    alt="Chat Icon"
                    className="hidden md:block absolute md:top-20 md:right-8 w-9 md:w-16 lg:w-24 h-auto"
                />
            </div>

            <p className="text-slate-600 mt-4 md:mt-6 mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto font-medium text-sm md:text-base">
                Consumer chat apps like WhatsApp are 3x more likely to expose your data—put your
                enterprise conversations where they&apos;re safe.
            </p>

            <div className="flex justify-center">
                <Button to={getStartedButton.to}>
                    {getStartedButton.label}
                </Button>
            </div>
        </section>
    );
}

// lg md sm

