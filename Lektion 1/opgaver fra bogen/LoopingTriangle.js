const toPrint = '#';

for (let i = 1; i <= 7; i++) {
    let c = '';
   for (let j = 1; j <= i; j++) {
    c += '#';
   }
   console.log(c)
}


//NEMMESTE MÅDE NEDENFOR
/*
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
*/