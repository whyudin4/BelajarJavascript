const namaMantan = ["Olip", "Sabian", "Bibu"]

namaMantan.forEach( function(item, index, array) {
    console.log(item, index);
})

namaMantan.push("dewi");

// console.log(namaMantan);

// namaMantan.pop();

// console.log(namaMantan);

// namaMantan.shift();

// console.log(namaMantan);

// console.log(namaMantan.indexOf("Bibu")+1);

// const indexOlip = namaMantan.indexOf("Olip");

// console.log(indexOlip);
// namaMantan.splice(indexOlip, 1);

console.log(namaMantan);

const namaMantanLama = namaMantan.slice();

namaMantan.pop();



// console.log("Nama mantan: ", namaMantan);

// console.log("Nama mantan lama: ", namaMantanLama);

console.log(
    namaMantan.reduce(function(acc, mantan, ke)
    {
        acc[mantan] =  `Mantan ke ${ke +1};`
        return acc
    }, {})
)
