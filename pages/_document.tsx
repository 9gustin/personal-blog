import Document, { Html, Head, Main, NextScript } from "next/document";
import user from "../config/user";

class MyDocument extends Document {
  data = {
    title: `${user.mainTitle}${user.pageTitle}`,
    description: user.description,
    url: user.url,
    image: user.mainImagePath,
  };

  render() {
    const { title, description, url, image } = this.data;

    return (
      <Html lang="es">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={image} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content={image} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
