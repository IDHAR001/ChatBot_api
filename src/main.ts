import { Request, Response } from 'express';
import * as express from "express";
import axios from 'axios';

const app = express();
const port = 3001;

app.use(express.json());

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is the chatbot API.');
});

app.post('/chat', async (req: Request, res: Response) => {
  const userMessage = req.body.message;
  
  // Make a request to the OpenAI API with the user's message
  const response = await axios.post(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      prompt: userMessage,
      max_tokens: 50, // Adjust based on your requirements
    },
    {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
    }
  );

  const botReply = response.data.choices[0].text;

  res.json({ reply: botReply });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
