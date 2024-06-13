from flask import Flask, render_template, request, session, jsonify
import gemini_src

app = Flask(__name__)
app.secret_key = "AIzaSyA17y9p0Ja0ItRfbUJtbyBkV-px5NeFUeM"
app.permanent_session_lifetime = 3600

# Initialization of Gemini
gemini = gemini_src.Gemini()

@app.route('/', methods=['GET'])
def index():
    session.permanent = False
    session_data = session.get('output_dict', {})
    return render_template('index.html', output=session_data)

@app.route('/chat', methods=['POST'])
def chat():
    session_data = session.get('output_dict', {})
    task_content = request.form['ask']
    
    try:
        output = gemini.generate(task_content)
        session_data[task_content] = output
        session['output_dict'] = session_data
        return jsonify({'status': 'success', 'input': task_content, 'output': output})
    except:
        return jsonify({'status': 'error', 'message': 'There was an issue connecting to Gemini.'})

@app.route('/clear-session', methods=['GET'])
def clear_session():
    session.pop('output_dict', None)
    session.clear()
    return jsonify({'status': 'success', 'message': 'Session cleared'})


# Định tuyến cho trang quản trị
@app.route('/admin')
def admin():
    return "Trang quản trị"

# Định tuyến cho trang danh sách nhạc
@app.route('/admin/songs')
def songs():
    return "Danh sách nhạc"

# Định tuyến cho trang thêm nhạc
@app.route('/admin/songs/add')
def add_song():
    return "Thêm nhạc mới"

# Định tuyến cho trang chỉnh sửa nhạc
@app.route('/admin/songs/edit/<int:song_id>')
def edit_song(song_id):
    return f"Chỉnh sửa nhạc với ID {song_id}"

if __name__ == '__main__':
    app.run(debug=True)
