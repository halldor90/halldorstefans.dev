const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

var imagesTheme = ["img/moon.png", "img/sun.png"]
var imagesLinkedin = ["img/linkedinBlack.png", "img/linkedinWhite.png"]
var imagesGithub = ["img/githubBlack.png", "img/githubWhite.png"]
var imagesTwitter = ["img/twitterBlack.png", "img/twitterWhite.png"]

var imgState = 0;

var imgTheme = document.getElementById("imgTheme");
var imgLinkedin = document.getElementById("imgLinkedin");
var imgGithub = document.getElementById("imgGithub");
var imgTwitter = document.getElementById("imgTwitter");

imgTheme.src = imagesTheme[imgState];
imgLinkedin.src = imagesLinkedin[imgState];
imgGithub.src = imagesGithub[imgState];
imgTwitter.src = imagesTwitter[imgState];

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        imgState = 1;
        imgTheme.src = imagesTheme[imgState];
        imgLinkedin.src = imagesLinkedin[imgState];
        imgGithub.src = imagesGithub[imgState];
        imgTwitter.src = imagesTwitter[imgState];
    }
}

imgTheme.addEventListener("click", function (event) {
    
    imgState = (++imgState % imagesTheme.length);
    
    event.target.src = imagesTheme[imgState];
    
    imgLinkedin.src = imagesLinkedin[imgState];
    imgGithub.src = imagesGithub[imgState];
    imgTwitter.src = imagesTwitter[imgState];

    if (imgState === 1)
    {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});
