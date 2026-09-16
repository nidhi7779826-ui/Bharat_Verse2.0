/* =========================================================
   HERITAGEQUEST
   COMPLETE INTERACTIVE JAVASCRIPT
========================================================= */


/* =========================================================
   HELPERS
========================================================= */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    const toast = $("#heritageToast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = $("#menuToggle");
const navLinks = $("#navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.className = "fa-solid fa-xmark";

    } else {

        icon.className = "fa-solid fa-bars";

    }

});


$$(".nav-links a, .nav-btn").forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.className = "fa-solid fa-bars";

    });

});


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const darkModeBtn = $("#darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = darkModeBtn.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.className = "fa-solid fa-sun";

        showToast("Light mode enabled");

    } else {

        icon.className = "fa-solid fa-moon";

        showToast("Dark mode enabled");

    }

});


/* =========================================================
   HERO BUTTONS
========================================================= */

$("#exploreBtn").addEventListener("click", () => {

    $("#history").scrollIntoView({
        behavior: "smooth"
    });

});


$("#heroGameBtn").addEventListener("click", () => {

    $("#games").scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


$$(".reveal").forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   PUBLIC API SERVICE & HERITAGE TOPICS
========================================================= */

const heritageTopics = {
    indus: {
        icon: "🏺",
        slug: "Indus_Valley_Civilisation",
        fallbackTitle: "Indus Valley Civilization",
        fallbackDesc: "The Indus Valley Civilisation was a Bronze Age civilisation in northwestern South Asia, famous for planned cities like Mohenjo-daro and Harappa, standardized bricks, and advanced drainage systems.",
        coords: { lat: 27.3257, lon: 68.1385, name: "Mohenjo-daro" }
    },
    maurya: {
        icon: "🦁",
        slug: "Maurya_Empire",
        fallbackTitle: "Maurya Empire",
        fallbackDesc: "A geographically extensive Iron Age historical power founded by Chandragupta Maurya, which reached its zenith under Ashoka the Great, known for edicts and the Lion Capital.",
        coords: { lat: 25.3811, lon: 83.0214, name: "Sarnath" }
    },
    gupta: {
        icon: "📜",
        slug: "Gupta_Empire",
        fallbackTitle: "Gupta Empire",
        fallbackDesc: "An ancient Indian empire known as the Golden Age of India, marked by extensive inventions and discoveries in science, technology, engineering, art, astronomy, and philosophy.",
        coords: { lat: 25.4358, lon: 81.8463, name: "Prayagraj" }
    },
    chola: {
        icon: "🛕",
        slug: "Chola_dynasty",
        fallbackTitle: "Chola Dynasty",
        fallbackDesc: "One of the longest-ruling dynasties in world history, famed for monumental Dravidian temples such as Brihadisvara, magnificent lost-wax bronze sculptures, and maritime power.",
        coords: { lat: 10.7828, lon: 79.1318, name: "Thanjavur" }
    },
    sultanate: {
        icon: "🏰",
        slug: "Delhi_Sultanate",
        fallbackTitle: "Delhi Sultanate",
        fallbackDesc: "An Islamic empire based in Delhi that stretched over large parts of South Asia for 320 years across five dynasties, creating iconic monuments like the Qutb Minar.",
        coords: { lat: 28.5244, lon: 77.1855, name: "Delhi" }
    },
    vijayanagara: {
        icon: "🏛️",
        slug: "Vijayanagara_Empire",
        fallbackTitle: "Vijayanagara Empire",
        fallbackDesc: "Based in the Deccan region with its imperial capital at Hampi, renowned for magnificent temple complexes, stone chariots, and thriving international commerce.",
        coords: { lat: 15.3350, lon: 76.4600, name: "Hampi" }
    },
    mughal: {
        icon: "👑",
        slug: "Mughal_Empire",
        fallbackTitle: "Mughal Empire",
        fallbackDesc: "An early-modern empire that ruled most of northern and central India, famous for Indo-Islamic architecture including the Taj Mahal, Red Fort, and Shalimar Gardens.",
        coords: { lat: 27.1751, lon: 78.0421, name: "Agra" }
    },
    maratha: {
        icon: "⚔️",
        slug: "Maratha_Empire",
        fallbackTitle: "Maratha Empire",
        fallbackDesc: "Founded by Chhatrapati Shivaji Maharaj in 1674, known for innovative guerrilla warfare (Ganimi Kava), extensive hill fort networks, and powerful naval presence.",
        coords: { lat: 18.2356, lon: 73.4475, name: "Raigad Fort" }
    },
    modern: {
        icon: "🇮🇳",
        slug: "History_of_the_Republic_of_India",
        fallbackTitle: "Republic of India",
        fallbackDesc: "The modern constitutional democratic republic established after independence in 1947, guided by the Constitution of 1950 drafted under Dr. B. R. Ambedkar.",
        coords: { lat: 28.6139, lon: 77.2090, name: "New Delhi" }
    },
    madhubani: {
        icon: "🎨",
        slug: "Madhubani_art",
        fallbackTitle: "Madhubani Art",
        fallbackDesc: "A celebrated folk art originating from the Mithila region of Bihar, characterized by geometric patterns, natural dye pigments, and depictions of nature and mythology.",
        coords: { lat: 26.3537, lon: 86.0718, name: "Mithila" }
    },
    temple: {
        icon: "🛕",
        slug: "Hindu_temple_architecture",
        fallbackTitle: "Temple Architecture of India",
        fallbackDesc: "The diverse architectural traditions of Indian temples including Nagara, Dravida, and Vesara styles, featuring intricately carved shikhara, gopurams, and mandapas.",
        coords: { lat: 9.9195, lon: 78.1193, name: "Madurai" }
    },
    warli: {
        icon: "🌾",
        slug: "Warli_painting",
        fallbackTitle: "Warli Tribal Art",
        fallbackDesc: "An ancient tribal art style created by the Warli community of Maharashtra using white rice paste, portraying circular village dances, harvests, and Mother Nature.",
        coords: { lat: 19.9975, lon: 73.7898, name: "Maharashtra" }
    },
    kashmir: {
        icon: "🧣",
        slug: "Pashmina",
        fallbackTitle: "Kashmir Pashmina & Shawl Weaving",
        fallbackDesc: "Renowned hand-spun cashmere wool woven by Kashmiri master artisans into luxurious shawls celebrated globally for softness, warmth, and Sozni embroidery.",
        coords: { lat: 34.0837, lon: 74.7973, name: "Srinagar" }
    },
    gond: {
        icon: "🌳",
        slug: "Gond_art",
        fallbackTitle: "Gond Folk Painting",
        fallbackDesc: "A revered indigenous art form created by the Gond tribal community of central India, known for intricate signature patterns of dots and lines celebrating forests and wildlife.",
        coords: { lat: 22.9734, lon: 78.6569, name: "Madhya Pradesh" }
    },
    northeast: {
        icon: "🧵",
        slug: "Culture_of_Northeast_India",
        fallbackTitle: "Handlooms of Northeast India",
        fallbackDesc: "Rich living craft traditions across eight states including Assam golden Muga silk, Naga tribal weaves, and Manipuri textiles reflecting distinct cultural identities.",
        coords: { lat: 26.1445, lon: 91.7362, name: "Guwahati" }
    },
    bath: {
        icon: "🌊",
        slug: "The_Great_Bath,_Mohenjo-daro",
        fallbackTitle: "The Great Bath of Mohenjo-daro",
        fallbackDesc: "A world-famous public water basin excavated in Sindh, built with precision-fitted baked bricks, gypsum mortar, and bitumen waterproofing over 4,500 years ago.",
        coords: { lat: 27.3257, lon: 68.1385, name: "Mohenjo-daro" }
    },
    lion: {
        icon: "🦁",
        slug: "Lion_Capital_of_Ashoka",
        fallbackTitle: "Lion Capital of Ashoka",
        fallbackDesc: "A polished Chunar sandstone sculpture originally erected atop an Ashoka Pillar at Sarnath around 250 BCE, adopted as the State Emblem of modern India.",
        coords: { lat: 25.3811, lon: 83.0214, name: "Sarnath" }
    },
    science: {
        icon: "🔭",
        slug: "History_of_science_and_technology_in_the_Indian_subcontinent",
        fallbackTitle: "Ancient Indian Science & Astronomy",
        fallbackDesc: "Foundational contributions to humanity including the invention of Zero, the decimal system, Aryabhata's astronomical algorithms, and Sushruta's surgical treatises.",
        coords: { lat: 25.6110, lon: 85.1440, name: "Pataliputra" }
    },
    forts: {
        icon: "🏰",
        slug: "Hill_Forts_of_Rajasthan",
        fallbackTitle: "Hill Forts & Citadels of India",
        fallbackDesc: "Monumental defensive fortresses like Chittorgarh, Kumbhalgarh, and Mehrangarh illustrating defensive Rajput and Maratha military architecture and rainwater harvesting.",
        coords: { lat: 24.8887, lon: 74.6269, name: "Chittorgarh" }
    }
};

/* In-memory API caches */
const wikiSummaryCache = {};
const weatherCache = {};

/* Fetch Wikipedia Summary via Public REST API */
async function fetchWikipediaSummary(slug) {
    if (wikiSummaryCache[slug]) {
        return wikiSummaryCache[slug];
    }

    try {
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`;
        const response = await fetch(url, {
            headers: { "Accept": "application/json" },
            signal: AbortSignal.timeout(5000)
        });

        if (!response.ok) {
            throw new Error(`Wikipedia API error: ${response.status}`);
        }

        const data = await response.json();
        wikiSummaryCache[slug] = data;
        return data;
    } catch (err) {
        console.warn(`Could not fetch live Wikipedia data for ${slug}:`, err);
        return null;
    }
}

/* Fetch Live Weather via Open-Meteo Public API */
async function fetchHeritageWeather(lat, lon) {
    const key = `${lat.toFixed(2)},${lon.toFixed(2)}`;
    if (weatherCache[key]) {
        return weatherCache[key];
    }

    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
        if (!res.ok) throw new Error("Weather fetch failed");
        const data = await res.json();
        weatherCache[key] = data.current_weather;
        return data.current_weather;
    } catch (err) {
        console.warn("Could not fetch weather:", err);
        return null;
    }
}

/* Map Open-Meteo weather codes to descriptive labels and icons */
function getWeatherDescription(code) {
    if (code === 0) return { label: "Clear Sky", icon: "fa-sun" };
    if (code <= 3) return { label: "Partly Cloudy", icon: "fa-cloud-sun" };
    if (code <= 48) return { label: "Foggy", icon: "fa-smog" };
    if (code <= 67) return { label: "Rainy", icon: "fa-cloud-rain" };
    if (code <= 77) return { label: "Snowy", icon: "fa-snowflake" };
    if (code <= 82) return { label: "Showers", icon: "fa-cloud-showers-heavy" };
    return { label: "Thunderstorm", icon: "fa-bolt" };
}

/* =========================================================
   INFORMATION MODAL (POWERED BY WIKIPEDIA REST API)
========================================================= */

async function openInfo(key) {
    const topic = heritageTopics[key];
    if (!topic) return;

    // Reset and show initial modal
    $("#infoIcon").textContent = topic.icon;
    $("#infoTitle").textContent = topic.fallbackTitle;
    $("#infoDescription").textContent = "Fetching live summary from Wikipedia...";
    $("#infoFacts").innerHTML = `<div class="fact-item"><i class="fa-solid fa-spinner fa-spin"></i> Loading verified encyclopedia facts...</div>`;

    const imageWrap = $("#infoImageWrap");
    const infoImg = $("#infoImage");
    const weatherBadge = $("#infoWeatherBadge");
    const wikiLink = $("#infoWikiLink");

    if (imageWrap) imageWrap.style.display = "none";
    if (weatherBadge) weatherBadge.style.display = "none";
    if (wikiLink) {
        wikiLink.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(topic.slug)}`;
    }

    $("#infoModal").classList.add("active");

    // Fetch live Wikipedia data
    const wikiData = await fetchWikipediaSummary(topic.slug);

    if (wikiData) {
        $("#infoTitle").textContent = wikiData.title || topic.fallbackTitle;
        $("#infoDescription").textContent = wikiData.extract || topic.fallbackDesc;

        if (wikiData.thumbnail && wikiData.thumbnail.source && imageWrap && infoImg) {
            infoImg.src = wikiData.thumbnail.source;
            infoImg.alt = wikiData.title;
            imageWrap.style.display = "block";
        }

        // Dynamically extract highlight sentences
        const extract = wikiData.extract || "";
        const sentences = extract.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 20);
        const highlights = sentences.slice(0, 4);

        if (highlights.length > 0) {
            $("#infoFacts").innerHTML = highlights
                .map(
                    sentence =>
                        `<div class="fact-item">
                            <i class="fa-solid fa-check"></i>
                            ${sentence}
                        </div>`
                )
                .join("");
        }
    } else {
        // Graceful fallback
        $("#infoTitle").textContent = topic.fallbackTitle;
        $("#infoDescription").textContent = topic.fallbackDesc;
        $("#infoFacts").innerHTML = `<div class="fact-item"><i class="fa-solid fa-landmark"></i> Historical landmark preserved in Indian cultural history.</div>`;
    }

    // Fetch live atmospheric weather for heritage coordinates
    if (topic.coords && weatherBadge) {
        weatherBadge.style.display = "inline-flex";
        weatherBadge.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Checking weather at ${topic.coords.name}...`;

        const weather = await fetchHeritageWeather(topic.coords.lat, topic.coords.lon);
        if (weather) {
            const desc = getWeatherDescription(weather.weathercode);
            weatherBadge.innerHTML = `<i class="fa-solid ${desc.icon}"></i> ${topic.coords.name}: ${Math.round(weather.temperature)}°C · ${desc.label}`;
        } else {
            weatherBadge.style.display = "none";
        }
    }
}


$$(".learn-btn, .culture-info-btn, .knowledge-btn")
    .forEach((button) => {

        button.addEventListener("click", () => {

            openInfo(button.dataset.info);

        });

    });


/* =========================================================
   HISTORY FILTER
========================================================= */

$$(".period-btn").forEach((button) => {

    button.addEventListener("click", () => {

        $$(".period-btn").forEach((btn) =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const period = button.dataset.period;

        $$(".history-card").forEach((card) => {

            if (
                period === "all" ||
                card.dataset.period === period
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================================================
   CULTURE FILTER
========================================================= */

$$(".culture-filter").forEach((button) => {

    button.addEventListener("click", () => {

        $$(".culture-filter").forEach((btn) =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const region = button.dataset.region;

        $$(".culture-card").forEach((card) => {

            if (
                region === "all" ||
                card.dataset.region === region
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================================================
   DYNAMIC QUIZ SERVICE (POWERED BY THE TRIVIA API & OPEN TRIVIA DB)
========================================================= */

const quizCategories = {
    civilization: {
        title: "Ancient India Challenge",
        intro: "Test your knowledge of the Indus Valley, Vedic period, and ancient cities.",
        tag: "india",
        category: "history"
    },
    puzzle: {
        title: "Ancient Puzzle Challenge",
        intro: "Solve intriguing questions on ancient architecture and archaeology.",
        tag: "india",
        category: "history"
    },
    artifact: {
        title: "Historical Artifacts Quiz",
        intro: "Discover celebrated sculptures, seals, coins, and heritage artifacts.",
        tag: "india",
        category: "history"
    },
    monument: {
        title: "Monuments & Architecture Quiz",
        intro: "Explore magnificent temples, UNESCO World Heritage sites, and forts.",
        tag: "india",
        category: "history"
    },
    symbols: {
        title: "Historical Symbols & Emblems",
        intro: "Learn about the Ashoka Chakra, royal seals, and historical emblems.",
        tag: "india",
        category: "history"
    },
    painting: {
        title: "Traditional Arts & Culture Quiz",
        intro: "Test your knowledge of Madhubani, Warli, Gond, and classical arts.",
        tag: "india",
        category: "arts_and_literature"
    },
    freedom: {
        title: "Freedom Movement & Modern India",
        intro: "Relive India's historic struggle for independence and national democracy.",
        tag: "india",
        category: "history"
    }
};

/* Verified Indian history question pool as resilient fallback */
const indianHistoryFallbackBank = [
    {
        question: "Which ancient civilization built the Great Bath and planned cities with advanced brick drainage?",
        options: ["Indus Valley Civilization", "Gupta Empire", "Maratha Empire", "Mughal Empire"],
        answer: 0
    },
    {
        question: "Who was the renowned Mauryan emperor whose rock and pillar edicts spread messages of Dhamma across South Asia?",
        options: ["Ashoka the Great", "Chandragupta II", "Harsha", "Kanishka"],
        answer: 0
    },
    {
        question: "The Lion Capital of Sarnath, adopted as India's State Emblem, was created during the reign of which dynasty?",
        options: ["Maurya Dynasty", "Chola Dynasty", "Gupta Dynasty", "Kushan Dynasty"],
        answer: 0
    },
    {
        question: "The Brihadisvara Temple at Thanjavur, built of solid granite, was commissioned by which Chola emperor?",
        options: ["Rajaraja I", "Rajendra I", "Karikala", "Kulothunga I"],
        answer: 0
    },
    {
        question: "Which UNESCO World Heritage city in Karnataka was the magnificent capital of the Vijayanagara Empire?",
        options: ["Hampi", "Badami", "Pattadakal", "Aihole"],
        answer: 0
    },
    {
        question: "The traditional Warli tribal art, created using rice paste and geometric shapes, originates from which Indian state?",
        options: ["Maharashtra", "Bihar", "Rajasthan", "Kerala"],
        answer: 0
    },
    {
        question: "In what year did India officially become an independent sovereign nation?",
        options: ["1947", "1950", "1942", "1935"],
        answer: 0
    },
    {
        question: "The Madhubani or Mithila folk painting tradition is indigenous to which state of India?",
        options: ["Bihar", "Odisha", "Gujarat", "West Bengal"],
        answer: 0
    },
    {
        question: "Who was the architect of the Indian Constitution and Chairman of its Drafting Committee?",
        options: ["Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Dr. Rajendra Prasad"],
        answer: 0
    },
    {
        question: "Which ancient mathematician and astronomer of Pataliputra calculated pi and explained solar and lunar eclipses?",
        options: ["Aryabhata", "Brahmagupta", "Varahamihira", "Bhaskara II"],
        answer: 0
    }
];

let currentQuizState = {
    key: null,
    title: "",
    intro: "",
    questions: [],
    questionIndex: 0,
    score: 0
};

/* Shuffle utility */
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/* Fetch dynamic quiz questions from public Trivia APIs */
async function fetchDynamicQuiz(catKey) {
    const cat = quizCategories[catKey] || quizCategories.civilization;

    // Try The Trivia API with tag=india first
    try {
        const url = `https://the-trivia-api.com/v2/questions?tags=${cat.tag}&limit=5`;
        const res = await fetch(url, { signal: AbortSignal.timeout(3500) });
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length >= 3) {
                return data.map(item => {
                    const allOptions = shuffleArray([item.correctAnswer, ...item.incorrectAnswers]);
                    return {
                        question: item.question.text,
                        options: allOptions,
                        answer: allOptions.indexOf(item.correctAnswer),
                        source: "The Trivia API"
                    };
                });
            }
        }
    } catch (e) {
        console.warn("The Trivia API fetch failed, trying Open Trivia DB:", e);
    }

    // Try Open Trivia Database (History Category 23)
    try {
        const url = `https://opentdb.com/api.php?amount=5&category=23&type=multiple`;
        const res = await fetch(url, { signal: AbortSignal.timeout(3500) });
        if (res.ok) {
            const data = await res.json();
            if (data.results && data.results.length >= 3) {
                return data.results.map(item => {
                    // Decode HTML entities
                    const parser = new DOMParser();
                    const decode = str => parser.parseFromString(str, "text/html").body.textContent;
                    const correct = decode(item.correct_answer);
                    const incorrect = item.incorrect_answers.map(decode);
                    const allOptions = shuffleArray([correct, ...incorrect]);
                    return {
                        question: decode(item.question),
                        options: allOptions,
                        answer: allOptions.indexOf(correct),
                        source: "Open Trivia DB"
                    };
                });
            }
        }
    } catch (e) {
        console.warn("Open Trivia DB fetch failed:", e);
    }

    // Graceful fallback from verified bank
    const shuffledPool = shuffleArray(indianHistoryFallbackBank).slice(0, 5);
    return shuffledPool.map(q => {
        const correctOpt = q.options[q.answer];
        const shuffledOpts = shuffleArray(q.options);
        return {
            question: q.question,
            options: shuffledOpts,
            answer: shuffledOpts.indexOf(correctOpt),
            source: "Verified Heritage Quiz"
        };
    });
}

