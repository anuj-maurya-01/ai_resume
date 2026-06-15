/* Import Premium Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Fira+Code:wght@400;500&display=swap');
/* Global Design System Variables */
:root {
  --primary-hue: 250; /* Indigo defaults */
  --primary-saturation: 84%;
  --primary-lightness: 54%;
  
  --primary: hsl(var(--primary-hue), var(--primary-saturation), var(--primary-lightness));
  --primary-hover: hsl(var(--primary-hue), var(--primary-saturation), calc(var(--primary-lightness) - 8%));
  --primary-light: hsl(var(--primary-hue), var(--primary-saturation), 95%);
  --primary-semi: rgba(99, 102, 241, 0.15);
  
  --dark-bg: #0f172a;
  --dark-panel: #1e293b;
  --dark-border: #334155;
  --dark-text: #f8fafc;
  
  --light-bg: #f8fafc;
  --light-panel: #ffffff;
  --light-border: #e2e8f0;
  --light-text: #0f172a;
  
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --font-sans: 'Inter', sans-serif;
  --font-serif: 'Lora', serif;
  --font-title: 'Outfit', sans-serif;
}
/* Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: var(--font-sans);
  background-color: #0b0f19;
  color: var(--dark-text);
  overflow: hidden;
  height: 100vh;
}
/* App Layout Grid (Canva-like structure) */
.app-container {
  display: grid;
  grid-template-rows: 64px 1fr;
  height: 100vh;
  width: 100vw;
}
/* Header Styling */
.app-header {
  background-color: #0f172a;
  border-bottom: 1px solid var(--dark-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 50;
  color: white;
}
.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo-section svg {
  color: var(--primary);
}
.logo-text {
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 50%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.header-center-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #1e293b;
  padding: 4px;
  border-radius: 12px;
  border: 1px solid var(--dark-border);
}
.tab-btn {
  background: none;
  border: none;
  color: #94a3b8;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition-smooth);
}
.tab-btn:hover {
  color: #f1f5f9;
}
.tab-btn.active {
  background-color: var(--primary);
  color: white;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
.autosave-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: #64748b;
  transition: var(--transition-smooth);
}
.autosave-status.saving {
  color: #f59e0b;
}
.autosave-status.saved {
  color: #10b981;
}
.autosave-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: currentColor;
}
/* Workspace Frame */
.workspace-body {
  display: grid;
  grid-template-columns: 380px 1fr;
  height: 100%;
  overflow: hidden;
  background-color: #0b0f19;
}
/* Sidebar Styling */
.editor-sidebar {
  background-color: #0f172a;
  border-right: 1px solid var(--dark-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}
.sidebar-tabs {
  display: flex;
  border-bottom: 1px solid var(--dark-border);
  background-color: #090d16;
}
.sidebar-tab-btn {
  flex: 1;
  background: none;
  border: none;
  color: #64748b;
  padding: 14px 0;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  transition: var(--transition-smooth);
  border-bottom: 2px solid transparent;
}
.sidebar-tab-btn:hover {
  color: #cbd5e1;
}
.sidebar-tab-btn.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
  background-color: rgba(99, 102, 241, 0.05);
}
.sidebar-tab-btn svg {
  width: 20px;
  height: 20px;
}
/* Panel Contents */
.panel-container {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}
.panel-content {
  display: none;
  animation: fadeIn 0.25s ease-out forwards;
}
.panel-content.active {
  display: block;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
.panel-title {
  font-family: var(--font-title);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #f8fafc;
}
.panel-desc {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 24px;
}
/* Theme Picker Styles */
.theme-picker {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
}
.color-option {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid transparent;
  transition: var(--transition-smooth);
}
.color-option:hover {
  transform: scale(1.1);
}
.color-option.selected {
  border-color: #f8fafc;
  box-shadow: 0 0 12px var(--primary);
}
/* Templates list */
.templates-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
.template-card {
  background-color: #1e293b;
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: var(--transition-smooth);
  position: relative;
  overflow: hidden;
}
.template-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--primary);
  opacity: 0;
  transition: var(--transition-smooth);
}
.template-card:hover {
  transform: translateY(-2px);
  border-color: #475569;
  background-color: #243249;
}
.template-card.active {
  border-color: var(--primary);
  background-color: #1e2942;
}
.template-card.active::before {
  opacity: 1;
}
.template-card-title {
  font-weight: 600;
  color: white;
  margin-bottom: 4px;
  font-size: 0.95rem;
}
.template-card-desc {
  font-size: 0.8rem;
  color: #94a3b8;
}
/* Forms Content styling */
.form-section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--dark-border);
  padding-bottom: 6px;
}
.form-section-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  display: block;
  font-size: 0.8rem;
  font-weight: 500;
  color: #94a3b8;
  margin-bottom: 6px;
}
.form-input {
  width: 100%;
  background-color: #1e293b;
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  padding: 10px 14px;
  color: white;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  transition: var(--transition-smooth);
}
.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px var(--primary-semi);
}
.form-input::placeholder {
  color: #475569;
}
textarea.form-input {
  resize: vertical;
  min-height: 80px;
}
.dynamic-item-card {
  background-color: #1e293b;
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 12px;
  position: relative;
}
.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0.7;
  transition: var(--transition-smooth);
}
.remove-btn:hover {
  opacity: 1;
}
.add-btn {
  background: none;
  border: 1px dashed var(--primary);
  border-radius: 8px;
  color: var(--primary);
  width: 100%;
  padding: 10px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: var(--transition-smooth);
}
.add-btn:hover {
  background-color: var(--primary-semi);
}
/* AI Suggestions View styling */
.ai-suggest-box {
  background-color: #1e293b;
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 16px;
  margin-top: 16px;
}
.ai-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
  border: 1px solid rgba(99, 102, 241, 0.4);
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  color: #c084fc;
  font-weight: 600;
  margin-bottom: 12px;
}
.ai-suggest-item {
  background-color: #0f172a;
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
  font-size: 0.825rem;
  line-height: 1.4;
  color: #cbd5e1;
  cursor: pointer;
  transition: var(--transition-smooth);
  position: relative;
}
.ai-suggest-item:hover {
  border-color: var(--primary);
  background-color: #1e293b;
  color: white;
}
.ai-suggest-item::after {
  content: 'Click to Insert';
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 0.7rem;
  color: var(--primary);
  opacity: 0;
  transition: var(--transition-smooth);
  font-weight: 600;
}
.ai-suggest-item:hover::after {
  opacity: 1;
}
/* ATS Checker Tab Styling */
.ats-score-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #1e293b;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--dark-border);
  margin-bottom: 24px;
}
.ats-score-ring-wrap {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.ats-score-ring {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}
.ats-score-ring circle {
  fill: none;
  stroke-width: 8;
}
.ats-score-ring-bg {
  stroke: #0f172a;
}
.ats-score-ring-progress {
  stroke: var(--primary);
  stroke-dasharray: 314.16;
  stroke-dashoffset: 314.16;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.8s ease-in-out;
}
.ats-score-value {
  position: absolute;
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  font-family: var(--font-title);
}
.ats-feedback-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.ats-feedback-item {
  display: flex;
  gap: 12px;
  font-size: 0.8rem;
  line-height: 1.4;
  color: #cbd5e1;
  background-color: #1e293b;
  padding: 12px;
  border-radius: 8px;
  border-left: 3px solid #10b981;
}
.ats-feedback-item.missing {
  border-left-color: #f59e0b;
}
.ats-keyword-pill {
  display: inline-block;
  background-color: #0f172a;
  color: #94a3b8;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  margin: 2px;
  border: 1px solid var(--dark-border);
}
/* Canvas Viewport */
.canvas-viewport {
  background-color: #1e293b;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  height: 100%;
  scrollbar-width: thin;
}
.canvas-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 210mm;
  margin-bottom: 16px;
  color: #94a3b8;
  font-size: 0.8rem;
}
.zoom-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #0f172a;
  padding: 4px 10px;
  border-radius: 8px;
  border: 1px solid var(--dark-border);
}
.zoom-btn {
  background: none;
  border: none;
  color: #cbd5e1;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 4px;
}
.zoom-btn:hover {
  background-color: #1e293b;
}
/* Dynamic Page canvas representation */
.document-page {
  width: 210mm;
  min-height: 297mm;
  background-color: white;
  color: #1e293b;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
  position: relative;
  transition: transform 0.2s ease-out;
  transform-origin: top center;
  margin-bottom: 40px;
  overflow: hidden;
}
/* Canvas editable interactive styling */
[contenteditable="true"] {
  outline: none;
  border: 1px dashed transparent;
  transition: var(--transition-smooth);
}
[contenteditable="true"]:hover {
  border-color: var(--primary);
  background-color: rgba(99, 102, 241, 0.05);
  cursor: text;
}
[contenteditable="true"]:focus {
  border-color: var(--primary);
  background-color: rgba(99, 102, 241, 0.1);
  box-shadow: 0 0 4px rgba(99, 102, 241, 0.4);
}
/* Action Buttons Styling */
.btn-primary {
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: var(--transition-smooth);
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}
.btn-primary:hover {
  background-color: var(--primary-hover);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
.btn-secondary {
  background-color: #1e293b;
  color: #cbd5e1;
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  padding: 10px 18px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: var(--transition-smooth);
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn-secondary:hover {
  background-color: #243249;
  color: white;
  border-color: #475569;
}
/*************************************************
 * RESUME & COVER LETTER TEMPLATES STYLING
 *************************************************/
/* Resume global base class inside pages */
.resume-wrapper, .cover-letter-wrapper {
  padding: 24mm 20mm;
  min-height: 297mm;
  box-sizing: border-box;
  font-size: 9.5pt;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
}
/* Common elements across templates to override */
.r-name {
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 24pt;
  line-height: 1.1;
  color: #0f172a;
}
.r-title {
  font-size: 12pt;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 4px;
}
.r-contact-item {
  display: flex;
  align-items: center;
  gap: 6px;
}
.r-section-title {
  font-family: var(--font-title);
  font-size: 11.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #0f172a;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 4px;
  margin-bottom: 12px;
  margin-top: 20px;
}
.r-grid-2 {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  flex-grow: 1;
}
.r-item {
  margin-bottom: 14px;
}
.r-item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-weight: 600;
  font-size: 10pt;
  color: #1e293b;
}
.r-item-sub {
  font-style: italic;
  color: #475569;
  font-size: 9.2pt;
  margin-bottom: 4px;
}
.r-bullet-list {
  padding-left: 16px;
  margin-top: 4px;
  color: #334155;
}
.r-bullet-list li {
  margin-bottom: 3px;
}
.r-skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}
.r-skill-tag {
  background-color: var(--primary-light);
  color: var(--primary);
  border: 1px solid var(--primary-semi);
  font-size: 7.5pt;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
}
/* ===============================================
   1. CREATIVE GRADIENT TEMPLATE
   =============================================== */
