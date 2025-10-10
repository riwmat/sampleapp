from flask import Flask, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello from Flask Sample App!'

@app.route('/api/status')
def status():
    return jsonify({
        'status': 'running',
        'message': 'Flask app is working!',
        'timestamp': datetime.now().isoformat()
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
