(function($) {
  $.fn.extend({
    default_value: function(value) {
      return this.each(function() {
        var input = $(this);

        input.filter("[value='']").val(value);

        input.focus(function() {
          clearValue(this, value);
        });

        input.blur(function() {
          if (this.value === '') {
            this.value = value;
          }
        });

        input.closest("form").submit(function() {
          clearValue(input[0], value);
        });
      });
    }
  });

  function clearValue(input, defaultValue) {
    if (input.value === defaultValue) {
      input.value = "";
    }
  }
})(jQuery);
