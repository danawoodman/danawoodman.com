/// <reference types="@sveltejs/kit" />

interface Post {
  title: string;
  description?: string;
  image?: string;
  slug?: string;
  published?: string;
  tags?: string[];
  categories?: string[];
}
