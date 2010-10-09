$(function() {

  test("it is chainable", function() {
    equals($("#test_input").default_value("").val(), "");
  });

  test("it has the default value when applied", function() {
    $("#test_input").default_value("Occupation");
    equals($("#test_input").val(), "Occupation");
  });

});
