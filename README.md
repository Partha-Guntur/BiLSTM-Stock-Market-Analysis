# Indian Market Index Prediction using BiLSTM

This project aims to predict the movement of Indian stock market indexes for a 5 year Market only on Nift50 Stock Index, using a Bidirectional Long Short-Term Memory (BiLSTM) model. The predictions are displayed on a simple and interactive React website, allowing users to view forecasts in real time.

## Project Overview

The primary goal of this project is to harness the power of deep learning to forecast the future values of major Indian stock market indexes such as the BSE SENSEX and NSE NIFTY 50. A BiLSTM network is employed to model the sequence of historical price data, taking into account both past and future contexts effectively. The React frontend provides an intuitive interface for users to interact with the predictions.

## Model Details

The BiLSTM model uses historical stock price data, including open, high, low, and close prices (OHLC), along with volume traded. By processing this data in both forward and reverse directions, the BiLSTM can capture complex patterns and trends that are indicative of future movements.

### Data Sources

- Historical data for BSE SENSEX and NSE NIFTY 50 obtained from [Yahoo Finance](https://finance.yahoo.com).
- Data is updated daily using a scheduled script that fetches and preprocesses new market data.

## Website Features

- **Live Predictions**: Displays live prediction charts for the next trading day.
- **Historical Accuracy**: Shows historical predictions vs. actual outcomes to evaluate the model's performance.
- **Data Refresh**: Automatic daily updates to incorporate the latest market data.

## Tech Stack

- **Data Processing and Model Training**: Python, Pandas, NumPy, TensorFlow/Keras
- **Backend API**: Flask
- **Frontend**: React


## Setup and Installation

Ensure you have the following tools installed:
- Python (3.8+)
- Node.js (14+)
- Yahoo Finance

### Clone the Repository

```bash
git clone https://github.com/yourusername/indian-market-index-prediction.git
cd indian-market-index-prediction
