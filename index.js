const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

var imagesTheme = ["https://img.icons8.com/windows/24/4a90e2/crescent-moon.png", "https://img.icons8.com/android/24/4a90e2/sun.png"]
var imagesLinkedin = ["https://img.icons8.com/material-outlined/48/000000/linkedin.png", "https://img.icons8.com/fluent-systems-regular/48/ffffff/linkedin.png"]
var imagesGithub = ["https://img.icons8.com/material-sharp/48/000000/github.png", "https://img.icons8.com/material-sharp/48/ffffff/github.png"]
var imagesTwitter = ["https://img.icons8.com/material-outlined/48/000000/twitter.png", "https://img.icons8.com/material-outlined/48/ffffff/twitter.png"]

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
