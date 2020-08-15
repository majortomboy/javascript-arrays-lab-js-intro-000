var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
var otherCat1 = "Arnold";
var otherCat2 = "Broom";

function destructivelyAppendKitten(kittens, otherCat1){
  kittens.push(otherCat1);
  return kittens
}

function destructivelyPrependKitten(kittens, otherCat2){
  kittens.unshift(otherCat2);
  return kittens
}

function destructivelyRemoveLastKitten(kittens){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(kittens){
  kittens.shift(otherCat1);
  return kittens
}

function appendKitten(kittens, otherCat){
  return [otherCat, ...kittens];
}

function prependKitten(kittens, otherCat){
  return [...kittens, otherCat1];
}

function removeLastKitten(kittens){
  kittens = kittens.slice(0, kittens.length-1)
  return kittens
}

function removeFirstKitten(kittens){
  return
}
