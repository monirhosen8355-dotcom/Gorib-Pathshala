const subjectData = [
    { title: 'কুরআন মাজিদ', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' },
    { title: 'হাদিস শরিফ', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' },
    { title: 'ফিকহ ১ম', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' },
    { title: 'ফিকহ ২য়', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' },
    { title: 'আরবি ১ম', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' },
    { title: 'আরবি ২য়', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' },
    { title: 'বালাগাত', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' },
    { title: 'মানতিক', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' },
    { title: 'ইতিহাস', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' },
    { title: 'উসূলে হাদিস', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' },
    { title: 'ইংরেজি', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' },
    { title: 'ICT', q: 'প্রশ্ন এখানে লিখুন...', a: 'উত্তর এখানে লিখুন...' }
];

// ২. কার্ডগুলো গ্রিডে জেনারেট করা
const grid = document.getElementById('subject-grid');

subjectData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <i class="fas fa-book-open"></i>
        <h3>${item.title}</h3>
        <span class="teacher-empty">শিক্ষক: [নাম দিন]</span>
    `;
    card.onclick = () => openViewer(item);
    grid.appendChild(card);
});

// ৩. ভিউয়ার ওপেন করার ফাংশন
function openViewer(item) {
    document.getElementById('v-subject-title').innerText = item.title;
    document.getElementById('q-part').innerHTML = `<h3>${item.title} - প্রশ্নপত্র</h3><p>${item.q}</p>`;
    document.getElementById('a-part').innerHTML = `<h3>${item.title} - উত্তরপত্র</h3><p>${item.a}</p>`;
    
    // ডিফল্টভাবে প্রথম ট্যাব ওপেন করা
    switchTab('q-part');
    
    document.getElementById('full-view').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // স্ক্রল বন্ধ করা
}

// ৪. ভিউয়ার বন্ধ করার ফাংশন
function closeViewer() {
    document.getElementById('full-view').style.display = 'none';
    document.body.style.overflow = 'auto'; // স্ক্রল চালু করা
}

// ৫. ট্যাব পরিবর্তন করার ফাংশন (Question/Answer)
function switchTab(tabId) {
    // সব কন্টেন্ট হাইড করা
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active-content'));
    // সব বাটন থেকে একটিভ ক্লাস সরানো
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    // সিলেক্টেড ট্যাব শো করা
    document.getElementById(tabId).classList.add('active-content');
    
    // সঠিক বাটনে একটিভ ক্লাস দেওয়া
    const activeBtn = tabId === 'q-part' ? 0 : 1;
    document.querySelectorAll('.tab-btn')[activeBtn].classList.add('active');
}

// ৬. ব্যাকগ্রাউন্ড এনিমেশন (হালকা স্পিড)
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random() * 0.8 - 0.4; // গতি কন্ট্রোল করা হয়েছে
        this.speedY = Math.random() * 0.8 - 0.4;
        this.size = Math.random() * 2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = 'rgba(0, 242, 254, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < 70; i++) particles.push(new Particle());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();

// ৭. টাইমার (পুলিশ লাইট ইফেক্ট সহ)
const target = new Date("May 9, 2026 10:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('timer').innerText = `মিশন শুরু: ${days} দিন ${h}:${m}:${s}`;
}, 1000);