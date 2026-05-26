import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Argus — Autonomous AI Security for DeFi',
  description = 'Argus builds autonomous AI agents that monitor, detect, and respond to DeFi exploits before damage occurs. Runtime security for Web3 protocols.',
  path = '',
}) {
  const url = `https://argus.security${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
