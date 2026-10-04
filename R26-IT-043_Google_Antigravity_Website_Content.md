# AI-Driven Multi-Disease Diagnosis of Diabetes-Related Eye Disorders
## Website Content & Google Antigravity Build Specification

> **Purpose:** This Markdown file is a complete content and implementation brief for generating the official research-project website in Google Antigravity. Use it as the primary website content/specification document and replace only the clearly marked placeholders after the group confirms final links, emails, photos, presentation dates, and document URLs.

---

# 1. PROJECT IDENTITY

**Project Title:** AI-Driven Multi-Disease Diagnosis of Diabetes-Related Eye Disorders

**Recommended Website Subtitle:**  
### An Explainable Deep Learning Framework for Multi-Disease Diagnosis and Disease-Specific Assessment of Diabetes-Related Eye Disorders

**Group ID:** R26-IT-043

**Degree:** B.Sc. (Hons) in Information Technology

**Institution:** Sri Lanka Institute of Information Technology (SLIIT)

**Department:** Department of Information Technology

**Research Area:** Artificial Intelligence, Deep Learning, Medical Image Analysis, Explainable AI, Ophthalmology, Software Systems & Technologies

**Core Diseases:**
1. Diabetic Retinopathy (DR)
2. Glaucoma
3. Cataract
4. Diabetic Macular Edema (DME)

**Image Modalities:**
- Retinal Fundus Images — DR, Glaucoma, Cataract
- Optical Coherence Tomography (OCT) Images — DME

---

# 2. WEBSITE PURPOSE

The website is the official academic research-project website for Group R26-IT-043.

It must:
- Explain the research problem clearly.
- Present the literature survey and research gap.
- Explain the proposed multi-disease AI framework.
- Present the four disease-specific research functions.
- Explain datasets, preprocessing, AI models, evaluation and explainability.
- Present the system architecture and workflow.
- Show project milestones and assessments.
- Provide links to project documents and presentation slides.
- Introduce all four research members and their individual contributions.
- Provide supervisor and contact information.
- Present the research prototype professionally without claiming that it replaces a qualified ophthalmologist.

The website should be attractive enough for an academic research demonstration while remaining professional and easy to navigate.

---

# 3. REQUIRED WEBSITE NAVIGATION

Follow the SLIIT website guideline structure:

1. Home
2. Domain
3. Milestones
4. Documents
5. Presentations
6. About Us
7. Contact Us

Recommended additional navigation item:

8. System / Research Modules

The main navigation must remain consistent on every page.

Recommended header:
- Project logo/icon
- Project short name: **AI EyeDx**
- Navigation menu
- Responsive mobile menu
- Primary CTA: **Explore Research**

Recommended footer:
- Project title
- Group ID
- SLIIT
- Quick links
- Research disclaimer
- Copyright
- Contact email placeholder

---

# 4. HOME PAGE

## Hero Section

### AI-Driven Multi-Disease Diagnosis of Diabetes-Related Eye Disorders

**An explainable AI framework for early screening and disease-specific assessment of diabetes-related eye disorders using retinal fundus and OCT images.**

Buttons:
- **Explore Research**
- **View Research Modules**
- **Meet the Team**

Hero visual:
- A clean retina/fundus image or abstract retinal network.
- Do NOT use graphic medical imagery that looks frightening.
- Do NOT use a fake doctor/patient image as if the system is already clinically deployed.

## Short Introduction

Diabetes-related eye diseases are a major cause of preventable visual impairment and blindness. Diabetic Retinopathy, Diabetic Macular Edema, glaucoma and cataract may occur together, making comprehensive screening challenging.

Our research proposes an integrated AI-driven platform that combines disease-specific deep learning models with explainable AI, severity/risk assessment and image-quality analysis. The system is designed to support ophthalmologists and healthcare professionals by providing interpretable screening information from retinal images.

## Key Research Highlights

Display as four attractive cards:

### 01 — Multi-Disease Diagnosis
Integrated analysis of:
- Diabetic Retinopathy
- Glaucoma
- Cataract
- Diabetic Macular Edema

### 02 — Multi-Modal Imaging
- Fundus images
- OCT images

### 03 — Explainable AI
- Grad-CAM heatmaps
- Segmentation overlays
- Clinically meaningful visual indicators

### 04 — Risk & Severity Assessment
- Disease classification
- Severity prediction
- Risk/confidence scores
- Cataract visibility degradation

## Research Statistics / Quick Facts

Use animated counters or cards:
- **4** disease modules
- **2** imaging modalities
- **4** dedicated AI functions
- **1** integrated diagnostic framework
- **XAI** explainability layer
- **Group R26-IT-043**

Do not invent patient counts or clinical deployment statistics.

---

# 5. RESEARCH PROBLEM

## Problem Statement

Existing AI-based ophthalmic diagnostic systems often focus on individual diseases. A diabetic patient, however, may experience multiple eye disorders simultaneously. Separate disease-specific systems can produce fragmented results and require clinicians to use multiple tools.

A second challenge is explainability. Many deep learning models behave as black boxes and provide a disease label without showing which retinal structures influenced the prediction.

A third challenge is that conventional systems often provide only disease presence/absence and do not provide sufficient severity, risk or image-quality information.

For cataract in particular, lens opacity can reduce the visibility of retinal structures such as vessels and the optic disc. This may affect the reliability of downstream retinal disease analysis.

The proposed research therefore investigates an integrated, explainable and multi-disease AI framework capable of analyzing diabetes-related eye disorders while providing disease-specific assessment information.

