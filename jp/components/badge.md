---
title: Badge コンポーネント
_description: Ignite UI for Angular の Badge コントロールは、アプリケーションでその他のコンポーネントを装飾するために定義済みスタイルでアクティブ カウントまたはアイコンを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Badge コンポーネント, Angular Badge コントロール
_language: ja
---

## Badge
<p class="highlight">Ignite UI Badge は、視覚的な通知が必要な場合にアプリケーションでアバター、ナビゲーション メニュー、またはその他のコンポーネントと共に使用されるコンポーネントです。バッジは情報、成功、警告、またはエラーを表示するために定義済みのスタイルを持つアイコンとしてデザインされます。</p>
<div class="divider"></div>

### デモ
<div class="sample-container loading" style="height:100px">
    <iframe id="badge-sample-2-iframe" src='{environment:demosBaseUrl}/data-display/badge-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="badge-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="badge-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法
Badge コンポーネントを初期化する前に、`IgxBadgeModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxBadgeModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxBadgeModule],
    ...
})
export class AppModule {}
```

デモ サンプルの実行方法を見てみましょう。アバターのシンプルな success スタイルのバッジです。これを構築するためには、`IgxBadgeModule` とともに `IgxAvatarModule` をインポートする必要があります。

```typescript
// app.module.ts
...
import {
  IgxBadgeModule,
  IgxAvatarModule
} from 'igniteui-angular';

@NgModule({
  ...
  imports: [..., IgxBadgeModule, IgxAvatarModule],
  ...
})

export class AppModule {}
```

次に、これらのコンポーネントをテンプレートに追加します。

```html
<div class="wrapper">
    <igx-avatar icon="person" roundShape="true" size="small"></igx-avatar>
    <igx-badge icon="check" type="success"></igx-badge>
</div>
```

ラッパーを使用して、バッジを絶対的に配置し、アバターの一部をカバーします。

```scss
.wrapper {
  position: relative;
  margin-top: 15px;
}

igx-badge {
  position: absolute;
  bottom: 0;
  left: 28px;
}
```

すべて適切に設定すると、ブラウザ上でデモサンプルを確認することができます。

#### リストのバッジ

チャット クライアントのような連絡先リストを作成します。連絡先の名前を表示し、アバターおよび連絡先の現在状態 (オンライン、オフライン、退席中) を表示します。これを達成するには、[`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) および [`igx-avatar`]({environment:angularApiUrl}/classes/igxavatarcomponent.html) コンポーネントを使用します。コンテナの場合、[`igx-list`]({environment:angularApiUrl}/classes/igxlistcomponent.html) が使用されます。

続行するには、必要なすべてのモジュールを含めて、**app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import {
    IgxListModule,
    IgxAvatarModule,
    IgxBadgeModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxListModule, IgxAvatarModule, IgxBadgeModule],
})
export class AppModule {}
```

>[!NOTE]
>[`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) には、バッジの外観を構成するための [`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) および [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) 入力があります。公式の[マテリアル アイコン セット](https://material.io/icons/)から名前を指定して、アイコンを設定できます。バッジタイプは、[`default`]({environment:angularApiUrl}/enums/type.html#default)、[`info`]({environment:angularApiUrl}/enums/type.html#info)、[`success`]({environment:angularApiUrl}/enums/type.html#success)、[`warning`]({environment:angularApiUrl}/enums/type.html#warning)、または [`error`]({environment:angularApiUrl}/enums/type.html#error) のいずれかに設定できます。その型により、特定の背景色が適用されます。

サンプルでは、[`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) と [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) が icon と type という名前のモデルプロパティにバインドされています。

次に、テンプレートに連絡先を追加します。

```html
<!-- contacts.component.html -->

<igx-list>
  <igx-list-item isHeader="true">
    Team Members (4)
  </igx-list-item>
  <igx-list-item *ngFor="let member of members">
    <div class="wrapper">
      <div>
        <igx-avatar icon="person" roundShape="true" size="small"></igx-avatar>
        <igx-badge [icon]="member.icon" [type]="member.type" class="badge-style"></igx-badge>
      </div>
      <div class="contact-container">
        <span class="contact-name">{{ member.name }}</span>
      </div>
    </div>
  </igx-list-item>
</igx-list>
```

以下のように typescript ファイルにメンバーを作成します。

```typescript
// contacts.component.ts

...
 public members: Member[] = [
    new Member("Terrance Orta", "online"),
    new Member("Donna Price", "online"),
    new Member("Lisa Landers", "away"),
    new Member("Dorothy H. Spencer", "offline"),
  ];

```

```typescript

...
class Member {
    public name: string;
    public status: string;
    public type: string;
    public icon: string;

    constructor(name: string, status: string) {
        this.name = name;
        this.status = status;
        switch (status) {
            case "online":
                this.type = "success";
                this.icon = "check";
                break;
            case "away":
                this.type = "warning";
                this.icon = "schedule";
                break;
            case "offline":
                this.type = "error";
                this.icon = "remove";
                break;
        }
    }
}
```

親コンテナーにバッジを配置します。

```css
/* contacts.component.css */

.wrapper {
    display: flex;
    flex-direction: row;
}

.contact-name {
    font-weight: 600;
}

.contact-container {
    margin-left: 20px;
}

.badge-style {
  position: absolute;
  bottom: 2.5px;
  left: 40px;
}

```

サンプルを正しく構成すると、アバターと、その状態を示すバッジとともにメンバーのリストが表示されます。

<div class="sample-container loading" style="height: 280px">
    <iframe id="badge-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-display/badge-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="badge-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="badge-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

### スタイル設定

Badge のスタイル設定は、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法は、[`igx-badge-theme`]({environment:sassApiUrl}/index.html#function-igx-badge-theme) を拡張する新しいテーマを作成し、バッジの項目をスタイル設定するいくつかのパラメーターを受け取る方法です。

```scss
$custom-badge-theme: igx-badge-theme(
    $border-color: white,
    $border-width: 1px,
    $icon-color: white,
    $text-color: black,
    $shadow: 3px 2px 5px 0px rgba(0,0,0,0.4)
);
```

#### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマをアプリケーションに含めます。

`$legacy-support` が `true` に設定されている場合、**コンポーネントのテーマ**を以下のように含めます。

```scss
 @include igx-badge($custom-badge-theme);
```
>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-badge($custom-badge-theme);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include igx-css-vars($custom-badge-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合においても、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include igx-css-vars($custom-badge-theme);
}
```

テーマを上記と同じ方法で含めることに注意してください。

#### デモ

<div class="sample-container loading" style="height:340px">
    <iframe id="badge-styling-sample-iframe" src='{environment:demosBaseUrl}/data-display/badge-styling-sample' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="badge-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="badge-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxBadgeComponent]({environment:angularApiUrl}/classes/igxbadgecomponent.html)
* [IgxBadgeComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-badge-theme)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)
* [IgxBadgeType]({environment:angularApiUrl}/enums/igxbadgetype.html)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular) 
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular) 

