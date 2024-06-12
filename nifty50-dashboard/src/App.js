import './App.css';
import './'
function App() {
  return (
    <div>
      <nav class="navbar">
        <h2>Nifty50 Analysis</h2>
      </nav><br></br>
      <p>Following are the Representative graphs of previous 5 Year <strong>(from 2019-2024 currently)</strong> Analysis</p>

      <div className="grid-container">
        <div className="grid-item">
          <h3>Closing Prices Over Last 5 Years</h3>
          <img src='nifty50_closing_prices.png'alt="Nifty50 Closing Prices" />
        </div><br></br>
        
        <div className="grid-item">
          <h3>Closing Prices with 50-Day and 200-Day Moving Averages</h3>
          <img src='nifty50_moving_averages.png' alt="Nifty50 Moving Averages" />
        </div><br></br>
        
        <div className="grid-item">
          <h3>Yearly Returns Over Last 5 Years</h3>
          <img src='nifty50_yearly_return.png' alt="Nifty50 Yearly Returns" />
        </div>
      </div>
    </div>
  );
}

export default App;
