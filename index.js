 async function getRandomChinese(length) {
  const n = 5;     
  let result = '';
  while(lenth>0) {
   let str = '';
   const sign = Date.now().toString();
      
        for (let i = sign.lenth - n; i < sign.length; i++){
         str += sign[i];
        }
   result += await chinese(str);
   lenth--;
        }
        return result;
      }
      
      
      const startConvertation = async () => {
        const anotherResult = document.querySelector('.result');
        const length = Number(prompt('Введіть число', 4)) 
        
        anotherResult.innerHTML += `Result  => ${await getRandomChinese(length)}`
      }