/* =========================================================
   QUIZ ENGINE
========================================================= */

async function startQuiz(key) {
    const meta = quizCategories[key] || quizCategories.civilization;
    currentQuizState.key = key;
    currentQuizState.title = meta.title;
    currentQuizState.intro = meta.intro;
    currentQuizState.questionIndex = 0;
    currentQuizState.score = 0;

    $("#gameModal").classList.add("active");
    $("#gameTitle").textContent = meta.title;
    $("#gameIntro").textContent = meta.intro;
    $("#gameScore").textContent = "0";

    // Show loading state
    $("#gameQuestion").innerHTML = `<div style="text-align:center; padding: 20px 0;"><i class="fa-solid fa-spinner fa-spin" style="font-size: 1.6rem; color: #fbbf24; margin-bottom: 10px;"></i><p>Loading live quiz questions from Public Trivia API...</p></div>`;
    $("#gameOptions").innerHTML = "";
    $("#nextGameBtn").disabled = true;

    // Fetch live questions
    currentQuizState.questions = await fetchDynamicQuiz(key);
    showQuestion();
}

function showQuestion() {
    const q = currentQuizState.questions[currentQuizState.questionIndex];
    if (!q) {
        finishQuiz();
        return;
    }

    $("#gameQuestion").innerHTML = `
        <div style="font-size: 0.75rem; text-transform: uppercase; color: #fbbf24; font-weight: 700; margin-bottom: 6px;">
            Question ${currentQuizState.questionIndex + 1} of ${currentQuizState.questions.length} · <span style="opacity:0.8;">${q.source || "Live API"}</span>
        </div>
        <div>${q.question}</div>
    `;

    $("#gameOptions").innerHTML = "";
    $("#nextGameBtn").disabled = true;

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "quiz-option";
        button.textContent = option;
        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });
        $("#gameOptions").appendChild(button);
    });
}

