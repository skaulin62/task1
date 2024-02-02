import classes from "./Comment.module.sass";

import Button from "../UI/Button";
const Comment = () => {
  return (
    <div className={classes.comment}>
      <div className={classes.userIcon}>
        <img src="https://trello-members.s3.amazonaws.com/65b89f439f456aba16f40989/3b4ea385fc3f4513edce3dad4a12061a/170.png" />
      </div>
      <div className={classes.mainBlock}>
        <span className={classes.userName}>Hello</span>
        <span className={classes.text}>
          Lorem inpsumLorem inpsumLorem inpsumLorem inpsumLorem inpsumLorem
          inpsumLorem inpsum
        </span>
        {/* <textarea
          className={classes.commentText}
          value="dddddddddddddddddsaaaaaaaaaaaaaaaaddddddddddddddddddsssssssssssssssssssssaaaaaaaaaaaaaaaa dasda sdsdasdasdddddddddddddddddddddd"
          onChange={() => {}}
        /> */}
        <div className={classes.actions}>
          <Button>Edit</Button>
          <Button>Remove</Button>

          {/* <>
            <Button>Save</Button>
            <Button>Cancel</Button>
          </> */}
        </div>
      </div>
    </div>
  );
};

export default Comment;
