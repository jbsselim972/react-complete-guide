import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const id = router.query.newsId;
  return <div>DetailPage {id}</div>;
};

export default DetailPage;
