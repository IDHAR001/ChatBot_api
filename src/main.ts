import { Request, Response } from 'express';
import * as express from "express";

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is the chatbot API.');
});

app.post('/chat', (req: Request, res: Response) => {
  const userMessage = req.body.message;
  // Implement your chatbot logic here
  // Respond to the user's message

  res.json({ reply: 'This is a sample response from the chatbot.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
