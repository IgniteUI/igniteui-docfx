---
title: Angular Chat | Ignite UI | インフラジスティックス
_description: Ignite UI for Angular Chat コンポーネントを使用すると、メッセージ、添付、候補、入力中インジケーター、カスタム テンプレートのサポートにより、インタラクティブなメッセージング エクスペリエンスを構築できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Chat コンポーネント, Angular Chat コントロール
mentionedTypes: ["Chat"]
_language: ja
---

# Angular Chat (チャット) の概要

Chat コンポーネントは、アプリケーションで会話型インターフェースを構築するための完全なソリューションを提供します。カスタマー サポート ツール、コラボレーション ワークスペース、チャットボット アシスタントなどを作成する場合でも、チャット コンポーネントは必要な機能を提供します: テキスト メッセージの送受信、ファイル添付のアップロード、クイック リプライサジェストの表示、他の参加者が入力中であることを示す入力中インジケーター。

Chat コンポーネントは静的なメッセージ リストではなく、**リアルタイム通信**を想定したインタラクティブな設計です。入力やレンダリング、ユーザー操作を管理しつつ、メッセージや添付の表示方法は完全にカスタマイズ可能です。また、レイアウトやビジュアルの任意部分をオーバーライドできる広範なレンダリング API も提供されています。

<code-view style="height:900px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/chat-overview-sample/" alt="Angular Chat の概要">
</code-view>

## インストール

はじめに、Ignite UI for Angular パッケージと、UI を提供する Ignite UI for Web Components パッケージをインストールします。

```cmd
npm install igniteui-angular igniteui-webcomponents
```

[`IgxChatComponent`]({environment:angularApiUrl}/classes/igxchatcomponent.html) は Angular のバインディング (イベント、テンプレート、DI、変更検出、パイプ) を提供し、視覚的なチャット UI は Web Components によってレンダリングされます。両方をインストールすることで、Angular でネイティブに動作するチャットを実現しつつ、Web Components の完全な UI を活用できます。

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックををご覧ください。

インストールが完了したら、プロジェクトにコンポーネントをインポートできます。

```ts
import { Component } from '@angular/core';
import { IgxChatComponent } from "igniteui-angular";

@Component({
  ...
})
export class AppComponent { ... }
```

## 使用方法
チャット オプションを定義し、テンプレートにバインドします。

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

ここで、`currentUserId` プロパティは、どのメッセージが「送信済み」 (現在のユーザー) で、どれ「受信済み」 (他のユーザー) かをコンポーネントに判定します。`headerText` はチャット ウィンドウのタイトルを提供します。

レンダリングされたら、バインドされたメッセージ配列を更新することで、プログラムでメッセージを追加できます。

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

この方法により、サーバー エンドポイント、チャットボット エンジン、コラボレーション アプリのバックエンドなど、任意のデータ ソースと簡単に統合できます。

### 入力
Chat コンポーネントは、その状態と構成を制御できるいくつかの重要なプロパティを公開します。

| 名前              | 説明                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `messages`        | チャットに表示されるメッセージ (`IgcChatMessage[]`) の配列。表示するメッセージを制御するためにバインド可能。                                                  |
| `draftMessage`    | 未送信メッセージ。`text` とオプションの `attachments` を含むオブジェクト。メッセージ下書きの保存や復元に便利。            |
| `options`         | 現在のユーザー ID、入力プレースホルダー、許可されるファイル タイプ、クイック リプライサジェスト、入力遅延、カスタム レンダラーなどのチャット設定 ([`IgxChatOptions`]({environment:angularApiUrl}/classes/igxchatoptions.html))。  |
| `templates` | メッセージ コンテンツ、入力、添付ファイル、その他のチャット UI 部分に対して、カスタム Angular テンプレート([`IgxChatTemplates`]({environment:angularApiUrl}/classes/igxchattemplates.html))。                                    |

上記のプロパティを使用することで、Chat の UI をアプリケーションの状態やバックエンドと簡単に同期させることができます。

