---
title: Angular Badge コンポーネント
_description: Ignite UI for Angular の Badge コントロールは、アプリケーションでその他のコンポーネントを装飾するために定義済みスタイルでアクティブ カウントまたはアイコンを表示します。
_keywords: Angular Badge コンポーネント, Angular Badge コントロール, Ignite UI for Angular, Angular UI コンポーネント
_license: MIT
_language: ja
---

# Angular Badge (バッジ) コンポーネントの概要
<p class="highlight">Angular Badge は、視覚的な通知が必要な場合にアプリケーションでアバター、ナビゲーション メニュー、またはその他のコンポーネントと共に使用されるコンポーネントです。バッジは情報、成功、警告、またはエラーを表示するために定義済みのスタイルを持つアイコンとしてデザインされます。</p>
<div class="divider"></div>

## Angular Badge の例

<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/badge-sample-2/" alt="Angular Badge の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Badge を使用した作業の開始

Ignite UI for Angular Badge コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxBadgeModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxBadgeModule } from 'igniteui-angular';
// import { IgxBadgeModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxBadgeModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxBadgeComponent` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

...
import { IgxBadgeComponent } from 'igniteui-angular';
// import { IgxBadgeComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-badge icon="check" type="success" shape="square"></igx-badge>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxBadgeComponent]
})
export class HomeComponent {}
```

Ignite UI for Angular Badge モジュールまたはコンポーネントをインポートしたので、`igx-badge` コンポーネントの基本構成を開始できます。

## Angular Badge コンポーネントの使用
デモ サンプルの実行方法を見てみましょう。アバターのシンプルな success スタイルのバッジです。これを構築するためには、`IgxBadgeModule` とともに `IgxAvatarModule` をインポートする必要があります。

```typescript
// app.module.ts
...
import { IgxBadgeModule, IgxAvatarModule } from 'igniteui-angular';
// import {  IgxBadgeModule, IgxAvatarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
  ...
  imports: [..., IgxBadgeModule, IgxAvatarModule],
  ...
})

export class AppModule {}
```

*あるいは、`16.0.0` 以降、`IgxBadgeComponent` と `IgxAvatarComponent` をスタンドアロンの依存関係としてインポートできます。*

次に、これらのコンポーネントをテンプレートに追加します。

```html
<div class="wrapper">
    <igx-avatar icon="person" shape="circle" size="small"></igx-avatar>
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

### バッジの形状

`shape` 属性の値を `square` に設定することで、バッジの形状を変更できます。デフォルトでは、バッジの形状は `rounded` です。

```html
<igx-badge icon="check" type="success" shape="square"></igx-badge>
```

すべて適切に設定すると、ブラウザ上で以上のデモ サンプルを確認することができます。

### バッジのサイズ

バッジのサイズは `--size` 変数を使用して制御できます。これにより、バッジのサイズが両方向に比例して調整されます。ただし、テキスト値を含むバッジでは、フォント サイズと行の高さに `caption` タイポグラフィ スタイルが使用されることに注意してください。そのため、テキストを含むバッジの `--size` を 16 px 未満の値に設定する場合は、そのタイポグラフィも変更する必要があります。

Example:
```scss
igx-badge {
  --size: 12px;

  font-size: calc(var(--size) / 2);
  line-height: normal;
}
```

### バッジのアイコン

`igx-badge` コンポーネントは、マテリアル アイコンに加えて[マテリアル アイコン拡張](../components/material-icons-extended.md)およびその他のカスタム アイコン セットの使用もサポートしています。マテリアル アイコン拡張セットからバッジ コンポーネントにアイコンを追加するには、まずそのアイコンを登録する必要があります。

```ts
export class BadgeIconComponent implements OnInit { 
    constructor (protected _iconService: IgxIconService) {}

    public ngOnInit() {
        this._iconService.addSvgIconFromText(heartMonitor.name, heartMonitor.value, 'imx-icons');
    }
}
```

そうすると、次のようにアイコン名とファミリを指定すればよいです。

```html 
<igx-badge icon="heart-monitor" iconSet="imx-icons"></igx-badge>
```

<code-view style="height: 100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/badge-icon/" >
</code-view>

### リストのバッジ

