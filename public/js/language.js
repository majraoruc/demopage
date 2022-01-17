let url = document.URL
let domainName = "https://monetizead-merso.web.app"

switchToEN = function () {
    window.location.href = domainName;
}

switchToBA = function () {
    let newUrl = domainName + "/ba"
    window.location.href = newUrl;
}


window.addEventListener('load', function () {
    document.addEventListener('click', function (event) {
        let languageWrapper = document.getElementById("language-wrapper")
        var isClickInside = languageWrapper.contains(event.target);
        if (!isClickInside) {
            closeLanguageDropDown()
        }
    });
})


languageDropDownHandler = function () {
    let dropdownWrapper = document.getElementById("dropdown-wrapper")
    let arrow = document.getElementById("dropdown-arrow")

    let languageSelectOpened = dropdownWrapper.className === "dropdown-wrapper-opened" ? true : false


    if (languageSelectOpened) closeLanguageDropDown()
    else {
        openLanguageDropDown()
    }
}
closeLanguageDropDown = function () {
    let dropdownWrapper = document.getElementById("dropdown-wrapper")
    let arrow = document.getElementById("dropdown-arrow")
    dropdownWrapper.className = "dropdown-wrapper-closed"
    arrow.className = "current-language-arrow-img-closed"
}

openLanguageDropDown = function () {
    let dropdownWrapper = document.getElementById("dropdown-wrapper")
    let arrow = document.getElementById("dropdown-arrow")
    dropdownWrapper.className = "dropdown-wrapper-opened"
    arrow.className = "current-language-arrow-img-opened"
}

// ------------------------------------------------------------------------

window.addEventListener('load', function () {
    document.addEventListener('click', function (event) {
        let languageWrapper = document.getElementById("language-wrapper")
        var isClickInside = languageWrapper.contains(event.target);
        if (!isClickInside) {
            closeLanguageDropDown()
        }
    });
})


languageDropDownHandlerMobile = function () {
    let dropdownWrapper = document.getElementById("dropdown-wrapper-mobile")
    let arrow = document.getElementById("dropdown-arrow-mobile")

    let languageSelectOpened = dropdownWrapper.className === "dropdown-wrapper-opened" ? true : false


    if (languageSelectOpened) closeLanguageDropDownMobile()
    else {
        openLanguageDropDownMobile()
    }
}
closeLanguageDropDownMobile = function () {
    let dropdownWrapper = document.getElementById("dropdown-wrapper-mobile")
    let arrow = document.getElementById("dropdown-arrow-mobile")
    dropdownWrapper.className = "dropdown-wrapper-closed"
    arrow.className = "current-language-arrow-img-closed"
}

openLanguageDropDownMobile = function () {
    let dropdownWrapper = document.getElementById("dropdown-wrapper-mobile")
    let arrow = document.getElementById("dropdown-arrow-mobile")
    dropdownWrapper.className = "dropdown-wrapper-opened"
    arrow.className = "current-language-arrow-img-opened"
}