import Head from 'next/head'
import Layout from '../components/Layout/layout';

import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import Advantages from '../components/Advantages/Advantages';
import Tours from '../components/Tours/Tours';
import TopCountries from '../components/TopCountries/TopCountries';

export default function Home() {
  return (
    <div>
      <Head>
        <meta name='description' content='Travel agency main page. From here you can navigate 
        through the whole web app and find main info about the company.' />
        <title>Home</title>
      </Head>
      <Layout >
        <WelcomeSection />
        <Advantages />
        <Tours />
        <TopCountries />
      </Layout>
    </div>
  )
}
