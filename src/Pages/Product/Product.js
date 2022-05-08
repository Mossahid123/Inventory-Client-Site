import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {


  const { _id, name, img, description, price, supplier, quantity } = product;
  const navigate = useNavigate();
  const navigateToProductDetail = id => {
    navigate(`/product/${_id}`)
    
  }

    return (
      <>
        <Card style={{ width: '18rem', height: '36rem' }}>
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
              Descriptions: {description.slice(0 , 20)}
            </p>

            <Button className="btn btn-primary w-100 rounded-2 " onClick={() =>navigateToProductDetail(_id)}  >Update</Button>
          </Card.Body>
        </Card>
      </>

    );
  };

  export default Product;