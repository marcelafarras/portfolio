# Marcel Farras portfolio

A static, service-led portfolio aligned with **Your Partner in Ideas & Execution**.

## Services

- Social Media
- AI Content & Workflows
- Photo & Video
- Graphic Design
- Event Support

## Edit the work

The main gallery uses `SITE.samples` in `content.js`. Add a sample only when its actual media is available. Each entry includes:

- `id`, `title`, `category` and `services` (one or more of `social`, `ai`, `production`, `design`, `events`)
- `description` and `demonstrates`
- `origin`: an accurate label such as Personal content, Self-initiated concept or Client work
- `image` with `imageAlt`, or `videoSrc` with `poster` and an optional lightweight `previewSrc`
- `linkLabel`

Keep commissioned work distinct from self-initiated examples. Verify production credits and results before adding them. A brand logo or location photograph is not evidence of an authored content deliverable. Image examples in the current gallery are creative and workflow assets, not newly commissioned photo shoots.

The black-and-yellow interface leads with client needs, a horizontal featured-work rail, output samples, and expandable service descriptions. The compact navigation uses Work and Services disclosure panels, with the same links available on mobile and keyboard.

The gallery combines format (video, static, carousel, workflows) and service filters, shows format counts within the selected service, and provides a reset when no samples match. Set a sample’s `format` to `workflow` for workflow diagrams or `carousel` for multi-slide work; videos and other images are detected automatically. The featured rail scrolls by swipe, keyboard or arrow controls and never advances automatically. The preview button and footer motion button control all automatic previews. Automatic previews respect reduced-motion and save-data preferences; visitors can pause motion.

The gallery includes 24 supplied brand-work samples added on 13 November 2026: 17 AI-generated videos, three static designs with AI-generated visuals, and four five-slide carousels. These sit alongside the five earlier samples. Marcel confirmed that the new uploads were made for brands and specified the term AI-generated. AI-generated UGC-style videos are labelled explicitly and are not presented as real customer testimonials. No performance metrics, commission terms, brand attribution beyond the supplied work, or additional production credits are inferred. Event samples remain unpublished until supplied. The first 12 samples mix formats; Show more work reveals 12 more at a time, and filtering resets the visible batch.

`assets/posters/` contains frames extracted from the existing videos. `assets/previews/` contains short, silent, compressed extracts for previews. Full playback uses the original files. The older vector title cards in `assets/covers/` are retained but no longer used. The personal TikTok clip is labelled as a retail explainer, not an on-camera testimonial.

## Collecting new work

The local `Portfolio Uploads` folder sits beside `work/` in the project workspace. It is outside this website repository. Files placed there are intake material only and are not automatically committed or deployed. Its Indonesian guide and project-notes template explain how to group exports, order carousel slides, and record the creator’s actual role.

Reviewed assets are stored in `assets/work/`, with source hashes and export mapping in `assets/work/manifest.json`. Original intake files remain unchanged. Videos are H.264/AAC web copies with fast-start metadata, separate small silent hover previews, and WebP posters. Static images use WebP. Each supplied carousel contact sheet is split into five ordered slides; the tidy-up sheet has its outer black letterboxing removed. The viewer supports swipe, arrow buttons, keyboard arrows and slide counts. Generated visuals retain the AI-generated label; no carousel is presented as just its cover.

## Brand experience strip

`SITE.brands` lists the 19 approved brand names supplied by Marcel, grouped under PT. Inspirasi MasukKampus, PT. Jaya Real Property, Tbk., PT. Putragaya Wahana and Azure Prism LTD. “Brands I've worked with” describes professional brand experience, not direct freelance-client status. The reviewed colour/white display variants are now wired from `assets/clients/`. Source and treatment notes are in that directory’s README. Set each `logo` to a reviewed `assets/clients/...` path to replace that name with the actual logo. Preserve legibility and original proportions; a failed logo falls back to its name.

Logo intake folders are in `Portfolio Uploads/06 - Brand Logos` outside this repository. Group logos can be placed at group-folder level for later review. Autograph / Luminary Tower was removed at Marcel’s request. Agora uses the Lifestyle Mall mark. Ballroom uses the supplied official Instagram profile source, and Chubb Square uses Marcel’s explicitly selected CHUBB image.

The strip pauses on hover/focus, has its own pause control, and follows the global motion control. Reduced-motion and save-data settings disable automatic motion; the complete list remains horizontally scrollable. The duplicate visual list is hidden from screen readers. Original logo files are preserved in the intake folders; white display variants retain their exact source shapes.

## Preview

Run `python3 -m http.server 4173 --bind 127.0.0.1`, then open `http://127.0.0.1:4173/`.

No build step or package installation is required. Poppins is loaded from Google Fonts, with system fallbacks. Body copy and form inputs use at least 16px; secondary labels use 12px or larger.

`assets/brand/` contains Marcel’s supplied MF logos with transparent outer padding trimmed for layout, plus tab icons derived from the black logo on the brand yellow. The white logo is used on dark backgrounds; the gold and black variants are available for other placements.

## About section

The About section retains the black background and uses the original colour portrait. Its existing brand-experience sentence includes Bintaro Jaya and Thamrin Nine Complex alongside UP at Thamrin Nine, Agora Lifestyle Mall and Le Parc Luxury Residence. Company labels under the logos use Marcel’s supplied PT names; project/brand names remain unchanged. Logo cards reserve two lines for the longer company labels.

## Contact form

The `project-enquiry` form uses Netlify Forms. Netlify stores submissions and sends email notifications independently of the deleted n8n instance. `script.js` posts URL-encoded form data to the same site, checks HTTP errors, prevents simultaneous duplicate submissions, and retains the visitor's inputs if delivery cannot be confirmed. Native submission without JavaScript goes to `thank-you.html`. A honeypot helps filter spam.

Required dashboard setup for **each** Netlify project serving this repository:

1. Check the project's Forms usage and plan before enabling it. Do not accept paid upgrades without the owner's approval.
2. Enable form detection under Forms, then deploy this revision. Confirm `project-enquiry` appears in the dashboard.
3. Add an email submission notification to `marcelafarras@gmail.com`. Complete recipient verification if Netlify requests it. The visitor's `email` field supplies Reply-To; their requested service is stored as `project_type`.
4. Send one clearly labelled test through the deployed form. Confirm both the stored submission and the email receipt before considering recovery complete.

Local automated checks use mock fetch and never submit real enquiries. Run `node --test tests/contact-form.test.cjs`. A plain local HTTP server does not implement Netlify Forms, so a local submit is expected to show the error fallback.

## Publication

Review the branch and sample labels before merging. A Netlify project connected to `main` may publish automatically when that branch changes. This revision is intended for a separate review branch and draft pull request first.
