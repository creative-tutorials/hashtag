export function IncrementCountOnPageLoad(loadCounter:any) {
   console.log(loadCounter)
   console.log('Running function')
   loadCounter.current++;
}