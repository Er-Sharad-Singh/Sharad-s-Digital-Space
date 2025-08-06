const handlePrompt = async () => {
  const res = await fetch('/api/gemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt: "Hello Gemini" }),
  });
  const data = await res.json();
  console.log(data);
};