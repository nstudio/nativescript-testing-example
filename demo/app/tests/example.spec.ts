import { isIOS } from "@nativescript/core";
import { HelloWorldModel } from '../main-view-model';

class AnyClass {
  hello = `hello ${isIOS ? "from ios" : "from android"}`;

  buttonTap() {
    const message = "hello from platform native apis";
    if (isIOS) {
      console.log(NSString.stringWithString(message + " on ios").toString());
    } else {
      console.log(new java.lang.String(message + " on android").toString());
    }
  }
}

describe("Test AnyClass including platform native APIs", () => {
  let anything: AnyClass;
  let helloWorld: HelloWorldModel;

  beforeEach(() => {
    anything = new AnyClass();
    helloWorld = new HelloWorldModel();
    spyOn(console, "log");
  });

  it("sanity check", () => {
    expect(helloWorld).toBeTruthy();
    expect(anything).toBeTruthy();
    expect(anything.hello).toBe(`hello ${isIOS ? "from ios" : "from android"}`);
  });

  it("buttonTap should invoke platform native apis", () => {
    helloWorld.onTap();
    expect(helloWorld.message).toBe('41 taps left')
    anything.buttonTap();
    expect(console.log).toHaveBeenCalledWith(
      `hello from platform native apis on ${isIOS ? "ios" : "android"}`
    );
  });
});
