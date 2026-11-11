# Marcel Farras portfolio

A static, service-led portfolio aligned with **Your Partner in Ideas & Execution**.

## Services

- Social Media
- AI Content & Workflows
- Photo & Video
- Event Support

## Edit the work

The main gallery uses `SITE.samples` in `content.js`. Add a sample only when its actual media is available. Each entry includes:

- `id`, `title`, `category` and `services` (one or more of `social`, `ai`, `production`, `events`)
- `description` and `demonstrates`
- `origin`: an accurate label such as Personal content, Self-initiated concept or Client work
- `image` with `imageAlt`, or `videoSrc` with `poster` and an optional lightweight `previewSrc`
- `linkLabel`

Keep commissioned work distinct from self-initiated examples. Verify production credits and results before adding them. A brand logo or location photograph is not evidence of an authored content deliverable.

The black-and-yellow interface leads with client needs, a silent video preview, output samples, and expandable service descriptions. Automatic previews respect reduced-motion and save-data preferences; visitors can pause motion.

The current sample gallery uses existing repository assets. No new UGC demo, customer testimonial, photography shoot or event sample was created for this revision. The Event Support filter has an explicit empty state until real samples are supplied. Existing location photographs and unused media are retained in `assets/`.

`assets/posters/` contains frames extracted from the existing videos. `assets/previews/` contains short, silent, compressed extracts for previews. Full playback uses the original files. The older vector title cards in `assets/covers/` are retained but no longer used. The personal TikTok clip is labelled as a retail explainer, not an on-camera testimonial.

## Preview

Run `python3 -m http.server 4173 --bind 127.0.0.1`, then open `http://127.0.0.1:4173/`.

No build step or package installation is required. Poppins is loaded from Google Fonts, with system fallbacks. Body copy and form inputs use at least 16px; secondary labels use 12px or larger.

`assets/brand/` contains Marcel’s supplied MF logos with transparent outer padding trimmed for layout, plus tab icons derived from the black logo on the brand yellow. The white logo is used on dark backgrounds; the gold and black variants are available for other placements.

## Contact form

The existing n8n endpoint is retained in `script.js`. HTTP error responses do not display a successful delivery message. Browser validation and a request timeout are included. Tests should use a mock endpoint or mock fetch, not send messages to the production workflow.

## Publication

Review the branch and sample labels before merging. A Netlify project connected to `main` may publish automatically when that branch changes. This revision is intended for a separate review branch and draft pull request first.
