/**
 * ResumeCraft AI - Core Application Engine
 * Rebuilt and enhanced for Gemini Live AI and Interactive Editing
 */

// Offline Recommendation Database (Local suggestions fallback)
const OFFLINE_DB = {
  software: {
    summaries: [
      "Innovative and detail-oriented Software Engineer with 5+ years of experience designing and implementing scalable web applications. Proven expertise in full-stack development, modern Javascript frameworks (React, Vue, Node.js), and cloud architectures (AWS, Google Cloud). Strong champion of clean code, automated testing, and agile practices.",
      "Frontend Developer with a passion for designing pixel-perfect, accessible, and user-centric interfaces. Strong foundation in JavaScript, TypeScript, CSS grid systems, and React, with a track record of improving site performance by 30%."
    ],
    bullets: [
      "Architected and deployed a highly available REST API service using Node.js and Docker, decreasing request latency by 45%.",
      "Collaborated with UX design teams to build a responsive React component library, accelerating frontend development cycles by 25%.",
      "Implemented a comprehensive CI/CD pipeline using GitHub Actions, reducing manual deployment errors to zero."
    ]
  },
  product: {
    summaries: [
      "Customer-focused Product Manager with 4+ years of experience leading cross-functional teams to build and launch high-impact digital products. Skilled in agile methodologies, data-driven decision making, and user research, with a history of increasing user retention by 20%.",
      "Technical Product Manager specialized in API platforms and developer ecosystems. Experienced in aligning engineering, sales, and executive stakeholders to drive product strategy from concept to execution."
    ],
    bullets: [
      "Managed the end-to-end product lifecycle for a mobile banking application, growing active monthly users from 10k to 150k.",
      "Conducted extensive user interviews and A/B testing to refine the onboarding flow, boosting registration conversion by 18%.",
      "Defined product roadmaps and prioritized backlogs for a 12-person agile development team using Scrum frameworks."
    ]
  },
  marketing: {
    summaries: [
      "Creative and analytical Growth Marketer with 6 years of experience driving user acquisition and engagement campaigns. Proficient in SEO, SEM, content strategy, and paid acquisition, with a success rate of doubling organic traffic within 9 months.",
      "Brand Specialist with expertise in crafting compelling narratives across digital channels. Strong history in social media management, influencer campaigns, and media relations."
    ],
    bullets: [
      "Executed a multi-channel digital marketing campaign that generated over $150k in pipeline revenue in under 3 months.",
      "Optimized search engine optimization (SEO) strategy, ranking 15 high-intent keywords on the first page of Google search results.",
      "Analyzed campaign performance metrics using Google Analytics to reallocate budget, reducing cost-per-acquisition (CPA) by 22%."
    ]
  },
  data: {
    summaries: [
      "Analytical Data Analyst with 3+ years of experience translating complex datasets into actionable business insights. Highly skilled in SQL, Python, Tableau, and statistical analysis, with a record of identifying $50k in cost savings.",
      "Data Scientist with experience building machine learning models for predictive maintenance and customer churn forecasting. Strong background in mathematical modeling and deep learning."
    ],
    bullets: [
      "Designed and maintained interactive Tableau dashboards used by executive leadership to track weekly KPIs and performance goals.",
      "Developed a Python script to automate ETL data pipeline processes, saving 12 hours of manual reporting work per week.",
      "Conducted statistical cohort analyses that uncovered user drop-off points, informing product design improvements."
    ]
  },
  finance: {
    summaries: [
      "Detail-oriented Financial Analyst with 5 years of experience in corporate finance, financial modeling, and strategic planning. Expert in preparing monthly forecasting packages and evaluating investment opportunities.",
      "Investment Banking Analyst experienced in market research, valuation methodologies (DCF, LBO), and client presentation development."
    ],
    bullets: [
      "Developed comprehensive 3-statement financial models to assess the viability of a new product line expansion, leading to approval.",
      "Managed the annual budgeting process for a business unit with a $15M operating budget, maintaining variance under 2%.",
      "Identified and eliminated operational inefficiencies, reducing quarterly departmental overhead costs by 8%."
    ]
  },
  customer: {
    summaries: [
      "Empathetic and proactive Customer Success Manager with 4+ years of experience managing enterprise accounts. Expert in client onboarding, renewal negotiations, and churn reduction, maintaining a 98% customer satisfaction score.",
      "Technical Support Specialist skilled in troubleshooting software configurations and resolving complex client issues within tight SLA windows."
    ],
    bullets: [
      "Onboarded and managed a portfolio of 45 SaaS client accounts representing $1.2M in annual recurring revenue (ARR).",
      "Redesigned the client knowledge base and FAQ portal, reducing incoming support ticket volume by 30%.",
      "Achieved a 95% retention rate by building strong relationships and proactively addressing feature adoption gaps."
    ]
  }
};

// Default Sample Profiles
const SAMPLE_PROFILES = {
  software: {
    resume: {
      name: "Alex Rivera",
      title: "Senior Full Stack Engineer",
      email: "alex.rivera@devmail.io",
      phone: "+1 (555) 234-5678",
      location: "Austin, TX",
      link: "github.com/alexrivera",
      summary: "Lead Developer with 7+ years of experience building and scaling reliable web architectures. Passionate about system performance, automated testing, and developer experience. Proven ability to translate product requirements into clean, scalable Javascript applications.",
      skills: "JavaScript, TypeScript, React, Node.js, Express, Postgres, Docker, AWS (S3/EC2/RDS), HTML5, CSS3, Jest, CI/CD",
      experience: [
        {
          company: "CloudScale Inc.",
          position: "Lead Software Architect",
          duration: "2023 - Present",
          location: "Austin, TX",
          details: "Architected microservices dashboard in React and Node.js serving 500k+ daily users, resulting in a 40% performance speedup.\nLed team of 6 engineers to deliver automated testing suite, increasing code coverage from 45% to 88%.\nImplemented AWS containerization utilizing ECS and Docker, reducing hosting infrastructure costs by 22%."
        },
        {
          company: "DevFlow Technologies",
          position: "Senior Frontend Engineer",
          duration: "2020 - 2023",
          location: "San Francisco, CA",
          details: "Spearheaded frontend migration from legacy jQuery setup to modern React/Redux SPA, raising user engagement metrics by 15%.\nCollaborated on REST API designs and built complex dashboard data visualizations with D3.js.\nMentored 3 junior developers and instituted code review standards across the frontend department."
        }
      ],
      education: [
        {
          school: "University of Texas at Austin",
          degree: "B.S. in Computer Science",
          duration: "2016 - 2020",
          location: "Austin, TX",
          details: "Graduated with Honors. Specialized in Software Engineering. TA for Web Application Development course."
        }
      ]
    },
    coverLetter: {
      date: "June 15, 2026",
      recipient: "Hiring Manager\nTechCorp Solutions Inc.\n100 Innovation Way\nAustin, TX 78701",
      salutation: "Dear Hiring Team,",
      body: "I am writing to express my strong interest in the Senior Frontend Developer position at TechCorp Solutions. With over seven years of professional experience building high-performance web applications and leading collaborative engineering teams, I am confident in my ability to make a major contribution to your engineering department.\n\nThroughout my career, I have focused on building applications that are not only performant and scalable, but also accessible and user-friendly. At CloudScale Inc., I spearheaded the migration of our main customer platform to a React-based microservices architecture, which improved load times by 40% and directly contributed to a significant increase in client onboarding conversion. I also understand that great software is built by great teams, and I pride myself on fostering collaborative developer environments through positive mentorship and code reviews.\n\nTechCorp’s dedication to building tools that empower developers resonates deeply with me. I have used your open-source libraries in my past two roles and have always admired the elegance and robustness of your team's designs. I would welcome the opportunity to bring my technical skills and enthusiasm for developer experience to your current projects.\n\nThank you for your time and consideration. I look forward to the possibility of discussing how my experience aligns with the needs of your engineering team.",
      signoff: "Best regards,",
      signatureName: "Alex Rivera"
    },
    targetJob: {
      company: "TechCorp Solutions Inc.",
      title: "Senior Frontend Developer",
      desc: "We are seeking a Senior Frontend Developer expert in React, TypeScript, and state management. You will build and optimize user-facing dashboards, collaborate on design systems, and help lead core platform projects. Experience with AWS, Node.js, CI/CD, unit testing, and web performance tuning is highly desired."
    }
  }
};

// Core App State (Initial values)
let state = {
  mode: 'resume', // 'resume' | 'coverLetter'
  template: 'creative', // 'creative' | 'tech' | 'executive' | 'minimalist'
  zoom: 100,
  accent: {
    hue: 250,
    sat: '84%',
    light: '54%'
  },
  fontFamily: 'sans-inter',
  resume: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    link: '',
    summary: '',
    skills: '',
    experience: [],
    education: []
  },
  coverLetter: {
    date: '',
    recipient: '',
    salutation: 'Dear Hiring Manager,',
    body: '',
    signoff: 'Sincerely,',
    signatureName: ''
  },
  targetJob: {
    company: '',
    title: '',
    desc: ''
  }
};

