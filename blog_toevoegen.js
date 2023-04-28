
$(document).ready(function () {
    $('#submit').on('click', function () {

        const naam = document.getElementById('koptekst').value;

        let boodschap = '';
        if (naam.length <= 15) {
           
        } else {
            alert ('Uw koptekst is te lang');
        }
        
    });
});

$(document).ready(function () {
    $('#submit').on('click', function () {

        const naam = document.getElementById('blog_tekst').value;
        
        let boodschap = '';
        if (naam.length <= 800) {

        } else {
            alert('Uw tekst is te lang');
           
        }

    });
});