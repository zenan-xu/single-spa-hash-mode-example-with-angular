# single-spa-hash-mode-example-with-angular
A simple demo example showing how to enable hash mode in a single spa angular application


You need to firstly enable hash mode in root-config.

If you are using layout html with `single-spa-router`, add `mode="hash"`
```html
<single-spa-router mode="hash">
    ...
</single-spa-router>
```
If you are registering each route manually, use `location.hash`
```js
registerApplication({
  name: "@orgName/app1",
  app: () => System.import("@orgName/app1"),
  activeWhen: (location) => location.hash.startsWith("#/app1"),
});
```
Then, enable hash mode in your routing module of angular micro frontend application.
```ts
@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
```

## How to start the application

Run `npm install` in each application `root-config`, `navbar`, `app1` and `app2`

Run `npm start` in `root-config`

Run `serve:single-spa:navbar` in `navbar`

Run `serve:single-spa:app1` in `app1`

Run `serve:single-spa:app2` in `app2`

Navigate to `http://localhost:9000/`

## How the example works
The example contains two buttons in navbar, `app1` and `app2`. By clicking `app1`, it will show its content with two links 
to navigate to two sub routes `route1` and `route2`. `app2` is just a simple app showing a message without any sub routes.
You will see that the hash mode works for each route.