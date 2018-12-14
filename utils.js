const f = (a, b) => [].concat(...a.map(d => b.map(e =>[].concat(d, e)))) 
const cartesian = (a, b,... c) => (b ? cartesian(f(a, b),...c) : a)
let output = cartesian ([1,2], [10,20], [100,200,300])
