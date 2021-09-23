// Auto Complete
const ac = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
      "Amsterdam": null,
      "Rotterdam": null,
      "Einhoven": null,
      "Ter Apel": null,
      "Budel": null,
    }
  });

  $(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.scrollspy').scrollSpy();
    $('.dropdown-trigger').dropdown();
  });
