/// <reference types="@sveltejs/kit" />

interface Post {
  title: string;
  slug?: string;
  published?: string;
  tags?: string[];
  categories?: string[];
}
