export const Buscar = ({busca, buscaODA}) => {
    return (
        <div className = 'busca' display="flex">
        <input 
        name='busca'
        type ='text'
        value={busca}
        placeholder='O que deseja buscar'
        onChange={buscaODA}
        />
        </div>
    )
}