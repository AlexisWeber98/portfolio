import type { RouteRecord } from "vite-react-ssg"
import RootLayout from "@/layout/RootLayout"
import HomePage, { homeLoader } from "@/pages/HomePage"
import BlogPage, { blogListLoader } from "@/pages/BlogPage"
import BlogPostPage, { blogPostLoader } from "@/pages/BlogPostPage"
import NotFoundPage from "@/pages/NotFoundPage"
import { getBlogPosts } from "@/lib/content"

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: homeLoader },
      { path: "blog", element: <BlogPage />, loader: blogListLoader },
      {
        path: "blog/:slug",
        element: <BlogPostPage />,
        loader: blogPostLoader,
        // Pre-render one static page per blog slug at build time.
        getStaticPaths: async () => (await getBlogPosts()).map((post) => `blog/${post.slug}`),
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]
