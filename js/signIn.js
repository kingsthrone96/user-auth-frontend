const form = document.querySelector("form");

//* Sign Up form is the default form display on load
(function () {
  form.innerHTML = `
    <div class="row">
      <h3 class="text-centers">Sign In</h3>
      <form class="">
       <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
      </form>
    </div>
  `;
})();
