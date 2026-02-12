# Portfolio

A clean, responsive static portfolio with About, Projects, Experience, and Contact. Projects and experience are loaded from JSON.

## Customize

- Edit `index.html` for your name, tagline, and links.
- Update `data/projects.json` and `data/experience.json` with your content.
- Adjust styles in `assets/css/style.css`.

## Local Preview

Fetching JSON requires serving from a local web server (not `file://`). Options:

```bash
# Python 3
python3 -m http.server 5173
# Then open http://localhost:5173
```

Or use an editor extension like “Live Server”.

## Deploy

### GitHub Pages (from root)
1. Push this folder to a GitHub repository.
2. In repo Settings → Pages, set Source to “Deploy from a branch”, branch `main` (or default), folder `/`.
3. Wait for the page to build; your site will be at the URL GitHub provides.

### Netlify
1. Create a new site from Git in Netlify.
2. Select your repo. Build command: none. Publish directory: `/`.
3. Deploy. Optionally add a custom domain.

### Vercel
1. New Project → Import your GitHub repo.
2. Framework preset: “Other”. Build command: none. Output directory: `/`.
3. Deploy. Optionally add a custom domain.

## Data Schemas

`data/projects.json` (array):

```json
{
  "title": "string",
  "description": "string",
  "tech": ["string", "string"],
  "link": "https://...",   // optional
  "repo": "https://..."    // optional
}
```

`data/experience.json` (array):

```json
{
  "role": "string",
  "company": "string",
  "start": "Mon YYYY",
  "end": "Mon YYYY | Present", // optional
  "summary": "string",
  "highlights": ["string", "string"] // optional
}
```

## Theming

- Theme is toggled via the button in the header. Preference is persisted in `localStorage` as `theme-preference`.

<h1 align="center">👋 Hello, I'm <span style="color:#00BFFF">Abhiram Gorrepati</span></h1>
<h3 align="center">🚀 Full Stack Java Developer | Spring Boot & Angular Specialist | Cloud & Microservices</h3>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=20&pause=1200&center=true&vCenter=true&multiline=true&width=700&height=100&lines=Building+scalable+Full+Stack+solutions;Spring+Boot+%26+Microservices+Expert;Modern+UI+with+Angular+%26+TypeScript;Cloud+Deployment+with+AWS+%26+Docker" alt="Typing SVG" />
</p>

---

## 🙋‍♂️ About Me

- 🎓 **Masters in Computer Science**, California State University, San Bernardino  
- 🏢 **Full Stack Java Developer** at Accenture, USA  
- 🏢 **Former Software Engineer** at IBM, India  
- 💼 **3+ years of experience** designing and deploying scalable web applications and RESTful microservices  
- ⚡ Passionate about **SDLC optimization**, from backend architecture to responsive frontend integration  
- 🎯 Focus: Improving application performance, system scalability, and delivering business-ready solutions  
- 📫 Email: **abhiramg@mymailsbox.net**  
- 💡 Let's connect on [LinkedIn](https://linkedin.com/in/abhiram-g11)

---

## 🛠️ Technical Skills

**Backend:**  
Java (Core, OOPS, Collections, Multithreading), Spring Boot, Spring MVC, Spring Security, Hibernate, JPA  

**Frontend:**  
Angular, TypeScript, JavaScript, HTML5, CSS3, Bootstrap, Responsive UI Design  

**API & Architecture:**  
RESTful APIs, JSON, Microservices Architecture, API Integration  

**Database:**  
MySQL, PostgreSQL, Oracle SQL, JDBC, Data Modeling  

**Cloud & DevOps:**  
AWS (EC2, S3), Docker, Jenkins, Automated Build & Deployment Pipelines  

**Testing:**  
JUnit, Mockito, Selenium, Postman, API Testing  

**Tools & Methods:**  
Git, GitHub, Maven, Gradle, Agile Scrum, Jira, IntelliJ IDEA  

---

## 🚀 Featured Projects

### 🛠️ JobSage.ai (Full Stack Development)
*An AI-powered job application platform designed specifically for international students.*

- **Tech Stack:** Java, Spring Boot, Angular, MySQL, AWS  
- **Key Features:** Generates **ATS-friendly resumes**, calculates **job match rates**, and provides a curated list of tech events  
- **Impact:** Streamlines the job search process by identifying high-probability opportunities based on technical skill alignment  

### 🛒 Microservices E-Commerce Ecosystem
*A scalable, distributed platform for high-volume online transactions.*

- **Tech Stack:** Spring Boot, Spring Security (JWT), Docker, PostgreSQL, Eureka  
- **Key Features:** Role-based access control, centralized gateway, async communication between services  
- **Result:** Handles **40% higher concurrent user loads** without performance degradation  

---

## 💼 Professional Experience

### Full Stack Java Developer | Accenture, USA (2025–Present)
- Developed full-stack applications using **Spring Boot and Angular**, achieving **32% improvement** in responsiveness  
- Built microservices that increased concurrent user load capacity by **40%**  
- Optimized SQL queries and indexing strategies, reducing data retrieval times by **30%**  
- Automated deployment pipelines using **Jenkins and Docker**, cutting manual effort by **45%**

### Software Engineer - Java / Full Stack | IBM, India (2021–2023)
- Automated business operations, reducing manual tasks by **38%**  
- Improved page load performance by **20%** using Angular and JavaScript  
- Accelerated release cycles from bi-weekly to weekly via **CI/CD pipelines**  
- Maintained **99.5%+ system availability** during peak periods  

---

## 🌐 Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abhiram-blue?style=flat&logo=linkedin)](https://linkedin.com/in/abhiram-g11)
