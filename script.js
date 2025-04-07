// variable global
let newDo = document.querySelector(".form-control");
let form = document.getElementById("todolist");
let listGroup = document.querySelector(".list-group");
// au submit, on évite le comportement par défaut
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   on récupère la valeur entrée et on evite l'ajout d'un champ vide
  const itemText = newDo.value.trim();
  if (itemText === "") return;
  //   on crée un id pour le nouvel item
  const itemId = "todo-" + (listGroup.children.length + 1);
  //   on crée un balise li et on lui ajoute des classes
  const li = document.createElement("li");
  li.className = "todo list-group-item d-flex align-items-center";
  //   on crée le contenu de la balise li
  li.innerHTML = `<input class="form-check-input" type="checkbox" id=${itemId} />
            <label class="ms-2 form-check-label" for=${itemId}>
            ${itemText}
            </label>
            <label class="ms-auto btn btn-danger btn-sm">
              <i class="bi-trash"> </i>
            </label>`;
  // on attache la balise li à la todolist
  listGroup.appendChild(li);
  //   reset l'input
  newDo.value = "";
});
// Mettre un listener sur le parent qui contient les items
listGroup.addEventListener("click", (e) => {
  // si le target a une class bi-trash, la balise li qui le contient est supprimée
  if (e.target.classList.contains("bi-trash")) {
    const item = e.target.closest("li");
    item.remove();
    console.log("suprimer l'item");
  }
});
