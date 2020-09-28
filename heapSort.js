let tamanhoArray

function mostra_tempo (inicio, n){
	const fim = new Date().getTime() - inicio	
	if(fim != 0){
		console.log(`Tempo de exec. para vetor com ${n} itens: ${fim}`)}
}

function buildHeap(vetor) {
    tamanhoArray = vetor.length

    for (var i = Math.floor(tamanhoArray / 2); i >= 0; i -= 1) {
        heapify(vetor, i)
    }
}

function heapify(vetor, i) {
    let left = 2 * i + 1
    let right = 2 * i + 2
    let m = i

    if (left < tamanhoArray && vetor[left] > vetor[m]) {
        m = left
    }

    if (right < tamanhoArray && vetor[right] > vetor[m]) {
        m = right
    }

    if (m != i) {
        swap(vetor, i, m)
        heapify(vetor, m)
    }
}

function swap(vetor, indexA, indexB) {
    var temp = vetor[indexA]

    vetor[indexA] = vetor[indexB]
    vetor[indexB] = temp
}

function heapSort(vetor) {
    buildHeap(vetor)

    for (var i = vetor.length - 1; i > 0; i--) {
        swap(vetor, 0, i)
        tamanhoArray--
        heapify(vetor, 0)
    }
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
        heapSort(GerarArray(i))
        mostra_tempo(inicio, i) 
        
	}
	
}

function iniciar(){
    CrescimentoDoArray()
}

iniciar()