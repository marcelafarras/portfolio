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
        "group": "PT. Inspirasi MasukKampus",
        "logo": "assets/clients/utbk-masukkampus.png"
    },
    {
        "id": "simakui-masukkampus",
        "name": "simakui.masukkampus",
        "group": "PT. Inspirasi MasukKampus",
        "logo": "assets/clients/simakui-masukkampus.png"
    },
    {
        "id": "masuk-kedinasan",
        "name": "masuk.kedinasan",
        "group": "PT. Inspirasi MasukKampus",
        "logo": "assets/clients/masuk-kedinasan.png"
    },
    {
        "id": "bintaro-jaya",
        "name": "Bintaro Jaya",
        "group": "PT. Jaya Real Property, Tbk.",
        "logo": "assets/clients/bintaro-jaya.svg"
    },
    {
        "id": "graha-raya",
        "name": "Graha Raya",
        "group": "PT. Jaya Real Property, Tbk.",
        "logo": "assets/clients/graha-raya.svg"
    },
    {
        "id": "puri-jaya",
        "name": "Puri Jaya",
        "group": "PT. Jaya Real Property, Tbk.",
        "logo": "assets/clients/puri-jaya.svg"
    },
    {
        "id": "jaya-imperial-park",
        "name": "Jaya Imperial Park",
        "group": "PT. Jaya Real Property, Tbk.",
        "logo": "assets/clients/jaya-imperial-park.svg"
    },
    {
        "id": "serpong-jaya",
        "name": "Serpong Jaya",
        "group": "PT. Jaya Real Property, Tbk.",
        "logo": "assets/clients/serpong-jaya.svg"
    },
    {
        "id": "emerald-apartemen-bintaro",
        "name": "Emerald Apartemen Bintaro",
        "group": "PT. Jaya Real Property, Tbk.",
        "logo": "assets/clients/emerald-apartemen-bintaro.svg"
    },
    {
        "id": "bintaro-plaza-residence",
        "name": "Bintaro Plaza Residence",
        "group": "PT. Jaya Real Property, Tbk.",
        "logo": "assets/clients/bintaro-plaza-residence.svg"
    },
    {
        "id": "silk-town",
        "name": "Silk Town",
        "group": "PT. Jaya Real Property, Tbk.",
        "logo": "assets/clients/silk-town.svg"
    },
    {
        "id": "thamrin-nine",
        "name": "Thamrin Nine",
        "group": "PT. Putragaya Wahana",
        "logo": "assets/clients/thamrin-nine.svg"
    },
    {
        "id": "le-parc-luxury-residence",
        "name": "Le Parc Luxury Residence",
        "group": "PT. Putragaya Wahana",
        "logo": "assets/clients/le-parc-luxury-residence.svg"
    },
    {
        "id": "agora-mall",
        "name": "Agora Mall",
        "group": "PT. Putragaya Wahana",
        "logo": "assets/clients/agora-mall.svg"
    },
    {
        "id": "up-at-thamrin-nine",
        "name": "UP at Thamrin Nine",
        "group": "PT. Putragaya Wahana",
        "logo": "assets/clients/up-at-thamrin-nine.svg"
    },
    {
        "id": "thamrin-nine-ballroom",
        "name": "Thamrin Nine Ballroom",
        "group": "PT. Putragaya Wahana",
        "logo": "assets/clients/thamrin-nine-ballroom.svg"
    },
    {
        "id": "chubb-square",
        "name": "Chubb Square",
        "group": "PT. Putragaya Wahana",
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
      "id": "album-at-home",
      "title": "Photo album, a personal story",
      "category": "AI-generated content / UGC-style video",
      "services": [
        "ai",
        "social"
      ],
      "description": "A creator-style product video showing a photo album through an everyday conversation.",
      "demonstrates": "Presenting a product through a relatable story and a conversational delivery.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/album-at-home/video.mp4",
      "poster": "assets/work/album-at-home/poster.webp",
      "previewSrc": "assets/work/album-at-home/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "album-prelaunch",
      "title": "A gift for the moments that matter",
      "category": "AI-generated content / Product prelaunch",
      "services": [
        "ai",
        "social"
      ],
      "description": "A short prelaunch video placing a photo album inside a gift-giving story.",
      "demonstrates": "Introducing a product through atmosphere, emotion and a simple reveal.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/album-prelaunch/video.mp4",
      "poster": "assets/work/album-prelaunch/poster.webp",
      "previewSrc": "assets/work/album-prelaunch/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "planner-comment-reply",
      "title": "Turn a question into a product story",
      "category": "AI-generated content / UGC-style video",
      "services": [
        "ai",
        "social"
      ],
      "description": "A comment-led video answering a question about the planner range.",
      "demonstrates": "Answering audience questions with a focused product response.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/planner-comment-reply/video.mp4",
      "poster": "assets/work/planner-comment-reply/poster.webp",
      "previewSrc": "assets/work/planner-comment-reply/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "autumn-word-game",
      "format": "carousel",
      "title": "Turn a product into an activity",
      "category": "AI-generated visuals / Carousel",
      "services": [
        "ai",
        "social",
        "design"
      ],
      "description": "A five-slide autumn word-game carousel connecting letter pieces with everyday objects.",
      "demonstrates": "Developing a useful social idea around a product through sequential visuals.",
      "origin": "Brand work / AI-generated visuals",
      "image": "assets/work/autumn-word-game/01.webp",
      "imageAlt": "Turn a product into an activity, slide 1 of 5",
      "slides": [
        {
          "src": "assets/work/autumn-word-game/01.webp",
          "alt": "Turn a product into an activity, slide 1 of 5"
        },
        {
          "src": "assets/work/autumn-word-game/02.webp",
          "alt": "Turn a product into an activity, slide 2 of 5"
        },
        {
          "src": "assets/work/autumn-word-game/03.webp",
          "alt": "Turn a product into an activity, slide 3 of 5"
        },
        {
          "src": "assets/work/autumn-word-game/04.webp",
          "alt": "Turn a product into an activity, slide 4 of 5"
        },
        {
          "src": "assets/work/autumn-word-game/05.webp",
          "alt": "Turn a product into an activity, slide 5 of 5"
        }
      ],
      "linkLabel": "Open slide image"
    },
    {
      "id": "album-colours",
      "title": "Five colours, one visual story",
      "category": "AI-generated visuals / Graphic design",
      "services": [
        "ai",
        "design",
        "social"
      ],
      "description": "A product visual presenting a photo album in five colour options.",
      "demonstrates": "Showing product options through composition, hierarchy and concise copy.",
      "origin": "Brand work / AI-generated visuals",
      "image": "assets/work/album-colours/image.webp",
      "imageAlt": "A product visual presenting a photo album in five colour options.",
      "linkLabel": "Open full visual"
    },
    {
      "id": "halloween-characters",
      "title": "A little character goes a long way",
      "category": "AI-generated content / Animation",
      "services": [
        "ai",
        "social"
      ],
      "description": "A Halloween story featuring animated characters and a reward chart.",
      "demonstrates": "Building a seasonal brand story around a recognisable product.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/halloween-characters/video.mp4",
      "poster": "assets/work/halloween-characters/poster.webp",
      "previewSrc": "assets/work/halloween-characters/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "tidy-up-routine",
      "format": "carousel",
      "title": "Make a routine easier to picture",
      "category": "AI-generated visuals / Carousel",
      "services": [
        "ai",
        "social",
        "design"
      ],
      "description": "A five-slide carousel turning “tidy up” into concrete tasks with a reward-chart context.",
      "demonstrates": "Explaining an idea one step at a time through images, copy and layout.",
      "origin": "Brand work / AI-generated visuals",
      "image": "assets/work/tidy-up-routine/01.webp",
      "imageAlt": "Make a routine easier to picture, slide 1 of 5",
      "slides": [
        {
          "src": "assets/work/tidy-up-routine/01.webp",
          "alt": "Make a routine easier to picture, slide 1 of 5"
        },
        {
          "src": "assets/work/tidy-up-routine/02.webp",
          "alt": "Make a routine easier to picture, slide 2 of 5"
        },
        {
          "src": "assets/work/tidy-up-routine/03.webp",
          "alt": "Make a routine easier to picture, slide 3 of 5"
        },
        {
          "src": "assets/work/tidy-up-routine/04.webp",
          "alt": "Make a routine easier to picture, slide 4 of 5"
        },
        {
          "src": "assets/work/tidy-up-routine/05.webp",
          "alt": "Make a routine easier to picture, slide 5 of 5"
        }
      ],
      "linkLabel": "Open slide image"
    },
    {
      "id": "wall-calendar",
      "title": "A calendar in its everyday setting",
      "category": "AI-generated visuals / Graphic design",
      "services": [
        "ai",
        "design",
        "social"
      ],
      "description": "A wall-calendar visual combining the product, a home setting and a launch headline.",
      "demonstrates": "Helping an audience picture a product in their own space.",
      "origin": "Brand work / AI-generated visuals",
      "image": "assets/work/wall-calendar/image.webp",
      "imageAlt": "A wall-calendar visual combining the product, a home setting and a launch headline.",
      "linkLabel": "Open full visual"
    },
    {
      "id": "halloween-skit",
      "title": "A seasonal story, built around the product",
      "category": "AI-generated content / Skit",
      "services": [
        "ai",
        "social"
      ],
      "description": "A Halloween skit connecting a costume moment with a reward chart.",
      "demonstrates": "Turning a seasonal occasion into a narrative product video.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/halloween-skit/video.mp4",
      "poster": "assets/work/halloween-skit/poster.webp",
      "previewSrc": "assets/work/halloween-skit/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "album-talking-head",
      "title": "A story told straight to camera",
      "category": "AI-generated content / Talking head",
      "services": [
        "ai",
        "social"
      ],
      "description": "A talking-head photo-album video with changes of framing and setting.",
      "demonstrates": "Delivering a longer social narrative through an on-camera-style format.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/album-talking-head/video.mp4",
      "poster": "assets/work/album-talking-head/poster.webp",
      "previewSrc": "assets/work/album-talking-head/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "planner-inspiration",
      "format": "carousel",
      "title": "Find your own way to plan",
      "category": "Social content / Carousel",
      "services": [
        "social",
        "design"
      ],
      "description": "A five-slide carousel combining planner details, lifestyle scenes and an invitation to find a planning style.",
      "demonstrates": "Building a visual sequence that moves from product detail to everyday use.",
      "origin": "Brand work",
      "image": "assets/work/planner-inspiration/01.webp",
      "imageAlt": "Find your own way to plan, slide 1 of 5",
      "slides": [
        {
          "src": "assets/work/planner-inspiration/01.webp",
          "alt": "Find your own way to plan, slide 1 of 5"
        },
        {
          "src": "assets/work/planner-inspiration/02.webp",
          "alt": "Find your own way to plan, slide 2 of 5"
        },
        {
          "src": "assets/work/planner-inspiration/03.webp",
          "alt": "Find your own way to plan, slide 3 of 5"
        },
        {
          "src": "assets/work/planner-inspiration/04.webp",
          "alt": "Find your own way to plan, slide 4 of 5"
        },
        {
          "src": "assets/work/planner-inspiration/05.webp",
          "alt": "Find your own way to plan, slide 5 of 5"
        }
      ],
      "linkLabel": "Open slide image"
    },
    {
      "id": "planner-launch",
      "title": "A new year, on paper",
      "category": "AI-generated content / Product launch",
      "services": [
        "ai",
        "social"
      ],
      "description": "A launch video introducing a dated planner and its availability message.",
      "demonstrates": "Building a short product reveal with a clear closing message.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/planner-launch/video.mp4",
      "poster": "assets/work/planner-launch/poster.webp",
      "previewSrc": "assets/work/planner-launch/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "small-wins",
      "title": "Everyday things, made visible",
      "category": "AI-generated content / Product-led video",
      "services": [
        "ai",
        "social"
      ],
      "description": "A product-led video connecting a reward chart with everyday family routines.",
      "demonstrates": "Showing where a product fits into a familiar moment.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/small-wins/video.mp4",
      "poster": "assets/work/small-wins/poster.webp",
      "previewSrc": "assets/work/small-wins/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "planner-ugc-ad",
      "title": "A planner pitch in ten seconds",
      "category": "AI-generated content / UGC-style video",
      "services": [
        "ai",
        "social"
      ],
      "description": "A short creator-style product pitch built around a planner.",
      "demonstrates": "Making a concise product message for a social video format.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/planner-ugc-ad/video.mp4",
      "poster": "assets/work/planner-ugc-ad/poster.webp",
      "previewSrc": "assets/work/planner-ugc-ad/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "animated-chart",
      "title": "Make the product the main character",
      "category": "AI-generated content / Animation",
      "services": [
        "ai",
        "social"
      ],
      "description": "An animated presenter introduces a reward chart in a playful setting.",
      "demonstrates": "Explaining a product through animation and character-led storytelling.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/animated-chart/video.mp4",
      "poster": "assets/work/animated-chart/poster.webp",
      "previewSrc": "assets/work/animated-chart/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "dancing-character",
      "title": "A product moment with personality",
      "category": "AI-generated content / Character video",
      "services": [
        "ai",
        "social"
      ],
      "description": "A character-led reward-chart video using movement and on-screen copy.",
      "demonstrates": "Creating an expressive, memorable social format around a product.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/dancing-character/video.mp4",
      "poster": "assets/work/dancing-character/poster.webp",
      "previewSrc": "assets/work/dancing-character/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "vampire-skit",
      "title": "A familiar routine, with a twist",
      "category": "AI-generated content / Skit",
      "services": [
        "ai",
        "social"
      ],
      "description": "A vampire-themed family skit built around brushing teeth and reward-chart stars.",
      "demonstrates": "Using a short comic setup to make a product use case feel familiar.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/vampire-skit/video.mp4",
      "poster": "assets/work/vampire-skit/poster.webp",
      "previewSrc": "assets/work/vampire-skit/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "album-outdoors",
      "title": "Take the photo story outside",
      "category": "AI-generated content / UGC-style video",
      "services": [
        "ai",
        "social"
      ],
      "description": "An outdoor creator-style video introducing the idea of a physical photo album.",
      "demonstrates": "Moving a product explanation into a different setting and visual tone.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/album-outdoors/video.mp4",
      "poster": "assets/work/album-outdoors/poster.webp",
      "previewSrc": "assets/work/album-outdoors/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "album-fisheye",
      "title": "A different lens on the same product",
      "category": "AI-generated content / UGC-style video",
      "services": [
        "ai",
        "social"
      ],
      "description": "A photo-album video using a fisheye-style camera look and direct delivery.",
      "demonstrates": "Exploring a distinct visual treatment for a social product story.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/album-fisheye/video.mp4",
      "poster": "assets/work/album-fisheye/poster.webp",
      "previewSrc": "assets/work/album-fisheye/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "planner-routine",
      "title": "Show the planner in the routine",
      "category": "AI-generated content / UGC-style video",
      "services": [
        "ai",
        "social"
      ],
      "description": "A creator-style planner video combining direct delivery with product close-ups.",
      "demonstrates": "Connecting a product introduction with a practical everyday use case.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/planner-routine/video.mp4",
      "poster": "assets/work/planner-routine/poster.webp",
      "previewSrc": "assets/work/planner-routine/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "planner-fringe",
      "title": "Start with a relatable moment",
      "category": "AI-generated content / UGC-style video",
      "services": [
        "ai",
        "social"
      ],
      "description": "A planner video using a fringe dilemma as the opening story.",
      "demonstrates": "Using an everyday situation as a hook for a product-focused video.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/planner-fringe/video.mp4",
      "poster": "assets/work/planner-fringe/poster.webp",
      "previewSrc": "assets/work/planner-fringe/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "chart-voiceover",
      "title": "Let the routine tell the story",
      "category": "AI-generated content / Voiceover",
      "services": [
        "ai",
        "social"
      ],
      "description": "A reward-chart video built around family scenes, narration and captions.",
      "demonstrates": "Explaining a product through a sequence of everyday moments.",
      "origin": "Brand work / AI-generated",
      "videoSrc": "assets/work/chart-voiceover/video.mp4",
      "poster": "assets/work/chart-voiceover/poster.webp",
      "previewSrc": "assets/work/chart-voiceover/preview.mp4",
      "linkLabel": "Open full video"
    },
    {
      "id": "magnetic-calendar",
      "title": "Make the product feel at home",
      "category": "AI-generated visuals / Graphic design",
      "services": [
        "ai",
        "design",
        "social"
      ],
      "description": "A magnetic-calendar visual placing the product on a fridge in a family kitchen.",
      "demonstrates": "Communicating a product use case through setting, composition and copy.",
      "origin": "Brand work / AI-generated visuals",
      "image": "assets/work/magnetic-calendar/image.webp",
      "imageAlt": "A magnetic-calendar visual placing the product on a fridge in a family kitchen.",
      "linkLabel": "Open full visual"
    },
    {
      "id": "planner-reviews",
      "format": "carousel",
      "title": "Let product details support the story",
      "category": "Social content / Carousel",
      "services": [
        "social",
        "design"
      ],
      "description": "A five-slide planner carousel combining product layouts with review excerpts.",
      "demonstrates": "Structuring a carousel around product detail and review-led copy.",
      "origin": "Brand work",
      "image": "assets/work/planner-reviews/01.webp",
      "imageAlt": "Let product details support the story, slide 1 of 5",
      "slides": [
        {
          "src": "assets/work/planner-reviews/01.webp",
          "alt": "Let product details support the story, slide 1 of 5"
        },
        {
          "src": "assets/work/planner-reviews/02.webp",
          "alt": "Let product details support the story, slide 2 of 5"
        },
        {
          "src": "assets/work/planner-reviews/03.webp",
          "alt": "Let product details support the story, slide 3 of 5"
        },
        {
          "src": "assets/work/planner-reviews/04.webp",
          "alt": "Let product details support the story, slide 4 of 5"
        },
        {
          "src": "assets/work/planner-reviews/05.webp",
          "alt": "Let product details support the story, slide 5 of 5"
        }
      ],
      "linkLabel": "Open slide image"
    },
    {
      id: 'ai-brand-film', title: 'AI-generated product story',
      category: 'AI Content / Video', services: ['ai', 'production'],
      description: 'A short video example built around a product story and AI-generated production.',
      demonstrates: 'Showing a product through a story, scene sequencing and AI-generated video production.',
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
