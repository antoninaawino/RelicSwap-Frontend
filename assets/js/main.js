(function () {
  const toggleSelectCoinModal = $(".toggleSelectCoinModal");
  toggleSelectCoinModal.on("click", function (event) {
    event.preventDefault();
    console.log("jkdsjdjjd");
    $("#selectTokenFormModal").modal("show");
  });
})();