// UI Element References
const els = {
  tabResume: document.getElementById('tabResume'),
  tabCoverLetter: document.getElementById('tabCoverLetter'),
  autosaveText: document.getElementById('autosaveText'),
  autosaveStatus: document.getElementById('autosaveStatus'),
  exportPdfBtn: document.getElementById('exportPdfBtn'),
  settingsBtn: document.getElementById('settingsBtn'),
  settingsModal: document.getElementById('settingsModal'),
  closeSettingsBtn: document.getElementById('closeSettingsBtn'),
  saveSettingsBtn: document.getElementById('saveSettingsBtn'),
  inputApiKey: document.getElementById('inputApiKey'),
  activeDocTitle: document.getElementById('activeDocTitle'),
  
  // Tabs
  sidebarTabBtns: document.querySelectorAll('.sidebar-tab-btn'),
  panels: document.querySelectorAll('.panel-content'),
  
  // Canvas
  canvasViewport: document.getElementById('canvasViewport'),
  documentPage: document.getElementById('documentPage'),
  zoomOut: document.getElementById('zoomOut'),
  zoomIn: document.getElementById('zoomIn'),
  zoomLabel: document.getElementById('zoomLabel'),
  
  // Inputs
  inputName: document.getElementById('inputName'),
  inputTitle: document.getElementById('inputTitle'),
  inputEmail: document.getElementById('inputEmail'),
  inputPhone: document.getElementById('inputPhone'),
  inputLocation: document.getElementById('inputLocation'),
  inputLink: document.getElementById('inputLink'),
  inputSummary: document.getElementById('inputSummary'),
  inputSkills: document.getElementById('inputSkills'),
  
  formExperienceList: document.getElementById('formExperienceList'),
  btnAddExperience: document.getElementById('btnAddExperience'),
  formEducationList: document.getElementById('formEducationList'),
  btnAddEducation: document.getElementById('btnAddEducation'),
  
  inputTargetCompany: document.getElementById('inputTargetCompany'),
  inputTargetJob: document.getElementById('inputTargetJob'),
  inputJobDesc: document.getElementById('inputJobDesc'),
  
  // AI Suggestions Panel
  aiJobSelect: document.getElementById('aiJobSelect'),
  aiSummarySuggestions: document.getElementById('aiSummarySuggestions'),
  aiExperienceSuggestions: document.getElementById('aiExperienceSuggestions'),
  btnAiSummary: document.getElementById('btnAiSummary'),
  btnAiCoverLetter: document.getElementById('btnAiCoverLetter'),
  btnAiEnhanceExperience: document.getElementById('btnAiEnhanceExperience'),
  
  // ATS Panel
  atsProgressRing: document.getElementById('atsProgressRing'),
  atsScoreVal: document.getElementById('atsScoreVal'),
  atsStatusLabel: document.getElementById('atsStatusLabel'),
  atsMessageLabel: document.getElementById('atsMessageLabel'),
  atsFeedbackList: document.getElementById('atsFeedbackList'),
  btnAiAtsScan: document.getElementById('btnAiAtsScan'),
  
  // Design Panel
  colorOptions: document.querySelectorAll('.color-option'),
  fontSelect: document.getElementById('fontSelect'),
  btnAutoFill: document.getElementById('btnAutoFill'),
  btnReset: document.getElementById('btnReset')
};

/**
 * Initialize the Application
 */
function init() {
  // Load API Key from localStorage
  const savedKey = localStorage.getItem('gemini_api_key');
  if (savedKey) {
    els.inputApiKey.value = savedKey;
  }

  // Load state from localStorage or default to empty / sample structure
  loadState();
  
  // Bind Event Listeners
  bindEvents();
  
  // Initial UI sync and renders
  syncInputsFromState();
  renderOfflineSuggestions();
  renderCanvas();
  updateAtsScore();
}

/**
 * Save State to Local Storage (with UI indicator)
 */
let saveDebounceTimer;
function saveState() {
  els.autosaveStatus.classList.remove('saved');
  els.autosaveStatus.classList.add('saving');
  els.autosaveText.textContent = 'Saving...';
  
  clearTimeout(saveDebounceTimer);
  saveDebounceTimer = setTimeout(() => {
    localStorage.setItem('resume_craft_state', JSON.stringify(state));
    els.autosaveStatus.classList.remove('saving');
    els.autosaveStatus.classList.add('saved');
    els.autosaveText.textContent = 'Saved locally';
  }, 800);
}

/**
 * Load State from Local Storage
 */
function loadState() {
  const loaded = localStorage.getItem('resume_craft_state');
  if (loaded) {
    try {
      state = JSON.parse(loaded);
      
      // Safety checks for legacy or incomplete data structures
      if (!state.resume) state.resume = { name: '', title: '', email: '', phone: '', location: '', link: '', summary: '', skills: '', experience: [], education: [] };
      if (!state.coverLetter) state.coverLetter = { date: '', recipient: '', salutation: 'Dear Hiring Manager,', body: '', signoff: 'Sincerely,', signatureName: '' };
      if (!state.targetJob) state.targetJob = { company: '', title: '', desc: '' };
      if (!state.accent) state.accent = { hue: 250, sat: '84%', light: '54%' };
      if (!state.fontFamily) state.fontFamily = 'sans-inter';
      if (!state.template) state.template = 'creative';
      if (!state.mode) state.mode = 'resume';
      if (!state.zoom) state.zoom = 100;
    } catch (e) {
      console.error("Failed to parse local storage state", e);
    }
  } else {
    // If empty, auto-populate with Software Developer Sample Profile on first startup
    autoFillSampleProfile('software');
  }
}

/**
 * Auto-Fill with Sample Profile
 */
function autoFillSampleProfile(profileKey) {
  const profile = SAMPLE_PROFILES[profileKey];
  if (profile) {
    state.resume = JSON.parse(JSON.stringify(profile.resume));
    state.coverLetter = JSON.parse(JSON.stringify(profile.coverLetter));
    state.targetJob = JSON.parse(JSON.stringify(profile.targetJob));
    
    // Default design selections for sample profile
    state.accent = { hue: 250, sat: '84%', light: '54%' };
    state.fontFamily = 'sans-inter';
    state.template = 'creative';
    
    syncInputsFromState();
    renderCanvas();
    updateAtsScore();
    saveState();
  }
}

/**
 * Bind All Event Listeners
 */
