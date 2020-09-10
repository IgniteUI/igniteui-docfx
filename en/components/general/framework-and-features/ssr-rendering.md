---
title: Server-side rendering with Angular Universal.
_description: How to use Angular Universal rendering with Ignite UI for Angular.
_keywords: Ignite UI for Angular, Universal, Server-side rendering
---

# Server-side Rendering with Angular Universal

This topic aims at describing what Server-side Rendering is and how to configure it within Ignite UI for Angular application. 

### Angular Universal

All Angular applications run in the client's browser and often this may result in a negative performance hit on the [First Meaningful Paint (FMP)](https://web.dev/first-meaningful-paint) i.e. when a browser first renders the primary content of a page. This is when [Angular Universal](https://angular.io/guide/universal) comes in handy, you can generate the full HTML for a page on the server. It renders a client-side page to HTML on the server that is later bootstrapped on the client. Okay, but how it works?

> [FMP](https://web.dev/first-meaningful-paint) measures when the primary content of a page is visible to the user, as for [FCP](https://web.dev/first-contentful-paint) metric, it measures how long it takes the browser to render the first piece of DOM content after a user navigates to your page. See [Lighthouse performance scoring](https://web.dev/performance-scoring) for more information. 



### How it works?

With Angular Universal, you will serve a static version of your apps' landing page, while at the same time the full Angular application loads in the background. The landing page will be pure HTML and will be displayed even if the JavaScript is disabled. More about Server Rendering you can find [here](https://developers.google.com/web/updates/2019/02/rendering-on-the-web).

### Usage

Server-side rendering is one of the many techniques part of [Rendering on Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) guidelines, that can:
- Ease web crawlers to index your website higher in searches - will improve your Search Engine Optimization (SEO). 
- Show the first page quickly - slow initial page load is disengaging for the users (if it takes more than 3 seconds to load).
- Improve your app performance - it will have a positive impact on both [First Meaningful Paint](https://web.dev/first-meaningful-paint) and [First Contentful Paint](https://web.dev/first-contentful-paint). 

> It gives you full control over SEO and social-media previews, and it improves the overall perceived performance of your application by allowing users to see an initial painted view.

### Add SSR to existing Ignite UI application

#### Step 1 - Add @nguniversal 
By using Angular CLI schematic we can run the following command:

```
ng add @nguniversal/express-engine --clientProject ssr-example
```

This schematic will perform several changes to your app client and server configurations, as well as npm commands and app.module updates.

#### Step 2 - Define all browser-specific objects that are missing
Since Universal apps run on the server and not in the browser, there are a few things you need to watch out for in your code. Browser-specific objects, such as `window`, `document`, or `location` are missing, so we recommend using of [domino](https://github.com/fgnass/domino#server-side-dom-implementation-based-on-mozillas-domjs) for Server-side DOM abstraction. Domino is a Server-side DOM implementation based on Mozilla's dom.js.

- install domino `npm install domino` - for server-side dom abstraction
- install xmlhttprequest `npm i xmlhttprequest` - If using IgxIconService to register icons
- Configure the "server.ts" 

```typescript
// server.ts
const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs
  .readFileSync(path.join('dist/browser', 'index.html'))
  .toString();
const window = domino.createWindow(template);

// Ignite UI browser objects abstractions
(global as any).window = window;
(global as any).document = window.document;
(global as any).Event = window.Event;
(global as any).KeyboardEvent = window.KeyboardEvent;
(global as any).MouseEvent = window.MouseEvent;
(global as any).FocusEvent = window.FocusEvent;
(global as any).PointerEvent = window.PointerEvent;
(global as any).HTMLElement = window.HTMLElement;
(global as any).HTMLElement.prototype.getBoundingClientRect = () => {
    return {
      left: '',
      right: '',
      top: '',
      bottom: ''
  };
};

// If using IgxIconService to register icons
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Other optional depending on your application configuration
(global as any).object = window.object;
(global as any).navigator = window.navigator;
(global as any).localStorage = window.localStorage;
(global as any).DOMTokenList = window.DOMTokenList;
```

#### Step 3 - Start your universal app
Run the following command:

```
npm run build:ssr && npm run serve:ssr
```

> As alternative to [Angular Express Engine](https://github.com/angular/universal/blob/master/modules/express-engine/README.md) you may use [ASP.NET Core Engine](https://github.com/angular/universal/tree/master/modules/aspnetcore-engine) for running Angular Apps with Server-side Rendering.

### Build a new application from scratch 

1. Use `ng new` or the [Ignite UI CLI](../cli-overview.md) `ig new` command.
2. Execute `ng add igniteui-angular` which installs the library's npm packages to your workspace and configures the project in the current working directory to use that library.
4. Add Angular Universal with `ng add @nguniversal/express-engine --clientProject ig-ssr-example`. "ig-ssr-example" is your project name.
3. Add Ignite UI for Angular components - e.g. Grid, Calendar et
4. Configure the "server.ts" file to define all needed browser-specific objects, such as "window", "document", or "location".
	- install domino `npm install domino` - for server-side dom abstraction
	- install xmlhttprequest `npm i xmlhttprequest` - If using IgxIconService to register icons

### Use starter project

Use the starter project that includes Ignite UI for Angular components. The project uses Angular CLI to quickly build a simple application with Angular Universal.

#### Step 1 - Clone the starter repository

```
git clone https://github.com/IgniteUI/ng-universal-example.git
```

#### Step 2 - Use NPM to install the needed dependencies 

```
npm install
```

#### Step 3 - Build and start the application by using:

```
npm run build:ssr && npm run serve:ssr
```

### Things to note:

- If your application is using other browser-specific objects, wrap their usage in a conditional statement, so that they’ll only be used by Angular on the browser. You can do this by importing the functions `isPlatformBrowser` and `isPlatformServer` from `@angular/common`, injecting the `PLATFORM_ID` token into your component, and running the imported functions to see whether you’re on the server or the browser.
- If using ElementRef for HTML element handling, don’t use the nativeElement to manipulate attributes on the element. Instead, inject and use the [Renderer2 methods](https://alligator.io/angular/using-renderer2).
- All URLs for server requests should be absolute, keep in mind that data requests from relative URLs will fail when running from the server.
- For handling browser events the Angular team provides the [preboot](https://github.com/angular/preboot) library. This library buffers the events and replay them once the client-side script is loaded.
- When using Angular Universal, the server will pre-render pages that will be visible to the users, however, interactions will be limited. Once the client-side app is loaded in the background, it will seamlessly switch from showing the server-rendered pages to the client-side app.

### Useful resources

<div class="divider--half"></div>

* [Angular Universal guide](https://angular.io/guide/universal)
* [Ignite UI Starter Kit](https://github.com/IgniteUI/ng-universal-example)
* [Server-side rendering terminology](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
* [Getting started with Ignite UI for Angular](../getting_started.md)
* [Ignite UI CLI Guide](../cli/step-by-step-guide.md)