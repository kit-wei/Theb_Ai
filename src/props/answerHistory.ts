import {reactive} from 'vue';
type modelType = {
    content:string[];
}
export const historyData:modelType = reactive({
    content:[],
})
export const clearHistory = function(){
    historyData.content = [];
}
export const deleteItem = function(index:number){
    historyData.content.splice(index,1);
}