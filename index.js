var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  for(let i = 0; i<katzDeliLine.length; i++){
    katzDeliLine.push(name)
  }
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


