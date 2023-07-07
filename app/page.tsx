import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

const Homepage = async () => {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  return <div></div>;
};

export default Homepage;
