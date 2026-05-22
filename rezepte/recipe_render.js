
function getRecipeDetailsById(recipeId) {
  // Wir nutzen eine klassische for...of-Schleife, um beim Fund sofort abbrechen zu können
  for (const countryObj of RECIPES) {
    for (const subcategoryObj of countryObj.subcategories) {
      // Suche in den Rezepten der aktuellen Unterkategorie
      const foundRecipe = subcategoryObj.items.find(recipe => recipe.id === recipeId);
      // Wenn das Rezept existiert, bauen wir das Ergebnis-Objekt zusammen
      if (foundRecipe) {
        return {
          titel: foundRecipe.title,
          name: subcategoryObj.name,     // Name der Unterkategorie (z.B. "Hauptgerichte")
          country: countryObj.country,    // Name des Landes (z.B. "Italien")
          code: countryObj.code,    // Name des Landes (z.B. "Italien")
		  icon: subcategoryObj.icon,
		  difficulty: foundRecipe.difficulty,
		  time: foundRecipe.time,
		  tags: foundRecipe.tags,
        };
      }
    }
  }
  return null; // Falls die ID nirgends existiert
}
document.getElementById('landA').textContent = getRecipeDetailsById(ID).country;
document.getElementById('landB').textContent = getRecipeDetailsById(ID).country;
document.getElementById('titelA').textContent = getRecipeDetailsById(ID).titel;
document.getElementById('titelB').textContent = getRecipeDetailsById(ID).titel;
document.getElementById('typA').textContent = getRecipeDetailsById(ID).name;
document.getElementById('typB').textContent = getRecipeDetailsById(ID).name;
document.getElementById('time').textContent = getRecipeDetailsById(ID).time;
document.getElementById('difficulty').textContent = getRecipeDetailsById(ID).difficulty;
document.getElementById('icon').textContent = getRecipeDetailsById(ID).icon;
document.getElementById('flag').innerHTML = `<img src="https://flagcdn.com/`+getRecipeDetailsById(ID).code+`.svg" height="12" alt="flag"  style="vertical-align:middle;margin-left:5px;border:0px solid #ddd">`;
// --- BEISPIELE FÜR DEN AUFRUF ---

const tagsArray = getRecipeDetailsById(ID).tags;

document.getElementById("description").textContent = beschreibung;
document.getElementById("headline").innerHTML = headline;

if (hinweis && hinweis.trim() !== "") {
document.getElementById("notes").innerHTML = '<div class="notes-box"><h3>📝 Hinweise &amp; Varianten</h3><p>'+hinweis+'</p></div>';
};

function renderTags(tags) {
  // 1. Das Ziel-Div aus dem HTML heraussuchen
  const targetDiv = document.getElementById("tags");
  
  if (!targetDiv) {
    console.error("Das Div mit der ID 'tags' wurde nicht gefunden.");
    return;
  }

  // Optional: Vorherigen Inhalt des Divs leeren, falls nötig
  targetDiv.innerHTML = "";

  // 2. Ein unsichtbares Container-Fragment im Speicher erstellen (gut für die Performance)
  const fragment = document.createDocumentFragment();

  // 3. Jedes Element im Array durchlaufen
  tags.forEach(tagText => {
    // Ein neues <span> Element erstellen
    const span = document.createElement("span");
    
    // Den Text mit dem "#" davor zusammensetzen
    span.textContent = `#${tagText}`;
    span.className = "tag";
    // Optional: Eine CSS-Klasse für Styling hinzufügen (z.B. für Abstände)
    span.classList.add("recipe-tag"); 
    
    // Das Span in unser unsichtbares Fragment schieben
    fragment.appendChild(span);
  });

  // 4. Alle Spans auf einmal in das echte HTML-Div einfügen
  targetDiv.appendChild(fragment);
}

// Funktion mit dem Array aufrufen
renderTags(tagsArray);

  function renderIngredients() {
	document.getElementById('base-servings').innerHTML = servings;
    document.getElementById('ingredient-list').innerHTML = INGREDIENTS.map(([amt, unit, name]) => {
      let amtStr = '–';
      if (amt !== null) {
        const s = amt * servings;
        amtStr = (Number.isInteger(s) ? s : s.toFixed(1)) + ' ' + unit;		
      } else if (amt == null && name == null) {
      return `<li><span style="display: block; width: 100%; text-align:center; color: var(--muted);">~ ${unit} ~</span></li>`;
	  }
	  return `<li><span class="ing-amount">${amtStr}</span><span class="ing-name">${name}</span></li>`;
    }).join('');
  }
  function changeServings(delta) {
    servings = Math.max(1, Math.min(20, servings + delta));
    document.getElementById('serving-num').textContent = servings;
    renderIngredients();
  }
  renderIngredients();
  
 // Funktion Zubereitung
  function renderSteps(steps) {
  const targetDiv = document.getElementById("steps");
  if (!targetDiv) return;

  targetDiv.innerHTML = "";
  const fragment = document.createDocumentFragment();

  steps.forEach((step, index) => {
    // Falls ein Unterarray mal kürzer ist, fangen wir das mit Standard-Leerstrings ab
    const [titelTxt = "", textTxt = "", tippTxt = ""] = step;

    const stepDiv = document.createElement("div");
    stepDiv.className = "step";

    const numDiv = document.createElement("div");
    numDiv.className = "step-num";
    numDiv.textContent = index + 1;
    stepDiv.appendChild(numDiv);

    const contentDiv = document.createElement("div");

    // 1. Titel (immer erstellen)
    const headingDiv = document.createElement("div");
    headingDiv.className = "step-heading";
    headingDiv.textContent = titelTxt;
    contentDiv.appendChild(headingDiv);

    // 2. Text (immer erstellen)
    const textDiv = document.createElement("div");
    textDiv.className = "step-text";
    textDiv.textContent = textTxt;
    contentDiv.appendChild(textDiv);

    // 3. ABFRAGE: Nur erstellen, wenn der Tipp nicht leer ist
    // .trim() sorgt dafür, dass auch reine Leerzeichen ("   ") als leer erkannt werden
    if (tippTxt && tippTxt.trim() !== "") {
      const tipDiv = document.createElement("div");
      tipDiv.className = "step-tip";
      tipDiv.textContent = tippTxt;
      contentDiv.appendChild(tipDiv);
    }

    stepDiv.appendChild(contentDiv);
    fragment.appendChild(stepDiv);
  });

  targetDiv.appendChild(fragment);
}

renderSteps(zubereitung);