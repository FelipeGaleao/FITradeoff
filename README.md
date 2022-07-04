# Chamando API com resposta JSON  
 Este projeto consiste em dois servidores simples, um servidor para prover uma página web como interface gráfica para realizar as interações e outro servidor como SaaS para fornecer uma API para realizar cálculos matemáticos.  
 O importante de se entender aqui é que apesar de ambos os servidores estarem no mesmo projeto e rodando na mesma rede, eles são duas aplicações independentes que estão interagindo entre si.  

---  

## Client-side  
- Simula o comportamento do SIG  
- Servidor dedicado a servir uma página web  
- Página web (HTML, JavaScript, CSS)  
- Realiza requisição a API e exibe os resultados  

## Server-side  
- Simula o futuro comportamento do FITradeOff  
- Servidor dedicado a API e suas requisições  
- Realiza suas operações e retorna uma resposta JSON  