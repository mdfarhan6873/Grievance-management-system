# Product Requirements Document (PRD)
# Indian Municipal Grievance Redressal Portal

Version: 1.0
Target Stack: PostgreSQL + Next.js + TypeScript + RBAC Workflow Engine
Prepared For: Municipal Corporation / Nagar Nigam Deployment

---

# 1. Product Overview

The Municipal Grievance Redressal Portal is a web-based complaint management system designed for Indian Urban Local Bodies (ULBs), Nagar Nigam, Municipal Corporations, and Government Administrative Departments.

The platform enables:

- Citizens to submit civic complaints online
- Government officials to manage complaints through hierarchical workflows
- Departments to track service-level performance
- Authorities to monitor SLA breaches and staff productivity
- Citizens to verify whether complaints were actually resolved

The system follows Indian e-Governance grievance handling patterns similar to:

- CPGRAMS
- Swachhata App
- Municipal Corporation Complaint Systems
- State Smart City Portals

The system is designed with:

- OTP-based citizen verification
- Role-Based Access Control (RBAC)
- Department workflows
- Shakha/subsection routing
- Timeline audit tracking
- SLA monitoring
- Escalation engine
- Citizen objection system
- Staff ranking engine
- Bilingual support (English + Hindi)

---

# 2. System Actors

## 2.1 Citizen

Capabilities:

- OTP verification
- Submit grievances
- Track grievances
- View dashboard
- Raise objections
- Re-open complaints
- Rate resolution
- View history

Authentication:

- Mobile OTP only

---

## 2.2 Admin (Municipal Commissioner / Office Admin)

Capabilities:

- Manage all grievances
- Assign grievances to departments
- Transfer grievances across departments
- Manage users
- Manage roles
- Configure SLA
- View analytics
- View performance rankings
- Monitor escalations

Authentication:

- OTP + Password

---

## 2.3 Department Head (DH / Vibhag Prabhari)

Capabilities:

- View department grievances
- Assign grievances to staff
- Reassign within department
- Verify resolution
- View departmental analytics
- Monitor SLA

---

## 2.4 Staff / Shakha Karmi

Capabilities:

- View assigned grievances
- Update status
- Upload resolution evidence
- Add remarks
- Escalate grievances
- View own ranking

---

# 3. System Architecture

## Frontend

- Next.js 15
- TypeScript
- Tailwind CSS
- Responsive Design
- PWA-ready

---

## Backend

- Next.js API Routes / Express APIs
- PostgreSQL 15+
- Prisma ORM
- JWT Authentication
- OTP Verification Layer
- RBAC Middleware

---

## Storage

- Cloudinary / S3-compatible storage
- PDF storage
- Evidence storage

---

## Notifications

- SMS Gateway
- Email Gateway
- WhatsApp Integration (optional)
- In-App Notifications

---

# 4. Core Workflow

# 4.1 Citizen Complaint Flow

## Step 1 — Citizen Verification

Citizen enters:

- Name
- Mobile Number
- Email (optional)

System sends OTP.

Citizen verifies OTP.

System creates citizen profile.

---

## Step 2 — Complaint Submission

Citizen submits:

- Ward
- Category
- Subcategory
- Description
- Desired Resolution
- Attachments
- Geo-location

---

## Step 3 — Duplicate Complaint Validation

System checks:

- Same citizen
- Same category
- Same ward
- Status != CLOSED

If active complaint exists:

System blocks new complaint and shows:

- Existing grievance ID
- Current status
- Track button

---

## Step 4 — Complaint Registration

System generates:

MNN-YYYY-XXXXXX

Example:

MNN-2026-004821

System stores:

- Complaint
- Timeline event
- Citizen data snapshot

---

## Step 5 — Citizen Notifications

Citizen receives:

- SMS
- Email (optional)
- Dashboard notification

---

# 4.2 Admin Assignment Workflow

## New Complaint Queue

Admin dashboard shows:

- Unassigned complaints
- SLA countdown
- Ward map
- Filters

---

## Department Assignment

Admin assigns grievance to:

- Department
- DH

System stores:

- Assigned by
- Assigned to
- Timestamp
- Notes

Notifications sent to:

- DH
- Department

---

# 4.3 Department Workflow

DH receives grievance.

DH may:

- Assign to staff
- Reassign within department
- Add instructions
- Monitor SLA

Assignment recorded in timeline.

---

# 4.4 Staff Workflow

Staff receives grievance.

Staff workflow:

STAFF_ASSIGNED
→ ACKNOWLEDGED
→ IN_PROGRESS
→ PENDING_VERIFY

