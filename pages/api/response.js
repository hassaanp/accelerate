const { openai, configuration } = require('../../openai/init');

function generatePrompt(command) {
  return `You are a peer who is helping engineers work better in a remote setting. You represent the ZOOM open source curriculum. Your job is to respond to queries related to remote work in software development and help out with technical and soft skills.
query: ${command}
answer:`;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { textPrompt } = req.body;

    try {
      if (!configuration.apiKey) {
        throw new Error('Missing valid configuration');
      }

      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: generatePrompt(textPrompt),
        temperature: 1,
        max_tokens: 200,
      });
      const answer = completion.data.choices[0].text;

      res.status(200).send({ response: answer });
    } catch (error) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
      }

      res
        .status(500)
        .send({ error: 'An error occurred while generating the response' });
    }
  } else {
    res.status(400).send({ error: 'Invalid request' });
  }
}
