document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
       01. BACKGROUND MOUSE EFFECT
    ===================================================== */

  const background = document.querySelector(".background");

  if (background) {
    document.addEventListener("mousemove", (event) => {
      const x = event.clientX;
      const y = event.clientY;

      background.style.setProperty("--mouse-x", `${x}px`);

      background.style.setProperty("--mouse-y", `${y}px`);
    });
  }

  /* =====================================================
       02. SECTION SCROLL REVEAL
    ===================================================== */

  const revealElements = document.querySelectorAll(
    ".about-section, " +
      ".skills-section, " +
      ".services-section, " +
      ".experience-section, " +
      ".projects-section, " +
      ".education-section, " +
      ".contact-section",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  /* =====================================================
       03. SMOOTH NAVIGATION
    ===================================================== */

  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  /* =====================================================
       04. SERVICE CARD 3D TILT
    ===================================================== */

  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const rotateX = ((y - rect.height / 2) / rect.height) * -4;

      const rotateY = ((x - rect.width / 2) / rect.width) * 4;

      card.style.transform = `translateY(-12px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });
  });

  /* =====================================================
       05. EXPERIENCE CARD 3D TILT
    ===================================================== */

  const experienceCards = document.querySelectorAll(".experience-card");

  experienceCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const rotateX = ((y - rect.height / 2) / rect.height) * -2;

      const rotateY = ((x - rect.width / 2) / rect.width) * 2;

      card.style.transform = `translateY(-8px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });
  });

  /* =====================================================
       06. PROJECT CARD 3D TILT
    ===================================================== */

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const rotateX = ((y - rect.height / 2) / rect.height) * -2;

      const rotateY = ((x - rect.width / 2) / rect.width) * 2;

      card.style.transform = `translateY(-6px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });
  });

  /* =====================================================
       07. CONTACT CARD EFFECT
    ===================================================== */

  const contactCard = document.querySelector(".contact-card");

  if (contactCard) {
    contactCard.addEventListener("mousemove", (event) => {
      const rect = contactCard.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const rotateX = ((y - rect.height / 2) / rect.height) * -2;

      const rotateY = ((x - rect.width / 2) / rect.width) * 2;

      contactCard.style.transform = `translateY(-8px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;
    });

    contactCard.addEventListener("mouseleave", () => {
      contactCard.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });
  }

  /* =====================================================
       08. SKILL CARD REVEAL
    ===================================================== */

  const skillsSection = document.querySelector(".skills-section");

  if (skillsSection) {
    const skillCards = skillsSection.querySelectorAll(".skill-card");

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("skill-visible");
          } else {
            entry.target.classList.remove("skill-visible");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    skillCards.forEach((card) => {
      skillObserver.observe(card);
    });
  }

  /* =====================================================
       09. SKILL BAR ANIMATION
    ===================================================== */

  const skillBars = document.querySelectorAll(".skill-bar span");

  const skillBarObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;

          const width = bar.style.width || getComputedStyle(bar).width;

          bar.style.width = "0%";

          setTimeout(() => {
            bar.style.width = width;
          }, 200);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  skillBars.forEach((bar) => {
    skillBarObserver.observe(bar);
  });

  /* =====================================================
       10. CONTACT ITEMS REVEAL
    ===================================================== */

  const contactItems = document.querySelectorAll(".contact-item");

  const contactItemObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("contact-visible");
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  contactItems.forEach((item) => {
    contactItemObserver.observe(item);
  });

  /* =====================================================
       11. PARALLAX EFFECT FOR BACKGROUND GLOWS
    ===================================================== */

  const glowOne = document.querySelector(".glow-1");

  const glowTwo = document.querySelector(".glow-2");

  document.addEventListener("mousemove", (event) => {
    const moveX = (event.clientX - window.innerWidth / 2) * 0.015;

    const moveY = (event.clientY - window.innerHeight / 2) * 0.015;

    if (glowOne) {
      glowOne.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }

    if (glowTwo) {
      glowTwo.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    }
  });

  /* =====================================================
       12. ACTIVE NAVIGATION ON SCROLL
    ===================================================== */

  const sections = document.querySelectorAll("section[id]");

  const navigationLinks = document.querySelectorAll('nav a[href^="#"]');

  const activeSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");

          navigationLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: 0.45,
    },
  );

  sections.forEach((section) => {
    activeSectionObserver.observe(section);
  });

  /* =====================================================
       13. SCROLL PROGRESS
    ===================================================== */

  const progressBar = document.querySelector(".scroll-progress");

  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      progressBar.style.width = `${progress}%`;
    });
  }

  /* =====================================================
       14. MAGNETIC BUTTON EFFECT
    ===================================================== */

  const magneticButtons = document.querySelectorAll(
    ".hero-buttons a, " + ".contact-button, " + ".contact-email",
  );

  magneticButtons.forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();

      const x = event.clientX - rect.left - rect.width / 2;

      const y = event.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.08}px,
                               ${y * 0.08}px)`;
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0, 0)";
    });
  });

  /* =====================================================
       15. IMAGE HOVER PARALLAX
    ===================================================== */

  const profileImage = document.querySelector(".profile-image");

  if (profileImage) {
    profileImage.addEventListener("mousemove", (event) => {
      const rect = profileImage.getBoundingClientRect();

      const x = event.clientX - rect.left - rect.width / 2;

      const y = event.clientY - rect.top - rect.height / 2;

      profileImage.style.transform = `translate(${x * 0.025}px,
                               ${y * 0.025}px)`;
    });

    profileImage.addEventListener("mouseleave", () => {
      profileImage.style.transform = "translate(0, 0)";
    });
  }

  /* =====================================================
       16. PAGE LOAD ANIMATION
    ===================================================== */

  document.body.classList.add("page-loaded");

  /* =====================================================
   MOBILE MENU
===================================================== */

  const menuToggle = document.querySelector(".menu-toggle");

  const mobileMenu = document.querySelector(".mobile-menu");

  const mobileLinks = document.querySelectorAll(".mobile-links a");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");

      mobileMenu.classList.toggle("active");

      document.body.classList.toggle("menu-open");
    });

    /* Close menu after clicking a link */

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");
      });
    });
  }

  /* =====================================================
       17. CONSOLE MESSAGE
    ===================================================== */

  console.log("Nusrat Portfolio Loaded Successfully 🚀");
});
