---
title: Ignite UI Licensing
_description: Information on using the Licensed Ignite UI npm package
_keywords: npm package license, ignite ui license feed, licensing 
---

## License Agreements
It is important to know all the [legal terms and conditions](https://www.infragistics.com/legal/license/igultimate-la) regarding the products that you purchase and use. PLEASE NOTE: We have updated our license terms and subscription model. 

If you are building a `commercial product` or your license [has expired](http://www.infragistics.com/renewal), you will need to [acquire an updated license](https://www.infragistics.com/how-to-buy/product-pricing). This will enable you to use our private npm feed hosted on https://packages.infragistics.com/npm/js-licensed/ for development. There you will find the latest version of the Ignite UI for Angular package. If you have a valid license, you can use this private feed and you will have access to the full version of Ignite UI for Angular.

If you are building a `non-commercial product` [contact us](https://www.infragistics.com/about-us/contact-us) and we will provide you with the appropriate license. 

## Ignite UI for Angular npm packages - Using the Private npm feed
Npm is the most popular package manager and is also the default one for the runtime environment Node.js. It is highly adopted and is one of the fastest and easiest way to manage the packages that you depend on in your project. For more information on how npm works, read the official [npm documentation](https://docs.npmjs.com/).

Infragistics Ignite UI for Angular product is available as a npm package and you can add it as a dependency to your project in a [`few easy steps`](cli/step-by-step-guide.md). Choosing this approach will not require configuring npm. By installing this package you will start using the [Ignite UI for Angular Trial version](https://www.npmjs.com/package/igniteui-angular) of the product.

> More information on how to start using the Ignite UI for Angular npm package can be found in [this topic](getting_started.md#installing-ignite-ui-for-angular).

### How to setup you environment to use the private npm feed?

#### First you need to setup the private registry and to associate this registry with the Infragistics scope. 

This will allow you to seamlessly use a mix of packages from the public npm registry and the Infragistics private registry. You will be asked to provide the username and the password that you use for logging into your Infragistics account. You should also provide the email that is registered to your Infragistics profile. 

>[!NOTE]
> `npm` is disallowing the use of the `"@"` symbol inside your username as it is considered as being "not safe for the net". Because your username is actually the email that you use for your Infragistics account it always contains the symbol `"@"`. That's why you must escape this limitation by replacing the `"@"` symbol by `"!!"` (two exclamation marks). For example, if your username is `"username@example.com"` when asked about your username you should provide the following input: `"username!!example.com"`.

#### Now, to log in to ProGet using npm, run the adduser command and specify a ProGet user account and password:

```cmd
npm adduser --registry=https://packages.infragistics.com/npm/js-licensed/ --scope=@infragistics --always-auth
```

#### After this is done, you will be logged in and you will be able to install the latest version of Ignite UI into your project:

```cmd
npm uninstall igniteui-angular
npm install @infragistics/igniteui-angular
```

Have in mind that we have set the Ignite UI for Angular package to be scoped, meaning that no changing the registries is needed if you want to install packages from our private feed and from npmjs.org simultaneously.

#### Some additional changes might have be made in your project source
If you are upgrading from trial to licensed package and you are not using the automated CLI migrations:
- Add a `paths` mapping in the project `tsconfig.json`.

```typescript
{
  ...
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    ...
    "paths": {
      "igniteui-angular": ["./node_modules/@infragistics/igniteui-angular"]
    }
	...
}
```
- Add a `stylePreprocessorOptions` mapping to your project `angular.json`

```typescript
{
  "projects": {
    ..
    "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
			...
            "aot": true,
            "stylePreprocessorOptions": {
                "includePaths": [
                    "node_modules/@infragistics"
                ]
            ...
},
```
- remove the `~` sign from your project `sass` imports for `igniteui-angular/lib` source:

```scss
@import "~igniteui-angular/lib/core/styles/themes/index";

// Should be changed to

@import "igniteui-angular/lib/core/styles/themes/index";
```

So, if you've already adopted npm and you have an Ignite UI for Angular license, don't hesitate setting up the Infragistics private feed and boost your productivity, using the full potential of Ignite UI for Angular.

### [TODO] Using CLI

**Describe** the Automatic migration

### [TODO] How to set up CI provider

**Describe** a way to integrate a Public CI process in a repository, which uses a licensed package (with access token) or a way to acquire a access token through infragistics.com user account, which later will be used to access the licensed package.