Staff uploads:

- Work photos
- Evidence
- Resolution notes

---

# 4.5 DH Verification Workflow

DH reviews:

- Evidence
- Remarks
- Work quality

DH may:

- Verify resolution
- Reject and send back

If verified:

Status becomes:

RESOLVED

---

# 4.6 Citizen Confirmation Workflow

Citizen receives:

“Your grievance has been resolved.”

Citizen options:

- Accept Resolution
- Raise Objection

Citizen has 15 days.

---

# 4.7 Objection Workflow

If citizen objects:

Status becomes:

REOPENED
→ ESCALATED

Admin and DH notified.

Staff performance penalized.

Citizen must provide:

- Reason
- Optional evidence

---

# 4.8 Auto Closure Workflow

If no objection within 15 days:

System auto closes grievance.

Status:

CLOSED

Timeline updated.

---

# 5. Grievance Lifecycle States

| State | Description |
|---|---|
| SUBMITTED | Complaint submitted |
| DEPT_ASSIGNED | Assigned to department |
| STAFF_ASSIGNED | Assigned to staff |
| ACKNOWLEDGED | Staff accepted complaint |
| IN_PROGRESS | Work started |
| PENDING_VERIFY | Awaiting DH verification |
| RESOLVED | Verified by DH |
| CITIZEN_REVIEW_PENDING | Waiting for citizen response |
| REOPENED | Citizen objected |
| ESCALATED | SLA breach/escalation |
| CLOSED | Final closure |

---

# 6. Database Design

# 6.1 users

Stores internal system users.

| Column | Type |
|---|---|
| id | UUID PK |
| full_name | VARCHAR(100) |
| mobile | VARCHAR(15) UNIQUE |
| email | VARCHAR(120) |
| password_hash | TEXT |
| role | ENUM |
| department_id | FK |
| shakha_id | FK |
| is_active | BOOLEAN |
| failed_login_attempts | INTEGER |
| account_locked_until | TIMESTAMP |
| last_login_at | TIMESTAMP |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

# 6.2 citizens

| Column | Type |
|---|---|
| id | UUID PK |
| full_name | VARCHAR(100) |
| mobile | VARCHAR(15) UNIQUE |
| email | VARCHAR(120) |
| is_mobile_verified | BOOLEAN |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

# 6.3 otp_verifications

| Column | Type |
|---|---|
| id | UUID PK |
| mobile | VARCHAR(15) |
| otp_code | VARCHAR(10) |
| expires_at | TIMESTAMP |
| verified | BOOLEAN |
| created_at | TIMESTAMP |

---

# 6.4 departments

| Column | Type |
|---|---|
| id | UUID PK |
| name | VARCHAR(150) |
| contact_email | VARCHAR(120) |
| contact_phone | VARCHAR(20) |
| dept_head_user_id | UUID FK |
| is_active | BOOLEAN |
| created_at | TIMESTAMP |

---

# 6.5 shakhas

| Column | Type |
|---|---|
| id | UUID PK |
| department_id | UUID FK |
| name | VARCHAR(120) |
| supervisor_user_id | UUID FK |
| created_at | TIMESTAMP |

---

# 6.6 wards

| Column | Type |
|---|---|
| id | UUID PK |
| ward_number | VARCHAR(20) |
| ward_name | VARCHAR(120) |
| geo_json | JSONB |
| created_at | TIMESTAMP |

---

# 6.7 issue_types

| Column | Type |
|---|---|
| id | UUID PK |
| category_name | VARCHAR(150) |
| default_department_id | UUID FK |
| sla_days | INTEGER |
| is_active | BOOLEAN |
| created_at | TIMESTAMP |

---

# 6.8 issue_subtypes

| Column | Type |
|---|---|
| id | UUID PK |
| issue_type_id | UUID FK |
| name | VARCHAR(150) |
| is_active | BOOLEAN |

---

# 6.9 grievances

Main complaint table.

| Column | Type |
|---|---|
| id | UUID PK |
| grievance_code | VARCHAR(30) UNIQUE |
| citizen_id | UUID FK |
| ward_id | UUID FK |
| issue_type_id | UUID FK |
| issue_subtype_id | UUID FK |
| description | TEXT |
| desired_resolution | TEXT |
| latitude | DECIMAL(10,8) |
| longitude | DECIMAL(11,8) |
| current_status | ENUM |
| current_department_id | UUID FK |
| current_assignee_id | UUID FK |
| sla_deadline | TIMESTAMP |
| submitted_at | TIMESTAMP |
| acknowledged_at | TIMESTAMP |
| resolved_at | TIMESTAMP |
| closed_at | TIMESTAMP |
| reopened_at | TIMESTAMP |
| citizen_confirmation_status | ENUM |
| citizen_reviewed_at | TIMESTAMP |
| citizen_rating | INTEGER |
| citizen_feedback | VARCHAR(200) |
| is_escalated | BOOLEAN |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

