(function($) {
  $.fn.extend({
    default_value: function(value) {
      return this.each(function() {
        var input = $(this);

        input.filter("[value='']").val(value);

        input.focus(function() {
          clearDefault(this, value);
        });

        input.blur(function() {
          applyDefault(this, value);
        });

        input.closest("form").submit(function() {
          clearDefault(input[0], value);
        });
      });
    }
  });

  function applyDefault(input, defaultValue) {
    if (input.value === "") {
      input.value = defaultValue;
    }
  }

  function clearDefault(input, defaultValue) {
    if (input.value === defaultValue) {
      input.value = "";
    }
  }

})(jQuery);
