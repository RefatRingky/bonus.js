const products = [
    {name: 'iphone 10',price:'70000'},
    {name: 'samsung galaxy20',price:'60000'},
    {name: 'symphony c11',price:'12000'},
    {name: 'realme c21',price:'7000'},
    {name: 'lenovo core i5 laptop',price:'10000'},
    {name: 'radme a9',price:'10000'},
    {name: 'dell cori3 laptop',price:'10000'},
];
function searchProducts(products,searchText) {
    for(const product of products)
    {
        if (product.name.includes(searchText)) {
            console.log(product.name);
        }
       
    }
}
searchProducts(products,'laptop');
