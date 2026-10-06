/* ============================================================
   EDIT ONLY THESE THREE LINES. Every button on both pages reads from here.
   ============================================================ */
const PAYMENT_CHECKOUT_URL = "https://rzp.io/rzp/LMzUfKlq";        // your payment gateway checkout link
const EBOOK_DOWNLOAD_URL   = "YOUR_SECURE_DOWNLOAD_URL_HERE"; // secure link to the PDF
const THANK_YOU_PAGE_URL   = "YOUR_THANK_YOU_PAGE_URL_HERE";  // full URL of thank-you.html (set this as your gateway's success redirect)
const SUPPORT_EMAIL        = "YOUR_SUPPORT_EMAIL_HERE";       // shown on the thank-you page
/* ============================================================ */

(function () {
  const set = (sel, url, mailto) => document.querySelectorAll(sel).forEach(el => {
    if (/^YOUR_/.test(url)) { el.setAttribute("href", "#"); el.dataset.unset = "true"; console.warn("Placeholder not replaced for " + sel); }
    else el.setAttribute("href", (mailto ? "mailto:" : "") + url);
  });
  set("[data-cta]", PAYMENT_CHECKOUT_URL);
  set("[data-download]", EBOOK_DOWNLOAD_URL);
  set("[data-support]", SUPPORT_EMAIL, true);
  if (!/^YOUR_/.test(THANK_YOU_PAGE_URL)) {
    const l = document.createElement("link"); l.rel = "canonical"; l.href = THANK_YOU_PAGE_URL;
    if (document.body.dataset.page === "thanks") document.head.appendChild(l);
  }
})();