### 添付
モダンな会話ではテキストだけに限られません。Chat コンポーネントはファイル添付機能のサポートが組み込まれており、ユーザーは画像、ドキュメント、その他のファイルを共有できます。
デフォルトでは入力領域に添付ボタンが表示されます。`acceptedFiles` プロパティで許可されるファイル タイプを制御可能です。

```ts
public options: IgxChatOptions = {
  acceptedFiles="image/*,.pdf",
};
```

この例では、ユーザーは画像と PDF ファイルのみをアップロードできます。
添付が不要なユースケースの場合は、簡単にオフにすることができます。

```ts
public options: IgxChatOptions = {
  disableInputAttachments: true,
};
```

### サジェスト
クイック リプライのサジェストは、ユーザーがすぐにタップして返信できる事前定義の応答を提供します。この機能は、チャットボットやカスタマー サービスのフロー、あるいはユーザーを構造化されたプロセスに案内する場合に特に有用です。
サジェストは、文字列の配列を suggestions プロパティにバインドすることで提供できます。`suggestionsPosition` プロパティを使用すると、表示位置を入力領域の下またはメッセージ リストの下に制御できます。

```ts
public options: IgxChatOptions = {
  currentUserId: "me",
  suggestions: ['Yes', 'No', 'Maybe later'],
  suggestionsPosition: "below-input"
};
```

この方法により、繰り返し入力する必要が減り、ガイド付きの会話でユーザー体験を向上させることができます。

### 入力中インジケーター
相手が入力中であることが見えると、会話はより自然に感じられます。Chat コンポーネントでは、オプション オブジェクトの `isTyping` プロパティを通じてこの動作を提供します。
true に設定すると、メッセージ下にさりげない入力中インジケーターが表示されます。

```ts
public options: IgxChatOptions = {
  isTyping: true
};
```

この機能は通常、バックエンド サービスからの入力イベントを受け取ったときなど、プログラムで切り替えます。

### カスタム テンプレート
Chat コンポーネントはデフォルトの UI ですぐに使用できますが、多くのアプリケーションでは外観と操作性をカスタマイズする必要があります。たとえば、既読通知を追加したり、アバターを表示したり、入力領域を音声録音ボタンに置き換えたりする場合です。
Chat コンポーネントは、このニーズに対して Angular テンプレートを使用して対応します。テンプレートは `templates` 入力プロパティ経由で提供され、強く型付けされた Angular ディレクティブを使用します。

#### 利用可能なテンプレート
Chat のカスタマイズ可能な部分は次の通りです:
- Message レベル: message、messageHeader、messageContent、messageAttachments、messageActions
- Attachment レベル: attachment、attachmentHeader、attachmentContent
- Input レベル: input、inputActions、inputActionsStart、inputActionsEnd、inputAttachments、fileUploadButton、sendButton
- Suggestion: suggestionPrefix
- その他: TypingIndicator

この粒度により、添付の表示方法など、特定の部分だけを変更してもチャット全体のレイアウトを書き換える必要はありません。

#### メッセージ内容のカスタマイズ

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

上記の例では:
- `let-message` はメッセージ オブジェクトを公開します。
- [`igxChatMessageContext`]({environment:angularApiUrl}/classes/igxchatmessagecontextdirective.html) ディレクティブは、メッセージ テンプレートの適切な入力を保証します。

#### 入力領域のカスタマイズ
デフォルトでは、チャット入力はテキスト領域です。音声入力ボタンなど、より適した体験を提供するためにオーバーライドできます。

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

#### 入力アクションの拡張
Chat コンポーネントには、デフォルトのアクション (アップロードと送信) を保持しつつ追加のコントロールを拡張できるテンプレートがあります:
- `inputActionsStart` - デフォルトのアップロード ボタンの後にカスタム コンテンツを挿入可能
- `inputActionsEnd` - デフォルトの送信ボタンの後にカスタム コンテンツを挿入可能

