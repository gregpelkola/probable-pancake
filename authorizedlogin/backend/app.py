# backend/app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

# Dummy user data
users = {
    "user1": "password1",
    "user2": "password2"
}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data:
        return jsonify({"message": "No input data provided"}), 400

    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"message": "Username and password are required"}), 400

    if username in users and users[username] == password:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)