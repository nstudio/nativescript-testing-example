import { CustomPluginCommon } from "./common";

export class CustomPlugin extends CustomPluginCommon {
  tapButton() {
    super.tapButton();
    console.log("hello from android");
  }
}
