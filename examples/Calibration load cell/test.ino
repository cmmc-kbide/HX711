#include <Arduino.h>
#include "HX711.h"

HX711 _scale;

void setup() {
  Serial.begin(115200);
  _scale.begin(18, 19);
  _scale.set_scale(1);
  _scale.tare();
  Serial.println(String("Place your weight 1kg to load cell"));
}
void loop() {
  Serial.println(((String("set this value to scale function = ") + String(_scale.get_units(10) / 1000))));
  delay(1000);
}