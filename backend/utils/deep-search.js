import fs from 'fs/promises';
import config from '../config/envs.js';

const deepSearch = async (query) => {

    const apiUrl = 'https://api.openai.com/v1/chat/completions'

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.OPEN_API_KEY}`
    };

    try {

    const file = await fs.readFile('assets/abstracts.txt', 'utf8');
    const abstracts = file.split('\n')

    const results = await Promise.all(abstracts.map(async abstract => {
        const prompt = `Identify keywords associated with this ${query} and only use them to determine the accuracy porcentage from the following paper abstract: "${abstract}". Always output a accuracy porcentage, even if it's an approximate.`;
    
        const data = {
          model: "gpt-3.5-turbo",
          max_tokens: 500,
          messages: [{"role": "user", "content": prompt}]
        };
        
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
          })
      
          const json = await response.json();
          const answer = json.choices[0].message.content

          const regex = /(\d+)\%/;
          const match = answer.match(regex);

          if (match) {
            return {
              abstract,
              accuracy: match[1]
            }
          }
        }

        catch (err) {
          console.error(err)
          return null
        } 
      }
    ))
    return results
  }
  catch (err) {
    console.error(err)
    return null;
  }
}

export default deepSearch;