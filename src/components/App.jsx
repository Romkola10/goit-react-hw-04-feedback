import React from "react";
import  FeedbackOptions  from "./FeedbackOptions/FeedbackOptions";
import  Statistics  from "./Statistics/Statistics";
import  Notification  from "./Notifications/Notification";
import { useState } from "react";
import Section from './Section/Section';


const App = () =>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {

    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        throw new Error();
    }
  };

  const countTotalFeedback = ()=> {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = ()=> {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section>
        {countTotalFeedback() > 0 ?
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />) : (<Notification message="There is no feedback" />)
        }
      </Section>
    </div>
  );
}

export default App;