function checkAnswer(index, clickedButton) {
    const q = currentQuizState.questions[currentQuizState.questionIndex];
    const buttons = $$("#gameOptions .quiz-option");

    buttons.forEach((button) => {
        button.disabled = true;
    });

    if (index === q.answer) {
        clickedButton.classList.add("correct");
        currentQuizState.score += 10;
        $("#gameScore").textContent = currentQuizState.score;
        showToast("Correct! +10 points");
    } else {
        clickedButton.classList.add("wrong");
        if (buttons[q.answer]) {
            buttons[q.answer].classList.add("correct");
        }
        showToast("Incorrect. Better luck on the next one!");
    }

    $("#nextGameBtn").disabled = false;
}

$("#nextGameBtn").addEventListener("click", () => {
    currentQuizState.questionIndex++;
    if (currentQuizState.questionIndex >= currentQuizState.questions.length) {
        finishQuiz();
    } else {
        showQuestion();
    }
});

function finishQuiz() {
    $("#gameQuestion").innerHTML = `
        <div style="text-align: center; padding: 10px 0;">
            <div style="font-size: 2.4rem; margin-bottom: 8px;">🎉</div>
            <h3 style="margin-bottom: 8px;">Quiz Completed!</h3>
            <p>You scored <strong>${currentQuizState.score}</strong> points across ${currentQuizState.questions.length} live questions.</p>
        </div>
    `;

    $("#gameOptions").innerHTML = "";
    $("#nextGameBtn").textContent = "Play New Round";
    $("#nextGameBtn").disabled = false;

    $("#nextGameBtn").onclick = () => {
        $("#nextGameBtn").textContent = "Next";
        $("#nextGameBtn").onclick = null;
        startQuiz(currentQuizState.key);
    };
}


/* =========================================================
   GAME FILTER
========================================================= */

const gamePeriodFilter =
    $("#gamePeriodFilter");

const gameTypeFilter =
    $("#gameTypeFilter");


