import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";

const Comment = ({ filmInfo }) => {
  console.log(filmInfo);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="comment">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="commentTitle">
            You can write a comment about this movie.
          </Form.Label>
          <Form.Control className="textField" as="textarea" rows={5} />
        </Form.Group>
        <Button className="submitButton">Submit</Button>
      </Form>
    </div>
  );
};

export default Comment;
