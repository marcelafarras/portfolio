// Edit this file to update the service-led portfolio.
// Only samples with an actual asset belong in `samples`.
// For future commissioned or self-initiated work, set origin accurately.
// Never add client names, results or production credits without checking them.
const SITE = {
  samples: [
    {
      id: 'ai-brand-film', title: 'AI-generated brand video',
      category: 'AI Content / Video', services: ['ai', 'production'],
      description: 'A video example exploring AI-generated visuals and brand storytelling.',
      demonstrates: 'Visual concept, scene sequencing and AI-assisted video production.',
      origin: 'Production sample',
      videoSrc: 'assets/ai/brand-video.mp4',
      poster: 'assets/covers/ai-brand-film.svg',
      linkLabel: 'Open full video'
    },
    {
      id: 'on-camera', title: 'On-camera social video',
      category: 'Social Media / On-camera', services: ['social', 'production'],
      description: 'An example from my own social content, showing presentation and short-form video delivery.',
      demonstrates: 'On-camera presence, spoken delivery and a social video format.',
      origin: 'Personal content',
      videoSrc: 'assets/personal/tiktok-post.mp4',
      poster: 'assets/covers/on-camera.svg',
      linkLabel: 'Open full video'
    },
    {
      id: 'workflow', title: 'A content delivery workflow',
      category: 'AI Content & Workflows', services: ['ai'],
      description: 'An n8n workflow example connecting research and content delivery.',
      demonstrates: 'Workflow structure and connected production steps.',
      origin: 'Workflow example',
      image: 'assets/ai/n8n.png',
      imageAlt: "An n8n workflow diagram from Marcel\'s existing portfolio",
      linkLabel: 'View workflow image'
    },
    {
      id: 'email-creative', title: 'Email creative & sequence',
      category: 'AI Content & Workflows', services: ['ai'],
      description: 'A visual example of email creative and sequence planning from my existing work library.',
      demonstrates: 'Message structure and the relationship between copy, creative and sequence.',
      origin: 'Creative example',
      image: 'assets/ai/email-sequence.jpg',
      imageAlt: 'Email sequence and creative example',
      linkLabel: 'View creative image'
    },
    {
      id: 'social-writing', title: 'Social writing, in my own voice',
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