例えば、アップロード ボタンの横に音声録音ボタンを追加したり、送信ボタンの後に追加オプション メニューを追加したりできます。
次の例では、デフォルトのアップロード ボタンはそのままですが、その隣にマイク ボタンが追加されています。一方、デフォルトの送信ボタンを削除し、カスタムの「質問」ボタンと「その他」メニューに置き換えます。

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

この設定では:
- アップロード ボタンはそのまま残ります。
- その後にマイク ボタンが追加されます (inputActionsStart)。
- デフォルトの送信ボタンが削除され、カスタムの「質問」ボタンと「その他」アイコン (inputActionsEnd) に置き換えられました。

この方法により、チャット入力バーの柔軟性が完全に向上し、入力領域を最初から再構築することなく、アクションを追加、削除、または並べ替えることができます。

### Markdown のサポート
Chat コンポーネントには、[`fromMarkdown`]({environment:angularApiUrl}/classes/igxchatcomponent.html) パイプによる Markdown コンテンツの組み込みサポートがあり、メッセージ テキストを安全な HTML に変換します。これにより、書式付きテキスト、リンク、リスト、シンタックス ハイライト付きコードブロックを表示しつつ、安全に HTML をサニタイズできます。

Markdown のレンダリングはパフォーマンス上の理由から非同期で実行されるため、`fromMarkdown` パイプは Angular の `async` パイプと組み合わせて使用する必要があります。

例 - テンプレート内で Markdown をレンダリングする場合:

```html
<ng-template #messageContent let-message igxChatMessageContext>
    <div [innerHTML]="message.text | fromMarkdown | async"></div>
</ng-template>
```

