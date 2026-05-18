export default async function Page() {
  // Faz a requisição para a API
  const res = await fetch('https://ibge.gov.br');
  
  // Converte a resposta para JSON
  const data = await res.json();

  console.log(data);
  

  
}
