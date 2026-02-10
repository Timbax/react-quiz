import { useReducer } from "react";

/* AL UTILIZAR useReducer POR LO GENERAL SE UTILIZA UN OBJETO COMO VALOR INICIAL */
const initialState = { count: 0, step: 1 };

/* LA FUNCION REDUCER GENERALMENTE RECIBE ESTOS DOS PARAMETROS SIEMPRE "STATE" Y "ACTION"  */
function reducer(state, action) {
  console.log(state, action);

  /* TAMBIEN ES MUY COMUN UTILIZAR SWTICH EN VEZ DE IF PARA VALIDAR LOS DATOS */
  /* EN ESTE CASO EL SWITCH VALIDA EL "action.type" QUE ES EL DISPATCH ESTABLECIDO EN EL useReducer */
  /* AL SER EL STATE UN OBJETO QUE CONTIENE COUNT Y STEP, ES NECESARIO RETORNAR UN NUEVO OBJETO CON EL MISMO
    DISEÑO DEL OBJETO ORIGINAL PERO AGREGANDO LA FUNCION QUE SE DESEA. EN ESTE CASO SUMAR SI ES "INC" 
    Y RESTAR SI ES "DEC"  */
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;

    default:
      throw new Error("Unknow action");
  }

  /* if (action.type === "dec") return state - 1;
  if (action.type === "inc") return state + 1;
  if (action.type === "setCount") return action.payload; */
}

function DateCounter() {
  /* const [count, setCount] = useState(0); */
  /* const [step, setStep] = useState(1); */

  /* "sate" HACE REFERENCIA AL ESTADO QUE BASICAMANTE CONTIENE LOS DATOS DE "initialState" */
  const [state, dispatch] = useReducer(reducer, initialState);

  /*  AQUI SE DESTRUCTURAN LOS DATOS QUE ESTAN DENTRO DE "state" EN ESTE CASO "count" y "step" */
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    /* setCount((count) => count - step); */
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    /* setCount((count) => count + step); */
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    /* setCount(Number(e.target.value)); */
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
    /* setStep(Number(e.target.value)); */
  };

  const reset = function () {
    dispatch({ type: "reset" });
    /* setCount(0); */
    /* setStep(1); */
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
