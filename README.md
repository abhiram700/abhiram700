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
<h3 align="center">🚀 DevOps & Cloud Engineer | AWS Certified | Infrastructure as Code Enthusiast</h3>

<p align="center">
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=20&pause=1200&center=true&vCenter=true&multiline=true&width=700&height=100&lines=Cloud+solutions+with+AWS;IaC+automation+with+Terraform+and+Jenkins;Driven+by+DevOps+best+practices+%F0%9F%9A%80" alt="Typing SVG" />
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=abhiram700&label=Profile%20views&color=0e75b6&style=flat" alt="Profile Views" />
</p>

<p align="center">
  <a href="https://github.com/ryo-ma/github-profile-trophy">
    <img src="https://github-profile-trophy.vercel.app/?username=abhiram700&theme=algolia&no-frame=true&row=2&column=3" />
  </a>
</p>

---

### 🙋‍♂️ About Me

- 🎓 Master’s in Computer Science @ California State University, San Bernardino  
- 📬 Email: **gorrepatiabhiram6@gmail.com**  
- 🧠 I love turning complex systems into automated, scalable, and resilient infrastructure  
- 🧰 Skilled in cloud, DevOps, containerization, IaC, CI/CD, and observability stacks  
- 📝 Sharing DevOps insights on [LinkedIn](https://linkedin.com/in/abhiram-gorrepati)

---

### 🛠️ Complete Tech Stack for Cloud & DevOps Engineers

**🖥️ Operating Systems:**  
![Linux](https://img.shields.io/badge/-Linux-05122A?style=flat&logo=linux) ![Ubuntu](https://img.shields.io/badge/-Ubuntu-05122A?style=flat&logo=ubuntu) ![Windows](https://img.shields.io/badge/-Windows-05122A?style=flat&logo=windows)

**💻 Programming & Scripting:**  
![Python](https://img.shields.io/badge/-Python-05122A?style=flat&logo=python) ![Java](https://img.shields.io/badge/-Java-05122A?style=flat&logo=java) ![Go](https://img.shields.io/badge/-Go-05122A?style=flat&logo=go)  
![Bash](https://img.shields.io/badge/-Bash-05122A?style=flat&logo=gnubash) ![YAML](https://img.shields.io/badge/-YAML-05122A?style=flat&logo=yaml)

**☁️ Cloud Platforms & Services:**  
![AWS](https://img.shields.io/badge/-AWS-232F3E?style=flat&logo=amazonaws)  
Core: EC2, S3, RDS, VPC, IAM, CloudWatch, Route 53, EBS, SQS, SNS  
Serverless: Lambda, API Gateway, Fargate, ECS, EKS  
DevOps: CodePipeline, CodeDeploy, CodeCommit, CloudFormation  
DB: DynamoDB, Aurora, ElastiCache  
Security: KMS, Cognito, Secrets Manager  
Monitoring: CloudTrail, Athena, X-Ray

**⚙️ DevOps & Automation:**  
Terraform, Ansible, Jenkins, GitHub Actions, GitLab CI, CircleCI

**📦 Containers & Orchestration:**  
Docker, Podman, Kubernetes, Helm

**📈 Monitoring & Observability:**  
Prometheus, Grafana, ELK Stack, Splunk, AWS CloudWatch

**🔐 Security & Identity:**  
IAM, KMS, Secrets Manager

**🛢️ Databases:**  
MySQL, PostgreSQL, DynamoDB

---

### 🏆 Certifications

- 🥇 AWS Certified Solutions Architect – Associate  
- 🥇 AWS Certified Cloud Practitioner  
- 🥇 AWS Cloud Virtual Internship – EduSkills  
- 🥇 Microsoft Azure Fundamentals  
- 🥇 Python Programming – Kaggle

---

### 🚀 Featured Projects

#### 📡 Real-Time Data Processing Pipeline on AWS
- Built a real-time Kinesis → Lambda → DynamoDB pipeline for instant insights and 40% lower latency  
- Archived raw logs in S3; monitored via CloudWatch; alerts via SNS

#### 🌐 Multi-Tier Web Application Deployment
- 3-tier web app on EC2, RDS, and S3; auto-scaled with ALB  
- CloudFormation powered the entire stack with 35% improved consistency

#### 🔁 CI/CD Pipeline with Jenkins & Docker
- Jenkins + GitHub + Docker + AWS ECR + EKS enabled robust, end-to-end delivery pipelines  
- Reduced release cycle time by 60% through automated builds, tests, and deployments  
- Integrated Slack notifications and auto-rollback mechanisms to handle deployment failures

#### ⚙️ Infrastructure Automation with Terraform and Kubernetes
- Provisioned cloud infrastructure using Terraform including EC2, EKS, VPCs, and IAM roles  
- Deployed Kubernetes microservices using Helm charts with standardized configurations  
- Enhanced monitoring with Prometheus and Grafana; improved infrastructure consistency by 45%

#### 📱 Mobile App Development – Cat Math
- Hosted backend on AWS EC2 and S3, optimized to handle 10,000+ daily users  
- Integrated CloudWatch with SNS for real-time monitoring and alerting  
- Increased engagement by 25% with improved responsiveness and reliability

#### 🔄 Blue-Green Deployment Strategy on AWS
- Implemented blue-green deployment using EC2, ALB, and CloudWatch to eliminate downtime during updates  
- Automated routing using ALB Target Groups and health checks, enhancing availability by 30%  
- Streamlined releases with reduced risk, ensuring seamless production transitions

---

### 📈 GitHub Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=abhiram700&show_icons=true&theme=tokyonight" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=abhiram700&layout=compact&theme=tokyonight" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=abhiram700&theme=tokyonight" />
</p>

---

### 🌐 Connect with Me

<a href="https://linkedin.com/in/abhiram-gorrepati" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-Abhiram-blue?style=flat&logo=linkedin" />
</a>
<a href="https://www.youtube.com/c/awsphere" target="_blank">
  <img src="https://img.shields.io/badge/Youtube-AWSphere-red?style=flat&logo=youtube" />
</a>

---

<img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="Cloud Engineering Animation" width="100%" />
