# PROJECT_MAP.md

## Project

عيادات ميسم — Maisam Clinics App

## Repository

https://github.com/Techzoneksa/maisam.git

## Deployment

* Provider: Hostinger
* Framework: Next.js
* Node: 22.x
* Branch: main
* Build Settings: Default
* Preview Source: Hostinger live deployment

## Languages

* Default Language: Arabic
* Secondary Language: English
* Arabic Direction: RTL
* English Direction: LTR
* i18n Files:

  * `src/i18n/messages/ar.json`
  * `src/i18n/messages/en.json`

## Brand

* Arabic Name: عيادات ميسم
* English Name: Maisam Family Clinic
* Primary Pink: #D82394
* Primary Turquoise: #1CB1B9
* Light Turquoise: #7CD0D4
* Soft Pink: #EAD7E9
* Background: #FFFFFF
* Text Dark: #1F2937

## System Direction

Mobile First clinic web app / PWA.
Arabic RTL by default.
English LTR supported from the first phase.
Supports booking, online payment, pay at clinic, appointments, invoices, offers, doctors, branches, and admin dashboard in later phases.

## Current Tech Stack

* Repository state before Phase 1: empty GitHub repository, local workspace contained only `logo.webp`.
* Framework: Next.js 16.2.7 App Router.
* UI: React 19.2.7.
* Language: TypeScript 6.0.3.
* Runtime target: Node 22.x.
* Styling strategy: global CSS variables with mobile-first responsive layout.
* Language strategy: JSON dictionaries loaded through a typed i18n helper.

## Current Folder Structure

Initial local workspace before Phase 1:

```text
D:\MAISAM
└── logo.webp
```

Target structure after Phase 1:

```text
D:\MAISAM
├── .gitignore
├── .nvmrc
├── PROJECT_MAP.md
├── README.md
├── eslint.config.mjs
├── middleware.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── logo.webp
├── public/
│   └── logo.webp
└── src/
    ├── app/
    │   ├── globals.css
    │   └── [locale]/
    │       ├── layout.tsx
    │       ├── page.tsx
    │       └── [section]/
    │           └── page.tsx
    ├── components/
    ├── i18n/
    │   ├── config.ts
    │   ├── dictionaries.ts
    │   └── messages/
    │       ├── ar.json
    │       └── en.json
    └── lib/
```

## Deployment Target

Hostinger deployment from `main` with default Next.js build settings.

## Existing Pages

After Phase 1:

* `/`
* `/services`
* `/offers`
* `/doctors`
* `/branches`
* `/booking`
* `/appointments`
* `/invoices`
* `/complaints`
* `/profile`
* `/admin`
* `/en`
* `/en/services`
* `/en/offers`
* `/en/doctors`
* `/en/branches`
* `/en/booking`
* `/en/appointments`
* `/en/invoices`
* `/en/complaints`
* `/en/profile`
* `/en/admin`

## Missing Pages

No Phase 1 placeholder routes are missing.

## i18n Strategy

* Arabic is the default public path with no locale prefix.
* English uses the `/en` prefix.
* Middleware rewrites default Arabic paths internally to `/ar`.
* All visible copy is loaded from `src/i18n/messages/ar.json` and `src/i18n/messages/en.json`.
* Shared route definitions generate Arabic and English navigation links.

## RTL / LTR Strategy

* Root layout sets `lang` and `dir` based on the active locale.
* Arabic renders `dir="rtl"`.
* English renders `dir="ltr"`.
* CSS uses logical properties and direction-aware alignment where possible.
* Header, bottom navigation, footer, and page content use the same translated route model.

## Main Modules

* App shell: header, bottom navigation, main content, footer.
* Home preview: hero, quick actions, services, booking steps, payment options, offers, doctors, branches, final CTA.
* Placeholder pages: services, offers, doctors, branches, booking, appointments, invoices, complaints, profile, admin.
* i18n helpers: locale config, dictionary loader, route helpers.
* Design system: brand variables, buttons, badges, cards, layout spacing.

## Implemented in Phase 1

* Created Next.js App Router foundation.
* Added Arabic default routes with RTL layout.
* Added English `/en` routes with LTR layout.
* Added JSON dictionaries for all visible Phase 1 copy.
* Added language switcher in the header.
* Added mobile-first header, bottom navigation, footer, buttons, badges, cards, and placeholder panels.
* Added home preview with hero, quick actions, services, booking steps, payment options, offers, doctors, branches, and final CTA.
* Added placeholder pages for services, offers, doctors, branches, booking, appointments, invoices, complaints, profile, and admin.
* Added public logo asset from the supplied project logo.
* Added lint/build setup and Node 22 project metadata.
* Local verification passed:
  * `npm run lint`
  * `npm run build`
  * Local HTTP checks for `/`, `/en`, `/services`, and `/en/services`

## Pending Phases

* Phase 2: Services / Offers / Doctors / Branches
* Phase 3: Booking Flow
* Phase 4: Payment Options
* Phase 5: Appointments / Invoices
* Phase 6: Complaints / Notifications
* Phase 7: Admin Dashboard
* Phase 8: Backend / Database / APIs
* Phase 9: QA / Hostinger Production Review

## Pending Work

* Push `main`.
* Verify Hostinger preview URL after deployment.

## Known Risks

* The connected GitHub app currently reports read-only permission for `Techzoneksa/maisam`; local Git credentials must allow pushing to `main`.
* Hostinger preview URL is not present in the repository yet and must be provided or discovered after deployment.
* Local Node version is `v24.15.0`; deployment target remains Node 22.x and is documented in project config.
* The in-app browser blocked localhost during visual QA with `ERR_BLOCKED_BY_CLIENT`; local HTTP checks were used to verify rendered HTML, language, direction, and core content.

## Deployment Notes

No environment variables are required in Phase 1.

Local setup notes:

* Use `npm.cmd` on this Windows environment because PowerShell blocks `npm.ps1`.
* Use `npm install --cache .npm-cache` if the default user npm cache is unavailable.
