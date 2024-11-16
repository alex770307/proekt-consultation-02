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
        description: "Добавляет все изменения в текущей директории в область подготовки."
    },
    "git-commit-message": {
        title: "git commit -m \"message\"",
        description: "Фиксирует изменения с сообщением."
    },
    "git-log": {
        title: "git log",
        description: "Показывает историю коммитов."
    },
    "git-branch-main": {
        title: "git branch -M main",
        description: "Переименовывает текущую ветку в main."
    },
    "git-remote-add": {
        title: "git remote add origin URL",
        description: "Добавляет удалённый репозиторий."
    },
    "git-push-origin": {
        title: "git push -u origin main",
        description: "Отправляет изменения в основную ветку удалённого репозитория."
    },
    "git-clone": {
        title: "git clone SSH",
        description: "Клонирует удалённый репозиторий с использованием SSH."
    },
    "git-pull": {
        title: "git pull",
        description: "Получает изменения из удалённого репозитория и сливает их."
    },
    "git-rm-cached": {
        title: "git rm --cached filename",
        description: "Удаляет файл из области подготовки, но оставляет его в рабочей директории."
    },
    "git-branch-name": {
        title: "git branch name",
        description: "Создаёт новую ветку."
    },
    "git-checkout": {
        title: "git checkout name",
        description: "Переключается на другую ветку."
    },
    "git-branch-delete": {
        title: "git branch -D name",
        description: "Удаляет ветку."
    },
    "git-checkout-create": {
        title: "git checkout -b name",
        description: "Создаёт и переключается на новую ветку."
    },
    "git-commit-am": {
        title: "git commit -am \"message\"",
        description: "Добавляет и фиксирует изменения с сообщением."
    },
    "git-remote-v": {
        title: "git remote -v",
        description: "Показывает список удалённых репозиториев."
    }
};
//console.log(commandDetails);

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
