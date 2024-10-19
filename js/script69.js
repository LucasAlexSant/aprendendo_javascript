const person = {fname:"Lucas", lname:"Santana", age:71}

let txt = ""
for (let x in person){
    txt += person[x] +  " ";
    console.log(txt)
}

