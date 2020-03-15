const getRandomChinese = async (length) => {
        let result = '';
      
        for (let i = 0; i < length; i++){
          const randomSign = new Promise(resolve => {
            setTimeout(() => {
              let sign = String(Date.now())
              const number = 4;
              sign = sign.substring(sign.length - number)
              resolve(String.fromCharCode(sign));
            }, 50);
          });
      
          await randomSign.then((sign) => {
            result += sign
          })
        }
  
        return result;
      }
      
      
      const startConvertation = async () => {
        const anotherResult = document.querySelector('.result');
        const length = Number(prompt('Введіть число', number)) 
        
        anotherResult.innerHTML += `Result  => ${await getRandomChinese(length)}`
      }
