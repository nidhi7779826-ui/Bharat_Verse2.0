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
   HISTORY DATA
========================================================= */

const historyData = {

    indus: {

        icon: "🏺",

        title: "Indus Valley Civilization",

        description:
            "The Indus Valley Civilization developed one of the earliest urban cultures of South Asia. Cities such as Mohenjo-daro and Harappa are known for organized streets, brick construction and sophisticated drainage.",

        facts: [
            "Major sites include Harappa and Mohenjo-daro.",
            "The civilization used standardized brick sizes.",
            "The Great Bath is one of Mohenjo-daro's best-known structures.",
            "Urban planning and drainage were important features."
        ]

    },


    maurya: {

        icon: "🦁",

        title: "Maurya Empire",

        description:
            "The Maurya Empire was one of the major empires of ancient India. Chandragupta Maurya established the empire, while Ashoka became especially known for his inscriptions and support for Buddhism.",

        facts: [
            "Chandragupta Maurya founded the empire.",
            "Ashoka ruled a large part of the Indian subcontinent.",
            "Ashokan inscriptions provide valuable historical evidence.",
            "The Lion Capital of Ashoka is an important national symbol."
        ]

    },


    gupta: {

        icon: "📜",

        title: "Gupta Period",

        description:
            "The Gupta period is associated with important developments in mathematics, astronomy, literature, sculpture and architecture.",

        facts: [
            "Sanskrit literature flourished.",
            "Mathematical and astronomical ideas developed.",
            "Sculptural traditions became highly refined.",
            "Udayagiri is an important archaeological site."
        ]

    },


    chola: {

        icon: "🛕",

        title: "Chola Power",

        description:
            "The Cholas became a major power in South India. They are particularly famous for monumental temples, bronze sculptures, administration and maritime activity.",

        facts: [
            "Brihadisvara Temple is a major Chola monument.",
            "Chola bronze sculptures are highly celebrated.",
            "The Cholas developed strong maritime connections.",
            "Temple institutions played important social roles."
        ]

    },


    sultanate: {

        icon: "🏰",

        title: "Delhi Sultanate",

        description:
            "The Delhi Sultanate refers to a series of dynasties that ruled large areas of northern India between the 13th and early 16th centuries.",

        facts: [
            "Several dynasties ruled during the Sultanate period.",
            "Delhi became an important political centre.",
            "Indo-Islamic architectural traditions developed.",
            "Qutb Minar is an important monument from this period."
        ]

    },


    vijayanagara: {

        icon: "🛕",

        title: "Vijayanagara Empire",

        description:
            "The Vijayanagara Empire became a major political and cultural power in South India. Its capital at Hampi contains extensive temples, markets and public structures.",

        facts: [
            "Hampi was the capital.",
            "Krishnadevaraya was one of its prominent rulers.",
            "Temple architecture flourished.",
            "Hampi contains extensive archaeological remains."
        ]

    },


    mughal: {

        icon: "🏛️",

        title: "Mughal Empire",

        description:
            "The Mughal Empire had a major influence on architecture, gardens, painting, administration and culture in the Indian subcontinent.",

        facts: [
            "Babur established Mughal rule in India.",
            "Mughal architecture combined several artistic traditions.",
            "Miniature painting developed strongly.",
            "Agra and Delhi became important imperial centres."
        ]

    },


    maratha: {

        icon: "⚔️",

        title: "Maratha Power",

        description:
            "The Maratha movement became a major political force in western India. Shivaji Maharaj is particularly remembered for administration, forts and military organization.",

        facts: [
            "Shivaji Maharaj established an important Maratha state.",
            "Forts played an important strategic role.",
            "Raigad became an important capital.",
            "The Maratha Confederacy later became a major power."
        ]

    },


    modern: {

        icon: "🇮🇳",

        title: "Modern India",

        description:
            "Modern Indian history includes colonial rule, the freedom movement, independence in 1947 and the development of India as a democratic republic.",

        facts: [
            "The Revolt of 1857 was an important event.",
            "The freedom movement involved many leaders and organizations.",
            "India became independent in 1947.",
            "The Constitution came into effect in 1950."
        ]

    },


    /* CULTURE */

    madhubani: {

        icon: "🎨",

        title: "Madhubani Painting",

        description:
            "Madhubani painting is a traditional art form associated especially with the Mithila region of Bihar.",

        facts: [
            "It is also called Mithila painting.",
            "Artists use strong lines and detailed patterns.",
            "Nature, mythology and everyday life are common themes.",
            "Different traditional styles exist within Madhubani art."
        ]

    },


    temple: {

        icon: "🛕",

        title: "South Indian Temple Art",

        description:
            "South Indian temples are known for elaborate stone sculpture, monumental gateways, pillars and detailed architectural planning.",

        facts: [
            "Gopurams are prominent gateway structures.",
            "Stone sculpture is an important artistic tradition.",
            "Temple complexes often contain multiple functional spaces.",
            "Chola temples are important examples."
        ]

    },


    warli: {

        icon: "🎨",

        title: "Warli Art",

        description:
            "Warli painting is associated with communities of Maharashtra and uses simple geometric forms to depict people, animals and daily life.",

        facts: [
            "Circles, triangles and lines are commonly used.",
            "Nature and community life are frequent subjects.",
            "Traditional Warli art has a distinctive visual language.",
            "The art has gained recognition beyond its original communities."
        ]

    },


    kashmir: {

        icon: "🧵",

        title: "Kashmiri Crafts",

        description:
            "Kashmir has a long tradition of textile, carpet, embroidery and papier-mâché craftsmanship.",

        facts: [
            "Carpet weaving is an important craft tradition.",
            "Embroidery includes detailed decorative patterns.",
            "Papier-mâché is a well-known craft.",
            "Traditional craftsmanship is passed between generations."
        ]

    },


    gond: {

        icon: "🖌️",

        title: "Gond Art",

        description:
            "Gond art is associated with tribal communities of central India and frequently depicts animals, plants, nature and stories.",

        facts: [
            "Nature is an important source of inspiration.",
            "Artists often use patterns and dots.",
            "Animals may be decorated with intricate designs.",
            "The tradition has evolved into contemporary forms."
        ]

    },


    northeast: {

        icon: "🌿",

        title: "Northeastern Traditions",

        description:
            "Northeast India contains diverse indigenous communities with rich traditions in textiles, crafts, music, festivals and architecture.",

        facts: [
            "The region has many distinct communities.",
            "Traditional weaving is important.",
            "Natural materials are frequently used in crafts.",
            "Festivals express community identity and heritage."
        ]

    },


    /* KNOWLEDGE */

    bath: {

        icon: "💧",

        title: "The Great Bath",

        description:
            "The Great Bath is one of the most famous structures at Mohenjo-daro. It consists of a large brick-lined tank and surrounding architectural features.",

        facts: [
            "It was built with carefully arranged bricks.",
            "The structure was designed to hold water.",
            "Its exact purpose is still interpreted by historians.",
            "It demonstrates sophisticated construction."
        ]

    },


    lion: {

        icon: "🦁",

        title: "Lion Capital of Ashoka",

        description:
            "The Lion Capital from Sarnath is an important Mauryan-period sculpture and forms the basis of India's State Emblem.",

        facts: [
            "It dates to the Mauryan period.",
            "It is associated with Emperor Ashoka.",
            "The sculpture depicts four lions.",
            "The Dharma Chakra appears in the emblem derived from it."
        ]

    },


    science: {

        icon: "🔬",

        title: "Ancient Indian Science",

        description:
            "Indian scholars contributed to mathematics, astronomy, medicine, metallurgy and other fields over many centuries.",

        facts: [
            "Indian mathematical traditions included sophisticated numerical ideas.",
            "Astronomical observations were systematically recorded.",
            "Ayurvedic traditions developed over long periods.",
            "Metallurgical skills are visible in historical objects."
        ]

    },


    forts: {

        icon: "🏰",

        title: "Indian Forts",

        description:
            "Forts were important defensive and administrative structures. Different regions developed different fort-building traditions based on geography.",

        facts: [
            "Hill forts used natural elevation for defence.",
            "Sea forts used coastal geography.",
            "Fort gates were often heavily protected.",
            "Many forts also contained palaces and administrative buildings."
        ]

    }

};


