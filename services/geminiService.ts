import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateWelcomeMessage = async (businessDescription: string, lang: Language): Promise<string> => {
  if (!apiKey) {
    return lang === 'id' ? "API Key hilang." : "API Key is missing.";
  }

  try {
    const languageInstruction = lang === 'id' 
      ? "Create the message strictly in Indonesian (Bahasa Indonesia) using natural, persuasive sales language (copywriting)." 
      : "Create the message in English using persuasive sales language.";

    const prompt = `
      You are a world-class AI Sales Agent on WhatsApp for a business. 
      Your goal is to CLOSE a sale or get a commitment from a lead who just clicked an ad.
      
      Business Context: "${businessDescription}"
      
      Task: Write a reply to a customer asking "How much is this?" or "Is this available?".
      
      Requirements:
      - ${languageInstruction}
      - Use psychological triggers (Scarcity, Social Proof, or Value Stacking).
      - Keep it concise (under 60 words) and conversational (like a real human chatting).
      - End with a question to provoke a reply (Call to Action).
      - Do NOT sound robotic. Be friendly and engaging.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || (lang === 'id' ? "Gagal membuat script sales." : "Could not generate sales script.");
  } catch (error) {
    console.error("Error generating message:", error);
    return lang === 'id' ? "Maaf, terjadi kesalahan." : "Sorry, something went wrong.";
  }
};