.tmpl-creative .resume-wrapper, 
.tmpl-creative .cover-letter-wrapper {
  padding-top: 0px;
  font-family: 'Outfit', sans-serif;
}
.tmpl-creative .creative-header {
  background: linear-gradient(135deg, hsl(var(--primary-hue), var(--primary-saturation), 45%) 0%, var(--primary) 100%);
  color: white;
  padding: 24px 20mm;
  margin-left: -20mm;
  margin-right: -20mm;
  margin-bottom: 24px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}
.tmpl-creative .r-name {
  color: white;
  font-size: 26pt;
}
.tmpl-creative .r-title {
  color: hsl(var(--primary-hue), var(--primary-saturation), 90%);
}
.tmpl-creative .creative-contact-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 14px;
  font-size: 8.5pt;
  color: rgba(255, 255, 255, 0.9);
}
.tmpl-creative .r-section-title {
  border-bottom: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--primary);
  font-size: 12pt;
}
.tmpl-creative .r-section-title::after {
  content: '';
  flex: 1;
  height: 2px;
  background: linear-gradient(to right, var(--primary-semi), transparent);
}
.tmpl-creative .r-item-header {
  color: #0f172a;
}
/* ===============================================
   2. TECH MODERN TEMPLATE (2 Column layout)
   =============================================== */
