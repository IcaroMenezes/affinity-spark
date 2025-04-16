Este documento detalha o desenvolvimento do Mini MVP de Match Inteligente

## Instruções para Rodar o Projeto:

## Clone o repositório:
- git clone https://github.com/IcaroMenezes/affinity-spark.git

## Navegue até a pasta do projeto: 
- cd affinity-spark

## Instale as dependências
- npm install

## Inicie o servidor de desenvolvimento:
- npm run dev

## Acesse a aplicação: A aplicação estará disponível em um endereço local http://localhost:8080/ . Abra este endereço no seu navegador para visualizar o MVP.



## Principais Decisões Tomadas Durante o Desenvolvimento:

 - Framework: Optei por utilizar o React com Vite como ambiente de desenvolvimento. A escolha do React se deu pela sua vasta comunidade, flexibilidade, e a facilidade de criar interfaces de usuário reativas e componentizadas, o que facilita a organização e manutenção do código. O Vite proporciona um ambiente de desenvolvimento rápido e eficiente.

 - Geração de Matches (Simulada com IA): Para simular a inteligência artificial no processo de matchmaking, utilizei uma integração com o Gemini (Google AI). Ao receber os dados do formulário (Nome, Área de Interesse, Localização), o backend (neste caso, uma função simples que interage com a API do Gemini) processa essas informações e gera três resultados de matches fictícios, incluindo Nome, Descrição e um Nível de Afinidade simulado. É importante ressaltar que esta é uma simulação e não uma implementação de IA complexa.

## Estrutura de Componentes: A interface foi estruturada em componentes reutilizáveis:

- MatchmakingForm: Contém o formulário de entrada de dados do usuário e o botão de busca.
- MatchCard: Exibe as informações de um único match encontrado.
- A página principal (Index) orquestra a exibição do formulário e dos resultados.
- Gerenciamento de Estado: O estado da aplicação (dados do formulário, estado de carregamento, lista de matches) foi gerenciado utilizando o useState do React, de forma simples e eficaz para este MVP.
- Estilização: A estilização foi realizada utilizando uma combinação de Tailwind CSS (através da biblioteca cn para classes condicionais) e classes CSS customizadas para garantir uma interface responsiva e visualmente agradável, prezando pela clareza e usabilidade. A paleta de cores foi escolhida para ser intuitiva e profissional.
- Responsividade: A tela foi desenvolvida com foco na responsividade, utilizando as ferramentas do Tailwind CSS para garantir uma boa experiência em diferentes tamanhos de tela (desktop e mobile).


## O Que Eu Faria Diferente Se Tivesse Mais Tempo:

 - Aprimoramento da Simulação de IA: Com mais tempo, exploraria formas mais elaboradas de simular a inteligência artificial. Isso poderia envolver a criação de um conjunto de dados fictícios de usuários e a implementação de uma lógica mais complexa para calcular a "afinidade" com base nos interesses e localização, em vez de depender exclusivamente de uma chamada simples para o Gemini.
 - Melhorias na UX: Gostaria de tornar o MVP mais imersivo no conceito da IA, foquei na simplicidade neste momento, mas gostaria de elaborar um design mais atrativo 

## Link da Aplicação Publicada (Vercel):

- https://affinity-spark-match.vercel.app



- Desenvolvido por Icaro Menezes / icarod.menezes@gmail.com / https://linkedin.com/in/icaro-dmenezes/
