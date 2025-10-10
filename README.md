# sampleapp

A sample application repository containing both Node.js (Express) and Flask (Python) applications.

## Overview

This repository contains two simple web applications:
- **Node.js App**: Express-based application running on port 3000
- **Flask App**: Python Flask application running on port 5000

## Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- npm (comes with Node.js)
- pip (comes with Python)

## Setup and Installation

### Node.js Application

1. Install dependencies:
```bash
npm install
```

2. Run the application:
```bash
npm start
```

3. Access the app at `http://localhost:3000`

Available endpoints:
- `GET /` - Returns a welcome message
- `GET /api/status` - Returns JSON status information

### Flask Application

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the application:
```bash
python flask_app.py
```

3. Access the app at `http://localhost:5000`

Available endpoints:
- `GET /` - Returns a welcome message
- `GET /api/status` - Returns JSON status information

## Testing

### Node.js App
```bash
# Test the home route
curl http://localhost:3000

# Test the status API
curl http://localhost:3000/api/status
```

### Flask App
```bash
# Test the home route
curl http://localhost:5000

# Test the status API
curl http://localhost:5000/api/status
```

## Project Structure

```
sampleapp/
├── app.js              # Node.js Express application
├── flask_app.py        # Python Flask application
├── package.json        # Node.js dependencies
├── requirements.txt    # Python dependencies
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## License

ISC
