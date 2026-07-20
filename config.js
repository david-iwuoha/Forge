// ── Fill these in after you set up Supabase and EmailJS. ──
// Supabase: Project Settings → API
const SUPABASE_URL = "https://mfmnobjefrxfwkpehkxg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbW5vYmplZnJ4ZndrcGVoa3hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0OTA0MzYsImV4cCI6MjEwMDA2NjQzNn0.lVSIE07x5ij4QBq5NDvz8iyel_TTg3iVr1AG-ql44as";

// EmailJS: emailjs.com → Account → General (Public Key), Email Services, Email Templates
const EMAILJS_PUBLIC_KEY = "Q_QLV8arkVGv2sOl1";
const EMAILJS_SERVICE_ID = "service_e0rqus6";

// Two templates — the free EmailJS plan caps you at 2, so these cover
// the two emails that matter most to the student.
const EMAILJS_STUDENT_TEMPLATE_ID = "template_eu3l1ao"; // "New student alert" repurposed → sent to student on submit
const EMAILJS_CONFIRM_TEMPLATE_ID = "template_dce1azn"; // "You're confirmed!" → sent to student when admin confirms

// The class this form is collecting registrations for.
const CLASS_NAME = "Forge Academy — Cohort 1";
const CLASS_FEE = "₦20,000";