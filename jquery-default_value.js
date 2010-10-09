(function($) {
  $.fn.extend({
    default_value: function(value) {
      this.filter("[value='']").val(value);

      this.focus(function() {
        if (this.value === value) {
          this.value = "";
        }
      });

      this.blur(function() {
        if (this.value === '') {
          this.value = value;
        }
      });

      return this;
    }
  });
})(jQuery);
