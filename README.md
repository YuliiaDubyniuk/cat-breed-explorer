# Parcel Project Template (Cat Breads)

Project built using starter **Parcel** template .

---

## Features

- ⚙️ **Parcel** for fast bundling  
- SCSS processing  
- Live development server with hot reload (`npm start`)  
- Image optimization in production builds  
- GitHub Actions workflow for deployment upon `push` to `main`  
- Automated deployment to GitHub Pages (`gh-pages` branch)  

---

## Prerequisites

- Node.js (LTS version recommended)  
- A GitHub repository git clone https://github.com/YuliiaDubyniuk/cat_breads_with_parcel.git

---

## Setup

1. Clone this repo.  
2. Rename the root folder to your project name.  
3. Update `package.json`:  
   - Edit the `homepage` property:
     ```json
     "homepage": "https://<your_username>.github.io/<your_repo_name>/"
     ```
   - Update build script:
     ```json
     "scripts": {
       "build": "parcel build src/*.html --public-url /<your_repo_name>/"
     }
     ```
4. Install dependencies:
   ```bash
   npm install

