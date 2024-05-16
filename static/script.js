function display_cloudWords() {
    var choice1 = document.querySelector('input[name="image_choice1"]:checked').value;
    var choice2 = document.querySelector('input[name="image_choice2"]:checked').value;

    var displayed_image_1 = document.getElementById('main-paragraph-image-display_1');
    var displayed_image_2 = document.getElementById('main-paragraph-image-display_2');

    switch (choice1) {
        case 'image1':
            displayed_image_1.src = "../static/images/df_pos.png";
            break;
        case 'image2':
            displayed_image_1.src = "../static/images/df_neg.png";
            break;
        case 'image3':
            displayed_image_1.src = "../static/images/df_pos.png";
            break;
        default:
            displayed_image_1.src = "../static/images/df_pos.png";
    }

    switch (choice2) {
        case 'image3':
            displayed_image_2.src = "../static/images/count_pos.png";
            break;
        case 'image4':
            displayed_image_2.src = "../static/images/count_neg.png";
            break;
        default:
            displayed_image_2.src = "../static/images/count_pos.png";
    }
}


function predict_sentiment() {
    var selectElement = document.getElementById("options");
    var selectedValue = selectElement.value;
    var encodedText = encodeURIComponent(selectedValue);

    fetch('https://2bca-194-5-53-42.ngrok-free.app/predict_sentiment?text=' + encodedText, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: ''
    })
    .then(response => response.json())
    .then(data => {
        if (data[0].label == 'LABEL_1') {
            sentiment = "POSITIF"
        } else {
            sentiment = "NEGATIF"
        }
        score = (data[0].score*100).toFixed(1)
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<div>Le sentiment du tweet est <strong class="sentiment">' +sentiment+ '</strong> a <strong class="sentiment">'+score+'%</strong> de certitude</div>';
        console.log(data[0].label, data[0].score);
    })
    .catch(error => {
        console.error('Erreur lors de la requête :', error);
    });
}



console.log("Le fichier JavaScript est correctement chargé.");