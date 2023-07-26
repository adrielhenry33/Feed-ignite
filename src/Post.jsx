export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}

// Export default x Named export

// Default -> o nome do componente importado pode ser diferente do nome originial(nao recomendado )
// Named export-> basta excrever export antes do function e deletar o defaut
// Para Importar o componente import{Post} from ./endereco desejado
