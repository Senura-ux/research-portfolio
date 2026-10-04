# AI EyeDx — AI-Driven Multi-Disease Diagnosis of Diabetes-Related Eye Disorders

Official Academic Research Project Website for **Group R26-IT-043**, Sri Lanka Institute of Information Technology (SLIIT).

## 📌 Research Overview
- **Project Title:** AI-Driven Multi-Disease Diagnosis of Diabetes-Related Eye Disorders
- **Subtitle:** An Explainable Deep Learning Framework for Multi-Disease Diagnosis and Disease-Specific Assessment of Diabetes-Related Eye Disorders
- **Group ID:** R26-IT-043
- **Degree:** B.Sc. (Hons) in Information Technology
- **Institution:** Sri Lanka Institute of Information Technology (SLIIT)
- **Department:** Department of Information Technology

---

## 🎯 Four AI Disease Modules

| Module | Imaging Modality | Model Architecture | Function | Experimental Validation Accuracy* |
|---|---|---|---|:---:|
| **Diabetic Retinopathy** | Fundus | EfficientNetV2-S | Detection & severity classification | **92.13%** |
| **Glaucoma** | Fundus | U-Net + Classification Pipeline | Optic Disc/Cup segmentation, CDR & risk | **96.05%** |
| **Cataract** | Fundus | EfficientNet-B3 | Severity grading & Visibility Degradation (VDS) | **88.19%** |
| **Diabetic Macular Edema (DME)** | Retinal OCT | EfficientNet-B0 | Classification, severity & risk grading | **92.67%** |

*\*Project-reported experimental validation results; not for independent clinical diagnosis.*

---

## 🚀 Key Features

1. **SLIIT Guideline Compliance:**
   - Home, Domain, Milestones, Documents, Presentations, Research Modules, About Us, and Contact Us.
2. **Dynamic Admin Panel (`/admin`):**
   - Password-protected backend dashboard (`ADMIN_PASSWORD`).
   - Allows administrators to paste and update external links (Google Drive, OneDrive, PDFs, Slides, GitHub) for all 14 project documents and presentations without modifying code.
   - Status toggles between *Available* and *Pending* with durable Redis storage in production.
3. **Full-Stack Next.js (App Router):**
   - Built-in Next.js REST API routes (`/api/links` and `/api/contact`).
   - Serverless and optimized for deployment on **Vercel**.
4. **Modern Medical-AI Design System:**
   - Clean professional aesthetic tailored for healthcare and academic evaluations.
   - Fully responsive on desktop, tablet, and mobile devices.
   - Accessible SVG icons and animations.

---

## 🛠️ Tech Stack
- **Frontend & Backend:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS with custom CSS variables & theme design tokens
- **Data & APIs:** Next.js Route Handlers, bundled JSON defaults, and optional Upstash Redis persistence
- **Hosting:** Vercel

---

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm ci
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

Copy `.env.example` to `.env.local` and replace its example values before testing admin or contact-form features.

---

## 🌐 Deploying to Vercel

1. Push this project repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel](https://vercel.com) and import the repository.
   - The repository-level `vercel.json` builds the nested `ai-eyedx` application automatically.
3. In Project Settings > **Environment Variables**, add:
   - `ADMIN_PASSWORD`: A long, unique admin password (admin access is disabled when unset)
   - `RESEND_API_KEY`: Resend API key used by the contact form
   - `CONTACT_FROM_EMAIL`: Sender on a domain verified in Resend
   - `CONTACT_TO_EMAIL`: Research-team inbox that receives enquiries
   - `KV_REST_API_URL` and `KV_REST_API_TOKEN`: Upstash Redis REST credentials for durable admin edits
4. Connect an Upstash Redis database from the Vercel Marketplace if the admin panel will be used in production.
5. Click **Deploy**.

---

## 🔑 Admin Access & Uploading File Links

1. Navigate to `/admin` (or click *Admin — Manage Links* on the Documents or Presentations page).
2. Enter the password configured in `ADMIN_PASSWORD`.
3. Paste public sharing links for documents (e.g. Google Drive, Dropbox, institutional repository).
4. Switch status to **Available** and click **Save**.
5. The Documents and Presentations pages will immediately reflect the new links!
