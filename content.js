// Edit this file to update the service-led portfolio.
// Only samples with an actual asset belong in `samples`.
// For future commissioned or self-initiated work, set origin accurately.
// Never add client names, results or production credits without checking them.
const SITE = {
  // Reviewed originals and faithful white display variants. See assets/clients/README.md.
  brands: [
    {
        "id": "utbk-masukkampus",
        "name": "utbk.masukkampus",
        "group": "MasukKampus",
        "logo": "assets/clients/utbk-masukkampus.png"
    },
    {
        "id": "simakui-masukkampus",
        "name": "simakui.masukkampus",
        "group": "MasukKampus",
        "logo": "assets/clients/simakui-masukkampus.png"
    },
    {
        "id": "masuk-kedinasan",
        "name": "masuk.kedinasan",
        "group": "MasukKampus",
        "logo": "assets/clients/masuk-kedinasan.png"
    },
    {
        "id": "bintaro-jaya",
        "name": "Bintaro Jaya",
        "group": "Jaya Real Property",
        "logo": "assets/clients/bintaro-jaya.svg"
    },
    {
        "id": "graha-raya",
        "name": "Graha Raya",
        "group": "Jaya Real Property",
        "logo": "assets/clients/graha-raya.svg"
    },
    {
        "id": "puri-jaya",
        "name": "Puri Jaya",
        "group": "Jaya Real Property",
        "logo": "assets/clients/puri-jaya.svg"
    },
    {
        "id": "jaya-imperial-park",
        "name": "Jaya Imperial Park",
        "group": "Jaya Real Property",
        "logo": "assets/clients/jaya-imperial-park.svg"
    },
    {
        "id": "serpong-jaya",
        "name": "Serpong Jaya",
        "group": "Jaya Real Property",
        "logo": "assets/clients/serpong-jaya.svg"
    },
    {
        "id": "emerald-apartemen-bintaro",
        "name": "Emerald Apartemen Bintaro",
        "group": "Jaya Real Property",
        "logo": "assets/clients/emerald-apartemen-bintaro.svg"
    },
    {
        "id": "bintaro-plaza-residence",
        "name": "Bintaro Plaza Residence",
        "group": "Jaya Real Property",
        "logo": "assets/clients/bintaro-plaza-residence.svg"
    },
    {
        "id": "silk-town",
        "name": "Silk Town",
        "group": "Jaya Real Property",
        "logo": "assets/clients/silk-town.svg"
    },
    {
        "id": "thamrin-nine",
        "name": "Thamrin Nine",
        "group": "Thamrin Nine",
        "logo": "assets/clients/thamrin-nine.svg"
    },
    {
        "id": "le-parc-luxury-residence",
        "name": "Le Parc Luxury Residence",
        "group": "Thamrin Nine",
        "logo": "assets/clients/le-parc-luxury-residence.svg"
    },
    {
        "id": "agora-mall",
        "name": "Agora Mall",
        "group": "Thamrin Nine",
        "logo": "assets/clients/agora-mall.svg"
    },
    {
        "id": "up-at-thamrin-nine",
        "name": "UP at Thamrin Nine",
        "group": "Thamrin Nine",
        "logo": "assets/clients/up-at-thamrin-nine.svg"
    },
    {
        "id": "thamrin-nine-ballroom",
        "name": "Thamrin Nine Ballroom",
        "group": "Thamrin Nine",
        "logo": "assets/clients/thamrin-nine-ballroom.svg"
    },
    {
        "id": "chubb-square",
        "name": "Chubb Square",
        "group": "Thamrin Nine",
        "logo": "assets/clients/chubb-square.svg"
    },
    {
        "id": "smart-panda-global",
        "name": "Smart Panda Global",
        "group": "Azure Prism LTD",
        "logo": "assets/clients/smart-panda-global.svg"
    },
    {
        "id": "string-and-space",
        "name": "String and Space",
        "group": "Azure Prism LTD",
        "logo": "assets/clients/string-and-space.svg"
    }
],
  samples: [
    {
      id: 'ai-brand-film', title: 'AI-assisted product story',
      category: 'AI Content / Video', services: ['ai', 'production'],
      description: 'A short video example built around a product story and AI-assisted production.',
      demonstrates: 'Showing a product through a story, scene sequencing and AI-assisted video production.',
      origin: 'Production sample',
      videoSrc: 'assets/ai/brand-video.mp4',
      poster: 'assets/posters/ai-brand-film.jpg',
      previewSrc: 'assets/previews/ai-brand-film.mp4',
      linkLabel: 'Open full video'
    },
    {
      id: 'on-camera', title: 'A retail story, explained simply',
      category: 'Social Media / Explainer', services: ['social', 'production'],
      description: 'Personal social content using retail footage and narration to explain different Adidas store formats.',
      demonstrates: 'Explaining a retail topic through footage, narration and captions. This is personal content, not a commissioned Adidas campaign.',
      origin: 'Personal content',
      videoSrc: 'assets/personal/tiktok-post.mp4',
      poster: 'assets/posters/on-camera.jpg',
      previewSrc: 'assets/previews/on-camera.mp4',
      linkLabel: 'Open full video'
    },
    {
      id: 'workflow', format: 'workflow', title: 'Connect the steps behind the content',
      category: 'AI Content & Workflows', services: ['ai'],
      description: 'An n8n workflow example connecting research and content delivery.',
      demonstrates: 'Workflow structure and connected production steps.',
      origin: 'Workflow example',
      image: 'assets/ai/n8n.png',
      imageAlt: "An n8n workflow diagram from Marcel\'s existing portfolio",
      linkLabel: 'View workflow image'
    },
    {
      id: 'email-creative', title: 'Plan the message, then the sequence',
      category: 'AI Content & Workflows', services: ['ai'],
      description: 'A visual example of email creative and sequence planning from my existing work library.',
      demonstrates: 'Message structure and the relationship between copy, creative and sequence.',
      origin: 'Creative example',
      image: 'assets/ai/email-sequence.jpg',
      imageAlt: 'Email sequence and creative example',
      linkLabel: 'View creative image'
    },
    {
      id: 'social-writing', title: 'Conversational social copy',
      category: 'Social Media / Copy', services: ['social'],
      description: 'A post from my personal Threads content.',
      demonstrates: 'Social copy and a conversational writing format.',
      origin: 'Personal content',
      image: 'assets/personal/threads-post.png',
      imageAlt: 'A Threads post by Marcel Farras',
      linkLabel: 'View post image'
    }
  ]
};
