(function($) {
  $.fn.extend({
    default_value: function(value) {
      var inputs = this.data("default-value", value).
        focus(clearDefault).
        blur(applyDefault);

      inputs.filter("[value='']").val(value);

      inputs.closest("form").submit(function() {
        inputs.each(clearDefault);
      });

      return inputs;
    }
  });

  function applyDefault() {
    var input = $(this);
    if (input.val() === "") {
      input.val(input.data("default-value"));
    }
  }

  function clearDefault() {
    var input = $(this);
    if (input.val() === input.data("default-value")) {
      input.val("");
    }
  }

})(jQuery);
