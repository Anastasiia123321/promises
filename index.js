const getRandomChinese = async (length) => {
        let result = '';
      
        for (let i = 0; i < length; i++){
          const randomSign = new Promise(resolve => {
            setTimeout(() => {
              let sign = String(Date.now())
              sign = sign.substring(sign.length - 4)
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
        const length = Number(prompt('Введіть число', 4));
        
        anotherResult.innerHTML += `Result  => ${await getRandomChinese(length)}
      }
