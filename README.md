## Testing examples

This shows how to unit test internal workspace managed plugins using a vanilla/core app and an angular app as examples.

The `nativescript-internal-plugin/index.spec.ts` is included in each app's unit testing runs.

## Try it out

```
npm run setup

// try vanilla/core testing
cd demo
ns test android
ns test ios

// try angular testing
cd demo-angular
ns test android
ns test ios
```

Tests will always run in watch mode so you can try modifying `nativescript-internal-plugin/index.spec.ts` to see the test results respond.