// data/articles.ts

export interface Article {
  title: string;
  date: string;
  description: string;
  link: string;
}

const articles: Article[] = [
  {
    title: "Welcome to My Portfolio",
    date: "2025-01-01",
    description: "This is a sample article to demonstrate how articles appear in the portfolio.",
    link: "https://example.com/article-1"
  },
  {
    title: "Next.js Tips and Tricks",
    date: "2025-02-10",
    description: "Some useful Next.js tips for building and deploying projects like this one.",
    link: "https://example.com/article-2"
  }
];

export default articles;
