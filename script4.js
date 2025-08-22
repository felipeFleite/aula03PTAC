let findBig = () => {
    let num1 = document.getElementById("1").value
    let num2 = document.getElementById("1").value
    let num3 = document.getElementById("1").value
    
    let arr = []
    for(let i = 1; i <= 3; i++){
        let numero = num1        

        let biggerNum = Math.max(num1,num2,num3)
        
        let resultado = parseFloat("O maior número é " + biggerNum)
        document.getElementById("container").append(i+"X"+num1+"="+ resultado+ "\n")
    }
}
