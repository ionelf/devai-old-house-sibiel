import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function askChatbot(message: string) {
  const systemPrompt = `
Ești asistentul virtual DevAI pentru Old House Sibiel.
Răspunzi exclusiv în limba română.
Ton: montan modern, calm, premium.

Detalii:
- Cazare: casa întreagă
- 3 dormitoare, 3 băi
- Acceptăm animale
- Mic dejun tradițional inclus
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: message }
    ]
  });

  return completion.choices[0].message.content;
}
