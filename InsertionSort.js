
function mostra_tempo (inicio, n){
	
	const fim = new Date().getTime() - inicio	
	if(fim != 0){
		console.log(`Tempo de exec. para vetor com ${n} itens: ${fim}`)}
}

function InsertionSort (vetor, n){
	
	
	
	for(let i = 0; i < n; i++){
		
		let num1 = vetor[i]
		
		let num2 = i -1
		while(num2 >= 0 && vetor[num2] > num1){
			vetor[num2 + 1] = vetor[num2]
			num2 = num2 - 1		}
		
		vetor[num2 + 1] = num1	}
	
	
	return vetor										
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
		InsertionSort(GerarArray(i), i)	
		mostra_tempo(inicio, i)
	}
	
}


CrescimentoDoArray()



