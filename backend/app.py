from flask import Flask, request, jsonify
from flask_cors import CORS
from database import db
from models import Task
from ai_service import suggest_priority

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///tasks.db"
db.init_app(app)

with app.app_context():
    db.create_all()

# Create task
@app.route("/tasks", methods=["POST"])
def create_task():

    data = request.json

    priority = suggest_priority(data["description"])

    task = Task(
        title=data["title"],
        description=data["description"],
        priority=priority
    )

    db.session.add(task)
    db.session.commit()

    return jsonify(task.to_dict())


# Get tasks
@app.route("/tasks", methods=["GET"])
def get_tasks():

    tasks = Task.query.all()

    return jsonify([t.to_dict() for t in tasks])


# Update task
@app.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):

    task = Task.query.get(id)

    task.status = request.json["status"]

    db.session.commit()

    return jsonify(task.to_dict())


# Delete task
@app.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):

    task = Task.query.get(id)

    db.session.delete(task)
    db.session.commit()

    return jsonify({"message": "deleted"})

# AI Suggest Priority
@app.route("/ai/suggest", methods=["POST"])
def ai_suggest():

    data = request.json
    description = data["description"]

    priority = suggest_priority(description)

    return jsonify({
        "priority": priority
    })
if __name__ == "__main__":
    app.run(debug=True)