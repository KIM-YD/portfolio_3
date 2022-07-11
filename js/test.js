function App() {
    function increase(number) {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = number + 10;
          if(result > 50) {
            const e = new Error('NumberTooBig');
            return reject(e);
          }
          resolve(result);
        }, 1000);
      })
      return promise;
    }
  
    async function runTasks() {
      try { // try/catch 구문사용, catch로 에러 처리
        let result = await increase(0);
        console.log(result);
  
        result = await increase(result);
        console.log(result);
  
        result = await increase(result);
        console.log(result);
        
        result = await increase(result);
        console.log(result);
        
        result = await increase(result);
        console.log(result);
        
        result = await increase(result); // 이 부분을 넣으면  catch로 분기돼 에러 처리됨.
        console.log(result);
      } catch(e) {
        console.log(e);
      }
    }
  
    runTasks();
    
    return (
      <div>
        
      </div>
    );
  }
  
  export default App;