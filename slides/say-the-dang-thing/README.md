# Say the Dang Thing workshop deck

This is the participant-facing presentation for Keragan Cavolo's July 20, 2026 workshop at Fabrik DUMBO. Everything visible on a slide is ordinary HTML in `index.html`. There are no private speaker notes, generated content files, or build steps.

## Preview the deck

Open Terminal, move into the website folder, and run exactly:

```bash
cd /Users/keragancavolo/Desktop/coach-site
python3 -m http.server 8000
```

Leave that Terminal window open. In Chrome, Safari, or Firefox, visit:

```text
http://localhost:8000/slides/say-the-dang-thing/
```

To stop the preview server later, return to Terminal and press `Control+C`.

## Present and navigate

- Use the right and left arrow keys to move between slides.
- Press `Space` to advance.
- Press `Esc` or `O` to open overview mode. Press it again to return.
- Use the browser's full-screen command. On most Macs, press `Control+Command+F`.
- The progress line runs along the bottom edge. The current and total slide numbers appear at the lower right.
- A direct link such as `http://localhost:8000/slides/say-the-dang-thing/#/17` opens slide 18. Refreshing the browser keeps that interior slide selected.
- This deck has no vertical slide stacks, fragments, or presenter notes. Reveal.js still maps the up and down arrows to previous and next in this flat sequence.

## Edit visible text

Open `index.html` in a text editor. Every slide starts with a numbered comment like this:

```html
<!-- SLIDE 12: Reflection Prompts | LAYOUT: Multi-question reflection | EDIT: Replace, remove, or reorder questions. Keep all prompts visible. -->
<section class="slide prompt-slide">
  ...
</section>
```

Change words directly between the HTML tags. A prompt can be edited without touching JavaScript:

```html
<p>What made the conversation feel hard?</p>
```

Keep the `<` and `>` parts intact. If new copy becomes crowded, shorten it or add another slide rather than shrinking the type.

## Duplicate, move, or delete a slide

To duplicate a slide, copy its complete comment and `<section>...</section>` block, then paste the copy between two other slides.

To move a slide, move that same complete block to a new position in `index.html`. Reveal.js follows the order of the sections automatically.

To delete a slide, remove its complete comment and section block. Slide numbers update automatically.

## Remove a fragment

This workshop currently uses no fragments, so every activity prompt stays visible. If a future edit adds one, remove the word `fragment` from the element's class:

```html
<p class="fragment">This appears later.</p>
```

becomes:

```html
<p>This stays visible.</p>
```

## Change colors

Open `styles.css`. The **Brand tokens** near the top control the shared palette:

```css
--slide-background: #faf7f1;
--main-text: #2b2622;
--principal-accent: #a84f37;
--secondary-accent: #d97757;
```

Workshop-only layouts are in `workshop.css`. The local Karla and Caveat font files live in `assets/fonts/` and are declared at the top of `styles.css`.

## Replace the QR code

The final slide shows both the QR code and `keragancavolo.com`, so people can see where the code leads and still have a written address. To replace the QR later, place the new image in `assets/` and update this line in `index.html`:

```html
<img class="contact-qr" src="assets/keragancavolo-website-qr.png" alt="QR code linking to keragancavolo.com">
```

Do not remove the written website address. It is useful when scanning is unavailable and makes the destination clear.

## Export to PDF

1. Start the local server and open `http://localhost:8000/slides/say-the-dang-thing/?print-pdf` in Chrome or Chromium.
2. Wait until all 35 slides appear down the page.
3. Open Print and choose **Save as PDF**.
4. Choose **Landscape** orientation.
5. Set margins to **None** and scale to **100%**.
6. Turn on **Background graphics**.
7. Check all 35 pages before sharing the PDF.

## Troubleshooting

**The page is blank or files are missing:** Make sure Terminal is still running the server and that you opened the `http://localhost:8000/...` address, not `index.html` directly.

**Port 8000 is already in use:** Start the server on another port:

```bash
python3 -m http.server 8001
```

Then replace `8000` with `8001` in the browser address.

**A font looks different:** Reload the page once. Karla and Caveat are bundled in `assets/fonts/`, so an internet connection is not required. Confirm that the font files were copied along with the rest of the workshop folder.

**An image is missing:** Confirm that its filename, capitalization, and extension exactly match the relative path in `index.html`. Keep workshop images inside `assets/`.

**A slide looks crowded after editing:** Restore shorter copy or split the material across two slides. Avoid lowering body text below the existing sizes.
