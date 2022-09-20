import './styles.css'
export const Listar = ({odas}) =>{
return  (
    <>
    <p class="flex qtd_objetos">{odas.length}</p>
    <div className='lista' display="flex">
    {odas.map(oda=> (
        <div className='itemLista' key={oda.id}>
          <h1>Nome: {oda.nome}</h1>
          <p><strong>Usuário:</strong> {oda.usuario}</p>
          <p><strong>Descrição:</strong> {oda.descricao}</p>
          <p><strong>Palavras-chave: </strong> {oda.palavras_chave}</p>
          <p><strong>Data de inclusão:</strong> {oda.data_inclusao}</p>
        </div>
    ))}
</div>
</>
    )
}