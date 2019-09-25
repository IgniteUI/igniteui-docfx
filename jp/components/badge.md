---
title: Badge コンポーネント
_description: Ignite UI for Angular の Badge コントロールは、アプリケーションでその他のコンポーネントを装飾するために定義済みスタイルでアクティブ カウントまたはアイコンを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Badge コンポーネント, Angular Badge コントロール
_language: ja
---

## Badge

<p class="highlight">Ignite UI for Angular の Badge はアプリケーションで視覚的な通知が必要なアバター、ナビゲーション メニュー、またはその他のコンポーネントをデコレートする絶対配置要素です。Badge は情報、成功、警告、またはエラーを示す定義済みのスタイルを持つアイコンとして設定できます。</p>
<div class="divider"></div>

### Badge デモ

<div class="sample-container loading" style="height:280px">
    <iframe id="badge-sample-iframe" src='{environment:demosBaseUrl}/data-display/badge-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="badge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、すべての必要な依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。[「**インストール**」](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation)のトピックで手順を参照できます。

### 使用方法

Ignite UI for Angular Badge を初期化する前に、`IgxBadgeModule` を **app.module.ts** ファイルにインポートします。

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

チャット クライアントのような連絡先リストを作成します。連絡先の名前を表示し、アバターおよび連絡先の現在状態 (オンライン、オフライン、退席中) を表示します。これを実装するために [`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) および [`igx-avatar`]({environment:angularApiUrl}/classes/igxavatarcomponent.html) コンポーネントを使用します。コンテナーのために [`igx-list`]({environment:angularApiUrl}/classes/igxlistcomponent.html) を使用します。

すべての必要なモジュールを含み、**app.module.ts** ファイルにインポートします。

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

構成の後、すべての連絡先を [**IgxList**](list.md) コンポーネントに表示します。リストはメンバー名および状態を表示します。

```html
<!-- contacts.component.html -->

<igx-list>
  <igx-list-item isHeader="true">
    Team Members (4)
  </igx-list-item>
  <igx-list-item *ngFor="let member of members">
    <div>
      <div>
        <span class="contact-name">{{ member.name }}</span>
        <span>({{ member.status }})</span>
      </div>
    </div>
  </igx-list-item>
</igx-list>
```

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

サンプルを正しく構成すると、メンバー名および状態を含むリストが表示されます。

<div class="sample-container loading" style="height: 280px">
    <iframe id="badge-sample-1-iframe" data-src='{environment:demosBaseUrl}/data-display/badge-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

各チャット メンバーの前にアバターを追加します。そのため、[**IgxAvatar**](avatar.md) を含む [`igx-list-item`]({environment:angularApiUrl}/classes/igxlistitemcomponent.html) に div 要素を追加します。リスト項目コンテンツを以下のように変更します。

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
      </div>
      <div style="margin-left: 20px; align-content: center;">
        <span class="contact-name">{{ member.name }}</span>
        <span>({{ member.status }})</span>
      </div>
    </div>
  </igx-list-item>
</igx-list>
```

<div class="sample-container loading" style="height: 280px">
<iframe id="badge-sample-2-iframe" data-src='{environment:demosBaseUrl}/data-display/badge-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

名前のみのリストはそれほど有用な情報を表示しません。最後に、[`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) を追加し、連絡先の状態通知を表示します。バッジ コンポーネントをアバター コンポーネントに追加し、[`igx-list-item`]({environment:angularApiUrl}/classes/igxlistitemcomponent.html) コンテンツを以下のコードのように変更します。

[`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) には、バッジの外観を構成するための [`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) および [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) 入力があります。[`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) を設定するには、名前を公式の[マテリアル アイコン セット](https://material.io/icons/)から提供します。バッジの [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) を [`default`]({environment:angularApiUrl}/enums/type.html#default)、[`info`]({environment:angularApiUrl}/enums/type.html#info)、[`success`]({environment:angularApiUrl}/enums/type.html#success)、[`warning`]({environment:angularApiUrl}/enums/type.html#warning)、または [`error`]({environment:angularApiUrl}/enums/type.html#error) に設定します。その型により、特定の背景色が適用されます。

このサンプルで、[`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) および [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) が *icon* および *type* のモデル プロパティにバインドされます。

バッジを親コンテナーに配置するには、*badge-style* のカスタム CSS クラスを作成し、bottom および right 位置を定義します。

```html
<!-- contacts.component.html -->

<igx-list>
  <igx-list-item isHeader="true">
    Team Members (4)
  </igx-list-item>
  <igx-list-item *ngFor="let member of members">
    <div class="wrapper">
      <div>
        <igx-avatar icon="person" roundShape="true" size="small">
          <igx-badge [icon]="member.icon" [type]="member.type" class="badge-style"></igx-badge>
        </igx-avatar>
      </div>
      <div style="margin-left: 20px; align-content: center;">
        <span class="contact-name">{{ member.name }}</span>
      </div>
    </div>
  </igx-list-item>
</igx-list>
```

```css
<!-- contacts.component.css -->

.badge-style
{
  position: absolute;
  bottom: -6px;
  right: -50px;
}
```

サンプルを正しく構成すると、メンバーのリストが表示され、各メンバーにアバターとその状態を示すバッジがあります。

<div class="sample-container loading" style="height: 280px">
    <iframe id="badge-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-display/badge-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>

### Styling

To get started with styling the badges, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-badge-theme`]({environment:sassApiUrl}/index.html#function-igx-badge-theme) and accepts the ` $icon-color`, `$text-color`, `$border-radius`, `$disable-border` and the `$shadow` parameters.

```scss
$color-1: #3d5770;
$color-2: rgb(119, 119, 119);
$color-3: rgb(16, 4, 51);

$elevations-color: igx-elevations($color-1, $color-2, $color-3);

$custom-theme: igx-badge-theme(
    $icon-color: white,
    $text-color: black,
    $border-radius: 20px,
    $disable-border: true,
    $shadow: igx-elevation($elevations-color, 5)
);
```

> [!NOTE]
> As we see the `$shadow` parameter accepts `igx-elevation`, which is of type box-shadow. In order to learn more about various options for IgniteUI Shadows, you can take a look at this [link](shadows.md).

The last step is to **include** the component mixins: 

```scss
@include igx-badge($custom-theme);
```

>[!NOTE]
 >If the component is using an [`Emulated`](./themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include igx-badge($custom-theme);
  }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$white-color: white;
$black-color: black;

$custom-palette: igx-palette(
    $primary: $white-color,
    $secondary: $black-color
);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-theme: igx-badge-theme(
    $icon-color: igx-color($custom-palette, "primary", 500),
    $text-color: igx-color($custom-palette, "secondary", 500),
    $border-radius: 20px,
    $disable-border: true,
    $shadow: igx-elevation($elevations-color, 5)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](./themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](./themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`_light-badge`]({environment:sassApiUrl}/index.html#variable-_light-badge):  

```scss
// Extending the light badge schema
$custom-badge-schema: extend($_light-badge,
    (   
        icon-color: (igx-color:('primary', 500)),
        text-color: (igx-color:('secondary', 500)),
        border-radius: 20px,
        elevation: 5
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-badge: $custom-badge-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-badge-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema,
  $elevations: $elevations-color
);
```
>[!NOTE]
>When `elevation` is set to a value different than 0 there are two possible scenarios for applying the shadow: <br>1) `$elevations` property of the theme is set => custom shadow is applied with `elevation` equal to the one set in the schema.<br>2) `$elevations` property of the theme is not set => the default shadow is applied with `elevation` equal to the one set in the schema.

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height:340px">
    <iframe id="badge-styling-sample-iframe" src='{environment:demosBaseUrl}/data-display/badge-styling-sample' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="badge-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxBadgeComponent]({environment:angularApiUrl}/classes/igxbadgecomponent.html)
* [IgxBadgeComponent Styles]({environment:sassApiUrl}/index.html#function-igx-badge-theme)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)
* [Type]({environment:angularApiUrl}/enums/type.html)

### 追加のリソース
<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

