
const commandDetails = {
    "ctrl-l": {
        title: "Ctrl + L",
        description: "Очищает экран терминала."
    },
    "git-init": {
        title: "git init",
        description: "Инициализирует новый Git-репозиторий в текущей директории."
    },
    "git-status": {
        title: "git status",
        description: "Отображает статус рабочей директории и области подготовки."
    },
    "git-add": {
        title: "git add",
        description: "Добавляет изменения из рабочей директории в область подготовки."
    },
    "git-commit": {
        title: "git commit",
        description: "Фиксирует изменения в репозитории с сообщением."
    },
    "git-push": {
        title: "git push",
        description: "Загружает содержимое локального репозитория в удалённый репозиторий."
    },
    "git-add-dot": {
        title: "git add .",
        description: "Добавляет все изменения в текущей директории в область подготовки"
        +" кроме тех, что указаны в .gitignore"
    },
    "git-commit-message": {
        title: "git commit -m \"message\"",
        description: "Фиксирует изменения с сообщением."
    },
    "git-log": {
        title: "git log",
        description: "Показывает полнаю историю коммитов" 
        +"(q - выход из режима просмотра коммитов)."
    },
    "git-log--oneline": {
        title: "git log --oneline",
        description: "Показывает краткую историю коммитов" 
    },
    "git-branch-main": {
        title: "git branch -M main",
        description: "Переименовывает текущую ветку в main."
    },
    "git-remote-add": {
        title: "git remote add origin <URL ссылка на репозиторий> ",
        description: "Добавляет удалённый репозиторий."
    },
    "git-push-origin": {
        title: "git push -u origin main",
        description: "Отправляет изменения в основную ветку удалённого репозитория."
    },
    "git-clone": {
        title: "git clone <SSH ключ репозитория> ",
        description: "Клонирует удалённый репозиторий с использованием SSH."
    },
    "git-pull": {
        title: "git pull",
        description: "Получает изменения из удалённого репозитория и сливает их."
    },
    "git-rm-cached": {
        title: "git rm --cached <имя файла> ",
        description: "Удаляет файл из области подготовки, но оставляет его в рабочей директории."
        +" удобно для файлов, которые нужно добавить в .gitignore, если они уже были проиндексированы."
    },
    "git-branch-name": {
        title: "git branch <имя ветки> ",
        description: "Создаёт новую ветку с копией файлов из текущей."
    },
    "git-checkout": {
        title: "git checkout <имя ветки> или git switch <имя ветки>  ",
        description: "Переключается на другую ветку."
    },
    "git-checkout-commit-ID": {
        title: "git checkout <идентификатор коммита>",
        description: "Переключается на коммит."
    },
    "git-merge": {
        title: "git merge <имя ветки>",
        description: "Добавляет изменения из текущей ветки в ветку main."
    },
    "git-branch-delete": {
        title: "git branch -D <имя ветки>",
        description: "Удаляет ветку."
    },
    "git-checkout-create": {
        title: "git checkout -b <имя ветки>",
        description: "Создаёт новую ветку и переключиться на нее одной командой."
    },
    "git-commit-am": {
        title: "git commit -am \"message\"",
        description: "Добавляет и фиксирует изменения с сообщением."
    },
    "git-remote-v": {
        title: "git remote -v",
        description: "Показывает список удалённых репозиториев."
    },
    "git-switch-c": {
        title: "git switch -c <имя ветки>",
        description: "Копия кода коммита в новую ветку."
    },
    "git-reset--hard-commit-ID": {
        title: "git reset --hard <идентификатор коммита>",
        description: "Откатиться до коммита с изменением файлов в текущем каталоге."
    },
    "git-reset--soft-HEAD^": {
        title: "git reset --soft HEAD^",
        description: "Откатиться на коммит назад без изменения файлов в текущем каталоге"
        +" (изменения останутся для того чтобы можно было сохранить их в новом коммите)."
    },
    "git-reflog": {
        title: "git reflog",
        description: "Посмотреть идентификаторы изменений в текущей активной ветке."
    },
    "git-revert-commit-ID": {
        title: "git revert <идентификатор коммита>",
        description: "отменить изменения указанного коммита"
        +" создав новый коммит и оставив старый в истории."
    },
};
console.log(commandDetails);

function showDetails(command) {
    const modal = document.querySelector("#modal");
    const title = document.querySelector("#command-title");
    const description = document.querySelector("#command-description");

    title.textContent = commandDetails[command].title;
    description.textContent = commandDetails[command].description;

    modal.classList.remove("hidden");
}

function closeModal() {
    const modal = document.querySelector("#modal");
    modal.classList.add("hidden");
}
