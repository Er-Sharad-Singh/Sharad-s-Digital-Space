import { z } from 'zod';

export const ChatInputSchema = z.object({
  message: z.string().describe('The user message'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export const ChatOutputSchema = z.object({
  response: z.string().describe("The AI's response to the user."),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;
