import webview
from threading import Thread
from app import app

def run_flask():
    app.run(port=5000)

if __name__ == '__main__':
    # Start Flask in a background thread
    flask_thread = Thread(target=run_flask)
    flask_thread.daemon = True
    flask_thread.start()

    # Create desktop window using pywebview
    webview.create_window("AI Resume Generator", "http://127.0.0.1:5000")
