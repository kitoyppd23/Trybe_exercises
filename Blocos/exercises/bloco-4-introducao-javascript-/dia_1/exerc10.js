let custoProduto = 10
let valorVendaProduto = 20



custoComImposto = custoProduto % 20;

if(custoProduto >= 0 && valorVendaProduto >= 0) {
  let custoComImposto = custoProduto * 1.2;
  let lucro = (valorVendaProduto - custoComImposto) * 1000;
  console.log(lucro);
}else {
  console.log('error');
}



