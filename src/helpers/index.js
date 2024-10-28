export const getRandomIds = (count, max) => {
  const ids = new Set();
  while (ids.size < count) {
    ids.add(Math.floor(Math.random() * max) + 1);
  }
  return Array.from(ids);
};

export const fetchRandomQuestions = async (count) => {
  const randomIds = getRandomIds(count, 100);
  const questionPromises = randomIds.map((id) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json()
    )
  );

  try {
    return await Promise.all(questionPromises);
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

export const createChoices = (question) => {
  const words = question.title.split(" ");
  let choices = [];

  for (let i = 0; i < 3; i++) {
    choices.push(words[i] || `Seçenek ${String.fromCharCode(65 + i)}`);
  }

  if (choices.length < 4) {
    const firstWord = words[0] || "Ekstra";
    const lastWord = words[words.length - 1] || "Şık";
    const customChoice = firstWord.slice(0, 2) + lastWord.slice(-2);
    choices.push(customChoice);
  }
  return shuffleArray(choices);
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
