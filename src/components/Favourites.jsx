import { useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Favourite Companies</h1>
          {favourites.map((company) => (
            <Row key={company} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
              <Col>
                <Link to={`/${company}`}>{company}</Link>
              </Col>
            </Row>
          ))}
          <Button onClick={() => navigate(-1)} className="mt-3">
            Go Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
