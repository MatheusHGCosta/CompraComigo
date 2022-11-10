function getProductDiv(produto){
    var html = null;
    html = '<div class="col-md-4">' +
                '<div class="product-item">' +
                '<a href="#"><img src="'+produto.foto+'" alt=""></a>' +
                '<div class="down-content">' +
                '<a href="#">' +
                '<h4>'+ produto.nome +'</h4>' +
                '</a>' +
                '<h6>R$ '+ produto.precoPix +'</h6>' +
                // '<p>'+produto.descricao+'</p>' +
                '<ul class="stars">' +
                '<li><i class="fa fa-star"></i></li>' +
                '<li><i class="fa fa-star"></i></li>' +
                '<li><i class="fa fa-star"></i></li>' +
                '<li><i class="fa fa-star"></i></li>' +
                '<li><i class="fa fa-star"></i></li>' +
                '</ul>' +
                '<span>Participantes 24/100</span>' +
                "<a href='participar.html' class='btn btn-light d-flex justify-content-center col-md-12'>Participar</a>" +
                '</div>' +
                '</div>' +
                '</div>'
    return html;
}