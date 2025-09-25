import Head from "next/head";
import HomeLayout from '@/layouts/HomeLayout'
import Landing from '@/components/modules/landing-module/Landing'


export default function Home() {
  return (
    <>
      <Head>
        <title>Landing</title>
        <meta name="description" content="Landing page" />
      </Head>
      <HomeLayout>
        <Landing />
      </HomeLayout>
    </>
  )
}