function filterGames() {

    const period =
        gamePeriodFilter.value;

    const type =
        gameTypeFilter.value;

    let visible = 0;


    $$(".game-card").forEach((card) => {

        const cardPeriod =
            card.dataset.period;

        const cardType =
            card.dataset.type;


        const periodMatch =
            period === "all" ||
            cardPeriod === "all" ||
            cardPeriod === period;


        const typeMatch =
            type === "all" ||
            cardType === type;


        if (periodMatch && typeMatch) {

            card.style.display = "";

            visible++;

        } else {

            card.style.display = "none";

        }

    });


    $("#noGames").style.display =
        visible === 0 ? "block" : "none";

}


gamePeriodFilter.addEventListener(
    "change",
    filterGames
);


gameTypeFilter.addEventListener(
    "change",
    filterGames
);


$("#resetGameFilters").addEventListener(
    "click",
    () => {

        gamePeriodFilter.value = "all";

        gameTypeFilter.value = "all";

        filterGames();

    }
);


/* =========================================================
   MEMORY GAME
========================================================= */

const memorySymbols = [
    "🏺",
    "🦁",
    "🛕",
    "🏰",
    "⚔️",
    "🇮🇳"
];


let memoryCards = [];
let memoryFirst = null;
let memorySecond = null;
let memoryLocked = false;
let memoryMoves = 0;
let memoryMatches = 0;


function startMemoryGame() {

    $("#memoryModal").classList.add("active");

    createMemoryGame();

}


function createMemoryGame() {

    memoryFirst = null;

    memorySecond = null;

    memoryLocked = false;

    memoryMoves = 0;

    memoryMatches = 0;

    $("#memoryMoves").textContent = "0";

    memoryCards =
        [...memorySymbols, ...memorySymbols]
            .sort(() => Math.random() - 0.5);


    const grid = $("#memoryGrid");

    grid.innerHTML = "";


    memoryCards.forEach((symbol, index) => {

        const card =
            document.createElement("button");

        card.className = "memory-card";

        card.dataset.index = index;

        card.dataset.symbol = symbol;

        card.textContent = symbol;

        card.addEventListener(
            "click",
            () => flipMemoryCard(card)
        );

        grid.appendChild(card);

    });

}


function flipMemoryCard(card) {

    if (
        memoryLocked ||
        card.classList.contains("flipped") ||
        card.classList.contains("matched")
    ) {
        return;
    }


    card.classList.add("flipped");


    if (!memoryFirst) {

        memoryFirst = card;

        return;

    }


    memorySecond = card;

    memoryMoves++;

    $("#memoryMoves").textContent =
        memoryMoves;


    if (
        memoryFirst.dataset.symbol ===
        memorySecond.dataset.symbol
    ) {

        memoryFirst.classList.add("matched");

        memorySecond.classList.add("matched");

        memoryFirst = null;

        memorySecond = null;

        memoryMatches++;


        if (memoryMatches === memorySymbols.length) {

            showToast(
                `Excellent! Completed in ${memoryMoves} moves.`
            );

        }

    } else {

        memoryLocked = true;

        setTimeout(() => {

            memoryFirst.classList.remove("flipped");

            memorySecond.classList.remove("flipped");

            memoryFirst = null;

            memorySecond = null;

            memoryLocked = false;

        }, 750);

    }

}


$("#restartMemory").addEventListener(
    "click",
    createMemoryGame
);


/* =========================================================
   ROYAL DRESS GAME
========================================================= */

let royalChoices = [];


$$(".royal-select button")
    .forEach((button) => {

        button.addEventListener("click", () => {

            const choice =
                button.dataset.choice;


            if (
                royalChoices.includes(choice)
            ) {

                royalChoices =
                    royalChoices.filter(
                        item => item !== choice
                    );

                button.classList.remove(
                    "selected"
                );

            } else {

                royalChoices.push(choice);

                button.classList.add(
                    "selected"
                );

            }


            updateRoyalResult();

        });

    });


function updateRoyalResult() {

    const result = $("#royalResult");


    if (royalChoices.length === 0) {

        result.textContent =
            "Choose at least two items.";

        return;

    }


    if (royalChoices.length === 1) {

        result.textContent =
            "Good start! Choose another clothing item.";

        return;

    }


    result.textContent =
        `Great combination! You selected ${royalChoices.length} royal items.`;

}


/* =========================================================
   DYNAMIC HERITAGE FACTS (POWERED BY WIKIPEDIA REST APIS)
========================================================= */

const heritageFactTopics = [
    { slug: "Indus_Valley_Civilisation", title: "Indus Valley Civilization" },
    { slug: "Ashoka", title: "Emperor Ashoka" },
    { slug: "Hampi", title: "Hampi Monuments" },
    { slug: "Brihadisvara_Temple", title: "Brihadisvara Temple" },
    { slug: "Ajanta_Caves", title: "Ajanta Caves" },
    { slug: "Ellora_Caves", title: "Ellora Caves" },
    { slug: "Konark_Sun_Temple", title: "Konark Sun Temple" },
    { slug: "Taj_Mahal", title: "The Taj Mahal" },
    { slug: "Chhatrapati_Shivaji_Maharaj", title: "Chhatrapati Shivaji Maharaj" },
    { slug: "Nalanda_mahavihara", title: "Ancient Nalanda University" },
    { slug: "Sanchi", title: "Great Stupa at Sanchi" },
    { slug: "Red_Fort", title: "Red Fort of Delhi" },
    { slug: "Qutb_Minar", title: "Qutb Minar" },
    { slug: "Meenakshi_Temple", title: "Madurai Meenakshi Temple" },
    { slug: "Khajuraho_Group_of_Monuments", title: "Khajuraho Monuments" },
    { slug: "Aryabhata", title: "Aryabhata (Astronomer & Mathematician)" },
    { slug: "Varanasi", title: "Varanasi (Kashi)" },
    { slug: "Charminar", title: "Charminar of Hyderabad" },
    { slug: "Golconda_Fort", title: "Golconda Fort" },
    { slug: "Madhubani_art", title: "Madhubani Art" },
    { slug: "Warli_painting", title: "Warli Art" },
    { slug: "History_of_the_Republic_of_India", title: "Constitution & Republic of India" }
];

let lastFactTopicIndex = -1;

