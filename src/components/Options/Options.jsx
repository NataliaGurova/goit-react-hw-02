import { AiOutlineSmile } from "react-icons/ai";
import { AiOutlineMeh } from "react-icons/ai";
import { AiOutlineFrown } from "react-icons/ai";
import { AiOutlineRedo } from "react-icons/ai";


const Options = ({ updateFeedback, totalFeedback }) => {

  return (
    <div className="btn">
      <button onClick={() => updateFeedback("good")}>Good <AiOutlineSmile/></button>
      <button onClick={() => updateFeedback("neutral")}>Neutral <AiOutlineMeh/></button>
      <button onClick={() => updateFeedback("bad")}>Bad <AiOutlineFrown/></button>
      {totalFeedback > 0 && <button onClick={() => updateFeedback("reset")}>Reset <AiOutlineRedo/></button>}
    </div>
  );
}

export default Options;
