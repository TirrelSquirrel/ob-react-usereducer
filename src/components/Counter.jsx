import React, { useReducer, useContext } from "react";

// Acciones
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const myContext = React.createContext(null);

const Points = () => {
  const state = useContext(myContext);
  return <p>Counter: {state.count}</p>;
};

const Counter = () => {
  // Creamos un estado inicial
  const initialState = {
    count: 0,
  };

  // Creamos el reducer asociado al estado
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          count: state.count + action.payload.quantity,
        };
      case DECREMENT:
        return {
          count: state.count - action.payload.quantity,
        };
      case RESET:
        return {
          count: 0,
        };
      default:
        return state;
    }
  };

  // Asignamos useReducer al state, reducer y dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <myContext.Provider value={state}>
      <div>
        <Points></Points>
        <br></br>
        <button
          onClick={() =>
            dispatch({
              type: INCREMENT,
              payload: {
                quantity: 1,
              },
            })
          }
        >
          INCREMENT
        </button>
        <button
          onClick={() =>
            dispatch({
              type: DECREMENT,
              payload: {
                quantity: 1,
              },
            })
          }
        >
          DECREMENT
        </button>
        <button onClick={() => dispatch({ type: RESET })}>RESET</button>
      </div>
    </myContext.Provider>
  );
};

export default Counter;
