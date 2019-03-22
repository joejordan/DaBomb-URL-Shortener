import Header from "./Header";
import Meta from "./Meta";

function Page(props) {
  return (
    <>
      <Meta />
      <Header />
      {props.children}
    </>
  );
}

export default Page;
