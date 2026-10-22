/*
 * All CV content lives here. Edit this file to update the site.
 * `tracks` tags each role with one or more pillars: "build", "assure", "lead".
 */
window.CONTENT = {
  experience: [
    {
      org: "SAFCSP",
      orgNote: "Saudi Federation for Cybersecurity, Programming & Drones",
      role: "Advanced Software Quality Engineer",
      dates: "Dec 2024 – Present",
      location: "Riyadh",
      tracks: ["assure", "lead"],
      highlights: [
        "Release authority: final go / no-go decision on every build before it reaches users.",
        "Lead performance testing (load, stress, spike), pushing systems to their breaking point and handing engineering concrete capacity recommendations.",
        "Run static testing on BRDs to catch ambiguous or conflicting requirements before any code is written; review UI designs for usability gaps.",
        "Review peers’ test cases and coach junior testers on test design and execution.",
        "Apply PDCA continuous improvement to the testing process and use AI agents and models across test design, automation and performance work."
      ]
    },
    {
      org: "Rimal Hill 2 Homeowners Association",
      role: "President (elected)",
      dates: "Jun 2025 – Present",
      location: "Riyadh",
      tracks: ["lead"],
      highlights: [
        "Elected by a majority of homeowners to represent the owners of all 78 apartments in the complex.",
        "Manage an annual budget of SAR 480,000 and closed the fiscal year with a surplus of more than SAR 50,000.",
        "Negotiated with property-management and operations & maintenance companies, saving each of the 78 units SAR 1,000–1,500.",
        "Hold contractors accountable to their agreed duties, run owners’ meetings and votes, and make the final call on decisions for the complex.",
        "Built the association’s own document-archiving system covering the founding certificate, vendor contracts and service proposals."
      ]
    },
    {
      org: "SAMI Advanced Electronics",
      role: "Senior Validation Specialist",
      dates: "Oct 2023 – Dec 2024",
      location: "Riyadh",
      tracks: ["assure", "lead"],
      highlights: [
        "Unified Collaboration Platform (UCP) for the Ministry of Defense: acted as the link between the vendor (ASSET) and the Ministry, owning the master tracker and its statistics.",
        "Tracked 20–60 open issues and change requests at a time, with daily stakeholder reports on application and infrastructure changes.",
        "Manasik Platform (Ministry of Defense, web & mobile) and Smart Site Safety Solution (Saudi Aramco, web): test design, BRD and UI review, execution and stakeholder reporting.",
        "Guided junior testers across all three projects."
      ]
    },
    {
      org: "solutions by stc",
      role: "Software Quality Assurance",
      dates: "Aug 2020 – Oct 2023",
      location: "Riyadh",
      tracks: ["assure"],
      highlights: [
        "Built test automation with Selenium, TestNG, SHAFT and Cucumber that cut Fleet Control System regression from 1–2 weeks to 6 hours.",
        "Held release authority on the products I tested.",
        "Projects: Fleet Control System (Aug 2020 – Feb 2023) and SDAIA National Data Management Office (Feb 2023 – Oct 2023).",
        "Checked UI/UX designs against requirements and produced test progress reports for stakeholders."
      ]
    },
    {
      org: "solutions by stc",
      role: "Software Developer (Backend)",
      dates: "Jan 2019 – Aug 2020",
      location: "Riyadh",
      tracks: ["build"],
      highlights: [
        "Implemented product-owner user stories in Java and Spring Boot on a microservices architecture.",
        "Projects: stc Cloud Marketplace (billing team) and Fleet Control Service, the same product I later moved to testing, so I know it from both sides."
      ]
    },
    {
      org: "Secured Services Systems (SSSIT)",
      role: "Software Engineer",
      dates: "Aug 2018 – Dec 2018",
      location: "Riyadh",
      tracks: ["build"],
      highlights: [
        "Developed databases for government and non-government organizations and kept them running through technical support."
      ]
    }
  ],

  caseStudies: [
    {
      title: "Regression testing: from two weeks to six hours",
      context: "Fleet Control System · solutions by stc",
      metric: "~90% less regression time",
      problem: "Manual regression took 1–2 weeks for each release, so testing was the bottleneck between finished code and shipping.",
      action: "Designed and built an automated regression suite with Selenium, TestNG, SHAFT and Cucumber (BDD). I had worked on this product as a developer, so I knew which flows mattered most.",
      result: "Full regression now runs in about 6 hours, and testing no longer holds releases back."
    },
    {
      title: "Release gatekeeper",
      context: "Every QA role since 2020",
      metric: "100+ approved · 50–70 blocked",
      problem: "Someone has to own the final decision on whether a build is fit for customers, and be willing to say no.",
      action: "Made risk-based go / no-go calls backed by test evidence and clear reports, and rejected builds that broke the core product or service flow.",
      result: "More than 100 builds approved and 50–70 blocked before serious defects reached users. This earned lasting trust from senior management."
    },
    {
      title: "Finding the breaking point before customers do",
      context: "Performance engineering",
      metric: "300–900 concurrent users",
      problem: "Teams didn’t know how much load their systems could take before failing.",
      action: "Designed load, stress and spike tests and increased concurrency (typically 300–900 users) until systems hung and requests failed at a 100% error rate.",
      result: "Gave stakeholders measured failure points and written recommendations, so capacity risk is visible before it becomes an outage."
    },
    {
      title: "Running a SAR 480K community budget",
      context: "Rimal Hill 2 HOA · elected President",
      metric: "SAR 50K+ surplus",
      problem: "78 apartment owners needed fair, transparent management of shared services, contractors and money.",
      action: "Re-negotiated every property-management and O&M contract on price and service level, held vendors to their obligations, and put decisions to owners’ votes.",
      result: "Saved each unit SAR 1,000–1,500, closed the fiscal year more than SAR 50,000 in surplus, and built a digital archive for the association’s records."
    },
    {
      title: "Automdjango: an open-source test framework",
      context: "Personal project · Python",
      metric: "Clone, customize, run",
      problem: "Teams lose time setting up a test-automation stack from scratch for every project.",
      action: "Built a reusable framework on Django and pytest using Selenium with the page-object model, Allure reporting, Docker for running on any OS, and a Makefile for one-command setup.",
      result: "Anyone can clone it and start writing tests right away. Mobile and REST API support are in progress.",
      link: { label: "View on GitHub", href: "https://github.com/slomsubaie/automdjango" }
    }
  ],

  skills: [
    {
      group: "Leadership & Management",
      track: "lead",
      items: [
        "Stakeholder management", "Vendor negotiation", "Contract oversight",
        "Budget management", "Team mentoring", "Release decision-making",
        "Meeting facilitation & governance", "Continuous improvement (PDCA)"
      ]
    },
    {
      group: "Quality Engineering",
      track: "assure",
      items: [
        "Test strategy & design", "Test automation", "Performance testing",
        "Static testing (BRDs)", "UI/UX review", "Test reporting",
        "Selenium", "SHAFT", "TestNG", "Cucumber", "pytest", "Allure"
      ]
    },
    {
      group: "Engineering & AI",
      track: "build",
      items: [
        "Java", "Spring Boot", "Microservices", "Python", "Django",
        "Docker", "Make", "Databases", "AI agents & models"
      ]
    }
  ],

  certifications: [
    { name: "Certified Software Tester (CSTE)" },
    { name: "Certified Digital Marketing Associate" }
  ],

  education: [
    { school: "Saudi Electronic University", degree: "MBA, Digital Marketing", dates: "2022 – 2024" },
    { school: "King Fahd University of Petroleum & Minerals (KFUPM)", degree: "BSc, Computer Science", dates: "2013 – 2018" }
  ],

  languages: ["Arabic (native)", "English (professional working)"]
};