---

# 6. RESEARCH GAP

The major gaps identified from the literature are:

### Gap 1 — Single-Disease Focus
Many existing systems are designed for one disease only.

### Gap 2 — Fragmented Diagnostic Workflow
Separate models may be required for DR, glaucoma, cataract and DME.

### Gap 3 — Limited Multi-Modal Analysis
Fundus and OCT analysis are often developed independently.

### Gap 4 — Limited Explainability
Many deep learning systems provide predictions without meaningful visual explanations.

### Gap 5 — Limited Risk and Severity Information
Many systems return only a binary label rather than severity or risk.

### Gap 6 — Lack of Visibility-Aware Cataract Assessment
Cataract studies commonly focus on classification but do not explicitly quantify how lens opacity affects retinal visibility.

### Gap 7 — Lack of Structural Glaucoma Biomarkers
Many glaucoma models do not explicitly expose clinically meaningful features such as Cup-to-Disc Ratio.

---

# 7. RESEARCH OBJECTIVES

## Main Objective

To design and develop an explainable AI-driven multi-disease diagnostic framework capable of detecting diabetes-related eye disorders while providing disease-specific severity, risk, structural and visual-explanation information to support early screening and clinical decision-making.

## Specific Objectives

1. Develop deep learning models for diabetes-related eye disease detection.
2. Develop disease-specific severity/risk assessment mechanisms.
3. Integrate fundus and OCT image analysis into one platform.
4. Incorporate Explainable AI techniques such as Grad-CAM and segmentation visualization.
5. Develop a web-based interface for image upload and result visualization.
6. Evaluate model performance using appropriate quantitative metrics.
7. Provide interpretable outputs that can assist healthcare professionals.
8. Design a modular architecture that can support future disease modules.

---

# 8. RESEARCH DOMAIN

## Artificial Intelligence and Deep Learning

The research applies:
- Artificial Intelligence
- Machine Learning
- Deep Learning
- Convolutional Neural Networks
- Transfer Learning
- Image Processing
- Medical Image Analysis
- Explainable AI

## Ophthalmic Image Analysis

The system analyzes:
- Retinal fundus photographs
- Optical Coherence Tomography scans

## Software Systems

The project also involves:
- Web application development
- REST APIs
- Modular backend services
- Database integration
- Model deployment
- Visualization
- Explainability interfaces

---

# 9. PROPOSED SYSTEM

## Overall Concept

The proposed system is a modular AI-based screening platform.

### Input

Users upload an appropriate retinal image.

### Preprocessing

The image is:
- Validated
- Resized
- Normalized
- Enhanced
- Denoised where required
- Augmented during training

### Disease-Specific AI Layer

The image is routed to the appropriate disease model:

- DR module
- Glaucoma module
- Cataract module
- DME module

### Assessment Layer

Depending on the disease, the system generates:
- Disease classification
- Severity
- Risk
- Confidence
- Structural biomarkers
- Visibility degradation information

### Explainability Layer

The system generates:
- Grad-CAM heatmaps
- Segmentation overlays
- Important-region visualization

### Final Output

The web interface presents an understandable diagnostic-support result.

---

# 10. SYSTEM ARCHITECTURE

## High-Level Architecture

Use the following flow in the website:

**User / Healthcare Professional**
↓
**React Web Interface**
↓
**Image Upload & Validation**
↓
**Preprocessing Layer**
↓
**Disease Routing / Disease-Specific APIs**
↓
**AI Model Layer**
↓
**Assessment Layer**
↓
**Explainability Layer**
↓
**Result Fusion / Report Layer**
↓
**Database / History**
↓
**Clinical Decision-Support Dashboard**

## Current Web Implementation

The current implementation uses a React-based frontend with disease-specific backend/API services.

Recommended architecture representation:

- React.js frontend
- Disease-specific Flask API services
- Python / PyTorch AI models
- OpenCV image processing
- MongoDB for relevant result/metadata storage
- Grad-CAM explainability
- Model inference services

Where proposal documents mention FastAPI or MERN as an earlier implementation direction, the website should describe those as proposal/technology alternatives rather than incorrectly claiming they are the final implementation.

---

# 11. DISEASE MODULES

## MODULE 1 — DIABETIC RETINOPATHY

### Purpose

Detect and assess diabetic retinopathy from retinal fundus images.

### Input

Retinal fundus image.

### Current Model

**EfficientNetV2-S**

### Main Tasks

- DR classification
- Severity assessment
- Confidence/probability
- Explainable visualization

### Key Retinal Signs

The system may learn patterns associated with:
- Microaneurysms
- Hemorrhages
- Exudates
- Cotton-wool spots
- Abnormal retinal vessels
- Other DR-related lesions

### Output

Display:
- DR prediction
- Severity level
- Confidence
- Grad-CAM heatmap
- Risk indication where available

### Current Reported Validation Accuracy

**92.13%**

> This is the current project-reported validation result and should be labeled as an experimental/project result, not clinical accuracy.

---

# 12. MODULE 2 — GLAUCOMA

## Explainable Glaucoma Detection and Risk Assessment

### Purpose

Detect glaucoma and assess structural optic-nerve-related indicators from retinal fundus images.

### Input

Retinal fundus image.

### Proposed / Current Technical Approach

- Image preprocessing
- Optic disc segmentation
- Optic cup segmentation
- Structural biomarker extraction
- Severity classification
- Risk estimation
- Explainable visualization

### Segmentation Model

**U-Net**

### Key Biomarker

**Cup-to-Disc Ratio (CDR)**

