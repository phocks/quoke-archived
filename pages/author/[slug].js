import { apiGet } from "../../lib/utils";

import Layout from "../../components/layout";
import Title from "../../components/title";

export default function Quote(props) {
  const { quote } = props;
  return (
    <Layout title="Author page - Quoke">
      <Title text="/author" />
      <div className="spacer" />
      <hr />
      {props.data[0].name}
      <hr />
    </Layout>
  );
}

Quote.getInitialProps = async ({ req, query }) => {
  const data = await apiGet(req, "/api/get-author/" + query.slug);

  return {
    data: data
  };
};
