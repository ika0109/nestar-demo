import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>PROPERTY DETAIL{productId}</div>;
};
export default Detail;
