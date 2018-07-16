var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  for(let i = 0; i<katzDeliLine.length; i++){
    katzDeliLine.push(name)
  }
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
  }
  
  let myString =  `The line is currently: 1. ${katzDeliLine[0]} `
  
  for(let i = 1; i<katzDeliLine.length; i++){
    return `${i+1}. ${katzDeliLine.length[i]}`
  }
}