Formula:

`CDR = Diameter of Optic Cup / Diameter of Optic Disc`

### Additional Indicators

- Neuroretinal rim characteristics
- ISNT rule analysis
- Optic nerve structural patterns

### Severity Categories

- Normal
- Early Glaucoma
- Advanced Glaucoma

### Explainability

- Optic disc/cup segmentation masks
- Segmentation overlays
- Highlighted regions
- Attention/heatmap visualization

### Current Reported Validation Accuracy

**96.05%**

---

# 13. MODULE 3 — CATARACT

## Explainable Cataract Severity and Visibility Degradation Assessment

### Purpose

Go beyond simple cataract classification by estimating how cataract-related opacity affects the visibility of retinal structures.

### Input

Retinal fundus image.

### Dataset

**Cataract Grading Dataset — Kaggle**

Four categories:
- No Cataract
- Mild Cataract
- Moderate Cataract
- Severe Cataract

### Current Model

**EfficientNet-B3**  
(Proposal documentation also describes ResNet50 as the initial/proposed backbone. The website should present EfficientNet-B3 as the current implementation and ResNet50 as the earlier proposal approach if historical methodology is shown.)

### Main Tasks

1. Cataract severity classification
2. Visibility degradation assessment
3. Explainable AI
4. Risk/interpretation support

### Visibility Indicators

- Vessel visibility
- Image sharpness
- Global contrast
- Entropy / image information

### Current VDS Model

The current visibility degradation model uses a weighted combination of image-quality features.

**VDS = 0.4426 × Entropy + 0.2955 × Contrast + 0.2287 × Vessel Visibility + 0.0332 × Sharpness**

Current reported coefficients:
- Entropy = **0.4426**
- Contrast = **0.2955**
- Vessel Visibility = **0.2287**
- Sharpness = **0.0332**

### Explainability

Use:
- Grad-CAM heatmaps
- Retinal-region highlighting
- Visibility indicators
- Severity prediction

### Current Reported Validation Accuracy

**88.19%**

### Important Website Message

The cataract module does not only answer “Does the image contain cataract?”

It also investigates:

**“How much does cataract-related degradation affect the visibility and interpretability of the retinal image?”**

---

# 14. MODULE 4 — DIABETIC MACULAR EDEMA

## DME Detection, Severity and Risk Assessment

### Purpose

Detect DME using OCT retinal images and provide disease-specific assessment.

### Input

**Optical Coherence Tomography (OCT)** image.

### Dataset

Retinal OCT Images dataset with categories including:
- CNV
- DME
- DRUSEN
- NORMAL

### Current Model

**EfficientNet-B0**

### Framework

**PyTorch**

### Preprocessing

- Resize to model input dimensions
- Normalization
- Noise/artifact handling
- Data augmentation
- Rotation
- Flipping
- Brightness adjustment

### Main Tasks

1. Disease classification
2. DME detection
3. Severity classification
4. Risk-level prediction
5. Explainable visualization

### Severity

Use the project's implemented severity categories where available:
- Low
- Medium
- High

### Explainability

**Grad-CAM** heatmaps identify retinal regions influencing the prediction.

### Current Reported Validation Accuracy

**92.67%**

---

# 15. COMPARISON OF THE FOUR MODULES

| Module | Input | Main Model | Main Function | Current Reported Validation Accuracy |
|---|---|---|---|---:|
| Diabetic Retinopathy | Fundus | EfficientNetV2-S | Detection / severity | 92.13% |
| Glaucoma | Fundus | U-Net + classification/assessment | Segmentation / biomarker / risk | 96.05% |
| Cataract | Fundus | EfficientNet-B3 | Severity + visibility degradation | 88.19% |
| DME | OCT | EfficientNet-B0 | Detection / severity / risk | 92.67% |

> These values are project-reported experimental validation results and must not be presented as clinically validated performance.

---

# 16. EXPLAINABLE AI

## Why Explainability?

Medical AI systems should not simply output a label. Healthcare professionals need to understand which image regions contributed to a prediction.

## Grad-CAM

Grad-CAM is used to generate heatmaps showing image regions that influence a model's prediction.

Website visualization:
- Original image
- Heatmap
- Overlay
- Prediction
- Confidence
- Interpretation

## Glaucoma Explainability

Show:
- Optic disc mask
- Optic cup mask
- CDR
- Relevant retinal region
- Risk score

## Cataract Explainability

Show:
- Grad-CAM heatmap
- Visibility indicators
- Severity
- VDS

---

# 17. OUT-OF-DISTRIBUTION / OOD DETECTION

The overall research framework also considers the problem of images that may not belong to the expected data distribution.

## Proposed Approach

**Mahalanobis Distance-based OOD Detection**

Purpose:
- Detect unusual/unfamiliar input images.
- Reduce the chance of confidently processing unsuitable images.
- Improve reliability of model inference.

Website section title:

### “When the Model Should Say: I’m Not Sure”

Explain that OOD detection is a safety/reliability research component, not a guarantee of clinical safety.

---

# 18. DATA PREPROCESSING

The website should visualize the preprocessing pipeline:

**Raw Image**
→ Resize
→ Normalize
→ Contrast Enhancement
→ Noise Reduction
→ Quality Check
→ Augmentation during Training
→ Model Input

## Typical Techniques

- Resizing
- Pixel normalization
- Contrast enhancement
- Noise reduction
- Rotation
- Horizontal/vertical flipping
- Brightness variation
- Contrast variation

The exact preprocessing may differ between disease modules.

