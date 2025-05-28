import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Get API key from environment variables
const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ Google AI API key is missing!');
  console.error('Please set GOOGLE_API_KEY or GEMINI_API_KEY in your .env.local file');
  throw new Error('Google AI API key is required');
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: apiKey,
    })
  ],
  model: 'googleai/gemini-2.0-flash',
});