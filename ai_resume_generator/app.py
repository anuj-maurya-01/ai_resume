from flask import Flask, render_template, request, send_file, jsonify
from xhtml2pdf import pisa
from io import BytesIO
from datetime import datetime

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('cover.html')


@app.route('/download_resume', methods=['POST'])
def download_resume():
    data = request.json

    # Process skills
    skills_list = []
    skills_raw = data.get('skills', '')
    for item in skills_raw.split(','):
        if ':' in item:
            name, level = item.strip().split(':')
            skills_list.append({'name': name.strip(), 'level': level.strip()})
        else:
            skills_list.append({'name': item.strip(), 'level': '70'})
    data['skills'] = skills_list

    # Ensure experience is structured
    if 'experience' not in data:
        data['experience'] = [{
            'job_title': 'Intern',
            'company': 'IBM',
            'start': '18/07/2025',
            'end': '05/08/2025',
            'details': ['Gained knowledge of GENERATIVE AI']
        }]

    # Ensure education is structured
    if 'education' not in data:
        data['education'] = [
            {'degree': 'BTECH', 'institution': 'UCER', 'start': '2024', 'end': '2028'},
            {'degree': 'MTECH', 'institution': 'IIT', 'start': '2028', 'end': '2030'}
        ]

    rendered = render_template('resume_template.html', **data)
    pdf = BytesIO()
    pisa.CreatePDF(BytesIO(rendered.encode('utf-8')), dest=pdf)
    pdf.seek(0)

    return send_file(pdf, mimetype='application/pdf', download_name='resume.pdf')




@app.route('/download_cover_letter', methods=['POST'])
def download_cover_letter():
    data = request.get_json()

    # Fallbacks if any field is empty
    name = data.get('name', 'Applicant')
    job_title = data.get('job_title', 'Position')
    skills_raw = data.get('skills', '')
    job_posting = data.get('job_posting', '')
    experience_raw = data.get('experience', '')

    # Process comma-separated skills into readable line
    skills_list = [s.strip() for s in skills_raw.split(',') if s.strip()]
    if skills_list:
        if len(skills_list) == 1:
            skills_line = f"my skills in {skills_list[0]}"
        else:
            skills_line = f"my skills in {', '.join(skills_list[:-1])}, and {skills_list[-1]}"
    else:
        skills_line = "my professional background"

    # Process experience string into readable line (optional AI-like line)
    if experience_raw:
        experience_line = f"experience such as {experience_raw.splitlines()[0]}"
    else:
        experience_line = "a relevant internship"

    rendered = render_template("cover_template.html",
                               name=name,
                               job_title=job_title,
                               skills_line=skills_line,
                               experience_line=experience_line,
                               date=datetime.today().strftime('%B %d, %Y'))

    # Generate PDF
    pdf = BytesIO()
    pisa_status = pisa.CreatePDF(rendered, dest=pdf)
    pdf.seek(0)

    if pisa_status.err:
        return "PDF generation failed", 500

    return send_file(pdf, download_name="Cover_Letter.pdf", as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)
