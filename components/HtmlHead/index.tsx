import Head from "next/head";
import React from "react";
import user from "../../config/user";

interface Props {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

function HtmlHead({ title, description, url, image }: Props) {
  const data = {
    title: title || `${user.mainTitle}${user.pageTitle}`,
    description: description || user.description,
    url: url || user.url,
    image: image || user.mainImagePath,
  }

  return (
    <Head>
      <title>{data.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.url} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={data.image} />
      <meta property="twitter:title" content={data.title} />
      <meta property="twitter:description" content={data.description} />
      <meta property="twitter:image" content={data.image} />
    </Head>
  );
}

export default HtmlHead;
