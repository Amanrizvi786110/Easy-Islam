const hadithList = [
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
  },
  {
    text: "None of you truly believes until he loves for his brother what he loves for himself.",
    ref: "Sahih Bukhari & Muslim"
  }
];

// pick hadith based on today's date
const todayIndex = new Date().getDate() % hadithList.length;
const dailyHadith = hadithList[todayIndex];
