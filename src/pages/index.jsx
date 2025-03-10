import AboutMe from '@/components/common/about-me'
import Feedbacks from '@/components/common/feedbacks'
import Hero from '@/components/common/hero'
import Skills from '@/components/common/skills'
import Video from '@/components/common/video'
import WhyMe from '@/components/common/why-me'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>MC Gia Phú</title>
                <meta
                    name="description"
                    content={
                        'MC sự kiện, sinh nhật, team building chuyên nghiệp'
                    }
                />
            </Head>
            <Hero />
            <AboutMe />
            <Skills />
            <Video />
            <WhyMe />
            <Feedbacks />
        </>
    )
}