function bindEvents() {
  // Mode Switcher (Resume vs Cover Letter)
  els.tabResume.addEventListener('click', () => {
    state.mode = 'resume';
    els.tabResume.classList.add('active');
    els.tabCoverLetter.classList.remove('active');
    els.activeDocTitle.textContent = `Editing: Resume (${formatTemplateName(state.template)})`;
    renderCanvas();
    saveState();
  });
  
  els.tabCoverLetter.addEventListener('click', () => {
    state.mode = 'coverLetter';
    els.tabCoverLetter.classList.add('active');
    els.tabResume.classList.remove('active');
    els.activeDocTitle.textContent = `Editing: Cover Letter (${formatTemplateName(state.template)})`;
    renderCanvas();
    saveState();
  });

  // Settings Modal Controls
  els.settingsBtn.addEventListener('click', () => els.settingsModal.style.display = 'flex');
  els.closeSettingsBtn.addEventListener('click', () => els.settingsModal.style.display = 'none');
  window.addEventListener('click', (e) => {
    if (e.target === els.settingsModal) els.settingsModal.style.display = 'none';
  });
  
  els.saveSettingsBtn.addEventListener('click', () => {
    const key = els.inputApiKey.value.trim();
    localStorage.setItem('gemini_api_key', key);
    els.settingsModal.style.display = 'none';
    alert("Gemini API key saved successfully!");
  });

  // Sidebar Tab Switching
  els.sidebarTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      els.sidebarTabBtns.forEach(b => b.classList.remove('active'));
      els.panels.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Zoom Controls
  els.zoomIn.addEventListener('click', () => {
    if (state.zoom < 150) {
      state.zoom += 10;
      updateZoom();
    }
  });
  
  els.zoomOut.addEventListener('click', () => {
    if (state.zoom > 50) {
      state.zoom -= 10;
      updateZoom();
    }
  });

  // Sidebar Form Input Binds (syncing to state and canvas)
  const bindInput = (el, statePath, isNested = false) => {
    el.addEventListener('input', (e) => {
      if (isNested) {
        const parts = statePath.split('.');
        state[parts[0]][parts[1]] = e.target.value;
      } else {
        state.resume[statePath] = e.target.value;
      }
      renderCanvas();
      updateAtsScore();
      saveState();
    });
  };

  bindInput(els.inputName, 'name');
  bindInput(els.inputTitle, 'title');
  bindInput(els.inputEmail, 'email');
  bindInput(els.inputPhone, 'phone');
  bindInput(els.inputLocation, 'location');
  bindInput(els.inputLink, 'link');
  bindInput(els.inputSummary, 'summary');
  bindInput(els.inputSkills, 'skills');
  
  bindInput(els.inputTargetCompany, 'targetJob.company', true);
  bindInput(els.inputTargetJob, 'targetJob.title', true);
  bindInput(els.inputJobDesc, 'targetJob.desc', true);

  // Dynamic Lists (Experience and Education)
  els.btnAddExperience.addEventListener('click', addExperienceItem);
  els.btnAddEducation.addEventListener('click', addEducationItem);

  // Template Picker Selection
  document.querySelectorAll('.template-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.template-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      
      const tmpl = card.getAttribute('data-template');
      state.template = tmpl;
      
      // Update template layout class on page
      els.documentPage.className = `document-page tmpl-${tmpl}`;
      els.activeDocTitle.textContent = `${state.mode === 'resume' ? 'Editing: Resume' : 'Editing: Cover Letter'} (${formatTemplateName(tmpl)})`;
      
      renderCanvas();
      saveState();
    });
  });

  // Theme Accent Picker
  els.colorOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      els.colorOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      
      const hue = opt.getAttribute('data-hue');
      const sat = opt.getAttribute('data-sat');
      const light = opt.getAttribute('data-light');
      
      state.accent = { hue, sat, light };
      updateThemeColors();
      saveState();
    });
  });

  // Font Selection
  els.fontSelect.addEventListener('change', (e) => {
    state.fontFamily = e.target.value;
    updateFonts();
    saveState();
  });

  // PDF Export
  els.exportPdfBtn.addEventListener('click', () => {
    // Temporarily set document title to the user's name for neat file names in browser printing
    const originalTitle = document.title;
    const documentName = state.resume.name ? `${state.resume.name.replace(/\s+/g, '_')}_Resume` : 'AI_Resume';
    document.title = documentName;
    
    window.print();
    
    // Restore original title
    document.title = originalTitle;
  });

  // AI Suggestions job category changer
  els.aiJobSelect.addEventListener('change', renderOfflineSuggestions);

  // AI Function Triggers
  els.btnAiSummary.addEventListener('click', generateAiSummary);
  els.btnAiCoverLetter.addEventListener('click', generateAiCoverLetter);
  els.btnAiEnhanceExperience.addEventListener('click', enhanceExperienceWithAi);
  els.btnAiAtsScan.addEventListener('click', runAiAtsDeepScan);

  // Auto-Fill and Reset Buttons
  els.btnAutoFill.addEventListener('click', () => {
    if (confirm("This will replace all your current inputs with sample profile data. Continue?")) {
      autoFillSampleProfile('software');
    }
  });
  
  els.btnReset.addEventListener('click', () => {
    if (confirm("Are you sure you want to delete all information in the builder? This cannot be undone.")) {
      resetBuilderData();
    }
  });
}

/**
 * Synchronize all form inputs in sidebar from the local state
 */
function syncInputsFromState() {
  els.inputName.value = state.resume.name || '';
  els.inputTitle.value = state.resume.title || '';
  els.inputEmail.value = state.resume.email || '';
  els.inputPhone.value = state.resume.phone || '';
  els.inputLocation.value = state.resume.location || '';
  els.inputLink.value = state.resume.link || '';
  els.inputSummary.value = state.resume.summary || '';
  els.inputSkills.value = state.resume.skills || '';
  
  els.inputTargetCompany.value = state.targetJob.company || '';
  els.inputTargetJob.value = state.targetJob.title || '';
  els.inputJobDesc.value = state.targetJob.desc || '';
  
  // Set Active Document Mode switch
  if (state.mode === 'coverLetter') {
    els.tabCoverLetter.classList.add('active');
    els.tabResume.classList.remove('active');
  } else {
    els.tabResume.classList.add('active');
    els.tabCoverLetter.classList.remove('active');
  }
  
  // Template Card Active selection
  document.querySelectorAll('.template-card').forEach(c => {
    if (c.getAttribute('data-template') === state.template) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });
  els.documentPage.className = `document-page tmpl-${state.template}`;
  
  // Color Picker Active Selection
  els.colorOptions.forEach(opt => {
    if (opt.getAttribute('data-hue') == state.accent.hue) {
      opt.classList.add('selected');
    } else {
      opt.classList.remove('selected');
    }
  });
  updateThemeColors();

  // Font Dropdown Set
  els.fontSelect.value = state.fontFamily;
  updateFonts();
  
  // Update Zoom Indicator
  updateZoom();

  // Render Experience list inputs
  renderExperienceListInputs();
  
  // Render Education list inputs
  renderEducationListInputs();
}

/**
 * Update global document theme colors
 */
function updateThemeColors() {
  document.documentElement.style.setProperty('--primary-hue', state.accent.hue);
  document.documentElement.style.setProperty('--primary-saturation', state.accent.sat);
  document.documentElement.style.setProperty('--primary-lightness', state.accent.light);
}

/**
 * Update global document font styles
 */
function updateFonts() {
  const fontClassMap = {
    'sans-inter': 'font-sans',
    'serif-classic': 'font-serif',
    'minimalist-clean': 'font-mono'
  };
  
  // Remove existing font classes from document page
  els.documentPage.classList.remove('font-sans', 'font-serif', 'font-mono');
  els.documentPage.classList.add(fontClassMap[state.fontFamily] || 'font-sans');
}

/**
 * Update Document View Zoom Transform
 */
function updateZoom() {
  els.zoomLabel.textContent = `${state.zoom}%`;
  els.documentPage.style.transform = `scale(${state.zoom / 100})`;
}

/**
 * Render Experience items input list
 */
function renderExperienceListInputs() {
  els.formExperienceList.innerHTML = '';
  
  if (!state.resume.experience) {
    state.resume.experience = [];
  }
  
  state.resume.experience.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'dynamic-item-card';
    card.innerHTML = `
      <button type="button" class="remove-btn" data-index="${index}">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        Remove
      </button>
      <div class="form-group">
        <label>Company Name</label>
        <input type="text" class="form-input exp-company" value="${item.company || ''}" placeholder="Acme Corp">
      </div>
      <div class="form-group">
        <label>Job Title</label>
        <input type="text" class="form-input exp-position" value="${item.position || ''}" placeholder="Software Engineer">
      </div>
      <div class="form-group">
        <label>Duration / Dates</label>
        <input type="text" class="form-input exp-duration" value="${item.duration || ''}" placeholder="Jan 2021 - Present">
      </div>
      <div class="form-group">
        <label>Location</label>
        <input type="text" class="form-input exp-location" value="${item.location || ''}" placeholder="San Francisco, CA">
      </div>
      <div class="form-group">
        <label>Key Responsibilities & Achievements (One per line)</label>
        <textarea class="form-input exp-details" rows="3" placeholder="Achieved X by implementing Y, resulting in Z.">${item.details || ''}</textarea>
      </div>
    `;
    
    // Bind change events to this specific card's elements
    card.querySelector('.exp-company').addEventListener('input', (e) => {
      state.resume.experience[index].company = e.target.value;
      renderCanvas();
      saveState();
    });
    card.querySelector('.exp-position').addEventListener('input', (e) => {
      state.resume.experience[index].position = e.target.value;
      renderCanvas();
      saveState();
    });
    card.querySelector('.exp-duration').addEventListener('input', (e) => {
      state.resume.experience[index].duration = e.target.value;
      renderCanvas();
      saveState();
    });
    card.querySelector('.exp-location').addEventListener('input', (e) => {
      state.resume.experience[index].location = e.target.value;
      renderCanvas();
      saveState();
    });
    card.querySelector('.exp-details').addEventListener('input', (e) => {
      state.resume.experience[index].details = e.target.value;
      renderCanvas();
      saveState();
    });
    
    // Remove handler
    card.querySelector('.remove-btn').addEventListener('click', () => {
      state.resume.experience.splice(index, 1);
      renderExperienceListInputs();
      renderCanvas();
      updateAtsScore();
      saveState();
    });
    
    els.formExperienceList.appendChild(card);
  });
}

function addExperienceItem() {
  if (!state.resume.experience) state.resume.experience = [];
  state.resume.experience.push({
    company: '',
    position: '',
    duration: '',
    location: '',
    details: ''
  });
  renderExperienceListInputs();
  renderCanvas();
  saveState();
}

/**
 * Render Education items input list
 */
