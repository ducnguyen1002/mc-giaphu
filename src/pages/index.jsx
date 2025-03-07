import AboutMe from '@/components/common/about-me'
import Hero from '@/components/common/hero'
import Skills from '@/components/common/skills'
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
        </>
    )
}
