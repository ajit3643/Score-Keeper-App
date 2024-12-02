let score = 0;
let wicket = 0;
let ballWise = [];

function addScore(run) {
  ballWise.push(run);
  if (wicket < 10) {
    score += run;
    rootElement.render(<App />);
  }
}

function addWicket() {
  ballWise.push("W");
  if (wicket < 10) {
    wicket += 1;
    rootElement.render(<App />);
  }
}
const ScoreButtons = () => (
  <div>
    <span>Runs: </span>
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={addWicket}>Wicket</button>
  </div>
);

const Result = () => (
  <div>
    {ballWise.map((res, index) => (
      <>
        {index % 6 === 0 ? <br /> : null}
        <span key={index}>{res === 0 ? <strong>.</strong> : res}</span>
        &nbsp;&nbsp;
      </>
    ))}
  </div>
);

const App = () => (
  <>
    <h1>India vs Australia, 2nd Test - Live Cricket Score, Commentary</h1>
    <h2>India</h2>
    <img
      src="https://seeklogo.com/images/I/india-flag-logo-3522C6780F-seeklogo.com.png"
      alt="India"
      height="100"
      width="150"
    />
    <h2>
      India: {score}/{wicket}
    </h2>
    <h3>Batter: R&nbsp;B&nbsp;4s&nbsp;6s&nbsp;SR</h3>
    <p>Virat Kohli*</p>
    <p>Rohit Sharma*</p>
    <ScoreButtons />
    <Result />
    <h2>Australia</h2>
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1200px-Flag_of_Australia.svg.png?20190118170740"
      alt="Australia"
      height="100"
      width="150"
    />
    <h3>Bowler:&nbsp;O&nbsp;M&nbsp;R&nbsp;W&nbsp;ECO</h3>
    <p>Starc: </p>
  </>
);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
