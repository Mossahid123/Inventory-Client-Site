import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './Product.css'

const Product = ({ product }) => {


  const { _id, name, img, description, price, supplier, quantity } = product;
  const navigate = useNavigate();
  const navigateToProductDetail = id => {
    navigate(`/product/${_id}`)
    
  }

    return (
      <div className="product-container w-100 mx-auto">
        <Card>
          <Card.Img variant="top" style={{ height: '300px' }} src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p>
              Price: ${price}
            </p>
            <p>
              Supplier: {supplier}
            </p>
            <p>
              Quantity: {quantity}
            </p>
            <p>
              Descriptions:{description.slice(0 , 20)}
            </p>

            <Button className="btn btn-dark w-100 rounded-2 " onClick={() =>navigateToProductDetail(_id)}  >Update</Button>
          </Card.Body>
        </Card>
      </div>

    );
  };

  export default Product;