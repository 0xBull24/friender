$(function() {
    // Submit Button
    $('.submit').on('click', function(event) {
        event.preventDefault();
        console.log('Clicking the submit');

        // Set variables
        first = $('#first-name').val().trim() || "";
        last = $('#last-name').val().trim() || "";
        
        let formResult = {
            name: `${first} ${last}`,
            img: `${$('#user-image').val().trim()}`,
            results: [],
        }

        for (let count = 1; count < 11; count++) {
            formResult.results.push($(`#q${count}`).val());
        }

        // Clear values of the form
        $('#form').trigger('reset');
    });
})