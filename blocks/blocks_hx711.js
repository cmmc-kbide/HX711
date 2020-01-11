Blockly.Blocks['hx711_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HX711 begin (pin out =")
        .appendField(new Blockly.FieldNumber(2, 0, 255), "out")
        .appendField(",pin sck=")
        .appendField(new Blockly.FieldNumber(3), "sck")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("block begin sensor HX711");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hx711_is_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HX711 is sensor ready");
    this.setOutput(true, ["Boolean", "Number"]);
    this.setColour(315);
 this.setTooltip("check is sensor ready to read data");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hx711_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HX711 read raw data");
    this.setOutput(true, "Number");
    this.setColour(315);
 this.setTooltip("read raw data from sensor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hx711_read_average'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HX711 read raw average data");
    this.appendValueInput("avg_count")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(315);
 this.setTooltip("read average raw data from sensor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hx711_get_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HX711 read average data - tare offset");
    this.appendValueInput("avg_count")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, ["double", "Number"]);
    this.setColour(315);
 this.setTooltip("read average raw data - offset from tare function from sensor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hx711_get_units'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HX711 read average value / scale");
    this.appendValueInput("avg_count")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(315);
 this.setTooltip("read (average raw data - offset)/scale from sensor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hx711_tare'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HX711 tare");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("tare, set weight to 0 and set offset");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hx711_set_scale'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HX711 set scale")
        .appendField(new Blockly.FieldNumber(2280, -Infinity, Infinity, 1), "scale");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("set scale to sensor");
 this.setHelpUrl("");
  }
};