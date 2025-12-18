function rateInput() {
    let rating = document.getElementById("ratingInput").value;
    let message = "";

    if (rating >= 1 && rating <= 3) {
        message = "Poor!";
    }
    else if (rating >= 4 && rating <= 6) {
       message = "Average";
    }
    else if (rating >= 7 && rating <= 10){
        message = "Excellent!";
    }
    else {
       message = "Invalid rating";
    }

    document.getElementById("ratingResult").textContent = message;
}
