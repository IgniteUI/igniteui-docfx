---
title: Server-side rendering with Angular Universal.
_description: How to use Angular Universal rendering with Ignite UI for Angular.
_keywords: Ignite UI for Angular, Universal, Server-side rendering
---

## Server-side Rendering with Angular Universal

This topic aims to describe what server-side rendering is and how to configure it within Ignite UI for Angular application.

### Angular Universal (SSR)

Most of the Angular applications are executed in the browser, but if we want to generate the full HTML for a page on the server and avoid additional round-trips for data fetching and templating on the client - [Angular Universal](https://angular.io/guide/universal) come in handy. Basically, it generates static pages that are later bootstrapped on the client. 

### Usage

Server-side rendering is one of the many techniques part of [Rendering on Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) guidelines, that can:
- Increse the chance of search engines to access your website - to ease web crawlers thtough search engine optimization (SEO).
- Improve your app performance - which has a positive impact on the initial user experience.
- Show the first page quickly - slow initial page load is disengaging for the users (if it takes more than 3 seconds to load).

### How it works?

With Angular Universal you will serve a static version of you apps' landing page, while at the same time the full Angular application is loaded. The landing pages will be pure HTML, and will be displayed even if the JavaScript is disabled, keep in mind that handling browser events won't be possible. To handle this the Angular team provides the [preboot](https://github.com/angular/preboot) library. This library buffers the events and replay them once the client-side script is loaded.

### Add SSR to existing applicaiton
