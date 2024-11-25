import { useEffect, useState } from "react";
import Lista from "../Lista"
import styles from "../styles/Lista.module.css";

export default function Home () {
    const [lista, setLista] = useState ([])
useEffect(() => {
    const receberListaProdutos = async () => {
    try{
        const resposta = await fetch('https://fakestoreapi.com/products')
        const dados = await resposta.json()
        setLista(dados)
    } catch{
        alert('Deu erro meu')
    }
}
receberListaProdutos()
}, [])

const orderAZ = () => {
    const listaOrdenada = [...lista].sort((a,b) => a.title.localeCompare(b.title))
    setLista(listaOrdenada)
}

const orderZA = () => {
    const listaOrdenada = [...lista].sort((a,b) => b.title.localeCompare(a.title))
    setLista(listaOrdenada)
}

const menorMaior = () => {
    const listaOrdenada = [...lista].sort((a,b) => a.price - b.price)
    setLista(listaOrdenada)
}

const maiorMenor = () => {
    const listaOrdenada = [...lista].sort((a,b) => b.price - a.price)
    setLista(listaOrdenada)
}

return(
    <>
    <h1 className={styles.Title} >Lista de Produtos</h1>
    <div className={styles.containerBotao}>

    <button className={styles.buttonFiltro} onClick={() => orderAZ()}>
        A-Z
    </button>

    <button className={styles.buttonFiltro} onClick={() => orderZA()}>
        Z-A
    </button>

    <button className={styles.buttonFiltro} onClick={() => menorMaior()}>
        Menor-Maior
    </button>
    
    <button className={styles.buttonFiltro} onClick={() => maiorMenor()}>
      Maior-Menor
    </button>
    </div>
    <Lista lista={lista} />
</>
)}

    