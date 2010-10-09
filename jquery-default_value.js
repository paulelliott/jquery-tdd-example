(function($) {
  $.fn.extend({
    default_value: function(value) {
      this.filter("[value='']").val(value);

      return this;
    }
  });
})(jQuery);
