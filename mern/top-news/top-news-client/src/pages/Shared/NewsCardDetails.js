import Card from "react-bootstrap/Card";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

function NewsCardDetails() {
  const newsDetails = useLoaderData();
  const { total_view, rating, title, image_url, author, details } = newsDetails;

  return (
    <Card className="text-center my-4">
      <Card.Body>
        <Card.Header>
          <Card.Title className="text-start">{title}</Card.Title>
        </Card.Header>
        <img src={image_url} className="img-fluid mb-3" alt="" />
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img
              src={author.img}
              className="img-fluid mb-3 rounded-pill"
              alt=""
              width={30}
              height={30}
            />
            <span className="ms-3">{author.name ? author.name : "Author"}</span>
          </div>
          <div>
            <p className="text-start text-primary">{author.published_date}</p>
          </div>
        </div>
        <Card.Text className="text-start">{details}</Card.Text>
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
          <div className="d-flex justify-content-between align-items-center">
            <p className="me-3">
              <BsFillBookmarkFill />
            </p>
            <p>
              <BiShareAlt />
            </p>
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default NewsCardDetails;