---

# 19. DATASETS

## Cataract

Cataract Grading dataset from Kaggle.

Classes:
- No Cataract
- Mild
- Moderate
- Severe

## DME / OCT

Retinal OCT dataset.

Classes include:
- CNV
- DME
- DRUSEN
- NORMAL

## Glaucoma

The proposal identifies public datasets such as:
- REFUGE
- RIM-ONE
- ODIR
- Kaggle glaucoma datasets

Use the final selected dataset name on the live website once the team confirms the exact dataset used for final experiments.

## DR

Use the final dataset actually used for the current DR model. Do not invent a dataset name on the website if it is not recorded in the final experiment log.

---

# 20. VALIDATION & EVALUATION

The models are evaluated using standard machine-learning metrics.

## Main Metrics

- Accuracy
- Precision
- Recall
- F1-score
- Confusion Matrix

Where appropriate:
- ROC-AUC
- Sensitivity
- Specificity
- Confidence / probability
- CDR correlation or structural accuracy
- Visibility-score correlation

## Explainability Evaluation

Grad-CAM and segmentation outputs should be qualitatively checked to determine whether highlighted regions correspond to meaningful retinal structures.

---

# 21. USERS & STAKEHOLDERS

## Primary Users

### Ophthalmologists / Eye Specialists
Use the system to review AI-generated screening results and explanations.

### Medical Technicians / Clinical Staff
Upload images and initiate analysis during screening.

## Secondary / Indirect Users

### Patients
Benefit indirectly through earlier screening and referral.

### General Physicians / Diabetic Clinics
Can use the platform as a preliminary screening support tool.

## Institutional Stakeholders

- Hospitals
- Eye-care centers
- Diagnostic centers
- Telemedicine providers
- Researchers
- AI developers
- Healthcare administrators

---

# 22. FUNCTIONAL REQUIREMENTS

The website should explain that the research system is designed to support:

1. Image upload
2. Image validation
3. Image preprocessing
4. Disease-specific inference
5. Disease classification
6. Severity assessment
7. Risk/confidence generation
8. Structural biomarker extraction
9. Visibility degradation assessment
10. Explainable visualization
11. Result visualization
12. Analysis history
13. Error handling
14. Integration of multiple disease modules

---

# 23. NON-FUNCTIONAL REQUIREMENTS

### Performance
Fast image processing and result generation.

### Accuracy
Reliable experimental model performance.

### Security
Secure handling of uploaded images and result data.

### Usability
Simple, intuitive interface for healthcare users.

### Reliability
Stable and consistent operation.

### Scalability
Ability to add more disease modules and process larger numbers of images.

### Maintainability
Modular design allowing model and software updates.

### Compatibility
Modern browser support and standard image formats.

---

# 24. WEB APPLICATION FEATURES

The research website itself should contain:

## Research Explorer
Interactive overview of the four modules.

## Architecture Viewer
Interactive/animated system architecture.

## Disease Cards
Four cards linking to:
- DR
- Glaucoma
- Cataract
- DME

## Methodology Timeline
Preprocessing → Model → Assessment → XAI → Output.

## Results Dashboard
Display project-reported model performance.

## Team Section
Four member profiles.

## Milestone Timeline
Proposal → PP1 → PP2 → Final → Viva → Publication.

## Document Library
Cards with links.

## Presentation Gallery
Cards with links.

## Contact Form
General academic enquiry form.

---

# 25. ABOUT US — FOUR MEMBER TEAM

## Member 01

### Binuri Perera
**Student ID:** IT22151292

**Research Function:** Explainable Cataract Severity and Visibility Degradation Assessment

Responsibilities:
- Cataract dataset preparation
- Fundus image preprocessing
- Cataract severity model
- Visibility degradation assessment
- VDS development
- Grad-CAM explainability
- Cataract API/model integration
- Research documentation for the cataract component

Current research contribution:
- Cataract severity classification
- Visibility-aware analysis
- Explainable cataract prediction
- Integration with the overall framework

---

## Member 02

### Sanduni D. Kahawevithana
**Student ID:** IT22191342

**Research Function:** Diabetic Macular Edema Detection, Severity and Risk Assessment

Responsibilities:
- OCT dataset preparation
- OCT preprocessing
- EfficientNet-based DME analysis
- DME classification
- Severity assessment
- Risk-level prediction
- Grad-CAM explainability
- DME API/model integration
- Research documentation for the DME component

Current research contribution:
- OCT-based DME analysis
- EfficientNet-B0 model
- DME severity/risk output
- Explainable OCT prediction

---

## Member 03

### Chavindee M.A.P.
**Student ID:** IT22127778

**Research Function:** Explainable Glaucoma Detection and Risk Assessment

Responsibilities:
- Glaucoma dataset preparation
- Fundus image preprocessing
- Optic disc segmentation
- Optic cup segmentation
- U-Net implementation
- CDR calculation
- Glaucoma severity classification
- Risk/confidence estimation
- Explainable segmentation visualization
- Glaucoma API/model integration

Current research contribution:
- Structural glaucoma analysis
- CDR-based assessment
- U-Net segmentation
- Explainable glaucoma risk assessment

---

## Member 04

### Oshan Wijekoon
**Student ID:** [CONFIRM ID]

**Research Function:** Diabetic Retinopathy Detection and Severity Assessment + Overall System Integration

Responsibilities:
- DR dataset preparation
- Fundus image preprocessing
- DR model development
- EfficientNetV2-S implementation
- DR severity classification
- Model evaluation
- Grad-CAM integration
- DR API/model integration
- Integration of disease-specific modules
- Overall system coordination/testing

