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

The current sample gallery uses existing repository assets. No new UGC demo, customer testimonial, photography shoot or event sample was created for this revision. The Event Support, Graphic Design and Carousel filters have explicit empty states until real samples are supplied. Existing copy and workflow screenshots are not relabelled as graphic-design production credits. Existing location photographs and unused media are retained in `assets/`.

`assets/posters/` contains frames extracted from the existing videos. `assets/previews/` contains short, silent, compressed extracts for previews. Full playback uses the original files. The older vector title cards in `assets/covers/` are retained but no longer used. The personal TikTok clip is labelled as a retail explainer, not an on-camera testimonial.

## Collecting new work

The local `Portfolio Uploads` folder sits beside `work/` in the project workspace. It is outside this website repository. Files placed there are intake material only and are not automatically committed or deployed. Its Indonesian guide and project-notes template explain how to group exports, order carousel slides, and record the creator’s actual role.

After reviewing incoming work, copy only selected web-ready assets into `assets/` and add accurate `SITE.samples` entries. A carousel category is available now; wire its ordered slides into the viewer when the first actual carousel is added. Do not publish a cover as if it were the complete carousel.

## Brand experience strip

`SITE.brands` lists the 19 approved brand names supplied by Marcel, grouped under PT. Inspirasi MasukKampus, PT. Jaya Real Property, Tbk., PT. Putragaya Wahana and Azure Prism LTD. “Brands I've worked with” describes professional brand experience, not direct freelance-client status. The reviewed colour/white display variants are now wired from `assets/clients/`. Source and treatment notes are in that directory’s README. Set each `logo` to a reviewed `assets/clients/...` path to replace that name with the actual logo. Preserve legibility and original proportions; a failed logo falls back to its name.

Logo intake folders are in `Portfolio Uploads/06 - Brand Logos` outside this repository. Group logos can be placed at group-folder level for later review. Autograph / Luminary Tower was removed at Marcel’s request. Agora uses the Lifestyle Mall mark. Ballroom uses the supplied official Instagram profile source, and Chubb Square uses Marcel’s explicitly selected CHUBB image.

The strip pauses on hover/focus, has its own pause control, and follows the global motion control. Reduced-motion and save-data settings disable automatic motion; the complete list remains horizontally scrollable. The duplicate visual list is hidden from screen readers. Original logo files are preserved in the intake folders; white display variants retain their exact source shapes.

## Preview

Run `python3 -m http.server 4173 --bind 127.0.0.1`, then open `http://127.0.0.1:4173/`.

No build step or package installation is required. Poppins is loaded from Google Fonts, with system fallbacks. Body copy and form inputs use at least 16px; secondary labels use 12px or larger.

`assets/brand/` contains Marcel’s supplied MF logos with transparent outer padding trimmed for layout, plus tab icons derived from the black logo on the brand yellow. The white logo is used on dark backgrounds; the gold and black variants are available for other placements.

## About section

The full-width yellow About section provides the page’s single yellow background. It uses the original colour portrait and highlights Bintaro Jaya and Thamrin Nine Complex. Company labels under the logos use Marcel’s supplied PT names; project/brand names remain unchanged. Logo cards reserve two lines for the longer company labels.

## Contact form

The existing n8n endpoint is retained in `script.js`. HTTP error responses do not display a successful delivery message. Browser validation and a request timeout are included. Tests should use a mock endpoint or mock fetch, not send messages to the production workflow.

## Publication

Review the branch and sample labels before merging. A Netlify project connected to `main` may publish automatically when that branch changes. This revision is intended for a separate review branch and draft pull request first.
