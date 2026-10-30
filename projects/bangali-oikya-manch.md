---
title: "Bangali Oikya Manch case study: case management platform"
description: "An applicant portal and case management system for Bangali Oikya Manch. Reported cases a day: 5 to 6 by hand, 30 to 40 on a typical day with the platform."
url: "https://ndcompany.in/projects/bangali-oikya-manch"
type: "CreativeWork"
image: "https://ndcompany.in/assets/projects/bangali-oikya-manch-16x9.png"
---

Software · Bangali Oikya Manch

# Bangali Oikya Manch case study: a case management platform

An applicant portal and case management system for Bangali Oikya Manch, a community service organisation. Reported cases a day: about 5 to 6 by hand and 30 to 40 on a typical day with the platform.

- **Client:** Bangali Oikya Manch
- **Place:** Madhyamgram, West Bengal
- **Service:** [Software Development](https://ndcompany.in/services/software-development)
- **Categories:** [Software](https://ndcompany.in/projects?category=software), [Systems](https://ndcompany.in/projects?category=systems)
- **Roles:** Applicant, admin, super admin
- **Built with:** PHP, MySQL-compatible database
- **Access:** Private
- **Engagement:** Sponsored by N&D Co., free of charge

## Overview

For Bangali Oikya Manch, a community service organisation, N&D Co. built an applicant portal joined to an internal case management system, with one record per case. By the organisation's own figures, which it has confirmed, daily cases went from about 5 to 6 by hand to 30 to 40 on a typical day with the platform.

The platform handles the application forms applicants fill in, from registration to final approval. Applicants register, verify their email with a one-time code, fill in their application form, upload documents and follow their case. Staff assign and review each case, send instructions, approve it in two stages and generate supporting documents from templates. The organisation's team then helps submit the application in front of the applicant.

The busiest day reached 75 or more cases, and the results section below explains how to read each figure. The project came to us through a referral, and we sponsored it: we built the platform, one of our [software development](https://ndcompany.in/services/software-development) projects, free of charge as a contribution to the organisation's community service work, to increase its ability to help applicants. The platform's pages were public at first; Bangali Oikya Manch has since made the whole platform private for internal reasons.

## About Bangali Oikya Manch

![Bangali Oikya Manch logo](https://ndcompany.in/assets/images/projects/bangali-oikya-manch-logo.webp)

Bangali Oikya Manch is a nonprofit community service organisation in Madhyamgram, West Bengal. Its YouTube channel describes its aims as standing by people in times of trouble, strengthening community roots and ties, and bringing together people who came from Bangladesh with few resources to support their economic and social development. It shares its work on Facebook and YouTube.

It works with applicants who may need help with complex administrative and documentation processes, and that work involves more than collecting a form. Applicants may need to give structured personal and family information, supporting documents and details specific to their case, and the organisation has to review all of it, arrange appointments, keep track of where each case stands and prepare the paperwork that goes with it.

The platform's home page, which we built with the rest of it, opens with a Bengali banner and the organisation's own logo, and its English menu includes About, Services, Flowchart and Guidelines, with buttons to log in and register. The services page lists four kinds of help: online form submission, appointment management, support from administrators and notifications.

Sources: [Bangali Oikya Manch on Facebook](https://www.facebook.com/p/Bangali-Oikya-Manch-%E0%A6%AC%E0%A6%BE%E0%A6%99%E0%A6%BE%E0%A6%B2%E0%A6%BF-%E0%A6%90%E0%A6%95%E0%A7%8D%E0%A6%AF-%E0%A6%AE%E0%A6%9E%E0%A7%8D%E0%A6%9A-61576807298140/), [Bangali Oikya Manch on YouTube](https://www.youtube.com/@BangaliOikyaManch).

## What Bangali Oikya Manch needed

Before the platform, Bangali Oikya Manch managed applicants, documents, appointments and case status mostly by hand. As the number of applicants grew, so did the time it took to find information, track documents, coordinate staff and tell each applicant what came next, and that overhead became the bottleneck.

- Applicant information was collected and tracked on paper and by hand.
- Supporting documents had to be collected, sorted and checked by hand.
- Appointments were arranged separately from the rest of the case.
- It was hard to see at a glance where an application stood.
- Staff had to find a record before they could act on it.
- Following up with applicants meant the same conversations again and again.
- Every rise in applicant numbers added admin work at several points in the process.

The bottleneck at Bangali Oikya Manch was information moving between applicants, staff, documents, appointments and administrative decisions. In outline, a case in the old model went through a chain of steps: the applicant's details on paper, staff notes, documents, appointment tracking, status tracking and repeated follow-up, and only then completion. One case could need the same personal details, documents, status updates, appointments and instructions handled several times over, which is why we built the platform around a single case record. As we read it, too much staff time went on coordination that software could bring into one place.

### What the platform had to do

- One source of truth for applicant and case information.
- Structured online forms in place of repeated paper intake.
- Document collection and review in one place.
- Clear responsibility, with each case assigned to an administrator.
- A status lifecycle that staff manage the same way for every case.
- A self-service portal for applicants.
- Less repeated follow-up, through notifications and instructions.
- Appointment information tied to the case.
- Standard supporting documents generated from the stored application data.
- Reports, exports and a record of activity.
- More capacity without simply scaling up the manual process.

## What we did

[Software Development](https://ndcompany.in/services/software-development)

### An applicant portal and a case management system around one case record

The platform N&D Co. built for Bangali Oikya Manch has two connected sides. On the applicant side, in Bengali and English, people read about the process and the services, then register and log in; inside the portal they fill in their application, upload documents, check their status and instructions and download the documents generated for them. On the internal side, administrators work through queues of assigned cases, and super administrators assign cases, give final approval and manage users; both can open reports and the activity log. The home and information pages count as [website design and development](https://ndcompany.in/services/website-design-development) work; the rest is custom workflow software.

We approached the project as a workflow problem. An online form would only have handled intake, and after submission each application still needs assignment, review, documents, instructions, status changes, appointments, generated documents and oversight. So the platform treats an application as a case with a lifecycle, and we connected every task to that case instead of building isolated features.

Everything about a case is linked to one record: the applicant's details, documents, status, assigned administrator, instructions and their history, appointment details and generated documents. An instruction from an administrator appears on the applicant's dashboard and goes out by email, and a status change sends a notification in the portal, plus an email where that is set up.

- Home and information pages: services, login and registration
- The application process flowchart shown on the home page
- Applicant portal: application form, documents, status, instructions and downloads
- Sign-in with an 8-digit one-time code (OTP) sent by email
- Administrator workspace: assigned queues, review, status changes and instructions
- Super administrator oversight: assignment, final approval and user management
- Document management linked to each case
- Notifications in the portal and by email
- Appointment records linked to each case
- Supporting documents generated from Word templates
- Reports with PDF and CSV export
- Activity and system logs

*The home page, in Bengali, open on a laptop.*

## Reported results: 30 to 40 cases on a typical day, up from 5 to 6

By its own figures, which it has confirmed for this case study, Bangali Oikya Manch handled about 5 to 6 cases a day with its manual process. With the platform in use, a typical day is about 30 to 40 cases, and the busiest day reached 75 or more. They are the organisation's figures rather than an audit, and the list further down says how to read them.

- **cases a day with the manual process (reported):** 5 to 6
- **cases on a typical day with the platform (reported):** 30 to 40
- **cases on the busiest reported day, a lower bound:** 75+
- **the busiest reported day against the old maximum of 6, a lower bound (our calculation):** 12.5×

Cases handled a day, as reported

**Cases handled a day, as reported**

| Period | Value |
| --- | --- |
| Manual process | 5 to 6 |
| Typical day with the platform | 30 to 40 |
| Busiest reported day | 75+ |

*Each column is drawn at the cautious end of its figure: 6, the top of the old range; 30, the bottom of the typical range; and 75, the floor of the reported peak. The labels give the figures as they were reported. Source: Bangali Oikya Manch's figures, confirmed for this case study.*

Cases a day as a multiple of the old maximum of 6 (our calculation)

**Cases a day as a multiple of the old maximum of 6 (our calculation)**

| Category | Value (×) |
| --- | --- |
| Old maximum, 6 a day | 1 |
| 30 a day, low end of a typical day | 5 |
| 40 a day, high end of a typical day | 6.7 |
| 75 or more a day, the reported peak | 12.5× or more |

*Each reported figure is divided by 6, the top of the old range of 5 to 6. 40 divided by 6 is 6.67, shown as 6.7. The peak was 75 or more, so its multiple is at least 12.5. Source: N&D Co. calculation from Bangali Oikya Manch's figures.*

### What changed for applicants, staff and management

Applicants have a workspace they come back to, so they no longer have to treat every contact with the organisation as a separate exchange. Staff work from queues and case records instead of piecing a case together from paper, files and messages, and management can see every case, who is responsible for it, how cases split across statuses and what has happened in the system.

As we read it, staff can spend less time rebuilding and coordinating cases and more time supporting applicants.

### How should the reported figures be read?

- The multiples are our calculation: against the old maximum of 6, a typical day is 5 to 6.7 times as many cases and the busiest reported day at least 12.5 times. Dividing by 6 rather than 5 keeps them on the low side.
- 75+ is a lower bound for the busiest reported day, not a measure of the platform's maximum capacity.
- Bangali Oikya Manch has confirmed these figures for this case study, along with what counts as one case in them.
- Staffing or process changes at the organisation are not ruled out, so we do not credit the whole rise to the software.
- The numbers on the reports screen further down come from test data and have nothing to do with these figures.

## What did the platform replace?

The platform replaced paper intake, case records and documents tracked by hand, manual assignment and status tracking, repeated follow-up with applicants, separately arranged appointments and paperwork prepared by hand each time. The table compares the two ways of working area by area; the last column is our reading of what each change does, not a measured result.

**The manual process and the platform, area by area**

| Area | Before | After | What it changes |
| --- | --- | --- | --- |
| Applicant intake | Paper and manual entry | A structured online form | More consistent data |
| Case records | Scattered and kept by hand | One central case record | Less hunting for records |
| Documents | Tracked by hand | Managed digitally and linked to the case | Clearer document status |
| Assignment | Coordinated by hand | An assignment workflow | Clear responsibility |
| Status | Tracked by hand | A digital status lifecycle | Faster day-to-day decisions |
| Updates to applicants | Repeated follow-up | Notifications and instructions | Clearer next steps |
| Appointments | Arranged separately, by hand | A record linked to the case | Less scattered scheduling |
| Generated paperwork | Prepared by hand each time | Generated from templates | Less repeated preparation |
| Reporting | Only what staff could check by hand | Dashboards and exports | A view across the organisation |
| Traceability | A paper trail kept by hand | Activity and workflow history | Easier tracing |

## How does an application move through the platform?

An application moves through three roles. The applicant registers, verifies their email with a one-time code and submits the form. A super administrator assigns it to an administrator, who approves it, puts it on hold with a query or sends it back. The super administrator then gives final approval and sets a date and time for the applicant to come in with their original documents.

1. The applicant registers with their name, date of birth, phone number and email address.
2. They verify the email address with a one-time code (OTP) and log in.
3. They fill in their personal and family details and upload documents, a photo and a signature.
4. They submit the application.
5. A super administrator receives it and assigns it to an administrator.
6. The administrator reviews the application and its documents, then approves it, puts it on hold with a query, or sends it back to the super administrator for clarification.
7. Once approved, the form is locked against edits by the applicant and waits with the other approved applications for the super administrator.
8. The super administrator gives the organisation's final approval and sets a date and time for the applicant to come in.
9. The supporting documents for the affidavit are generated and printed.
10. The applicant brings the originals and the affidavit copies at the given date and time.
11. The organisation's team helps submit the application in front of the applicant.

*The application flowchart we drew for the platform, which also appears on its home page.*

A send-back goes to the super administrator for clarification, then returns to the administrator's review. Comments from the applicant, the administrator and the super administrator are visible to all three, so a query and its answer stay together on the case.

### When an application needs attention

**What happens when an application needs attention**

| Situation | What happens |
| --- | --- |
| A document is missing or wrong | The administrator removes it or asks for a new one, the applicant gets an instruction or notification and uploads a replacement, and the administrator reviews it again. |
| The details need correcting | The administrator puts the case on hold with a query for documents or information and records an instruction, the applicant sees what to change, updates the form and resubmits, and the review resumes. |

These paths are what make the system useful from day to day, and handling them as well as successful submissions was one of the harder parts of the build.

### What messages does an applicant get?

**Events that send the applicant a message**

| Event | What the applicant gets |
| --- | --- |
| Registration | A welcome message about the new account |
| Sign-in or email check | An email with a one-time code (a sign-in code is valid for 5 minutes) |
| Form submitted | A confirmation |
| Status changed | A notification in the portal, and an email where that is set up |
| Instruction added | The instruction, saved on the case, shown on the dashboard and sent by email |
| Document removed | A notice can tell them the document needs replacing |

The aim is less chasing for updates by hand.

### How are appointments handled?

Each appointment is stored with the applicant and the case it concerns, as part of the case workflow: the applicant's dashboard shows an appointment tile, and the date and time set at final approval is when the applicant comes in with the originals. The organisation's services page describes the appointment service as meetings with administrators, who are assigned by location, with flexible scheduling, appointment notifications and options to reschedule or cancel; its notifications card adds appointment reminders.

## Who uses the platform: applicants, administrators and super administrators

Three roles share the platform, each with its own screens and permissions. Applicants manage their own case, administrators process the cases assigned to them, and super administrators oversee the work across the organisation.

**The three roles and what each can do**

| Role | Main job | What they can do |
| --- | --- | --- |
| Applicant | Provide and manage their own case information | Register, verify their email, fill in forms, upload documents, check their status, receive instructions and download generated documents |
| Administrator | Process the cases assigned to them | Review applications, check documents, change the status, send instructions, manage case documents, work through their queues and open reports and the activity log |
| Super administrator | Oversight across the organisation | Assign cases, give final approval, manage users and administrators, and use reports, exports and the activity log |

An applicant, an administrator and a super administrator should not see or control the same things. Keeping the roles apart gives the platform a base for least-privilege access (the principle that each account gets only the permissions its job needs) and supports clearer accountability at each step. Staff sign in with named accounts, so the actions the log records can be tied to the account that took them, and the most powerful accounts are kept apart from routine staff accounts. The screens follow the same model: each role has its own profile and badge, a case record lists the viewer's permissions (a super administrator can edit any form without being assigned to it), each administrator account carries a district, and the services page lists location-based assignment of administrators for appointments.

Accounts and cases are related but kept separate. An account has its own lifecycle, from creation to deletion, apart from the cases linked to it, and user management is a different screen from case management.

## The platform, screen by screen

The screens fall into three groups: the home page and applicant portal, the staff screens for case work, and the oversight screens for super administrators. Every picture comes from a test system filled with test records. Personal details are blurred, and the names left visible belong to test accounts. The home page is the large picture at the top of this page. Where we say what a screen changes for applicants or staff, that is our reading, not a measured result.

### The home page and the applicant portal

The home page leads with the process flowchart and buttons to register or log in, and the services page explains the help on offer, so applicants know what the service covers before they enter personal details, which can reduce unnecessary questions. A clear entry page should also mean less confusion before anyone reaches the signed-in part, where each case and its documents sit behind an account.

Logging in takes an email address and an 8-digit code sent to it; there is no password field. Behind the screen, the platform creates and verifies each code, lets it expire and can send a new one. It is a light check on the account, and sign-in stays simple.

Once in, applicants return to the same workspace instead of starting the intake again. Their dashboard shows the application's status, instructions from staff, an appointment tile, notifications and quick actions, and one account can hold several forms, up to a set limit. Approved forms list the documents generated for them, and every document is filed by form and category, so applicants do not have to manage separate email attachments or loose files.

*The services page explains the help on offer before anyone registers.*

*The login screen, with links to create an account, the privacy policy and the terms and conditions.*

*The one-time code arrives by email and expires after 5 minutes.*

*The applicant dashboard shows the status, staff instructions and next actions on one screen.*

*Each approved form lists the supporting documents generated for it.*

*The applicant's documents, filed by form and by category.*

*The applicant profile shows the role, account status and activity counts.*

### Staff screens: queues, case records and document management

An administrator's dashboard counts their cases by status (assigned, newly assigned, under review, approved, rejected and on hold) and filters the list the same way, with priority actions first, which spares staff from finding paper records and working out what to process next. The all forms view is the platform's master register: every application with its status, assigned administrator and submission time, searchable by status, name, email and date of birth or across all fields, so staff can find a case without searching physical folders. A case record puts the whole form on one screen (personal, family and marriage details, addresses, residence history and a neighbour's details) beside panels for the viewer's permissions, the assignment and the instruction history. That one screen should reduce the cross-checking between paper notes, files and messages.

From the record, staff check the case's documents to see what is there and what needs action, change the status with an instruction for the applicant and download the form as a PDF, and a super administrator can also edit the form data. An instruction is a workflow event with its own history: it changes what the applicant sees and stays on the case. For each approved form, the platform generates three supporting documents from templates, using the data already in the application: a Schedule 1C, a self declaration and an introducer certificate. Each one records who generated it and when, and producing them from templates reduces repeated copying and improves consistency. User lists export to PDF or CSV for use outside the live system.

*An administrator's queue, counted and filtered by status.*

*Administrator accounts carry their own role and permissions.*

*Every application in one searchable list, with its status and assigned administrator.*

*A full case record on one screen, filled with test values.*

*Staff with permission can view, download or delete each document on a case.*

*A status change and an instruction in one step, shown on the applicant's dashboard and sent by email.*

*Three supporting documents generated from templates for one approved form.*

*The export menu: a PDF report through the browser's print dialog, or a CSV file for spreadsheets.*

### Oversight: assignment, users, reports and logs

The super administrator's dashboard puts forms that still need an administrator first, then forms that administrators have approved and that wait for final review, with counts across the organisation and shortcuts to all forms, administrators, reports and logs. From there a super administrator can coordinate several administrators and see the whole pipeline. User management lists every account with its role, status and, for administrators, a district, and is where new administrators and super administrators are added. Keeping every account in one place matters once there are many applicant and staff accounts.

Reports break forms down by status, chart monthly submissions over the last 12 months and show how many forms each administrator holds, with PDF and CSV export, so a manager can see where cases pile up and how the work is spread without counting by hand. The activity log records logins, form actions and admin actions, with filters for action, user, entity, date and text and an export button. It shows what changed, when and which account made the change, for accountability and troubleshooting.

*The super administrator sees what needs assigning and what waits for final approval.*

*The highest role has its own profile and controls.*

*Every account in one table, with a district for each administrator.*

*Reports drawn from test data, unrelated to the figures reported above.*

*The activity log records which account did what, and when.*

## What security controls does the platform have?

The platform includes role-based access, OTP authentication, CSRF protection, document validation, controlled document access and activity logging, all built into the application. These application-level controls do not amount to a full security audit or a legal certification.

**Security controls in the application**

| Control | How it works | What it is for |
| --- | --- | --- |
| Role-based access | Separate areas for applicants, administrators and super administrators, with checks on protected pages and actions | Limits actions to the appropriate role |
| OTP authentication | A one-time code sent by email to sign in | Adds an email check to account access |
| CSRF protection | Tokens created and checked on requests that change data | Guards against cross-site request forgery, a common web attack |
| Session controls | Session handling with a timeout | Limits how long a session stays open |
| Document validation | Checks on file type and size | Reduces the risk of unsafe or unexpected uploads |
| Controlled document access | Documents open and download through the application itself | Keeps document access within the platform's rules |
| Activity logging | A log of logins, form actions and admin actions | A trace of which account did what, and when |
| Workflow history | Status and instruction history on each case | Shows how a case progressed |

Exports need the same care as the live records, since a downloaded PDF or CSV file sits outside the application's access rules.

### How information moves through the platform

**The data lifecycle, stage by stage**

| Stage | What happens |
| --- | --- |
| Collect | The applicant enters structured information |
| Verify | The email address and the application are checked |
| Store | The information is saved against the applicant and the application |
| Attach | Supporting documents are linked to the case |
| Assign | An authorised member of staff takes responsibility for the case |
| Review | Staff check the information and the documents |
| Communicate | Instructions and notifications tell the applicant what is needed |
| Process | The status and appointment details change as the case moves on |
| Generate | Standard supporting documents can be produced from the stored data |
| Report | Figures across cases feed management reports |
| Audit | Activity and workflow records keep a trace of what happened |

This case study describes the software and the figures reported for it, with screens from a test system. Nothing on this page is a legal certification or a statement that Bangali Oikya Manch complies with every law that applies to it.

## How we built the platform: stack, architecture and decisions

The platform is a PHP web application on a MySQL-compatible database, with pages rendered on the server. Applicants, administrators and super administrators each have their own area, and the three share code for the core jobs: the application form, file uploads, notifications and email, instructions and their history, document generation from Word templates and the activity log, alongside appointment records and report pages. Role and permission checks guard the protected pages and actions. We have left file and folder names off this page on purpose, because they would tell an attacker more than they tell a reader.

**Technology stack**

| Layer | Technology or approach |
| --- | --- |
| Backend | PHP |
| Database | A MySQL-compatible relational database |
| Sign-in | Email OTP with session-based authentication |
| Front end | Server-rendered pages with HTML, CSS and JavaScript |
| Documents | Word documents generated from templates |
| Email | An SMTP email service |
| Reporting | Server-generated reports with PDF and CSV export |
| Files | Validated uploads and controlled document management |
| Hosting | Deployed on a server environment for the organisation |

### The four layers of the platform

**The four layers of the platform**

| Layer | What it handles |
| --- | --- |
| Applicant layer | Registration, OTP verification, profile, forms, documents, notifications, appointments and generated documents |
| Case management layer | Assignment, review, document checks, status changes, instructions and actions on a single case |
| Oversight layer | All forms, user and administrator management, reports, exports, system logs and a view across the organisation |
| Data layer | Structured records of applications, users, documents, statuses, notifications, appointments and activity |

### Decisions that shaped it

**Engineering decisions and the reasons for them**

| Decision | Reason |
| --- | --- |
| Separate roles | Applicants, administrators and super administrators need different permissions and screens |
| Built around the case | Information, documents, status and messages have to stay connected |
| Explicit statuses | The next action depends on where the case is in its lifecycle |
| Controlled documents | Each category of document needs its own checks and workflow rules |
| Notifications | Important events should not depend entirely on someone following up by hand |
| Activity logging | Several people work on the same cases, and a log of the important events makes that work traceable |
| Reports and exports | Management needs information beyond individual case screens |
| Template generation | Preparing the same documents again and again is an obvious job to automate |
| Applicant self-service | Staff should not have to do every routine step for the applicant |

### What was hard to build?

- Turning a document-heavy, real-world process into structured data.
- Separating applicant, administrator and super administrator permissions.
- Keeping each document's state in step with the application's status.
- Handling hold, correction and replacement paths as well as successful submissions.
- Sending notifications at the events that matter.
- Making busy administrative screens usable.
- Reporting across cases without losing the detail of each one.
- Maintaining an audit trail when several people act on the same case.

The main lesson was that the complexity lives in the connections. Each page on its own was fairly simple; the work was making information, permissions, documents, notifications and status stay consistent with each other at every stage of a case.

In outline, the work ran through discovery, workflow mapping, the data model, the applicant portal, the administrative system, the document workflow, notifications, reporting, security and access control, testing and refinement, and deployment.

### Possible next steps, not built today

Improvements the platform could take on later include more advanced workflow analytics and tracking against service level agreements (SLAs), automatic reminders for applicants with pending actions, finer-grained permissions, better use on mobile phones, more document automation, advanced case search and saved filters, workload forecasting and more detailed audit reports.

If your organisation runs a process like this on paper, in spreadsheets or across message threads, our [software development](https://ndcompany.in/services/software-development) service takes the same approach: map the workflow, find where time and information are lost, and build software for that process. Our other work is on [the projects page](https://ndcompany.in/projects).

## What the client said

Bangali Oikya Manch in their own words, from a public Google review.

Google review

"Really impressed how generously they made the full internal data management system. Great time to work with you guys"

Bangali Oikya Manch

a month ago

## Frequently asked questions

**What did N&D Co. build for Bangali Oikya Manch?**

N&D Co. built a web platform that joins an applicant portal to an internal case management system. Applicants register, sign in with an email code, fill in their application, upload documents and follow their case, while staff assign, review and approve cases, send instructions, generate supporting documents and run reports.

**What results were reported for the Bangali Oikya Manch platform?**

By Bangali Oikya Manch's own figures, which it has confirmed: about 5 to 6 cases a day by hand, 30 to 40 on a typical day with the platform and 75 or more on the busiest day.

**Do applicants need a password to sign in to the Bangali Oikya Manch platform?**

No. Applicants enter their email address and get an 8-digit one-time code, valid for 5 minutes; the login screen has no password field.

**Is the Bangali Oikya Manch platform public?**

No. Its pages were public at first, but Bangali Oikya Manch has since made the whole platform private for internal reasons. It joins an applicant portal to an internal case management system for authorised staff.

**Who uses the Bangali Oikya Manch platform?**

Three roles use it, each with separate screens and permissions: applicants, administrators and super administrators. Applicants manage their own case, administrators process the cases assigned to them, and super administrators assign cases, give final approval and oversee users, reports and the activity log.

**How does an application reach Bangali Oikya Manch's final approval?**

An administrator reviews and approves the assigned application, then a super administrator gives final approval and sets a date and time for the applicant to bring their original documents. The administrator can also put it on hold or send it back to the super administrator for clarification. On that date the organisation's team helps the applicant submit it.

**What documents does the Bangali Oikya Manch platform generate?**

Three supporting documents per approved form, generated from templates with its data: a Schedule 1C, a self declaration and an introducer certificate. We make no claim about their legal standing.

**What security controls does the Bangali Oikya Manch platform include?**

The platform has role-based access, OTP authentication, CSRF protection, document validation, controlled document access and activity logging. The list is not a security audit or legal certification.

**What technology does the Bangali Oikya Manch platform use?**

It is a PHP web application on a MySQL-compatible database, with server-rendered pages, email one-time code sign-in, Word documents generated from templates, PDF and CSV exports and an activity log.

**Did Bangali Oikya Manch pay for the platform?**

No. The project came to N&D Co. through a referral, and we sponsored it: we built the platform free of charge as a contribution to Bangali Oikya Manch's community service work.

**Can N&D Co. build a platform like Bangali Oikya Manch's for my organisation?**

Yes. If your process runs on paper, in spreadsheets or across message threads, we can take the same approach: map the workflow, find the bottlenecks and build software for that process. The quote is set in writing before work starts.

## Related reading

Guides from our blogs on the same kind of work.

Business

Guide · 31 Oct 2026

### [What do Google Play and the App Store require from a business app in 2026?](https://ndcompany.in/blogs/play-store-app-store-requirements)

Developer accounts and fees, the D-U-N-S wait, the 12-tester closed test, API 36 and Xcode 26, privacy forms, account deletion and the Apple guidelines that reject business apps, with a timeline to launch.

Read the guide

## More projects

Branding

Sea Seven Fish, Northeast India

### [Brand identity for Sea Seven Fish](https://ndcompany.in/projects/sea-seven-fish)

A brand identity for Sea Seven Fish, a seafood wholesaler from Northeast India: 18 logo concepts, a fish with a fin of mountain peaks, a blue palette, a seal and business cards.

See the project

Branding

Innovation Texture, Vadodara, Gujarat

### [Brand identity for Innovation Texture](https://ndcompany.in/projects/innovation-texture)

A logo and brand identity for Innovation Texture, a wall texture maker in Vadodara: a rising sun that forms the letters I and T, five palettes, lockups and mockups.

See the project

Marketing

Kebabiyana

### [Ads, design, reels and social media for Kebabiyana](https://ndcompany.in/projects/kebabiyana)

Ads, graphic design, reel editing and social media management for Kebabiyana, a restaurant.

See the project

[See all projects](https://ndcompany.in/projects)

## Want something like this?

Tell us about your business in a few lines and we will reply with questions or a quote. We work from Kolkata with clients across India and abroad.

[Get a quote](https://ndcompany.in/#contact)

## Structured data

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/projects/bangali-oikya-manch#webpage",
      "url": "https://ndcompany.in/projects/bangali-oikya-manch",
      "name": "Bangali Oikya Manch case study: case management platform",
      "description": "An applicant portal and case management system for Bangali Oikya Manch. Reported cases a day: 5 to 6 by hand, 30 to 40 on a typical day with the platform.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/projects/bangali-oikya-manch#breadcrumb"
      },
      "inLanguage": "en-IN",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/projects/bangali-oikya-manch-16x9.png",
        "width": 1200,
        "height": 675
      },
      "mainEntity": {
        "@id": "https://ndcompany.in/projects/bangali-oikya-manch#work"
      }
    },
    {
      "@type": "CreativeWork",
      "@id": "https://ndcompany.in/projects/bangali-oikya-manch#work",
      "name": "Bangali Oikya Manch case study: a case management platform",
      "headline": "Bangali Oikya Manch case study: a case management platform",
      "description": "An applicant portal and case management system for Bangali Oikya Manch, a community service organisation. Reported cases a day: about 5 to 6 by hand and 30 to 40 on a typical day with the platform.",
      "abstract": "For Bangali Oikya Manch, a community service organisation, N&D Co. built an applicant portal joined to an internal case management system, with one record per case. By the organisation's own figures, which it has confirmed, daily cases went from about 5 to 6 by hand to 30 to 40 on a typical day with the platform. The platform handles the application forms applicants fill in, from registration to final approval. Applicants register, verify their email with a one-time code, fill in their application form, upload documents and follow their case. Staff assign and review each case, send instructions, approve it in two stages and generate supporting documents from templates. The organisation's team then helps submit the application in front of the applicant. The busiest day reached 75 or more cases, and the results section below explains how to read each figure. The project came to us through a referral, and we sponsored it: we built the platform, one of our software development projects, free of charge as a contribution to the organisation's community service work, to increase its ability to help applicants. The platform's pages were public at first; Bangali Oikya Manch has since made the whole platform private for internal reasons.",
      "url": "https://ndcompany.in/projects/bangali-oikya-manch",
      "image": [
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-home-page.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-website.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-application-flowchart.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-services.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-login.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-otp-email.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-applicant-dashboard.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-applicant-forms.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-applicant-documents.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-applicant-profile.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-admin-dashboard.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-admin-profile.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-all-applications.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-application-record.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-case-documents.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-instructions.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-generated-documents.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-data-export.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-super-admin-dashboard.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-super-admin-profile.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-user-management.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-reports.webp",
        "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-activity-log.webp"
      ],
      "genre": "Software, Systems",
      "keywords": "Case management, Data management, Community platforms",
      "creator": {
        "@id": "https://ndcompany.in/#ndco-organization"
      },
      "sourceOrganization": {
        "@type": "Organization",
        "name": "Bangali Oikya Manch",
        "sameAs": [
          "https://www.facebook.com/p/Bangali-Oikya-Manch-%E0%A6%AC%E0%A6%BE%E0%A6%99%E0%A6%BE%E0%A6%B2%E0%A6%BF-%E0%A6%90%E0%A6%95%E0%A7%8D%E0%A6%AF-%E0%A6%AE%E0%A6%9E%E0%A7%8D%E0%A6%9A-61576807298140/",
          "https://www.youtube.com/@BangaliOikyaManch"
        ]
      },
      "isPartOf": {
        "@type": "CollectionPage",
        "@id": "https://ndcompany.in/projects#webpage",
        "url": "https://ndcompany.in/projects"
      },
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "An applicant portal and a case management system around one case record",
          "description": "The platform N&D Co. built for Bangali Oikya Manch has two connected sides. On the applicant side, in Bengali and English, people read about the process and the services, then register and log in; inside the portal they fill in their application, upload documents, check their status and instructions and download the documents generated for them. On the internal side, administrators work through queues of assigned cases, and super administrators assign cases, give final approval and manage users; both can open reports and the activity log. The home and information pages count as website design and development work; the rest is custom workflow software. We approached the project as a workflow problem. An online form would only have handled intake, and after submission each application still needs assignment, review, documents, instructions, status changes, appointments, generated documents and oversight. So the platform treats an application as a case with a lifecycle, and we connected every task to that case instead of building isolated features. Everything about a case is linked to one record: the applicant's details, documents, status, assigned administrator, instructions and their history, appointment details and generated documents. An instruction from an administrator appears on the applicant's dashboard and goes out by email, and a status change sends a notification in the portal, plus an email where that is set up.",
          "about": {
            "@type": "Service",
            "@id": "https://ndcompany.in/services/software-development#service",
            "name": "Software Development",
            "url": "https://ndcompany.in/services/software-development"
          },
          "image": [
            "https://ndcompany.in/assets/images/projects/bangali-oikya-manch-website.webp"
          ]
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ndcompany.in/projects/bangali-oikya-manch#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ndcompany.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://ndcompany.in/projects"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bangali Oikya Manch"
        }
      ]
    }
  ]
}
```
