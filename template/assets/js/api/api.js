class Produto {

    async GetProduto(id) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://636acc95c07d8f936da7ad07.mockapi.io/api/v1/Produto/' + id,
                type: "GET",
                success: function (data) {
                    var x = JSON.stringify(data);
                    x = JSON.parse(x);
                    resolve(x);
                },
                // Error handling 
                error: function (error) {
                    console.log(`Error ${error}`);
                    reject(null);
                }
            });
        });
    }

    async ListProducts() {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://636acc95c07d8f936da7ad07.mockapi.io/api/v1/Produto',
                type: "GET",
                success: function (data) {
                    var x = JSON.stringify(data);
                    resolve(x);
                },
                // Error handling 
                error: function (error) {
                    console.log(`Error ${error}`);
                    reject(null);
                }
            });
        });
    }

}


