# Indian Municipal Grievance Redressal Portal
## Complete End-to-End Project Documentation

---

# 1. Project Overview

The Municipal Grievance Redressal Portal is a full-stack e-governance platform designed for Indian Municipal Corporations, Nagar Nigam, Smart City projects, and Urban Local Bodies (ULBs).

The platform enables:

- Citizens to submit complaints online
- Government departments to manage complaints
- Department Heads (DH) to distribute work to Shakhas and staff
- Staff members to resolve complaints with proof uploads
- Citizens to verify whether work was actually completed
- Municipal authorities to monitor staff performance and SLA compliance

The system is inspired by:

- CPGRAMS
- Swachhata App
- Smart City Grievance Systems
- Indian Municipal Governance Structures

---

# 2. Core Objectives

## Citizen Side

- Easy complaint submission
- OTP-based verification
- Real-time tracking
- Dashboard access
- Resolution verification
- Objection/reopen feature

---

## Government Side

- Department-based routing
- Shakha hierarchy
- Staff assignment workflow
- SLA monitoring
- Performance tracking
- Escalation management
- Audit transparency

---

# 3. Real Government Hierarchy

```text
Citizen
   ↓
Admin / Municipal Control Room
   ↓
Department Head (DH)
   ↓
Shakha / Zone Team
   ↓
Staff / Field Worker
```

---

# 4. User Roles

# 4.1 Citizen

Capabilities:

- Verify mobile using OTP
- Submit complaint
- Upload images/videos
- Track grievance
- View dashboard
- Raise objection
- Rate resolution
- View history

Authentication:

- OTP only

---

# 4.2 Admin

Role:

Municipal Commissioner / Control Room Admin

Capabilities:

- View all complaints
- Assign to departments
- Transfer complaints across departments
- Monitor escalations
- View analytics
- Manage users
- Manage SLA
- Generate reports

---

# 4.3 Department Head (DH)

Capabilities:

- View department complaints
- Assign complaints to Shakhas/staff
- Reassign staff
- Verify resolution proof
- Monitor department SLA
- View rankings

---

# 4.4 Staff / Shakha Karmi

Capabilities:

- View assigned complaints
- Update work status
- Upload before/after proof
- Upload GPS location
- Add remarks
- Complete resolution

---

# 5. Complete Complaint Workflow

# STEP 1 — Citizen OTP Verification

Citizen enters:

- Name
- Mobile Number
- Email (optional)

OTP sent to mobile.

Citizen verifies OTP.

Citizen profile created.

---

# STEP 2 — Complaint Submission

Citizen fills:

| Field | Example |
|---|---|
| Category | Electrical Issue |
| Subcategory | Street Light Not Working |
| Ward | Ward 12 |
| Description | Street light not working near Gandhi Chowk |
| Desired Resolution | Please repair urgently |
| Image | broken-light.jpg |
| GPS Location | Auto captured |

System generates:

```text
MNN-2026-000123
```

Status:

```text
SUBMITTED
```

Citizen receives:

- SMS
- Dashboard notification
- Tracking ID

---

# STEP 3 — Admin Assignment

Admin dashboard shows:

| Complaint ID | Category | Ward |
|---|---|---|
| MNN-2026-000123 | Electrical | 12 |

Admin assigns:

```text
Electrical Department
```

To:

```text
DH Amit Kumar
```

Status:

```text
DEPT_ASSIGNED
```

---

# STEP 4 — DH Assignment

DH dashboard shows:

```text
Pending Assignment
```

DH selects:

| Field | Value |
|---|---|
| Shakha | South Zone Electrical Team |
| Staff | Rajesh Kumar |

Status:

```text
STAFF_ASSIGNED
```

---

# STEP 5 — Staff Work Flow

Staff receives:

- SMS
- In-app notification
- Dashboard task

Staff:

- visits location
- updates status
- uploads work proof
- uploads GPS coordinates
- uploads images/videos

Statuses:

```text
ACKNOWLEDGED
→ IN_PROGRESS
→ PENDING_VERIFY
```

---

# STEP 6 — DH Verification

DH reviews:

- before image
- after image
- GPS proof
- completion remarks
- timestamps

If valid:

```text
RESOLVED
```

Citizen notified.

---

# STEP 7 — Citizen Review

Citizen sees:

- before image
- after image
- map location
- completion remarks
- completion time

Options:

```text
✓ Accept Resolution
✗ Raise Objection
```

---

# STEP 8A — Citizen Accepts

Status:

```text
CLOSED
```

Citizen may:

- rate staff
- provide feedback

---

# STEP 8B — Citizen Raises Objection

Citizen uploads:

- new image
- reason
- proof

Status:

```text
REOPENED
→ ESCALATED
```

DH/Admin notified.

Complaint re-enters workflow.

---

# 6. Complaint Lifecycle States

| State | Meaning |
|---|---|
| SUBMITTED | Complaint registered |
| DEPT_ASSIGNED | Assigned to department |
| STAFF_ASSIGNED | Assigned to staff |
| ACKNOWLEDGED | Staff accepted |
| IN_PROGRESS | Work started |
| PENDING_VERIFY | Awaiting DH verification |
| RESOLVED | Verified by DH |
| CITIZEN_REVIEW_PENDING | Waiting for citizen confirmation |
| REOPENED | Citizen objected |
| ESCALATED | Escalation triggered |
| CLOSED | Final closure |

---

# 7. PostgreSQL Database Tables

# Authentication & Users

1. users
2. citizens
3. otp_verifications
4. login_logs
5. audit_logs

---

# Organization Structure

6. departments
7. shakhas
8. wards

