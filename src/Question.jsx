import React, { useEffect, useState } from "react";

let i = 0;
const Question = props => {
  const [state, setState] = useState(props.test[i]);

  const nextQuestion = () => {
    console.log(i);
    setState(props.test[++i]);
  };

  useEffect(() => {
    console.log("props: ", props.test);
    setState(props.test[i]);
  }, [props]);

  return (
    <div className="row text-center mt-5">
      <div className="col-lg-6">
        <div onClick={nextQuestion} className="questions__case">
          {state.A}
        </div>
      </div>
      <div className="col-lg-6">
        <div className="questions__case">{state.B}</div>
      </div>
    </div>
  );
};

export default Question;
