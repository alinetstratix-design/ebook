/* ============================================================
   CENTRAL CONFIGURATION — THE AI ADVANTAGE EBOOK
   All buttons, prices, links, and support details read from here.
   Edit these variables as needed.
   ============================================================ */
const CONFIG = {
  // Final selling price in INR (matches your Razorpay page)
  FINAL_PRICE: "99",

  // Razorpay Checkout URL
  PAYMENT_CHECKOUT_URL: "https://rzp.io/rzp/LMzUfKlq",

  // Secure download link for the PDF eBook (e.g. Google Drive, S3, Dropbox)
  EBOOK_DOWNLOAD_URL: "https://drive.google.com/file/d/1LLabE2Wk8Qt897rd6fFAC2yrNghodadu/view?usp=sharing",

  // Sample PDF preview URL or anchor link
  SAMPLE_PDF_URL: "#inside",

  // Support contact information
  SUPPORT_EMAIL: "alinetstratix@gmail.com",
  SUPPORT_WHATSAPP: "+916399969642",

  // Refund policy statement for digital product
  REFUND_POLICY_TEXT: "Due to the digital nature of this product (immediate PDF access), all sales are final once accessed. If you encounter any technical issues or need help opening your file, our support team will resolve it or provide an alternate link within 24 hours.",

  // Public live site URL
  SITE_URL: "https://poweredincomeai.netlify.app"
};

// Auto-wire configuration into DOM elements
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // 1. Price tags
    document.querySelectorAll("[data-price]").forEach(function (el) {
      el.textContent = CONFIG.FINAL_PRICE;
    });

    // 2. CTA Payment Links
    document.querySelectorAll("[data-cta]").forEach(function (el) {
      if (!CONFIG.PAYMENT_CHECKOUT_URL || /^YOUR_/.test(CONFIG.PAYMENT_CHECKOUT_URL)) {
        el.setAttribute("href", "#");
        el.dataset.unset = "true";
      } else {
        el.setAttribute("href", CONFIG.PAYMENT_CHECKOUT_URL);
      }
    });

    // 3. Ebook Download Links (Thank You page)
    document.querySelectorAll("[data-download]").forEach(function (el) {
      if (!CONFIG.EBOOK_DOWNLOAD_URL || /^YOUR_/.test(CONFIG.EBOOK_DOWNLOAD_URL)) {
        el.setAttribute("href", "#");
        el.dataset.unset = "true";
        el.addEventListener("click", function (e) {
          if (el.dataset.unset === "true") {
            e.preventDefault();
            alert("Download link configuration pending. Please configure EBOOK_DOWNLOAD_URL in config.js or contact support at " + CONFIG.SUPPORT_EMAIL);
          }
        });
      } else {
        el.setAttribute("href", CONFIG.EBOOK_DOWNLOAD_URL);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    });

    // 4. Sample PDF Link
    document.querySelectorAll("[data-sample]").forEach(function (el) {
      el.setAttribute("href", CONFIG.SAMPLE_PDF_URL || "#inside");
    });

    // 5. Support Email
    document.querySelectorAll("[data-support-email]").forEach(function (el) {
      if (CONFIG.SUPPORT_EMAIL && !/^YOUR_/.test(CONFIG.SUPPORT_EMAIL)) {
        el.setAttribute("href", "mailto:" + CONFIG.SUPPORT_EMAIL);
        el.textContent = CONFIG.SUPPORT_EMAIL;
      }
    });

    // 6. Support WhatsApp
    document.querySelectorAll("[data-support-whatsapp]").forEach(function (el) {
      if (CONFIG.SUPPORT_WHATSAPP && !/^YOUR_/.test(CONFIG.SUPPORT_WHATSAPP)) {
        const cleanNumber = CONFIG.SUPPORT_WHATSAPP.replace(/[^0-9]/g, "");
        el.setAttribute("href", "https://wa.me/" + cleanNumber + "?text=" + encodeURIComponent("Hi, I have a question about The AI Advantage eBook"));
        el.textContent = CONFIG.SUPPORT_WHATSAPP;
      }
    });

    // 7. Refund Policy Text
    document.querySelectorAll("[data-refund-policy]").forEach(function (el) {
      if (CONFIG.REFUND_POLICY_TEXT) {
        el.textContent = CONFIG.REFUND_POLICY_TEXT;
      }
    });

    // 8. Mobile Navigation Toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
      // Close menu when clicking any nav link
      navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          navMenu.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  });
})();
