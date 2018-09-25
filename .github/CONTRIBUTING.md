## In this topic
 ### 1. [Writing an article](#writing-an-article)
 ### 2. [Workflow](#workflow)
 ### 3. [StackBlitz configuration](#stackblitz-configuration)

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

    Since the product API docs have been made available online, the API tables in the DocFX articles are inapplicable. All API tables should be removed, if there are such in the component topics, and they should be replaced with links to the API for each component mentioned in the article. If such tables are not present, and the article is updated to mention a new component that is not present as an API link, then a link to the component's API should be included.  

    Also any text in the article that mentions a component class, or other class/interface that can be linked to in the API docs, should be accompanied by a link to the corresponding class in the API documentation.

### 8. Where does one find further help related to the topic of the article?

# <a name='#workflow'>Workflow</a>

When working on an issue for the Ignite UI Angular DocFX Site Builder, you need to be aware of and to follow a correct status workflow. We have created a number of status labels in order to communicate well what the current status of a single issue/pull request is. The statuses are as follows:

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

> Note: Keep in mind that when you submit a change in the EN .md files, you will need to make the same change in the JP version as well. This will help our Localization team to translate the change.


# <a name='#stackblitz-configuration'>StackBlitz configuration</a>

StackBlitz button should be added for each live editing sample.
In order to do that, certain configuration should be added in the [angular samples](https://github.com/IgniteUI/igniteui-angular-samples) repository. More could be found here [To do](https://github.com/IgniteUI/igniteui-angular-samples/issues/130).


StackBlitz button should be referencing the iframe provided by angular samples repo. Add the button in both the EN and JP versions of the documentation:

```html
<div class="sample-container loading" style="height: 477px">
    <iframe id="list-sample-4-iframe" src='{environment:demosBaseUrl}/list-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
```

Here is an explanation of how the StackBlitz integration works. For each sample (grid-sample-1) a .json file is created (grid-sample-1.json). Each .json file contains the source code of the sample.

All of the `.json` files are located under `/assets/samples` of [igniteui-angular-samples](https://github.com/IgniteUI/igniteui-angular-samples/) project. When you press a StackBlitz button, `igniteui-docfx` consumes a `.json` file from igniteui-angular-samples, creates a hidden `<form>` and submits it to StackBlitz using their [API](https://gist.github.com/EricSimons/72017ec7ba068a5b492ee39f9e3a7f32).
