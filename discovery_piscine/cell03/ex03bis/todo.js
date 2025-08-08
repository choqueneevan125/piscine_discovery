// --- Sauvegarde des tâches dans un cookie ---
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let c of ca) {
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
    }
    return null;
}

// --- Ajout d'un nouvel élément ---
function addTask(text, save = true) {
    const $ftList = $("#ft_list");
    const $task = $("<div></div>").text(text);

    $task.on("click", function() {
        if (confirm("Voulez-vous supprimer cette tâche ?")) {
            $task.remove();
            saveTasks();
        }
    });

    $ftList.prepend($task);

    if (save) saveTasks();
}

// --- Sauvegarder toutes les tâches actuelles ---
function saveTasks() {
    const tasks = [];
    $("#ft_list div").each(function() {
        tasks.push($(this).text());
    });
    setCookie("tasks", JSON.stringify(tasks), 7); // cookie valable 7 jours
}

// --- Charger les tâches depuis le cookie ---
function loadTasks() {
    const saved = getCookie("tasks");
    if (saved) {
        const tasks = JSON.parse(saved);
        tasks.forEach(task => addTask(task, false));
    }
}

// --- Événement bouton New ---
$(document).ready(function() {
    $("#new_btn").on("click", function() {
        const text = prompt("Nouvelle tâche :");
        if (text && text.trim() !== "") {
            addTask(text.trim());
        }
    });

    // Chargement initial
    loadTasks();
});