---

# Complaint Categories

9. issue_types
10. issue_subtypes

---

# Grievance Core

11. grievances
12. grievance_attachments
13. grievance_assignments
14. grievance_status_history
15. grievance_timeline

---

# Resolution System

16. resolution_evidence
17. objection_requests
18. citizen_feedback

---

# Escalation & SLA

19. escalations
20. holiday_calendar
21. sla_extensions

---

# Notification System

22. notifications
23. notification_templates

---

# Performance & Analytics

24. staff_performance_profiles
25. performance_records

---

# Configuration

26. system_configurations

---

# 8. Most Important Table — grievances

Stores:

- complaint
- citizen
- location
- status
- SLA
- assignment
- tracking
- ratings
- timings

Important fields:

| Field | Purpose |
|---|---|
| grievance_code | Tracking ID |
| current_status | Workflow state |
| current_assignee_id | Current staff |
| citizen_latitude | Complaint location |
| sla_deadline | SLA tracking |
| resolved_at | Completion timing |
| citizen_rating | Satisfaction |
| objection_count | Accountability |

---

# 9. Resolution Evidence System

The system stores:

- before images
- after images
- videos
- documents
- GPS coordinates
- completion time
- staff remarks

This prevents:

- fake resolutions
- corruption
- remote fake uploads

---

# 10. GPS Verification System

# Citizen Side

Complaint location captured.

---

# Staff Side

Resolution location captured.

---

# Fraud Detection

System compares:

| Citizen Location | Staff Upload Location |
|---|---|
| Gandhi Chowk | Office Building |

Large mismatch → possible fake work.

---

# 11. Performance Ranking System

# Staff Score Formula

```text
Score = SLA_Hours − Actual_TAT_Hours
```

---

# Positive Points

| Action | Points |
|---|---|
| Resolved before SLA | +10 |
| Citizen 5-star rating | +5 |
| No objection | +2 |

---

# Negative Points

| Action | Penalty |
|---|---|
| SLA breach | -10 |
| Citizen objection | -15 |
| Fake resolution | -30 |
| Escalation | -20 |

---

# Rankings

Visible:

- department-wise
- shakha-wise
- city-wide

---

# 12. SLA Monitoring Engine

Each category has SLA.

Examples:

| Category | SLA |
|---|---|
| Water Supply | 1 Day |
| Garbage | 3 Days |
| Road Damage | 7 Days |

---

# SLA Features

- countdown timers
- breach alerts
- auto escalation
- DH notifications
- Admin monitoring

---

# 13. Notification System

Channels:

| Channel | Usage |
|---|---|
| SMS | Critical updates |
| Email | Reports/details |
| In-App | Dashboard updates |
| WhatsApp | Optional |

---

# Notification Triggers

| Event | Recipient |
|---|---|
| Complaint Submitted | Citizen |
| Assigned to DH | DH |
| Assigned to Staff | Staff |
| Work Started | Citizen |
| Complaint Resolved | Citizen |
| Objection Raised | Admin + DH |
| SLA Breach | Admin + DH |

---

# 14. Dashboard Modules

# Citizen Dashboard

Features:

- complaint history
- live tracking
- resolution proof
- objections
- notifications
- ratings

---

# Admin Dashboard

Features:

- city-wide monitoring
- assignment queue
- SLA monitoring
- analytics
- staff rankings
- reports
- heatmaps

---

# DH Dashboard

Features:

- department queue
- staff assignment
- reassignment
- verification
- departmental analytics

---

# Staff Dashboard

Features:

- assigned tasks
- SLA countdown
- GPS upload
- image upload
- work updates
- performance metrics

---

# 15. Security Features

- OTP authentication
- JWT sessions
- RBAC middleware
- bcrypt password hashing
- SQL injection protection
- XSS protection
- CSRF protection
- audit logging
- immutable timelines

---

# 16. Reports & Analytics

Reports:

- ward-wise complaints
- category analytics
- department performance
- SLA breach reports
- citizen satisfaction
- monthly rankings

Export formats:

- PDF
- Excel
- CSV

---

# 17. Recommended Technology Stack

# Frontend

- Next.js 15
- TypeScript
- Tailwind CSS
- React Query
- Zustand/Redux

---

# Backend

- Next.js APIs / Express
- Prisma ORM
- PostgreSQL
- Redis
- BullMQ

---

# Storage

- Cloudinary
- AWS S3
- MinIO

---

# Notifications

- Twilio
- MSG91
- Fast2SMS
- Nodemailer

---

# Maps

- Google Maps
- OpenStreetMap
- Leaflet

---

# Deployment

- Ubuntu
- Docker
- NGINX
- PM2
- AWS / Azure / NIC

---

# 18. Suggested Folder Structure

```text
/app
/api
/components
/modules
/lib
/hooks
/services
/prisma
/types
/utils
/middleware
```

---

# 19. Future Enhancements

- AI duplicate detection
- WhatsApp chatbot
- Mobile app
- GIS analytics
- OCR processing
- Voice complaints
- Aadhaar integration
- AI categorization
- Predictive SLA monitoring

---

# 20. Final Summary

This system provides:

✅ Real Indian municipal workflow
✅ Citizen accountability
✅ Transparent governance
✅ GPS-based verification
✅ Staff performance tracking
✅ Anti-corruption workflow
✅ End-to-end grievance lifecycle
✅ Enterprise-grade PostgreSQL architecture
✅ Smart City scalability
✅ Government audit compliance

The platform is suitable for:

- Nagar Nigam
- Smart Cities
- Municipal Corporations
- State Urban Development Departments
- e-Governance deployments

