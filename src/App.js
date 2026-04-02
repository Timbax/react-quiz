import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const initialState = {
    questions: [],
    //El estatus puede estar en: "loading", "error", "ready", "active", "finished"
    status: "loading",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return { ...state, questions: action.payload, status: "ready" };

      case "dataFailed":
        return { ...state, status: "error" };
      default:
        throw new Error("Action unknow");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch( {type: "dataFailed"}));
  }, []);

  return (
    <div>
      <Header />
      <Main>
        <p>1/15</p>
        <p>Questions?</p>
      </Main>
    </div>
  );
}
