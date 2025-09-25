import Head from 'next/head'
import HomeLayout from '@/layouts/HomeLayout'
import Contact from '@/components/modules/landing-module/Contact'

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>
      <HomeLayout>
        <Contact />
      </HomeLayout>
    </>
  )
}