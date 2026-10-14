/* ============================================================
   SKILLS DATA — данные страниц навыков.
   Ключ — id из URL (skill.html?id=html), значение — объект:
   title, description, details (массив строк), examples (массив строк).
   ============================================================ */

const skillsData = {
    html: {
        title: 'HTML',
        description: 'HTML (HyperText Markup Language) — язык разметки, на котором построен весь веб. Он задаёт структуру страницы: заголовки, абзацы, списки, ссылки, изображения и формы. Без HTML не существует ни одного сайта — это фундамент, на который ложатся CSS и JavaScript.',
        details: [
            'Зачем нужен: HTML описывает, из каких блоков состоит страница и что означает каждый блок. Браузер читает разметку и строит по ней DOM-дерево, с которым затем работают CSS и JavaScript.',
            'Семантика: современные теги (<header>, <nav>, <main>, <section>, <article>, <footer>) рассказывают браузеру и поисковым системам о роли каждого блока. Семантичная разметка улучшает SEO и доступность.',
            'Основные теги: <h1>–<h6> — заголовки, <p> — абзац, <a> — ссылка, <img> — изображение, <ul>/<ol>/<li> — списки, <div> и <span> — универсальные контейнеры, <form>, <input>, <button> — формы.',
            'Атрибуты: теги настраиваются атрибутами — href у ссылок, src и alt у картинок, class и id для стилизации. Атрибут alt обязателен: он описывает изображение для скринридеров и на случай, если файл не загрузился.',
            'Хорошая практика: один <h1> на страницу, логичная вложенность, валидная разметка и проверка страницы валидатором W3C.'
        ],
        examples: [
            '<!-- Базовая структура страницы -->\n<!DOCTYPE html>\n<html lang="ru">\n<head>\n    <meta charset="UTF-8">\n    <title>Моя страница</title>\n</head>\n<body>\n    <h1>Привет, мир!</h1>\n    <p>Мой первый абзац.</p>\n</body>\n</html>',
            '<!-- Семантичная секция со списком -->\n<section>\n    <h2>Мои навыки</h2>\n    <ul>\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>JavaScript</li>\n    </ul>\n    <a href="skill.html?id=html">Подробнее</a>\n</section>'
        ]
    },

    css: {
        title: 'CSS',
        description: 'CSS (Cascading Style Sheets) — язык стилей, отвечающий за внешний вид страницы: цвета, шрифты, отступы, расположение элементов и анимации. Именно CSS превращает голую разметку в дизайн — в случае этого сайта в стиль Maybach: чёрный фон и золотые акценты.',
        details: [
            'Селекторы: по тегу (p), классу (.card), id (#header), атрибуту ([type="text"]) и вложенности (nav a). Каскад и специфичность решают, какое правило победит при конфликте.',
            'Flexbox: одномерное расположение — строка или столбец. display: flex плюс justify-content и align-items центрируют элементы и распределяют пространство между ними.',
            'Grid: двумерная сетка. display: grid с grid-template-columns задаёт колонки — например, repeat(auto-fit, minmax(250px, 1fr)) строит адаптивную сетку карточек без единого медиазапроса.',
            'Переменные: :root { --gold: #D4AF37; } — одно место для хранения палитры; смена значения переменной перекрашивает весь сайт (так здесь работает светлая тема).',
            'Анимации: transition для плавных изменений состояния, @keyframes для сложных сценариев, transform и box-shadow для ховер-эффектов.'
        ],
        examples: [
            '/* Золотая кнопка в стиле Maybach */\n.button {\n    padding: 0.6rem 1.5rem;\n    border: 1px solid #D4AF37;\n    color: #D4AF37;\n    background: transparent;\n    transition: all 0.4s ease;\n}\n.button:hover {\n    background: #D4AF37;\n    color: #050505;\n}',
            '/* Адаптивная сетка карточек на Grid */\n.cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 2rem;\n}'
        ]
    },

    javascript: {
        title: 'JavaScript',
        description: 'JavaScript — язык программирования, который делает страницу живой: реагирует на клики, меняет содержимое без перезагрузки, отправляет запросы на сервер и хранит данные в браузере. Переключатель темы на этом сайте — тоже JavaScript.',
        details: [
            'Основы: переменные (const, let), функции, условия, циклы, массивы и объекты. Современный стандарт ES6+ добавил стрелочные функции, деструктуризацию и шаблонные строки.',
            'DOM: document.querySelector и document.querySelectorAll находят элементы, а свойства textContent, innerHTML, classList и style меняют их прямо на странице.',
            'События: addEventListener(\'click\', ...) реагирует на действия пользователя — клики, ввод текста, прокрутку, наведение курсора.',
            'Fetch: fetch(url) выполняет HTTP-запросы и работает с промисами — так страница получает данные с сервера и обновляет интерфейс без перезагрузки.',
            'Хранение данных: localStorage сохраняет данные между визитами — на этом сайте в нём лежит выбранная тема оформления.'
        ],
        examples: [
            '// Переключатель темы (упрощённо — как на этом сайте)\nconst toggle = document.getElementById(\'theme-toggle\');\ntoggle.addEventListener(\'click\', () => {\n    const isLight = document.body.classList.toggle(\'light\');\n    localStorage.setItem(\'theme-light\', isLight);\n});',
            '// Запрос данных с сервера через fetch\nasync function loadUser(id) {\n    const response = await fetch(`https://api.example.com/users/${id}`);\n    const user = await response.json();\n    document.querySelector(\'.name\').textContent = user.name;\n}'
        ]
    },

    responsive: {
        title: 'Адаптивные сайты',
        description: 'Адаптивная вёрстка — умение делать сайт, который отлично выглядит на любом экране: от смартфона до широкого монитора. Контент перестраивается под ширину устройства, а не заставляет пользователя увеличивать страницу.',
        details: [
            'Media queries: @media (max-width: 768px) { ... } применяет стили только при заданной ширине экрана — так на телефоне колонки складываются в одну.',
            'Mobile-first: базовые стили пишутся под телефон, а через @media (min-width: ...) сайт наращивает сложность для больших экранов. Это проще и быстрее, чем наоборот.',
            'Гибкие единицы: проценты, rem, vw/vh вместо жёстких пикселей позволяют элементам тянуться вместе с экраном.',
            'Резиновые изображения: max-width: 100% и object-fit: cover не дают картинкам вылезать за границы и обрезают их аккуратно.',
            'Viewport: мета-тег <meta name="viewport" content="width=device-width, initial-scale=1.0"> обязателен — без него мобильный браузер рисует сайт как уменьшенную десктопную версию.'
        ],
        examples: [
            '/* Медиазапрос: стили только для телефонов */\n@media (max-width: 768px) {\n    .bio-content {\n        flex-direction: column;\n    }\n    .profile-photo {\n        width: 200px;\n        height: 200px;\n    }\n}',
            '/* Mobile-first: база под телефон, расширение вверх */\n.skills-list { display: grid; grid-template-columns: 1fr; }\n\n@media (min-width: 768px) {\n    .skills-list {\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    }\n}'
        ]
    },

    git: {
        title: 'Git',
        description: 'Git — система контроля версий: она сохраняет историю каждого изменения и позволяет спокойно экспериментировать через ветки. Именно Git стоит за словами «закоммитить» и «запушить», а GitHub — это место, где живут Git-репозитории.',
        details: [
            'Основы: репозиторий хранит всю историю проекта. Коммит — зафиксированный снимок изменений с обязательным сообщением, объясняющим, что сделано.',
            'Основные команды: git status (что изменилось), git add (подготовить файлы), git commit -m "сообщение" (зафиксировать), git log (история).',
            'Ветки: ветка — параллельная линия разработки. git branch feature создаёт ветку, git checkout (или git switch) переключается на неё. Основная ветка обычно называется main.',
            'Удалённая работа: git remote add origin <url> привязывает GitHub, git push отправляет коммиты, git pull забирает чужие изменения. git clone копирует репозиторий на компьютер.',
            'Хорошая практика: частые небольшие коммиты с понятными сообщениями, новая ветка под каждую задачу.'
        ],
        examples: [
            '# Классический цикл работы\ngit status\ngit add index.html style.css\ngit commit -m "Добавлена секция биографии"\ngit push origin main',
            '# Задача в отдельной ветке\ngit branch feature-skills-pages\ngit checkout feature-skills-pages\n# ...работа над задачей...\ngit add .\ngit commit -m "Страницы навыков готовы"\ngit push origin feature-skills-pages'
        ]
    }
};
