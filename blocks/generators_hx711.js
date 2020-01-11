Blockly.JavaScript['hx711_begin'] = function(block) {
  var number_out = block.getFieldValue('out');
  var number_sck = block.getFieldValue('sck');
  var code = '#EXTINC #include "HX711.h" #END\n#VARIABLE HX711 _scale; #END _scale.begin('+number_out+','+number_sck+');\n';
  return code;
};

Blockly.JavaScript['hx711_is_ready'] = function(block) {
  var code = '_scale.is_ready()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['hx711_read'] = function(block) {
  var code = '_scale.read()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['hx711_read_average'] = function(block) {
  var value_avg_count = Blockly.JavaScript.valueToCode(block, 'avg_count', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '_scale.read_average('+value_avg_count+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['hx711_get_value'] = function(block) {
  var value_avg_count = Blockly.JavaScript.valueToCode(block, 'avg_count', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '_scale.get_value('+value_avg_count+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['hx711_get_units'] = function(block) {
  var value_avg_count = Blockly.JavaScript.valueToCode(block, 'avg_count', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '_scale.get_units('+value_avg_count+')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['hx711_tare'] = function(block) {
  var code = '_scale.tare();\n';
  return code;
};

Blockly.JavaScript['hx711_set_scale'] = function(block) {
  var number_scale = block.getFieldValue('scale');
  var code = '_scale.set_scale('+number_scale+');\n';
  return code;
};