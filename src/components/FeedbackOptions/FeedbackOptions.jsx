import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>{
    return (
        <>
            <div>
                {options.map(option => {
                    return (
                        <button type='button' className="button" onClick={() => onLeaveFeedback(option)}
                            key={option}
                        >{option}</button>
                    );
                })}
            </div>
        </>
    );
}

FeedbackOptions.protoType = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;
  

