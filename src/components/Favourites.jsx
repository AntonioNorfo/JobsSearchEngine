import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);

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
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
