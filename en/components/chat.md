---
title: Angular Chat | Ignite UI | Infragistics
_description: With the Ignite UI for Angular Chat component, you can build interactive messaging experiences with support for messages, attachments, suggestions, typing indicators, and custom templates.  
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chat components, Angular Chat controls  
mentionedTypes: ["Chat"]  
---

# Angular Chat Overview

The Chat component provides a complete solution for building conversational interfaces in your applications. Whether you are creating a customer support tool, a collaborative workspace, or a chatbot assistant, the Chat component gives you the building blocks you need: sending and receiving text messages, uploading file attachments, displaying quick reply suggestions, showing typing indicators when the other participant is writing a response.

Unlike a static message list, the `Chat` component is interactive and designed for **real-time communication**. It manages input, rendering, and user interaction while giving you full control over how messages and attachments are displayed. It also exposes an extensive rendering API that lets you override any part of its layout or visuals.

`sample="/interactions/chat/overview", height="900", alt="Angular Chat Overview Example"`

## Installation

To get started, install Ignite UI for Angular by running the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

Once installed, you can import the component in your project. You need to also include the `CUSTOM_ELEMENTS_SCHEMA` schema in its configuration to enable Web Component interoperability:
```ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgxChatComponent } from "igniteui-angular";

@Component({
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent { ... }
```

## Usage
Define the chat options and bind them in your template:
```ts
import { IgxChatComponent, NgChatOptions } from "igniteui-angular";

public options: NgChatOptions = {
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
The `Chat` component exposes several key properties that let you control its state and configuration:

| Name              | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `messages`        | Array of messages (`IgcChatMessage[]`) displayed in the chat. You can bind to this to control which messages are shown.                                                  |
| `draftMessage`    | The current unsent message, represented as an object containing `text` and optional `attachments`. This is useful for saving or restoring message drafts.            |
| `options`         | Chat configuration (`NgChatOptions`) such as current user ID, input placeholders, accepted file types, quick reply suggestions and typing behavior. |
| `templates` | Custom Angular templates (`NgChatTemplates`) for message content, input, attachments, and other parts of the chat UI.                                   |

These properties make it straightforward to synchronize the Chat’s UI with your application’s state and backend.

### Attachments
Modern conversations are rarely limited to text alone. The Chat component includes built-in support for file attachments, allowing users to share images, documents, and other files.
By default, the input area includes an attachment button. You can control which file types are allowed by setting the `acceptedFiles` property:

```ts
public options: NgChatOptions = {
  acceptedFiles="image/*,.pdf",
};
```
In this example, users will only be able to upload images and PDF files.
If your use case does not require attachments, you can easily turn them off:
```ts
public options: NgChatOptions = {
  disableInputAttachments: true,
};
```

### Suggestions
Quick reply suggestions provide users with pre-defined responses they can tap to reply instantly. This feature is particularly useful in chatbots, customer service flows, or when guiding users through a structured process.
You can provide suggestions by binding an array of strings to the suggestions property. The `suggestions-position` attribute lets you control where they are displayed: either below the input area or below the messages list.
```ts
public options: NgChatOptions = {
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
public options: NgChatOptions = {
  isTyping: true
};
```
This feature is typically toggled programmatically, for example when receiving a typing event from your backend service.

### Custom Templates
While the Chat component works out of the box with its default UI, many applications need to customize the look and feel. For example, you might want to add read receipts, display avatars, or replace the input area with a voice recording button.
The `Chat` component addresses this need using Angular templates. Templates are provided via the `templates` input and use strongly typed Angular directives.                   |

#### Available Templates
The following parts of the Chat can be customized:
- Message-level: message, messageHeader, messageContent, messageAttachments, messageActions
- Attachment-level: attachment, attachmentHeader, attachmentContent
- Input-level: input, inputActions, inputActionsStart, inputActionsEnd, inputAttachments, fileUploadButton, sendButton
- Suggestions: suggestionPrefix
- Miscellaneous: typingIndicator

This level of granularity means you can tweak just one part (for example, how attachments look) without rewriting the entire chat layout.

#### Example: Custom Message Content

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
- let-message exposes the message object.
- The igxChatMessageContext directive ensures proper typing for message templates.

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
The `Chat` component provides two templates which are useful when you want to keep the default actions (upload and send) but extend them with additional controls:
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

### Markdown Rendering
The Chat component includes built-in support for Markdown content through the `createMarkdownRenderer` helper, which is exported from the `igniteui-webcomponents/extras` entry point of the `igniteui-webcomponents` package. This allows you to display messages with formatted text, links, lists, and even syntax-highlighted code blocks, while ensuring that all rendered HTML is sanitized for security.

> [!Note]
> To use the Markdown renderer, you need to install the following peer dependencies in your project:
```cmd
npm install marked marked-shiki shiki dompurify
```
By default, messages are rendered as plain text. If you want to enable Markdown support, you can override the messageContent renderer and use the Markdown renderer as shown below:
```ts
import { createMarkdownRenderer } from 'igniteui-webcomponents/extras';

// Create a reusable Markdown renderer instance
const markdownRenderer = await createMarkdownRenderer();

public templates = {
    messageContent: async ({ message }) => markdownRenderer(message),
};
```
In this example:
- Each message’s text property will be parsed as Markdown using the [marked](https://github.com/markedjs/marked) library.
- The renderer sanitizes the output using [DOMPurify](https://github.com/cure53/DOMPurify)
- Links automatically open in a new tab with safe rel attributes.

#### Syntax Highlighting

The Markdown renderer also supports syntax highlighting for code blocks using [Shiki](https://shiki.matsu.io/). By default, it includes highlighting for JavaScript, TypeScript, HTML, and CSS with the github-light theme. You can customize this behavior through MarkdownRendererOptions:
```ts
const markdownRenderer = await createMarkdownRenderer({
  theme: { light: 'min-light' },
  languages: ['javascript', 'python']
});
```
This will enable highlighted code blocks for JavaScript, Python, and Go, styled with the GitHub dark theme.
#### Configuration Options
| Option          | Description                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| `noHighlighter` | If `true`, disables syntax highlighting entirely.                               |
| `languages`     | List of programming languages to support in highlighted code blocks.            |
| `theme`         | An object specifying Shiki themes to apply. Supports separate values for `light` and `dark` mode (e.g., `{ light: 'github-light', dark: 'github-dark' }`). |
| `sanitizer`     | A custom function to sanitize the final HTML. Defaults to `DOMPurify.sanitize`. |

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
- igcInputFocus / igcInputBlur – input focus events.
- inputChange – when the input value changes.

You can listen for these events and sync them with your backend:
```html
<igx-chat
        [options]="options"
        [messages]="messages"
        (messageCreated)="onMessageCreated($event)">
</igx-chat>
```

`sample="/interactions/chat/features", height="900", alt="Web Components Chat Features"`

## Styling

The `Chat` component exposes both **CSS parts** and **slots** for fine-grained customization of its appearance and structure.

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

`sample="/interactions/chat/styling", height="900", alt="Web Components Chat Styling Example"`

## API Reference

- `Chat`
- `NgChatOptions`
- `NgChatTemplates`
- `ChatMessage`
- `ChatMessageAttachment`
- [`Styling & Themes`](./themes/index.md)

## Additional Resources
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
