function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to reat quiz</h2>
      <h3>{numQuestions} Questions to test your react mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default StartScreen;
