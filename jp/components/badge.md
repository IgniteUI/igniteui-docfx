---
title: Badge コンポーネント
_description: Ignite UI for Angular の Badge コントロールは、アプリケーションでその他のコンポーネントを装飾するために定義済みスタイルでアクティブ カウントまたはアイコンを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Badge コンポーネント, Angular Badge コントロール
---

##Badge
<p class="highlight">Ignite UI for Angular の Badge はアプリケーションで視覚的な通知が必要なアバター、ナビゲーション メニュー、またはその他のコンポーネントをデコレートする絶対配置要素です。Badge は情報、成功、警告、またはエラーを示す定義済みのスタイルを持つアイコンとして設定できます。</p>
<div class="divider"></div>

### Badge デモ
<div class="sample-container loading" style="height:280px">
    <iframe id="badge-sample-iframe" src='{environment:demosBaseUrl}/data-display/badge-sample-3' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="badge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

### 使用方法
Badge を初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxBadgeModule` をインポートします。

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

すべての設定後、[`IgxListComponent`]({environment:angularApiUrl}/classes/igxlistcomponent.html) コンポーネントのすべての連絡先を表示しましょう。リストはメンバー名および状態を表示します。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                stackblitz で開く
    </button>
</div>

<div class="divider--half"></div>

各チャット メンバーの前にアバターを追加します。これには、[`IgxAvatarComponent`]({environment:angularApiUrl}/classes/igxavatarcomponent.html) を含む別の div 要素を [`igx-list-item`]({environment:angularApiUrl}/classes/igxlistitemcomponent.html) に配置します。リスト項目コンテンツを以下のように変更します。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                stackblitz で開く
    </button>
</div>

<div class="divider--half"></div>

名前のみのリストはそれほど有用な情報を表示しません。最後にリストアイテムのコンテンツを変更し、アバター コンポーネント内にバッジ コンポーネントを追加します。以下に示すようにリスト アイテムのコンテンツを変更し、アバター コンポーネント内にバッジ コンポーネントを追加します。

[`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) には、バッジの外観を構成するための [`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) 　および [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) 入力があることに注意してください。公式の[マテリアル アイコン セット](https://material.io/icons/)から名前を指定して、アイコンを設定できます。バッジタイプは、[`default`]({environment:angularApiUrl}/enums/type.html#default)、[`info`]({environment:angularApiUrl}/enums/type.html#info)、[`success`]({environment:angularApiUrl}/enums/type.html#success)、[`warning`]({environment:angularApiUrl}/enums/type.html#warning)、または [`error`]({environment:angularApiUrl}/enums/type.html#error) のいずれかに設定できます。その型により、特定の背景色が適用されます。

サンプルでは、[`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) and [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) が *icon* と *type* という名前のモデルプロパティにバインドされています。

親コンテナにバッジを配置するには、カスタム css クラス *badge-style* を作成し、上部と右側の位置を定義します。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                stackblitz で開く
    </button>
</div>

### スタイル設定

Badge のスタイル設定は、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単なアプローチに従って、[`igx-badge-theme`]({environment:sassApiUrl}/index.html#function-igx-badge-theme) を拡張し、` $icon-color`、`$text-color`、`$border-radius`、`$disable-border`、および `$shadow` パラメーターを受け入れる新しいテーマを作成します。

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
> ご覧のとおり、`$shadow` パラメーターは `igx-elevation` を受け取ります。Ignite UI シャドウのさまざまなオプションの詳細については、この[リンク](shadows.md)をご覧ください。

最後のステップは、それぞれのテーマを持つコンポーネント mixins を**含める**ことです。 

```scss
@include igx-badge($custom-theme);
```

>[!NOTE]
 >コンポーネントが [`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。

 ```scss
:host {
  ::ng-deep {
    @include igx-badge($custom-theme);
  }
}
```

#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$white-color: white;
$black-color: black;

$custom-palette: igx-palette(
    $primary: $white-color,
    $secondary: $black-color
);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。

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
>`Igx-color` と `igx-palette` は色の生成や取得のための関数です。使い方の詳細については [`Palettes`](./themes/palette.md) のトピックを参照してください。

#### スキーマの使用

テーマ エンジンを使用して [スキーマ](./themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ [`_light-badge`]({environment:sassApiUrl}/index.html#variable-_light-badge) の 1 つを拡張します。  

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

カスタム スキーマを適用するには、グローバル [`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネントテーマに追加するものです。

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
> `Elevation` が 0 以外の値に設定されている場合、シャドウを適用するための 2 つの方法があります。<br>1) テーマの `$elevations` プロパティが設定されていません => デフォルトのシャドウは、スキーマで設定されたものと同じ `elevation` で適用されます。2) テーマの `$elevations` プロパティが設定されていない => デフォルトのシャドウは、スキーマで設定されたものと同じ `elevation` で適用されます。

テーマを上記と同じ方法で含めることに注意してください。

#### デモ

<div class="sample-container loading" style="height:340px">
    <iframe id="badge-styling-sample-iframe" src='{environment:demosBaseUrl}/data-display/badge-styling-sample' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="badge-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxBadgeComponent]({environment:angularApiUrl}/classes/igxbadgecomponent.html)
* [IgxBadgeComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-badge-theme)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)
* [Type]({environment:angularApiUrl}/enums/type.html)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular) 
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular) 



