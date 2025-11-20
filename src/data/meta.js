import Head from "next/head";
import { useRouter } from "next/router";

const MetaTags = () => {
  const router = useRouter();

  const metaTagsData = {
    "/": {
      title: "Bhondekar Shikshan Sanstha",
      description:
        "Bhondekar Shiksha Sansthan, Bhandara, since 2002, is a trusted name in medical and nursing education. ",
      keywords: "",
      schema: {},
    },

    "/about-us": {
      title: "About Us",
      description:
        "Bhondekar Shiksha Sansthan, Bhandara, since 2002, is a ",
      keyword: "",
      schema: {},
    },
  };

  const currentMetaTags = metaTagsData[router.pathname] || {};

  return (
    <Head>
      <title>{currentMetaTags.title}</title>
      <meta name="description" content={currentMetaTags.description} />
      <meta name="keywords" content={currentMetaTags.keywords} />
      <link rel="canonical" href="" />
      {currentMetaTags.schema && (
        <script type="application/ld+json">
          {JSON.stringify(currentMetaTags.schema)}
        </script>
      )}
    </Head>
  );
};

export default MetaTags;
