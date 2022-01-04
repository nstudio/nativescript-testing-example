import { CustomPlugin } from ".";

describe("CustomPlugin", function () {
  beforeEach(() => {
    spyOn(console, "log");
  });
  it("sanity check", function () {
    const plugin = new CustomPlugin();
    expect(plugin.tapButton).toBeDefined();
    plugin.tapButton();
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith(`hello`);
    expect(console.log).toHaveBeenCalledWith(
      `hello from ${global.isIOS ? "ios" : "android"}`
    );
  });
});
