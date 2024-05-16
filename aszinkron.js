export function getAdat(vegpont, callback){
    fetch(vegpont,{method:"GET"}).then((response)=>response.json()).catch.then((data)={console.log(data)}).catch((error)=>console.log(error))
}

fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));