.tmpl-tech .resume-wrapper {
  padding: 0;
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100%;
  font-family: 'Inter', sans-serif;
}
.tmpl-tech .tech-sidebar {
  background-color: #f1f5f9;
  border-right: 1px solid #cbd5e1;
  padding: 24mm 16px 24mm 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.tmpl-tech .tech-main {
  padding: 24mm 20px 24mm 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.tmpl-tech .r-name {
  font-size: 22pt;
  color: #0f172a;
  letter-spacing: -0.03em;
}
.tmpl-tech .r-title {
  font-size: 10.5pt;
}
.tmpl-tech .tech-contact-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 8.5pt;
  color: #475569;
  margin-top: 10px;
}
.tmpl-tech .r-section-title {
  border-bottom: 2px solid var(--primary);
  font-size: 10.5pt;
  padding-bottom: 2px;
  margin-top: 10px;
}
.tmpl-tech .tech-sidebar .r-section-title {
  border-bottom-color: #cbd5e1;
  font-size: 9.5pt;
}
.tmpl-tech .skill-progress-bar {
  margin-bottom: 8px;
}
.tmpl-tech .skill-progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 8.5pt;
  font-weight: 500;
  color: #334155;
  margin-bottom: 2px;
}
.tmpl-tech .skill-track {
  height: 5px;
  background-color: #cbd5e1;
  border-radius: 99px;
  overflow: hidden;
}
.tmpl-tech .skill-bar-fill {
  height: 100%;
  background-color: var(--primary);
  border-radius: 99px;
}
/* Match layout for tech cover letter */
.tmpl-tech .cover-letter-wrapper {
  padding: 24mm 20mm;
  font-family: 'Inter', sans-serif;
}
/* ===============================================
   3. EXECUTIVE CLASSIC TEMPLATE
   =============================================== */
