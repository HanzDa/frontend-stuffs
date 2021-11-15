const period = document.querySelectorAll(".times p");
const track_items = document.querySelector(".tracks");

// Daily
period[0].addEventListener("click", () => {
    period[1].classList.contains("active")
        ? period[1].classList.remove("active")
        : false;
    period[2].classList.contains("active")
        ? period[2].classList.remove("active")
        : false;

    period[0].classList.add("active");

    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            let cards = "";
            data.forEach((element) => {
                cards += `
            <div class='track-item'>
            <div class="nav">
            <span>${element.title}</span>
            <span>...</span>
            </div>
            <p class="time">${element.timeframes.daily.current} hrs</p>
            <p class="previous">Last week - ${element.timeframes.daily.previous} hrs</p>
            </div> `;
            });
            track_items.innerHTML = cards;
        });
});

// weekly
period[1].addEventListener("click", () => {
    period[0].classList.contains("active")
        ? period[0].classList.remove("active")
        : false;
    period[2].classList.contains("active")
        ? period[2].classList.remove("active")
        : false;

    period[1].classList.add("active");

    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            let cards = "";
            data.forEach((element) => {
                cards += `
            <div class='track-item'>
            <div class="nav">
            <span>${element.title}</span>
            <span>...</span>
            </div>
            <p class="time">${element.timeframes.weekly.current} hrs</p>
            <p class="previous">Last week - ${element.timeframes.weekly.previous} hrs</p>
            </div> `;
            });
            track_items.innerHTML = cards;
        });
});

// yearly
period[2].addEventListener("click", () => {
    period[0].classList.contains("active")
        ? period[0].classList.remove("active")
        : false;
    period[1].classList.contains("active")
        ? period[1].classList.remove("active")
        : false;

    period[2].classList.add("active");

    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            let cards = "";
            data.forEach((element) => {
                cards += `
            <div class='track-item'>
            <div class="nav">
            <span>${element.title}</span>
            <span>...</span>
            </div>
            <p class="time">${element.timeframes.monthly.current} hrs</p>
            <p class="previous">Last week - ${element.timeframes.monthly.previous} hrs</p>
            </div> `;
            });
            track_items.innerHTML = cards;
        });
});
