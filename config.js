// ── Fill these in after you set up Supabase and EmailJS. ──
// Supabase: Project Settings → API
const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR-ANON-PUBLIC-KEY";

// EmailJS: emailjs.com → Account → General (Public Key), Email Services, Email Templates
const EMAILJS_PUBLIC_KEY = "YOUR-EMAILJS-PUBLIC-KEY";
const EMAILJS_SERVICE_ID = "YOUR-EMAILJS-SERVICE-ID";

// Two templates — the free EmailJS plan caps you at 2, so these cover
// the two emails that matter most to the student.
const EMAILJS_STUDENT_TEMPLATE_ID = "YOUR-STUDENT-RECEIVED-TEMPLATE-ID"; // sent to student on submit
const EMAILJS_CONFIRM_TEMPLATE_ID = "YOUR-PAYMENT-CONFIRMED-TEMPLATE-ID"; // sent to student when admin confirms

// The class this form is collecting registrations for.
const CLASS_NAME = "Forge Academy — Cohort 1";
const CLASS_FEE = "₦20,000";