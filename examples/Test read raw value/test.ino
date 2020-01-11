#include <Arduino.h>
#include "HX711.h"

typedef int Number;
typedef int Boolean;

HX711 _scale;

void setup() {
  Serial.begin(115200);
  _scale.begin(18, 19);
  _scale.tare();
}
void loop() {
  raw_data = _scale.read();
  average_raw = _scale.read_average(10);
  raw_tare = _scale.get_value(10);
  Serial.println(((String(raw_data) + String(",") + String(raw_data) +String(",") + String(raw_tare))));
  delay(500);
}