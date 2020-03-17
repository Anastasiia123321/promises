const getRandomChinese = async (length) => {
  let result = '';

  for (let i = 0; i < length; i++){
    const randomSign = new Promise(resolve => {
      setTimeout(() => {
        let sign = String(Date.now())
        sign = sign.substring(sign.length - 5)
        resolve(String.fromCharCode(sign));
      }, 50);
    });

    await randomSign.then((symbol) => {
      result += symbol;
    })
  }

  return result;
}


const beginGetRandomChinese = async () => {
  const ress = document.querySelector('.result');
  const length = Number(prompt('Enter number', 5)) 
  
  ress.innerHTML += `Result  => ${await getRandomChinese(length)}`
}
