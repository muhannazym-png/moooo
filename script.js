function openMenu() {

    const welcome = document.getElementById("welcomeScreen");
    const menu = document.getElementById("menuScreen");

    // Небольшая анимация нажатия

    welcome.style.transform = "scale(1.03)";
    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        menu.style.display = "block";

        setTimeout(() => {
            menu.style.opacity = "1";
        }, 50);

    }, 800);
}


/* =================================
   КАРТОЧКИ
================================= */

function openPage(page) {

    if (page === "calendar") {

        alert("Здесь будет наш календарь ❤️");

    }

    else if (page === "words") {

        alert("Здесь будут наши особенные слова.");

    }

    else if (page === "playlist") {

        alert("Здесь будет наша музыка и аудио.");

    }

    else if (page === "letter") {

        alert("Здесь будет письмо.");

    }

    else if (page === "photos") {

        alert("Здесь будет фотоальбом.");

    }

    else if (page === "things") {

        alert("Здесь будут вещи, которые напоминают мне о тебе.");

    }

}