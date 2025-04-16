// 1. Minimize DOM Manipulations
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);

// 2. Use Event Delegation
document.getElementById('parentElement').addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.className')) {
        console.log('Button clicked:', event.target);
    }
});

// 3. Avoid Memory Leaks
function createClosure() {
    let largeData = new Array(1000000).fill('data');
    return function () {
        console.log(largeData[0]);
    };
}
const closure = createClosure();
// Ensure to nullify references when no longer needed
largeData = null;

// 4. Use Efficient Loops
const array = [1, 2, 3, 4, 5];
for (let i = 0, len = array.length; i < len; i++) {
    console.log(array[i]);
}

// 5. Debounce or Throttle Expensive Operations
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

const logResize = debounce(() => {
    console.log('Window resized');
}, 300);

window.addEventListener('resize', logResize);

// 6. Use Web Workers for Heavy Computations
if (window.Worker) {
    const worker = new Worker('worker.js');
    worker.postMessage('Start computation');
    worker.onmessage = (event) => {
        console.log('Result from worker:', event.data);
    };
}

// 7. Optimize Rendering with requestAnimationFrame
function animate() {
    // Perform animation logic
    console.log('Animating...');
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);