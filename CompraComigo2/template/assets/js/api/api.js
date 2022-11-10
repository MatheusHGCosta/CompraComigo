class Produto {
    shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }

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
                    resolve(shuffle(x));
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


