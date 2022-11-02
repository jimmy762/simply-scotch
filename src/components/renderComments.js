import { Button } from "reactstrap";

//? Does comments need to be destructured in RenderComments fx
function RenderComments({ comments }) {
  return (
    <div>
      {TopComments(comments)}
      <Button> Add Comment </Button>
      <Button> View All </Button>
    </div>
  );
}

// TODO: TopComments fx must return the top liked comments from the array of comments
function TopComments({ comments }) {}

export default RenderComments;
