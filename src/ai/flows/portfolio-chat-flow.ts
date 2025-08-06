'use server';
/**
 * @fileOverview A portfolio chatbot AI agent.
 *
 * - chat - A function that handles the chat process.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const ChatInputSchema = z.object({
  message: z.string().describe('The user message'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe("The AI's response to the user."),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return portfolioChatFlow(input);
}

const portfolioContext = `
Sharad Singh's Portfolio Details:

About Me:
I'm a passionate and detail-oriented MERN Stack Developer with a strong foundation in computer science. I love building smooth, responsive user interfaces and continuously expanding my skills in creating scalable and efficient back-end systems.
I’m currently focused on mastering full-stack web development using MongoDB, Express.js, React, and Node.js. Beyond coding, I enjoy keeping up with the latest tech trends, contributing to open-source communities, and recharging with a good cup of coffee.
Always curious, always learning — I’m driven by the challenge of turning ideas into impactful digital experiences.

Education:
- Bachelor of Technology in Computer Science & Engineering
- Dr. A. P. J. Abdul Kalam Technical University, Lucknow
- 2022 - 2026

Experience:
- Web Devlopment Trainee at Softpro India (Sep 2024 - Nov 2024): MERN Stack Devloper
- Web Devlopment Trainee at Skill Chase (Aug 2024 - Oct 2024)

Skills:
- HTML5: 95%
- CSS3: 90%
- JavaScript: 85%
- React: 85%
- Next.js: 75%
- Node.js: 70%
- Tailwind CSS: 90%
- Bootstrap: 80%
- Advanced C: 65%
- Core Java: 75%
- MongoDB: 60%
- SQL: 70%
- Git: 80%

Projects:
- E-commerce Platform: A full-featured e-commerce site with a modern UI, product catalog, shopping cart, and checkout process, built with Next.js and Stripe.
- Task Management App: A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates using Firebase.
- Portfolio Website V1: My previous personal portfolio website, designed to be clean, simple, and responsive. Built with pure HTML, CSS, and JavaScript.
- Data Visualization Dashboard: An interactive dashboard for visualizing complex datasets using D3.js and React, providing insightful charts and graphs.
`;

const prompt = ai.definePrompt({
  name: 'portfolioChatPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: ChatOutputSchema},
  prompt: `You are a friendly and helpful AI assistant for Sharad Singh's portfolio website. Your goal is to answer questions from visitors based on the information provided below. Be conversational and engaging. If a question is outside the scope of the provided information, politely say that you can only answer questions about Sharad's portfolio.

Context about Sharad Singh:
${portfolioContext}

User's message: {{{message}}}
`,
});

const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
