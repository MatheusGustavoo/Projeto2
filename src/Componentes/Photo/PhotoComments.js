import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForms from "./PhotoCommentsForms";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);
  return (
    <div>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForms id={props.id} setComments={setComments} />}
    </div>
  );
};

export default PhotoComments;
