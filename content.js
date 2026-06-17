// ================================================================
//  MARCEL FARRAS — WEBSITE CONTENT
//  Edit this file to update your portfolio
// ================================================================
//
//  HOW TO EDIT (Terminal):
//    1. Open Terminal (Applications → Utilities → Terminal)
//    2. Type this and press Enter:
//       nano "/Users/marcelafarras/My Website/content.js"
//    3. Use arrow keys to navigate to the text you want to change
//    4. Edit the text between the quotes " "
//    5. Save: press Ctrl + O, then Enter
//    6. Exit: press Ctrl + X
//    7. Re-upload "My Website" folder to Netlify to publish
//
//  HOW TO ADD AN IMAGE:
//    1. Put your image in "My Website/assets/works/" folder
//    2. Update image: "assets/works/your-filename.jpg"
//
//  HOW TO ADD A VIDEO (YouTube):
//    1. Open the YouTube video
//    2. Click Share → Embed → copy only the ID from the src URL
//       e.g. from src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//       copy just: dQw4w9WgXcQ
//    3. Paste as youtubeId: "dQw4w9WgXcQ"
//
//  HOW TO ADD A TIKTOK VIDEO:
//    1. Open TikTok video in browser
//    2. Copy the full URL e.g. https://www.tiktok.com/@user/video/1234567890
//    3. Paste as tiktokUrl: "https://www.tiktok.com/@user/video/1234567890"
//
//  STATUS OPTIONS: "In Progress" | "Live" | "Done"
// ================================================================

