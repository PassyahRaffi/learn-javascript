//Document Object Models (DOM)
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


function insertProduct() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let insertProduct = {
        name,
        price
    }
    // console.log(insertProduct);
    product.push(insertProduct);
    
    showProduct()
}



function showProduct(){
    document.getElementById("product-list").innerHTML = " "
    for (const item of product){
        document.getElementById("product-list").innerHTML += `
        <div id="product-list">
            <p id="name-product"> ${item.name}</p>
            <p id="price-product">${item.price}</p>
        </div>
        <hr>
        `
        // showProduct(i)
    }
}


showProduct()




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

let dataProduct = mesinKasir(product[0], 14, 100000)
console.log(dataProduct);

// document.getElementById("product-name").innerHTML = 
document.getElementById("product-name").innerHTML = 'product-name : ' + dataProduct.product
document.getElementById("product-price").innerHTML = 'product-price : ' + dataProduct.price
document.getElementById("product-qty").innerHTML = 'product-qty : ' + dataProduct.qty
document.getElementById("product-diskon").innerHTML = 'product-diskon : ' + dataProduct.diskon
document.getElementById("product-total").innerHTML = 'total : ' + dataProduct.total
document.getElementById("product-hargaAfterDiskon").innerHTML = 'hargaAfterDiskon : ' + dataProduct.hargaAfterDiskon
document.getElementById("product-cash").innerHTML = 'cash : ' + dataProduct.cash
document.getElementById("product-kembalian").innerHTML = 'kembalian : ' + dataProduct.kembalian


// console.log("testtt");
// point pembelajaran connect javascript ke html via DOM
