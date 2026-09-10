# ☁️ AWS Static Website Hosting on Amazon S3

[![AWS](https://img.shields.io/badge/AWS-Amazon%20S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white)](https://aws.amazon.com/s3/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/arnav365/aws-cloud-portfolio)
[![Status](https://img.shields.io/badge/Status-Completed%20%2F%20Live-success?style=for-the-badge)](https://aws.amazon.com/s3/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

> A modern, responsive cloud engineering portfolio website hosted entirely on **Amazon Simple Storage Service (Amazon S3)** utilizing **S3 Static Website Hosting**, custom bucket policies, and fine-grained public access configurations in the **ap-south-1 (Mumbai)** region.

---

## 📑 Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. Project Objectives](#2-project-objectives)
- [3. Live Demo](#3-live-demo)
- [4. Technologies Used](#4-technologies-used)
- [5. AWS Services Used](#5-aws-services-used)
- [6. AWS Region and S3 Bucket Information](#6-aws-region-and-s3-bucket-information)
- [7. Project Architecture](#7-project-architecture)
- [8. Project Structure](#8-project-structure)
- [9. Website Features](#9-website-features)
- [10. AWS Deployment Process](#10-aws-deployment-process)
- [11. S3 Bucket Policy / Access Configuration](#11-s3-bucket-policy--access-configuration)
- [12. Why Amazon S3?](#12-why-amazon-s3)
- [13. Cost Considerations](#13-cost-considerations)
- [14. Testing](#14-testing)
- [15. Git & GitHub Workflow](#15-git--github-workflow)
- [16. Screenshots](#16-screenshots)
- [17. What I Learned](#17-what-i-learned)
- [18. Key Cloud Computing Concepts](#18-key-cloud-computing-concepts)
- [19. Current Limitations](#19-current-limitations)
- [20. Future Improvements](#20-future-improvements)
- [21. Future Architecture](#21-future-architecture)
- [22. Project Information / Status](#22-project-information--status)
- [23. Author](#23-author)
- [24. Repository](#24-repository)
- [25. License](#25-license)

---

## 1. Project Overview

This project focuses on the core fundamentals of cloud storage and serverless web hosting by deploying a fully functional, highly responsive, modern portfolio website directly on **Amazon Web Services (AWS)** using **Amazon S3**.

Instead of managing virtual machines (such as EC2 instances) or web servers (such as Apache or NGINX), the entire frontend application is served serverlessly via Amazon S3's dedicated **Static Website Hosting** feature. This eliminates server provisioning, OS patching, and maintenance overhead while providing industry-standard data durability and high availability.

---

## 2. Project Objectives

- 🎯 **Hands-on Cloud Infrastructure**: Gain practical, production-style experience with AWS management console and S3 storage features.
- 🎯 **Serverless Web Hosting**: Understand how static files (HTML, CSS, JavaScript) can be served globally without compute instances.
- 🎯 **Security & Permissions**: Configure AWS S3 Block Public Access permissions and write JSON bucket policies allowing secure read access (`s3:GetObject`).
- 🎯 **Cloud Cost Efficiency**: Demonstrate cost-effective hosting leveraging AWS Free Tier resources.
- 🎯 **Version Control & Documentation**: Establish a professional Git/GitHub workflow with industry-grade documentation.

---

## 3. Live Demo

| Property | Value |
| :--- | :--- |
| **S3 Website Endpoint** | [http://arnav-cloud-portfolio-2026.s3-website.ap-south-1.amazonaws.com](http://arnav-cloud-portfolio-2026.s3-website.ap-south-1.amazonaws.com) |
| **AWS Region** | Asia Pacific (Mumbai) / `ap-south-1` |
| **Protocol** | HTTP (Standard S3 Website Endpoint) |

> 📌 **Endpoint Placeholder Note:**  
> If the live URL differs in your deployment, replace `YOUR_S3_WEBSITE_ENDPOINT` with:  
> `http://<bucket-name>.s3-website.<aws-region>.amazonaws.com`

---

## 4. Technologies Used

| Technology | Category | Purpose |
| :--- | :--- | :--- |
| **HTML5** | Frontend Markup | Semantic document structure, SEO meta tags, and accessible layout |
| **CSS3** | Styling & UI | Custom modern dark theme, glassmorphism, responsive CSS grid, flexbox & animations |
| **JavaScript (ES6+)** | Frontend Logic | Canvas particle system, interactive contact form validation, toast notifications & DOM manipulation |
| **Font Awesome 6.5** | Iconography | Vector cloud, security, and developer icons |
| **Google Fonts** | Typography | Clean typography using *JetBrains Mono*, *Plus Jakarta Sans*, and *Inter* |
| **Git & GitHub** | Version Control | Source code tracking, branch management, and remote portfolio repository |

---

## 5. AWS Services Used

### 🪣 Amazon Simple Storage Service (Amazon S3)
- **Object Storage**: Storing production web assets (`index.html`, `style.css`, `script.js`).
- **Static Website Hosting**: Built-in HTTP web server engine with index document routing (`index.html`).
- **Bucket Policy**: Granular JSON-based resource policy granting public read permissions (`s3:GetObject`).
- **Access Control**: Tailored Block Public Access settings enabling web asset distribution.

---

## 6. AWS Region and S3 Bucket Information

| Parameter | Configuration Value |
| :--- | :--- |
| **AWS Region Name** | Asia Pacific (Mumbai) |
| **AWS Region Identifier** | `ap-south-1` |
| **S3 Bucket Name** | `arnav-cloud-portfolio-2026` |
| **S3 Bucket ARN** | `arn:aws:s3:::arnav-cloud-portfolio-2026` |
| **Static Hosting Status** | Enabled |
| **Index Document** | `index.html` |
| **Error Document** | `index.html` *(or custom error.html)* |
| **Website Endpoint** | `http://arnav-cloud-portfolio-2026.s3-website.ap-south-1.amazonaws.com` |

---

## 7. Project Architecture

### Current Deployed Architecture (S3 Static Hosting)

The current implementation routes traffic directly from web clients over HTTP to the Amazon S3 Static Website Hosting endpoint in the Mumbai region.

```text
+------------------------+
|      Web Browser       |
|      (End User)        |
+-----------+------------+
            |
            | HTTP GET Request
            v
+-----------------------------------------------------------+
|               AWS Region: ap-south-1 (Mumbai)             |
|                                                           |
|  +-----------------------------------------------------+  |
|  |           Amazon S3 Static Website Endpoint         |  |
|  |   arnav-cloud-portfolio-2026.s3-website...          |  |
|  +--------------------------+--------------------------+  |
|                             |                             |
|                             v                             |
|  +-----------------------------------------------------+  |
|  |             Amazon S3 Storage Bucket                |  |
|  |           [ arnav-cloud-portfolio-2026 ]            |  |
|  |                                                     |  |
|  |   +---------------+ +---------------+ +-----------+ |  |
|  |   |  index.html   | |   style.css   | | script.js | |  |
|  |   +---------------+ +---------------+ +-----------+ |  |
|  |                                                     |  |
|  |   Bucket Policy: Allow Public Read (s3:GetObject)   |  |
|  +-----------------------------------------------------+  |
+-----------------------------------------------------------+
```

---

## 8. Project Structure

```text
aws-cloud-portfolio/
│
├── index.html             # Main semantic HTML structure & portfolio sections
├── style.css              # Core design system, variables, responsive styling & animations
├── script.js              # Interactive UI scripts, canvas animation & form handling
└── README.md              # Project documentation & AWS cloud architecture guide
```

---

## 9. Website Features

The deployed website contains a rich, interactive cloud portfolio designed with modern web engineering best practices:

- 🌌 **Interactive Cloud Constellation Canvas**: Custom HTML5 Canvas rendering animated particle nodes that dynamically connect with glowing vectors based on distance.
- 🎨 **Modern Dark Mode & Glassmorphism Design System**: Tailored HSL color palette featuring deep slate backgrounds, vibrant AWS orange (`#FF9900`), and ambient blurred glow orbs.
- 📱 **Fully Responsive Navigation**: Fixed/sticky navigation header with scroll-spy highlighting and a slide-out mobile drawer menu with smooth overlay transitions.
- 📊 **Cloud Metrics & Visual Architecture Pipeline**: Interactive UI component simulating a cloud terminal deployment flow with step-by-step pipeline animations.
- 🏛️ **"The Architecture Mindset" Pillars**: Interactive showcase covering the core pillars of cloud engineering: **Deploy**, **Build**, and **Scale**.
- 🛠️ **AWS Technologies Showcase**: Detailed overview of core cloud services including Amazon S3, CloudFront, and Route 53.
- 🚀 **Hands-on Cloud Project Showcase**: Cards showcasing Project 01 (Static Website Hosting), Project 02 (WordPress on AWS), and Project 03 (EC2 Web Server).
- 📋 **One-Click Email Copy Utility**: Clipboard API integration that allows users to instantly copy contact details with visual confirmation.
- 🔔 **Custom Dynamic Toast Notification System**: Lightweight, dependency-free floating toast alerts for user actions and feedback.
- ✉️ **Interactive Contact Form with Live Client-Side Validation**: Real-time error detection, regex-based email verification, and dynamic submission state handling.
- ⚡ **Optimized Performance**: Zero third-party heavy JavaScript frameworks; built with pure vanilla JavaScript, semantic HTML5, and CSS3 for instant load speeds.

---

## 10. AWS Deployment Process

Step-by-step walkthrough of deploying the static website to Amazon S3:

```
[ Step 1: Create S3 Bucket ]
             │
             ▼
[ Step 2: Configure Public Access Settings ]
             │
             ▼
[ Step 3: Enable Static Website Hosting ]
             │
             ▼
[ Step 4: Apply Public Read Bucket Policy ]
             │
             ▼
[ Step 5: Upload Website Artifacts ]
             │
             ▼
[ Step 6: Test Endpoint in Browser ]
```

### Step 1: Create the Amazon S3 Bucket
1. Log in to the **AWS Management Console**.
2. Navigate to **Amazon S3** > **Buckets** > **Create bucket**.
3. Configure the bucket details:
   - **Bucket name**: `arnav-cloud-portfolio-2026` *(must be globally unique)*
   - **AWS Region**: `Asia Pacific (Mumbai) ap-south-1`
   - **Object Ownership**: ACLs disabled (recommended)

### Step 2: Configure Public Access Settings
1. Under **Block Public Access settings for this bucket**:
   - Uncheck **Block *all* public access**.
   - Acknowledge the warning checkbox confirming that objects will become public.
2. Click **Create bucket**.

### Step 3: Configure Static Website Hosting
1. Select the created bucket `arnav-cloud-portfolio-2026`.
2. Navigate to the **Properties** tab.
3. Scroll to the bottom to **Static website hosting** and click **Edit**.
4. Select **Enable**.
5. Set **Hosting type** to *Host a static website*.
6. Specify the index document:
   - **Index document**: `index.html`
   - **Error document**: `index.html`
7. Click **Save changes**.
8. Copy the generated **Bucket website endpoint**.

### Step 4: Configure the S3 Bucket Policy
1. Navigate to the **Permissions** tab.
2. Under **Bucket policy**, click **Edit**.
3. Paste the public read JSON policy (see [Section 11](#11-s3-bucket-policy--access-configuration)).
4. Click **Save changes**.

### Step 5: Upload Website Files
1. Navigate to the **Objects** tab.
2. Click **Upload** > **Add files**.
3. Select `index.html`, `style.css`, and `script.js`.
4. Click **Upload**.

### Step 6: Test the Website
1. Open the S3 Static Website Endpoint URL in any modern browser:  
   `http://arnav-cloud-portfolio-2026.s3-website.ap-south-1.amazonaws.com`
2. Verify that styles, layout, and scripts load correctly.

---

## 11. S3 Bucket Policy / Access Configuration

To allow global internet visitors to read the website files stored in Amazon S3, an IAM bucket policy is attached to the bucket:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::arnav-cloud-portfolio-2026/*"
        }
    ]
}
```

### Policy Breakdown:
- **`Version`**: `2012-10-17` standard AWS IAM policy format.
- **`Sid`**: Statement identifier describing the purpose (`PublicReadGetObject`).
- **`Effect`**: `Allow` to permit incoming requests.
- **`Principal`**: `*` applies to any unauthenticated public internet user.
- **`Action`**: `s3:GetObject` restricts permissions strictly to downloading/viewing objects (no delete or write permissions).
- **`Resource`**: `arn:aws:s3:::arnav-cloud-portfolio-2026/*` targets all files stored within the bucket.

---

## 12. Why Amazon S3?

| Criteria | Traditional Server (EC2/VPS) | Amazon S3 Static Hosting |
| :--- | :--- | :--- |
| **Server Management** | High (OS updates, security patches, web server configs) | **Zero (100% Serverless)** |
| **Data Durability** | Dependent on EBS snapshots / RAID | **99.999999999% (11 9's) across AZs** |
| **Scalability** | Manual scaling or Auto Scaling Groups | **Instant, automatic scaling to demand** |
| **Cost** | $5 - $20+/month running 24/7 | **Fraction of a cent ($0.00 - $0.50/month)** |
| **Maintenance** | Ongoing server monitoring & backups | **None required** |

---

## 13. Cost Considerations

Hosting a static website on Amazon S3 is one of the most cost-effective hosting methods in cloud computing:

- **AWS Free Tier (First 12 Months)**:
  - 5 GB of standard Amazon S3 storage.
  - 20,000 `GET` Requests per month.
  - 2,000 `PUT`, `COPY`, `POST`, or `LIST` Requests per month.
  - 15 GB of data transfer out per month.
- **Estimated Monthly Cost (Post-Free Tier / Production)**:
  - Total website storage size: `< 1 MB` (~$0.000023/month).
  - Data transfer out: ~$0.09 per GB (Mumbai region).
  - **Estimated total**: **<$0.05 USD / month** for standard personal/portfolio traffic.

---

## 14. Testing

| Test Category | Test Case | Method | Result |
| :--- | :--- | :--- | :--- |
| **Endpoint Accessibility** | Direct HTTP request to S3 website endpoint | Chrome, Firefox, Edge, Safari | 🟢 Passed (HTTP 200 OK) |
| **Asset Delivery** | `style.css` and `script.js` load without 403 Forbidden | Browser Developer Tools (Network Tab) | 🟢 Passed |
| **Responsiveness** | Mobile, Tablet, Laptop, and Desktop viewports | Responsive Design Mode (320px to 2560px) | 🟢 Passed |
| **JavaScript Functionality** | Cloud canvas animation, contact form validation & toasts | Interactive browser testing | 🟢 Passed |
| **Bucket Permissions** | Verify write/delete requests are blocked from public | AWS CLI unauthenticated test | 🟢 Passed (Access Denied) |

---

## 15. Git & GitHub Workflow

This repository is maintained with clean version control practices:

```bash
# Clone the repository
git clone https://github.com/arnav365/aws-cloud-portfolio.git
cd aws-cloud-portfolio

# Check repository status
git status

# Stage changes
git add .

# Commit with a descriptive message
git commit -m "feat: complete AWS S3 static website deployment and documentation"

# Push to GitHub main branch
git push origin main
```

---

## 16. Screenshots

> 💡 *Visual evidence of the AWS configuration and deployed website can be added below:*

### 1. Amazon S3 Bucket & Objects Overview
```text
+-----------------------------------------------------------------------------------+
|  AWS Management Console > Amazon S3 > Buckets > arnav-cloud-portfolio-2026       |
|                                                                                   |
|  [ PLACEHOLDER: Insert screenshot of S3 Objects tab showing uploaded files ]      |
+-----------------------------------------------------------------------------------+
```

### 2. S3 Static Website Hosting Configuration
```text
+-----------------------------------------------------------------------------------+
|  AWS Management Console > Amazon S3 > Properties > Static website hosting         |
|                                                                                   |
|  [ PLACEHOLDER: Insert screenshot of enabled static website hosting endpoint ]   |
+-----------------------------------------------------------------------------------+
```

### 3. S3 Bucket Policy & Permissions
```text
+-----------------------------------------------------------------------------------+
|  AWS Management Console > Amazon S3 > Permissions > Bucket policy                 |
|                                                                                   |
|  [ PLACEHOLDER: Insert screenshot of JSON Bucket Policy & Public Access badge ]   |
+-----------------------------------------------------------------------------------+
```

### 4. Live Website in Browser
```text
+-----------------------------------------------------------------------------------+
|  Browser View: http://arnav-cloud-portfolio-2026.s3-website.ap-south-1.amazonaws  |
|                                                                                   |
|  [ PLACEHOLDER: Insert screenshot of live website running in web browser ]        |
+-----------------------------------------------------------------------------------+
```

---

## 17. What I Learned

- 🧠 **Object Storage Architecture**: Difference between block storage (EBS), file storage (EFS), and object storage (S3).
- 🧠 **Access Control & Bucket Policies**: How IAM JSON syntax controls access through statements, principals, actions, and resource ARNs.
- 🧠 **Public vs. Private Security Boundaries**: Managing S3 Block Public Access and understanding security implications of public read policies.
- 🧠 **Web Endpoint Routing**: How Amazon S3 routes index and error documents directly over HTTP without a dedicated compute layer.
- 🧠 **Serverless Advantages**: Building production-ready web deployments with zero server management and high fault tolerance.

---

## 18. Key Cloud Computing Concepts

- **Object Storage**: A data storage architecture that manages data as objects containing data, metadata, and a globally unique identifier.
- **Serverless Hosting**: A cloud execution model where the cloud provider dynamically manages the allocation and provisioning of servers.
- **Data Durability vs. Availability**: S3 provides 99.999999999% durability by redundantly storing data across multiple Availability Zones (AZs).
- **Public Read Access**: Granting read-only permissions to internet visitors while safeguarding administrative and write operations.
- **Regional Isolation**: Resources created in `ap-south-1` remain in the Mumbai region for low latency and data residency compliance.

---

## 19. Current Limitations

While Amazon S3 Static Website Hosting provides a robust starting point, the standalone implementation has the following known architectural limitations:

- ⚠️ **HTTP Only (No Native SSL/TLS)**: Direct Amazon S3 website endpoints do not support custom SSL/TLS certificates or HTTPS connections.
- ⚠️ **No Edge Caching**: Requests travel directly to the `ap-south-1` (Mumbai) bucket without global caching for international visitors.
- ⚠️ **Direct S3 Origin Exposure**: The S3 bucket is exposed publicly rather than restricted behind a Content Delivery Network (CDN) with Origin Access Control (OAC).
- ⚠️ **Static Frontend Only**: Form submissions and dynamic interactions are handled strictly client-side without a server-side backend API.

---

## 20. Future Improvements

*(The following features represent planned architectural enhancements and are not currently active in this phase)*

- 🔮 **Amazon CloudFront CDN**:
  - Distribute content globally across 450+ Edge Locations for low-latency delivery.
  - Implement **Origin Access Control (OAC)** to make the S3 bucket fully private and allow traffic only via CloudFront.
- 🔮 **Custom Domain with Amazon Route 53**:
  - Connect a custom apex domain (e.g., `arnavcloud.com`) via Route 53 DNS Alias records.
- 🔮 **HTTPS / SSL Encryption with AWS Certificate Manager (ACM)**:
  - Provision free, auto-renewing SSL/TLS certificates for end-to-end HTTPS encryption.
- 🔮 **Serverless Backend (API Gateway + AWS Lambda + Amazon SES)**:
  - Build a serverless API to handle contact form submissions and trigger real emails via Amazon Simple Email Service.
- 🔮 **CI/CD Automation with GitHub Actions**:
  - Create an automated deployment pipeline that automatically syncs code to S3 and invalidates CloudFront cache on every `git push`.
- 🔮 **Monitoring & Logging**:
  - Enable CloudWatch alarms, S3 Server Access Logging, and CloudFront access logs for traffic analytics and monitoring.

---

## 21. Future Architecture

### Target Production Blueprint (Phase 2 Roadmap)

```text
+------------------------------------------------------------------------------------+
|                                FUTURE ARCHITECTURE                                 |
+------------------------------------------------------------------------------------+

                   +-----------------------------+
                   |         End User            |
                   +--------------+--------------+
                                  |
                                  | HTTPS (Port 443)
                                  v
                   +-----------------------------+
                   |       Amazon Route 53       |
                   |      (DNS Custom Domain)    |
                   +--------------+--------------+
                                  |
                                  | Alias Record
                                  v
                   +-----------------------------+
                   |      Amazon CloudFront      | <---+ AWS Certificate Manager (ACM)
                   |       (Global CDN)          |     (SSL/TLS Encryption)
                   +--------------+--------------+
                                  |
                                  | Origin Access Control (OAC)
                                  | (Private S3 Access Only)
                                  v
                   +-----------------------------+
                   |      Amazon S3 Bucket       |
                   |   (Private Origin Bucket)   |
                   +-----------------------------+
                                  |
                   +--------------+--------------+
                   |                             |
                   v                             v
       +-----------------------+     +-----------------------+
       | Amazon CloudWatch     |     | GitHub Actions CI/CD  |
       | (Logging & Analytics) |     | (Automated S3 Sync)   |
       +-----------------------+     +-----------------------+
```

---

## 22. Project Information / Status

| Milestone | Status | Details |
| :--- | :---: | :--- |
| **Website Developed** | 🟢 | HTML5, CSS3, Vanilla JavaScript portfolio completed |
| **S3 Bucket Created** | 🟢 | `arnav-cloud-portfolio-2026` in `ap-south-1` |
| **Static Website Hosting Configured** | 🟢 | Index document configured as `index.html` |
| **Website Files Uploaded** | 🟢 | `index.html`, `style.css`, `script.js` deployed |
| **Public Access Configured** | 🟢 | S3 Block Public Access updated for static hosting |
| **Bucket Policy Configured** | 🟢 | Read-only JSON policy (`s3:GetObject`) applied |
| **GitHub Repository Created** | 🟢 | Configured under `arnav365/aws-cloud-portfolio` |
| **Source Code Pushed to GitHub** | 🟢 | Pushed to remote repository on `main` branch |
| **CloudFront CDN Integration** | 🟡 | *Planned for Future Phase* |
| **Custom Domain & Route 53** | 🟡 | *Planned for Future Phase* |
| **SSL/TLS (HTTPS) via ACM** | 🟡 | *Planned for Future Phase* |
| **CI/CD with GitHub Actions** | 🟡 | *Planned for Future Phase* |

---

## 23. Author

**Arnav Singh**  
- 🌐 **GitHub**: [@arnav365](https://github.com/arnav365)  
- 💼 **Project**: AWS Cloud Computing Portfolio  
- 📍 **AWS Region**: Asia Pacific (Mumbai) / `ap-south-1`

---

## 24. Repository

- **GitHub Repository**: [https://github.com/arnav365/aws-cloud-portfolio](https://github.com/arnav365/aws-cloud-portfolio)
- **Primary Branch**: `main`

---

## 25. License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