.tmpl-executive .resume-wrapper, 
.tmpl-executive .cover-letter-wrapper {
  font-family: 'Lora', serif;
  text-align: center;
}
.tmpl-executive .exec-header {
  border-bottom: 2px double #475569;
  padding-bottom: 12px;
  margin-bottom: 20px;
}
.tmpl-executive .r-name {
  font-family: 'Playfair Display', serif;
  font-size: 28pt;
  color: #0f172a;
  letter-spacing: -0.01em;
}
.tmpl-executive .r-title {
  font-family: 'Lora', serif;
  font-size: 11pt;
  letter-spacing: 0.1em;
  color: #334155;
}
.tmpl-executive .exec-contact-bar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 8.5pt;
  color: #475569;
  margin-top: 10px;
  font-family: 'Inter', sans-serif;
}
.tmpl-executive .r-section-title {
  border-bottom: 1px solid #475569;
  font-size: 11pt;
  text-align: left;
  margin-top: 18px;
}
.tmpl-executive .r-item-header {
  text-align: left;
  font-family: 'Lora', serif;
}
.tmpl-executive .r-item-sub {
  text-align: left;
}
.tmpl-executive .r-bullet-list {
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-size: 9pt;
}
.tmpl-executive .r-skills-list {
  justify-content: flex-start;
}
.tmpl-executive .r-skill-tag {
  background-color: transparent;
  color: #0f172a;
  border: 1px solid #94a3b8;
  font-family: 'Inter', sans-serif;
  font-size: 8pt;
}
/* ===============================================
   4. MINIMALIST CHIC TEMPLATE
   =============================================== */
.tmpl-minimalist .resume-wrapper, 
.tmpl-minimalist .cover-letter-wrapper {
  font-family: 'Inter', sans-serif;
  padding: 24mm 24mm;
}
.tmpl-minimalist .r-name {
  font-weight: 300;
  font-size: 26pt;
  letter-spacing: -0.03em;
  color: #1e293b;
}
.tmpl-minimalist .r-title {
  font-weight: 400;
  font-size: 11pt;
  color: #64748b;
  margin-bottom: 14px;
}
.tmpl-minimalist .minimal-contact-bar {
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
  padding: 8px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 8pt;
  color: #64748b;
  margin-bottom: 24px;
}
.tmpl-minimalist .r-section-title {
  border-bottom: none;
  font-weight: 600;
  font-size: 10pt;
  color: #0f172a;
  margin-top: 18px;
  margin-bottom: 8px;
  text-transform: capitalize;
}
.tmpl-minimalist .r-item-header {
  font-weight: 500;
  color: #0f172a;
}
.tmpl-minimalist .r-item-sub {
  color: #94a3b8;
}
.tmpl-minimalist .r-bullet-list {
  padding-left: 12px;
  color: #475569;
}
.tmpl-minimalist .r-skill-tag {
  background-color: #f8fafc;
  color: #334155;
  border: 1px solid #e2e8f0;
}
/* Cover Letter styles */
.cl-date {
  margin-bottom: 16px;
  color: #475569;
}
.cl-recipient {
  margin-bottom: 24px;
}
.cl-recipient p {
  margin-bottom: 2px;
}
.cl-salutation {
  margin-bottom: 16px;
  font-weight: 600;
}
.cl-body {
  margin-bottom: 24px;
}
.cl-body p {
  margin-bottom: 14px;
  text-align: justify;
}
.cl-signoff {
  margin-top: 24px;
}
.cl-signature-name {
  margin-top: 40px;
  font-weight: 600;
}
/*************************************************
 * PRINT VIEW MEDIA OVERRIDES
 *************************************************/
@media print {
  /* Hide all editor and app interface elements */
  body, html {
    background-color: white !important;
    color: black !important;
    height: auto !important;
    overflow: visible !important;
  }
  
  .app-container {
    display: block !important;
    height: auto !important;
    width: auto !important;
  }
  
  .app-header, 
  .editor-sidebar, 
  .canvas-toolbar,
  .zoom-controls {
    display: none !important;
  }
  
  .workspace-body {
    display: block !important;
    height: auto !important;
  }
  
  .canvas-viewport {
    background-color: white !important;
    padding: 0 !important;
    margin: 0 !important;
    height: auto !important;
    width: auto !important;
    overflow: visible !important;
    display: block !important;
  }
  
  .document-page {
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 210mm !important;
    min-height: 297mm !important;
    page-break-after: always;
    page-break-inside: avoid;
    transform: none !important;
  }
  
  /* Ensure page backgrounds print correctly */
  .tmpl-creative .creative-header {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .tmpl-tech .tech-sidebar {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .tmpl-tech .skill-bar-fill {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  
  /* Hide interactive outline styles during print */
  [contenteditable="true"] {
    border-color: transparent !important;
    background-color: transparent !important;
  }
}
