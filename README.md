# Prajwal Shanthakumari Rangaswamy

This repository contains the source code for my portfolio website built with React. The **main** branch hosts the source code, and the **gh-pages** branch contains the built static files used for deployment on GitHub Pages.

Feel free to clone this repo and use it as a starting point to build your own personal or project portfolio website.

---

## 🌐 Live Site

Check out the live site here: [Link](https://prajwalsr.github.io/portfolio)

---

## 🙌 Want to Use This Template?

You're welcome to **customize it freely** for personal or educational use!

Please note:
- This repository is **read-only** and is intended as a template only.
- **Pull requests and issues are disabled**.

🛑 **Important Note**  
- You are not permitted to reuse any personal content from this website — including text, project descriptions, images, and resume details.
- Only the source code (layout, styling, and structure) is offered under the template license.

---

## 💻 How to Clone and Run Locally

To clone this repository and run the website on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/prajwalsr/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```
### 3. Start the development server

```bash
npm start
```
This will open the app in development mode at http://localhost:3000. The page will reload automatically as you make changes.

---

## 🚀 How to Deploy to GitHub Pages

This project uses the gh-pages npm package for deployment.

### 1. Build the app

```bash
npm run build
```
This creates an optimized production build in the build/ folder.

### 2. Deploy to gh-pages branch

Make sure your package.json includes the following lines:

```bash
"homepage": "https://<your-github-username>.github.io/<your-repo-name>"
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:

```bash
npm run deploy
```
This will push the contents of your /build folder to the gh-pages branch and update the live site.

---

## 🧰 Available Scripts

In the project directory, you can run:

npm start

Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes.

npm test

Launches the test runner in interactive watch mode.
See the section about running tests for more information.

npm run build

Builds the app for production in the build/ folder.
It bundles React in production mode and optimizes performance.
Files are minified and include hashes for caching.

npm run deploy

Builds and deploys the app to GitHub Pages using the gh-pages branch.

---

## 📫 Contact

If you’d like to connect:
* 📧 prajwalsr575@gmail.com
* 🔗 [Linkedin](https://www.linkedin.com/in/prajwalsr1997/)