function renderEducationListInputs() {
  els.formEducationList.innerHTML = '';
  
  if (!state.resume.education) {
    state.resume.education = [];
  }
  
  state.resume.education.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'dynamic-item-card';
    card.innerHTML = `
      <button type="button" class="remove-btn" data-index="${index}">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        Remove
      </button>
      <div class="form-group">
        <label>Institution / School</label>
        <input type="text" class="form-input edu-school" value="${item.school || ''}" placeholder="Stanford University">
      </div>
      <div class="form-group">
        <label>Degree / Field of Study</label>
        <input type="text" class="form-input edu-degree" value="${item.degree || ''}" placeholder="B.S. in Computer Science">
      </div>
      <div class="form-group">
        <label>Duration / Dates</label>
        <input type="text" class="form-input edu-duration" value="${item.duration || ''}" placeholder="2018 - 2022">
      </div>
      <div class="form-group">
        <label>Location</label>
        <input type="text" class="form-input edu-location" value="${item.location || ''}" placeholder="Stanford, CA">
      </div>
      <div class="form-group">
        <label>Details / Honors</label>
        <input type="text" class="form-input edu-details" value="${item.details || ''}" placeholder="GPA 3.8, Magna Cum Laude">
      </div>
    `;
    
    // Bind change events to this specific card's elements
    card.querySelector('.edu-school').addEventListener('input', (e) => {
      state.resume.education[index].school = e.target.value;
      renderCanvas();
      saveState();
    });
    card.querySelector('.edu-degree').addEventListener('input', (e) => {
      state.resume.education[index].degree = e.target.value;
      renderCanvas();
      saveState();
    });
    card.querySelector('.edu-duration').addEventListener('input', (e) => {
      state.resume.education[index].duration = e.target.value;
      renderCanvas();
      saveState();
    });
    card.querySelector('.edu-location').addEventListener('input', (e) => {
      state.resume.education[index].location = e.target.value;
      renderCanvas();
      saveState();
    });
    card.querySelector('.edu-details').addEventListener('input', (e) => {
      state.resume.education[index].details = e.target.value;
      renderCanvas();
      saveState();
    });
    
    // Remove handler
    card.querySelector('.remove-btn').addEventListener('click', () => {
      state.resume.education.splice(index, 1);
      renderEducationListInputs();
      renderCanvas();
      saveState();
    });
    
    els.formEducationList.appendChild(card);
  });
}

function addEducationItem() {
  if (!state.resume.education) state.resume.education = [];
  state.resume.education.push({
    school: '',
    degree: '',
    duration: '',
    location: '',
    details: ''
  });
  renderEducationListInputs();
  renderCanvas();
  saveState();
}

/**
 * Reset all builder data to blank
 */
function resetBuilderData() {
  state.resume = {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    link: '',
    summary: '',
    skills: '',
    experience: [],
    education: []
  };
  state.coverLetter = {
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    recipient: 'Hiring Committee\nTarget Company Inc.',
    salutation: 'Dear Hiring Manager,',
    body: 'Start typing your cover letter details here or click settings to setup Gemini live generation.',
    signoff: 'Sincerely,',
    signatureName: ''
  };
  state.targetJob = {
    company: '',
    title: '',
    desc: ''
  };
  
  syncInputsFromState();
  renderCanvas();
  updateAtsScore();
  saveState();
}

/**
 * Render the Offline Suggestions to the Suggestions panel
 */
function renderOfflineSuggestions() {
  const domain = els.aiJobSelect.value;
  const db = OFFLINE_DB[domain];
  
  els.aiSummarySuggestions.innerHTML = '';
  els.aiExperienceSuggestions.innerHTML = '';
  
  if (db) {
    db.summaries.forEach(sum => {
      const div = document.createElement('div');
      div.className = 'ai-suggest-item';
      div.textContent = sum;
      div.addEventListener('click', () => {
        state.resume.summary = sum;
        els.inputSummary.value = sum;
        renderCanvas();
        updateAtsScore();
        saveState();
        showFeedback("Summary updated!");
      });
      els.aiSummarySuggestions.appendChild(div);
    });
    
    db.bullets.forEach(bullet => {
      const div = document.createElement('div');
      div.className = 'ai-suggest-item';
      div.textContent = bullet;
      div.addEventListener('click', () => {
        // Appends bullet point to the first experience, if any
        if (state.resume.experience && state.resume.experience.length > 0) {
          const currentDetails = state.resume.experience[0].details || '';
          state.resume.experience[0].details = currentDetails + (currentDetails ? '\n' : '') + bullet;
          renderExperienceListInputs();
          renderCanvas();
          saveState();
          showFeedback("Added to first experience!");
        } else {
          alert("Add a Work Experience item first under the Content tab to insert this bullet.");
        }
      });
      els.aiExperienceSuggestions.appendChild(div);
    });
  }
}

/**
 * Helper to display brief success notification toast
 */
function showFeedback(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: var(--primary);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);
    z-index: 2000;
    font-size: 0.85rem;
    font-weight: 600;
    pointer-events: none;
    animation: slideInModal 0.25s forwards;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'fadeInModal 0.25s reverse forwards';
    setTimeout(() => toast.remove(), 250);
  }, 2000);
}

/**
 * Format Template name for header display
 */
function formatTemplateName(tmpl) {
  const names = {
    creative: 'Creative HSL Gradient',
    tech: 'Tech Modern Sidebar',
    executive: 'Executive Classic',
    minimalist: 'Minimalist Chic'
  };
  return names[tmpl] || tmpl;
}

/**
 * ====================================================
 * CANVAS DRAW / RENDER ROUTINES (HTML Template Injection)
 * ====================================================
 */
function renderCanvas() {
  const canvas = els.documentPage;
  
  if (state.mode === 'coverLetter') {
    canvas.innerHTML = renderCoverLetterHtml();
  } else {
    canvas.innerHTML = renderResumeHtml();
  }
  
  // Re-bind contenteditable interactions for interactive design updates
  bindCanvasInlineEditing();
}

/**
 * HTML Builder for Resume Modes
 */
