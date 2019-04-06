(function() {
  var clickerIsMouseDown = false;
  var clickerCurrentMouseTarget = document.body;

  document.body.addEventListener('mouseup', () => { clickerIsMouseDown = false; });
  document.body.addEventListener('mousedown', () => { clickerIsMouseDown = true; });
  document.body.addEventListener('mousemove', (e) => { clickerCurrentMouseTarget = e.target });

  setInterval(() => {
    if (clickerIsMouseDown) clickerCurrentMouseTarget.click();
  }, 0);
})();
