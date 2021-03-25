## In this topic
 ### 1. [Writing an article](#writing-an-article)
 ### 2. [Topic structure](#topic-structure)
 ### 3. [Writing a Styling section for article](#styling-section)
 ### 4. [Workflow](#workflow)
 ### 5. [StackBlitz configuration](#stackblitz-configuration)
 ### 6. [Lazy loading](#lazy-loading-of-samples-in-a-topic)
 ### 7. [Creating shared help topics](#creating-shared-help-topics)
 ### 8. [Updating of Data Visualization related topics](#updating-of-data-visualization-related-topics)

# <a name='#writing-an-article'>Writing an article</a>

When writing an article about a specific component, it is important to have a plan that you stick to. This will improve the overall cohesion of the text, making it more structured and clear for the reader.

There are a few questions one can ask, when charting such plan.

### 1. What is this article about (objective)?

    a. List required previous knowledge to better understand the concept of the topic. For instance, if the article is about a directive feature, put references to the ng directives in the beginning of the article.

    b. Identify common use cases. Where would said component/directive be used in most often. Try to outline samples around said use cases.

### 2. What are the prerequisites to using said component/directive?\*\* Does it depend on other components, or can it be used on its own?

### 3. How does one get started with using said component/directive?

### 4. Identify the most important feature(s) of a component/directive.

    Why was a feature implemented? What problem does it solve? How important is that feature for the overall weight of the component? Can this component exist without the feature and still be perceived useful? Rank features by importance and write about the most important ones.

### 5. What are some common gotchas about a component/directive’s feature?

    Does the feature require any previous knowledge? If yes, then refer the user to it.

### 6. Can we identify some problems that may occur when using said component/directive?

    If yes, we can anticipate questions and have a troubleshooting section where we outline such issues and how to solve them.

### 7. Do we have a summary of the article and component APIs?

    Since the product API docs have been made available online, the API tables in the DocFX articles are inapplicable. All API tables should be removed, if there are such in the component topics, and they should be replaced with links to the API for each component mentioned in the article. If such tables are not present, and the article is updated to mention a new component that is not present as an API link, then a link to the component's API should be included. Example of listing the mentioned components:
```markdown
[IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
[IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)
[IgxGridRowComponent API]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
```

    Also any text in the article that mentions a component class, or other class/interface that can be linked to in the API docs, should be accompanied by a link to the corresponding class in the API documentation. Example of linking a corresponding item in the article to the API documentation in the grid filtering topic:

```markdown
Depending on the set [`dataType`]({environment:angularApiUrl/classes/igxcolumncomponent.html#datatype}) of the column, the correct set of [**filtering operations**](grid.md#filtering-conditions) is loaded inside the filter UI dropdown.
```

### 8. Where does one find further help related to the topic of the article?

# <a name='#topic-structure'>Topic structure</a>

The purpose of this section is to present what the structure of the topic should be and the arrangement of the main elements in it.

### 1. The first title of the page should be with `<h1>` tag (`#` Page Title) and it wont appear on the submenu on the right.

### 2. Every main title should be with `<h2>` tag (`##` Main Title).

### 3. Using nested titles.
Minor titles related to the main titles can be used with `<h3>`(`###`) or `<h4>` (`####`).
Note: when `<h4>` (`####`) is used the title wont appear on the submenu on the right.

# <a name='#styling-section'>Writing a Styling section for article</a>

The main purpose of the Styling section is to provide simple examples on how to style most common parts of the UI (lets say styling for alternate rows in the grid), copy/paste the code in any sample and see it working. In order to write content that fullfills the purpose, follow the steps below:

### 1.	Give the content an `<h3>` Section header, so that it appears on the submenu on the right.
### 2.	Start the content with the example of adding the theming index file.
### 3.	Provide the simplest styling example, which is to extend the default theme for the corresponding feature/component. For example, when styling the paginator UI, the `igx-grid-paginator-theme` needs to be extended:

```scss
$dark-grid-paginator: igx-grid-paginator-theme(
    $text-color: #F4D45C,
    $background-color: #575757,
    $border-color: #292826
);
```

