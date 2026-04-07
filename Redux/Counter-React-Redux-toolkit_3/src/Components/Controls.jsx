import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAddition = () => {
    dispatch(counterActions.add({ 
      num : inputValue.current.value
    }));
    inputValue.current.value = "";
  }

  const handleSubstraction = () => {
    dispatch(counterActions.substract({ 
      num : inputValue.current.value
    }));
    inputValue.current.value = "";
  }

  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  }
  
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Private
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center advance-controls">
        <input
          type="text"
          placeholder="Enter Number.."
          className="input-value"
          ref={inputValue}
        />

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddition}
        >
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubstraction}
        >
          Sub
        </button>
      </div>
    </>
  );
};

export default Controls;
