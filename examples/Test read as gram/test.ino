#include <Arduino.h>
#include "HX711.h"

HX711 _scale;

void setup() {

  Serial.begin(115200);

  _scale.begin(18, 19);
  _scale.set_scale(35);
  _scale.tare();
}
void loop() {
  Serial.println(
      ((String("weight = ") + String(_scale.get_units(10)) + String("g"))));
  delay(1000);
}