function renderResumeHtml() {
  const r = state.resume;
  
  // Format details strings into HTML bullet arrays
  const formatBullets = (detailsText) => {
    if (!detailsText) return '';
    const lines = detailsText.split('\n').filter(l => l.trim() !== '');
    return lines.map(line => `<li>${escapeHtml(line.replace(/^-\s*/, ''))}</li>`).join('');
  };

  const getContactBarHtml = (className = '') => `
    <div class="${className}">
      ${r.email ? `<span class="r-contact-item">📧 <span contenteditable="true" data-field="email">${escapeHtml(r.email)}</span></span>` : ''}
      ${r.phone ? `<span class="r-contact-item">📞 <span contenteditable="true" data-field="phone">${escapeHtml(r.phone)}</span></span>` : ''}
      ${r.location ? `<span class="r-contact-item">📍 <span contenteditable="true" data-field="location">${escapeHtml(r.location)}</span></span>` : ''}
      ${r.link ? `<span class="r-contact-item">🔗 <span contenteditable="true" data-field="link">${escapeHtml(r.link)}</span></span>` : ''}
    </div>
  `;

  const getSkillsHtml = () => {
    if (!r.skills) return '';
    const skillsList = r.skills.split(',').map(s => s.trim()).filter(s => s !== '');
    return `
      <div class="r-skills-list">
        ${skillsList.map(s => `<span class="r-skill-tag">${escapeHtml(s)}</span>`).join('')}
      </div>
    `;
  };

  const getSkillsProgressBars = () => {
    if (!r.skills) return '';
    const skillsList = r.skills.split(',').map(s => s.trim()).filter(s => s !== '');
    // Mock varying progress bar percentages for aesthetic flair
    return skillsList.map((s, i) => {
      const fillPercentage = 95 - (i * 7) > 60 ? 95 - (i * 7) : 70;
      return `
        <div class="skill-progress-bar">
          <div class="skill-progress-label">
            <span>${escapeHtml(s)}</span>
            <span>${fillPercentage}%</span>
          </div>
          <div class="skill-track">
            <div class="skill-bar-fill" style="width: ${fillPercentage}%;"></div>
          </div>
        </div>
      `;
    }).join('');
  };

  const getExperienceHtml = () => {
    if (!r.experience || r.experience.length === 0) return '<p style="color:#94a3b8; font-style:italic;">Add work experience in Content tab</p>';
    return r.experience.map((item, index) => `
      <div class="r-item">
        <div class="r-item-header">
          <span contenteditable="true" data-exp-index="${index}" data-exp-field="position">${escapeHtml(item.position || 'Job Title')}</span>
          <span contenteditable="true" data-exp-index="${index}" data-exp-field="duration">${escapeHtml(item.duration || 'Dates')}</span>
        </div>
        <div class="r-item-sub">
          <strong contenteditable="true" data-exp-index="${index}" data-exp-field="company">${escapeHtml(item.company || 'Company')}</strong>, 
          <span contenteditable="true" data-exp-index="${index}" data-exp-field="location">${escapeHtml(item.location || 'Location')}</span>
        </div>
        <ul class="r-bullet-list" contenteditable="true" data-exp-index="${index}" data-exp-field="details">
          ${formatBullets(item.details)}
        </ul>
      </div>
    `).join('');
  };

  const getEducationHtml = () => {
    if (!r.education || r.education.length === 0) return '<p style="color:#94a3b8; font-style:italic;">Add education details in Content tab</p>';
    return r.education.map((item, index) => `
      <div class="r-item">
        <div class="r-item-header">
          <span contenteditable="true" data-edu-index="${index}" data-edu-field="degree">${escapeHtml(item.degree || 'Degree')}</span>
          <span contenteditable="true" data-edu-index="${index}" data-edu-field="duration">${escapeHtml(item.duration || 'Dates')}</span>
        </div>
        <div class="r-item-sub">
          <strong contenteditable="true" data-edu-index="${index}" data-edu-field="school">${escapeHtml(item.school || 'School')}</strong>, 
          <span contenteditable="true" data-edu-index="${index}" data-edu-field="location">${escapeHtml(item.location || 'Location')}</span>
        </div>
        <p style="margin-top: 4px; font-size: 8.5pt; color: #475569;" contenteditable="true" data-edu-index="${index}" data-edu-field="details">${escapeHtml(item.details || '')}</p>
      </div>
    `).join('');
  };

  // Render based on selected template layout style
  switch (state.template) {
    case 'tech':
      return `
        <div class="resume-wrapper">
          <div class="tech-sidebar">
            <div>
              <h1 class="r-name" contenteditable="true" data-field="name">${escapeHtml(r.name || 'Your Name')}</h1>
              <h2 class="r-title" contenteditable="true" data-field="title">${escapeHtml(r.title || 'Professional Title')}</h2>
            </div>
            
            <div class="tech-contact-list">
              ${r.email ? `<div class="r-contact-item">📧 <span contenteditable="true" data-field="email">${escapeHtml(r.email)}</span></div>` : ''}
              ${r.phone ? `<div class="r-contact-item">📞 <span contenteditable="true" data-field="phone">${escapeHtml(r.phone)}</span></div>` : ''}
              ${r.location ? `<div class="r-contact-item">📍 <span contenteditable="true" data-field="location">${escapeHtml(r.location)}</span></div>` : ''}
              ${r.link ? `<div class="r-contact-item">🔗 <span contenteditable="true" data-field="link">${escapeHtml(r.link)}</span></div>` : ''}
            </div>

            <div>
              <h3 class="r-section-title">Core Skills</h3>
              <div style="margin-top: 8px;">
                ${getSkillsProgressBars()}
              </div>
            </div>

            <div>
              <h3 class="r-section-title">Education</h3>
              <div style="margin-top: 8px;">
                ${getEducationHtml()}
              </div>
            </div>
          </div>
          <div class="tech-main">
            <div>
              <h3 class="r-section-title" style="margin-top: 0;">Professional Profile</h3>
              <p style="margin-top: 6px; text-align: justify; line-height: 1.6;" contenteditable="true" data-field="summary">${escapeHtml(r.summary || 'Summary paragraph goes here...')}</p>
            </div>
            
            <div>
              <h3 class="r-section-title">Work Experience</h3>
              <div>
                ${getExperienceHtml()}
              </div>
            </div>
          </div>
        </div>
      `;

    case 'executive':
      return `
        <div class="resume-wrapper">
          <div class="exec-header">
            <h1 class="r-name" contenteditable="true" data-field="name">${escapeHtml(r.name || 'Your Name')}</h1>
            <h2 class="r-title" contenteditable="true" data-field="title">${escapeHtml(r.title || 'Professional Title')}</h2>
            ${getContactBarHtml('exec-contact-bar')}
          </div>

          <div style="margin-bottom: 16px;">
            <p style="text-align: justify; line-height: 1.6;" contenteditable="true" data-field="summary">${escapeHtml(r.summary || 'Summary paragraph...')}</p>
          </div>

          <div>
            <h3 class="r-section-title">Professional Experience</h3>
            <div>
              ${getExperienceHtml()}
            </div>
          </div>

          <div style="margin-top: 10px;">
            <h3 class="r-section-title">Core Competencies</h3>
            ${getSkillsHtml()}
          </div>

          <div style="margin-top: 10px;">
            <h3 class="r-section-title">Education</h3>
            <div>
              ${getEducationHtml()}
            </div>
          </div>
        </div>
      `;

    case 'minimalist':
      return `
        <div class="resume-wrapper">
          <div style="margin-bottom: 24px;">
            <h1 class="r-name" contenteditable="true" data-field="name">${escapeHtml(r.name || 'Your Name')}</h1>
            <h2 class="r-title" contenteditable="true" data-field="title">${escapeHtml(r.title || 'Professional Title')}</h2>
            ${getContactBarHtml('minimal-contact-bar')}
          </div>

          <div style="display: grid; grid-template-columns: 1fr; gap: 18px;">
            <div>
              <p style="line-height: 1.6; text-align: justify; color: #475569;" contenteditable="true" data-field="summary">${escapeHtml(r.summary || 'Summary paragraph...')}</p>
            </div>
            
            <div>
              <h3 class="r-section-title">Experience</h3>
              <div>
                ${getExperienceHtml()}
              </div>
            </div>

            <div>
              <h3 class="r-section-title">Skills</h3>
              ${getSkillsHtml()}
            </div>

            <div>
              <h3 class="r-section-title">Education</h3>
              <div>
                ${getEducationHtml()}
              </div>
            </div>
          </div>
        </div>
      `;

    case 'creative':
    default:
      return `
        <div class="resume-wrapper">
          <div class="creative-header">
            <h1 class="r-name" contenteditable="true" data-field="name">${escapeHtml(r.name || 'Your Name')}</h1>
            <h2 class="r-title" contenteditable="true" data-field="title">${escapeHtml(r.title || 'Professional Title')}</h2>
            ${getContactBarHtml('creative-contact-bar')}
          </div>
          
          <div class="r-grid-2">
            <div class="r-col-left">
              <div>
                <h3 class="r-section-title">Professional Experience</h3>
                <div>
                  ${getExperienceHtml()}
                </div>
              </div>
            </div>
            
            <div class="r-col-right">
              <div>
                <h3 class="r-section-title">About Me</h3>
                <p style="line-height: 1.6; text-align: justify;" contenteditable="true" data-field="summary">${escapeHtml(r.summary || 'Summary paragraph...')}</p>
              </div>

              <div>
                <h3 class="r-section-title">Core Skills</h3>
                ${getSkillsHtml()}
              </div>

              <div>
                <h3 class="r-section-title">Education</h3>
                <div>
                  ${getEducationHtml()}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
  }
}

/**
 * HTML Builder for Cover Letter Modes
 */
function renderCoverLetterHtml() {
  const c = state.coverLetter;
  const r = state.resume; // Borrow general contact info
  
  // Recipients paragraphs parser
  const getRecipientHtml = () => {
    if (!c.recipient) return '';
    return c.recipient.split('\n').map(line => `<p>${escapeHtml(line)}</p>`).join('');
  };

  // Body paragraphs parser
  const getBodyParagraphsHtml = () => {
    if (!c.body) return '<p style="color:#94a3b8; font-style:italic;">Add cover letter body in Content tab or generate with AI</p>';
    return c.body.split('\n\n').map(p => `<p style="margin-bottom: 14px; text-align: justify; line-height: 1.6;">${escapeHtml(p)}</p>`).join('');
  };

  const getContactHeader = () => `
    <div style="border-bottom: 2px solid var(--primary); padding-bottom: 12px; margin-bottom: 24px;">
      <h1 class="r-name">${escapeHtml(r.name || 'Your Name')}</h1>
      <h2 class="r-title">${escapeHtml(r.title || 'Professional Title')}</h2>
      <div style="display: flex; gap: 16px; margin-top: 8px; font-size: 8.5pt; color: #64748b;">
        ${r.email ? `<span>📧 ${escapeHtml(r.email)}</span>` : ''}
        ${r.phone ? `<span>📞 ${escapeHtml(r.phone)}</span>` : ''}
        ${r.location ? `<span>📍 ${escapeHtml(r.location)}</span>` : ''}
      </div>
    </div>
  `;

  // Render based on selected layout style
  switch (state.template) {
    case 'tech':
      return `
        <div class="cover-letter-wrapper" style="padding: 0; display: grid; grid-template-columns: 240px 1fr; min-height: 297mm;">
          <div class="tech-sidebar" style="height: 100%;">
            <div>
              <h1 class="r-name">${escapeHtml(r.name || 'Your Name')}</h1>
              <h2 class="r-title">${escapeHtml(r.title || 'Professional Title')}</h2>
            </div>
            
            <div class="tech-contact-list" style="margin-top: 20px;">
              ${r.email ? `<div class="r-contact-item">📧 <span>${escapeHtml(r.email)}</span></div>` : ''}
              ${r.phone ? `<div class="r-contact-item">📞 <span>${escapeHtml(r.phone)}</span></div>` : ''}
              ${r.location ? `<div class="r-contact-item">📍 <span>${escapeHtml(r.location)}</span></div>` : ''}
              ${r.link ? `<div class="r-contact-item">🔗 <span>${escapeHtml(r.link)}</span></div>` : ''}
            </div>
          </div>
          <div class="tech-main" style="padding: 24mm 24px;">
            <div class="cl-date" contenteditable="true" data-cl-field="date">${escapeHtml(c.date || 'Date')}</div>
            <div class="cl-recipient" contenteditable="true" data-cl-field="recipient">
              ${getRecipientHtml()}
            </div>
            <div class="cl-salutation" contenteditable="true" data-cl-field="salutation">${escapeHtml(c.salutation)}</div>
            <div class="cl-body" contenteditable="true" data-cl-field="body">
              ${getBodyParagraphsHtml()}
            </div>
            <div class="cl-signoff">
              <p contenteditable="true" data-cl-field="signoff">${escapeHtml(c.signoff)}</p>
              <p class="cl-signature-name" contenteditable="true" data-cl-field="signatureName">${escapeHtml(c.signatureName || r.name)}</p>
            </div>
          </div>
        </div>
      `;

    case 'executive':
      return `
        <div class="cover-letter-wrapper">
          <div class="exec-header">
            <h1 class="r-name">${escapeHtml(r.name || 'Your Name')}</h1>
            <h2 class="r-title">${escapeHtml(r.title || 'Professional Title')}</h2>
            <div class="exec-contact-bar">
              ${r.email ? `<span>📧 ${escapeHtml(r.email)}</span>` : ''}
              ${r.phone ? `<span>📞 ${escapeHtml(r.phone)}</span>` : ''}
              ${r.location ? `<span>📍 ${escapeHtml(r.location)}</span>` : ''}
            </div>
          </div>

          <div style="text-align: left; padding: 0 10mm;">
            <div class="cl-date" contenteditable="true" data-cl-field="date">${escapeHtml(c.date || 'Date')}</div>
            <div class="cl-recipient" contenteditable="true" data-cl-field="recipient">
              ${getRecipientHtml()}
            </div>
            <div class="cl-salutation" contenteditable="true" data-cl-field="salutation">${escapeHtml(c.salutation)}</div>
            <div class="cl-body" contenteditable="true" data-cl-field="body">
              ${getBodyParagraphsHtml()}
            </div>
            <div class="cl-signoff">
              <p contenteditable="true" data-cl-field="signoff">${escapeHtml(c.signoff)}</p>
              <p class="cl-signature-name" contenteditable="true" data-cl-field="signatureName">${escapeHtml(c.signatureName || r.name)}</p>
            </div>
          </div>
        </div>
      `;

    case 'minimalist':
      return `
        <div class="cover-letter-wrapper">
          <div style="margin-bottom: 30px;">
            <h1 class="r-name">${escapeHtml(r.name || 'Your Name')}</h1>
            <h2 class="r-title">${escapeHtml(r.title || 'Professional Title')}</h2>
            <div class="minimal-contact-bar">
              ${r.email ? `<span>📧 ${escapeHtml(r.email)}</span>` : ''}
              ${r.phone ? `<span>📞 ${escapeHtml(r.phone)}</span>` : ''}
              ${r.location ? `<span>📍 ${escapeHtml(r.location)}</span>` : ''}
            </div>
          </div>

          <div class="cl-date" contenteditable="true" data-cl-field="date">${escapeHtml(c.date || 'Date')}</div>
          <div class="cl-recipient" contenteditable="true" data-cl-field="recipient">
            ${getRecipientHtml()}
          </div>
          <div class="cl-salutation" contenteditable="true" data-cl-field="salutation">${escapeHtml(c.salutation)}</div>
          <div class="cl-body" contenteditable="true" data-cl-field="body">
            ${getBodyParagraphsHtml()}
          </div>
          <div class="cl-signoff">
            <p contenteditable="true" data-cl-field="signoff">${escapeHtml(c.signoff)}</p>
            <p class="cl-signature-name" contenteditable="true" data-cl-field="signatureName">${escapeHtml(c.signatureName || r.name)}</p>
          </div>
        </div>
      `;

    case 'creative':
    default:
      return `
        <div class="cover-letter-wrapper">
          <div class="creative-header">
            <h1 class="r-name">${escapeHtml(r.name || 'Your Name')}</h1>
            <h2 class="r-title">${escapeHtml(r.title || 'Professional Title')}</h2>
            <div class="creative-contact-bar">
              ${r.email ? `<span>📧 ${escapeHtml(r.email)}</span>` : ''}
              ${r.phone ? `<span>📞 ${escapeHtml(r.phone)}</span>` : ''}
              ${r.location ? `<span>📍 ${escapeHtml(r.location)}</span>` : ''}
            </div>
          </div>

          <div class="cl-date" contenteditable="true" data-cl-field="date">${escapeHtml(c.date || 'Date')}</div>
          <div class="cl-recipient" contenteditable="true" data-cl-field="recipient">
            ${getRecipientHtml()}
          </div>
          <div class="cl-salutation" contenteditable="true" data-cl-field="salutation">${escapeHtml(c.salutation)}</div>
          <div class="cl-body" contenteditable="true" data-cl-field="body">
            ${getBodyParagraphsHtml()}
          </div>
          <div class="cl-signoff">
            <p contenteditable="true" data-cl-field="signoff">${escapeHtml(c.signoff)}</p>
            <p class="cl-signature-name" contenteditable="true" data-cl-field="signatureName">${escapeHtml(c.signatureName || r.name)}</p>
          </div>
        </div>
      `;
  }
}

/**
 * Enable contenteditable inline changes to update sidebar inputs and state in real-time
 */
function bindCanvasInlineEditing() {
  const page = els.documentPage;
  
  // 1. Direct fields binds
  page.querySelectorAll('[data-field]').forEach(el => {
    el.addEventListener('input', (e) => {
      const field = el.getAttribute('data-field');
      const text = el.innerText;
      
      state.resume[field] = text;
      
      // Update sidebar input mirror
      const inputEl = document.getElementById(`input${field.charAt(0).toUpperCase() + field.slice(1)}`);
      if (inputEl) {
        inputEl.value = text;
      }
      
      updateAtsScore();
      saveState();
    });
  });

  // 2. Experience fields binds
  page.querySelectorAll('[data-exp-index]').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = parseInt(el.getAttribute('data-exp-index'), 10);
      const field = el.getAttribute('data-exp-field');
      let text = el.innerText;
      
      // If it's the bullet details list, reassemble it back to a text structure with newlines
      if (field === 'details') {
        const bullets = [];
        el.querySelectorAll('li').forEach(li => bullets.push(li.innerText));
        text = bullets.join('\n');
      }
      
      state.resume.experience[idx][field] = text;
      
      // Re-render inputs in sidebar to match without resetting cursor focus if active
      const activeElement = document.activeElement;
      renderExperienceListInputs();
      if (activeElement && activeElement.id) {
        const restored = document.getElementById(activeElement.id);
        if (restored) restored.focus();
      }
      
      updateAtsScore();
      saveState();
    });
  });

  // 3. Education fields binds
  page.querySelectorAll('[data-edu-index]').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = parseInt(el.getAttribute('data-edu-index'), 10);
      const field = el.getAttribute('data-edu-field');
      const text = el.innerText;
      
      state.resume.education[idx][field] = text;
      
      renderEducationListInputs();
      saveState();
    });
  });

  // 4. Cover Letter fields binds
  page.querySelectorAll('[data-cl-field]').forEach(el => {
    el.addEventListener('input', (e) => {
      const field = el.getAttribute('data-cl-field');
      let text = el.innerText;
      
      // Recipient details maps paragraphs back to newline joined blocks
      if (field === 'recipient') {
        const paragraphs = [];
        el.querySelectorAll('p').forEach(p => paragraphs.push(p.innerText));
        text = paragraphs.join('\n');
      } else if (field === 'body') {
        const paragraphs = [];
        el.querySelectorAll('p').forEach(p => paragraphs.push(p.innerText));
        text = paragraphs.join('\n\n');
      }
      
      state.coverLetter[field] = text;
      saveState();
    });
  });
}

/**
 * HTML Escaper helper
 */
function escapeHtml(string) {
  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return string ? String(string).replace(/[&<>"']/g, (match) => htmlEscapes[match]) : '';
}

/**
 * ====================================================
 * ATS REAL-TIME SCORE SCANNER
 * ====================================================
 */
function updateAtsScore() {
  const jobDesc = state.targetJob.desc || '';
  const r = state.resume;
  
  if (!jobDesc.trim()) {
    setAtsUINeedsInfo();
    return;
  }
  
  // 1. Core word matching processor
  const cleanAndTokenize = (text) => {
    const commonWords = new Set(['the', 'and', 'a', 'to', 'of', 'in', 'i', 'is', 'that', 'it', 'on', 'you', 'this', 'for', 'but', 'with', 'as', 'are', 'or', 'at', 'an', 'be', 'by', 'from', 'our', 'your']);
    return text.toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
      .split(/\s+/)
      .filter(w => w.length > 3 && !commonWords.has(w));
  };

  const jdTokens = cleanAndTokenize(jobDesc);
  const uniqueJdKeywords = [...new Set(jdTokens)];
  
  const resumeText = `${r.title} ${r.summary} ${r.skills} ${r.experience.map(e => `${e.position} ${e.details}`).join(' ')}`;
  const resumeTokens = new Set(cleanAndTokenize(resumeText));
  
  // Calculate keyword matches
  const matched = [];
  const missing = [];
  
  uniqueJdKeywords.forEach(kw => {
    if (resumeTokens.has(kw)) {
      matched.push(kw);
    } else {
      missing.push(kw);
    }
  });

  // Limit listings to a subset for readability
  const maxListCount = 12;
  const missingSubset = missing.slice(0, maxListCount);
  const matchedSubset = matched.slice(0, maxListCount);

  // 2. Score Calculation weighted elements
  const keywordDensityScore = uniqueJdKeywords.length > 0 ? (matched.length / uniqueJdKeywords.length) * 100 : 0;
  
  // Section checklist scores (resume structure completeness)
  let sectionScore = 0;
  if (r.name) sectionScore += 20;
  if (r.summary) sectionScore += 20;
  if (r.skills) sectionScore += 20;
  if (r.experience.length > 0) sectionScore += 20;
  if (r.education.length > 0) sectionScore += 20;
  
  // Overall ATS score
  const finalScore = Math.round((keywordDensityScore * 0.6) + (sectionScore * 0.4));
  
  // Render score UI
  updateAtsScoreRing(finalScore);
  
  // Status Labels
  let statusText = "Action Required";
  let messageText = "Low keyword matches. Tailor your summary and experience bullet points to match target job descriptors.";
  
  if (finalScore >= 80) {
    statusText = "Excellent Match";
    messageText = "Great ATS compatibility! Your resume contains a strong density of keywords matching this job description.";
  } else if (finalScore >= 50) {
    statusText = "Good Compatibility";
    messageText = "Decent alignment. Try to integrate a few more missing key technical keywords to push past 80%.";
  }
  
  els.atsStatusLabel.textContent = statusText;
  els.atsMessageLabel.textContent = messageText;
  
  // Recommendations List
  els.atsFeedbackList.innerHTML = '';
  
  // Missing keywords recommendation
  if (missing.length > 0) {
    const item = document.createElement('div');
    item.className = 'ats-feedback-item missing';
    item.innerHTML = `
      <div>
        <strong>Add Missing Keywords (${missing.length} missing)</strong>
        <p style="margin-top: 4px; color: #cbd5e1; margin-bottom: 8px;">Integrate these core terms from the Job Description into your resume skills or experience descriptions:</p>
        <div style="margin-top: 6px;">
          ${missingSubset.map(k => `<span class="ats-keyword-pill">${escapeHtml(k)}</span>`).join('')}
          ${missing.length > maxListCount ? `<span style="font-size: 0.75rem; color:#64748b; margin-left: 4px;">+${missing.length - maxListCount} more</span>` : ''}
        </div>
      </div>
    `;
    els.atsFeedbackList.appendChild(item);
  }
  
  // Found keywords confirmation
  if (matched.length > 0) {
    const item = document.createElement('div');
    item.className = 'ats-feedback-item';
    item.innerHTML = `
      <div>
        <strong>Successfully Matched Keywords (${matched.length} matched)</strong>
        <p style="margin-top: 4px; color: #cbd5e1; margin-bottom: 8px;">These keywords were parsed successfully inside your document details:</p>
        <div style="margin-top: 6px;">
          ${matchedSubset.map(k => `<span class="ats-keyword-pill" style="border-color:#10b981; color:#10b981;">${escapeHtml(k)}</span>`).join('')}
        </div>
      </div>
    `;
    els.atsFeedbackList.appendChild(item);
  }
}

function setAtsUINeedsInfo() {
  updateAtsScoreRing(0);
  els.atsStatusLabel.textContent = "Needs Information";
  els.atsMessageLabel.textContent = "Paste a Target Job Description under the Content tab to view keyword matches and optimization suggestions.";
  els.atsFeedbackList.innerHTML = `
    <div class="ats-feedback-item missing">
      <div>
        <strong>Target Job Description Empty</strong>
        <p style="margin-top: 4px;">Paste keywords and responsibilities in the job description field of the content tab to trigger scan.</p>
      </div>
    </div>
  `;
}

function updateAtsScoreRing(score) {
  els.atsScoreVal.textContent = `${score}%`;
  
  // Progress ring dash offset math (radius = 50, circumference = 2 * PI * r = 314.16)
  const circumference = 314.16;
  const offset = circumference - (score / 100) * circumference;
  els.atsProgressRing.style.strokeDashoffset = offset;
}

/**
 * ====================================================
 * GEMINI LIVE AI SERVICE ENGINE
 * ====================================================
 */
async function callGemini(prompt, systemInstruction = '') {
  const apiKey = localStorage.getItem('gemini_api_key');
  if (!apiKey) {
    alert("Gemini API Key is missing! Please click the Settings gear icon in the header and input a valid API Key to unlock live AI generation.");
    throw new Error("API Key Missing");
  }
  
  // Using gemini-1.5-flash which is standard and has broad support
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  
  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: `${systemInstruction ? systemInstruction + '\n\n' : ''}Prompt: ${prompt}` }]
      }
    ]
  };
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  
  if (!response.ok) {
    const errData = await response.json();
    throw new Error(errData.error?.message || `HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textResponse) {
    throw new Error("Empty response returned from Gemini API");
  }
  
  return textResponse;
}

