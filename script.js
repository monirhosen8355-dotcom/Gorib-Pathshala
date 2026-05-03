// ১. ১২টি বিষয়ের ডাটাবেজ
const subjectData = [
    { title: 'কুরআন মাজিদ', q: '১. সূরা বাকারার শেষ ৩ আয়াত কি?', a: 'উত্তর: আমানাল রাসূলু বিমা উনযিলা...' },
    { title: 'হাদিস শরিফ', q: '১. ওহী কত প্রকার?', a: 'উত্তর: ওহী প্রধানত দুই প্রকার...' },
    { title: 'ফিকহ ১ম', q: '১. ওযুর ফরয কয়টি?', a: 'উত্তর: ওযুর ফরয ৪টি।' },
    { title: 'ফিকহ ২য়', q: 'ফিকহ ২য় এর গুরুত্বপূর্ণ প্রশ্নসমূহ...', a: 'ফিকহ ২য় এর উত্তরসমূহ...' },
    { title: 'আরবি ১ম', q: '১. আল-আদাব এর সংজ্ঞা দাও।', a: 'উত্তর: সাহিত্যের বিশেষ শাখা...' },
    { title: 'আরবি ২য়', q: 'আরবি ২য় প্রশ্ন এখানে...', a: 'আরবি ২য় উত্তর এখানে...' },
    { title: 'বালাগাত', q: 'বালাগাত প্রশ্ন এখানে...', a: 'বালাগাত উত্তর এখানে...' },
    { title: 'মানতিক', q: 'মানতিক প্রশ্ন এখানে...', a: 'মানতিক উত্তর এখানে...' },
    { title: 'ইতিহাস', q: 'ইতিহাস প্রশ্ন এখানে...', a: 'ইতিহাস উত্তর এখানে...' },
    { title: 'উসূলে হাদিস', q: 'উসূলে হাদিস প্রশ্ন এখানে...', a: 'উসূলে হাদিস উত্তর এখানে...' },
    { title: 'ইংরেজি', q: 'ইংরেজি প্রশ্ন এখানে...', a: 'ইংরেজি উত্তর এখানে...' },
    { title: 'ICT', q: 'ICT প্রশ্ন এখানে...', a: 'ICT উত্তর এখানে...' }
];

// ২. কার্ডগুলো গ্রিডে জেনারেট করা
const grid = document.getElementById('subject-grid');

if (grid) {
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
}

// ৩. পপ-আপ (Viewer) ওপেন করার ফাংশন
function openViewer(item) {
    const viewer = document.getElementById('full-view');
    const title = document.getElementById('v-subject-title');
    const qPart = document.getElementById('q-part');
    const aPart = document.getElementById('a-part');

    if (viewer) {
        title.innerText = item.title;
        qPart.innerHTML = `<h3>${item.title} - প্রশ্নপত্র</h3><p>${item.q}</p>`;
        aPart.innerHTML = `<h3>${item.title} - উত্তরপত্র</h3><p>${item.a}</p>`;
        
        switchTab('q-part');
        
        viewer.style.display = 'flex'; 
        document.body.style.overflow = 'hidden'; 
    }
}

// ৪. পপ-আপ বন্ধ করার ফাংশন
function closeViewer() {
    const viewer = document.getElementById('full-view');
    if (viewer) {
        viewer.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }
}

// ৫. ট্যাব পরিবর্তন করার ফাংশন
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active-content');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
        selectedContent.classList.add('active-content');
    }

    const buttons = document.querySelectorAll('.tab-btn');
    if (tabId === 'q-part') {
        buttons[0].classList.add('active');
    } else {
        buttons[1].classList.add('active');
    }
}

// ৬. এনিমেশন
const canvas = document.getElementById('bg-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.speedX = Math.random() * 0.6 - 0.3;
            this.speedY = Math.random() * 0.6 - 0.3;
            this.size = Math.random() * 2;
        }
        update() {
            this.x += this.speedX; this.y += this.speedY;
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = 'rgba(0, 242, 254, 0.4)';
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
        }
    }
    for (let i = 0; i < 70; i++) particles.push(new Particle());
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}

// ৭. টাইমার
const target = new Date("May 9, 2026 10:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        const timerElement = document.getElementById('timer');
        if (timerElement) timerElement.innerText = `মিশন শুরু: ${days} দিন ${h}:${m}:${s}`;
    }
}, 1000);

// পপ-আপের বাইরে ক্লিক করলে বন্ধ হবে
window.onclick = function(event) {
    const viewer = document.getElementById('full-view');
    if (event.target == viewer) closeViewer();
}
function acceptTerms() {
    document.getElementById("terms-popup").style.display = "none";
}

// page load হলে popup দেখাবে
window.onload = function () {
    document.getElementById("terms-popup").style.display = "flex";
};