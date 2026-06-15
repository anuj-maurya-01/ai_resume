# ResumeCraft AI - Canva-Like Resume & Cover Letter Generator

ResumeCraft AI is a premium, client-side web application designed to build, customize, and optimize professional resumes and cover letters in real-time. It features interactive on-canvas editing, dynamic template styles, a live Gemini AI optimizer, and a real-time Applicant Tracking System (ATS) matching scanner.

![App Screenshot](https://raw.githubusercontent.com/username/project/main/screenshot.png) *(Replace with your actual screenshot after uploading!)*

## 🌟 Key Features

*   **Interactive A4 Canvas Editor**: Dual-directional synchronization. Edit text directly on the rendered A4 document page (via `contenteditable`), or edit details in the left-hand form panel—both sync instantaneously.
*   **Gemini Live AI Tailoring**: Setup your Gemini API Key in the settings panel to unlock:
    *   **AI Summary Writer**: Generates a professional summary custom-tailored to your target role and description.
    *   **STAR-Method Experience Tailor**: Enhances and rewrites work experience bullet points using action verbs and metric-focused results.
    *   **AI Cover Letter Generator**: Single-click drafts a matched, tailored cover letter based on your resume and target job details.
*   **Real-time ATS Score Scanner**: Audit your resume against job description requirements. Features:
    *   Dynamic match percentage ring.
    *   Keyword matched and missing tags visualization.
    *   Deep Match Analysis: Sends your resume to Gemini for custom structural audits and specific instructions.
*   **4 Designer Layout Templates**: Swappable designs on the fly:
    1.  **Creative HSL**: Modern header layout with gradient accents.
    2.  **Tech Modern**: Asymmetrical 2-column sidebar design emphasizing progress skills.
    3.  **Executive Classic**: Clean, centered serif typography fit for corporate positions.
    4.  **Minimalist Chic**: Elegant, spacious layout focusing on high readability.
*   **Design Customizer**: Instantly tweak global typography settings (Sans-Serif, Classic Serif, Monospace Minimalist) and accent HSL theme colors.
*   **Local-First Auto-Save**: Auto-saves your data locally to browser `localStorage` as you type (with visual autosaving status indicators).
*   **Print-Friendly Export**: Custom CSS print media queries ensure clicking "Download PDF" prints a pixel-perfect, single-page A4 document matching your selected design.

---

## 🚀 Quick Start (No Installation Needed)

ResumeCraft AI is built purely with standard HTML5, modern CSS3 variables, and vanilla ES6 JavaScript. No bundlers, frameworks, or dependencies are required.

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/resumecraft-ai.git
    cd resumecraft-ai
    ```
2.  **Run Locally**:
    *   Simply double-click the `index.html` file to open the app directly in your browser.
    *   Alternatively, run a simple local server (like VS Code Live Server or Python `http.server`):
        ```bash
        # Python 3
        python -m http.server 8000
        ```
        Then open `http://localhost:8000` in your web browser.

---

## ⚙️ AI Configuration

To enable Gemini AI generation:
1.  Click the **Settings Gear Icon** in the top header.
2.  Enter your **Google Gemini API Key** (Get one from [Google AI Studio](https://aistudio.google.com/)).
3.  Click **Save Key**. The key is stored locally in your browser's private sandbox (`localStorage`) and sent directly to Google Gemini API servers.

---

## 🛠️ Technology Stack

*   **Structure**: HTML5 (semantic layout structure)
*   **Styles**: CSS3 (Vanilla CSS variables, grid, flexbox, custom scrollbars, print stylesheet)
*   **Logic**: Vanilla JavaScript ES6 (state management, debounced local-storage, interactive inline content editing, dynamic template rendering)
*   **AI Models**: Google Gemini API (`gemini-1.5-flash` model endpoint)

---

## 📁 Repository Structure

```
├── index.html        # App layout and settings markup
├── styles.css        # Core layout, theme colors, template designs, and media queries
├── app.js            # Main application logic, rendering engine, and API services
├── README.md         # Documentation
└── .gitignore        # Files excluded from git tracking
```

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