/* =========================================================
   INFORMATION MODAL
========================================================= */

function openInfo(key) {

    const data = historyData[key];

    if (!data) return;

    $("#infoIcon").textContent = data.icon;

    $("#infoTitle").textContent = data.title;

    $("#infoDescription").textContent = data.description;

    $("#infoFacts").innerHTML =
        data.facts
            .map(
                fact =>
                    `<div class="fact-item">
                        <i class="fa-solid fa-check"></i>
                        ${fact}
                    </div>`
            )
            .join("");

    $("#infoModal").classList.add("active");

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
   QUIZ DATA
========================================================= */

const quizData = {

    civilization: {

        title: "Ancient India Challenge",

        intro:
            "Answer questions about India's ancient civilizations.",

        questions: [

            {
                question:
                    "Which civilization is famous for the Great Bath?",

                options: [
                    "Indus Valley Civilization",
                    "Gupta Empire",
                    "Maratha Empire",
                    "Mughal Empire"
                ],

                answer: 0
            },

            {
                question:
                    "Which site is associated with the Indus Valley Civilization?",

                options: [
                    "Mohenjo-daro",
                    "Red Fort",
                    "Raigad",
                    "Hampi"
                ],

                answer: 0
            },

            {
                question:
                    "What was a major feature of Harappan cities?",

                options: [
                    "Planned drainage",
                    "Modern airports",
                    "Iron railways",
                    "Skyscrapers"
                ],

                answer: 0
            }

        ]

    },


    puzzle: {

        title: "Ancient Puzzle",

        intro:
            "Solve the historical puzzle.",

        questions: [

            {
                question:
                    "Harappan cities were mainly built using what material?",

                options: [
                    "Standardized bricks",
                    "Steel",
                    "Concrete skyscrapers",
                    "Glass"
                ],

                answer: 0
            },

            {
                question:
                    "Which structure is found at Mohenjo-daro?",

                options: [
                    "Great Bath",
                    "India Gate",
                    "Gateway of India",
                    "Red Fort"
                ],

                answer: 0
            }

        ]

    },


    artifact: {

        title: "Artifact Detective",

        intro:
            "Identify objects and archaeological clues.",

        questions: [

            {
                question:
                    "Archaeologists can learn about ancient societies by studying?",

                options: [
                    "Artifacts",
                    "Only modern books",
                    "Modern advertisements",
                    "Computer games"
                ],

                answer: 0
            },

            {
                question:
                    "Seals are associated strongly with which civilization?",

                options: [
                    "Indus Valley Civilization",
                    "Modern India",
                    "Maratha Empire",
                    "Gupta Empire only"
                ],

                answer: 0
            }

        ]

    },


    monument: {

        title: "Monument Explorer",

        intro:
            "Match monuments with their historical context.",

        questions: [

            {
                question:
                    "Hampi is associated with which empire?",

                options: [
                    "Vijayanagara",
                    "Maurya",
                    "Mughal",
                    "Indus Valley"
                ],

                answer: 0
            },

            {
                question:
                    "Brihadisvara Temple is associated with?",

                options: [
                    "Cholas",
                    "Mughals",
                    "Mauryas",
                    "Marathas"
                ],

                answer: 0
            },

            {
                question:
                    "Qutb Minar is located in?",

                options: [
                    "Delhi",
                    "Patna",
                    "Pune",
                    "Chennai"
                ],

                answer: 0
            }

        ]

    },


    symbols: {

        title: "Symbols of India",

        intro:
            "Discover important Indian historical symbols.",

        questions: [

            {
                question:
                    "The Lion Capital is associated with which ruler?",

                options: [
                    "Ashoka",
                    "Shivaji Maharaj",
                    "Babur",
                    "Krishnadevaraya"
                ],

                answer: 0
            },

            {
                question:
                    "The Lion Capital is associated with?",

                options: [
                    "Sarnath",
                    "Hampi",
                    "Raigad",
                    "Mohenjo-daro"
                ],

                answer: 0
            }

        ]

    },


    painting: {

        title: "Traditional Art Challenge",

        intro:
            "Test your knowledge of Indian traditional art.",

        questions: [

            {
                question:
                    "Madhubani painting is strongly associated with which region?",

                options: [
                    "Mithila",
                    "Kashmir",
                    "Rajasthan only",
                    "Kerala only"
                ],

                answer: 0
            },

            {
                question:
                    "Warli art is associated especially with?",

                options: [
                    "Maharashtra",
                    "Punjab",
                    "Assam",
                    "Bihar"
                ],

                answer: 0
            }

        ]

    },


    freedom: {

        title: "Freedom Journey",

        intro:
            "Explore India's journey toward independence.",

        questions: [

            {
                question:
                    "India became independent in?",

                options: [
                    "1947",
                    "1950",
                    "1942",
                    "1935"
                ],

                answer: 0
            },

            {
                question:
                    "The Constitution of India came into effect in?",

                options: [
                    "1950",
                    "1947",
                    "1942",
                    "1960"
                ],

                answer: 0
            }

        ]

    }

};


/* =========================================================
   QUIZ ENGINE
========================================================= */

let currentGameKey = null;
let currentQuestion = 0;
let currentScore = 0;


function startQuiz(key) {

    const game = quizData[key];

    if (!game) return;

    currentGameKey = key;

    currentQuestion = 0;

    currentScore = 0;

    $("#gameModal").classList.add("active");

    $("#gameTitle").textContent = game.title;

    $("#gameIntro").textContent = game.intro;

    $("#gameScore").textContent = "0";

    showQuestion();

}


function showQuestion() {

    const game = quizData[currentGameKey];

    const question =
        game.questions[currentQuestion];

    $("#gameQuestion").textContent =
        question.question;

    $("#gameOptions").innerHTML = "";

    $("#nextGameBtn").disabled = true;

    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className = "quiz-option";

        button.textContent = option;

        button.addEventListener("click", () => {

            checkAnswer(index, button);

        });

        $("#gameOptions").appendChild(button);

    });

}


