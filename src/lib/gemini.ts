import { GoogleGenerativeAI } from '@google/generative-ai';

// Inicializa a API do Gemini
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

interface Match {
  name: string;
  description: string;
  affinity: number;
}

export async function generateMatches(userInput: { name: string; interest: string; location: string }): Promise<Match[]> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro-001' });

    const prompt = `Gere um array com um numero aleatorio (minimo 1 e maximo 25) de objetos ficticios contendo nome, descrição e afinidade (número entre 0 e 100) 
    para uma pessoa com os seguintes dados:
    Nome: ${userInput.name}
    Interesse: ${userInput.interest}
    Localização: ${userInput.location}
    
    Retorne apenas o array JSON com o seguinte formato: {
        name: nome;
        description: descricao;
        affinity: afinidade;
    }
  sem explicações adicionais.
    Os nomes devem ser brasileiros e as descrições devem ser relacionadas ao interesse informado.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Limpa o texto para garantir que é um JSON válido
    const cleanJson = text.replace(/```json\n?|\n?```/g, '').trim();
    
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error('Erro ao gerar matches:', error);
    // Retorna matches padrão em caso de erro
    return [
      {
        name: "Ana Silva",
        description: "Profissional experiente com foco em inovação e tecnologia",
        affinity: 85
      },
      {
        name: "Carlos Santos",
        description: "Especialista em projetos colaborativos e desenvolvimento de equipes",
        affinity: 78
      },
      {
        name: "Marina Costa",
        description: "Empreendedora com experiência em startups e novos negócios",
        affinity: 92
      }
    ];
  }
} 