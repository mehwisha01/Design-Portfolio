import React from "react";
import { GatsbyLocation } from "local-types";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useSiteMetadata } from "../hooks";

interface NotFoundPageProps {
  location: GatsbyLocation;
}

const NotFoundPage: React.FunctionComponent<NotFoundPageProps> = ({
  location,
}): React.ReactElement => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not FoundI am " />
      <h1>Trust me, I am working hard to convert this to a learning lesson</h1>
      <p>
        You just hit a route that doesn&#39;t exist... the sadness. Hit home on
        top to go back to main page.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
