import styles from "../src/styles/Lista.module.css";

export default function Lista({ lista }) {

    return (
        <div className={styles.home}>
            <h1>Lista de Produtos</h1>
            <div className={styles.cards}>
                {lista.map((produto) => (
                    <div key={produto.id} className={styles.card}>
                        <h2>{produto.title}</h2>
                        <p>{produto.description}</p>
                        <p>Preço: R${produto.price}</p>
                        <img src={produto.image} alt={produto.title} width={150} />
                        <br/>
                        <button  className={styles.button}>Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
