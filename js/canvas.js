var arr, velocity;
var devicePixelRatio = window.devicePixelRatio;
var count = 100;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
var radius = 5 * devicePixelRatio;
var maxXVelocity = 1;
var maxYVelocity = 1;
var mouseX = Infinity;
var mouseY = Infinity;

canvas.width = window.innerWidth * devicePixelRatio;
canvas.height = window.innerHeight * devicePixelRatio;

function randomPos() {
    return [Math.random() * canvas.width, Math.random() * canvas.height];
}

function randomVelocity() {
    temp = [Math.random() * maxXVelocity, Math.random() * maxYVelocity];
    if (Math.ceil(Math.random() * 2) == 1)
        temp[0] *= -1;
    if (Math.ceil(Math.random() * 2) == 1)
        temp[1] *= -1;
    if (temp[0] == 0 && temp[1] == 0)
        return randomVelocity();
    return temp;
}

function init() {
    arr = [];
    velocity = [];
    for (let i = 0; i < count; i++) {
        arr.push(randomPos());
        velocity.push(randomVelocity());
    }
}
init();

function dist(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

document.onmousemove = function (e) {
    mouseX = e.clientX * devicePixelRatio;
    mouseY = e.clientY * devicePixelRatio;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (canvas.width != window.innerWidth * devicePixelRatio || canvas.height != window.innerHeight * devicePixelRatio) {
        devicePixelRatio = window.devicePixelRatio;
        radius = 5 * devicePixelRatio;
        canvas.width = window.innerWidth * devicePixelRatio;
        canvas.height = window.innerHeight * devicePixelRatio;
    }
    for (let i = 0; i < count; i++) {
        if (dist(mouseX, mouseY, arr[i][0], arr[i][1]) < 100 * devicePixelRatio) {
            if ((mouseX) > arr[i][0]) {
                velocity[i][0] = -maxXVelocity;
            }
            else {
                if (velocity[i][0] < 0) {
                    velocity[i][0] = maxXVelocity;
                }
            }
            if ((mouseY) > arr[i][1]) {
                if (velocity[i][1] > 0) {
                    velocity[i][1] = -maxXVelocity;
                }
            }
            else {
                if (velocity[i][1] < 0) {
                    velocity[i][1] = maxXVelocity;
                }
            }
        }
        arr[i][0] += velocity[i][0];
        arr[i][1] += velocity[i][1];
        if (arr[i][0] > canvas.width || arr[i][1] > canvas.height || arr[i][0] < 0 || arr[i][1] < 0) {
            arr[i] = randomPos();
            velocity[i] = randomVelocity();
        }
        ctx.beginPath();
        ctx.arc(arr[i][0], arr[i][1], radius, 0, 2 * Math.PI);
        // ctx.fillStyle = '#88' + Math.floor(Math.random() * 16777215).toString(16);
        ctx.fillStyle = '#242424';
        ctx.fill();
    }
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