### 4.	If other elements in the feature UI are styled by another theme, add example for that theme too. For example - the buttons in the paginator UI require that a new theme for buttons is created.
### 5.	If a theme provides a ton of parameters for styling, choose those that you decide would be the most common. You may state in one sentence what each property controls, and provide a link to the theme under the SASS API.
### 6.	Provide the last step, which is to include the component mixin, along with two notes – the first one for scoping any mixin if needed, and the second note about penetrating the `ViewEncapsulation`, along with example on how to overcome the encapsulation.
### 7.	Add an iframe with an example, along with a Stackblitz button
### 8.	Examples on styling with `igx-color`, `palettes` and `schemas` are not necessary, but you may add a link to Theming engine topics as they are quite detailed.
### 9. When adding a section for a certain grid feature, add it for the igxHierachicalGrid and igxTreeGrid as well.


# <a name='#workflow'>Workflow</a>

When working on an issue for the Ignite UI for Angular DocFX Site Builder, you need to be aware of and to follow a correct status workflow. We have created a number of status labels in order to communicate well what the current status of a single issue/pull request is. The statuses are as follows:

## Development - applicable to issues and pull requests
1. `status: in-review` this is the initial status of an issue. If the label is not placed, go ahead and place it.
2. `status: in-development` this is the status once you start working on an issue. Assign the issue to yourself if it hasn't been assigned already and remove the previous status and assign it an in development status.
3. `status: by-design` this is the status of an issue that has been reviewed and has been determined that the current design of the feature is such that the issue describes the correct behavior as incorrect. Remove other statuses and place this status if you've reviewed the issue.
4. `status: third-party-issue` this is the status of an issue that has been reviewed, has been determined to be an issue, but the root case is not in the Ignite UI for Angular code. Example would be browser specific bugs caused by the particular browser's rendering or JavaScript engines, or an issue with the Angular framework. Remove other statuses and place only this one if you're the one performing the investigation.
5. `status: not-to-fix` this is the status of issues that derive from our code, but have been decided to leave as is. This is done when fixes require general design and/or architecture changes and are very risky.
6. `status: already-fixed` this status indicates that the issue is already fixed in the source code. When setting this status assign the person that logged the issue so that he can verify the issue is fixed in the respective development branch. Remove other statuses and place this status if you've reviewed the issue.
7. `status: cannot-reproduce` this status indicates that you cannot reproduce the issue in the source code. A reason may be because the issue is already fixed. When setting this status assign the person that logged the issue so that he can respond with more details on how to reproduce it.
8. `status: not a bug` this is the status of an issue that you reviewed and concluded that it's not a bug. You should comment explaining the reasons why you think the issue is not a bug.
9. `status: resolved` this is the status of an issue that has been fixed and there are active pull requests related to it.

Example status workflows:

`status: in-review` => `status: in-development` => `status: resolved` (PR is created)

`status: in-review` => `status: by-design` (Issue can be closed)

`status: in-review` => `status: third-party-issue` (Issue can be closed)

`status: in-review` => `status: not-to-fix` (Issue can be closed)

> Note: In most cases the development will be related to new topics creation or updating of existing one. Keep in mind that **for each newly added topic the toc.yml should be updated with a reference to the new topic**. It is recommended `Additional references` section to be added at the end of each topic.

## Testing - applicable to pull requests
1. `status: awaiting-test` this is the initial status of pull requests. If you're performing the pull request, please place this status on it. Pull requests are accepted if and only if all status checks pass, review is performed, and the pull request has been tested and contains `status: verified`.
2. `status: in-test` place this status once you pick up the pull request for testing.
3. `status: verified` place this status once you've tested the pull request, have verified that the issue is fixed, and have included all necessary automated tests for the issue.
4. `status: not-fixed` place this status once you've tested the pull request and you are still able to reproduce the issue it's attempting to fix. Then assign the developer back on the pull request.

Example status workflows:

`status: awaiting-test` => `status: in-test` => `status: verified` (PR can be merged if all prerequisites are met)

`status: awaiting-test` => `status: in-test` => `status: not-fixed` => `status: in-development` => `status: awaiting-test`

> Note: When you are assigned to test a PR related to new topic creation or updating an existing one:
1. Check the build result.
2. Be sure that `Writing an article` guidance is respected.
3. Check whether the embed sample is working.
4. Stackblitz demo is working as well (Button action).
5. Each hyperlink is working properly.
6. Table of content is correct.

