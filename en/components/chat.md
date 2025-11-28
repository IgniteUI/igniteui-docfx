---
title: Angular Chat | Ignite UI | Infragistics
_description: With the Ignite UI for Angular Chat component, you can build interactive messaging experiences with support for messages, attachments, suggestions, typing indicators, and custom templates.  
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chat components, Angular Chat controls  
mentionedTypes: ["Chat"]  
---

# Angular Chat Overview

The Chat component provides a complete solution for building conversational interfaces in your applications. Whether you are creating a customer support tool, a collaborative workspace, or a chatbot assistant, the Chat component gives you the building blocks you need: sending and receiving text messages, uploading file attachments, displaying quick reply suggestions, showing typing indicators when the other participant is writing a response.

Unlike a static message list, the Chat component is interactive and designed for **real-time communication**. It manages input, rendering, and user interaction while giving you full control over how messages and attachments are displayed. It also exposes an extensive rendering API that lets you override any part of its layout or visuals.

<code-view style="height:900px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/chat-overview-sample/" alt="Angular Chat Overview">
</code-view>

## Installation

To get started, install Ignite UI for Angular package as well as the Ignite UI for Web Component one that powers the UI:

```cmd
npm install igniteui-angular igniteui-webcomponents
```

[`IgxChatComponent`]({environment:angularApiUrl}/classes/igxchatcomponent.html) provides Angular bindings (events, templates, DI, change detection, pipes), while the visual chat UI is rendered by the Web Component. Installing both ensures the chat behaves natively in Angular while leveraging the full Web Component UI.

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

Once installed, you can import the component in your project:

```ts
import { Component } from '@angular/core';
import { IgxChatComponent } from "igniteui-angular";

@Component({
  ...
})
export class AppComponent { ... }
```

## Usage
Define the chat options and bind them in your template:

```ts
import { IgxChatComponent, IgxChatOptions  } from "igniteui-angular";

public options: IgxChatOptions  = {
  currentUserId: 'me',
  headerText: 'Support Chat',
};
```

```html
<igx-chat 
    [options]="options"
    [messages]="messages">
</igx-chat>
```

Here, the `currentUserId` property tells the component which messages are “outgoing” (sent by the current user) versus “incoming” (sent by others). The `headerText` provides a title for the chat window.

Once rendered, you can programmatically add messages by updating the bound messages array:

```ts
public addMessage() {    
    const newMessage = {
      id: '1',
      sender: 'me',
      text: 'Hello! How can I help you?',
      timestamp: Date.now().toString()
    };
    this.messages = [...this.messages, newMessage ];
}
```

This approach makes it easy to plug the Chat into your own data source, such as a server endpoint, a chatbot engine, or a collaborative app backend.

### Inputs
The Chat component exposes several key properties that let you control its state and configuration:

| Name              | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `messages`        | Array of messages (`IgcChatMessage[]`) displayed in the chat. You can bind to this to control which messages are shown.                                                  |
| `draftMessage`    | The current unsent message, represented as an object containing `text` and optional `attachments`. This is useful for saving or restoring message drafts.            |
| `options`         | Chat configuration (`IgxChatOptions`) such as current user ID, input placeholders, accepted file types, quick reply suggestions and typing behavior. |
| `templates` | Custom Angular templates (`IgxChatTemplates`) for message content, input, attachments, and other parts of the chat UI.                                   |

These properties make it straightforward to synchronize the Chat’s UI with your application’s state and backend.

### Attachments
Modern conversations are rarely limited to text alone. The Chat component includes built-in support for file attachments, allowing users to share images, documents, and other files.
By default, the input area includes an attachment button. You can control which file types are allowed by setting the `acceptedFiles` property:

```ts
public options: IgxChatOptions = {
  acceptedFiles="image/*,.pdf",
};
```

In this example, users will only be able to upload images and PDF files.
If your use case does not require attachments, you can easily turn them off:

```ts
public options: IgxChatOptions = {
  disableInputAttachments: true,
};
```

### Suggestions
Quick reply suggestions provide users with pre-defined responses they can tap to reply instantly. This feature is particularly useful in chatbots, customer service flows, or when guiding users through a structured process.
You can provide suggestions by binding an array of strings to the suggestions property. The `suggestions-position` attribute lets you control where they are displayed: either below the input area or below the messages list.

