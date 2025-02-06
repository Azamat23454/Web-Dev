let a = 3;
while (a) {
  alert( a-- ); // 3 -> 2 -> 1
}

let b = 0;
while (++b < 5) alert( b ); // from 1 to 4

let c = 0;
while (c++ < 5) alert( c ); // from 1 to 5

for (let d = 0; d < 5; ++d) alert( d ); // from 0 to 4
for (let e = 0; e < 5; e++) alert( e ); // from 0 to 4

for (let f = 2; f <= 10; f++) {
    if (f % 2 == 0) {
      alert( f );
    }
}

let g = 0;
while (g < 3) {
  alert( `number ${g}!` );
  i++;
}

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}