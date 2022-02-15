/// <reference types="@sveltejs/kit" />

interface Post {
  title: string;
  description?: string;
  draft?: boolean;
  image?: string;
  slug?: string;
  published?: string;
  tags?: string[];
  categories?: string[];
}
