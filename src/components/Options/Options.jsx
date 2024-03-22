
const Options = ({ values, updateFeedback, totalFeedback, resetFeedback}) => {
  // console.log(values);

  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback === 0 && <button style={{ display: "none" }}>Reset</button>}
      {totalFeedback !== 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}

export default Options;
