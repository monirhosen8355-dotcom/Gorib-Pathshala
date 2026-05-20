const subjectData = [
     {
title: 'আরবি ১ম পএ',
examDate: '2026-05-09 08:00:00',
q: 'Arabik 1st paper Question',
status: 'complete',
a: 'আরবি ১ম পএ এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো | সিন দুইটা থেকে ১ টা আসবে | আনসিন দুইটা থেকে ১ টা আসবে | কবিতার বড় প্রশ্ন (রচনা মূলক প্রম্ন) | সংক্ষিপ্ত প্রশ্ন উত্তর | ব্যাখ্যা ৩ টা থেকে ১ টা | কথোপকথন ১ টা ১ টাই কমন ১০০% | ইঙ্গিৎ বাচক শূণ্যস্হান | বাক্য বিন্যাস | সংক্ষিপ্ত প্রশ্ন',
qImgs: [
{img: 'image/Demo1.jpg', text: 'এটা শুধু মাএ একটা DEMO প্রশ্ন এটা থেকে কোন কিছুই আসবেনা বিস্তারিত Ans:part এ দেওয়া হলো:'},
{img: 'image/Demo2.jpg'},
{img: 'image/Demo3.jpg'},
{img: 'image/Demo4.jpg'}
],

aImgs: [
{img: 'image/quaa1by1.jpg',text: '(𝟏) নং 1st SEEN উত্তর 📌 Question1by1'},
{img: 'image/quaa1by2.jpg',text: 'Question1by2'},
{img: 'image/quaa1by3.jpg',text: 'Question1by3'},
{img: 'image/quaa1by4.jpg',text: 'Question1by4'},
{img: 'image/quaa1by5.jpg',text: 'Question1by5'},
{img: 'image/quaa1by6.jpg',text: 'Question1by6'},
{img: 'image/quaa1by7.jpg',text: 'Question1by7'},
{img: 'image/quaa1by8.jpg',text: 'Question1by8'},

{img: 'image/quaa2by1.jpg',text: '(𝟐) নং 𝟐nd SEEN প্রশ্নের উত্তর 📌 Question2by1 .......'},
{img: 'image/quaa2by2.jpg',text: 'Question2by2'},
{img: 'image/quaa2by3.jpg',text: 'Question2by3'},
{img: 'image/quaa2by4.jpg',text: 'Question2by4'},
{img: 'image/quaa2by5.jpg',text: 'Question2by5'},
{img: 'image/quaa2by6.jpg',text: 'Question2by6'},
{img: 'image/quaa2by7.jpg',text: 'Question2by7'},
{img: 'image/quaa2by8.jpg',text: 'Question2by8'},
{img: 'image/quaa2by9.jpg',text: 'Question2by9'},


{img: 'image/quaa3by1.jpg',text: '(𝟑) নং 1st UNSEEN প্রশ্নের উত্তর 📌 Question3by1 .......'},
{img: 'image/quaa3by2.jpg',text: 'Question3by2'},
{img: 'image/quaa3by3.jpg',text: 'Question3by3'},
{img: 'image/quaa3by4.jpg',text: 'Question3by4'},
{img: 'image/quaa3by5.jpg',text: 'Question3by5'},
{img: 'image/quaa3by6.jpg',text: 'Question3by6'},
{img: 'image/quaa3by7.jpg',text: 'Question3by7'},

{img: 'image/quaa4by1.jpg',text: '(𝟒) নং 𝟐nd UNSEEN প্রশ্নের উত্তর 📌 Question4by1 .......'},
{img: 'image/quaa4by2.jpg',text: 'Question4by2'},
{img: 'image/quaa4by3.jpg',text: 'Question4by3'},
{img: 'image/quaa4by4.jpg',text: 'Question4by4'},
{img: 'image/quaa4by5.jpg',text: 'Question4by5'},
{img: 'image/quaa4by6.jpg',text: 'Question4by6'},

{img: 'image/quaa5by1.jpg',text: '(𝟓) নং কবিতার বড় প্রশ্ন (রচনা মূলক প্রম্ন) 📌 Question5by1 .......'},
{img: 'image/quaa5by2.jpg',text: 'Question5by2'},
{img: 'image/quaa5by3.jpg',text: 'Question5by3'},
{img: 'image/quaa5by4.jpg',text: 'Question5by4'},
{img: 'image/quaa5by5.jpg',text: 'Question5by5'},

{img: 'image/quaa6by1.jpg',text: '(𝟔) নং সংক্ষিপ্ত প্রশ্ন উত্তর 📌 Question6by1 .......'},
{img: 'image/quaa6by2.jpg',text: 'Question6by2'},
{img: 'image/quaa6by3.jpg',text: 'Question6by3'},

{img: 'image/quaa7by1.jpg',text: '(𝟕) নং ব্যাখ্যা ৩ টা থেকে ১ টা প্রশ্ন উত্তর 📌 Question7by1 .......'},
{img: 'image/quaa7by2.jpg',text: 'Question7by2'},
{img: 'image/quaa7by3.jpg',text: 'Question7by3'},

{img: 'image/quaa8by1.jpg',text: '(𝟖) নং কথোপকথন ১ টা ১ টাই কমন ১০০% প্রশ্ন উত্তর 📌 Question8by1 .......'},
{img: 'image/quaa8by2.jpg',text: 'Question8by2'},

{img: 'image/quaa9by1.jpg',text: '(𝟗) নং ইঙ্গিৎ বাচক শূণ্যস্হান প্রশ্ন উত্তর 📌 Question8by1 .......'},
{img: 'image/quaa9by2.jpg',text: 'Question8by2'},
{img: 'image/quaa9by3.jpg',text: 'Question8by3'},

{img: 'image/quaa10by1.jpg',text: '(𝟏𝟎) নং বাক্য বিন্যাস 📌 Question10by1 .......'},
{img: 'image/quaa10by2.jpg',text: 'Question10by2'},
{img: 'image/quaa10by3.jpg',text: 'Question10by3'},
{img: 'image/quaa10by4.jpg',text: 'Question10by4'},

{img: 'image/quaa11by1.jpg',text: '(𝟏𝟏) নং সংক্ষিপ্ত প্রশ্ন 📌 Question11by1 .......'},
{img: 'image/quaa11by2.jpg',text: 'Question11by2'},
{img: 'image/quaa11by3.jpg',text: 'Question11by3'},
]
},
{ 
        title: 'বাংলা ১ম', 
        examDate: '2026-05-10 08:00:00',
        q: 'BANGLA 1st PAPER Question', 
        status: 'complete',
        a: 'বাংলা ১ম এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
       qImgs: [
{img: 'image/mcqbangla1.jpg', text: ''},
{img: 'image/mcqbangla2.jpg'},
{img: 'image/cqbangla1.jpg'},
{img: 'image/cqbangla2.jpg'}
],
        aImgs: [
            { img: 'image/Banglamcqans.jpg', text: '(0) নং BANGLA MCQ উওর 📌 ' },
            { img: 'image/quaaa1by1.jpg', text: '(1) নং সৃজনশীলের উওর 📌 Question1by1 এখানে শুধ মাএ সৃজনশীলের "ক" এবং "খ" এর উওর দেয়া হয়েছে' },
            { img: 'image/quaaa1by2.jpg', text: '(2) নং সৃজনশীলের উওর 📌 Question1by2 এখানে শুধ মাএ সৃজনশীলের "ক" এবং "খ" এর উওর দেয়া হয়েছে' },
            { img: 'image/quaaa1by3.jpg', text: '(3) নং সৃজনশীলের উওর 📌 Question1by3 এখানে শুধ মাএ সৃজনশীলের "ক" এবং "খ" এর উওর দেয়া হয়েছে' },
            
            { img: 'image/quaaa1by4.jpg', text: '(4) নং প্রশ্নের উত্তর 📌 Question1by4 এখানে শুধ মাএ সৃজনশীলের "ক" এবং "খ" এর উওর দেয়া হয়েছে' },
            { img: 'image/quaaa1by5.jpg', text: '(5) নং সৃজনশীলের উওর 📌 Question1by5 এখানে শুধ মাএ সৃজনশীলের "ক" এবং "খ" এর উওর দেয়া হয়েছে' },
            { img: 'image/quaaa1by6.jpg', text: '(6) নং সৃজনশীলের উওর 📌 Question1by6 এখানে শুধ মাএ সৃজনশীলের "ক" এবং "খ" এর উওর দেয়া হয়েছে' },
            { img: 'image/quaaa1by7.jpg', text: '(7) নং সৃজনশীলের উওর 📌 Question1by7 এখানে শুধ মাএ সৃজনশীলের "ক" এবং "খ" এর উওর দেয়া হয়েছে' },
        ]
    },

   { 
        title: 'হাদীস', 
        examDate: '2026-05-11 08:00:00',
        q: 'HADIS Question মোট ১৪ টি হাদিস', 
        status: 'complete',
        a: 'হাদীস এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
       qImgs: [
        {img: 'image/hadisq1.jpg', text: '1 নং হাদিস এর প্রশ্ন'},
        {img: 'image/hadisq2.jpg', text: '2 নং হাদিস এর প্রশ্ন'},
        {img: 'image/hadisq3.jpg', text: '3 ও 4 নং হাদিস এর প্রশ্ন'},
        {img: 'image/hadisq4.jpg', text: '5 নং হাদিস এর প্রশ্ন'},
        {img: 'image/hadisq5.jpg', text: '6 নং হাদিস এর প্রশ্ন'},
        {img: 'image/hadisq6.jpg', text: '7 নং হাদিস এর প্রশ্ন'},
        {img: 'image/hadisq7.jpg', text: '8 নং হাদিস এর প্রশ্ন'},
        {img: 'image/hadisq8.jpg', text: '9  নং হাদিস এর প্রশ্ন'},
        {img: 'image/hadisq9.jpg', text: '10 ও 11 নং হাদিস এর প্রশ্ন'},
        {img: 'image/hadisq10.jpg', text: '12 নং হাদিস এর প্রশ্ন'},
        {img: 'image/hadisq11.jpg', text: '13 ও 14 নং হাদিস এর প্রশ্ন'},
],
        aImgs: [
            { img: 'image/hqu1by1.jpg', text: '(𝟏) নং হাদিসের উওর পএ 🍁 📌 Question1by1 ' },
            { img: 'image/hqu1by2.jpg', text: 'Question1by2' },
            { img: 'image/hqu1by3.jpg', text: 'Question1by3' },

            { img: 'image/hqu1by4.jpg', text: '(𝟐) নং হাদিসের উওর পএ 🍁 📌 Question2by1' },
            { img: 'image/hqu1by5.jpg', text: 'Question2by1' },
            { img: 'image/hqu1by6.jpg', text: 'Question2by2' },

            { img: 'image/hqu1by7.jpg', text: '(𝟑)নং হাদিসের উওর পএ 🍁📌 Question3by1' },
            { img: 'image/hqu1by8.jpg', text: 'Question3by2' },

            { img: 'image/hqu1by9.jpg', text: '(4) নং হাদিসের উওর পএ 🍁 📌 Question4by1'},
            { img: 'image/hqu1by10.jpg', text: 'Question4by2' },
            { img: 'image/hqu1by11.jpg', text: 'Question4by3' },

            { img: 'image/hqu1by12.jpg', text: ' (5) নং হাদিসের উওর পএ 🍁 📌 Question5by1' },
            { img: 'image/hqu1by13.jpg', text: 'Question5by2' },

            { img: 'image/hqu1by14.jpg', text: '(6) নং হাদিসের উওর পএ 🍁 📌 Question6by1' },
            { img: 'image/hqu1by15.jpg', text: 'Question6by2' },
            { img: 'image/hqu1by16.jpg', text: 'Question6by3' },

            { img: 'image/hqu1by17.jpg', text: '(7)নং হাদিসের উওর পএ 🍁 📌  Question7by1' },
            { img: 'image/hqu1by18.jpg', text: 'Question7by2' },

            { img: 'image/hqu1by19.jpg', text: '(8) নং হাদিসের উওর পএ 🍁📌 Question8by1' },
            { img: 'image/hqu1by20.jpg', text: 'Question8by2' },

            { img: 'image/hqu1by21.jpg', text: '(9) নং হাদিসের উওর পএ 🍁 📌 Question9by1' },
            { img: 'image/hqu1by22.jpg', text: 'Question9by2' },

             { img: 'image/hqu1by23.jpg', text: '(10) নং হাদিসের উওর পএ 🍁 📌 Question10by1' },
            { img: 'image/hqu1by24.jpg', text: 'Question10by2' },

             { img: 'image/hqu1by25.jpg', text: '(11) নং হাদিসের উওর পএ 🍁 📌 Question11by1' },
            { img: 'image/hqu1by26.jpg', text: 'Question11by2' },

             { img: 'image/hqu1by27.jpg', text: '(12) নং হাদিসের উওর পএ 🍁 📌 Question12by1' },
            { img: 'image/hqu1by28.jpg', text: 'Question12by2' },

             { img: 'image/hqu1by29.jpg', text: '(13) নং হাদিসের উওর পএ 🍁 📌 Question13by1' },
            { img: 'image/hqu1by30.jpg', text: 'Question13by2' },
            { img: 'image/hqu1by31.jpg', text: 'Question13by3' },

            { img: 'image/hqu1by32.jpg', text: '(14) নং হাদিসের উওর পএ 🍁 📌 Question14by1' },
            { img: 'image/hqu1by33.jpg', text: 'Question14by2' },
        ]
    },

    { 
        title: 'ইতিহাস', 
        examDate: '2026-05-12 08:00:00',
        q: 'HISTORY Question', 
        status: 'complete',
        a: 'ইতিহাস এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
        qImgs: [
         {img: 'image/hismcq1.jpg', text: '------1-----MCQ Question paper'},
         {img: 'image/hismcq2.jpg',text: '2'},
         {img: 'image/hisqu1.jpg', text: '------1-----CQ Question paper'},
         {img: 'image/hisqu2.jpg',text: '2'}
],   
     aImgs: [
            { img: 'image/historymcqans.jpg', text: '(0) নং HISTORY MCQ প্রশ্নের উত্তর 📌 Question0by0 ' },

            { img: 'image/his1by1.jpg', text: '(1 and 2) 1 ও 2 নং প্রশ্নের উত্তর 📌 Question1by1 and Question1by2 ' },
            { img: 'image/his1by2.jpg', text: '(3) 3 নং প্রশ্নের উত্তর 📌 Question3by1' },
            { img: 'image/his1by3.jpg', text: '(4 and 5) 4 ও 5 নং প্রশ্নের উত্তর 📌 Question4by1 and Question5by1' },
            
            { img: 'image/his1by4.jpg', text: '(5) 5 নং প্রশ্নের উত্তর 📌 Question5by2' },
            { img: 'image/his1by5.jpg', text: '(6) 6 নং প্রশ্নের উত্তর 📌 Question6by1' },
            { img: 'image/his1by6.jpg', text: '(7) 7 নং প্রশ্নের উত্তর 📌 Question7by1' },
        ]
    },

    { 
        title: 'ইংরেজি ১ম', 
        examDate: '2026-05-13 08:00:00',
        q: 'English Question', 
        status: 'complete',
        a: 'ইংরেজি ১ম এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
       qImgs: [
         {img: 'image/eng1st1by1.jpg', text: 'উওর গুলা নিজে নিজে বাইর করে পড়ে ফেলো'},
         {img: 'image/eng1st1by2.jpg', text: 'উওর গুলা নিজে নিজে বাইর করে পড়ে ফেলো'},
       ],
        aImgs: [
            { img: 'image/enans1.jpg', text: '(𝟏) নং প্রশ্নের উত্তর 📌 Question1by1 এখানে দেয়া ৫০ এর মার্ক পুরোটা চ্যাটজিপিটা এবং জেমিনাই থেকে প্রতিযোগিতা করে নেওয়া। ভুল ভ্রান্তি থাকতেই পারে' },
            { img: 'image/enans2.jpg', text: 'Question1by2' },
            
        ]
    },
    { 
        title: 'ফিকহ ২য়', 
        examDate: '2026-05-14 08:00:00',
        q: 'Fiqh Question', 
        status: 'complete',
        a: 'Fiqh এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
        qImgs: ['image/Mantik Question.jpg'],
        aImgs: [
            { img: 'image/quby1.jpg', text: '(𝟏) নং প্রশ্নের উত্তর 📌 Question1by1 ' },
            { img: 'image/quby2.jpg', text: 'Question1by2' },
            { img: 'image/q1by3.jpg', text: 'Question1by3' },
            { img: 'image/q1by4.jpg', text: 'Question1by4' },
            
            { img: 'image/q2by1.jpg', text: '(𝟐) নং প্রশ্নের উত্তর 📌 Question2by1' },
            { img: 'image/q2by2.jpg', text: 'Question2by2' },
            { img: 'image/q2by3.jpg', text: 'Question2by3' },
            { img: 'image/q2by4.jpg', text: 'Question2by4' },

            { img: 'image/q3by1.jpg', text: '(𝟑) নং প্রশ্নের উত্তর 📌 Question3by1'},
            { img: 'image/3by2.jpg', text: 'Question3by2' },
            { img: 'image/quby3.jpg', text: 'Question3by3' },
            { img: 'image/quby4.jpg', text: 'Question3by4' },

            { img: 'image/q4by1.jpg', text: '(𝟒) নং প্রশ্নের উত্তর 📌 Question4by1' },
            { img: 'image/quby2.jpg', text: 'Question4by2' },
            { img: 'image/quby3.jpg', text: 'Question4by3' },
            { img: 'image/q4by4.jpg', text: 'Question4by4' },
            { img: 'image/q4by5.jpg', text: 'Question4by5' },

            { img: 'image/quby1.jpg', text: '(𝟓) নং প্রশ্নের উত্তর 📌 Question5by1' },
            { img: 'image/q5by2.jpg', text: 'Question5by2' },
            { img: 'image/quby3.jpg', text: 'Question5by3' },

            { img: 'image/quby1.jpg', text: '(𝟔) নং প্রশ্নের উত্তর 📌 Question6by1' },
            { img: 'image/quby2.jpg', text: 'Question6by2' },
            { img: 'image/quby3.jpg', text: 'Question6by3' }
        ]
    },
    { 
        title: 'বাংলা ২য় / পৌর ১ম', 
        examDate: '2026-05-16 08:00:00',
        q: 'Bangla Question', 
        status: 'complete',
        // notice: '⚠️কিছু নাই 😕🥲',
        a: 'Bangla এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
         qImgs: [{img: 'image/bangla2qu.jpg', text: 'Bangla 2nd Question paper'}],        
            aImgs: [
            { img: 'image/question1by1.jpg', text: '(𝟏2) নং প্রশ্নের উত্তর 📌Rochona Question1by1 ' },
            { img: 'image/question1by2.jpg', text: 'Question1by2' },
            { img: 'image/question1by3.jpg', text: 'Question1by3' },
            { img: 'image/question1by4.jpg', text: 'Question1by4' },
            
            { img: 'image/question2by1.jpg', text: '(11) নং প্রশ্নের উত্তর 📌 Songlap Question2by1' },
            { img: 'image/question2by2.jpg', text: 'Question2by2' },

            { img: 'image/question4by1.jpg', text: '(07) নং প্রশ্নের উত্তর 📌 Question4by1' },

            { img: 'image/question3by1.jpg', text: '(10) নং প্রশ্নের উত্তর 📌 Question3by1'},

        ]
    },{ 
        title: 'বালাগাত', 
        examDate: '2026-05-17 08:00:00',
        q: 'BALAGAT Question paper', 
        a: 'বালাগাতের পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
        status: 'complete',
        qImgs: [{img: 'image/Balagat question.jpg',text: 'বালাগাত প্রশ্নপত্র'}
],
        aImgs: [
            { img: 'image/qu1by1.jpg', text: '(𝟏) নং প্রশ্নের উত্তর 📌 Question1by1 ' },
            { img: 'image/qu1by2.jpg', text: 'Question1by2' },
            { img: 'image/qu1by3.jpg', text: 'Question1by3' },
            
            { img: 'image/qu2by1.jpg', text: '(𝟐) নং প্রশ্নের উত্তর 📌 Question2by1' },
            { img: 'image/qu2by2.jpg', text: 'Question2by2' },

            { img: 'image/qu3by1.jpg', text: '(𝟑) নং প্রশ্নের উত্তর 📌 Question3by1'},
            { img: 'image/qu3by2.jpg', text: 'Question3by2' },
            { img: 'image/qu3by3.jpg', text: 'Question3by3' },

            { img: 'image/qu4by1.jpg', text: '(𝟒) নং প্রশ্নের উত্তর 📌 Question4by1' },
            { img: 'image/qu4by2.jpg', text: 'Question4by2' },
            { img: 'image/qu4by3.jpg', text: 'Question4by3' },

            { img: 'image/qu5by1.jpg', text: '(𝟓) নং প্রশ্নের উত্তর 📌 Question5by1' },
            { img: 'image/qu5by2.jpg', text: 'Question5by2' },
            { img: 'image/qu5by3.jpg', text: 'Question5by3' },

            { img: 'image/qu6by1.jpg', text: '(𝟔) নং প্রশ্নের উত্তর 📌 Question6by1' },
            { img: 'image/qu6by2.jpg', text: 'Question6by2' },
            { img: 'image/qu6by3.jpg', text: 'Question6by3' }
        ]
    },
    { 
        title: 'মানতিক', 
        examDate: '2026-05-17 08:00:00',
        q: 'Mantik Question', 
        status: 'complete',
        a: 'মানতিক এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
        qImgs: [{img: 'image/Mantik Question.jpg',text: 'মানতিক প্রশ্নপত্র'}],
        aImgs: [
            { img: 'image/qua1by1.jpg', text: '(𝟏) নং প্রশ্নের উত্তর 📌 Question1by1 ' },
            { img: 'image/qua1by2.jpg', text: 'Question1by2' },
            { img: 'image/qua1by3.jpg', text: 'Question1by3' },
            { img: 'image/qua1by4.jpg', text: 'Question1by4' },
            
            { img: 'image/qua2by1.jpg', text: '(𝟐) নং প্রশ্নের উত্তর 📌 Question2by1' },
            { img: 'image/qua2by2.jpg', text: 'Question2by2' },
            { img: 'image/qua2by3.jpg', text: 'Question2by3' },
            { img: 'image/qua2by4.jpg', text: 'Question2by4' },

            { img: 'image/qua3by1.jpg', text: '(𝟑) নং প্রশ্নের উত্তর 📌 Question3by1'},
            { img: 'image/qua3by2.jpg', text: 'Question3by2' },
            { img: 'image/qua3by3.jpg', text: 'Question3by3' },
            { img: 'image/qua3by4.jpg', text: 'Question3by4' },

            { img: 'image/qua4by1.jpg', text: '(𝟒) নং প্রশ্নের উত্তর 📌 Question4by1' },
            { img: 'image/qua4by2.jpg', text: 'Question4by2' },
            { img: 'image/qua4by3.jpg', text: 'Question4by3' },
            { img: 'image/qua4by4.jpg', text: 'Question4by4' },
            { img: 'image/qua4by5.jpg', text: 'Question4by5' },

            { img: 'image/qua5by1.jpg', text: '(𝟓) নং প্রশ্নের উত্তর 📌 Question5by1' },
            { img: 'image/qua5by2.jpg', text: 'Question5by2' },
            { img: 'image/qua5by3.jpg', text: 'Question5by3' },

            { img: 'image/qua6by1.jpg', text: '(𝟔) নং প্রশ্নের উত্তর 📌 Question6by1' },
            { img: 'image/qua6by2.jpg', text: 'Question6by2' },
            { img: 'image/qua6by3.jpg', text: 'Question6by3' }
        ]
    },
 { 
        title: 'ইংরেজি ২য় পএ', 
        examDate: '2026-05-18 08:00:00',
        q: 'Mantik Question', 
        status: 'Rejected',
        a: 'মানতিক এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
        qImgs: ['image/Mantik Question.jpg'],
        aImgs: [
            { img: 'image/quby1.jpg', text: '(𝟏) নং প্রশ্নের উত্তর 📌 Question1by1 ' },
            { img: 'image/quby2.jpg', text: 'Question1by2' },
            { img: 'image/quby3.jpg', text: 'Question1by3' },
            { img: 'image/quby4.jpg', text: 'Question1by4' },
            
            { img: 'image/q2by1.jpg', text: '(𝟐) নং প্রশ্নের উত্তর 📌 Question2by1' },
            { img: 'image/q2by2.jpg', text: 'Question2by2' },
            { img: 'image/quby3.jpg', text: 'Question2by3' },
            { img: 'image/quby4.jpg', text: 'Question2by4' },

            { img: 'image/q3by1.jpg', text: '(𝟑) নং প্রশ্নের উত্তর 📌 Question3by1'},
            { img: 'image/q3by2.jpg', text: 'Question3by2' },
            { img: 'image/q3by3.jpg', text: 'Question3by3' },
            { img: 'image/q3by4.jpg', text: 'Question3by4' },

            { img: 'image/q4by1.jpg', text: '(𝟒) নং প্রশ্নের উত্তর 📌 Question4by1' },
            { img: 'image/quby2.jpg', text: 'Question4by2' },
            { img: 'image/quby3.jpg', text: 'Question4by3' },
            { img: 'image/a4by4.jpg', text: 'Question4by4' },
            { img: 'image/a4by5.jpg', text: 'Question4by5' },

            { img: 'image/q5by1.jpg', text: '(𝟓) নং প্রশ্নের উত্তর 📌 Question5by1' },
            { img: 'image/q5by2.jpg', text: 'Question5by2' },
            { img: 'image/q5by3.jpg', text: 'Question5by3' },

            { img: 'image/q6by1.jpg', text: '(𝟔) নং প্রশ্নের উত্তর 📌 Question6by1' },
            { img: 'image/q6by2.jpg', text: 'Question6by2' },
            { img: 'image/q6by3.jpg', text: 'Question6by3' }
        ]
    },{ 
        title: 'ফিকহ ১ম', 
        examDate: '2026-05-19 08:00:00',
        q: 'Mantik Question', 
        status: 'Rejected',
        a: 'মানতিক এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
        qImgs: ['image/Mantik Question.jpg'],
        aImgs: [
            { img: 'image/quby1.jpg', text: '(𝟏) নং প্রশ্নের উত্তর 📌 Question1by1 ' },
            { img: 'image/quby2.jpg', text: 'Question1by2' },
            { img: 'image/q1by3.jpg', text: 'Question1by3' },
            { img: 'image/q1by4.jpg', text: 'Question1by4' },
            
            { img: 'image/q2by1.jpg', text: '(𝟐) নং প্রশ্নের উত্তর 📌 Question2by1' },
            { img: 'image/q2by2.jpg', text: 'Question2by2' },
            { img: 'image/q2by3.jpg', text: 'Question2by3' },
            { img: 'image/q2by4.jpg', text: 'Question2by4' },

            { img: 'image/q3by1.jpg', text: '(𝟑) নং প্রশ্নের উত্তর 📌 Question3by1'},
            { img: 'image/3by2.jpg', text: 'Question3by2' },
            { img: 'image/quby3.jpg', text: 'Question3by3' },
            { img: 'image/quby4.jpg', text: 'Question3by4' },

            { img: 'image/q4by1.jpg', text: '(𝟒) নং প্রশ্নের উত্তর 📌 Question4by1' },
            { img: 'image/quby2.jpg', text: 'Question4by2' },
            { img: 'image/quby3.jpg', text: 'Question4by3' },
            { img: 'image/q4by4.jpg', text: 'Question4by4' },
            { img: 'image/q4by5.jpg', text: 'Question4by5' },

            { img: 'image/quby1.jpg', text: '(𝟓) নং প্রশ্নের উত্তর 📌 Question5by1' },
            { img: 'image/q5by2.jpg', text: 'Question5by2' },
            { img: 'image/quby3.jpg', text: 'Question5by3' },

            { img: 'image/quby1.jpg', text: '(𝟔) নং প্রশ্নের উত্তর 📌 Question6by1' },
            { img: 'image/quby2.jpg', text: 'Question6by2' },
            { img: 'image/quby3.jpg', text: 'Question6by3' }
        ]
    },
    { 
        title: 'কোরআন', 
        examDate: '2026-05-20 08:00:00',
        q: 'Mantik Question', 
        status: 'Rejected',
        a: 'মানতিক এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
        qImgs: ['image/Mantik Question.jpg'],
        aImgs: [
            { img: 'image/qua1by1.jpg', text: '(𝟏) নং প্রশ্নের উত্তর 📌 Question1by1 ' },
            { img: 'image/qua1by2.jpg', text: 'Question1by2' },
            { img: 'image/qua1by3.jpg', text: 'Question1by3' },
            { img: 'image/qua1by4.jpg', text: 'Question1by4' },
            
            { img: 'image/qua2by1.jpg', text: '(𝟐) নং প্রশ্নের উত্তর 📌 Question2by1' },
            { img: 'image/qua2by2.jpg', text: 'Question2by2' },
            { img: 'image/qua2by3.jpg', text: 'Question2by3' },
            { img: 'image/qua2by4.jpg', text: 'Question2by4' },

            { img: 'image/qua3by1.jpg', text: '(𝟑) নং প্রশ্নের উত্তর 📌 Question3by1'},
            { img: 'image/qua3by2.jpg', text: 'Question3by2' },
            { img: 'image/qua3by3.jpg', text: 'Question3by3' },
            { img: 'image/qua3by4.jpg', text: 'Question3by4' },

            { img: 'image/qua4by1.jpg', text: '(𝟒) নং প্রশ্নের উত্তর 📌 Question4by1' },
            { img: 'image/qua4by2.jpg', text: 'Question4by2' },
            { img: 'image/qua4by3.jpg', text: 'Question4by3' },
            { img: 'image/qua4by4.jpg', text: 'Question4by4' },
            { img: 'image/qua4by5.jpg', text: 'Question4by5' },

            { img: 'image/qua5by1.jpg', text: '(𝟓) নং প্রশ্নের উত্তর 📌 Question5by1' },
            { img: 'image/qua5by2.jpg', text: 'Question5by2' },
            { img: 'image/qua5by3.jpg', text: 'Question5by3' },

            { img: 'image/qua6by1.jpg', text: '(𝟔) নং প্রশ্নের উত্তর 📌 Question6by1' },
            { img: 'image/qua6by2.jpg', text: 'Question6by2' },
            { img: 'image/qua6by3.jpg', text: 'Question6by3' }
        ]
    },
    { 
        title: 'আরবী ২য়', 
        examDate: '2026-05-21 08:00:00',
        q: 'Mantik Question', 
        status: 'Pending',
        a: 'মানতিক এর পূর্ণ প্রশ্ন ও উত্তর নিচে দেওয়া হলো', 
        qImgs: ['image/Mantik Question.jpg'],
        aImgs: [
            { img: 'image/q1by1.jpg', text: '(𝟏) নং প্রশ্নের উত্তর 📌 Question1by1 ' },
            { img: 'image/q1by2.jpg', text: 'Question1by2' },
            { img: 'image/q1by3.jpg', text: 'Question1by3' },
            { img: 'image/quby4.jpg', text: 'Question1by4' },
            
            { img: 'image/quby1.jpg', text: '(𝟐) নং প্রশ্নের উত্তর 📌 Question2by1' },
            { img: 'image/q2by2.jpg', text: 'Question2by2' },
            { img: 'image/q2by3.jpg', text: 'Question2by3' },
            { img: 'image/q2by4.jpg', text: 'Question2by4' },

            { img: 'image/u3by1.jpg', text: '(𝟑) নং প্রশ্নের উত্তর 📌 Question3by1'},
            { img: 'image/quby2.jpg', text: 'Question3by2' },
            { img: 'image/q3by3.jpg', text: 'Question3by3' },
            { img: 'image/q3by4.jpg', text: 'Question3by4' },

            { img: 'image/q4by1.jpg', text: '(𝟒) নং প্রশ্নের উত্তর 📌 Question4by1' },
            { img: 'image/q4by2.jpg', text: 'Question4by2' },
            { img: 'image/q4by3.jpg', text: 'Question4by3' },
            { img: 'image/q4by4.jpg', text: 'Question4by4' },
            { img: 'image/q4by5.jpg', text: 'Question4by5' },

            { img: 'image/q5by1.jpg', text: '(𝟓) নং প্রশ্নের উত্তর 📌 Question5by1' },
            { img: 'image/q5by2.jpg', text: 'Question5by2' },
            { img: 'image/qby3.jpg', text: 'Question5by3' },

            { img: 'image/qby1.jpg', text: '(𝟔) নং প্রশ্নের উত্তর 📌 Question6by1' },
            { img: 'image/qby2.jpg', text: 'Question6by2' },
            { img: 'image/q6by3.jpg', text: 'Question6by3' }
        ]
    },

];

