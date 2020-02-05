const app = require('express')()
let n = 1

app.get('/', (req, res) => res.send('<h1>Teste</h1>'))

function counting(a) {
	setInterval(() => {
		console.log(a)
		a++
	}, 1000)
}

app.listen(3000, () => counting(n))
