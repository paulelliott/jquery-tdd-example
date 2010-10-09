(function($) {
  $.fn.extend({
    default_value: function(value) {
      this.val(value);

      return this;
    }
  });
})(jQuery);