const grid = document.getElementById('subject-grid');

if (grid) {

subjectData.forEach((item, index) => {

const card = document.createElement('div');

card.className = 'card';

card.innerHTML = `
<i class="fas fa-book-open"></i>

<h3>${item.title}</h3>



<p class="status ${item.status}">
● ${item.status}
</p>

<p class="notice-text">
${item.notice || ""}
</p>

<p class="exam-timer" id="timer-${index}">
Loading...
</p>

<span class="teacher-empty">
Powered by Gorib Pathshala
</span>
`;

card.onclick = () => openViewer(item);

grid.appendChild(card);

});

}
function openViewer(item) {
    const viewer = document.getElementById('full-view');
    const title = document.getElementById('v-subject-title');
    const qPart = document.getElementById('q-part');
    const aPart = document.getElementById('a-part');

    if (viewer) {
        title.innerText = item.title;

        const qImages = item.qImgs && item.qImgs.length ? item.qImgs.map(obj => `
    <div style="margin-top:15px">

        <p style="margin-bottom:5px; font-weight:bold;">
            ${obj.text || ''}
        </p>

        <img src="${obj.img}" style="width:100%; border-radius:10px;">

        <a href="${obj.img}" download style="display:block; margin-top:5px; color:#00f2fe;">
            ⬇ Download
        </a>

    </div>
`).join('') : '';

        // 🔥 শুধু এখানে update (text + image)
        const aImages = item.aImgs && item.aImgs.length ? item.aImgs.map(obj => `
            <div style="margin-top:15px">
                <p style="margin-bottom:5px; font-weight:bold;">${obj.text}</p>
                <img src="${obj.img}" style="width:100%; border-radius:10px;">
                <a href="${obj.img}" download style="display:block; margin-top:5px; color:#00f2fe;">⬇ Download</a>
            </div>
        `).join('') : '';

        qPart.innerHTML = `
            <h3>${item.title} - প্রশ্নপত্র</h3>
            <p>${item.q}</p>
            ${qImages}
        `;

        aPart.innerHTML = `
            <h3>${item.title} - উত্তরপত্র</h3>
            <p>${item.a}</p>
            ${aImages}
        `;

        switchTab('q-part');
        viewer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeViewer() {
    const viewer = document.getElementById('full-view');
    if (viewer) {
        viewer.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

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
}

window.onclick = function(event) {
    const viewer = document.getElementById('full-view');
    if (event.target == viewer) closeViewer();
}

function acceptTerms() {
    document.getElementById("terms-popup").style.display = "none";
    const closeSound = document.getElementById("popup-close-sound");
    closeSound.volume = 0.5;
    closeSound.play();
}

window.addEventListener("load", function () {
    const popup = document.getElementById("terms-popup");
    const openSound = document.getElementById("popup-open-sound");

    popup.style.display = "flex";

    popup.addEventListener("click", function () {
        openSound.volume = 0.4;
        openSound.play();
    }, { once: true });
});

function scrollToSubjects() {
    document.querySelector(".subjects-container").scrollIntoView({
        behavior: "smooth"
    });
}

function showRoutine(){

  let box = document.getElementById("routineBox");

  if(box.style.display === "block"){
    box.style.display = "none";
  }

  else{
    box.style.display = "block";
  }

}
setInterval(() => {

const now = new Date().getTime();

subjectData.forEach((item,index)=>{

const examTime = new Date(item.examDate).getTime();

const diff = examTime - now;

const timer = document.getElementById(`timer-${index}`);

if(!timer) return;

if(diff <= 0){

timer.innerHTML = "❌ Exam End";

timer.style.color = "#00ff99";

return;

}

const days = Math.floor(diff / (1000*60*60*24));

const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));

const m = Math.floor((diff % (1000*60*60)) / (1000*60));

const s = Math.floor((diff % (1000*60)) / 1000);

timer.innerHTML = `
⏳ ${days}d ${h}h ${m}m ${s}s
`;

if(diff <= 86400000){

timer.style.color = "red";

}else{

timer.style.color = "#00ff99";

}

});

},1000);
function showVideo(){

let box = document.getElementById("videoBox");

if(box.style.display === "block"){

box.style.display = "none";

}else{

box.style.display = "block";

}

}
function startMusic(){

const music = document.getElementById("bgmusic");

music.play();

music.onended = function(){

music.src = "Music4.mp4";

music.play();

}

}