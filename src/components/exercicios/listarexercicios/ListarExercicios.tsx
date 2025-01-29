// Interface para representar os dados de cada treino
interface Treino {
  id: number;
  nome: string;
  descricao: string;
}


function ListarTreinos() {
  // Dados simulados de treinos cadastrados (você pode substituir por dados reais, de uma API ou banco de dados)
  const treinos: Treino[] = [
    { id: 1, nome: 'Supino Reto', descricao: 'Exercício para peito e tríceps.' },
    { id: 2, nome: 'Agachamento', descricao: 'Exercício para pernas e glúteos.' },
    { id: 3, nome: 'Puxada na frente', descricao: 'Exercício para costas e bíceps.' },
    { id: 4, nome: 'Leg Press', descricao: 'Exercício para quadríceps e glúteos.' },
    { id: 5, nome: 'Rosca Direta', descricao: 'Exercício para bíceps.' },
    { id: 6, nome: 'Stiff', descricao: 'Exercício para posterior de coxa e glúteos.' },
  ];


  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-premium/uma-academia-com-luzes-vermelhas-e-uma-parede-preta-que-diz-ginasio-nela_876956-1215.jpg')",
      }}
    >
      {/* Overlay para escurecer a imagem */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>


      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white p-6">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-8">Exercícios Cadastrados</h1>


        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treinos.map((treino) => (
              <div
                key={treino.id}
                className="bg-black text-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-red-500"
              >
                <h2 className="text-2xl font-bold mb-4">{treino.nome}</h2>
                <p className="text-lg font-light">{treino.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default ListarTreinos;
