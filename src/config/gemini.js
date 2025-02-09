 
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */
//🔥 Yeh file Gemini API se connect hoti hai, user input ko AI ke pass bhejti hai, response leti hai, aur return karti hai.
//🔥 Temperature, topP, aur max tokens jese settings AI ke response ka behavior control karte hain.
//🔥 Chat session start hota hai, aur prompt ka response formatted text ke form me milta hai.
//Simple Words: Yeh file Gemini AI ke saath chat karne ka bridge hai jo backend me kaam karta hai!
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"; 
  
  const apiKey="AIzaSyCRaeZRkE_wv-JllWOcafklQsR_kPZQt0Q";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response=result.response;
    console.log(response.text());
    return response.text();
  }
  
  
  export default run;