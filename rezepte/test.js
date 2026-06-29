const stepsArray = [
  ["Zwiebeln andünsten", "Die Zwiebeln in feine Würfel schneiden und in Olivenöl glasig dünsten.", "Nicht zu heiß werden lassen!"],
  ["Ablöschen", "Mit einem Schuss trockenem Weißwein ablöschen.", ""], // <--- Dieser Tipp ist leer!
  ["Anrichten", "Die Pasta direkt in die Pfanne geben und servieren.", "Heiß servieren."]
];

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

renderSteps(stepsArray);