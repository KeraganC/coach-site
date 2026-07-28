/* Reveal configuration */
Reveal.initialize({
  width: 1920,
  height: 1080,
  margin: 0,
  minScale: 0.2,
  maxScale: 2,
  hash: true,
  keyboard: true,
  overview: true,
  controls: true,
  progress: true,
  slideNumber: 'c/t',
  transition: 'fade',
  transitionSpeed: 'fast',
  backgroundTransition: 'fade',
  plugins: [RevealNotes]
});

/* Optional workshop timer. Each timer slide owns its own state. */
document.querySelectorAll('.slide--timer').forEach((slide) => {
  const display = slide.querySelector('.timer-display');
  const controls = slide.querySelector('.timer-controls');
  const minutes = Number(slide.dataset.minutes) || 5;
  const startingSeconds = Math.round(minutes * 60);
  let remaining = startingSeconds;
  let intervalId = null;

  const render = () => {
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    display.setAttribute('aria-label', remaining === 0 ? 'Time is up' : `${mins} minutes and ${secs} seconds remaining`);
    slide.classList.toggle('timer-is-finished', remaining === 0);
  };

  const pause = () => {
    window.clearInterval(intervalId);
    intervalId = null;
    slide.classList.remove('timer-is-running');
  };

  const start = () => {
    if (intervalId || remaining === 0) return;
    slide.classList.add('timer-is-running');
    intervalId = window.setInterval(() => {
      remaining = Math.max(0, remaining - 1);
      render();
      if (remaining === 0) pause();
    }, 1000);
  };

  const reset = () => {
    pause();
    remaining = startingSeconds;
    render();
  };

  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.timerAction;
    if (action === 'start') start();
    if (action === 'pause') pause();
    if (action === 'reset') reset();
  });

  render();
});
