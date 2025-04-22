let dolar = 5.72

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => { 
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
   convert("brl-to-usd")
})


usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
    }
)


brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
    }
)

usdInput.value = "1000,00"
convert("usd-to-brl")




// Function to convert between USD and BRL
function formatCurrency(value) {
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-br", options)
    return formatter.format(fixedValue) 
}

function fixValue(value) {
   let fixedValue = value.replace(',', '.') //replace the comma with a dot
   let floatValue = parseFloat(fixedValue) 
   if (floatValue == NaN) { //check if the value is a number

        floatValue = 0 //if the value is not a number, set it to 0
   }
   return floatValue 
}




function convert(type) {
    if(type == "usd-to-brl") {
      let fixedValue = fixValue(usdInput.value) 
      let result = fixedValue * dolar 
      result = result.toFixed(2) //set the result to 2 decimal places

      brlInput.value = formatCurrency(result) 
    }

    if(type == "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value) 
        let result = fixedValue / dolar 
        result = result.toFixed(2) 

        usdInput.value = formatCurrency(result)
    }
}
