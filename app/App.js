import { SandboxController } from "./Controllers/SandboxController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  sandboxController = new SandboxController
}

window["app"] = new App();
