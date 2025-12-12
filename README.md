# 🗺️ Local Guide Platform — README

> **Travel Guide** — a marketplace that connects travelers with passionate local guides who offer authentic, personalized city experiences: food crawls, photo walks, history tours, and more. Locals can monetize their knowledge; travelers get off-the-beaten-path experiences.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Objectives & Features](#key-objectives--features)
3. [Tech Stack](#tech-stack)
4. [Repository Links & Live Demos](#repository-links--live-demos)
5. [Folder Structure](#folder-structure)
6. [API Endpoints (high level)](#api-endpoints-high-level)
7. [Getting Started — Local Development](#getting-started---local-development)

   * [Frontend](#frontend)
   * [Backend](#backend)
8. [Environment Variables (example)](#environment-variables-example)
9. [Database / Prisma](#database--prisma)
10. [Authentication & Security](#authentication--security)
11. [Payments & Webhooks](#payments--webhooks)
12. [Usage Examples (cURL)](#usage-examples-curl)
13. [Testing & Linting](#testing--linting)
14. [Deployment Notes](#deployment-notes)
15. [Optional / Nice-to-have Features](#optional--nice-to-have-features)
16. [Troubleshooting](#troubleshooting)
17. [Contributing](#contributing)
18. [Authors & Contact](#authors--contact)
19. [License](#license)

---

## Project Overview

Local Guide Platform connects travelers with verified local experts. Guides create listings (title, itinerary, price, images), travellers search and request bookings, guides accept/decline, and travellers leave reviews. The platform supports roles (Tourist, Guide, Admin) and a payment flow backed by Stripe (or other gateway).

---

## Key Objectives & Features

* Role-based user accounts: Tourist, Guide, Admin
* Secure authentication (JWT + hashed passwords)
* Profile management (name, photo, bio, languages, expertise, rates)
* Tour listings CRUD with images (Cloudinary/ImgBB)
* Search & filters (city, language, category, price)
* Booking workflow: request → accept/decline → status updates
* Reviews & ratings after completed tours
* Payment integration (Stripe / SSLCommerz or other)
* Admin dashboard to manage users, listings, bookings

---

## Tech Stack

**Frontend**

* Next.js (React) — `next@^16`
* React 19
* Tailwind CSS
* Radix UI components
* TypeScript
* Cloud image hosting (Cloudinary/ImgBB)
* Recharts, framer-motion, sonner

**Backend**

* Node.js + Express
* TypeScript
* Prisma (Postgres)
* Stripe
* Cloudinary
* bcryptjs, jsonwebtoken, zod
* nodemailer (email)
* multer (file upload)

Packages are reflected in the `package.json` snippets you supplied.

---

## Repository Links & Live Demos

* Frontend GitHub: [https://github.com/habibur5313/A8-client](https://github.com/habibur5313/A8-client)
* Frontend Live: [https://travelguide-eta.vercel.app/](https://travelguide-eta.vercel.app/)
* Frontend Demo video: [https://github.com/habibur5313/A8-client](https://github.com/habibur5313/A8-client) (demo link in repo)
* Backend GitHub: [https://github.com/habibur5313/A8-server](https://github.com/habibur5313/A8-server)
* Backend Live API: [https://a8-server.onrender.com](https://a8-server.onrender.com)
* Portfolio: [https://habiburrahman-portfolio.vercel.app](https://habiburrahman-portfolio.vercel.app)
* LinkedIn: [https://www.linkedin.com/in/habibur-rahman13](https://www.linkedin.com/in/habibur-rahman13)

---

## Folder Structure (suggested / as-provided)

```
frontend/
 ├── app/
 │   ├── (auth)/...
 │   ├── (public)/explore, tours/[id]
 │   ├── (dashboard)/guide, tourist, admin
 │   ├── components/
 │   └── ...
backend/
 ├── src/
 │   ├── modules/
 │   │   ├── auth/
 │   │   ├── user/
 │   │   ├── guide/
 │   │   ├── tourist/
 │   │   ├── listing/
 │   │   ├── booking/
 │   │   ├── review/
 │   │   ├── payment/
 │   │   └── meta/
 │   ├── middlewares/
 │   ├── utils/
 │   └── server.ts
 ├── prisma/
 │   └── schema.prisma
```

---

## API Endpoints (high level)

> These are the primary endpoints mentioned in the spec. Add auth & validation middleware as necessary.

* `POST /api/auth/register` — register (Tourist / Guide)
* `POST /api/auth/login` — login
* `GET /api/users/:id` — get public profile
* `PATCH /api/users/:id` — update profile
* `GET /api/listings` — search / filter tours
* `POST /api/listings` — create listing (guide)
* `GET /api/listings/:id` — get listing details
* `PATCH /api/listings/:id` — update listing
* `DELETE /api/listings/:id` — delete listing
* `POST /api/bookings` — request a booking
* `PATCH /api/bookings/:id` — accept / reject booking (guide)
* `GET /api/bookings/:id` — booking details
* `POST /api/reviews` — submit review after tour
* `POST /api/payments/booking` — pay for booking (initiate payment)
* `POST /api/payment/webhook` — webhook for payment gateway (Stripe recommended)
* Admin & meta endpoints: `/api/admin/*`, `/api/meta/*`

> In the backend router file you shared, these modules are wired under `/user`, `/auth`, `/admin`, `/guide`, `/tourist`, `/listing`, `/booking`, `/payment`, `/review`, `/meta`.

---

## Getting Started — Local Development

### Prerequisites

* Node.js (>= 18 recommended)
* npm or pnpm
* PostgreSQL (or your chosen DB supported by Prisma)
* Stripe account (for payments) — optional for local dev (use test keys)
* Cloudinary (optional for image uploads)
* `git`

---

### Frontend (Next.js)

```bash
# clone
git clone https://github.com/habibur5313/A8-client.git
cd A8-client

# install
npm install

# development
npm run dev

# build
npm run build
npm run start
```

Default `package.json` scripts:

* `dev`: `next dev`
* `build`: `next build`
* `start`: `next start`
* `lint`: `eslint`

---

### Backend (Express + TypeScript + Prisma)

```bash
# clone
git clone https://github.com/habibur5313/A8-server.git
cd A8-server

# install
npm install

# start in dev
npm run dev
```

Important scripts from backend `package.json`:

* `dev`: `ts-node-dev --respawn --transpile-only ./src/server.ts`
* `build`: `tsc`
* `start`: `node ./dist/server.js`
* Prisma tasks: `db:generate`, `db:migrate`, `db:push`, `db:studio`

Run Prisma:

```bash
# generate client
npm run db:generate

# push schema to DB (or use migrate)
npm run db:push
```

---

## Environment Variables (example)

Create `.env` files for frontend and backend as needed.

### Backend `.env.example`

```
NODE_ENV=development
PORT=5000

# Database (Postgres)
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

# Cloudinary (images)
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (nodemailer)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...

# Frontend URL (CORS / callback)
FRONTEND_URL=http://localhost:3000
```

### Frontend `.env.example` (Next.js)

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

---

## Database / Prisma

* Schema defined under `prisma/schema.prisma` (you listed Prisma in `package.json`).
* Typical models: `User` (roles & profile), `Listing`, `Booking`, `Review`, `Payment`, `Meta`.
* Use `prisma migrate` for schema changes and `prisma studio` to inspect data locally.

Commands:

```bash
npm run db:generate
npm run db:push
# or with migrations
npm run db:migrate
npm run db:studio
```

---

## Authentication & Security

* JWT-based authentication: Access tokens issued at login/registration. Protect routes with middleware validating JWT and role-checking (Guide/Admin/Tourist).
* Passwords hashed with `bcryptjs`.
* Rate-limiting: suggested usage of `express-rate-limit` (you have it as a dependency).
* Validation: use `zod` for request shape validation.
* HTTPS in production. Use secure cookie flags if cookies are used.

---

## Payments & Webhooks

* Stripe is already included as a dependency. Implement:

  * Create payment intent when Tourist requests booking / pays deposit.
  * Webhook to verify completed payments (`stripe listen` for development; script provided in `package.json`: `stripe:webhook`).
  * Secure webhook endpoint using `STRIPE_WEBHOOK_SECRET`.
  * Transfer funds to guide post-tour or handle marketplace cut via Stripe Connect if you plan to split payments.

Example `package.json` script from backend:

```
"stripe:webhook": "stripe listen --forward-to localhost:5000/webhook"
```

---

## Usage Examples (cURL)

Register (tourist or guide):

```bash
curl -X POST https://a8-server.onrender.com/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane","email":"jane@example.com","password":"secret","role":"guide"}'
```

Login:

```bash
curl -X POST https://a8-server.onrender.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"jane@example.com","password":"secret"}'
```

Create a listing (authenticated guide):

```bash
curl -X POST https://a8-server.onrender.com/listing \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -F "title=Hidden Jazz Bars of New Orleans" \
  -F "description=Explore..." \
  -F "price=60" \
  -F "duration=3" \
  -F "meetingPoint=French Quarter" \
  -F "images=@/path/to/photo.jpg"
```

Request booking:

```bash
curl -X POST https://a8-server.onrender.com/booking \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"listingId":"<id>","date":"2025-12-20","time":"17:00","guests":2}'
```

---

## Testing & Linting

* Frontend: run `npm run lint` (eslint) and `next dev` for development testing.
* Backend: add unit & integration tests (e.g., Jest + Supertest). None included by default — recommended as next step.
* Manual testing: use Postman / Insomnia for API, and `prisma studio` to inspect DB.

---

## Deployment Notes

* Frontend: Vercel is a natural fit for Next.js (you already have a Vercel live link).
* Backend: Render / Heroku / Railway are good choices (you have a live API on Render).
* Environment: ensure production env vars are set (DB, JWT secret, Stripe keys, Cloudinary).
* Use HTTPS, set CORS to allow frontend origin only, configure rate-limiting and Helmet for security headers.
* Stripe webhooks: use a secure public endpoint and ensure the `STRIPE_WEBHOOK_SECRET` is set on hosting platform.

---

## Optional Features / Roadmap

* Availability calendar per guide (📅)
* Interactive map (Mapbox / Google Maps) to show meeting points (🗺️)
* Badges & gamification for top guides (🏅)
* Multi-language UI (i18n) (🌐)
* Social login (Google / Apple)
* Guide verification workflow (ID upload + manual review)
* Payout scheduling and marketplace fee handling (Stripe Connect)

---

## Troubleshooting

* **Cannot connect to DB**: check `DATABASE_URL` and ensure host/port accessible. Run `npx prisma db pull` if unsure of schema.
* **Stripe webhooks fail**: confirm `STRIPE_WEBHOOK_SECRET` and verify signature in server webhook handler.
* **Image uploads failing**: ensure Cloudinary keys are set and upload presets configured.
* **Auth errors**: ensure JWT secret matches across env and tokens not expired.

---

## Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit changes and open a PR with description and testing steps.
4. Follow code style (TypeScript types, linting).
5. If adding DB migrations, include `prisma migrate` files and update README.

---

## Authors & Contact

* **Habibur Rahman** — Primary author / maintainer

  * Portfolio: [https://habiburrahman-portfolio.vercel.app](https://habiburrahman-portfolio.vercel.app)
  * LinkedIn: [https://www.linkedin.com/in/habibur-rahman13](https://www.linkedin.com/in/habibur-rahman13)

Repositories:

* Frontend: [https://github.com/habibur5313/A8-client](https://github.com/habibur5313/A8-client)
* Backend: [https://github.com/habibur5313/A8-server](https://github.com/habibur5313/A8-server)
* Live (frontend): [https://travelguide-eta.vercel.app/](https://travelguide-eta.vercel.app/)
* Live API: [https://a8-server.onrender.com](https://a8-server.onrender.com)

---

## License

This project is licensed under the **MIT License** — see `LICENSE` file.

---

## Next Steps / Suggestions

* Add automated tests (unit + integration).
* Harden security headers & add input sanitization middleware.
* Implement admin verification flow for Guide accounts and image moderation.
* Add analytics (for top cities, bookings conversion) and backups for DB.
* Implement Stripe Connect if you want direct payouts to guides and platform fees.

---