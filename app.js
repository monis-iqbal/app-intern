let counter = document.getElementById("result")
let counterPlus = 0
// for plus one / 1
const incrementVal = () => {

    counterPlus = counterPlus + 1
    finalVal = document.getElementById("result").innerHTML = counterPlus
}

// for minus one / 1

const decrementVal = () =>{
    counterPlus =counterPlus - 1
    finalVal = document.getElementById("result").innerHTML = counterPlus


}

