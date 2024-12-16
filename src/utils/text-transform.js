import alphabet from "./alphabeth";

let arrAlphabet = alphabet.split("");

function getDataToTransform(text, num) {
  let a = text.split("").reduce((acc, ltr) => {
    let ltrInd = arrAlphabet.indexOf(ltr);

    let modInd = (ltrInd + +num + arrAlphabet.length) % arrAlphabet.length;

    if (ltrInd !== -1) {
      return (acc += arrAlphabet[modInd]);
    } else return (acc += ltr);
  }, "");

  return a;
}

export default getDataToTransform;
