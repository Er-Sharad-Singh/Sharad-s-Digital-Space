'use server';
/**
 * @fileOverview A portfolio chatbot AI agent.
 *
 * - chat - A function that handles the chat process.
 */

import { ai } from '@/ai/genkit';
import { ChatInputSchema, ChatOutputSchema, type ChatInput, type ChatOutput } from './schemas';

const portfolioContext = {
  name: "Sharad Singh",
  title: "MERN Stack Developer",
  about: "I'm a passionate and detail-oriented MERN Stack Developer with a strong foundation in Computer Science & Engineering...",
  education: {
    degree: "B.Tech",
    branch: "Computer Science & Engineering",
    university: "AKTU, Lucknow",
    duration: "2022 - 2026"
  },
  experience: [{
      position: "Web Development Trainee",
      company: "Softpro India",
      duration: "Sep 2024 - Nov 2024",
      role: "MERN Stack Developer",
      highlights: [
        "Worked on responsive front-end using React.js & Tailwind CSS",
        "Implemented backend APIs with Express and Node.js",
        "Collaborated on full-stack apps"
      ]
    },
    {
      position: "Web Development Trainee",
      company: "Skill Chase",
      duration: "Aug 2024 - Oct 2024",
      role: "Frontend + MERN Stack Developer",
      highlights: [
        "Developed interactive UI with React",
        "Used Git and deployed projects",
        "Built real-world projects"
      ]
    }
    ], // as before
  skills: {
    frontend: {
      HTML5: "95%",
      CSS3: "90%",
      JavaScript: "85%",
      React: "85%",
      NextJS: "75%",
      Tailwind: "90%",
      Bootstrap: "80%"
    },
    backend: {
      NodeJS: "70%",
      ExpressJS: "70%",
      MongoDB: "60%",
      SQL: "70%"
    },
    languages: {
      CoreJava: "75%",
      AdvancedC: "65%"
    },
    tools: ["Git", "Firebase", "Stripe", "D3.js"]
  }, // as before
  projects: [ {
      name: "E-Commerce Platform",
      stack: ["Next.js", "Stripe", "Tailwind CSS"],
      desc: "Full-featured online store with product catalog, cart, and checkout."
    },
    {
      name: "Task Management App",
      stack: ["React", "Firebase"],
      desc: "Kanban board with drag-and-drop, auth, and real-time sync."
    },
    {
      name: "Portfolio Website V1",
      stack: ["HTML", "CSS", "JavaScript"],
      desc: "Clean and responsive personal portfolio website."
    }], // as before
  contact: {
    email: "ofcsharadsinghthakur@gmail.com",
    phone: "+91 8400174269",
    github: "https://github.com/er-sharad-singh",
    portfolio: "https://er-sharad-singh.github.io/Portfolio",
    linkedin: "https://linkedin.com/in/er-sharad-singh"
  },
  availability: "Sharad is currently available for internship, freelance, or entry-level development roles."
};

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return portfolioChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioChatPrompt',
  input: { schema: ChatInputSchema },
  output: { schema: ChatOutputSchema },
  prompt: `
You are a friendly and helpful AI assistant on Sharad Singh's portfolio website. Your job is to answer questions based on his portfolio context below.

If the user asks whether Sharad is available for work (like freelance, internship, or project), confidently say:
"Yes, Sharad is currently available for freelance or internship opportunities. You can connect via email or fill out the portfolio form to discuss your project."

If the user's question is outside the scope of the portfolio data or you don't know the answer, say:
"I'm not sure about that specific detail, but you can fill out the contact form on the portfolio website to get in touch with Sharad directly!"

Be conversational, polite, and helpful.

Context:
${JSON.stringify(portfolioContext, null, 2)}

User's message: {{{message}}}
`
});

const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);