/**
 * AI Action 1: Write Tailored Professional Summary
 */
async function generateAiSummary() {
  const r = state.resume;
  const job = state.targetJob;
  
  if (!job.title || !job.desc) {
    alert("Please fill in Target Job Title and Job Description fields under the Content tab first. The AI needs this data to tailor your summary.");
    return;
  }
  
  const loader = showAiLoader(els.canvasViewport, "Gemini writing summary...", "Generating a high-impact profile summary targeted for your job application.");
  
  // Build prompt
  const prompt = `
    Generate a 3-4 sentence professional summary (maximum 80 words) for a resume.
    
    APPLICANT PROFILE:
    Name: ${r.name}
    Current Title: ${r.title}
    Skills: ${r.skills}
    Past experiences: ${r.experience.map(e => `${e.position} at ${e.company}: ${e.details}`).join('\n')}
    
    TARGET JOB DETAIL:
    Job Title: ${job.title}
    Company: ${job.company}
    Job Description: ${job.desc}
    
    Create a compelling summary that aligns the applicant's core achievements with the job description criteria. Use active, punchy professional language. Write only the summary text without any markdown bold headers, quotes, or introduction.
  `;
  
  try {
    const result = await callGemini(prompt);
    const cleanedText = result.trim().replace(/^"|"$/g, ''); // strip quotes
    
    state.resume.summary = cleanedText;
    els.inputSummary.value = cleanedText;
    
    renderCanvas();
    updateAtsScore();
    saveState();
    showFeedback("AI Summary generated successfully!");
  } catch (e) {
    console.error("AI summary generation error", e);
    if (e.message !== "API Key Missing") {
      alert(`API Error: ${e.message}`);
    }
  } finally {
    hideAiLoader(loader);
  }
}