```ts
public options: IgxChatOptions = {
  currentUserId: "me",
  suggestions: ['Yes', 'No', 'Maybe later'],
  suggestionsPosition: "below-input"
};
```

This approach helps streamline user interactions by reducing the need to type repetitive answers and improves the overall experience in guided conversations.

### Typing Indicator
Conversations feel more natural when participants can see that the other person is typing. The Chat component provides this behavior through the `isTyping` property of the options object.
When set to true, the chat shows a subtle typing indicator below the messages:

```ts
public options: IgxChatOptions = {
  isTyping: true
};
```

This feature is typically toggled programmatically, for example when receiving a typing event from your backend service.

### Custom Templates
While the Chat component works out of the box with its default UI, many applications need to customize the look and feel. For example, you might want to add read receipts, display avatars, or replace the input area with a voice recording button.
The Chat component addresses this need using Angular templates. Templates are provided via the `templates` input and use strongly typed Angular directives.

#### Available Templates
The following parts of the Chat can be customized:
- Message-level: message, messageHeader, messageContent, messageAttachments, messageActions
- Attachment-level: attachment, attachmentHeader, attachmentContent
- Input-level: input, inputActions, inputActionsStart, inputActionsEnd, inputAttachments, fileUploadButton, sendButton
- Suggestions: suggestionPrefix
- Miscellaneous: typingIndicator

This level of granularity means you can tweak just one part (for example, how attachments look) without rewriting the entire chat layout.

#### Custom Message Content

```html
<igx-chat
        [options]="options"
        [messages]="messages"
        [templates]="{ messageContent: messageContent }">
</igx-chat>
<ng-template #messageContent let-message igxChatMessageContext>
  <div class="custom-message">
    <strong>{{ message.sender }}:</strong> {{ message.text }}
  </div>
</ng-template>
```

Here:
- `let-message` exposes the message object.
- The [`igxChatMessageContext`]({environment:angularApiUrl}/classes/igxchatmessagecontextdirective.html) directive ensures proper typing for message templates.

#### Example: Custom Input Area
By default, the chat input is a text area. You can override it to provide a more tailored experience, such as adding a voice input button:

```html
<igx-chat
  [options]="options"
  [templates]="{ input: customInput }">
</igx-chat>

<ng-template #customInput let-input igxChatInputContext>
  <div class="custom-input">
    <textarea [(ngModel)]="input.value"></textarea>
    <button (click)="speechToText()">🎤</button>
  </div>
</ng-template>
```

#### Example: Extending Input Actions
The Chat component provides two templates which are useful when you want to keep the default actions (upload and send) but extend them with additional controls:
- `inputActionsStart` – allows you to inject custom content after the built-in upload button.
- `inputActionsEnd` – allows you to inject custom content after the built-in send button.

For example, you might want to add a voice recording button after the upload button, or a menu of extra options after the send button.
In the following example, the default upload button is preserved, but we add a microphone button next to it. On the other end, we remove the default send button and replace it with a custom Ask button and a “more” menu:

```html
<igx-chat
  [options]="options"
  [templates]="{
    inputActionsStart: inputStart,
    inputActionsEnd: inputEnd
  }">
</igx-chat>

<ng-template #inputStart>
  <button class="icon-btn">🎤</button>
</ng-template>

<ng-template #inputEnd>
  <button (click)="ask()">Ask</button>
  <button class="icon-btn">⋮</button>
</ng-template>
```

In this setup:
- The upload button remains in place.
- A microphone button is added after it (inputActionsStart).
- The default send button is removed and replaced with a custom Ask button and a “more” icon (inputActionsEnd).

This approach gives you full flexibility over the chat input bar, letting you add, remove, or reorder actions without rebuilding the input area from scratch.

### Markdown Support
The Chat component includes built-in support for Markdown content through [`fromMarkdown`]({environment:angularApiUrl}/classes/igxchatcomponent.html) pipe, which transforms message text into safe HTML. This allows you to display messages with formatted text, links, lists, and even syntax-highlighted code blocks, while ensuring that all rendered HTML is sanitized for security.

