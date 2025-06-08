# Rohan Ahuja - Portfolio Website

This repository contains the code for Rohan Ahuja's professional portfolio website built with Next.js.

## 🚀 Deployment Options for GitHub Pages

### Option 1: Deploy Next.js to GitHub Pages

To deploy this Next.js application to GitHub Pages:

1. **Update next.config.js**:

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // Replace with your repository name
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
\`\`\`

2. **Create GitHub Actions workflow**:

Create a file at `.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build with Next.js
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
\`\`\`

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "GitHub Actions" as the source

4. **Push your code**:
   - The GitHub Action will automatically build and deploy your site

### Option 2: Use README.md as a Simple Portfolio

If you prefer to use just the README.md file as your GitHub profile or simple portfolio:

1. Create a repository named exactly `<your-github-username>/<your-github-username>`
2. Add the following content to the README.md file:

\`\`\`markdown
# Rohan Ahuja

Full-Stack Software Engineer specializing in scalable backend systems and modern web applications

## 📫 Connect With Me
- [LinkedIn](https://www.linkedin.com/in/rohan-ahuja-se)
- [GitHub](https://github.com/Rohan657)

## 💻 Skills

### Backend
Java, Spring Boot, NodeJS, Fastify, Koa, Rest API, Hibernate, JPA, Prisma

### Frontend
React, NextJS, TypeScript

### Databases
MySQL, MSSQL, Azure Cosmos

### Development Tools
Eclipse, Visual Studio Code, JIRA, Confluence, Postman, Azure, GitHub

### DevOps & Tools
Docker, Kubernetes, Azure, Terraform, GitHub Actions

### Version Control
Git, Github

## 🔭 Experience

### Software Engineer, Scandinavian Airlines – Stockholm, Sweden (Oct 2024 – Present)
- Led backend development for 5+ enterprise-grade microservices handling 10M+ requests/month, improving latency by 35% via async processing and Redis caching
- Collaborated seamlessly with cross-functional teams including developers, quality assurance, UX designers and product managers to align software development with user requirements
- Oversaw sprint planning, task assignments, and progress tracking, ensuring timely completion of sprint goals with no spillover
- Directed sprint planning and code reviews for a team of 8 engineers, maintaining 95%+ on-time delivery with <2% production bug rate

### Software Engineer, Tata Consultancy Services – Stockholm, Sweden (Jun 2022 – Sep 2024)
- Designed and implemented scalable backend services for payment authorization, processing 50K+ transactions daily with 99.99% uptime
- Built admin dashboards using Next.js + Prisma + GraphQL, enabling real-time stats monitoring
- Collaborated with product and data teams to A/B test features, contributing to a 12% increase in user conversion
- Automated deployment pipelines using GitHub Actions and Terraform, reducing manual errors and deployment time by 70%

### Junior Software Engineer, Tata Consultancy Services – Gurgaon, India (Jan 2021 – Jun 2022)
- Wrote integration and unit tests (Jest, Postman) achieving 90%+ test coverage
- Contributed to the migration of monolithic services to a microservice architecture, improving deployment flexibility and cutting system downtime by 25%

## 🌟 Featured Projects

### Airline Cabin Upgrade Bidding System
- Designed and implemented a full-stack bidding platform allowing customers to bid for cabin upgrades using credit cards (Adyen API) or loyalty points
- Built secure backend services in Spring Boot, handling bid submissions, rule validations, payments, and email confirmations; supported 10K+ bids/day with 99.9% uptime
- Developed an internal admin portal in React.js with role-based access control for flight-specific base prices, bid rules, activity tracking, and monitoring

## 🎓 Education
Bachelor of Technology in Computer Engineering (Sep 2020)
\`\`\`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