async function fetchDynamicFact() {
    const factTextEl = $("#factText");
    const factTopicEl = $("#factTopic");
    const factLinkEl = $("#factLink");
    const newFactBtn = $("#newFact");

    if (newFactBtn) {
        newFactBtn.disabled = true;
        const icon = newFactBtn.querySelector("i");
        if (icon) icon.className = "fa-solid fa-spinner fa-spin";
    }

    // Pick a random topic different from the last one
    let nextIdx = Math.floor(Math.random() * heritageFactTopics.length);
    if (nextIdx === lastFactTopicIndex) {
        nextIdx = (nextIdx + 1) % heritageFactTopics.length;
    }
    lastFactTopicIndex = nextIdx;
    const selected = heritageFactTopics[nextIdx];

    try {
        const data = await fetchWikipediaSummary(selected.slug);
        if (data && data.extract) {
            if (factTopicEl) factTopicEl.textContent = `WIKIPEDIA FACT · ${data.title.toUpperCase()}`;
            if (factTextEl) factTextEl.textContent = data.extract;
            if (factLinkEl) {
                factLinkEl.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(selected.slug)}`;
                factLinkEl.style.display = "inline-flex";
            }
        } else {
            throw new Error("Empty extract");
        }
    } catch (e) {
        if (factTopicEl) factTopicEl.textContent = "HERITAGE FACT";
        if (factTextEl) factTextEl.textContent = "Mohenjo-daro and Harappa featured standardized baked bricks and world-renowned underground municipal drainage systems over 4,500 years ago.";
        if (factLinkEl) factLinkEl.style.display = "none";
    } finally {
        if (newFactBtn) {
            newFactBtn.disabled = false;
            const icon = newFactBtn.querySelector("i");
            if (icon) icon.className = "fa-solid fa-wand-magic-sparkles";
        }
    }
}

$("#newFact").addEventListener("click", fetchDynamicFact);


/* =========================================================
   CHATBOT (POWERED BY WIKIPEDIA SEARCH & REST APIs)
========================================================= */

const chatbot = $("#chatbot");

$("#chatOpenNav").addEventListener("click", () => {
    chatbot.classList.add("active");
});

$("#floatingChat").addEventListener("click", () => {
    chatbot.classList.toggle("active");
});

$("#closeChat").addEventListener("click", () => {
    chatbot.classList.remove("active");
});

function addChatMessage(content, type, isHTML = false) {
    const message = document.createElement("div");
    message.className = type === "user" ? "user-message" : "bot-message";

    if (isHTML) {
        message.innerHTML = content;
    } else {
        message.textContent = content;
    }

    $("#chatMessages").appendChild(message);
    $("#chatMessages").scrollTop = $("#chatMessages").scrollHeight;
    return message;
}

/* Query Wikipedia API to fetch rich answers dynamically */
async function queryHeritageAPI(userInput) {
    const cleanQuery = userInput.trim();

    try {
        // Step 1: Search Wikipedia for relevant articles
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(cleanQuery + " India history")}&utf8=&format=json&origin=*`;
        const searchRes = await fetch(searchUrl, { signal: AbortSignal.timeout(5000) });

        if (!searchRes.ok) throw new Error("Search failed");
        const searchData = await searchRes.json();

        const searchHits = searchData?.query?.search || [];
        if (searchHits.length === 0) {
            return {
                title: "HeritageBot",
                text: "I couldn't find a direct historical record matching your question. Try asking about the Indus Valley Civilization, Ashoka, Chola Empire, Mughals, Marathas, Ajanta Caves, or traditional Indian arts!",
                url: null,
                image: null
            };
        }

        // Pick best matching title
        const topTitle = searchHits[0].title;

        // Step 2: Fetch article summary
        const summaryData = await fetchWikipediaSummary(topTitle.replace(/ /g, "_"));

        if (!summaryData || !summaryData.extract) {
            return {
                title: topTitle,
                text: searchHits[0].snippet.replace(/<[^>]+>/g, ""),
                url: `https://en.wikipedia.org/wiki/${encodeURIComponent(topTitle)}`,
                image: null
            };
        }

        return {
            title: summaryData.title,
            text: summaryData.extract,
            url: `https://en.wikipedia.org/wiki/${encodeURIComponent(summaryData.title.replace(/ /g, "_"))}`,
            image: summaryData.thumbnail ? summaryData.thumbnail.source : null
        };
    } catch (err) {
        console.warn("Wikipedia chatbot query error:", err);
        return {
            title: "Heritage Assistant",
            text: "India possesses one of the world's most ancient living civilizations, spanning the Indus Valley, Maurya, Gupta, Chola, and Mughal periods, with timeless monuments and vibrant cultural arts.",
            url: "https://en.wikipedia.org/wiki/Culture_of_India",
            image: null
        };
    }
}

async function sendMessage() {
    const input = $("#chatInput");
    const text = input.value.trim();
    if (!text) return;

    addChatMessage(text, "user");
    input.value = "";

    // Show live typing bubble
    const typingIndicator = addChatMessage(
        `<i class="fa-solid fa-circle-notch fa-spin"></i> HeritageBot is searching Wikipedia...`,
        "bot",
        true
    );
    typingIndicator.classList.add("bot-typing");

    // Fetch dynamic response from Wikipedia
    const result = await queryHeritageAPI(text);

    // Remove typing indicator
    typingIndicator.remove();

    // Render rich response card
    let botHTML = `<div class="bot-card">`;
    botHTML += `<strong style="color: #fbbf24;"><i class="fa-brands fa-wikipedia-w"></i> ${result.title}</strong>`;
    if (result.image) {
        botHTML += `<img class="bot-card-thumb" src="${result.image}" alt="${result.title}">`;
    }
    botHTML += `<p style="margin: 4px 0; line-height: 1.45;">${result.text}</p>`;
    if (result.url) {
        botHTML += `<a class="bot-link" href="${result.url}" target="_blank" rel="noopener noreferrer">Read full article on Wikipedia <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
    }
    botHTML += `</div>`;

    addChatMessage(botHTML, "bot", true);
}

$("#sendChat").addEventListener("click", sendMessage);

$("#chatInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

$$(".quick-questions button").forEach((button) => {
    button.addEventListener("click", () => {
        $("#chatInput").value = button.dataset.question;
        sendMessage();
    });
});


/* =========================================================
   MODAL CLOSING
========================================================= */

$$(".close-modal")
    .forEach((button) => {

        button.addEventListener("click", () => {

            const modalId =
                button.dataset.close;

            $("#" + modalId)
                .classList.remove("active");

        });

    });


$$(".modal")
    .forEach((modal) => {

        modal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === modal &&
                    !modal.classList.contains(
                        "three-d-modal"
                    )
                ) {

                    modal.classList.remove(
                        "active"
                    );

                }

            }
        );

    });


/* =========================================================
   THREE.JS 3D GAME ENGINE
========================================================= */

let scene3D;
let camera3D;
let renderer3D;
let animation3D;

let raycaster3D;
let mouse3D;

let threeDObjects = [];

let threeDMode = "city";

let threeDScore = 0;
let threeDTime = 120;

let threeDTimer = null;

let threeDTask = 0;

let selected3DObject = null;

let dragState = {

    active: false,
    lastX: 0,
    lastY: 0

};


/* =========================================================
   3D GAME DATA
========================================================= */

const threeDGameData = {

    city: {

        title: "Build the Harappan City",

        goal:
            "Create an organized Harappan settlement by placing important structures.",

        howTo: [
            "Choose an object from the buttons below.",
            "Click an empty location in the city.",
            "Place important structures in suitable locations.",
            "Complete all tasks before the timer ends."
        ],

        controls:
            "Click to place objects. Drag the mouse to rotate the city.",

        learn:
            "Harappan town planning, drainage and public structures.",

        tasks: [

            {
                question:
                    "Which structure should be placed near the centre of the settlement?",

                options: [
                    "House",
                    "Great Bath",
                    "Tree"
                ],

                answer: 1
            },

            {
                question:
                    "Which feature was important in Harappan cities?",

                options: [
                    "Drainage",
                    "Airports",
                    "Railways"
                ],

                answer: 0
            },

            {
                question:
                    "Which structure can provide water?",

                options: [
                    "Well",
                    "Watchtower",
                    "Palace"
                ],

                answer: 0
            }

        ]

    },


    bath: {

        title: "Restore the Great Bath",

        goal:
            "Reconstruct the important components of a simplified Great Bath.",

        howTo: [
            "Choose the structure shown in the task.",
            "Click the highlighted construction area.",
            "Correct placement earns points.",
            "Complete all restoration tasks."
        ],

        controls:
            "Click the correct construction element. Drag to rotate the view.",

        learn:
            "The structure, water management and architecture of the Great Bath.",

        tasks: [

            {
                question:
                    "What is the main feature of the Great Bath?",

                options: [
                    "Large water tank",
                    "Royal throne",
                    "Defensive tower"
                ],

                answer: 0
            },

            {
                question:
                    "What material was widely used in Harappan construction?",

                options: [
                    "Baked bricks",
                    "Steel",
                    "Plastic"
                ],

                answer: 0
            },

            {
                question:
                    "What was important for keeping water inside the structure?",

                options: [
                    "Water-resistant construction",
                    "Wooden roof",
                    "Metal bridge"
                ],

                answer: 0
            }

        ]

    },


    temple: {

        title: "Build an Ancient Temple",

        goal:
            "Construct a simplified temple using important architectural elements.",

        howTo: [
            "Choose the temple element requested.",
            "Click the appropriate area.",
            "Build the structure step by step.",
            "Finish all architectural stages."
        ],

        controls:
            "Click a temple element. Drag to rotate the 3D structure.",

        learn:
            "Basic concepts of Indian temple architecture.",

        tasks: [

            {
                question:
                    "What supports many temple structures?",

                options: [
                    "Pillars",
                    "Railway tracks",
                    "Plastic panels"
                ],

                answer: 0
            },

            {
                question:
                    "What is a gopuram?",

                options: [
                    "Monumental gateway",
                    "Water tank",
                    "Fort cannon"
                ],

                answer: 0
            },

            {
                question:
                    "Which feature is commonly found in temple architecture?",

                options: [
                    "Sculptural decoration",
                    "Airport runway",
                    "Modern elevator"
                ],

                answer: 0
            }

        ]

    },


    fort: {

        title: "Historic Fort Explorer",

        goal:
            "Explore the fort and identify important defensive structures.",

        howTo: [
            "Rotate the fort to inspect different areas.",
            "Click a highlighted structure.",
            "Identify its historical function.",
            "Find all required structures."
        ],

        controls:
            "Drag to rotate the fort. Click structures to inspect them.",

        learn:
            "Fort planning, defence and the relationship between architecture and geography.",

        tasks: [

            {
                question:
                    "What was a fort gate mainly used for?",

                options: [
                    "Controlled entry",
                    "Growing crops",
                    "Storing books"
                ],

                answer: 0
            },

            {
                question:
                    "Why were many forts built on hills?",

                options: [
                    "Natural defensive advantage",
                    "For railway stations",
                    "For airports"
                ],

                answer: 0
            },

            {
                question:
                    "What could a watchtower help defenders do?",

                options: [
                    "Observe surroundings",
                    "Cook food",
                    "Write poems"
                ],

                answer: 0
            }

        ]

    },


    artifact: {

        title: "Archaeological Artifact Hunt",

        goal:
            "Find and identify objects hidden inside an archaeological excavation site.",

        howTo: [
            "Explore the excavation area.",
            "Click an artifact.",
            "Identify its possible purpose.",
            "Find all required objects."
        ],

        controls:
            "Drag to explore. Click an artifact to inspect it.",

        learn:
            "How archaeological objects provide clues about ancient societies.",

        tasks: [

            {
                question:
                    "What can an artifact tell archaeologists?",

                options: [
                    "Information about past societies",
                    "Tomorrow's weather",
                    "Modern traffic"
                ],

                answer: 0
            },

            {
                question:
                    "Which object is strongly associated with Harappan archaeology?",

                options: [
                    "Seals",
                    "Modern smartphones",
                    "Cars"
                ],

                answer: 0
            },

            {
                question:
                    "Why are archaeological excavations important?",

                options: [
                    "They reveal evidence of the past",
                    "They build airports",
                    "They create highways"
                ],

                answer: 0
            }

        ]

    },


    court: {

        title: "Explore the Royal Court",

        goal:
            "Explore a simplified royal court and identify objects connected with medieval life.",

        howTo: [
            "Look around the royal court.",
            "Click important objects.",
            "Read the information shown.",
            "Complete all discovery tasks."
        ],

        controls:
            "Drag to rotate the court. Click objects to inspect them.",

        learn:
            "Architecture, objects and social spaces connected with royal courts.",

        tasks: [

            {
                question:
                    "What was a royal court used for?",

                options: [
                    "Administration and royal activities",
                    "Modern shopping",
                    "Railway transport"
                ],

                answer: 0
            },

            {
                question:
                    "Which object can represent royal authority?",

                options: [
                    "Throne",
                    "Traffic signal",
                    "Computer"
                ],

                answer: 0
            },

            {
                question:
                    "Why are court buildings historically useful?",

                options: [
                    "They reveal aspects of past political life",
                    "They predict weather",
                    "They measure earthquakes"
                ],

                answer: 0
            }

        ]

    }

};


/* =========================================================
   OPEN 3D GAME
========================================================= */

$$(".play-3d-btn").forEach((button) => {

    button.addEventListener("click", () => {

        open3DGame(
            button.dataset["3d"]
        );

    });

});


$("#open3DGame").addEventListener(
    "click",
    () => open3DGame("city")
);


function open3DGame(mode = "city") {

    threeDMode = mode;

    $("#civilization3DModal")
        .classList.add("active");

    init3DGame();

}


/* =========================================================
   INITIALIZE 3D
========================================================= */

function init3DGame() {

    cleanup3D();

    const game =
        threeDGameData[threeDMode];

    threeDScore = 0;

    threeDTime = 120;

    threeDTask = 0;

    selected3DObject = null;


    /* SIDEBAR */

    $("#threeDTitle").textContent =
        game.title;

    $("#threeDGoal").textContent =
        game.goal;

    $("#threeDControls").textContent =
        game.controls;

    $("#threeDLearn").textContent =
        game.learn;


    $("#threeDHowTo").innerHTML =
        game.howTo
            .map(item => `<li>${item}</li>`)
            .join("");


    $("#threeDScore").textContent = "0";

    $("#threeDTime").textContent = "120";

    $("#threeDProgressBar").style.width =
        "0%";


    /* SCENE */

    scene3D =
        new THREE.Scene();

    scene3D.background =
        new THREE.Color(0x17100a);


    /* CAMERA */

    const container =
        $("#threeDCanvasWrap");

    const width =
        container.clientWidth;

    const height =
        container.clientHeight;


    camera3D =
        new THREE.PerspectiveCamera(
            50,
            width / height,
            0.1,
            1000
        );


    camera3D.position.set(
        7,
        6,
        9
    );


    /* RENDERER */

    renderer3D =
        new THREE.WebGLRenderer({
            canvas: $("#threeDCanvas"),
            antialias: true
        });


    renderer3D.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );


    renderer3D.setSize(
        width,
        height
    );


    /* LIGHTS */

    const ambient =
        new THREE.AmbientLight(
            0xffd8a8,
            1.5
        );

    scene3D.add(ambient);


    const mainLight =
        new THREE.DirectionalLight(
            0xffffff,
            2
        );

    mainLight.position.set(
        5,
        10,
        5
    );

    scene3D.add(mainLight);


    const fillLight =
        new THREE.PointLight(
            0xffa726,
            1.5,
            30
        );

    fillLight.position.set(
        -5,
        5,
        -5
    );

    scene3D.add(fillLight);


    /* WORLD */

    create3DGround();

    createGameWorld(threeDMode);


    /* RAYCASTER */

    raycaster3D =
        new THREE.Raycaster();

    mouse3D =
        new THREE.Vector2();


    renderer3D.domElement
        .addEventListener(
            "pointerdown",
            handle3DPointerDown
        );

    renderer3D.domElement
        .addEventListener(
            "pointerup",
            handle3DPointerUp
        );

    renderer3D.domElement
        .addEventListener(
            "pointermove",
            handle3DPointerMove
        );

    renderer3D.domElement
        .addEventListener(
            "click",
            handle3DClick
        );


    show3DTask();

    start3DTimer();

    animate3D();

}


/* =========================================================
   GROUND
========================================================= */

function create3DGround() {

    const geometry =
        new THREE.PlaneGeometry(
            20,
            20
        );

    const material =
        new THREE.MeshStandardMaterial({
            color: 0x5b3b22,
            roughness: 0.9
        });


    const ground =
        new THREE.Mesh(
            geometry,
            material
        );


    ground.rotation.x =
        -Math.PI / 2;

    scene3D.add(ground);


    const grid =
        new THREE.GridHelper(
            20,
            20,
            0x8a633c,
            0x60442c
        );


    grid.position.y = 0.01;

    scene3D.add(grid);

}


/* =========================================================
   CREATE WORLD BASED ON GAME
========================================================= */

function createGameWorld(mode) {

    if (mode === "city") {

        buildHarappanCity();

    }

    if (mode === "bath") {

        buildGreatBath();

    }

    if (mode === "temple") {

        buildTemple();

    }

    if (mode === "fort") {

        buildFort();

    }

    if (mode === "artifact") {

        buildArtifactSite();

    }

    if (mode === "court") {

        buildRoyalCourt();

    }

}


/* =========================================================
   HARAPPAN CITY
========================================================= */

function buildHarappanCity() {

    /* Houses */

    for (let i = 0; i < 5; i++) {

        const house =
            createBuilding(
                1.3,
                1,
                1.2,
                0xc28a52
            );

        house.position.set(
            -4 + (i % 3) * 4,
            0.5,
            -2 + Math.floor(i / 3) * 3
        );

        house.userData.type = "house";

        scene3D.add(house);

        threeDObjects.push(house);

    }


    /* Road */

    const roadGeometry =
        new THREE.BoxGeometry(
            9,
            0.08,
            1.2
        );

    const roadMaterial =
        new THREE.MeshStandardMaterial({
            color: 0x765133
        });

    const road =
        new THREE.Mesh(
            roadGeometry,
            roadMaterial
        );

    road.position.set(
        0,
        0.05,
        1
    );

    road.userData.type = "road";

    scene3D.add(road);

    threeDObjects.push(road);


    /* Great Bath */

    const bath =
        createBathObject();

    bath.position.set(
        3,
        0.3,
        -3
    );

    bath.userData.type = "bath";

    scene3D.add(bath);

    threeDObjects.push(bath);


    /* Well */

    const well =
        createWell();

    well.position.set(
        -3,
        0.4,
        3
    );

    well.userData.type = "well";

    scene3D.add(well);

}


/* =========================================================
   GREAT BATH
========================================================= */

function buildGreatBath() {

    const bath =
        createBathObject();

    bath.scale.set(
        1.5,
        1.5,
        1.5
    );

    scene3D.add(bath);

    threeDObjects.push(bath);


    /* surrounding walls */

    for (let i = -2; i <= 2; i++) {

        const wall =
            createBuilding(
                0.7,
                0.6,
                3.8,
                0xb58250
            );

        wall.position.set(
            i * 1.7,
            0.3,
            -3
        );

        scene3D.add(wall);

    }

}


/* =========================================================
   TEMPLE
========================================================= */

function buildTemple() {

    const base =
        createBuilding(
            5,
            0.4,
            5,
            0xb9864c
        );

    base.position.y = 0.2;

    base.userData.type =
        "foundation";

    scene3D.add(base);

    threeDObjects.push(base);


    for (let i = -2; i <= 2; i += 2) {

        const pillar =
            createBuilding(
                0.35,
                2,
                0.35,
                0xd0a46c
            );

        pillar.position.set(
            i,
            1.2,
            1.5
        );

        pillar.userData.type =
            "pillar";

        scene3D.add(pillar);

        threeDObjects.push(pillar);

    }


    const tower =
        createTempleTower();

    tower.position.y = 1;

    tower.userData.type =
        "tower";

    scene3D.add(tower);

    threeDObjects.push(tower);

}


/* =========================================================
   FORT
========================================================= */

function buildFort() {

    const wallPositions = [
        [0, 1, -4],
        [0, 1, 4],
        [-4, 1, 0],
        [4, 1, 0]
    ];


    wallPositions.forEach(
        ([x, y, z], index) => {

            const wall =
                createBuilding(
                    index < 2 ? 8 : 1,
                    2,
                    index < 2 ? 1 : 8,
                    0x80603a
                );

            wall.position.set(
                x,
                y,
                z
            );

            wall.userData.type =
                "wall";

            scene3D.add(wall);

            threeDObjects.push(wall);

        }
    );


    const gate =
        createGate();

    gate.position.set(
        0,
        1,
        4
    );

    gate.userData.type =
        "gate";

    scene3D.add(gate);

    threeDObjects.push(gate);


    const towerPositions = [
        [-4, 1.5, -4],
        [4, 1.5, -4],
        [-4, 1.5, 4],
        [4, 1.5, 4]
    ];


    towerPositions.forEach(
        ([x, y, z]) => {

            const tower =
                createBuilding(
                    1.3,
                    3,
                    1.3,
                    0x927044
                );

            tower.position.set(
                x,
                y,
                z
            );

            tower.userData.type =
                "watchtower";

            scene3D.add(tower);

            threeDObjects.push(tower);

        }
    );

}


/* =========================================================
   ARTIFACT SITE
========================================================= */

function buildArtifactSite() {

    for (let i = 0; i < 8; i++) {

        const rock =
            new THREE.Mesh(
                new THREE.DodecahedronGeometry(
                    0.35
                ),
                new THREE.MeshStandardMaterial({
                    color: 0x795333
                })
            );


        rock.position.set(
            -4 + Math.random() * 8,
            0.3,
            -4 + Math.random() * 8
        );

        scene3D.add(rock);

    }


    const artifactTypes = [
        "pot",
        "seal",
        "figurine",
        "lamp"
    ];


    artifactTypes.forEach(
        (type, index) => {

            const artifact =
                createArtifact(type);

            artifact.position.set(
                -3 + index * 2,
                0.5,
                -1 + (index % 2) * 3
            );

            artifact.userData.type =
                type;

            scene3D.add(artifact);

            threeDObjects.push(artifact);

        }
    );

}


/* =========================================================
   ROYAL COURT
========================================================= */

function buildRoyalCourt() {

    const floor =
        createBuilding(
            7,
            0.3,
            6,
            0x8e5b32
        );

    floor.position.y = 0.15;

    scene3D.add(floor);


    for (let i = -2; i <= 2; i += 2) {

        const pillar =
            createBuilding(
                0.4,
                3,
                0.4,
                0xc2935b
            );

        pillar.position.set(
            i,
            1.7,
            -2
        );

        pillar.userData.type =
            "pillar";

        scene3D.add(pillar);

        threeDObjects.push(pillar);

    }


    const throne =
        createBuilding(
            1.6,
            1.8,
            1,
            0xa56a32
        );

    throne.position.set(
        0,
        1,
        -1
    );

    throne.userData.type =
        "throne";

    scene3D.add(throne);

    threeDObjects.push(throne);


    const decorativePot =
        createArtifact("pot");

    decorativePot.position.set(
        2,
        0.5,
        1
    );

    decorativePot.userData.type =
        "pot";

    scene3D.add(decorativePot);

    threeDObjects.push(decorativePot);

}


/* =========================================================
   3D OBJECT HELPERS
========================================================= */

function createBuilding(
    width,
    height,
    depth,
    color
) {

    const geometry =
        new THREE.BoxGeometry(
            width,
            height,
            depth
        );


    const material =
        new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.8
        });


    return new THREE.Mesh(
        geometry,
        material
    );

}


function createBathObject() {

    const group =
        new THREE.Group();


    const outer =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                4,
                0.5,
                3
            ),
            new THREE.MeshStandardMaterial({
                color: 0xb48755
            })
        );


    outer.position.y = 0.25;

    group.add(outer);


    const water =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                2.6,
                0.12,
                1.7
            ),
            new THREE.MeshStandardMaterial({
                color: 0x317c8e,
                roughness: 0.3
            })
        );


    water.position.y = 0.55;

    group.add(water);


    return group;

}


function createWell() {

    const group =
        new THREE.Group();


    const geometry =
        new THREE.CylinderGeometry(
            0.7,
            0.7,
            0.7,
            16
        );


    const material =
        new THREE.MeshStandardMaterial({
            color: 0xb47d4b
        });


    const well =
        new THREE.Mesh(
            geometry,
            material
        );


    well.position.y = 0.35;

    group.add(well);


    const water =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.45,
                0.45,
                0.04,
                16
            ),
            new THREE.MeshStandardMaterial({
                color: 0x347f8f
            })
        );


    water.position.y = 0.72;

    group.add(water);


    return group;

}


function createTempleTower() {

    const geometry =
        new THREE.ConeGeometry(
            1.2,
            2.5,
            4
        );


    const material =
        new THREE.MeshStandardMaterial({
            color: 0xb77a40
        });


    return new THREE.Mesh(
        geometry,
        material
    );

}


function createGate() {

    const group =
        new THREE.Group();


    const left =
        createBuilding(
            0.7,
            2.5,
            1,
            0x6d4b2d
        );


    left.position.x = -1;

    group.add(left);


    const right =
        createBuilding(
            0.7,
            2.5,
            1,
            0x6d4b2d
        );


    right.position.x = 1;

    group.add(right);


    const top =
        createBuilding(
            2.7,
            0.6,
            1,
            0x6d4b2d
        );


    top.position.y = 1.3;

    group.add(top);


    return group;

}


function createArtifact(type) {

    if (type === "seal") {

        return new THREE.Mesh(

            new THREE.BoxGeometry(
                0.7,
                0.15,
                0.7
            ),

            new THREE.MeshStandardMaterial({
                color: 0xc2b28c
            })

        );

    }


    if (type === "figurine") {

        return new THREE.Mesh(

            new THREE.SphereGeometry(
                0.45,
                12,
                12
            ),

            new THREE.MeshStandardMaterial({
                color: 0x9d6035
            })

        );

    }


    if (type === "lamp") {

        return new THREE.Mesh(

            new THREE.ConeGeometry(
                0.4,
                0.7,
                12
            ),

            new THREE.MeshStandardMaterial({
                color: 0xc37b3e
            })

        );

    }


    return new THREE.Mesh(

        new THREE.CylinderGeometry(
            0.45,
            0.55,
            0.8,
            16
        ),

        new THREE.MeshStandardMaterial({
            color: 0xb86d38
        })

    );

}


/* =========================================================
   3D TASK
========================================================= */

function show3DTask() {

    const game =
        threeDGameData[threeDMode];

    const task =
        game.tasks[threeDTask];


    $("#threeDTaskLabel").textContent =
        `Task ${threeDTask + 1} of ${game.tasks.length}`;


    $("#threeDQuestion").textContent =
        task.question;


    $("#threeDOptions").innerHTML =
        task.options
            .map(
                (option, index) =>
                    `<button
                        class="three-d-option"
                        data-answer="${index}">
                        ${option}
                    </button>`
            )
            .join("");


    $$("#threeDOptions .three-d-option")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    check3DAnswer(
                        Number(
                            button.dataset.answer
                        ),
                        button
                    );

                }
            );

        });


    $("#threeDProgressBar").style.width =
        `${(
            threeDTask /
            game.tasks.length
        ) * 100}%`;

}


/* =========================================================
   CHECK 3D ANSWER
========================================================= */

function check3DAnswer(
    answer,
    button
) {

    const game =
        threeDGameData[threeDMode];

    const task =
        game.tasks[threeDTask];


    const buttons =
        $$("#threeDOptions .three-d-option");


    buttons.forEach(
        btn => btn.disabled = true
    );


    if (
        answer === task.answer
    ) {

        button.style.background =
            "#4f7d45";

        threeDScore += 20;

        $("#threeDScore").textContent =
            threeDScore;

        $("#threeDHierarchy").textContent =
            "Correct! You understood this historical concept.";

        showToast(
            "Correct! +20 points"
        );

    } else {

        button.style.background =
            "#7b3e32";

        buttons[
            task.answer
        ].style.background =
            "#4f7d45";

        $("#threeDHierarchy").textContent =
            "Good try. The highlighted answer is correct.";

        showToast(
            "Try to remember this fact."
        );

    }

}


/* =========================================================
   NEXT 3D TASK
========================================================= */

$("#threeDNext").addEventListener(
    "click",
    () => {

        const game =
            threeDGameData[threeDMode];


        if (
            threeDTask <
            game.tasks.length - 1
        ) {

            threeDTask++;

            show3DTask();

        } else {

            $("#threeDQuestion").textContent =
                `Game complete! Final score: ${threeDScore}`;

            $("#threeDOptions").innerHTML = "";

            $("#threeDProgressBar").style.width =
                "100%";

            showToast(
                "3D game completed!"
            );

        }

    }
);


/*3D HINT*/
$("#threeDHint").addEventListener(
    "click",
    () => {
        const game =
            threeDGameData[threeDMode];
        const task =
            game.tasks[threeDTask];
        const answer =
            task.options[task.answer];
        if (threeDScore >= 5) {
            threeDScore -= 5;
            $("#threeDScore").textContent =
                threeDScore;
        }
        $("#threeDHierarchy").textContent =
            `Hint: Think about "${answer}".`;
    }
);
/*  3D RESTART*/
$("#threeDRestart").addEventListener(
    "click",
    () => {
        init3DGame();
        showToast(
            "3D game restarted"
        );

    }
);

/*  3D MOUSE INTERACTION*/
function updateMouse(event) {
    const rect =
        renderer3D.domElement
            .getBoundingClientRect();
    mouse3D.x =
        ((event.clientX - rect.left) /
            rect.width) *
            2 - 1;
    mouse3D.y =
        -(
            (event.clientY - rect.top) /
            rect.height
        ) *
            2 + 1;
}
function handle3DPointerDown(event) {

    dragState.active = true;

    dragState.lastX =
        event.clientX;

    dragState.lastY =
        event.clientY;

}


function handle3DPointerUp() {

    dragState.active = false;

}


function handle3DPointerMove(event) {

    updateMouse(event);


    if (
        !dragState.active ||
        !scene3D
    ) {
        return;
    }


    const dx =
        event.clientX -
        dragState.lastX;


    scene3D.rotation.y +=
        dx * 0.005;


    dragState.lastX =
        event.clientX;


    dragState.lastY =
        event.clientY;

}


function handle3DClick(event) {

    updateMouse(event);


    if (
        !raycaster3D ||
        !camera3D
    ) {
        return;
    }


    raycaster3D.setFromCamera(
        mouse3D,
        camera3D
    );


    const intersects =
        raycaster3D.intersectObjects(
            threeDObjects,
            true
        );
    if (!intersects.length) {
        return;
    }
    const object =
        intersects[0].object;
    let target =
        object;
    while (
        target.parent &&
        target.parent !== scene3D &&
        !target.userData.type
    ) {
        target =
            target.parent;
    }
    selected3DObject =
        target;
    const type =
        target.userData.type ||
        "historical structure";
    const messages = {
        house:
            "House: Harappan settlements contained organized residential areas.",
        road:
            "Road: Planned streets were an important part of Harappan urban organization.",
        bath:
            "Great Bath: A major brick-lined water structure at Mohenjo-daro.",
        well:
            "Well: Wells could provide water for settlements.",
        foundation:
            "Foundation: A strong base supports the temple structure.",
        pillar:
            "Pillar: Pillars are important structural and decorative elements.",
        tower:
            "Temple tower: The upper structure forms an important visual element.",
        wall:
            "Fort wall: Strong walls helped protect settlements and important spaces.",
        gate:
            "Fort gate: Gates controlled movement into and out of the fort.",
        watchtower:
            "Watchtower: Elevated positions could help defenders observe the surrounding area.",
        pot:
            "Pottery: Ceramic objects can provide archaeologists with clues about daily life.",
        seal:
            "Seal: Seals are important archaeological objects associated with the Indus tradition.",
        figurine:
            "Figurine: Small figures can provide clues about artistic traditions.",
        lamp:
            "Lamp: Objects associated with daily life help archaeologists understand ancient activities.",
        throne:
         "Throne: A royal seat can represent authority and courtly life."
    };
    $("#threeDHierarchy").textContent =
        messages[type] ||
        "This historical object is part of the interactive environment.";
}
/* 3D TIMER */
function start3DTimer() {
    clearInterval(threeDTimer);
    threeDTimer =
        setInterval(() => {

            threeDTime--;

            $("#threeDTime").textContent =
                threeDTime;


            if (threeDTime <= 0) {

                clearInterval(
                    threeDTimer
                );

                $("#threeDQuestion").textContent =
                    `Time's up! Your score is ${threeDScore}.`;

                $("#threeDOptions").innerHTML = "";

                showToast(
                    "Time is over!"
                );
            }

        }, 1000);

}
/*3D ANIMATION ONLY SUBTLE ROTATION*/
function animate3D() {
    if (!renderer3D || !scene3D) {
        return;
    }
    animation3D =
        requestAnimationFrame(
            animate3D
        );
    /* very subtle movement */
    threeDObjects.forEach(
        (object, index) => {

            if (
                object.userData &&
                object.userData.type
            ) {

                object.rotation.y +=
                    0.0008 *
                    (index % 2 === 0 ? 1 : -1);
            }

        }
    );


    renderer3D.render(
        scene3D,
        camera3D
    );

}
/*RESIZE */
function resize3D() {

    if (
        !renderer3D ||
        !camera3D
    ) {
        return;
    }
    const container =
        $("#threeDCanvasWrap");
    const width =
        container.clientWidth;
    const height =
        container.clientHeight;
    camera3D.aspect =
        width / height;
    camera3D.updateProjectionMatrix();
    renderer3D.setSize(
        width,
        height
    );
}
window.addEventListener(
    "resize",
    resize3D
);
/*CLEANUP*/
function cleanup3D() {
    clearInterval(
        threeDTimer
    );
    if (animation3D) {
        cancelAnimationFrame(
            animation3D
        );
        animation3D = null;
    }
    threeDObjects = [];
    if (renderer3D) {
        renderer3D.dispose();
        renderer3D = null;
    }
    scene3D = null;
}
/*CLOSE 3D */
$("#close3DGame").addEventListener(
    "click",
    () => {
        $("#civilization3DModal")
            .classList.remove("active");
        cleanup3D();
    }
);
/* 
   ESC KEy */
document.addEventListener(
    "keydown",
    (event) => {
        if (event.key !== "Escape") {
            return;
        }
        $$(".modal").forEach(
            modal => modal.classList.remove(
                "active"
            )
        );
        chatbot.classList.remove(
            "active"
        );
        cleanup3D();
    }
);
/*YEAR*/
$("#year").textContent =
    new Date().getFullYear();
/* INITIAL FACT*/
fetchDynamicFact();
/*INITIALIZE */
filterGames();
console.log(
    "HeritageQuest loaded successfully."
);