/**
 * AI Action 2: Generate Full Cover Letter
 */
async function generateAiCoverLetter() {
  const r = state.resume;
  const c = state.coverLetter;
  const job = state.targetJob;
  
  if (!job.title || !job.desc) {
    alert("Please enter a Target Job Title and Job Description under the Content tab. The AI uses this data to write your cover letter.");
    return;
  }
  
  const loader = showAiLoader(els.canvasViewport, "Gemini drafting Cover Letter...", "Synthesizing your resume details and the target job description into a tailored cover letter.");
  
  const prompt = `
    Draft a professional, compelling cover letter (around 250-300 words).
    
    APPLICANT PROFILE:
    Name: ${r.name || 'Your Name'}
    Professional Title: ${r.title || 'Professional Title'}
    Contact details: Email: ${r.email}, Phone: ${r.phone}, Location: ${r.location}
    Experience Details: ${r.experience.map(e => `${e.position} at ${e.company}: ${e.details}`).join('\n')}
    Education: ${r.education.map(ed => `${ed.degree} from ${ed.school}`).join('\n')}
    
    TARGET JOB DETAIL:
    Job Title: ${job.title}
    Hiring Company: ${job.company}
    Job Description: ${job.desc}
    
    Output format:
    Please generate ONLY the paragraphs of the body of the cover letter. Separated by exactly two newlines (double return).
    
    Do NOT include date, header, recipient address, salutation (Dear Hiring Manager), signoff (Sincerely), or signature. The system formats those automatically. Start directly with the opening hook paragraph.
    Ensure the letter sounds natural, highlights specific matching accomplishments from the experience, and conveys excitement about the role.
  `;
  
  try {
    const result = await callGemini(prompt);
    const cleanedBody = result.trim();
    
    // Auto populate date & recipient name
    state.coverLetter.date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    state.coverLetter.recipient = `Hiring Team\n${job.company || 'Target Company Inc.'}\nCompany Location Details`;
    state.coverLetter.salutation = `Dear Hiring Team at ${job.company || 'Target Company'},`;
    state.coverLetter.body = cleanedBody;
    state.coverLetter.signatureName = r.name || 'Your Name';
    
    // Switch view to Cover Letter mode to show the result immediately
    state.mode = 'coverLetter';
    els.tabCoverLetter.classList.add('active');
    els.tabResume.classList.remove('active');
    els.activeDocTitle.textContent = `Editing: Cover Letter (${formatTemplateName(state.template)})`;
    
    renderCanvas();
    saveState();
    showFeedback("AI Cover Letter generated successfully!");
  } catch (e) {
    console.error("AI Cover Letter generation error", e);
    if (e.message !== "API Key Missing") {
      alert(`API Error: ${e.message}`);
    }
  } finally {
    hideAiLoader(loader);
  }
}

