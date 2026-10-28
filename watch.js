const fs = require('fs');
const { execSync } = require('child_process');

function minifyJs() {
  try {
    execSync('npx terser app.js -c -m -o app.min.js', { stdio: 'inherit' });
    console.log(`[${new Date().toLocaleTimeString()}] ✓ app.js -> app.min.js`);
  } catch (err) {
    console.error('JS minification error:', err.message);
  }
}

function minifyCss() {
  try {
    execSync('npx cleancss -o style.min.css style.css', { stdio: 'inherit' });
    console.log(`[${new Date().toLocaleTimeString()}] ✓ style.css -> style.min.css`);
  } catch (err) {
    console.error('CSS minification error:', err.message);
  }
}

console.log('👀 Watching app.js & style.css for changes (Ctrl+C to stop)...');
minifyJs();
minifyCss();

let timeoutJs;
fs.watch('app.js', (eventType) => {
  if (eventType === 'change') {
    clearTimeout(timeoutJs);
    timeoutJs = setTimeout(minifyJs, 150);
  }
});

let timeoutCss;
fs.watch('style.css', (eventType) => {
  if (eventType === 'change') {
    clearTimeout(timeoutCss);
    timeoutCss = setTimeout(minifyCss, 150);
  }
});
