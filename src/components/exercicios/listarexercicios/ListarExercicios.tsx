// Interface para representar os dados de cada treino
interface Exercicios {
  id: number;
  nome: string;
  grupomuscular: string;
  repeticoes: number;
  series: number;
}


function ListarExercicios() {
  // Dados simulados de treinos cadastrados (você pode substituir por dados reais, de uma API ou banco de dados)
  const exercicios: Exercicios[] = [
    { id: 1, nome: 'Supino Reto', grupomuscular: ' peitoral', repeticoes: 12, series: 4 },
    { id: 2, nome: 'Agachamento', grupomuscular: ' quadriceps', repeticoes: 12, series: 4 },
    { id: 3, nome: 'Puxada na frente', grupomuscular: ' dorsal', repeticoes: 12, series: 4 },
    { id: 4, nome: 'Leg Press', grupomuscular: ' glúteos', repeticoes: 12, series: 4  },
    { id: 5, nome: 'Rosca Direta', grupomuscular: ' bíceps', repeticoes: 12, series: 4 },
    { id: 6, nome: 'Stiff', grupomuscular: ' coxas e glúteos', repeticoes: 12, series: 4  },
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
        <h1 className="text-4xl font-bold text-center text-red-500 mb-8">Exercícios</h1>


        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercicios.map((exercicios) => (
              <div
                key={exercicios.id}
                className="bg-black text-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-red-500"
              >
                <h2 className="text-2xl font-bold mb-4">{exercicios.nome}</h2>
                <p className="text-lg font-light">Musculo Trabalado:{exercicios.grupomuscular}</p>
                <p className="text-lg font-light">{exercicios.series} Series</p>
                <p className="text-lg font-light">{exercicios.repeticoes} Repetições</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default ListarExercicios;
