import fetchNews from "@/lib/fetchNews";
import NewsList from "@/app/NewsList";

type Props = {
  params: { category: Category };
};

const NewsCategory = async ({ params: { category } }: Props) => {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategory;
