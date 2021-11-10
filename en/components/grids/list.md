# Angular List Overview

The List element is extremely useful when presenting a group of items. You can create a simple list of textual items, or a more complex one, containing an array of different layout elements. The List component displays rows of items and supports one or more headers as well. Each list item is completely templatable and will support any valid HTML or other components.

## Angular List Example

The following example represents a list populated with contacts with a name and a phone number properties. The [`IgcList`]({environment:wcApiUrl}/classes/IgcListComponent.html) component uses [`IgcAvatar`]({environment:wcApiUrl}/classes/IgcAvatarComponent.html) and [`IgcButton`]({environment:wcApiUrl}/classes/IgcButtonComponent.html) to enrich the user experience and expose the capabilities of setting avatar picture and buttons for text and call actions.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-overview"
           alt="Angular List Example"
           github-src="layouts/grids/list/overview">
</code-view>

<div class="divider--half"></div>

## Usage

At its core the list web component allows you to easily display a vertical list of items.

To get started with the list Web component, first you need to install Ignite UI for Web Components by typing the following command:

```cmd
npm install igniteui-webcomponents
```

The next step is to import `igniteui-webcomponents` inside our **index.ts** file:

```typescript
// index.ts
...
import 'igniteui-webcomponents';
```

### Add List Items

After the import of the `igniteui-webcomponents`, we can add the following code to get a simple list of items:

If all went well, you should see the following in your browser:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-add-list-items"
           alt="Angular Add list items Example"
           github-src="grids/list/add-list-items">
</code-view>

Let's up our game a bit and enhance our list items. Say we want to create a list of contacts with a name and a phone number displayed under the name. To achieve that we can use some of the slots that come with the list items as demonstrated in the next example:

Both slots `title` and `subtitle` give our [`list items`]({environment:wcApiUrl}/classes/IgcListItemComponent.html) some default look.

After all that our list component should now look like that:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-list-item-content"
           alt="Angular List Example"
           github-src="grids/list/list-item-content">
</code-view>

### Adding Avatar and Buttons

We can use some of our other components in conjunction with the [IgcList]({environment:wcApiUrl}/classes/IgcListComponent.html) component to enrich the experience and add some functionality. We can have a nice picture avatar to the left of the name and phone values. Additionally, we can add some buttons to the right of them to allow the user to text and call contacts, so let's update our contacts list component to show the avatar and the buttons. Again, we can do that by using some of the list item's slots.

The `start` slot is meant to be used for adding some kind of media before all other content of our list items. The target element, in our case igc-avatar, will also be provided with a default position and spacing.

The `end` slot is meant to be used for list items that have some kind of action or metadata, represented, for example, by a switch, a button, a checkbox, etc. We will use igc-buttons.

Let's also allow the user to choose the size of the list by using its [`size`]({environment:wcApiUrl}/classes/IgcListComponent.html#size) property. We will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size property of the list.

And here's the result of all that work:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-overview"
           alt="Angular List Example"
           github-src="layouts/grids/list/overview">
</code-view>

## Styling

Let's see how we can change the appearance of our list, by using some of the exposed CSS parts - `title`, `subtitle` and `end`.

```css
igc-list-header {
    font-size: 20px;
    font-weight: 700;
    color: #3f51b5;
}

igc-list-item::part(title) {
    font-size: 18px;
    color: #3f51b5;
}

igc-list-item::part(subtitle) {
    color: #0099ff;
}

igc-list-item::part(end) {
    --igc-secondary-500: 230,48%,47%;
}
```

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-styling"
           alt="Angular List Example"
           github-src="layouts/grids/list/styling">
</code-view>

## API References

In this article we covered a lot of ground with the list web component. First, we created a simple list with text items. Then, we created a list of contact items and added functionality to them by using some additional Ignite UI Web Components, like avatars and buttons. Finally, we changed the component's appearance through the exposed CSS parts.

-   [IgcListComponent]({environment:wcApiUrl}/classes/IgcListComponent.html)
-   [IgcListHeaderComponent]({environment:wcApiUrl}/classes/IgcListHeaderComponent.html)
-   [IgcListItemComponent]({environment:wcApiUrl}/classes/IgcListItemComponent.html)

Additional Web Components that were used:

-   [IgcAvatarComponent]({environment:wcApiUrl}/classes/IgcAvatarComponent.html)
-   [IgcButtonComponent]({environment:wcApiUrl}/classes/IgcButtonComponent.html)
-   [IgcRadioGroupComponent]({environment:wcApiUrl}/classes/IgcRadioGroupComponent.html)
-   [IgcRadioComponent]({environment:wcApiUrl}/classes/IgcRadioComponent.html)

## Additional Resources

<div class="divider--half"></div>

-   [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
-   [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
