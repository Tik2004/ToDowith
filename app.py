from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template,  request, redirect

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todos.db'
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mission = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.now())
    is_completed = db.Column(db.Boolean, default=False)
    date_completed = db.Column(db.DateTime, default=None)

    def __repr__(self):
        return 'Todo number  ' + str(self.id)

@app.route('/', methods=['GET', 'POST'])
def todos():
    if request.method == 'POST':
        post_mission = request.form['mission']
        new_todo = Todo(mission=post_mission, date_posted=datetime.now(), is_completed=False)
        db.session.add(new_todo)
        db.session.commit()
        return redirect('/')
    else:
        all_todo = Todo.query.order_by(Todo.date_posted).all()[::-1]
        return render_template('index.html', todoss=all_todo)

@app.route('/delete/<int:id>')
def delete(id):
    todo = Todo.query.get_or_404(id)
    db.session.delete(todo)
    db.session.commit()
    return redirect('/')

@app.route('/done/<int:id>')
def done(id):
    todo = Todo.query.get_or_404(id)
    todo.is_completed = True
    db.session.commit()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)