from flask import Flask, request, jsonify

app = Flask(__name__)

#User data use this to login
users = {
    "user1": "password1",
    "user2": "password2",
}

@app.route('/api/login', methods=['POST'])
def login():
    def login():
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

    if username in users and users[username] == password:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid credentials"}), 401
    
if __name__ == '__main__':
    app.run(host='5000')