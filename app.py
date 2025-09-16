from flask import Flask, render_template, request
from dotenv import load_dotenv
import os
import openai

# Load API key from .env file
load_dotenv()
client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = Flask(__name__)

def generate_resume(data):
    prompt = f"""
Create a professional resume for the following person:

Name: {data['name']}
Job Role: {data['job_role']}
Skills: {data['skills']}
Experience: {data['experience']}
Education: {data['education']}
Career Goals: {data['goals']}

Use a formal tone and structured sections like Summary, Skills, Experience, Education, etc.
"""
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )
    return response.choices[0].message.content.strip()

def generate_cover_letter(data):
    prompt = f"""
Write a personalized and professional cover letter based on the following details:

Name: {data['name']}
Job Role: {data['job_role']}
Skills: {data['skills']}
Experience: {data['experience']}
Career Goals: {data['goals']}
Company (if provided): {data.get('company', '')}
Job Description (if provided): {data.get('job_description', '')}

Use a formal and persuasive tone.
"""
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )
    return response.choices[0].message.content.strip()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        form_data = request.form.to_dict()
        resume = generate_resume(form_data)
        cover_letter = generate_cover_letter(form_data)
        return render_template('result.html', resume=resume, cover_letter=cover_letter)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
