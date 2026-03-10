# User Import/Export Admin Dashboard

A simple **Admin Dashboard** built with **Next.js + Supabase** that allows an administrator to manage users with features like **Excel Import, Excel Export, Search, and Pagination**.

This project demonstrates how to build a **full-stack admin panel** using Supabase for authentication and database management.

---

## 🚀 Features

### Authentication

* Admin login using Supabase Auth
* Only one admin account allowed
* Protected dashboard route
* Logout functionality

### User Management

* View users in a table
* Pagination for large datasets
* Search users
* Filter user records

### Excel Import

* Upload `.xlsx` file
* Parse Excel file
* Insert users into database

### Excel Export

* Download users as an Excel file
* Useful for backups or reports

---

## 🧰 Tech Stack

Frontend

* Next.js (App Router)
* React
* TailwindCSS

Backend

* Supabase

Libraries

* SheetJS (`xlsx`) for Excel import/export

---

## 📂 Project Structure

```
app
 ├ adminlogin
 │   └ page.tsx
 │
 ├ dashboard
 │   └ page.tsx
 │
components
 └ users
     ├ ImportUsers.tsx
     └ UsersTable.tsx

services
 ├ importService.ts
 └ userService.ts

lib
 └ supabaseClient.ts

middleware.ts
```

### Explanation

**app/**

* Contains application routes

**components/**

* UI components (table, import UI)

**services/**

* Business logic (database operations)

**lib/**

* Supabase client configuration

---

## 📊 Excel Import Format

The Excel file must contain these columns:

| name     | email                                   | phone      | role |
| -------- | --------------------------------------- | ---------- | ---- |
| John Doe | [john@email.com](mailto:john@email.com) | 9999999999 | user |

---

## 🖥 Installation

Clone the project:

```
git clone <repo-url>
```

Install dependencies:

```
npm install
```

Install Excel library:

```
npm install xlsx
```

Run the development server:

```
npm run dev
```

---

## 🔑 Admin Login

Only the email defined in:

```
NEXT_PUBLIC_ADMIN_EMAIL
```

can access the dashboard.

---


## 📸 Dashboard Overview

Main sections:

```
Admin Dashboard
 ├ Import Users
 ├ Export Users
 ├ Search Users
 └ Users Table
```

---

## 🎯 Purpose

This project demonstrates:

* Full stack CRUD with Supabase
* Authentication with Next.js
* Excel file processing
* Admin dashboard UI patterns
* Clean separation of UI and logic


---


