import { Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../redux/reducers/favoritesReducer";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const navigate = useNavigate();

  const isFavourite = Array.isArray(favourites) && favourites.includes(data.company_name);

  const handleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(data.company_name));
    } else {
      dispatch(addFavourite(data.company_name));
    }
  };

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button onClick={handleFavourite}>{isFavourite ? "Remove from Favourites" : "Add to Favourites"}</Button>
      </Col>
      <Col xs={12} className="mt-3">
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Col>
    </Row>
  );
};

export default Job;
