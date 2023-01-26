import React from "react";
import { Container, Row } from "react-bootstrap";
import { useProducts } from "../contexts/ProductProvider";
import Product from "./Shared/Product";

const Home = () => {
  const { state } = useProducts();
  console.log("state", state);

  let content;

  if (state?.length === 0) {
    content = <p> Products list is empty</p>;
  }

  if (state?.length > 0) {
    content = (
      <Container>
        <Row>
          {state?.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </Row>
      </Container>
    );
  }

  return <div>{content}</div>;
};

export default Home;
