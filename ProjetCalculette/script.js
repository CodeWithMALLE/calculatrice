(
    () => {

        // je recupere tout les nombres []
        let nombres = document.querySelectorAll(".nb")

        // je recupere les operateurs
        let operateurs = document.querySelectorAll(".op") 

        // les operandes
        let n = ""

        // je recupere mon input
        let champ = document.getElementById("input")

        function effacerTout(){
            const c = document.getElementById("sup")
            c.addEventListener('click', () => {
                champ.value = ""
                n = ""
            })
        }

        function saisie(nb){
            champ.value = ""
            champ.value += nb.innerHTML
            // n.push(nb.innerHTML)
        }

        function clickDuBtn(){
            nombres.forEach(nb => {
                nb.addEventListener("click", () => {
                    saisie(nb)
                })
            })
        }

        function clickOperateur(){
            operateurs.forEach(op => {
                op.addEventListener("click", () => {
                    let val = champ.value
                    if(val !== "" || val !== "undefined"){
                        n += val
                    }

                    champ.value = ""

                    let opVal = op.innerHTML
                    if(opVal === "+"){
                        n += "+"
                    }

                    else if(opVal === "-"){
                        n += "-"
                    }
                    else if(opVal === "/"){
                        n += "/"
                    }
                    else if(opVal === "X"){
                        n += "*"
                    }
                })
            })
        }

        function egal(){
            const egal = document.getElementById('egal')
            egal.addEventListener('click', () => {
                n += champ.value
                // console.log(n);
                let result = eval(n)
                champ.value = result
                n = ""
            })
        }

        function faireCalcul(){
            clickDuBtn()
            clickOperateur()
            egal()
            effacerTout()
        }

        faireCalcul()
    }
)()