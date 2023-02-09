import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function NewsCard({ ct }) {
  const { _id, total_view, rating, title, image_url, author, details } = ct;

  return (
    <Card className="text-center my-4">
      <Card.Body>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <img
              src={author.img}
              className="img-fluid mb-3 rounded-pill"
              alt=""
              width={30}
              height={30}
            />
            <span className="ms-3">{author.name ? author.name : "Author"}</span>
            <p className=" text-primary">{author.published_date}</p>
          </div>
          <div>
            <p className="me-3">
              <BsFillBookmarkFill />
            </p>
            <p>
              <BiShareAlt className=" text-primary" />
            </p>
          </div>
        </Card.Header>
        <img src={image_url} className="img-fluid mb-3" alt="" />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details.slice(0, 100)}...</Card.Text>
        <Link to={`/news/${_id}`}>
          <Button variant="primary my-2">Read Details</Button>
        </Link>
        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div>
            <span>
              <GrView className="me-2" />
              {total_view}
            </span>
          </div>
          <div>
            <span>
              <AiFillStar className="me-2 text-warning" />
              {rating.number}
            </span>
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
