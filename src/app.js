"use strict";

import { errorHandler } from "./utils/errorHandler.js";
import { renderWelcome } from "./views/welcome/welcomeView.js";
import { renderHeader } from "./views/header/headerView.js";
import { renderContents } from "./views/contents/contentsView.js";
import { renderFooter } from "./views/footer/footerView.js";
import { fetchDataAndUpdateView } from "./controllers/apiController.js";

const ui = document.getElementById("user-interface");

const init = async () => {
  try {
    // Render the welcome view
    const welcome = await renderWelcome();
    ui.appendChild(welcome);

    // Remove the welcome view from the DOM
    ui.removeChild(ui.firstChild);

    // Render the header
    ui.appendChild(renderHeader());

    ui.appendChild(renderContents());

    const content = await fetchDataAndUpdateView("bitcoin", "marketData");
    ui.appendChild(content);

    // Render the footer
    ui.appendChild(renderFooter());
  } catch (error) {
    errorHandler(error);
  }
};

// document.addEventListener("DOMContentLoaded", () => init());
