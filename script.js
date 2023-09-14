const booh = (w) => {
    const arrayofnums = []
    for (let i = 0; i < 76; i++) {
        const cella = document.createElement("div")
        cella.classList.add("cella")
        cella.innerText = i + 1
        arrayofnums.push(i + 1)
        const divTabellone = document.getElementById("tabellone")
        divTabellone.appendChild(cella)
        
    }
    
    // console.log(arrayofnums)


    const bottoneEstrazione = document.getElementById("bottoneEstrazione")

    bottoneEstrazione.addEventListener("click", (e) => {

        const randomnum = Math.round(Math.random() * 76)
        const jjj = document.getElementsByClassName("cella")
        // if (randomnum ===)
        










        // console.log(randomnum)








    })
}

booh()