const SITE = {

  // ─────────────────────────────────────────────────────────────
  //  PERSONAL PROJECTS
  //  Update your handles, URLs, and featured videos here
  // ─────────────────────────────────────────────────────────────
  personal: [
    {
      platform: "tiktok",
      handle: "@marcelafarras",
      profileUrl: "https://www.tiktok.com/@marcelafarras",
      description: "Covering the shifts reshaping social media and how AI is changing the way brands communicate — trend breakdowns, platform updates, and what it actually means for marketers.",
      // Paste a TikTok video URL to embed your best video
      // Example: "https://www.tiktok.com/@marcelafarras/video/1234567890123456789"
      // Leave as "" if not ready yet
      tiktokUrl: "",
    },
    {
      platform: "threads",
      handle: "@marcelafarras",
      profileUrl: "https://www.threads.net/@marcelafarras",
      description: "Practical takes on social media strategy and AI tools — what's working, what's not, and how to apply it. Less theory, more action.",
      // Paste a Threads post URL to link to your best post
      featuredPostUrl: "",
    },
    {
      platform: "linkedin",
      handle: "Marcel Agusta Farras",
      profileUrl: "https://www.linkedin.com/in/marcelafarras",
      description: "Writing about AI's role in modern marketing — how to build systems, not just content. For social media professionals who want to stay ahead of the curve.",
      // Paste a LinkedIn post URL to link to your best post
      featuredPostUrl: "",
    },
  ],

  // ─────────────────────────────────────────────────────────────
  //  AI WORKS
  //  Add new items by copying a block { ... } and pasting below
  //  Change status to "Live" or "Done" when ready
  // ─────────────────────────────────────────────────────────────
  aiWorks: [
    {
      icon: "⚙️",
      title: "N8N Automation Workflow",
      description: "Automated daily news digest pulling from multiple AI sources (Grok, Gemini) delivered to Telegram bot — plus contact form automation pipeline for this portfolio website.",
      status: "Live",
      image: "assets/ai/n8n.png",
      link: "",
    },
    {
      icon: "🎬",
      title: "Full AI-Generated Brand Video",
      description: "Brand video produced 100% with AI tools (Seedance / Veo / Midjourney) — from script to final cut, no camera required.",
      status: "Live",
      videoSrc: "assets/ai/brand-video.mp4",
      image: "",
      link: "",
    },
    {
      icon: "✍️",
      title: "SEO/AEO Article System",
      description: "AI-assisted article production: keyword research → outline → draft → optimization → publish-ready — scalable to 50+ articles/day.",
      status: "Live",
      image: "assets/ai/seo-article.png",
      link: "",
    },
    {
      icon: "📧",
      title: "AI Email Marketing Sequence",
      description: "Automated email drip campaign built with AI copywriting + Klaviyo integration — personalized at scale.",
      status: "Live",
      image: "assets/ai/email-sequence.jpg",
      link: "",
    },
    {
      icon: "📈",
      title: "Automated Social Media Performance Report",
      description: "Weekly & monthly report automation — pulls data from Google Sheets, formats insights, and delivers directly to Slack. Zero manual reporting.",
      status: "Live",
      image: "assets/ai/reporting-suite.png",
      link: "",
    },
    {
      icon: "📊",
      title: "AI-Powered Content Calendar",
      description: "Personal productivity and content system built with AI — managing workout schedule, marathon training, LinkedIn & TikTok content production calendar, and daily digest automation to Telegram.",
      status: "Live",
      iframeSrc: "assets/ai/content-calendar.html",
      image: "",
      link: "",
    },
  ],

  // ─────────────────────────────────────────────────────────────
  //  BEST WORKS / GALLERY
  //  Add images or videos to each project
  //  The order here matches the order on the website
  // ─────────────────────────────────────────────────────────────
  gallery: [
    {
      brand: "UP at Thamrin Nine",
      title: "Indonesia's First Observatory Deck — Zero to Viral",
      description: "Launched social media from scratch for Indonesia's first & highest public observatory deck. Led strategy, content, KOL management, and was the on-camera talent.",
      image: "assets/works/up-thamrinnine.webp",
      youtubeId: "",    // YouTube video ID for this project
      metrics: [
        { number: "22K+",  label: "followers in 40 days" },
        { number: "6.5K+", label: "tickets sold on day 1" },
        { number: "12%",   label: "peak engagement rate" },
      ],
    },
    {
      brand: "Thamrin Nine",
      title: "17M+ Views on a Single Content",
      description: "Revamped social media strategy for Jakarta's most iconic superblock, including a viral Red Bull collaboration that hit 17M+ views.",
      image: "assets/works/thamrinnine.JPG",
      youtubeId: "",
      metrics: [
        { number: "17M+",  label: "views (1 content)" },
        { number: "+167%", label: "engagement rate growth" },
      ],
    },
    {
      brand: "Agora Mall",
      title: "Building a \"Lifestyle Mall\" Identity from Scratch",
      description: "Led content strategy and production for a new lifestyle mall, supporting 60+ tenants and 10+ events while hitting 18% engagement rate.",
      image: "assets/works/agora.jpg",
      youtubeId: "",
      metrics: [
        { number: "11K+", label: "followers in 10 months" },
        { number: "18%",  label: "peak engagement rate" },
        { number: "110+", label: "collab content pieces" },
      ],
    },
    {
      brand: "Le Parc Luxury Residence",
      title: "Luxury Brand Tone of Voice — Lifestyle-Driven Content Strategy",
      description: "Defined and executed a luxury brand's digital identity, translating architectural sophistication into aspirational yet relatable social content.",
      image: "assets/works/leparc.webp",
      youtubeId: "",
      metrics: [
        { number: "207K+", label: "views top feed content" },
      ],
    },
    {
      brand: "Thamrin Nine Ballroom",
      title: "255+ Leads Worth IDR 1.5B — Wedding & MICE Venue",
      description: "Supported lead generation for a premier wedding and MICE venue, driving 255+ qualified leads directly attributable to social media activation.",
      image: "assets/works/ballroom.png",
      youtubeId: "",
      metrics: [
        { number: "255+",     label: "qualified leads" },
        { number: "IDR 1.5B", label: "lead value" },
      ],
    },
  ],

};
