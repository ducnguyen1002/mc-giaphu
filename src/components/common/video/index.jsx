import React from 'react'

const Video = () => {
    return (
        <section
            id="video"
            className="container bg-lightBlue py-10 text-navy md:py-20"
        >
            <h2 className="mb-4 text-center uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-navy to-warmBlue drop-shadow-sm leading-snug">
                Video thực tế
            </h2>
            <p className="mb-12 text-center text-xl font-light text-gray-700">
                chương trình MC Gia Phú dẫn dắt
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <div data-aos="fade-up" className="overflow-hidden rounded-3xl border border-blue/30 bg-white/5 p-2 shadow-xl shadow-blue/20 backdrop-blur-sm">
                    <iframe
                        className="aspect-video w-full rounded-2xl"
                        src="https://www.youtube.com/embed/uVhvKM_UKHU"
                        title="Game Show Hoạt Náo Gala Dinner"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                <div data-aos="fade-up" data-aos-delay="100" className="overflow-hidden rounded-3xl border border-blue/30 bg-white/5 p-2 shadow-xl shadow-blue/20 backdrop-blur-sm">
                    <iframe
                        className="aspect-video w-full rounded-2xl"
                        src="https://www.youtube.com/embed/wbK_FKnshdA"
                        title="Mc Gia Phú dẫn Teambuilding"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Video
