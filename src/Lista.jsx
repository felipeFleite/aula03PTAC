import styles from "../src/styles/Lista.module.css"
export default function Lista({lista}) {
return(
    <>
    <div className={styles.home}>
    <h1>Lista de Produtos</h1>
    <div className={styles.cards}>
    <ul>
        {lista.map(produto => 
            <li key ={produto.id}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <p>Preço: R${produto.price}</p>
            <img src={produto.image} alt ={produto.title} width={100}/>
            </li>
)}
    </ul>
    </div>
</div>
    </>
)
}