# Maisam Clinics App

عيادات ميسم — Maisam Clinics App is a mobile-first Next.js web app for Maisam Family Clinic.

## Tech Stack

* Next.js App Router
* TypeScript
* CSS variables with mobile-first responsive styling
* JSON-based i18n dictionaries
* Node 22.x deployment target

## Languages

* Arabic is the default language and uses RTL layout.
* English is supported from Phase 1 and uses LTR layout.
* Arabic routes use the default path, for example `/services`.
* English routes use the `/en` prefix, for example `/en/services`.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deployment

* Provider: Hostinger
* Framework: Next.js
* Branch: `main`
* Node: `22.x`
* Build settings: Default

## Environment Variables

Phase 1 does not require environment variables.

## Current Phase Status

Phase 1: Bilingual Mobile First Foundation implemented locally.

Implemented scope:

* Arabic-first routing foundation.
* English `/en` routing foundation.
* RTL / LTR layout support.
* Mobile-first clinic home preview.
* Placeholder pages for the core future modules.
* Brand colors and reusable UI patterns.

Verification:

* `npm run lint`
* `npm run build`
* Local rendered checks for Arabic RTL and English LTR routes
