import { useState } from 'react'
import './App.css'
import Description from "./components/Description/Description"
import Options from "./components/Options/Options"
import Feedback from "./components/Feedback/Feedback"
import Notification from "./components/Notification/Notification"



const App = () => {
  
  const [ values, setValues ] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  );

  console.log(values);
  
  const updateFeedback = (feedbackType) => {
    setValues({
  		...values,
  	  [feedbackType]: values[feedbackType] + 1
    });
};

  const totalFeedback = values.good + values.neutral + values.bad;
  const positive = Math.round((values.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  return (
    <>
      <Description />
      <Options values={values} updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
      {totalFeedback > 0 ? 
      <Feedback good={values.good} neutral={values.neutral} bad={values.bad} total={totalFeedback} positive={positive} /> : 
      <Notification/>}
  </>  
  )
};

export default App;