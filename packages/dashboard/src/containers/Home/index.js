import Empty from "components/molecules/Empty";

import EmptyImage from "assets/images/test.png";

function Home() {
  return (
    <>
      <Empty
        image={EmptyImage}
        text="You don't have any Tour yet."
        button={{
          href: "/create-tour",
          text: "Create Tour",
        }}
      />
    </>
  );
}

export default Home;
