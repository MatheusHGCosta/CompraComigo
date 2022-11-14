// function getProductDiv(produto){
//     var html = null;
//     html = '<div class="col-md-4">' +
//                 '<div class="product-item">' +
//                 '<a href="#"><img src="'+produto.foto+'" alt=""></a>' +
//                 '<div class="down-content">' +
//                 '<a href="#">' +
//                 '<h4>'+ produto.nome +'</h4>' +
//                 '</a>' +
//                 '<h6>R$ '+ produto.precoPix +'</h6>' +
//                 // '<p>'+produto.descricao+'</p>' +
//                 '<ul class="stars">' +
//                 '<li><i class="fa fa-star"></i></li>' +
//                 '<li><i class="fa fa-star"></i></li>' +
//                 '<li><i class="fa fa-star"></i></li>' +
//                 '<li><i class="fa fa-star"></i></li>' +
//                 '<li><i class="fa fa-star"></i></li>' +
//                 '</ul>' +
//                 '<span>Participantes 24/100</span>' +
//                 "<a href='participar.html' class='btn btn-light d-flex justify-content-center col-md-12'>Participar</a>" +
//                 '</div>' +
//                 '</div>' +
//                 '</div>'
//     return html;
// }


ProdSelecionado = 0
function getProductDiv(produto){
    let html = null;
    let hora = new Date(produto.dataEncerramento);
    html = '<div class="col-md-3">' +
                '<div class="product-item"><br/>' +
                '<div id="contador'+produto.id+'" style="font-size:12px; font-weight: bold;"></div><br/>' +
                '<a href="#"><img src="'+produto.foto+'" alt=""></a>' +
                '<div class="down-content">' +
                '<a href="#">' +
                '<h4>'+ produto.nome +'</h4>' +
                '</a>' +
                '<label style="text-decoration: line-through;" >R$ '+ produto.precoOriginal +' no varejo</label>' +                
                '<h5>R$ '+ produto.precoPix +'</h5>' +
                '<label>À vista no pix</label>' +
                // '<p>'+produto.descricao+'</p>' +
                '<ul class="stars">' +
                '<li><i class="fa fa-star"></i></li>' +
                '<li><i class="fa fa-star"></i></li>' +
                '<li><i class="fa fa-star"></i></li>' +
                '<li><i class="fa fa-star"></i></li>' +
                '<li><i class="fa fa-star"></i></li>' +
                '</ul>' +
                '<span>Participantes '+ produto.vagasPreenchidas +'/' + produto.totalVagas  +'</span>' +
                "<a id='"+produto.id +"' href='participar.html'  onclick='setIdProd(this)' class='btn btn-light d-flex justify-content-center col-md-12'>Participar</a>" +
                '</div>' +
                '</div>' +
                '</div>' +
                '<script>' +
                '$("#contador'+produto.id+'").countdown("'+hora.toLocaleDateString("en-US")+'", function(event) {' +
                    '$(this).html(event.strftime("Restando %D dias e %Hh%Mm%Ss"));'+
                '});' +
                '</script>'
    return html;
}


function getProductDivForm(produto){
    let html = null;
    let hora = new Date(produto.dataEncerramento);
    html = '<div class="col-md-3">' +
                '<div class="product-item"><br/>' +
                    '<div id="contador'+produto.id+'" style="font-size:12px; font-weight: bold;">'+
                    '</div><br/>' +
                    '<a href="#"><img src="'+produto.foto+'" alt=""></a>' +
                    '<div class="down-content">' +
                        '<a href="#">' +
                        '<h4>'+ produto.nome +'</h4>' +
                        '</a>' +
                        '<label style="text-decoration: line-through;" >R$ '+ produto.precoOriginal +' no varejo</label>' +                
                        '<h5>R$ '+ produto.precoPix +'</h5>' +
                        '<label>À vista no pix</label>' +
                        // '<p>'+produto.descricao+'</p>' +
                        '<ul class="stars">' +
                        '<li><i class="fa fa-star"></i></li>' +
                        '<li><i class="fa fa-star"></i></li>' +
                        '<li><i class="fa fa-star"></i></li>' +
                        '<li><i class="fa fa-star"></i></li>' +
                        '<li><i class="fa fa-star"></i></li>' +
                        '</ul>' +
                        '<span>Participantes '+ produto.vagasPreenchidas +'/' + produto.totalVagas  +'</span>' +
                    '</div>' +
                '</div>' +
            '</div>' +

            '<div class="col-md-9">'+
                '<form>'+
                    '<div class="form-group">'+
                    '  <label for="exampleInputEmail1">Email</label>'+
                    '  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex. MariaJose@outlook.com">'+
                    '  <small id="emailHelp" class="form-text text-muted">Não compartilharemos seu e-mail.</small>'+
                    '</div>'+
                    '<div class="form-group ">'+
                    '  <label >Nome Completo</label>'+
                    '  <input type="text" class="form-control" placeholder="Ex. Maria José Souza"'+
                    '</div>'+
                    '<div class="form-group ">'+
                    '  <label class="mt-3" >Endereço</label>'+
                    '  <input type="text" class="form-control" placeholder="Ex. Rua dos Cactos, Nº 219"'+
                    '</div>'+
                    '<div class="form-row">'+
                        '<div class="form-group col-md-6">'+
                        '  <label class="mt-3" for="txtBairro">Bairro</label>'+
                        '  <input type="text" class="form-control" id="txtBairro" placeholder="Ex. Goiabeiras ">'+
                        '</div>'+
                        '<div class="form-group col-md-6">'+
                        '  <label class="mt-3" for="txtCidade">Cidade</label>'+
                        '  <input type="text" class="form-control" id="txtCidade" placeholder="Ex. Vitória"'+
                        '</div>'+
                    '</div>'+
                        '<div class="form-group col-md-6">'+
                        '  <label class="mt-3" for="txtEstado">Estado</label>'+
                        '  <input type="text" class="form-control" id="txtEstado" placeholder="Ex. Espírito Santo ">'+
                        '</div>'+
                        '<div class="form-group col-md-6">'+
                        '  <label class="mt-3" for="txtPais">País</label>'+
                        '  <input type="text" class="form-control" id="txtPais" placeholder="Ex. Brasil"'+
                        '</div>'+
                '</form>'+
            '</div>'+
            '<div class="col-md-12 " >'+
                '<div class="row d-flex justify-content-center" >'+
                    '<a type="submit" class="btn btn-success d-flex justify-content-center col-md-4">Confirmar</a>'+
                '</div>'+
            '</div>'+
            '</div>'+

            
            
                '<script>' +
                '$("#contador'+produto.id+'").countdown("'+hora.toLocaleDateString("en-US")+'", function(event) {' +
                    '$(this).html(event.strftime("Restando %D dias e %Hh%Mm%Ss"));'+
                '});' +
                '</script>'
    return html;
}

function setIdProd(event){
    this.ProdSelecionado = event.id;
    window.localStorage.setItem("ProdutoSelecionado",this.ProdSelecionado);
}

function getProdId(){

    return window.localStorage.getItem("ProdutoSelecionado");
}
