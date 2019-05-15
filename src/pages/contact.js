import React from 'react';

import Layout from '../components/Layout'
import Head from '../components/Head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via <a href="https://www.linkedin.com/in/benoit-goupilleau-80093841/" target="_blank" rel="noopener noreferrer">my profile</a> on LinkedIn!
      </p>
    </Layout>
  )
}

export default ContactPage;