チャット クライアントのような連絡先リストを作成します。連絡先の名前を表示し、アバターおよび連絡先の現在状態 (オンライン、オフライン、退席中) を表示します。これを達成するには、[`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) および [`igx-avatar`]({environment:angularApiUrl}/classes/igxavatarcomponent.html) コンポーネントを使用します。コンテナーの場合、[`igx-list`]({environment:angularApiUrl}/classes/igxlistcomponent.html) が使用されます。

続行するには、必要なすべてのモジュールを含めて、**app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import {
    IgxListModule,
    IgxAvatarModule,
    IgxBadgeModule
} from 'igniteui-angular';
// import { IgxListModule, IgxAvatarModule, IgxBadgeModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxListModule, IgxAvatarModule, IgxBadgeModule],
})
export class AppModule {}
```

>[!NOTE]
>[`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) には、バッジの外観を構成するための [`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) および [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) 入力があります。公式の[マテリアル アイコン セット](https://material.io/icons/)から名前を指定して、アイコンを設定できます。バッジタイプは、[`default`]({environment:angularApiUrl}/enums/type.html#default)、[`info`]({environment:angularApiUrl}/enums/type.html#info)、[`success`]({environment:angularApiUrl}/enums/type.html#success)、[`warning`]({environment:angularApiUrl}/enums/type.html#warning)、または [`error`]({environment:angularApiUrl}/enums/type.html#error) のいずれかに設定できます。その型により、特定の背景の色が適用されます。

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
        <igx-avatar icon="person" shape="circle" size="small"></igx-avatar>
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
    new Member('Terrance Orta', 'online'),
    new Member('Donna Price', 'online'),
    new Member('Lisa Landers', 'away'),
    new Member('Dorothy H. Spencer', 'offline'),
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
            case 'online':
                this.type = 'success';
                this.icon = 'check';
                break;
            case 'away':
                this.type = 'warning';
                this.icon = 'schedule';
                break;
            case 'offline':
                this.type = 'error';
                this.icon = 'remove';
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

<code-view style="height: 280px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/badge-sample-3/" >
</code-view>

## スタイル設定

### Badge テーマのプロパティ マップ

`$background-color` プロパティを変更すると、次の依存プロパティが自動的に更新されます。

<table class="collapsible-table">
  <thead>
    <tr>
      <th>プライマリ プロパティ</th>
      <th>依存プロパティ</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><strong>$background-color</strong></td>
      <td>$icon-color</td>
      <td>バッジ内のアイコンの色</td>
    </tr>
    <tr>
      <td></td>
      <td>$text-color</td>
      <td>バッジ内のテキストの色</td>
    </tr>
  </tbody>
</table>

Badge のスタイル設定は、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`badge-theme`]({environment:sassApiUrl}/themes#function-badge-theme) を拡張する新しいテーマを作成し、バッジの項目をスタイル設定するいくつかのパラメーターを受け取る方法です。`$background-color` を設定すると、`$icon-color` と `$text-color` は、背景の色とのコントラストが高い黒または白に自動的に割り当てられます。なお、`$border-radius` プロパティはバッジの `shape` が `square` に設定されている場合のみ適用されます。

```scss
$custom-badge-theme: badge-theme(
  $background-color: #57a5cd,
  $border-radius: 4px
);
```

新しいテーマを含めるには、`css-vars` ミックスインを使用します。

```scss
@include css-vars($custom-badge-theme);
```

### デモ

<code-view style="height:340px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/badge-styling-sample/" >
</code-view>

### Tailwind によるスタイル設定

カスタム Tailwind ユーティリティ クラスを使用して `badge` をスタイル設定できます。まず [Tailwind を設定して](themes/misc/tailwind-classes.md)ください。

グローバル スタイルシートに Tailwind をインポートした上で、以下のように必要なテーマ ユーティリティを適用します:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

ユーティリティ ファイルには、`light` テーマと `dark` テーマの両方のバリエーションが含まれています。
- `light-*` クラスはライト テーマ用です。
- `dark-*` クラスはダーク テーマ用です。
- プレフィックスの後にコンポーネント名を追加します (例: `light-badge`、`dark-badge`)。

これらのクラスを適用すると、動的なテーマの計算が可能になります。そこから、`任意のプロパティ`を使用して、生成された CSS 変数をオーバーライドできます。コロンの後に、有効な CSS カラー形式 (HEX、CSS 変数、RGB など) を指定します。

プロパティの完全なリストは、[badge-theme]({environment:sassApiUrl}/themes#function-badge-theme) で確認できます。構文は次のとおりです:

```html
<igx-badge
class="!light-badge ![--background:#FF4E00] ![--border-radius:4px]">
</igx-badge>
```

>[!NOTE]
>ユーティリティ クラスが優先されるようにするには、感嘆符 (`!`) が必要です。Tailwind はスタイルをレイヤーに適用しますが、これらのスタイルを重要としてマークしないと、コンポーネントのデフォルトのテーマによってオーバーライドしてしまいます。

最終的に、badge は次のようになります:

<div class="sample-container loading" style="height:340px">
    <iframe id="badge-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-display/badge-tailwind-styling-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API リファレンス
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxBadgeComponent]({environment:angularApiUrl}/classes/igxbadgecomponent.html)
* [IgxBadgeComponent スタイル]({environment:sassApiUrl}/themes#function-badge-theme)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)
* [IgxBadgeType]({environment:angularApiUrl}/index.html#IgxBadgeType)

## テーマの依存関係
* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