function checkAnswer(index, clickedButton) {

    const game = quizData[currentGameKey];

    const question =
        game.questions[currentQuestion];

    const buttons =
        $$("#gameOptions .quiz-option");

    buttons.forEach((button) => {
        button.disabled = true;
    });


    if (index === question.answer) {

        clickedButton.classList.add("correct");

        currentScore += 10;

        $("#gameScore").textContent =
            currentScore;

        showToast("Correct! +10 points");

    } else {

        clickedButton.classList.add("wrong");

        buttons[question.answer]
            .classList.add("correct");

        showToast("Not quite. Try the next one!");

    }


    $("#nextGameBtn").disabled = false;

}


$("#nextGameBtn").addEventListener("click", () => {

    const game = quizData[currentGameKey];

    currentQuestion++;

    if (
        currentQuestion >=
        game.questions.length
    ) {

        finishQuiz();

    } else {

        showQuestion();

    }

});


function finishQuiz() {

    $("#gameQuestion").textContent =
        `Great job! You completed the game with ${currentScore} points.`;

    $("#gameOptions").innerHTML = "";

    $("#nextGameBtn").textContent =
        "Play Again";

    $("#nextGameBtn").disabled = false;

    $("#nextGameBtn").onclick = () => {

        $("#nextGameBtn").textContent =
            "Next";

        $("#nextGameBtn").onclick = null;

        currentQuestion = 0;

        currentScore = 0;

        $("#gameScore").textContent = "0";

        showQuestion();

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
   RANDOM FACTS
========================================================= */

const facts = [

    "Mohenjo-daro is known for its carefully planned streets and drainage system.",

    "The Great Bath is one of the most famous structures at Mohenjo-daro.",

    "Ashoka's inscriptions provide important evidence about Mauryan history.",

    "Hampi contains extensive archaeological remains of the Vijayanagara period.",

    "Chola temples demonstrate remarkable achievements in South Indian architecture.",

    "Indian traditional arts often preserve stories, beliefs and community traditions.",

    "Forts were adapted to different geographical environments such as hills and coastlines.",

    "India became independent on 15 August 1947.",

    "The Constitution of India came into effect on 26 January 1950."

];


let factIndex = 0;


$("#newFact").addEventListener(
    "click",
    () => {

        factIndex++;

        if (factIndex >= facts.length) {
            factIndex = 0;
        }

        $("#factText").textContent =
            facts[factIndex];

    }
);


/* =========================================================
   CHATBOT
========================================================= */

const chatbot = $("#chatbot");

$("#chatOpenNav").addEventListener(
    "click",
    () => {

        chatbot.classList.add("active");

    }
);


$("#floatingChat").addEventListener(
    "click",
    () => {

        chatbot.classList.toggle("active");

    }
);


$("#closeChat").addEventListener(
    "click",
    () => {

        chatbot.classList.remove("active");

    }
);


const botResponses = [

    {
        keywords: ["indus", "harappa", "mohenjo"],

        response:
            "The Indus Valley Civilization was an ancient urban civilization known for planned cities, standardized bricks, drainage systems and structures such as the Great Bath."
    },

    {
        keywords: ["ashoka", "maurya"],

        response:
            "Ashoka was a major Mauryan ruler. His inscriptions across the subcontinent provide valuable evidence about his policies and ideas."
    },

    {
        keywords: ["gupta"],

        response:
            "The Gupta period is associated with important achievements in mathematics, astronomy, Sanskrit literature, art and architecture."
    },

    {
        keywords: ["chola"],

        response:
            "The Cholas were a major South Indian power known especially for monumental temples, bronze sculpture, administration and maritime activity."
    },

    {
        keywords: ["mughal"],

        response:
            "The Mughal Empire influenced architecture, gardens, painting, administration and cultural traditions across large parts of India."
    },

    {
        keywords: ["maratha", "shivaji"],

        response:
            "Shivaji Maharaj is remembered for establishing an important Maratha state and for his administration and strategic use of forts."
    },

    {
        keywords: ["culture", "art"],

        response:
            "India has diverse artistic traditions including Madhubani, Warli, Gond, textile crafts, sculpture and temple art."
    }

];


function getBotResponse(message) {

    const text =
        message.toLowerCase();


    for (const item of botResponses) {

        if (
            item.keywords.some(
                keyword =>
                    text.includes(keyword)
            )
        ) {

            return item.response;

        }

    }


    return "I can help you learn about the Indus Valley Civilization, Ashoka, Gupta period, Cholas, Mughals, Marathas, Indian art and culture. Try asking me about one of these topics.";

}


function addChatMessage(text, type) {

    const message =
        document.createElement("div");

    message.className =
        type === "user"
            ? "user-message"
            : "bot-message";

    message.textContent = text;

    $("#chatMessages")
        .appendChild(message);

    $("#chatMessages").scrollTop =
        $("#chatMessages").scrollHeight;

}


function sendMessage() {

    const input = $("#chatInput");

    const text =
        input.value.trim();


    if (!text) return;


    addChatMessage(
        text,
        "user"
    );

    input.value = "";


    setTimeout(() => {

        addChatMessage(
            getBotResponse(text),
            "bot"
        );

    }, 400);

}


$("#sendChat").addEventListener(
    "click",
    sendMessage
);


$("#chatInput").addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);


$$(".quick-questions button")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                $("#chatInput").value =
                    button.dataset.question;

                sendMessage();

            }
        );

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


/* =========================================================
   3D HINT
========================================================= */

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


/* =========================================================
   3D RESTART
========================================================= */

$("#threeDRestart").addEventListener(
    "click",
    () => {

        init3DGame();

        showToast(
            "3D game restarted"
        );

    }
);


/* =========================================================
   3D MOUSE INTERACTION
========================================================= */

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


/* =========================================================
   3D TIMER
========================================================= */

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


/* =========================================================
   3D ANIMATION
   ONLY SUBTLE ROTATION
========================================================= */

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


/* =========================================================
   RESIZE
========================================================= */

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


/* =========================================================
   CLEANUP
========================================================= */

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


/* =========================================================
   CLOSE 3D
========================================================= */

$("#close3DGame").addEventListener(
    "click",
    () => {

        $("#civilization3DModal")
            .classList.remove("active");

        cleanup3D();

    }
);


/* =========================================================
   ESC KEY
========================================================= */

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


/* =========================================================
   YEAR
========================================================= */

$("#year").textContent =
    new Date().getFullYear();


/* =========================================================
   INITIAL FACT
========================================================= */

$("#factText").textContent =
    facts[0];


/* =========================================================
   INITIALIZE
========================================================= */

filterGames();

console.log(
    "HeritageQuest loaded successfully."
);