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
    $(".sidenav").sidenav();
    $(".materialboxed").materialbox();
    $(".parallax").parallax();
    $(".tabs").tabs();
    $(".datepicker").datepicker({
      disableWeekends: true,
      yearRange: 10,
    });
    $(".tooltipped").tooltip();
    $(".scrollspy").scrollSpy();
    $(".dropdown-trigger").dropdown();
  });
