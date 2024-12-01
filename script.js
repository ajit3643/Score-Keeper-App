let score = 0;
let wicket = 0;
const MAX_WICKETS = 10;
function addOne() {
  score += 1;
  rootElement.render(<App />);
}
function addTwo() {
  score += 2;
  rootElement.render(<App />);
}
function addThree() {
  score += 3;
  rootElement.render(<App />);
}
function addFour() {
  score += 4;
  rootElement.render(<App />);
}
function addSix() {
  score += 6;
  rootElement.render(<App />);
}
function addWicket() {
  wicket += 1;
  rootElement.render(<App />);
}
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
    <div>
      <span>Runs: </span>
      <button onClick={addOne}>1</button>
      <button onClick={addTwo}>2</button>
      <button onClick={addThree}>3</button>
      <button onClick={addFour}>4</button>
      <button onClick={addSix}>6</button>
      <button onClick={addWicket}>Wicket</button>
    </div>
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
