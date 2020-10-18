var hotseatquestions = [
    "What is the most impressive thing you can make without a recipe?",
    "What is something that you wish you had never found out about?",
    "What is something you did just to be cool in middle school?",
    "Who is the oldest person you still think is hot?",
    "What is the worst date experience you've ever had?",
    "What would you do with your life if money wasn't a problem?",
    "What fetish do you think you could get into?",
    "What food do you never get bored of?",
    "When you're sent to hell, what song will be playing on repeat?",
    "What is your porn star name?",
    "What would you be most ashamed of if your internet history was leaked?",
    "What is the worst drug related experience you've ever had?",
    "What song do you want played at your funeral?",
    "What do you silently judge people for?",
    "What human experiment would you like to see if ethics weren't an issue?",
    "What has made you question your sexuality?",
    "What's the most embarassing text you've ever sent?",
    "Who would you choose to have a beer with if you could choose anyone in the world?",
    "What would you pick as the next evolutionary step for mankind?",
    "I dscovered ______ before it was cool",
    "What have you done that might have put you on a terrorist watch list?",
    "What will your gravestone say?",
    "What's your favorite pick up line?",
    "What instantly makes you horny?",
    "What's your favorite position?",
    "When's the last time your dick got direct sunlight?",
    "What's your opinion on eating ass?",
    "When's the last time you jerked off?",
    "What's the hottest non-sexual thing someone's ever done to you?",
];

var redditquestions = [
    "Would you rather have bionic arms or bionic legs?",
    "What are you proud of, but never have an excuse to talk about",
    "What conspiracy theories do you believe?",
    "Where do you want to be 5 years from now?",
    "If you were a pizza topping what would you be and why?",
    "What's your favorite smell?",
    "If you could pick one day to relive over and over like in Day After Tomorrow what would you choose?",
    "What can you talk about for hours?",
    "What was the best part of your day?",
    "What's a superpower you would not want?",
    "If you were going to die in 24 hours what would you do over the next day?",
    "Would you like to be famous?",
    "If you could change anything about the way you were raised what would it be?",
    "What do you value the most in friendship?",
    "If you knew you were going to die in one year what would you change about the way you are living now?",
    "Are you a physical person?",
    "If your house was on fire and you could only save one physical item what would it be?",
    "If you could learn any language instantly what would it be?",
    "What's your favorite drink and why?",
    "What was the first time you drank like?",
    "What was the first time you smoked weed like?",
    "What's your favorite holiday?",
    "What do you hate?",
    "If you were a flavor which one would you be?",
    "What do you like on your pizza?",
    "If you had to choose a song to dance to right now what would it be?",
    "What's your favorite guilty pleasure?",
    "What do you do when you feel burnt out?",
    "What's something you're ashamed of yourself for?",
    "What's something you liked but gave up because it wasn't cool?"
];

var createyourown = [
    "Create your own card. Ask the other person anything",
    "Create your own card. Ask the other person anything",
    "Create your own card. Ask the other person anything",
    "Create your own card. Ask the other person anything",
    "Create your own card. Ask the other person anything",
    "Create your own card. Ask the other person anything",
];

// Resizes text to fit the cards if necessary
function resizeText() {
    while( $('#card1').height() > $('.card').height() ) {
        $('#card1').css('font-size', (parseInt($('#card1').css('font-size')) - 1) + "px" );
    }
    while( $('#card2').height() > $('.card').height() ) {
        $('#card2').css('font-size', (parseInt($('#card2').css('font-size')) - 1) + "px" );
    }
    while( $('#card3').height() > $('.card').height() ) {
        $('#card3').css('font-size', (parseInt($('#card3').css('font-size')) - 1) + "px" );
    }
}
resizeText();

function resetTextSize() {
    $('#card1').removeAttr("style");
    $('#card2').removeAttr("style");
    $('#card3').removeAttr("style");
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function shuffle() {
    allSentences = hotseatquestions.concat(redditquestions, createyourown);
    results = getRandom(allSentences, 3);
    card1 = document.getElementById("card1");
    card2 = document.getElementById("card2");
    card3 = document.getElementById("card3");
    card1.innerHTML = results[0];
    card2.innerHTML = results[1];
    card3.innerHTML = results[2];
    resetTextSize();
    resizeText();
}

console.log("https://www.youtube.com/watch?v=pyUxWCtrf8U");




