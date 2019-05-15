import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout'
import Head from '../components/Head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>I am currently a Fullstack JS Lead Developer and DevOps working as freelance</p>
      <p><Link to="/contact">Need my help on a project? Reach out.</Link></p>
    </Layout>
  )
}

export default AboutPage;
