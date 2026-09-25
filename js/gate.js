(function () {
  var KEY = "cfp_demo_unlocked";
  var PASSWORD = "a";
  var form = document.getElementById("gate-form");
  var input = document.getElementById("gate-password");
  var error = document.getElementById("gate-error");
  var gate = document.getElementById("gate");

  function unlock() {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch (e) {}
    document.documentElement.classList.add("unlocked");
    if (gate) gate.setAttribute("hidden", "");
  }

  if (document.documentElement.classList.contains("unlocked")) {
    if (gate) gate.setAttribute("hidden", "");
    return;
  }

  if (input) input.focus();

  if (!form) return;

  input.addEventListener("input", function () {
    error.hidden = true;
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (input.value === PASSWORD) {
      unlock();
      return;
    }
    error.hidden = false;
    input.value = "";
    input.focus();
  });
})();
