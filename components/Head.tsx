import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Aidan CRISTINI's personal portfolio website."
      />
      <meta
        name="keywords"
        content="aidan cristini, aidan, cristini, portfolio, developer, vscode, visual studio code"
      />
      <meta property="og:title" content="Aidan Cristini's Portfolio" />
      <meta
        property="og:description"
        content="Aidan CRISTINI's personal portfolio website."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nitin Ranganath',
};
