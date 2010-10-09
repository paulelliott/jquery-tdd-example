$(function() {

  test("it is chainable", function() {
    equals($("#test_input").default_value("").val(), "");
  });

  test("it applies the default to fields without values", function() {
    $("#test_input").default_value("Occupation");
    equals($("#test_input").val(), "Occupation");
  });

  test("it does not apply the default to fields with values", function() {
    $("#test_input").val("Special Operations").default_value("Occupation");
    equals($("#test_input").val(), "Special Operations");
  });

});