> [!Note]
> To use the Markdown renderer, you need to install the following peer dependencies in your project:

```cmd
npm install marked marked-shiki shiki dompurify
```

Markdown rendering is performed asynchronously for performance reasons, so the `fromMarkdown` pipe must be combined with Angular’s `async` pipe.

Example — rendering markdown inside a template:

```html
<ng-template #messageContent let-message igxChatMessageContext>
    <div [innerHTML]="message.text | fromMarkdown | async"></div>
</ng-template>
```

In this example:
- Each message’s text property will be parsed as Markdown using the [marked](https://github.com/markedjs/marked) library.
- The renderer sanitizes the output using [DOMPurify](https://github.com/cure53/DOMPurify)
- Links automatically open in a new tab with safe rel attributes.

#### Syntax Highlighting
The `fromMarkdown` pipe also supports syntax highlighting for code blocks. When a message contains fenced code (```js...```), it will be rendered using [Shiki](https://shiki.matsu.io/), a high-fidelity code highlighter used by VS Code. By default, it includes highlighting for JavaScript, TypeScript, HTML, and CSS with the github-light theme.
Example — when a message contains:

```markdown
Here is a JavaScript example:
\`\`\`ts
function greet(name: string) {
  return `Hello, ${name}!`;
}
\`\`\`
```

The output inside the chat message will appear with:
- Automatic syntax highlighting
- Theme-aware styling (github-light / github-dark)
- Proper indentation and monospaced font
- No additional configuration is required — the default themes are loaded automatically.

### Outputs (Events)
To integrate with your application logic, the Chat component emits a set of events:
- messageCreated – when a new message is created.
- messageReact – when a message is reacted to.
- attachmentClick – when an attachment is clicked.
- attachmentAdded – when an attachment is added.
- attachmentRemoved – when an attachment is removed.
- attachmentDrag – while dragging an attachment.
- attachmentDrop – when an attachment is dropped.
- typingChange – when typing status changes.
- inputFocus / inputBlur – input focus events.
- inputChange – when the input value changes.

You can listen for these events and sync them with your backend:

```html
<igx-chat
        [options]="options"
        [messages]="messages"
        (messageCreated)="onMessageCreated($event)">
</igx-chat>
```

<code-view style="height:900px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/chat-features-sample/" alt="Angular Chat Features">
</code-view>

<div class="divider--half"></div>

## Styling

The Chat component exposes both **CSS parts** and **slots** for fine-grained customization of its appearance and structure.

### CSS Parts

| Part name                       | Description                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| `chat-container`                | Styles the main chat container.                                                      |
| `header`                        | Styles the chat header container.                                                    |
| `prefix`                        | Styles the element before the chat title (e.g., avatar).                             |
| `title`                         | Styles the chat header title.                                                        |
| `message-area-container`        | Styles the container holding the messages and (optional) suggestions.                |
| `message-list`                  | Styles the message list container.                                                   |
| `message-item`                  | Styles each message wrapper.                                                         |
| `typing-indicator`              | Styles the typing indicator container.                                               |
| `typing-dot`                    | Styles individual typing indicator dots.                                             |
| `suggestions-container`         | Styles the container holding all suggestions.                                        |
| `suggestions-header`            | Styles the suggestions header.                                                       |
| `suggestion`                    | Styles each suggestion item.                                                         |
| `suggestion-prefix`             | Styles the icon or prefix in a suggestion.                                           |
| `suggestion-title`              | Styles the text/title of a suggestion.                                               |
| `empty-state`                   | Styles the empty state container when there are no messages.                         |
| `input-area-container`          | Styles the wrapper around the chat input area.                                       |
| `input-container`               | Styles the main input container.                                                     |
| `input-attachments-container`   | Styles the container for attachments in the input.                                   |
| `input-attachment-container`    | Styles a single attachment in the input area.                                        |
| `input-attachment-name`         | Styles the file name of an attachment.                                               |
| `input-attachment-icon`         | Styles the icon of an attachment.                                                    |
| `text-input`                    | Styles the text input field for typing messages.                                     |
| `input-actions-container`       | Styles the container for input actions.                                              |
| `input-actions-start`           | Styles the group of actions at the start of the input after the default file upload. |
| `input-actions-end`             | Styles the group of actions at the end of the input.                                 |
| `file-upload-container`         | Styles the container for the file upload input.                                      |
| `file-upload`                   | Styles the file upload input itself.                                                 |
| `send-button-container`         | Styles the container around the send button.                                         |
| `send-button`                   | Styles the send button.                                                              |
| `message-container`             | Styles the container of a single message.                                            |
| `message-list (forwarded)`      | Styles the internal list of messages.                                                |
| `message-header`                | Styles the header of a message (e.g., sender, timestamp).                            |
| `message-content`               | Styles the text content of a message.                                                |
| `message-attachments-container` | Styles the container for message attachments.                                        |
| `message-attachment`            | Styles a single message attachment.                                                  |
| `message-actions-container`     | Styles the container holding message actions.                                        |
| `message-sent`                  | Styles messages marked as sent by the current user.                                  |
| `attachment-header`             | Styles the header of an attachment block.                                            |
| `attachment-content`            | Styles the content of an attachment block.                                           |
| `attachment-icon`               | Styles the icon of an attachment.                                                    |
| `file-name`                     | Styles the file name shown in an attachment.                                         |

#### Example

```css
igc-chat::part(header) {
  background: var(--ig-primary-100);
}

igc-chat::part(message-container) {
  border-radius: 12px;
  padding: 0.5rem;
}

igc-chat::part(empty-state) {
  font-style: italic;
  color: var(--ig-gray-500);
}
```

This allows you to style the `Chat` to match your brand without replacing its functionality.

### Slots

| Slot name             | Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| `prefix`              | Slot for injecting content (e.g., avatar or icon) before the chat title. |
| `title`               | Slot for overriding the chat title content.                              |
| `actions`             | Slot for injecting header actions (e.g., buttons, menus).                |
| `suggestions-header`  | Slot for rendering a custom header for the suggestions list.             |
| `suggestions`         | Slot for rendering a custom list of quick reply suggestions.             |
| `suggestions-actions` | Slot for rendering additional actions.                                   |
| `suggestion`          | Slot for rendering a single suggestion item.                             |
| `empty-state`         | Slot shown when there are no messages.                                   |

These slots allow injecting custom UI into the header or suggestions area:

```html
<igx-chat>
  <span slot="actions">
    <button class="icon">⚙️</button>
  </span>
</igx-chat>
```

#### Root Style Adoption (adoptRootStyles)

The Chat component's options include a special flag for advanced styling scenarios:

| Option            | Type      | Default | Description        |
| ----------------- | --------- | ------- | ------------------ |
| `adoptRootStyles` | `boolean` | false   | When `true`, the component allows content rendered inside its Shadow DOM (e.g., from custom renderers) to inherit styles from the document's root. This provides a quick workaround for styling but is **not recommended** for production use. |

This property can be useful if you prefer not to deal with Shadow DOM encapsulation when applying global CSS to custom-rendered templates.
However, it comes with trade-offs:
- ✅ Convenience: Lets global styles (from the document) affect custom message renderers.
- ⚠️ Risky: Breaks encapsulation and can lead to style leakage, where global CSS unintentionally alters internal visuals.
- 🔒 One-time setting: This option can only be set at initialization. Changing it at runtime has no effect.

We highly recommend using the standard Web Component styling approaches before resorting to this property:
- CSS Variables and ::part API – Prefer customizing via exposed parts and variables.
- `<link>` elements – For larger stylesheets, inject them inside the Shadow DOM.
- Inline `<style>` tags – For small, scoped style overrides.

<code-view style="height:900px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/chat-styling-sample/" alt="Angular Chat Styling">
</code-view>

## API Reference

- [`IgxChatComponent`]({environment:angularApiUrl}/classes/igxchatcomponent.html)
- [`IgxChatOptions`]({environment:angularApiUrl}/classes/igxchatcomponent.html)
- [`IgxChatTemplates`]({environment:angularApiUrl}/classes/igxchatcomponent.html)
- [`Styling & Themes`](./themes/index.md)

## Additional Resources
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