# 6.10 grievance_attachments

| Column | Type |
|---|---|
| id | UUID PK |
| grievance_id | UUID FK |
| uploaded_by | UUID FK |
| file_url | TEXT |
| file_type | VARCHAR(50) |
| file_size | BIGINT |
| attachment_type | ENUM |
| created_at | TIMESTAMP |

---

# 6.11 grievance_timeline

Stores all workflow events.

| Column | Type |
|---|---|
| id | UUID PK |
| grievance_id | UUID FK |
| event_type | VARCHAR(100) |
| old_value | TEXT |
| new_value | TEXT |
| actor_id | UUID FK |
| actor_role | VARCHAR(50) |
| remarks | TEXT |
| created_at | TIMESTAMP |

---

# 6.12 grievance_assignments

| Column | Type |
|---|---|
| id | UUID PK |
| grievance_id | UUID FK |
| assigned_by | UUID FK |
| assigned_to | UUID FK |
| department_id | UUID FK |
| shakha_id | UUID FK |
| assignment_type | ENUM |
| reason | TEXT |
| assigned_at | TIMESTAMP |
| unassigned_at | TIMESTAMP |

---

# 6.13 grievance_status_history

| Column | Type |
|---|---|
| id | UUID PK |
| grievance_id | UUID FK |
| old_status | VARCHAR(50) |
| new_status | VARCHAR(50) |
| changed_by | UUID FK |
| remarks | TEXT |
| created_at | TIMESTAMP |

---

# 6.14 objection_requests

Citizen objection system.

| Column | Type |
|---|---|
| id | UUID PK |
| grievance_id | UUID FK |
| citizen_id | UUID FK |
| objection_reason | TEXT |
| evidence_attachment | TEXT |
| review_status | ENUM |
| reviewed_by | UUID FK |
| admin_remarks | TEXT |
| created_at | TIMESTAMP |

---

# 6.15 escalations

| Column | Type |
|---|---|
| id | UUID PK |
| grievance_id | UUID FK |
| escalated_by | UUID FK |
| escalation_reason | TEXT |
| escalation_type | ENUM |
| created_at | TIMESTAMP |

---

# 6.16 notifications

| Column | Type |
|---|---|
| id | UUID PK |
| recipient_user_id | UUID FK |
| recipient_citizen_id | UUID FK |
| grievance_id | UUID FK |
| channel | ENUM |
| title | VARCHAR(200) |
| message | TEXT |
| delivery_status | ENUM |
| sent_at | TIMESTAMP |
| read_at | TIMESTAMP |

---

# 6.17 performance_records

| Column | Type |
|---|---|
| id | UUID PK |
| staff_user_id | UUID FK |
| grievance_id | UUID FK |
| assigned_at | TIMESTAMP |
| resolved_at | TIMESTAMP |
| tat_hours | NUMERIC |
| sla_hours | NUMERIC |
| score_delta | NUMERIC |
| computed_at | TIMESTAMP |

---

# 6.18 holiday_calendar

| Column | Type |
|---|---|
| id | UUID PK |
| holiday_date | DATE |
| title | VARCHAR(150) |
| is_active | BOOLEAN |

---

# 6.19 login_logs

| Column | Type |
|---|---|
| id | UUID PK |
| user_id | UUID FK |
| mobile | VARCHAR(20) |
| success | BOOLEAN |
| ip_address | VARCHAR(100) |
| created_at | TIMESTAMP |

---

# 6.20 audit_logs

| Column | Type |
|---|---|
| id | UUID PK |
| user_id | UUID FK |
| action | VARCHAR(200) |
| entity_type | VARCHAR(100) |
| entity_id | UUID |
| ip_address | VARCHAR(100) |
| user_agent | TEXT |
| metadata | JSONB |
| created_at | TIMESTAMP |

---

# 7. Relationship Mapping

## One-to-Many Relationships

| Parent | Child |
|---|---|
| Department | Users |
| Department | Shakhas |
| Citizen | Grievances |
| Ward | Grievances |
| IssueType | Grievances |
| Grievance | Attachments |
| Grievance | Timeline |
| Grievance | Notifications |
| Grievance | Assignments |
| Grievance | Status History |
| Staff | Performance Records |

