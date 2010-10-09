$(function() {

  test("it is chainable", function() {
    equals($("#test_input").default_value("").val(), "");
  });

});
