import { useSelector, useDispatch } from "react-redux";
import {setMessage} from "./helloReducer";

function HelloRedux() {
  const { message } = useSelector((state) => state.helloReducer);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(setMessage("Hello Redux"));
  };

  return (
    <div>
      <h1>Hello Redux</h1>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Set Message
      </button>
      <h2>{message}</h2>
    </div>
  );
}
export default HelloRedux;