---

# 8. SLA Engine

## SLA Rules

Each category has SLA days.

Example:

| Category | SLA |
|---|---|
| Water Supply | 1 Day |
| Garbage | 3 Days |
| Road Damage | 7 Days |

---

## SLA Monitoring

System runs scheduler every 5 minutes.

Checks:

- approaching SLA
- breached SLA
- escalated grievances

Notifications triggered automatically.

---

# 9. Performance Ranking Engine

# Formula

Score = SLA_Hours − Actual_TAT_Hours

Positive:

- Early resolution

Negative:

- Late resolution
- Escalation
- Citizen objection

---

# Leaderboards

Displayed:

- Shakha-wise
- Department-wise
- Municipal-wide

---

# 10. Notification System

# Notification Channels

| Channel | Use |
|---|---|
| SMS | Critical alerts |
| Email | Detailed reports |
| In-App | Dashboard updates |
| WhatsApp | Optional future integration |

---

# Notification Triggers

| Event | Recipient |
|---|---|
| Complaint Submitted | Citizen |
| Assigned to DH | DH |
| Assigned to Staff | Staff |
| Status Updated | Citizen |
| SLA Breach | Admin + DH |
| Objection Raised | Admin + DH |
| Resolution Completed | Citizen |

---

# 11. Security Requirements

## Authentication

- OTP authentication
- JWT sessions
- Session expiry
- Role-based middleware

---

## Data Protection

- TLS encryption
- bcrypt hashing
- CSRF protection
- XSS protection
- SQL injection prevention

---

## Audit Requirements

Every critical action logged:

- login
- assignment
- transfer
- status change
- objection
- escalation

---

# 12. Dashboard Modules

# Citizen Dashboard

Features:

- Complaint history
- Status timeline
- Track complaint
- Raise objection
- Rate resolution
- Notifications

---

# Admin Dashboard

Features:

- Analytics
- Assignment queue
- Department load
- Heatmaps
- SLA monitoring
- Staff rankings
- Reports
- User management

---

# DH Dashboard

Features:

- Department queue
- Staff assignment
- Reassignment
- Verification
- Department rankings

---

# Staff Dashboard

Features:

- Assigned grievances
- SLA countdown
- Upload evidence
- Update status
- Performance metrics

---

# 13. Reporting Module

Reports:

- Ward-wise complaints
- Department performance
- SLA breach reports
- Staff rankings
- Monthly analytics
- Citizen satisfaction reports

Export formats:

- PDF
- Excel
- CSV

---

# 14. Scalability Requirements

System should support:

- 500 concurrent users
- 5,000+ grievances/month
- Horizontal scaling
- Background job queues

---

# 15. Recommended PostgreSQL Features

Use:

- UUID primary keys
- ENUMs
- JSONB columns
- GIN indexing
- Full-text search
- Materialized views
- Partitioning for logs
- Triggers for audit logging

---

# 16. Recommended Backend Services

# Core Services

- Auth Service
- OTP Service
- Grievance Service
- Workflow Engine
- Notification Service
- SLA Monitoring Service
- Ranking Engine
- Audit Service
- Reporting Service

---

# 17. Suggested API Modules

| Module | Purpose |
|---|---|
| /api/auth | OTP/login |
| /api/grievances | Complaint operations |
| /api/admin | Admin features |
| /api/dh | DH operations |
| /api/staff | Staff operations |
| /api/notifications | Notifications |
| /api/reports | Analytics |
| /api/rankings | Performance rankings |
| /api/configurations | SLA/settings |

---

# 18. Recommended Deployment

## Infrastructure

- Ubuntu Server
- NGINX
- PM2 / Docker
- PostgreSQL
- Redis

---

## Cloud

- NIC / State Datacenter
- AWS
- Azure
- DigitalOcean

---

# 19. Future Enhancements

- AI duplicate detection
- WhatsApp chatbot
- GIS ward analytics
- Voice complaint system
- Aadhaar integration
- Mobile app
- OCR document reading
- AI grievance categorization
- Predictive SLA alerts

---

# 20. Final System Summary

The proposed architecture provides:

- End-to-end grievance lifecycle management
- Citizen accountability
- Government workflow transparency
- SLA-based monitoring
- Anti-corruption mechanisms
- Evidence-based resolution verification
- Staff performance analytics
- Audit-compliant governance records

The system is production-ready for Indian municipal governance deployments and scalable for Smart City and State Government integrations.

