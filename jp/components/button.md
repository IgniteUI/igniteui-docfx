---
title: Angular Button コンポーネント – Ignite UI for Angular
_description: Ignite UI for Angular Button コンポーネントで規格のボタンに定義済みテキスト、画像、およびその他の機能を追加します。今すぐお試しください。
_keywords: Angular Button コンポーネント, Angular Button コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, Angular UI コンポーネント
_license: MIT
_language: ja
---

# Angular Button (ボタン) の概要

Angular Button ディレクティブは、アクション可能なボタンを作成して Web ページ/アプリケーションに追加するために使用されます。簡単にカスタマイズでき、いくつかの組み込み機能を含むさまざまな Angular Button タイプがあります。デフォルトでは、AngularMaterial はネイティブの `<button>` および `<a>` 要素を使用して、アクセス可能なエクスペリエンスを提供します。 

Ignite UI for Angular Button ディレクティブを任意の button、span、div、または anchor 要素に適用して高機能なボタンを構成できます。Flat ボタン、Contained ボタン、Outlined ボタン、FAB (フローティング アクション ボタン) の Angular ボタン タイプを使用できます。カスタマイズ可能な色、テーマを作成して Angular ボタン スタイルを変更するオプション、ユーザーがボタンのサイズを選択できるようにするオプションなどを提供します。

## Angular Button の例

以下の Angular Button の例を作成して、さまざまなボタン タイプが境界線でスタイル設定されている場合、または透明な背景が適用されている場合にどのように表示されるかを示します。

<div class="divider--half"></div>

<code-view style="height: 150px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-sample-1/" alt="Angular Button の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Button を使用した作業の開始

