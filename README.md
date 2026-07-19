# Forge Academy — registration popup

Two files make up the whole system, plus one shared config:

- `index.html` — your landing page, unchanged except every "Register" button now opens a popup form instead of linking to Google Forms.
- `admin.html` — private dashboard to review receipts and confirm payment. Confirming sends the student a payment-confirmed email automatically.
- `config.js` — the one file you edit with your Supabase and EmailJS keys. Both pages load it.

Nothing else changed on the landing page — same fonts, colors, buttons, layout.

## What the popup does

**Step 1** — full name, email, phone (WhatsApp), location/timezone, skill level, learning goals, Figma familiarity.
**Step 2** — your bank details, a "I've paid" checkbox, and a receipt upload. On submit:

1. The student sees a toast: "Great, your registration is complete. Check your mail for confirmation."
2. The student is emailed immediately — registration received, another email coming once payment is confirmed.
3. Nothing is marked confirmed yet — that only happens when you review the receipt in `admin.html` (check the Pending tab periodically) and click Confirm, which is when the second student email goes out.

## Setup steps, in order

### 1. Create a Supabase project (free, no card)
Go to supabase.com → New project.

### 2. Run the schema
SQL Editor → paste in `schema.sql` → Run. This creates the `registrations` table and locks it down so students can only submit their own info, and only your admin login can view the list or receipts.

### 3. Create the storage bucket
Storage → New bucket → name it exactly `receipts` → keep it **Private**. `schema.sql` already includes the access policies for it.

### 4. Create your admin login
Authentication → Users → Add user. Use your own email and a password — this is what you'll use to sign into `admin.html`. There's no public sign-up, so this is the only way in.

### 5. Copy your Supabase keys
Project Settings → API → copy the **Project URL** and **anon public key** into `config.js`.

### 6. Create an EmailJS account (free, no card)
Go to emailjs.com → sign up → Email Services → connect an email account (Gmail works fine) → note the **Service ID**.

### 7. Create two EmailJS templates
The free EmailJS plan caps you at 2 templates, so this covers the two emails that matter most — both go to the student:

| Template | Sent to | Suggested variables |
|---|---|---|
| Registration received | student | `{{to_email}}`, `{{to_name}}`, `{{class_name}}` |
| Payment confirmed | student | `{{to_email}}`, `{{to_name}}`, `{{class_name}}` |

Copy each template's ID, plus your account's **Public Key** (Account → General), into `config.js`.

There's no "new student" email to you anymore — check the **Pending** tab in `admin.html` periodically instead. If you later upgrade EmailJS, you can add that third template back and re-wire it in `index.html`'s submit handler.

### 8. Fill in the rest of `config.js`
The class name and fee shown in the popup.

### 9. Deploy
Static files, so any free host works — Netlify, Vercel, GitHub Pages, Cloudflare Pages. Drag in `index.html`, `admin.html`, and `config.js` together.

- Share the `index.html` link publicly.
- Keep the `admin.html` link private — it's login-gated, but don't post it publicly.

## Accounts you need to create

1. **Supabase** — free tier, no card. Holds the database, file storage, and your admin login.
2. **EmailJS** — free tier, no card. Sends all three emails straight from the browser.
3. **A static host** (Netlify, Vercel, GitHub Pages, or Cloudflare Pages) — free tier, no card, to put the site live.

That's it — no paid services required anywhere in this setup.

coccyxcoccy


service id: service_e0rqus6