例:
- 各メッセージの text プロパティが [marked](https://github.com/markedjs/marked) ライブラリを使用して Markdown として解析されます。
- レンダラーは [DOMPurify](https://github.com/cure53/DOMPurify) を使用して出力をサニタイズします。
- リンクは自動的に新しいタブで開き、安全な rel 属性が付与されます。

#### 構文のハイライト表示
`fromMarkdown` パイプはコード ブロックのシンタックス ハイライトにも対応しています。メッセージにフェンス付きコード (```js...```) が含まれている場合、VS Code でも使用されている高精度ハイライター [Shiki](https://shiki.matsu.io/) を使用してレンダリングされます。デフォルトでは JavaScript、TypeScript、HTML、CSS に対して github-light テーマでハイライト表示されます。

例 - メッセージに次の内容が含まれている場合:

```markdown
Here is a JavaScript example:
\`\`\`ts
function greet(name: string) {
  return `Hello, ${name}!`;
}
\`\`\`
```

チャット メッセージ内の出力は次のように表示されます。
- 自動的な構文のハイライト
- テーマ対応のスタイル (github-light / github-dark)
- 適切なインデントと等幅フォント
- 追加の設定は不要で、既定のテーマは自動的に読み込まれます。

### 出力 (イベント)
アプリケーション ロジックと統合するために、Chat コンポーネントは一連のイベントを発行します。
- messageCreated - 新しいメッセージ作成時
- messageReact - メッセージにリアクションした時
- attachmentClick - 添付クリック時
- attachmentAdded - 添付が追加された時
- attachmentRemoved - 添付が削除された時
- attachmentDrag - 添付ドラッグ中
- attachmentDrop - 添付ドロップ時
- typingChange - 入力状態変更時
- inputFocus / inputBlur - 入力フォーカス イベント
- inputChange - 入力値変更時

これらのイベントをリッスンし、バックエンドと同期することができます。

```html
<igx-chat
        [options]="options"
        [messages]="messages"
        (messageCreated)="onMessageCreated($event)">
</igx-chat>
```

<code-view style="height:900px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/chat-features-sample/" alt="Angular Chat の機能">
</code-view>

<div class="divider--half"></div>

## スタイル設定

Chat コンポーネントは、外観や構造を詳細にカスタマイズできる **CSS パーツ**と**スロット**を提供します。

### CSS パーツ

| パーツ名                           | 説明                                                    |
|---------------------------------|-------------------------------------------------------|
| `chat-container`                | メイン チャット コンテナーのスタイルを設定します。                            |
| `header`                        | チャット ヘッダー コンテナーのスタイルを設定します。                           |
| `prefix`                        | チャット タイトルの前の要素 (アバターなど) のスタイルを設定します。               |
| `title`                         | チャット ヘッダー タイトルのスタイルを設定します。                            |
| `message-area-container`        | メッセージと (オプションの) サジェストを保持するコンテナーのスタイルを設定します。         |
| `message-list`                  | メッセージ リスト コンテナーのスタイルを設定します。                           |
| `message-item`                  | 各メッセージ ラッパーのスタイルを設定します。                              |
| `typing-indicator`              | 入力インジケーター コンテナーのスタイルを設定します。                         |
| `typing-dot`                    | 個々の入力中インジケーターのドットをスタイルします。                          |
| `suggestions-container`         | すべてのサジェストを保持するコンテナーのスタイルを設定します。                     |
| `suggestions-header`            | サジェスト ヘッダーのスタイルを設定します。                                |
| `suggestion`                    | 各サジェスト項目にスタイルを設定します。                               |
| `suggestion-prefix`             | サジェスト内のアイコンまたはプレフィックスのスタイルを設定します。                    |
| `suggestion-title`              | サジェストのテキスト/タイトルのスタイルを設定します。                           |
| `empty-state`                   | メッセージがない場合の空の状態のコンテナーのスタイルを設定します。                |
| `input-area-container`          | チャット入力領域のラッパーのスタイルを設定します。                         |
| `input-container`               | メイン入力コンテナーのスタイルを設定します。                              |
| `input-attachments-container`   | 入力内の添付のコンテナーのスタイルを設定します。                         |
| `input-attachment-container`    | 入力領域内の単一の添付にスタイルを設定します。                      |
| `input-attachment-name`         | 添付のファイル名のスタイルを設定します。                               |
| `input-attachment-icon`         | 添付のアイコンのスタイルを設定します。                                 |
| `text-input`                    | メッセージを入力するためのテキスト入力フィールドのスタイルを設定します。              |
| `input-actions-container`       | 入力アクション用のコンテナーのスタイルを設定します。                         |
| `input-actions-start`           | デフォルトのファイル アップロード後、入力の先頭にあるアクション グループをスタイル設定します。 |
| `input-actions-end`             | 入力の末尾にあるアクション グループをスタイル設定します。                     |
| `file-upload-container`         | ファイル アップロード入力用のコンテナーのスタイルを設定します。                   |
| `file-upload`                   | ファイル アップロード入力自体のスタイルを設定します。                       |
| `send-button-container`         | 送信ボタンの周囲のコンテナーのスタイルを設定します。                        |
| `send-button`                   | 送信ボタンのスタイルを設定します。                                   |
| `message-container`             | 単一メッセージのコンテナーをスタイルします。                                |
| `message-list (forwarded)`      | メッセージの内部リストのスタイルを設定します。                             |
| `message-header`                | メッセージのヘッダー (送信者、タイムスタンプなど) のスタイルを設定します。            |
| `message-content`               | メッセージのテキスト コンテンツのスタイルを設定します。                          |
| `message-attachments-container` | メッセージ添付のコンテナーのスタイルを設定します。                           |
| `message-attachment`            | 単一のメッセージ添付にスタイルを設定します。                            |
| `message-actions-container`     | メッセージ アクションを保持するコンテナーのスタイルを設定します。                   |
| `message-sent`                  | 現在のユーザーによって送信済みとしてマークされたメッセージにスタイルを設定します。        |
| `attachment-header`             | 添付ブロックのヘッダーにスタイルを設定します。                             |
| `attachment-content`            | 添付ブロックのコンテンツにスタイルを設定します。                            |
| `attachment-icon`               | 添付のアイコンのスタイルを設定します。                                 |
| `file-name`                     | 添付に表示されるファイル名のスタイルを指定します。                        |

#### 例

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

これにより、`Chat` の機能を置き換えることなく、ブランドに合わせたスタイルを適用できます。

### スロット

| スロット名                | 説明                                             |
|-----------------------|--------------------------------------------------|
| `prefix`              | チャット タイトルの前にコンテンツ (アバターやアイコンなど) を挿入するためのスロット。 |
| `title`               | チャット タイトルの内容をオーバーライドするためのスロット。                 |
| `actions`             | ヘッダー アクション (ボタン、メニューなど) を挿入するためのスロット。          |
| `suggestions-header`  | サジェスト リストのカスタム ヘッダーをレンダリングするためのスロット。             |
| `suggestions`         | クイック リプライのサジェストのカスタム リストをレンダリングするためのスロット。        |
| `suggestions-actions` | 追加のアクションをレンダリングするためのスロット。                      |
| `suggestion`          | 単一のサジェスト項目をレンダリングするためのスロット。                  |
| `empty-state`         | メッセージがない場合に表示されるスロット。                        |

これらのスロットを使用すると、ヘッダーまたは提案領域にカスタム UI を挿入できます。

```html
<igx-chat>
  <span slot="actions">
    <button class="icon">⚙️</button>
  </span>
</igx-chat>
```

#### ルート スタイルの採用 (adoptRootStyles)

Chat コンポーネントのオプションには、高度なスタイル設定シナリオ用の特別なフラグが含まれています。

| オプション             | タイプ       | デフォルト | 説明        |
| ----------------- | --------- | ------- | ------------------ |
| `adoptRootStyles` | `boolean` | false   | `true` の場合、コンポーネントは、Shadow DOM 内でレンダリングされるコンテンツ (カスタム レンダラーなど) がドキュメントのルートからスタイルを継承することを許可します。これは、スタイル設定のための簡単な回避策を提供しますが、本番環境での使用は**推奨されません**。 |

このプロパティは、カスタム レンダリングされたテンプレートにグローバル CSS を適用するときに Shadow DOM カプセル化を処理したくない場合に役立ちます。
ただし、以下のトレードオフがあります:
- ✅ 利便性: ドキュメントのグローバル スタイルがカスタム メッセージ レンダラーに適用されます。
- ⚠️ 危険: カプセル化が破られ、グローバル CSS によって内部の表示が意図せず変更される可能性があります。
- 🔒 1 回限りの設定: このオプションは初期化時にのみ設定できます。実行時に変更しても反映されません。

このプロパティに使用する前に、標準の Web Component スタイル設定アプローチを使用することを強くお勧めします。
- CSS 変数と ::part API - 公開されたパーツと変数を使用したカスタマイズを優先します。
- `<link>` 要素 – 大きなスタイルシートの場合は、Shadow DOM 内に挿入します。
- インライン `<style>` タグ – 小さなスコープのスタイル オーバーライド用。

<code-view style="height:900px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/chat-styling-sample/" alt="Angular Chat のスタイル設定">
</code-view>

## API リファレンス

- [`IgxChatComponent`]({environment:angularApiUrl}/classes/igxchatcomponent.html)
- [`IgxChatOptions`]({environment:angularApiUrl}/classes/igxchatoptions.html)
- [`IgxChatTemplates`]({environment:angularApiUrl}/classes/igxchattemplates.html)
- [`IgxChatMessageContextDirective`]({environment:angularApiUrl}/classes/igxchatmessagecontextdirective.html)
- [`IgxChatInputContextDirective`]({environment:angularApiUrl}/classes/igxchatinputcontextdirective.html)
- [`IgxChatAttachmentContextDirective`]({environment:angularApiUrl}/classes/igxchatattachmentcontextdirective.html)
- [スタイル設定およびテーマ](./themes/index.md)

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
