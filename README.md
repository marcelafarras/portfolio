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
- `image` with `imageAlt`, or `videoSrc` with `poster`
- `linkLabel`

Keep commissioned work distinct from self-initiated examples. Verify production credits and results before adding them. A brand logo or location photograph is not evidence of an authored content deliverable.

The current sample gallery uses existing repository assets. No new UGC demo, customer testimonial, photography shoot or event sample was created for this revision. The Event Support filter has an explicit empty state until real samples are supplied. Existing location photographs and unused media are retained in `assets/`.

`assets/covers/` contains simple vector title cards for the video players, not frames from the videos.

## Preview

Run `python3 -m http.server 4173 --bind 127.0.0.1`, then open `http://127.0.0.1:4173/`.

No build step or package installation is required. Fonts are loaded from Google Fonts, with system fallbacks.

## Contact form

The existing n8n endpoint is retained in `script.js`. HTTP error responses do not display a successful delivery message. Browser validation and a request timeout are included. Tests should use a mock endpoint or mock fetch, not send messages to the production workflow.

## Publication

Review the branch and sample labels before merging. A Netlify project connected to `main` may publish automatically when that branch changes. This revision is intended for a separate review branch and draft pull request first.
