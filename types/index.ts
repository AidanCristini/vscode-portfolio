export interface Article {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  page_views_count: number;
  public_reactions_count: number;
  comments_count: number;
}

export interface Project {
  title: string;
  description: string;
  coverImage: string;
  link: string;
  slug: string;
  competences?: string[];
  fullDescription?: string;
  gallery?: string[];
  technologies?: string[];
  features?: string[];
  webLink?: string;
}

export interface Competences {
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}
