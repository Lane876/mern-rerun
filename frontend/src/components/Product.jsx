import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { motion } from "framer-motion";

const Product = ({ product }) => {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.1, 1.05],
        position: "relative",
        zIndex: 1,
        background: "inherit",
        rotate: [0, -1, 1, 0],
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`from ${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="div">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Product;
