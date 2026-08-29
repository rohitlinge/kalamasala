# Kala Massala

Next.js storefront for Kala Massala, with Razorpay checkout and cash-on-delivery.

## Setup

```bash
npm install
cp .env.example .env.local
```

Fill in Razorpay keys, WhatsApp number, and an [openrouteservice](https://openrouteservice.org/) key (`ORS_API_KEY`) in `.env.local`.
Without the ORS key, transport still uses the three pincode zones.

Paid orders are written to Google Sheets via Apps Script. Paste `apps-script/Code.gs` into a Sheet, deploy as a web app, then set `GOOGLE_SHEETS_WEBHOOK_URL`.

Kitchen origin for distance: 16 A Great Nag Road, Nagpur (440009).

Then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