Current research contribution:
- DR classification
- EfficientNetV2-S model
- Explainable DR analysis
- Multi-module system integration

> **Important:** Confirm Oshan Wijekoon's exact student ID and final assigned responsibility before publishing the About Us page.

---

# 26. TEAM ROLE SUMMARY

| Member | Student ID | Main Research Function |
|---|---|---|
| Binuri Perera | IT22151292 | Cataract Severity + Visibility Degradation |
| Sanduni D. Kahawevithana | IT22191342 | DME Detection + Severity + Risk |
| Chavindee M.A.P. | IT22127778 | Glaucoma Detection + Risk Assessment |
| Oshan Wijekoon | Confirm | DR Detection + Severity + System Integration |

Each profile should have:
- Professional photograph
- Full name
- Student ID
- Research function
- Short bio
- Responsibilities
- Technical skills
- Email placeholder
- Optional LinkedIn/GitHub links

Do not publish personal phone numbers unless the student explicitly approves.

---

# 27. SUPERVISION

## Research Supervisor

**Dr. Sanvitha Kasthuriarachchi**

## Co-Supervisor

**Ms. Chathurya Prabhavi Kumarapperuma**

## External / Domain Supervisor

**Dr. Sarath Deraniyagala**

Use a clean supervisor section with professional academic styling.

---

# 28. MILESTONES PAGE

Follow the university website guideline and provide a dropdown/timeline for assessments.

## Recommended Milestones

### Project Initiation
- Group registration
- Topic selection
- Feasibility study
- Research gap identification
- Requirement gathering

### Proposal Stage
- Initial supervisor discussion
- Topic assessment
- Proposal development
- Project Charter
- Proposal report
- Proposal presentation

### Implementation Stage
- Dataset collection
- Data preprocessing
- Disease-specific model development
- Component implementation
- Backend development
- Frontend development
- System integration

### Progress Presentation 1
- Initial implementation
- Baseline results
- Early system demonstration

### Model Development
- Model training
- Hyperparameter tuning
- Explainability
- Risk/severity assessment
- OOD analysis
- API integration

### Progress Presentation 2
- Integrated system demonstration
- Experimental results
- Validation

### Final Stage
- System testing
- Optimization
- Final validation
- Final report
- Research paper
- Final presentation
- Viva

### Publication
- Research paper submission/publication

For each milestone display:
- Name
- Description
- Date
- Status
- Marks allocated
- Document/slide link

Use placeholders where official assessment dates or marks are not yet confirmed.

---

# 29. DOCUMENTS PAGE

The guideline requires the Documents section to list produced/pending documents using links.

Create cards for:

1. Project Charter
2. Proposal Document — Main
3. Individual Proposal — Cataract
4. Individual Proposal — DME
5. Individual Proposal — Glaucoma
6. Individual Proposal — DR
7. Progress Presentation 1
8. Progress Presentation 2
9. Final Report — Main
10. Final Reports — Individual Components
11. Research Paper
12. Checklists / Supporting Documents
13. System User Guide
14. Dataset/Experiment Documentation

Each card should have:
- Document title
- Short description
- Status: Available / Pending
- View/Download button
- Actual URL placeholder

Do not hard-code fake links.

---

# 30. PRESENTATIONS PAGE

Create a visual presentation gallery.

Cards:
- Proposal Presentation
- Progress Presentation 1
- Progress Presentation 2
- Final Presentation
- Viva Presentation / Materials
- Research Paper Presentation

Each card:
- Presentation title
- Date
- Thumbnail
- Short description
- View Slides button

---

# 31. CONTACT PAGE

## General Contact

**Project:** R26-IT-043  
**Institution:** Sri Lanka Institute of Information Technology  
**Department:** Department of Information Technology

### Contact Email

`[ADD GROUP EMAIL]`

### Academic Enquiries

Use a simple form:
- Name
- Email
- Subject
- Message
- Submit

Do not make the form claim to provide medical advice.

---

# 32. MEDICAL DISCLAIMER

Display this clearly in the footer and relevant result sections:

> **Research Prototype Disclaimer:** This system is developed as an academic research and screening-support prototype. AI-generated results are not a medical diagnosis and must not replace examination, diagnosis or treatment by a qualified ophthalmologist or other healthcare professional.

This disclaimer is essential because the website presents medical AI outputs.

---

# 33. COMMERCIALIZATION / FUTURE POTENTIAL

The research has potential applications in:

- Hospital screening
- Eye clinics
- Diabetic screening programs
- Tele-ophthalmology
- Remote healthcare
- Clinical decision-support systems
- Large-scale screening programs

Possible future business models:
- SaaS subscription
- Hospital licensing
- Pay-per-analysis
- Enterprise healthcare integration

The website must clearly distinguish **research potential** from actual commercial deployment.

---

# 34. SOCIAL IMPACT

The project supports the goal of improving early detection and access to eye-care screening.

### SDG Alignment

**UN Sustainable Development Goal 3 — Good Health and Well-being**

Potential impact:
- Earlier screening
- Reduced screening workload
- Support for underserved areas
- Better access to AI-assisted screening
- Support for ophthalmologists
- Research contribution to explainable medical AI

---

# 35. FUTURE WORK

Include a dedicated section:

### Future Improvements

