import { useParams } from "react-router-dom";

const PromiseDetail = () => {
  const { id } = useParams();

  return <h1>PromiseDetail: {id}</h1>;
};
export default PromiseDetail;
