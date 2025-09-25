import Image from 'next/image';

export default function Steps() {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-4 md:py-8 text-center">
            <h1 className="max-w-2xl mx-auto font-bold text-3xl mb-6">
                Everything You Need for Enterprise Communication
            </h1>

            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 mb-6 md:mb-14">
                    <div className="text-left">
                        <h2 className="text-lg font-bold mb-4">Group Chat Excellence</h2>

                        <p className="text-gray-600 mb-4">Create unlimited groups with advanced moderation tools, file sharing capabilities, and real-time collaboration features. Support for large groups and custom notification settings ensures productive team communication at any scale.</p>

                        <div className="text-gray-600">
                            <p><i className="fa-regular fa-circle-check text-[#0A7D40] mr-2"></i>Unlimited group creation</p>
                            <p><i className="fa-regular fa-circle-check text-[#0A7D40] mr-2"></i>Multiple image and document format support</p>
                            <p><i className="fa-regular fa-circle-check text-[#0A7D40] mr-2"></i>Private chat option</p>
                        </div>
                    </div>

                    <div className="flex justify-center bg-[#F3F4F6] py-10 rounded-lg">
                        <div className="relative w-full h-30 md:h-40 lg:h-60">
                            <Image src="/step1.png" alt="Feature illustration" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10">
                    <div className="flex justify-center bg-[#F3F4F6] py-10 rounded-lg order-2 sm:order-1">
                        <div className="relative w-full h-30 md:h-40 lg:h-60">
                            <Image src="/step2.png" alt="Feature illustration" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
                        </div>
                    </div>

                    <div className="text-left order-1 sm:order-2">
                        <h2 className="text-lg font-bold mb-4">Group Chat Excellence</h2>

                        <p className="text-gray-600 mb-4">Create unlimited groups with advanced moderation tools, file sharing capabilities, and real-time collaboration features. Support for large groups and custom notification settings ensures productive team communication at any scale.</p>

                        <div className="text-gray-600">
                            <p><i className="fa-regular fa-circle-check text-[#0A7D40] mr-2"></i>Unlimited group creation</p>
                            <p><i className="fa-regular fa-circle-check text-[#0A7D40] mr-2"></i>Multiple image and document format support</p>
                            <p><i className="fa-regular fa-circle-check text-[#0A7D40] mr-2"></i>Private chat option</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
