// FUNCTION LANJUTAN
//=====================================================

//syntaks function
function jumlah() { //static
    let a = 20;
    let b = 30;

    return a + b
}

// console.log(jumlah());

//didalam function ada yang namanya parameter

function jumlah(param1, param2) {//code dynamic

    return param1 + param2
}

// console.log(jumlah(10, 5));//home
// console.log(jumlah(15, 5));//product


function luasPersegi(panjang, lebar, tinggi) {//code dynamic

    return panjang * lebar * tinggi
}

// console.log(luasPersegi(10, 5, 5));//di halaman home
// console.log(luasPersegi(5, 5,6));//di halaman product



function bikinIndomie(pembeli, rasa, jenis) {
    return pembeli + rasa + jenis
}

// console.log( bikinIndomie("aziz ", " rendang ", " goreng ") ); //meja 1
// console.log( bikinIndomie("abdul ", " soto ", " goreng ") ); //meja 2

// =======================================================================
//add if else in function

function cekHarga(harga, diskon) {

    if (harga > 10000) {
        return harga - diskon
    } else {
        return harga
    }
}

//kalau udah dinamis enak, tinggal dipanggil panggil aja.
// console.log( bikinIndomie("aziz ", " rendang ", " goreng ") ); //meja 1
// console.log( cekHarga(25000,12000) );

// console.log( bikinIndomie("repa ", " soto ", " kuah ") ); //meja 3
// console.log( cekHarga(30000,12000) );





// ======================================================================
//    add array in function


function jadwalPelajaran(hari) {

    let mapel = ["ipa", "mtk", "ips", "sejarah"]

    // if (hari == "senin" ) {
    //     return mapel[0] //return mengembalikan data(stop )
    // }else if (hari == "selasa"){
    //     return mapel[1]
    // }else if (hari == "rabu"){
    //     return mapel[2]
    // }else{
    //     return mapel[3]
    // }

    //kondisi ternary
    let hasil = hari == "senin" ? mapel[0] : "libur"
    return hasil
    // 'Return' dalam fungsi javascript adalah metode yang memungkinkan fungsi untuk menghasilkan output dan mengakhiri eksekusi
}


// console.log(jadwalPelajaran("senin"));
// console.log(jadwalPelajaran("selasa"));

// ======================================================================
// 

let product = [
    {
        name: "roma biskuit",
        price: 8000
    },
    {
        name: "zink",
        price: 2000
    },
    {
        name: "pucuk harum",
        price: 3500
    },
    {
        name: "beng beng",
        price: 1500
    }
]


function mesinKasir(produk, qty, cash) {

    let kasir = {
        product: produk.name,
        price: produk.price,
        qty: qty,
        diskon: 0,
        total: produk.price * qty,
        hargaAfterDiskon: 0,
        cash: cash,
        kembalian: cash - produk.price * qty
    }


    if (qty > 12) {
        kasir.diskon = produk.price * qty * (10/100)
        kasir.hargaAfterDiskon = produk.price * qty - kasir.diskon 
        kasir.kembalian = cash - kasir.hargaAfterDiskon
    }

    return kasir
}

console.log(mesinKasir(product[0], 14, 100000));






//========================================================
jumlah()
// FUNCTION BIASA
function jumlah() { 
    // console.log("test");  
}
//FUNCTION EXPRESSION
 
const say = function() {
    // console.log("hallo"); 
}
 say()

//ARROW FUNCTION 

const sayHi = () => {
    // console.log("hallo arrow");
}
sayHi()

