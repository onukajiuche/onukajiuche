function prime(n) {
    // convert to absolute value
    n = Math.abs(n)
    let isPrime = true

    // check all possible divisible numbers 
    for (i = 2; i < n; i++) {
        let answer = n / i 
        isPrime = !Number.isInteger(answer)
        
        // if the number is not a prime number end the loop
        if (isPrime == false) break
    }
    
    return isPrime
}


ans = prime(-6)
console.log(ans)