1. Add more diabetes-related eye diseases.
2. Expand datasets.
3. Improve model generalization.
4. Validate with larger external datasets.
5. Conduct clinical validation with ophthalmologists.
6. Improve OOD detection.
7. Improve explainability beyond heatmaps.
8. Add multilingual support.
9. Integrate electronic health record systems where ethically and technically appropriate.
10. Improve cloud deployment and scalability.
11. Develop mobile/telemedicine versions.
12. Investigate multimodal fusion between fundus and OCT.
13. Perform prospective clinical evaluation.
14. Improve severity and risk calibration.

---

# 36. RESEARCH METHODOLOGY PAGE

Create an attractive vertical workflow:

### Phase 1 — Problem Identification
Identify challenges in diabetes-related eye disease screening.

### Phase 2 — Literature Review
Study AI, CNNs, transfer learning, XAI, fundus/OCT analysis and existing systems.

### Phase 3 — Research Gap
Identify limitations in single-disease systems, explainability, risk assessment and visibility-aware analysis.

### Phase 4 — Dataset Preparation
Collect, clean, preprocess and split disease-specific datasets.

### Phase 5 — Model Development
Train disease-specific AI models.

### Phase 6 — Assessment
Generate severity, risk, biomarkers and VDS where applicable.

### Phase 7 — Explainability
Generate Grad-CAM and segmentation visualizations.

### Phase 8 — OOD / Reliability
Investigate unfamiliar input detection using Mahalanobis distance.

### Phase 9 — Web Integration
Connect models through APIs and integrate them into the React frontend.

### Phase 10 — Evaluation
Measure accuracy, precision, recall, F1, confusion matrix and other relevant metrics.

### Phase 11 — System Testing
Test functional, usability, performance and integration requirements.

### Phase 12 — Final Validation
Finalize the system, documentation and research paper.

---

# 37. RESEARCH TECHNOLOGIES

Create technology cards.

## AI / ML
- Python
- PyTorch
- CNN
- Transfer Learning
- EfficientNet
- EfficientNetV2
- ResNet
- U-Net

## Explainable AI
- Grad-CAM
- Segmentation visualization
- Attention/heatmaps

## Image Processing
- OpenCV
- Image normalization
- Contrast enhancement
- Noise reduction
- Image quality analysis

## Web
- React.js
- Flask
- REST APIs
- HTML
- CSS
- JavaScript

## Database
- MongoDB

## Training / Experimentation
- Google Colab
- Kaggle
- Jupyter Notebook
- Visual Studio Code

---

# 38. RESULTS PAGE

Create a clean research-results dashboard.

## Model Performance

| Disease | Model | Accuracy |
|---|---|---:|
| DR | EfficientNetV2-S | 92.13% |
| Glaucoma | Glaucoma model / U-Net-based pipeline | 96.05% |
| Cataract | EfficientNet-B3 | 88.19% |
| DME | EfficientNet-B0 | 92.67% |

Recommended visualizations:
- Bar chart
- Model cards
- Confusion matrices
- Sample Grad-CAM outputs
- Sample segmentation outputs
- VDS visualization

### Important

Never imply that the highest accuracy automatically means the model is clinically superior. Explain that each module solves a different task and uses different datasets.

---

# 39. CATARACT VDS VISUALIZATION

Create a visual component showing:

**Image Quality Features**
- Entropy
- Contrast
- Vessel Visibility
- Sharpness

↓

**Weighted VDS Calculation**

↓

**Visibility Degradation Score**

↓

**Interpretation**

Example display:

| Feature | Weight |
|---|---:|
| Entropy | 0.4426 |
| Contrast | 0.2955 |
| Vessel Visibility | 0.2287 |
| Sharpness | 0.0332 |

Use a visual gauge, but do not invent categorical thresholds unless they are defined in the final experiment.

---

# 40. USER FLOW

Show an interactive user flow:

**1. Select Disease / Image Type**
↓
**2. Upload Retinal Image**
↓
**3. Image Validation**
↓
**4. Preprocessing**
↓
**5. AI Prediction**
↓
**6. Severity / Risk Analysis**
↓
**7. Explainability**
↓
**8. Results Dashboard**
↓
**9. Save / Review Result**

---

# 41. DESIGN DIRECTION FOR GOOGLE ANTIGRAVITY

Build a premium academic-medical AI website.

## Visual Style

- Modern
- Clean
- Minimal
- Research-focused
- Medical technology aesthetic
- High readability
- Responsive
- Accessible

Suggested visual concept:
- Deep navy / blue
- Cyan/teal accents
- White/light backgrounds
- Subtle gradients
- Glass-like cards used sparingly
- Soft shadows
- Rounded cards
- Scientific diagrams

Do not overuse neon effects.

## Typography

Use a modern professional sans-serif font such as:
- Inter
- Manrope
- Plus Jakarta Sans

## Animations

Use subtle animations:
- Fade-in sections
- Scroll reveal
- Card hover
- Animated counters
- Timeline progress
- Architecture flow animation

Avoid excessive animation that reduces readability.

---

# 42. HOMEPAGE SECTION ORDER

Recommended order:

1. Navbar
2. Hero
3. Research problem
4. Four disease modules
5. How the system works
6. Key research contribution
7. Model performance
8. Explainable AI
9. Architecture
10. Research methodology
11. Team preview
12. Milestone preview
13. Documents/presentations
14. Research disclaimer
15. Footer

---

# 43. DISEASE MODULE PAGE LAYOUT

Every module page should use the same structure:

1. Disease title
2. Medical background
3. Research problem
4. Research gap
5. Objective
6. Dataset
7. Input modality
8. Preprocessing
9. AI model
10. Assessment
11. Explainability
12. Evaluation metrics
13. Current result
14. Sample visualization
15. Limitations
16. Future work
17. Link back to overall framework

