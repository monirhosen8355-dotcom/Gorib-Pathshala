// Subject specific data
const subjectData = {
    'quran': {
        title: 'কুরআন মাজিদ',
        imp: '১. সূরা বাকারার শেষ দুই আয়াতের শানে নুযুল ও শিক্ষা। <br> ২. সূরা আল-ইমরানের গুরুত্বপূর্ণ আয়াতসমূহ।',
        notes: 'অধ্যায় ১: ওহীর গুরুত্ব ও প্রকারভেদ। ওহী মাতলু ও গায়রে মাতলু এর পার্থক্য শিখে রেখো।',
        quick: 'পরীক্ষার আগে অবশ্যই আয়াতগুলোর অর্থ ও নির্দিষ্ট কিছু শব্দের তাহকীক দেখে নিবে।'
    },
    'hadith': {
        title: 'হাদিস',
        imp: '১. ইলমের গুরুত্ব সম্পর্কিত হাদিস। <br> ২. ইমান ও নিফাকের লক্ষণ সম্পর্কিত হাদিস।',
        notes: 'সিহাহ সিত্তার পরিচিতি এবং ইমাম বুখারী (রহ)-এর জীবনী গুরুত্বপূর্ণ।',
        quick: 'হাদিসের রাবী ও মতন ভালো করে মুখস্থ করো।'
    },
    'fiqh': {
        title: 'ফিকহ',
        imp: '১. কিতাবুত তাহারাত থেকে ওযু ও গোসলের ফরযসমূহ। <br> ২. সালাত অধ্যায়ের ওয়াজিব ও সুন্নাহ।',
        notes: 'পরিভাষাগুলো (যেমন: ফরয, ওয়াজিব, সুন্নাত) ক্লিয়ার রাখো।',
        quick: 'ইমাম আবু হানিফা (রহ) এর মাযহাবের দলিলগুলো এক নজর দেখে নাও।'
    },
    'arabic': {
        title: 'আরবি',
        imp: '১. নির্দিষ্ট নাস (অনুচ্ছেদ) থেকে প্রশ্ন উত্তর। <br> ২. তারকীব ও বাক্য গঠন।',
        notes: ' নাহু ও সরফ এর প্রধান নিয়মগুলো রিভিশন দাও।',
        quick: 'বিগত বছরের শব্দার্থগুলো বেশি করে পড়ো।'
    },
    'bangla': {
        title: 'বাংলা',
        imp: '১. অপরিচিতা ও বিড়ালের মূলভাব। <br> ২. বিভীষণের প্রতি মেঘনাদ কবিতার ব্যাখ্যা।',
        notes: 'লেখক পরিচিতি ও জন্ম-মৃত্যু সাল মনে রাখার টেকনিক ফলো করো।',
        quick: 'সৃজনশীল প্রশ্নের "খ" ও "গ" অংশে পয়েন্ট করে লেখার চেষ্টা করবে।'
    },
    'english': {
        title: 'ইংরেজি',
        imp: '1. Article & Preposition Rules. <br> 2. Right form of verbs.',
        notes: 'Focus on Passage translation and basic grammar.',
        quick: 'Practice previous board questions for composition part.'
    }
};

// Function to open subject viewer
function openSubject(subjectKey) {
    const data = subjectData[subjectKey];
    document.getElementById('subject-title').innerText = data.title;
    document.getElementById('imp-questions').innerHTML = data.imp;
    document.getElementById('short-notes').innerHTML = data.notes;
    document.getElementById('quick-rev').innerHTML = data.quick;

    document.getElementById('subjects').style.display = 'none';
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('content-viewer').style.display = 'block';
    window.scrollTo(0, 0);
}

// Function to close subject viewer
function closeSubject() {
    document.getElementById('subjects').style.display = 'block';
    document.querySelector('.hero').style.display = 'flex';
    document.getElementById('content-viewer').style.display = 'none';
}

// Accordion logic
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const icon = header.querySelector('i');
        
        // Toggle body visibility
        if (body.style.display === "block") {
            body.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        } else {
            body.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        }
    });
});