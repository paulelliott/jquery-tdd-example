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

  test("it clears on focus when the default value is present", function() {
    $("#test_input").default_value("Name");
    $("#test_input").focus();
    equals($("#test_input").val(), "");
  });

  test("it does not clear on focus when a value is present", function() {
    $("#test_input").val("Corbin Dallas").default_value("Name");
    $("#test_input").focus();
    equals($("#test_input").val(), "Corbin Dallas");
  });

  test("it applies the default value on blur when no value is present", function() {
    $("#test_input").default_value("Name").val("");
    $("#test_input").blur();
    equals($("#test_input").val(), "Name");
  });

});
