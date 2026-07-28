# Branded workshop slide template

This is a reusable browser presentation for workshops about connection, belonging, communication, and social health. Each sample slide is ordinary HTML, so you can edit it in any text editor. Reveal.js is included locally; there is no build step.

## Preview the deck

Open Terminal, move into the repository, and run exactly:

```bash
cd /Users/keragancavolo/Desktop/coach-site
python3 -m http.server 8000
```

Then open this address in a browser:

```text
http://localhost:8000/slides/template/
```

To stop the server, return to Terminal and press `Control+C`.

## Present and move around

- Enter browser full screen using the browser's full-screen command. On most Macs, press `Control+Command+F`.
- Use the right and left arrow keys to move between slides. Space also advances.
- Press `Esc` or `O` to see every slide in overview mode. Press it again to return.
- Press `S` to open presenter view with the current slide, next slide, timer, and speaker notes. Your browser must allow the new window.
- Speaker view works best from the local server, not by double-clicking `index.html`.

## Edit slides

Open `index.html`. Every slide is a clearly labeled `<section>`. A comment before each section explains what the layout is for and what to replace.

Change visible text directly between the HTML tags:

```html
<h2>Your new slide title</h2>
<p>Your new supporting sentence.</p>
```

To duplicate a slide, copy its full comment and `<section>...</section>` block, then paste the copy after it. To delete a slide, remove that full block.

Keep slides concise. If a paragraph becomes hard to read from across a room, split it across two slides instead of shrinking the text.

## Change colors or fonts

Open `styles.css`. The values under **Brand tokens** at the top control the whole deck. For example:

```css
--slide-background: #faf7f1;
--main-text: #2b2622;
--principal-accent: #a84f37;
```

The font names are also in that section. If you change the Google Fonts family, update the font `<link>` near the top of `index.html` too. The deck uses system fallbacks when Google Fonts is unavailable.

## Add an image and alt text

Put the image in `assets/`, then add ordinary HTML to a slide:

```html
<img src="assets/group-conversation.jpg" alt="Four workshop participants talking around a small table">
```

Alt text should briefly communicate what matters about the image. For purely decorative images, use `alt=""` so a screen reader can skip them.

## Add speaker notes

Add this inside a slide section. Notes are only shown in presenter view:

```html
<aside class="notes">
  Pause here and invite two or three responses from the room.
</aside>
```

## Reveal ideas gradually

Add `class="fragment"` to an element:

```html
<p class="fragment">This appears after the next click.</p>
```

Use fragments sparingly. A projected slide should still make sense at each stage.

## Use the timer

The timer sample is the final slide. Change the minutes in the opening section tag:

```html
<section class="slide slide--timer" data-minutes="8">
```

The display updates automatically when the page opens. Use the Start, Pause, and Reset buttons with a mouse or keyboard. The activity title and reminder remain visible even if JavaScript is unavailable.

## Export or print to PDF

1. Open `http://localhost:8000/slides/template/?print-pdf` in Chrome or Chromium.
2. Open the browser's Print window.
3. Choose **Save as PDF**.
4. Set layout to **Landscape**.
5. Turn on **Background graphics**.
6. Set margins to **None** and scale to **100%**.

Review the PDF before sharing it, especially if you changed a lot of text.

## Start a new workshop

Copy the entire template folder, then rename the copy. For example:

```bash
cp -R slides/template slides/belonging-workshop
```

Edit `slides/belonging-workshop/index.html` and delete sample layouts you do not need. Keep `vendor/reveal/` in the copied folder so it continues to work offline.

## Host later with GitHub Pages

The deck uses relative paths, so a future workshop folder can be published as part of this repository's GitHub Pages site. After a later, intentional commit and deployment, its address would follow the repository's normal Pages path, such as `/slides/belonging-workshop/`. This template task does not deploy anything.
