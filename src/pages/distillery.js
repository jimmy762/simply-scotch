// component imports
import RenderDistillery from "../components/renderDistillery";
import RenderComments from "../components/renderComments";

//Pass in info for selected distillery
function Distillery(props) {
  return (
    <div>
      {/* render distillery name and description using imported component */}
      <RenderDistillery distillery={props.distillery} />
      {/* render top comments under this distillery */}
      <RenderComments comments={props.comments} />
    </div>
  );
}

export default Distillery;