---

# 44. LITERATURE SURVEY CONTENT

The literature survey should summarize major themes rather than copying papers.

## Theme 1 — Diabetic Retinopathy
Deep learning and CNN models can identify retinal lesions and classify DR severity from fundus images.

## Theme 2 — Glaucoma
Glaucoma detection benefits from optic disc/cup analysis, segmentation and biomarkers such as CDR.

## Theme 3 — Cataract
Deep learning can classify cataract severity from fundus images, but visibility degradation and explainability remain important research challenges.

## Theme 4 — DME
Deep learning models can analyze retinal images/OCT to identify macular edema and related retinal abnormalities.

## Theme 5 — Multi-Disease AI
Multi-disease frameworks can improve screening efficiency but must address disease-specific reasoning and modality differences.

## Theme 6 — Explainable AI
Grad-CAM and segmentation visualization can provide visual evidence supporting AI predictions.

## Theme 7 — Clinical Trust
AI systems should provide interpretable outputs rather than only black-box predictions.

---

# 45. SELECTED LITERATURE FOR WEBSITE

Include a “Selected Literature” section with links to the actual documents/PDFs when legally and academically appropriate.

Important papers from the project literature collection include:

1. **Diagnosis of Diseases in Color Fundus Images Using Deep Learning Algorithms with Explainable Visualization**
2. **Automatic Cataract Grading with Visual-semantic Interpretability**
3. **A Hybrid Global-Local Representation CNN Model for Automatic Cataract Grading**
4. **Automatic Cataract Classification Using Deep Neural Network With Discrete State Transition**
5. **Automated Eye Disease Detection of Diabetic Retinopathy Using Artificial Intelligence on Fundus Images**
6. **A Comprehensive Analysis of Diabetic Retinopathy using Deep Learning Techniques**
7. **Diabetic Macular Edema Detection and Classification Using Advanced Convolutional Neural Networks**
8. **DMERCNET: A Quirky Deep Learning Classifier for Diabetic Retinopathy and Macular Edema Risk Using CNN**
9. **Identification of Diabetic Related Eye Diseases Using Deep Learning**
10. **Systematic Development of AI-Enabled Diagnostic Systems for Glaucoma and Diabetic Retinopathy**
11. **Early Detection of Glaucoma from Cropped Fundus Images Using Transfer-Learned Convolutional Neural Network**
12. **A Review on Eye Disease Prediction and Detection Using AI/ML**
13. **A Survey on AI-Powered Ophthalmology: A Revolution in Eye Care and Disease Management**
14. **Leveraging Deep Learning with Automated Fundus Imaging for Early Detection and Diagnosis of Eye Diseases**

Do not copy full papers into the website. Provide short summaries and references.

---

# 46. DOCUMENT LINKS CONFIGURATION

Create a central configuration object/file for links so the website can be updated without changing page code.

Use placeholders such as:

```text
PROPOSAL_URL = "[ADD URL]"
CHARTER_URL = "[ADD URL]"
PP1_URL = "[ADD URL]"
PP2_URL = "[ADD URL]"
FINAL_REPORT_URL = "[ADD URL]"
RESEARCH_PAPER_URL = "[ADD URL]"
```

Never create fake Google Drive URLs.

---

# 47. TEAM PHOTO CONFIGURATION

Create:

```text
/assets/team/binuri-perera.jpg
/assets/team/sanduni-kahawevithana.jpg
/assets/team/chavindee.jpg
/assets/team/oshan-wijekoon.jpg
```

If photos are not available:
- Use professional initials/avatar placeholders.
- Do not generate fake photographs that could be mistaken for real students.

---

# 48. RESEARCH VISUAL ASSETS

Recommended assets:

```text
/assets/logo.svg
/assets/hero-retina.jpg
/assets/architecture.png
/assets/workflow.png
/assets/datasets/
assets/results/
assets/gradcam/
assets/segmentation/
assets/team/
assets/presentations/
```

Use optimized images for fast loading.

---

# 49. ACCESSIBILITY

Implement:
- Alt text for every meaningful image.
- Keyboard navigation.
- Clear focus states.
- Sufficient text contrast.
- Responsive design.
- Accessible buttons.
- Semantic HTML.
- Descriptive links.
- Reduced-motion support.

---

# 50. RESPONSIVE REQUIREMENTS

The website must work on:
- Desktop
- Laptop
- Tablet
- Mobile

Mobile navigation:
- Hamburger menu
- Smooth drawer/dropdown
- Large touch targets

Tables should become horizontally scrollable or card-based on small screens.

---

# 51. PERFORMANCE REQUIREMENTS

- Compress images.
- Lazy-load large images.
- Avoid unnecessary video backgrounds.
- Optimize fonts.
- Minimize heavy animations.
- Avoid large uncompressed medical images.
- Keep architecture diagrams readable but optimized.

The university guideline specifically recommends avoiding slow-loading graphics and using optimized images.

---

# 52. SECURITY / PRIVACY

The website must not expose:
- Patient personal information
- Real patient images containing identifiable information
- Private API keys
- Database credentials
- Model deployment secrets

Use only anonymized/public research datasets in public demonstrations.

---

# 53. RESEARCH ETHICS

Include:

> The project uses publicly available/anonymized medical imaging datasets for research and educational purposes. The system is intended as a research and screening-support prototype and is not a replacement for professional medical diagnosis.

