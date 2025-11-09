import AboutMe from '@/components/common/about-me'
import Feedbacks from '@/components/common/feedbacks'
import Hero from '@/components/common/hero'
import Skills from '@/components/common/skills'
import TheFooter from '@/components/common/the-footer'
import TheHeader from '@/components/common/the-header'
import Video from '@/components/common/video'
import WhyMe from '@/components/common/why-me'
import Head from 'next/head'
import FloatingContactButtons from '@/components/common/the-contact-btns'
import LoadingScreen from '@/components/common/loading-screen'

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
            <TheHeader />
            <Hero />
            <AboutMe />
            <Skills />
            <Video />
            <WhyMe />
            <Feedbacks />
            <TheFooter />
            <FloatingContactButtons />
        </>
    )
}
