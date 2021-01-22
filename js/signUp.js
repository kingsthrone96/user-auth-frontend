const form = document.querySelector("form");

//* Sign Up form is the default form display on load
(function () {
  form.innerHTML = `
    <div class="row">
      <h3 class="text-centers">Sign Up</h3>
      <form class="">
        <div class="row">
          <div class="input-field col s12">
            <input id="last_name" type="text" class="validate">
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="first_name" type="text" class="validate">
            <label for="first_name">First Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>
      </form>
    </div>
  `;
})();
