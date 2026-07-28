document.querySelectorAll('.slides > section.slide').forEach((slide) => {
  const watermark = document.createElement('div');
  watermark.className = 'slide-watermark';
  watermark.setAttribute('aria-hidden', 'true');
  watermark.innerHTML = '<strong>Keragan Cavolo</strong><span>Social Health &amp; Connection Coach</span>';
  slide.appendChild(watermark);
});

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
  backgroundTransition: 'fade'
});

document.querySelectorAll('.reflection-timer').forEach((timer) => {
  const duration = Number(timer.dataset.duration) || 90;
  const display = timer.querySelector('time');
  const toggle = timer.querySelector('.timer-toggle');
  const reset = timer.querySelector('.timer-reset');
  let remaining = duration;
  let intervalId = null;

  const render = () => {
    const minutes = Math.floor(remaining / 60);
    const seconds = String(remaining % 60).padStart(2, '0');
    display.textContent = `${minutes}:${seconds}`;
  };

  const pause = () => {
    window.clearInterval(intervalId);
    intervalId = null;
    timer.classList.remove('is-running');
    toggle.textContent = remaining === 0 ? 'Done' : 'Start';
  };

  const start = () => {
    if (intervalId || remaining === 0) return;
    timer.classList.add('is-running');
    toggle.textContent = 'Pause';
    intervalId = window.setInterval(() => {
      remaining -= 1;
      render();
      if (remaining === 0) {
        pause();
        timer.classList.add('is-finished');
      }
    }, 1000);
  };

  toggle.addEventListener('pointerdown', (event) => {
    event.stopPropagation();
  });

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (intervalId) pause(); else start();
  });

  reset.addEventListener('pointerdown', (event) => {
    event.stopPropagation();
  });

  reset.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    pause();
    remaining = duration;
    timer.classList.remove('is-finished');
    render();
  });

  render();
});
