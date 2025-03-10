import React from 'react'

const Video = () => {
    return (
        <section
            id="video"
            className="container bg-lightBlue py-10 text-navy md:py-20"
        >
            <h2 className="mb-4 text-center uppercase tracking-wide">
                Video thực tế
            </h2>
            <p className="mb-12 text-center text-xl font-light text-gray-700">
                chương trình MC Gia Phú dẫn dắt
            </p>

            <iframe
                className="aspect-video max-h-[80vh] w-full rounded-xl"
                src="https://www.youtube.com/embed/uVhvKM_UKHU"
                title="Game Show Hoạt Náo Gala Dinner"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </section>
    )
}

export default Video
