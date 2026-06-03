const app = document.querySelector('.app');
showWelcome();

function showWelcome(){
  app.innerHTML = `
      <div class="wlcm">
        <button class="menu-btn" onclick="showMenu()">
          Welcome!
        </button>
        <p>
          press welcome to continue..
        </p>
      </div>
    `;
}

function showMenu(){
  app.innerHTML = `  
    <div class="wlcm wlcm1">
      <button class="menu-btn">
        notes
      </button>
      <button class="menu-btn">
        to-do
      </button>
      <button class="menu-btn">
        calculator
      </button>
    </div>
  `;
}

