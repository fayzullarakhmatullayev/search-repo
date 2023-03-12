import { useParams } from "react-router";

type RouteParams = {
  id: string;
};

const DetailPage: React.FC = () => {
  const params = useParams<RouteParams>();

  return <div>DetailPage {params.id}</div>;
};

export default DetailPage;
