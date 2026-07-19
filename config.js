// ── Fill these in after you set up Supabase and EmailJS. ──
// Supabase: Project Settings → API
const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR-ANON-PUBLIC-KEY";

// EmailJS: emailjs.com → Account → General (Public Key), Email Services, Email Templates
const EMAILJS_PUBLIC_KEY = "YOUR-EMAILJS-PUBLIC-KEY";
const EMAILJS_SERVICE_ID = "YOUR-EMAILJS-SERVICE-ID";

// Three separate templates — create all three in EmailJS.
const EMAILJS_STUDENT_TEMPLATE_ID = "YOUR-STUDENT-RECEIVED-TEMPLATE-ID"; // sent to student on submit
const EMAILJS_ADMIN_TEMPLATE_ID = "YOUR-ADMIN-ALERT-TEMPLATE-ID";       // sent to admin on submit
const EMAILJS_CONFIRM_TEMPLATE_ID = "YOUR-PAYMENT-CONFIRMED-TEMPLATE-ID"; // sent to student when admin confirms

// Admin
const ADMIN_EMAIL = "your-admin-email@example.com";
const ADMIN_DASHBOARD_URL = "https://your-deployed-site.com/admin.html";

// The class this form is collecting registrations for.
const CLASS_NAME = "Forge Academy — Cohort 1";
const CLASS_FEE = "₦20,000";