If future hospital data are used:
- Obtain appropriate ethical approval.
- Obtain consent where required.
- Follow institutional data-protection procedures.

---

# 54. GOOGLE ANTIGRAVITY BUILD PROMPT

Use the following instruction as the main generation prompt:

> Build a complete, modern, responsive academic research website for the SLIIT research project **“AI-Driven Multi-Disease Diagnosis of Diabetes-Related Eye Disorders”**, Group ID **R26-IT-043**.
>
> Follow the SLIIT website guideline structure: Home, Domain, Milestones, Documents, Presentations, About Us and Contact Us. Add a dedicated Research Modules/System page.
>
> The website must present four disease-specific AI modules:
> 1. Diabetic Retinopathy — EfficientNetV2-S, fundus images, 92.13% current reported validation accuracy.
> 2. Glaucoma — U-Net segmentation + structural biomarker/risk pipeline, fundus images, 96.05% current reported validation accuracy.
> 3. Cataract — EfficientNet-B3, fundus images, four classes No/Mild/Moderate/Severe, visibility degradation assessment, Grad-CAM, current reported validation accuracy 88.19%.
> 4. DME — EfficientNet-B0, OCT images, classification/severity/risk, Grad-CAM, current reported validation accuracy 92.67%.
>
> Explain the overall architecture:
> React frontend → image upload/validation → preprocessing → disease-specific API/model → assessment → explainability → result dashboard → database/history.
>
> Use the research content in this Markdown as the authoritative content source. Do not invent student IDs, assessment dates, document URLs, clinical deployment claims, patient numbers, or medical performance claims.
>
> Create a premium medical-AI research visual style with a clean navy/teal/white palette, subtle gradients, professional typography, retina-inspired visuals, responsive cards, diagrams, timelines and restrained animations.
>
> Include:
> - Hero section
> - Research problem
> - Research gap
> - Objectives
> - Literature survey
> - Methodology
> - System architecture
> - Four disease modules
> - Dataset information
> - Model information
> - Explainable AI
> - OOD detection
> - VDS calculation
> - Results dashboard
> - Team profiles
> - Supervisors
> - Milestones
> - Documents
> - Presentations
> - Contact
> - Medical/research disclaimer
> - Future work
>
> Add interactive architecture and methodology diagrams where appropriate.
>
> For the Cataract module, show:
>
> `VDS = 0.4426 × Entropy + 0.2955 × Contrast + 0.2287 × Vessel Visibility + 0.0332 × Sharpness`
>
> Display the four coefficients clearly.
>
> For each model result, explicitly label the numbers as **project-reported experimental validation results**, not clinical validation.
>
> Create reusable components for:
> - Navbar
> - Footer
> - DiseaseCard
> - ResearchMetricCard
> - ArchitectureDiagram
> - MethodologyTimeline
> - TeamMemberCard
> - MilestoneTimeline
> - DocumentCard
> - PresentationCard
> - ResearchDisclaimer
> - ResultsChart
> - ExplainabilityViewer
>
> Ensure the website is production-quality, accessible, responsive and easy for the group to update.

---

# 55. CONTENT SAFETY / MEDICAL CLAIM RULE

The website is an academic research website.

Never use wording such as:
- “This system diagnoses patients.”
- “This system replaces doctors.”
- “This system guarantees diagnosis.”
- “Clinically approved” unless the team has formal approval.
- “100% accurate.”

Prefer:
- “AI-assisted screening”
- “research prototype”
- “decision-support”
- “experimental validation”
- “predicted result”
- “requires professional confirmation”

---

# 56. FINAL WEBSITE CHECKLIST

Before publishing, verify:

## Content
- [ ] Project title correct
- [ ] Group ID correct
- [ ] Four members correct
- [ ] Student IDs verified
- [ ] Roles verified
- [ ] Supervisor names verified
- [ ] Research problem included
- [ ] Research gap included
- [ ] Objectives included
- [ ] Methodology included
- [ ] Four disease modules included
- [ ] Dataset names verified
- [ ] Model names verified
- [ ] Results verified
- [ ] VDS coefficients verified
- [ ] OOD section included
- [ ] Medical disclaimer included

## Website Guideline
- [ ] Home
- [ ] Domain
- [ ] Milestones
- [ ] Documents
- [ ] Presentations
- [ ] About Us
- [ ] Contact Us

## Technical
- [ ] Responsive
- [ ] Mobile menu
- [ ] Optimized images
- [ ] Accessibility
- [ ] No broken links
- [ ] No fake URLs
- [ ] No exposed API keys
- [ ] No private patient data
- [ ] No fake clinical claims

## Final Team Verification
- [ ] Confirm Oshan Wijekoon's student ID
- [ ] Confirm all four final research responsibilities
- [ ] Confirm final model versions
- [ ] Confirm final datasets
- [ ] Confirm final validation results
- [ ] Add real document links
- [ ] Add official presentation dates
- [ ] Add approved member photographs
- [ ] Add group email

---

# 57. SOURCE / RESEARCH BASIS

This website specification was prepared from the group's uploaded:
- SLIIT website-development guideline
- Individual research proposal documents
- Literature-review papers supplied for the research
- Current project research details and implementation information

The website should summarize research literature in original wording and provide appropriate academic references rather than reproducing copyrighted papers.

---

# END OF WEBSITE SPECIFICATION

**Project:** AI-Driven Multi-Disease Diagnosis of Diabetes-Related Eye Disorders  
**Group:** R26-IT-043  
**Institution:** Sri Lanka Institute of Information Technology (SLIIT)
