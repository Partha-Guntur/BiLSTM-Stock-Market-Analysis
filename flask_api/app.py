from flask import Flask, request, jsonify, render_template
import tensorflow as tf

app = Flask(__name__)

import numpy as np
x_train = np.random.rand(100, 1)   # 100 samples, 1 target

# Load your model
model = tf.keras.models.load_model('/Users/partha/Documents/BiLSTM-Stock-Market/flask_api/model.h5')  # Ensure this path is correct

def generate_predictions():
    # Example data - replace with your actual data
    X_test = np.random.rand(10, 10)  # 10 samples, 10 features
    predictions = model.predict(X_test)
    return X_test, predictions

@app.route('/')
def index():
    features, predictions = generate_predictions()
    # Convert features and predictions to lists for easier rendering in HTML
    features_list = features.tolist()
    predictions_list = predictions.tolist()
    # Combine features and predictions for easier rendering
    results = [{'features': f, 'prediction': p[0]} for f, p in zip(features_list, predictions_list)]
    return render_template('index.html', results=results)


if __name__ == '__main__':
    app.run(debug=True)
