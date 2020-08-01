import Head from 'next/head';

import Poster from '../components/Poster/Poster';
import Tours from '../components/Tours/Tours';
import UsefullInfo from '../components/UsefullInfo/UsefullInfo';

import Layout from '../components/Layout/layout';

const TourInfo = () => {
    return (
        <Layout>
            <Head>
                <title>Tours</title>
            </Head>
            <Poster />
            <Tours />
            <UsefullInfo />
        </Layout>
    )
}

export default TourInfo;