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
                "<a href='participar.html' class='btn btn-light d-flex justify-content-center col-md-12'>Participar</a>" +
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