let arr =[1,1,1,1];

let n = arr.length;
// console.log(n);
let count =0;
for(let i=0; i<n;i++)
{
    for(let j=1; j<n; j++)
    {
        if(arr[i]===arr[j] && i<j) count++;
        // console.log(count);

    }
}
console.log(count);