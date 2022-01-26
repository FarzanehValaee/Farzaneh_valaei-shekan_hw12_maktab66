function timeoutPromisResolve(interval){
          return new Promise((resolve,reject)=>{
                    setTimeout(function(){
                              resolve("successful")
                    },interval);
          });

};
function timeoutPromisReject(interval){
          return new Promise((resolve,reject)=>{
                    setTimeout(function(){
                              reject("error");
                    },interval);
          });
};
function timeTest(){
          timeoutPromisResolve(5000);
          timeoutPromisReject(2000);
          timeoutPromisResolve(3000);
}
let startTime = Date.now();
timeTest() .then(()=>{}) .catch(e=>{
          console.log(e);
          let finishTime=Date.now();
          let timeTaken=finishTime-startTime;
          alert("Time taken in milliseconds: "+timeTaken)
})