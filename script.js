console.log("JavaScript funguje!")
let n = prompt('Které číslo mám rozložit na prvočísla?')
let a = 2
while (a <= n) {
    if (n % a == 0){
        document.write(a + ', ');
        n = n / a;
    }
    else {
        a += 1;
    }
    
}