> Note: Testing a PR from Angular Samples (when new sample is added) with combination of PR related to topic update (or when new topic is added).
Open both repositories and perform `npm start`. This will start both projects and you will see the embed sample in your topic under `localhost`.

## Localization - applicable to issues and pull requests
1. `status: pending-localization` this status tells that there are changes in the localization strings that need to be translated. When you make such changes, put this status badge without removing the other applicable ones and assign a person to do the translations.

> Note: This status should be set only when the PR is approved. This will indicate that no further changes will be applied.
2. `status: localized` this status is for issues that were with a pending translation status and have already been localized. Place this status label once these translation changes have been included in the current pull request, or the changes are already pulled with a different pull request.

> Note: Keep in mind that when you submit a change in the EN .md files, you will need to make the same change in the JP versions as well. This will help our Localization team to translate the change. As for the KR version of the topic, these changes will be handled by the Localization team.


# <a name='#stackblitz-configuration'>StackBlitz configuration</a>

StackBlitz button should be added for each live editing sample.
In order to do that, certain configuration should be added in the [angular samples](https://github.com/IgniteUI/igniteui-angular-samples) repository. More could be found here [To do](https://github.com/IgniteUI/igniteui-angular-samples/issues/130).


StackBlitz button should be referencing the iframe provided by angular samples repo. Add the button in the JP versions of the documentation as well:

```html
<div class="sample-container loading" style="height: 477px">
    <iframe id="list-sample-4-iframe" src='{environment:demosBaseUrl}/list-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="list-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
```

Here is an explanation of how the StackBlitz integration works. For each sample (grid-sample-1) a .json file is created (grid-sample-1.json). Each .json file contains the source code of the sample.

All of the `.json` files are located under `/assets/samples` of [igniteui-angular-samples](https://github.com/IgniteUI/igniteui-angular-samples/) project. When you press a StackBlitz button, `igniteui-docfx` consumes a `.json` file from igniteui-angular-samples, creates a hidden `<form>` and submits it to StackBlitz using their [API](https://gist.github.com/EricSimons/72017ec7ba068a5b492ee39f9e3a7f32).

# <a name='#lazy-loading'>Lazy loading of samples in a topic</a>
Our samples are embedded in the topics with iframes. Some topics have more than one sample and in order to prevent loading delays, we've added lazy loading functionality of [the iframes](https://github.com/IgniteUI/igniteui-docfx-template/issues/75). In order to achieve this we use [lazysizes](https://www.npmjs.com/package/lazysizes#recommendedpossible-markup-patterns) library.

Follow the steps below for lazy loading implementation in a topic ([PR example](https://github.com/IgniteUI/igniteui-docfx/pull/1001/files#diff-52bafd164f6207a20517090ad21d7a6aR13)):
1. Generally the first sample should not be lazily loaded. Add `loading` class to the sample container and: `onload="onSampleIframeContentLoaded(this);` on the `iframe`.
2. For all of the sample you'd like to load lazily, add
- `loading` class to the sample container
- `lazyload` class to the `iframe`
- rename the `src` of the iframe to `data-src`
- you shouldn't have `onload="onSampleIframeContentLoaded(this);"`

# <a name='#creating-shared-help-topics'>Creating shared help topics</a>
[Here](https://github.com/IgniteUI/igniteui-docfx/wiki/Creating-Shared-Help-Topics) you can find the document which describes how to create a shared topic (template) which is used to produce separate topics for a particular features. For example shared templates for IgxGrid, IgxTreeGrid and/or IgxHierarchicalGrid components.

# <a name='#updating-of-data-visualization-related-topics'>Updating of Data Visualization related topics</a>
Our cross platform docs are in `internal repo`. 

If you need to update the cross platform docs, please do so from `internal repo`, queue an Angular build from `AngularDocFX_EN` build definition in the `xplat-docfx` repository, and then approve the PR that will come into public repo from ESShared.

- `internal repo` - "...tfs/engineering/IgInternalApplicationsGit/IgInternalApplicationsGit Team/_git/xplat-docfx"