/**
 * AI Action 3: STAR Method Experience Bullet Points Enhancer
 */
async function enhanceExperienceWithAi() {
  const r = state.resume;
  const job = state.targetJob;
  
  if (r.experience.length === 0) {
    alert("Please add at least one work experience item under the Content tab first.");
    return;
  }
  
  const loader = showAiLoader(els.canvasViewport, "Gemini rewriting bullet points...", "Structuring experience descriptions utilizing the STAR method (Situation, Task, Action, Result) with strong action verbs.");
  
  // Enhances the first work experience in list
  const expIndex = 0; 
  const expItem = r.experience[expIndex];
  
  const prompt = `
    You are an elite executive recruiter. Enhance the following work experience details to be highly impactful bullet points utilizing the STAR (Situation, Task, Action, Result) method. Include metric-focused results where appropriate.
    
    ROLE DETAIL:
    Company: ${expItem.company}
    Role: ${expItem.position}
    Original details: ${expItem.details}
    
    TARGET JOB DESCRIPTOR:
    Job Title: ${job.title || 'Target Role'}
    Job Description: ${job.desc || ''}
    
    Output instructions:
    Provide exactly 3 or 4 high-impact bullet points, each on a new line starting with a dash (-).
    Do NOT include category headers, Situation/Task/Action/Result labels, bold tags, or conversational introductions. Write only the bullet points.
  `;
  
  try {
    const result = await callGemini(prompt);
    
    // Format response back to textarea newline structure
    const formattedBullets = result.trim()
      .split('\n')
      .map(line => line.replace(/^-\s*/, '').trim())
      .filter(line => line !== '')
      .join('\n');
      
    state.resume.experience[expIndex].details = formattedBullets;
    
    renderExperienceListInputs();
    renderCanvas();
    saveState();
    showFeedback("Work experience enhanced!");
  } catch (e) {
    console.error("AI Experience enhancement error", e);
    if (e.message !== "API Key Missing") {
      alert(`API Error: ${e.message}`);
    }
  } finally {
    hideAiLoader(loader);
  }
}

/**
 * AI Action 4: AI Deep ATS Analysis & recommendations
 */
async function runAiAtsDeepScan() {
  const r = state.resume;
  const job = state.targetJob;
  
  if (!job.desc.trim()) {
    alert("Please paste a Job Description in the Content tab to run an ATS compatibility scan.");
    return;
  }
  
  const loader = showAiLoader(els.canvasViewport, "Gemini scanning resume...", "Running deep linguistic analysis of your resume content against target job requirements.");
  
  const prompt = `
    You are an expert applicant tracking system (ATS) parser. Audit this candidate's resume details against the provided job requirements:
    
    RESUME PROFILE:
    Job Title: ${r.title}
    Skills: ${r.skills}
    Summary: ${r.summary}
    Experience: ${r.experience.map(e => `${e.position} at ${e.company}: ${e.details}`).join('\n')}
    
    JOB SPECIFICATION:
    Job Title: ${job.title}
    Job Description: ${job.desc}
    
    Evaluate matches and structure. Output a valid, stringified JSON object matching the schema below. Do not wrap in markdown code blocks like \`\`\`json. Return ONLY the raw JSON string:
    {
      "score": <number 0-100 indicating compatibility>,
      "matchingKeywords": [<array of matching strings>],
      "missingKeywords": [<array of important missing strings>],
      "recommendations": [
        {
          "title": "<title string>",
          "description": "<detailed guidance instruction>"
        }
      ]
    }
  `;
  
  try {
    const resultText = await callGemini(prompt);
    
    // Cleanup potential JSON wrappers
    let cleanJson = resultText.trim();
    if (cleanJson.startsWith('```json')) {
      cleanJson = cleanJson.substring(7);
    } else if (cleanJson.startsWith('```')) {
      cleanJson = cleanJson.substring(3);
    }
    if (cleanJson.endsWith('```')) {
      cleanJson = cleanJson.substring(0, cleanJson.length - 3);
    }
    cleanJson = cleanJson.trim();
    
    const parsed = JSON.parse(cleanJson);
    
    // Render the AI ATS Score
    updateAtsScoreRing(parsed.score || 0);
    
    let statusText = "Action Required";
    if (parsed.score >= 80) statusText = "Strong Match";
    else if (parsed.score >= 50) statusText = "Moderate Match";
    els.atsStatusLabel.textContent = statusText;
    els.atsMessageLabel.textContent = "AI Audit analysis completed successfully. Incorporate Recommendations below.";
    
    // Clear list and render recommendations
    els.atsFeedbackList.innerHTML = '';
    
    // Render Custom AI Recommendations
    if (parsed.recommendations && parsed.recommendations.length > 0) {
      parsed.recommendations.forEach(rec => {
        const item = document.createElement('div');
        item.className = 'ats-feedback-item missing';
        item.innerHTML = `
          <div>
            <strong>💡 Recommendation: ${escapeHtml(rec.title)}</strong>
            <p style="margin-top: 4px; color: #cbd5e1;">${escapeHtml(rec.description)}</p>
          </div>
        `;
        els.atsFeedbackList.appendChild(item);
      });
    }
    
    // Render keywords lists
    if (parsed.missingKeywords && parsed.missingKeywords.length > 0) {
      const item = document.createElement('div');
      item.className = 'ats-feedback-item missing';
      item.innerHTML = `
        <div>
          <strong>Missing Key Terms (Identified by AI)</strong>
          <p style="margin-top: 4px; color: #cbd5e1; margin-bottom: 8px;">These crucial skills/concepts were found in the job requirements but are missing or weak on your resume:</p>
          <div style="margin-top: 6px;">
            ${parsed.missingKeywords.map(k => `<span class="ats-keyword-pill">${escapeHtml(k)}</span>`).join('')}
          </div>
        </div>
      `;
      els.atsFeedbackList.appendChild(item);
    }
    
    if (parsed.matchingKeywords && parsed.matchingKeywords.length > 0) {
      const item = document.createElement('div');
      item.className = 'ats-feedback-item';
      item.innerHTML = `
        <div>
          <strong>Successfully Matched Keywords (AI verified)</strong>
          <div style="margin-top: 6px;">
            ${parsed.matchingKeywords.map(k => `<span class="ats-keyword-pill" style="border-color:#10b981; color:#10b981;">${escapeHtml(k)}</span>`).join('')}
          </div>
        </div>
      `;
      els.atsFeedbackList.appendChild(item);
    }
    
    showFeedback("AI ATS Deep Audit complete!");
  } catch (e) {
    console.error("AI ATS analysis error", e);
    if (e.message !== "API Key Missing") {
      alert("Error parsing AI response. Please ensure you have a stable network connection and try again.");
    }
  } finally {
    hideAiLoader(loader);
  }
}

/**
 * Display dynamic visual loading layer on a component while API resolves
 */
function showAiLoader(targetElement, title, subtitle) {
  const loader = document.createElement('div');
  loader.className = 'ai-loader-overlay';
  loader.innerHTML = `
    <div class="ai-spinner"></div>
    <div class="ai-loader-text">${escapeHtml(title)}</div>
    <div class="ai-loader-subtext">${escapeHtml(subtitle)}</div>
  `;
  targetElement.style.position = 'relative';
  targetElement.appendChild(loader);
  
  // Blur direct children except the loader overlay itself
  Array.from(targetElement.children).forEach(child => {
    if (child !== loader) {
      child.style.filter = 'blur(4px)';
      child.style.transition = 'filter 0.25s ease-out';
    }
  });
  
  return loader;
}

function hideAiLoader(loaderElement) {
  if (loaderElement && loaderElement.parentNode) {
    const parent = loaderElement.parentNode;
    // Restore blur
    Array.from(parent.children).forEach(child => {
      child.style.filter = 'none';
    });
    parent.removeChild(loaderElement);
  }
}

// Kickstart application on load
window.addEventListener('DOMContentLoaded', init);
