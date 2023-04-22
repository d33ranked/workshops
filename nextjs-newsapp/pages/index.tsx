import NewsArticlesGrid from '@components/components/NewsArticlesGrid';
import NewsArticleEntry from '@components/components/NewsarticleEntry';
import { NewsArticle, NewsResponse } from '@components/models/NewsArticles';
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { Alert } from 'react-bootstrap';

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[],
}
export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY)
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles }
  }
}

export default function BreakingNewsPage({newsArticles} : BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title" >Breaking News</title>
      </Head>
      <main>
        <h1>Breaking News</h1>
        <Alert>
          This page uses <strong>getServerSideProps</strong> to fetch data server-side on every request.
          This allows search engines to crawl the page content and <strong>improves SEO</strong>

        </Alert>
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  );
}