Ignite UI for Angular Button ディレクティブを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxButtonModule` をインポートします。

```typescript
// app.module.ts
import { IgxButtonModule } from 'igniteui-angular';
// import { IgxButtonModule } from '@infragistics/igniteui-angular'; for licensed package
@NgModule({
    imports: [
        ...
        IgxButtonModule,
        ...
    ]
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxButtonDirective` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

...
import { IgxButtonDirective } from 'igniteui-angular';
// import { IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<button igxButton="flat">Flat</button>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxButtonDirective]
})
export class HomeComponent {}
```

Ignite UI for Angular Button モジュールまたはディレクティブをインポートしたので、要素で `igxButton` ディレクティブの使用を開始できます。

## Angular ボタン タイプ

### Flat ボタン

[`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) ディレクティブを使用して、シンプルなフラット ボタンをコンポーネント テンプレートに追加します。タイプを選択しない場合、デフォルト値は `flat` です。

```html
<button igxButton="flat">Flat</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-2"></iframe>
</div>

### Contained ボタン

Contained ボタンを作成するには、`igxButton` プロパティの値を変更するだけです。

```html
<button igxButton="contained">Contained</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-5">
</iframe></div>

### Outlined ボタン

同様に、アウトライン タイプに切り替えることができます。

```html
<button igxButton="outlined">Outlined</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-8">
</iframe></div>

### Icon ボタン

バージョン `17.1.0` 以降、IgniteUI for Angular は、アイコンを完全に機能するボタンに変えることを目的とした新しい `igxIconButton` ディレクティブを公開します。*Icon Button* の詳細については[こちら](icon-button.md)を参照してください。

```html
<button igxIconButton="flat">
  <igx-icon fontSet="material">favorite</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-7">
</iframe></div>

### FAB (フローティング アクション ボタン)

アイコンを使用して、フローティング アクション ボタンを作成します。

```html
<button igxButton="fab">
  <igx-icon fontSet="material">edit</igx-icon>
</button>
```

拡張 FAB を作成するには、`igx-icon` の前に任意の要素を追加できます。

```html
<button class="btn" igxButton="fab">
  <span>like</span>
  <igx-icon fontSet="material">favorite</igx-icon>
</button>
```

> [!NOTE]
> 拡張 FAB テキストを適切にスタイルするには、`<span>` または `<div>` タグを使用します。

<div class="sample-container loading" style="height: 100px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-6">
</iframe></div>

## 例

### Angular ボタンの無効化

ボタンを無効にするには、`disabled` プロパティを使用します。

```html
<button igxButton="contained" [disabled]="'true'">Disabled</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-disabled-sample">
</iframe></div>

### Ripple

[`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) ディレクティブは、ボタンまたはその他の指定した要素にリップル効果を追加します。`以下のプロパティを使用して、デフォルトのリップル色、位置、および期間を簡単に変更できます。

```html
<button igxButton="contained" igxRipple="white" [igxRippleCentered]="true" [igxRippleDuration]="2000">
  Ripple
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-3">
</iframe></div>

### Span

`span` や `div` などの要素を Ignite UI for Angular スタイルのボタンに変更するために `igxButton` ディレクティブを使用できます。デフォルトの色は `igxButtonColor` と `igxButtonBackground` プロパティでカスタマイズできます。

```html
<span igxButton="contained" igxButtonColor="white" igxButtonBackground="#72da67" igxRipple="white">
  Span
</span>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-4">
</iframe></div>

## サイズ

`--ig-size` カスタム CSS プロパティを使用して、ユーザーが `igxButton` のサイズを選択できるようにすることができます。これを行うには、まず `IgxButtonGroupModule` をインポートし、[`igxButtonGroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) コンポーネントによってサイズ値を表示する必要があります。このようにして、選択されるたびに **--ig-size** CSS プロパティを更新します。

```typescript
// app.module.ts
...
import { IgxButtonGroupModule } from 'igniteui-angular';
// import { IgxButtonGroupModule } from '@infragistics/igniteui-angular'; for licensed package
@NgModule({
    imports: [
        ...
        IgxButtonGroupModule
        ...
    ]
})
```

```html
<!--buttons-density.component.html-->
<igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
...
<button igxButton="flat">Flat</button>
```

```typescript
// buttons-density.component.ts
public size = "large";
public sizes;
public ngOnInit() {
    this.sizes = [
        { label: 'large', selected: this.size === 'large', togglable: true },
        { label: 'medium', selected: this.size === 'medium', togglable: true },
        { label: 'small', selected: this.size === 'small', togglable: true }
    ];
}

public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
}


@HostBinding('style.--ig-size')
protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
}
```

以下は結果です。

<code-view style="height: 150px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-display-density/" alt="Angular Button の例">
</code-view>

<div class="divider--half"></div>

## スタイル設定

### Button テーマのプロパティ マップ

プライマリ プロパティを変更すると、関連するすべての依存プロパティが自動的に更新されます。

<div class="theme-switcher-wrapper">
<input type="radio" name="theme" id="material" checked>
<label for="material" class="switch-label">Material</label>
<input type="radio" name="theme" id="fluent">
<label for="fluent" class="switch-label">Fluent</label>
<input type="radio" name="theme" id="bootstrap">
<label for="bootstrap" class="switch-label">Bootstrap</label>
<input type="radio" name="theme" id="indigo">
<label for="indigo" class="switch-label">Indigo</label>
<div class="tables">
  <div class="theme-table material">
    <h3>Material テーマ</h3>
    <h4>Flat ボタン</h4>
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
          <td><details><summary><strong>$foreground</strong></summary></details></td>
          <td>$hover-background</td>
          <td>ホバー時のボタンの背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-background</td>
          <td>フォーカス時のボタンの背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-background</td>
          <td>フォーカス + ホバー時のボタンの背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-background</td>
          <td>アクティブ時のボタンの背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-foreground</td>
          <td>ホバー時のボタンの前景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color-hover</td>
          <td>ホバー時のボタンのアイコンの色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-foreground</td>
          <td>フォーカス時のボタンの前景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-foreground</td>
          <td>フォーカス + ホバー時のボタンの前景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-foreground</td>
          <td>アクティブなボタンの前景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-background</td>
          <td>フォーカスが表示されている時の背景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-foreground</td>
          <td>フォーカスが表示されている時の前景</td>
        </tr>
      </tbody>
    </table>
    <h4>Contained ボタン</h4>
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
          <td><details><summary><strong>$background</strong></summary></details></td>
          <td>$foreground</td>
          <td>背景に基づいた前景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color</td>
          <td>背景に基づいたアイコンの色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-background</td>
          <td>ホバー時の背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-foreground</td>
          <td>ホバー時の前景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color-hover</td>
          <td>ホバー時のアイコンの色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-background</td>
          <td>フォーカス時の背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-foreground</td>
          <td>フォーカス時の前景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-background</td>
          <td>フォーカス + ホバー背景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-foreground</td>
          <td>フォーカス + ホバー時の前景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-background</td>
          <td>アクティブ時の背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-foreground</td>
          <td>アクティブ時の前景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-background</td>
          <td>フォーカスが表示されている時の背景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-foreground</td>
          <td>フォーカスが表示されている時の前景</td>
        </tr>
      </tbody>
    </table>
    <h4>Outlined ボタン</h4>
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
          <td><details><summary><strong>$foreground</strong></summary></details></td>
          <td>$hover-background</td>
          <td>ホバー時のボタンの背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-background</td>
          <td>フォーカス時のボタンの背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-background</td>
          <td>フォーカス + ホバー時のボタンの背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-background</td>
          <td>アクティブ時のボタンの背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-foreground</td>
          <td>ホバー時のボタンの前景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color-hover</td>
          <td>ホバー時のボタンのアイコンの色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-foreground</td>
          <td>フォーカス時のボタンの前景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-foreground</td>
          <td>フォーカス + ホバー時のボタンの前景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-foreground</td>
          <td>アクティブなボタンの前景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-background</td>
          <td>フォーカスが表示されている時の背景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-foreground</td>
          <td>フォーカスが表示されている時の前景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$border-color</td>
          <td>アウトライン ボタンの境界線の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-border-color</td>
          <td>ホバー時のアウトライン ボタンの境界線の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-border-color</td>
          <td>フォーカス時のアウトライン ボタンの境界線の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-border-color</td>
          <td>フォーカスが表示されている時のアウトライン ボタンの境界線の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-border-color</td>
          <td>アクティブ時のアウトライン ボタンの境界線の色</td>
        </tr>
      </tbody>
    </table>
    <h4>FAB ボタン</h4>
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
          <td><details><summary><strong>$background</strong></summary></details></td>
          <td>$foreground</td>
          <td>背景に基づいた前景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color</td>
          <td>背景に基づいたアイコンの色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-background</td>
          <td>ホバー時の背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-foreground</td>
          <td>ホバー時の前景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color-hover</td>
          <td>ホバー時のアイコンの色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-background</td>
          <td>フォーカス時の背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-foreground</td>
          <td>フォーカス時の前景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-background</td>
          <td>アクティブ時の背景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-foreground</td>
          <td>アクティブ時の前景の色</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-background</td>
          <td>フォーカス + ホバー背景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-foreground</td>
          <td>フォーカス + ホバー時の前景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-background</td>
          <td>フォーカスが表示されている時の背景</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-foreground</td>
          <td>フォーカスが表示されている時の前景</td>
        </tr>
      </tbody>
    </table>
  </div>

<div class="theme-table fluent">
<h3>Fluent テーマ</h3>
<h4>Flat ボタン</h4>
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
      <td><details><summary><strong>$foreground</strong></summary></details></td>
      <td>$hover-background</td>
      <td>ホバー時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>フォーカス時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>フォーカス + ホバー時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>アクティブ時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>ホバー時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>ホバー時のボタンのアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>フォーカス時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>フォーカス + ホバー時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>アクティブなボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>フォーカスが表示されている時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>フォーカスが表示されている時の境界線の色</td>
    </tr>
  </tbody>
</table>
<h4>Contained ボタン</h4>
<table class="collapsible-table">
<thead><tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr></thead>
<tbody class="group">
<tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>背景に基づいた前景</td></tr>
<tr class="dependent"><td></td><td>$icon-color</td><td>背景に基づいたアイコンの色</td></tr>
<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景の色</td></tr>
<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景の色</td></tr>
<tr class="dependent"><td></td><td>$hover-foreground</td><td>ホバー時の前景</td></tr>
<tr class="dependent"><td></td><td>$icon-color-hover</td><td>ホバー時のアイコンの色</td></tr>
<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時の前景</td></tr>
<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時の前景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス + ホバー背景</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカス + ホバー時の前景</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-background</td><td>フォーカスが表示されている時の背景</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-foreground</td><td>フォーカスが表示されている時の前景</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-border-color</td><td>フォーカスが表示されている時の境界線の色</td></tr>
</tbody>
</table>
<h4>Outlined ボタン</h4>
<table class="collapsible-table">
<thead><tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr></thead>
<tbody class="group">
<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-background</td><td>ホバー時のアウトライン ボタンの背景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時のアウトライン ボタンの背景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス + ホバー時のアウトライン ボタンの背景の色</td></tr>
<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時のアウトライン ボタンの背景の色</td></tr>
<tr class="dependent"><td></td><td>$hover-foreground</td><td>ホバー時のアウトライン ボタンの前景の色</td></tr>
<tr class="dependent"><td></td><td>$icon-color-hover</td><td>ホバー時のアウトライン ボタンのアイコンの色</td></tr>
<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアウトライン ボタンの前景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカス + ホバー時のアウトライン ボタンの前景の色</td></tr>
<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブなアウトライン ボタンの前景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-foreground</td><td>フォーカスが表示されている時のアウトライン ボタンの前景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-border-color</td><td>フォーカスが表示されている時のアウトライン ボタンの境界線の色</td></tr>
<tr class="dependent"><td></td><td>$border-color</td><td>アウトライン ボタンの境界線の色</td></tr>
<tr class="dependent"><td></td><td>$hover-border-color</td><td>ホバー時のアウトライン ボタンの境界線の色</td></tr>
<tr class="dependent"><td></td><td>$focus-border-color</td><td>フォーカス時のアウトライン ボタンの境界線の色</td></tr>
<tr class="dependent"><td></td><td>$active-border-color</td><td>アクティブなアウトライン ボタンの境界線の色</td></tr>
</tbody>
</table>
<h4>FAB ボタン</h4>
<table class="collapsible-table">
<thead><tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr></thead>
<tbody class="group">
<tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>背景に基づいた前景</td></tr>
<tr class="dependent"><td></td><td>$icon-color</td><td>背景に基づいたアイコンの色</td></tr>
<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景の色</td></tr>
<tr class="dependent"><td></td><td>$hover-foreground</td><td>ホバー時の前景</td></tr>
<tr class="dependent"><td></td><td>$icon-color-hover</td><td>ホバー時のアイコンの色</td></tr>
<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景の色</td></tr>
<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時の前景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時の前景</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス + ホバー背景</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカス + ホバー時の前景</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-background</td><td>フォーカスが表示されている時の背景</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-foreground</td><td>フォーカスが表示されている時の前景</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-border-color</td><td>フォーカスが表示されている時の境界線の色</td></tr>
</tbody>
</table>
</div>

<div class="theme-table bootstrap">
<h3>Bootstrap テーマ</h3>
<h4>Flat ボタン</h4>
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
      <td><details><summary><strong>$foreground</strong></summary></details></td>
      <td>$hover-foreground</td>
      <td>ホバー時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>ホバー時のボタンのアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>フォーカス時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>フォーカス + ホバー時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>アクティブなボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>フォーカスが表示されている時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>フォーカスが表示されている時の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>無効なボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>無効なボタンのアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>シャドウの色</td>
    </tr>
  </tbody>
</table>
<h4>Contained ボタン</h4>
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
      <td><details><summary><strong>$background</strong></summary></details></td>
      <td>$foreground</td>
      <td>背景に基づいた前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color</td>
      <td>背景に基づいたアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-background</td>
      <td>ホバー時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>フォーカス時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>アクティブ時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>ホバー時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>ホバー時のアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>フォーカス時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>フォーカス + ホバー背景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>フォーカス + ホバー時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>フォーカスが表示されている時の背景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>フォーカスが表示されている時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>アクティブ時の前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>シャドウの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-background</td>
      <td>無効な背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>無効な前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>無効なアイコンの色</td>
    </tr>
  </tbody>
</table>
<h4>Outlined ボタン</h4>
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
      <td><details><summary><strong>$foreground</strong></summary></details></td>
      <td>$hover-background</td>
      <td>ホバー時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>フォーカス時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>フォーカス + ホバー時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>アクティブ時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>ホバー時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>ホバー時のボタンのアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>フォーカス時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>フォーカス + ホバー時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>アクティブなボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>フォーカスが表示されている時の背景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>フォーカスが表示されている時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>フォーカスが表示されている時の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>無効なボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>無効なボタンのアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-border-color</td>
      <td>無効なボタンの境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-border-color</td>
      <td>ホバー時の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-border-color</td>
      <td>フォーカス時の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>フォーカス表示の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-border-color</td>
      <td>アクティブ時の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>シャドウの色</td>
    </tr>
  </tbody>
</table>
<h4>FAB ボタン</h4>
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
      <td><details><summary><strong>$background</strong></summary></details></td>
      <td>$foreground</td>
      <td>背景に基づいた前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color</td>
      <td>背景に基づいたアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-background</td>
      <td>ホバー時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>フォーカス時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>アクティブ時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-background</td>
      <td>無効な背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>ホバー時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>ホバー時のアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>フォーカス時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>フォーカス + ホバー背景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>フォーカス + ホバー時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>フォーカスが表示されている時の背景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>フォーカスが表示されている時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>アクティブ時の前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>シャドウの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>無効な前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>無効なアイコンの色</td>
    </tr>
  </tbody>
</table>
</div>

<div class="theme-table indigo">
<h3>Indigo テーマ</h3>
<h4>Flat ボタン</h4>
<table class="collapsible-table"><thead><tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr></thead><tbody class="group">
<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-background</td><td>ホバー時のボタンの背景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時のボタンの背景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス + ホバー時のボタンの背景の色</td></tr>
<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時のボタンの背景の色</td></tr>
<tr class="dependent"><td></td><td>$hover-foreground</td><td>ホバー時のボタンの前景の色</td></tr>
<tr class="dependent"><td></td><td>$icon-color-hover</td><td>ホバー時のボタンのアイコンの色</td></tr>
<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のボタンの前景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカス + ホバー時のボタンの前景の色</td></tr>
<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブなボタンの前景の色</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-foreground</td><td>フォーカスが表示されている時の前景</td></tr>
<tr class="dependent"><td></td><td>$disabled-foreground</td><td>無効な前景の色</td></tr>
<tr class="dependent"><td></td><td>$disabled-icon-color</td><td>無効なアイコンの色</td></tr>
<tr class="dependent"><td></td><td>$shadow-color</td><td>シャドウの色</td></tr>
</tbody>
</table>
<h4>Contained ボタン</h4>
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
      <td><details><summary><strong>$background</strong></summary></details></td>
      <td>$foreground</td>
      <td>背景に基づいた前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color</td>
      <td>背景に基づいたアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-background</td>
      <td>ホバー時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>フォーカス時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>アクティブ時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>ホバー時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>ホバー時のアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>フォーカス時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>フォーカス + ホバー背景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>フォーカス + ホバー時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>フォーカスが表示されている時の背景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>フォーカスが表示されている時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>アクティブ時の前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>シャドウの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-background</td>
      <td>無効な背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>無効な前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>無効なアイコンの色</td>
    </tr>
  </tbody>
</table>
<h4>Outlined ボタン</h4>
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
      <td><details><summary><strong>$foreground</strong></summary></details></td>
      <td>$hover-background</td>
      <td>ホバー時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>フォーカス時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>フォーカス + ホバー時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>アクティブ時のボタンの背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>ホバー時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>ホバー時のボタンのアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>フォーカス時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>フォーカス + ホバー時のボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>アクティブなボタンの前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>フォーカスが表示されている時の背景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>フォーカスが表示されている時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>フォーカスが表示されている時の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$border-color</td>
      <td>境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-border-color</td>
      <td>ホバー時の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-border-color</td>
      <td>フォーカス時の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>フォーカス表示の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-border-color</td>
      <td>アクティブ時の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>シャドウの色</td>
    </tr>
  </tbody>
</table>
<h4>FAB ボタン</h4>
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
      <td><details><summary><strong>$background</strong></summary></details></td>
      <td>$foreground</td>
      <td>背景に基づいた前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color</td>
      <td>背景に基づいたアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-background</td>
      <td>ホバー時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>フォーカス時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>アクティブ時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-background</td>
      <td>無効な背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>ホバー時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>ホバー時のアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>フォーカス時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>フォーカス + ホバー背景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>フォーカス + ホバー時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>フォーカスが表示されている時の背景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>フォーカスが表示されている時の前景</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>アクティブ時の前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>シャドウの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>無効な前景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>無効なアイコンの色</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>

> **注:** 結果の依存プロパティは、選択したテーマ (Material、Fluent、Bootstrap、Indigo) によって若干異なる場合があります。

**Sass** を使用してボタンのスタイル設定を開始するには、まずすべてのテーマ関数とコンポーネント ミックスインを含む `index` ファイルをインポートします。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、[`button-theme`]({environment:sassApiUrl}/themes#function-button-theme) を拡張し、それぞれのホバーとフォーカス パラメーターと共に `$foreground` と `$background` パラメーターを受け入れる新しいテーマを作成します。

次のマークアップを前提として:

```html
<div class="my-contained-btn">
  <button igxButton="contained">Contained button</button>
</div>
```

次のテーマを作成する必要があります:

```scss
$custom-button-theme: button-theme(
    $foreground: #fdfdfd,
    $hover-foreground: #fdfdfd,
    $focus-foreground: #fdfdfd,
    $background: #345779,
    $hover-background: #2e4d6b,
    $focus-background: #2e4d6b,
    $disabled-foreground: #2e4d6b,
);
```

ボタンのスタイル設定に使用できるパラメーターの完全なリストについては、[`button-theme`]({environment:sassApiUrl}/themes#function-button-theme) セクションを参照してください。

最後に、カスタム テーマをアプリケーションに**含めます**。

```scss
.button-sample {
    @include css-vars($custom-button-theme);
}
```

特定のタイプのボタン (`flat`、`outlined`、`contained`、`fab`) のみをスタイリングすることもできます。
そのためには、次のようなタイプ別のテーマ関数を使用します: [`flat-button-theme`]({environment:sassApiUrl}/themes#function-flat-button-theme)、[`outlined-button-theme`]({environment:sassApiUrl}/themes#function-outlined-button-theme)、[`contained-button-theme`]({environment:sassApiUrl}/themes#function-contained-button-theme)、[`fab-button-theme`]({environment:sassApiUrl}/themes#function-fab-button-theme)。

例として、以下のようなマークアップがあるとします。

```html
<div class="my-contained-btn">
  <button igxButton="contained">Contained button</button>
</div>
<div class="my-flat-btn">
  <button igxButton="flat">Flat button</button>
</div>
```

`contained` ボタンのみをスタイリングしたい場合は、[`contained-button-theme`]({environment:sassApiUrl}/themes#function-flat-button-theme) 関数を使用します。

```scss
$custom-contained-theme: contained-button-theme(
    $background: #348ae0,
);
```

新たに追加されたタイプ別テーマ関数により、ボタンのスタイリングがより簡単になりました。上記の例のように、[`contained-button-theme`]({environment:sassApiUrl}/themes#function-contained-button-theme) および [`fab-button-theme`]({environment:sassApiUrl}/themes#function-fab-button-theme) では、`$background` パラメーターに色を指定するだけで、他のすべての状態用の色やテキストの色が自動的に生成されます。テキストの色は、新しく追加された [`adaptive-contrast`]({environment:sassApiUrl}/color#function-adaptive-contrast) 関数によって、指定された背景に対して黒か白のどちらがより良いコントラストを持つかを計算して決定されます。

[`flat-button-theme`]({environment:sassApiUrl}/themes#function-flat-button-theme) および [`outlined-button-theme`]({environment:sassApiUrl}/themes#function-outlined-button-theme) では、状態用の色も自動的に生成されますが、これらは `$background` ではなく `$foreground` パラメーターに基づいて計算されます。

以下のサンプルでは、カスタマイズした CSS 変数を使用したボタン コンポーネントが、[`Ant`](https://ant.design/components/button?theme=light#button-demo-color-variant) デザイン システムのボタンに視覚的に似たデザインを実現している様子を確認できます。 

<code-view style="height: 260px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-style/" >
</code-view>

### Tailwind によるスタイル設定

カスタム Tailwind ユーティリティ クラスを使用して `button` をスタイル設定できます。まず [Tailwind を設定して](themes/misc/tailwind-classes.md)ください。

グローバル スタイルシートに Tailwind をインポートした上で、以下のように必要なテーマ ユーティリティを適用します:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

ユーティリティ ファイルには、`light` テーマと `dark` テーマの両方のバリエーションが含まれています。
- `light-*` クラスはライト テーマ用です。
- `dark-*` クラスはダーク テーマ用です。
- プレフィックスの後にコンポーネント名を追加します。 ボタンにはタイプがあるため、クラスは次のように使用されます: `light-contained-button`、`light-flat-button`、`dark-outlined-button`、`dark-fab-button`。

これらのクラスを適用すると、動的なテーマの計算が可能になります。そこから、`任意のプロパティ`を使用して、生成された CSS 変数をオーバーライドできます。コロンの後に、有効な CSS カラー形式 (HEX、CSS 変数、RGB など) を指定します。

プロパティの完全なリストは [button-theme]({environment:sassApiUrl}/themes#function-button-theme) で確認できます。これはさまざまなバリエーションで異なって反映されます。`flat` ボタンと `outlined` ボタンの主なプロパティは `$foreground` で、`contained` ボタンと `fab` ボタンの主なプロパティは `$background` です。構文は次のとおりです:

```html
<div class="buttons-sample">
  <div class="button-sample">
    <button
    igxButton="flat"
    class="!light-flat-button ![--foreground:#7B9E89]">
      Flat Button
    </button>
  </div>
  <div class="button-sample">
    <button
    igxButton="contained"
    class="!light-contained-button ![--background:#7B9E89]">
      Contained Button
    </button>
  </div>
  <div class="button-sample">
    <button
    igxButton="outlined"
    class="!light-outlined-button ![--foreground:#7B9E89]">
      Outlined Button
    </button>
  </div>
  <div class="button-sample">
    <button
    igxButton="fab"
    class="!light-fab-button ![--background:#7B9E89]">
      Fab Button
    </button>
  </div>
</div>
```

>[!NOTE]
>ユーティリティ クラスが優先されるようにするには、感嘆符 (`!`) が必要です。Tailwind はスタイルをレイヤーに適用しますが、これらのスタイルを重要としてマークしないと、コンポーネントのデフォルトのテーマによってオーバーライドしてしまいます。

最終的に、button は次のようになります:

<div class="sample-container loading" style="height:100px">
    <iframe id="buttons-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-entries/buttons-tailwind-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### カスタム サイズ変更

ボタンの高さは、`--size` 変数を使用して、`button` を直接ターゲットにして変更できます。

```scss
button {
  --size: 50px;
}
```

または、ユニバーサル変数 `--igx-button-size` を使用して、すべてのインスタンスをターゲットにすることもできます。

```html
<div class="my-app">
  <button igxButton="raised"></button>
</div>
```

```scss
.my-app {
  --igx-button-size: 50px;
}
```

事前定義されたサイズの 1 つを使用して、それを `--ig-size` 変数に割り当てることもできます。`--ig-size` に使用可能な値は、`--ig-size-small`、`--ig-size-medium`、`--ig-size-large` です。

```scss
button {
  --ig-size: var(--ig-size-large);
}
```

詳細については、[サイズ](display-density.md)の記事をご覧ください。

<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton スタイル]({environment:sassApiUrl}/themes#function-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxIconButtonDirective]({environment:angularApiUrl}/classes/igxiconbuttondirective.html)
* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
