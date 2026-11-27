# DC Central Karachi – Complaint System and CRM

This is the back end for the complaint form on the District Central website. It:
- receives complaints from the website form (with up to 3 photos or PDFs)
- gives each one a reference number (DCC-26-00001)
- sorts it into one of 20 categories and routes it to the office responsible; if the citizen picks "Other", it reads the description in English, Roman Urdu or Urdu to choose the category
- marks complaints that mention danger (fire, open manhole, collapse, electrocution) as **Urgent**
- emails every new complaint to the complaints inbox and sends the citizen a receipt
- gives staff a CRM to view, assign, update and close complaints, add notes, reply to citizens and export to Excel (CSV)
- lets citizens track their complaint on the website with their reference number and mobile number

## What the hosting needs
Any ordinary cPanel / shared hosting with **PHP 8.0+** and **MySQL** (almost all Pakistani and international hosts have this).

## Install (about 15 minutes)
1. **Subdomain** – in cPanel → Domains, create `complaints.yourdomain.pk` (for example). Turn on free SSL (AutoSSL / Let's Encrypt) for it.
2. **Upload** – upload everything in this `complaint-system` folder into that subdomain's folder (File Manager → Upload the zip → Extract).
3. **Database** – cPanel → MySQL Databases: create a database and a user, give the user ALL PRIVILEGES on it.
4. **Email accounts** – cPanel → Email Accounts:
   - `complaints@yourdomain.pk` – the inbox where every new complaint arrives (the person handling complaints reads this).
   - `no-reply@yourdomain.pk` – used to send the emails.
5. **Settings** – copy `config.sample.php` to `config.php` and fill in:
   - `base_url` – `https://complaints.yourdomain.pk`
   - `allowed_origins` – the website address(es), e.g. `https://www.yourdomain.pk`
   - `db` – the database name, user and password from step 3
   - `notify_emails` – `['complaints@yourdomain.pk']` (add more addresses if more people should get a copy)
   - `mail_from` and `smtp` – the no-reply address and its password; host is usually `mail.yourdomain.pk`, port 465
6. **Run the installer** – open `https://complaints.yourdomain.pk/install.php`, create the first admin account, then **delete install.php**.
7. **Connect the website** – in the website files, edit `complaint-config.js`:
   `window.DC_COMPLAINT_API = "https://complaints.yourdomain.pk";`
   Until this is set, the website form shows the office phone numbers instead of sending.

## Daily use (for the person handling complaints)
- Sign in at `https://complaints.yourdomain.pk/admin/`.
- **Dashboard** – totals, new, open, overdue (older than 48 hours and not yet acted on), charts by area and category.
- **Open a complaint** – call or WhatsApp the citizen from the page, correct the category if needed, assign it to a staff member, change the status (New → Assigned → In progress → Resolved/Closed) and write a note.
  - Tick *Show this note to the citizen* for updates the citizen should see when tracking.
  - Tick *Also email it* to send the update to the citizen's email.
  - Notes without the tick are internal only.
- **Export CSV** on the complaints list for weekly reports to the DC.
- **Staff** (admins only) – add accounts for officers or assistants, reset passwords, disable accounts.

## Categories
Edit `lib/categories.php` to change labels, the office each category is routed to, or the keywords used for automatic sorting. Then run `php tools/build-js.php` from the website folder and upload the new `complaint-categories.js` to the website so the form matches.

## Security
- `config.php`, `lib/`, `data/` and `uploads/` are blocked from the web (`.htaccess`). Attachments are only shown to signed-in staff.
- Passwords are stored hashed; forms are protected against cross-site requests; logins are throttled.
- Each internet address can send at most 5 complaints an hour (change `rate_limit_per_hour`).
- Back up the database weekly (cPanel → Backup).
