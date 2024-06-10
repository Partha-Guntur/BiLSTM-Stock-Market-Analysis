import './App.css';

function App() {

  return (
    <div>

      <h2>Nifty50 Analysis</h2>
      <div>
        <div>
          <h3>Closing Prices Over Last 5 Years</h3>
          <img src='nifty50_closing_prices.png'alt="Nifty50 Closing Prices" />
        </div><br></br>
        <div>
          <h3>Closing Prices with 50-Day and 200-Day Moving Averages</h3>
          <img src='nifty50_moving_averages.png' alt="Nifty50 Moving Averages" />
        </div><br></br>
        <div>
          <h3>Yearly Returns Over Last 5 Years</h3>
          <img src='nifty50_yearly_return.png' alt="Nifty50 Yearly Returns" />
        </div>
      </div>

    </div>
  );
}

export default App;
