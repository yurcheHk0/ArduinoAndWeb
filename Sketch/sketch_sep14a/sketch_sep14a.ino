int ledPin = 13;      // select the pin for the LED
boolean toggleComplete = false;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()>0) {
    char inChar = (char)Serial.read();
     if(inChar == 'A' && toggleComplete == false) { // end character for toggle LED
       digitalWrite(ledPin, HIGH);
       toggleComplete = true;
     }else{
      digitalWrite(ledPin, LOW);
      toggleComplete = false; 
    }
  }
}
