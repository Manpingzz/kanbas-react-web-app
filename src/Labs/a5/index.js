import WorkingWithArrays from "../a5/WorkingWithArrays";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a
          href={`${process.env.REACT_APP_LAB_BASE}/welcome`}
          className="list-group-item"
        >
          Welcome
        </a>
      </div>
      <WorkingWithArrays />
      <WorkingWithObjects />
      <EncodingParametersInURLs />

      {/* <SimpleAPIExamples /> */}
    </div>
  );
}
export default Assignment5;
