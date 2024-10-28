import { useEffect, useState } from "react";
import Lista from "../Lista"
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
return(
    <>
    <h1>LISTA</h1>
    <Lista lista={lista} />
</>
)}

    