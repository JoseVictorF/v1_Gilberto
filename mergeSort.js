
function mostra_tempo (inicio, n){
	const fim = new Date().getTime() - inicio	
	if(fim != 0){
		console.log(`Tempo de exec. para vetor com ${n} itens: ${fim}`)}
}

function mergeSort(vetor) {
    const tamanhoDoArray = vetor.length   
    if (tamanhoDoArray < 2) {
        return vetor
        
    }
    const meio = Math.floor(tamanhoDoArray/2)
    const esquerdo = mergeSort(vetor.slice(0,meio))
    const direito = mergeSort(vetor.slice(meio, tamanhoDoArray))  
    return merge(esquerdo, direito)
    
    
    	
  }
  
function merge (esquerdo, direito){
    let resultado = []
    
    while(esquerdo.length && direito.length){
    if(esquerdo[0]< direito[0]){
        resultado.push(esquerdo.shift())
    }else{
        resultado.push(direito.shift())
    }
    }
    return [...resultado, ...esquerdo, ...direito];
}

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GerarArray(tamanho, array = []){		
	for (let i = 0 ; i < tamanho ; i++){
		array.push(getRandom(2,65));
	}
	
	return array
	
}
		
function CrescimentoDoArray(){
	const start = 1000
	const stop = 20000
	const step = 1000
	
	for(let i = start; i <= stop; i = i + step){
        const inicio = new Date().getTime()
        mergeSort(GerarArray(i))
        mostra_tempo(inicio, i)
        
	}
	
}

function iniciar(){
    CrescimentoDoArray()
}

iniciar()
