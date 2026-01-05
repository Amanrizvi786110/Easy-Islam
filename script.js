/* =====================
   DATA (AUTHENTIC ONLY)
===================== */

// Qur’an verses
const quranVerses = [
  {
    text: "Indeed, in the remembrance of Allah do hearts find rest.",
    ref: "Surah Ar-Ra’d (13:28)"
  },
  {
    text: "Allah does not burden a soul beyond that it can bear.",
    ref: "Surah Al-Baqarah (2:286)"
  },
  {
    text: "And He found you lost and guided you.",
    ref: "Surah Ad-Duha (93:7)"
  }
];

// Sahih Hadith
const hadiths = [
  {
    text: "Actions are judged by intentions.",
    ref: "Sahih Bukhari, Hadith 1"
  },
  {
    text: "The best among you are those who have the best manners.",
    ref: "Sahih Bukhari"
  },
  {
    text: "Make things easy and do not make them difficult.",
    ref: "Sahih Bukhari & Muslim"
  }
];

// Quiz questions
const quizQuestions = [
  {
    question: "How many pillars of Islam are there?",
    options: ["5", "6"],
    correct: "5"
  },
  {
    question: "Which book is the final revelation?",
    options: ["Qur’an", "Torah"],
    correct: "Qur’an"
  },
  {
    question: "Who is the last Prophet of Islam?",
    options: ["Muhammad ﷺ", "Isa (AS)"],
    correct: "Muhammad ﷺ"
  }
];

/* =====================
   FUNCTIONS
===================== */

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function showSection(section) {
  let content = "";

  // Qur’an
  if (section === "quran") {
    const verse = getRandomItem(quranVerses);
    content = `
      <h2>📖 Qur’an Verse</h2>
      <p><b>“${verse.text}”</b></p>
      <p><i>${verse.ref}</i></p>
    `;
  }

  // Hadith
  if (section === "hadith") {
  content = `
    <h2>📜 Daily Sahih Hadith</h2>
    <p><b>The Prophet ﷺ said:</b></p>
    <p>“${dailyHadith.text}”</p>
    <p><i>${dailyHadith.ref}</i></p>
  `;
}


  // Quiz
  if (section === "quiz") {
    const q = getRandomItem(quizQuestions);

    content = `
      <h2>📝 Islamic Quiz</h2>
      <p><b>${q.question}</b></p>
      ${q.options
        .map(
          opt =>
            `<button onclick="checkAnswer('${opt}', '${q.correct}')">${opt}</button>`
        )
        .join("")}
      <p id="quizResult"></p>
    `;
  }

  document.getElementById("content").innerHTML = content;
  document.getElementById("content").scrollIntoView({ behavior: "smooth" });
}

function checkAnswer(selected, correct) {
  const result = document.getElementById("quizResult");

  if (selected === correct) {
    result.textContent = "✅ Correct! MashaAllah";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Incorrect. Try again.";
    result.style.color = "red";
  }
}

// Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
