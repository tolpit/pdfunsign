const fs = require('fs');
const { execSync } = require('child_process');

function minify() {
  try {
    execSync('npx terser app.js -c -m -o app.min.js', { stdio: 'inherit' });
    console.log(`[${new Date().toLocaleTimeString()}] ✓ app.js -> app.min.js`);
  } catch (err) {
    console.error('Minification error:', err.message);
  }
}

console.log('👀 Watching app.js for changes (Ctrl+C to stop)...');
minify();

let timeout;
fs.watch('app.js', (eventType) => {
  if (eventType === 'change') {
    clearTimeout(timeout);
    timeout = setTimeout(minify, 150);
  }
});
