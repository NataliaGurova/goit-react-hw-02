import { useState, useEffect } from 'react'
import './App.css'
import Description from "./components/Description/Description"
import Options from "./components/Options/Options"
import Feedback from "./components/Feedback/Feedback"
import Notification from "./components/Notification/Notification"


const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = JSON.parse(localStorage.getItem("feedback"));
    if (savedClicks === null) {
      return {
        good: 0,
        neutral: 0,
        bad: 0
      };
    }
    return savedClicks;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positive = Math.round((clicks.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} total={totalFeedback} positive={positive} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;