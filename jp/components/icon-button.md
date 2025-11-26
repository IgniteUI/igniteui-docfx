---
title: Angular Icon Button コンポーネント – Ignite UI for Angular - MITライセンス
_description: 標準のアイコンをボタン機能で向上します。今すぐお試しください。
_keywords: Angular Icon Button コンポーネント, Angular Icon Button コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, Angular UI コンポーネント
_license: MIT
_language: ja
---

# Angular Icon Button (アイコン ボタン) の概要

Ignite UI for Angular Icon Button ディレクティブを任意のアイコン要素に適用して高機能なボタンを構成できます。`igxIconButton` には、flat、outlined、およびデフォルトの contained 3 つのタイプがあります。

## Angular Icon Button の例

<code-view style="height: 70px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/icon-button-overview/" alt="Angular Icon Button の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Icon Button を使用した作業の開始

Ignite UI for Angular Icon Button ディレクティブを初期化するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックををご覧ください。

次の手順は、`IgxIconButtonDirective` をスタンドアロンの依存関係としてインポートすることです:

```typescript
// home.component.ts

...
import { IgxIconButtonDirective } from 'igniteui-angular';
// import { IgxIconButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
        <button igxIconButton="outlined">
            <igx-icon>home</igx-icon>
        </button>`,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxIconButtonDirective]
})
export class HomeComponent {}
```

Ignite UI for Angular Icon Button ディレクティブをインポートしたので、要素で `igxIconButton` ディレクティブの使用を開始できます。

## Angular Icon Button のタイプ

### Flat アイコン ボタン

[`igxIconButton`]({environment:angularApiUrl}/classes/igxiconbuttondirective.html) ディレクティブを使用して、シンプルなフラット アイコン ボタンをコンポーネント テンプレートに追加します。

```html
<button igxIconButton="flat">
    <igx-icon>edit</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/flat-icon-button"></iframe>
</div>

### Contained アイコン ボタン

Contained アイコン ボタンを作成するには、`igxIconButton` プロパティの値を変更するだけです。タイプを選択しない場合、デフォルト値は `contained` です。

```html
<button igxIconButton>
    <igx-icon>favorite</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/contained-icon-button">
</iframe></div>

### Outlined アイコン ボタン

同様に、アウトライン タイプに切り替えることができます。

```html
<button igxIconButton="outlined">
    <igx-icon>more_vert</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/outlined-icon-button">
</iframe></div>

## 例

### Disabled アイコン ボタン

アイコン ボタンを無効にしたい場合は、[`disabled`]({environment:angularApiUrl}/classes/igxiconbuttoncomponent.html#disabled) プロパティを使用できます。このサンプルでは、`igxIconButton` ディレクティブを使用してさまざまなファミリのアイコンを使用する方法も示します。

```html
<button igxIconButton="flat" disabled>
    <igx-icon family="fa" name="fa-home"></igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/disabled-icon-button">
</iframe></div>

### SVG アイコン

マテリアル アイコンに加えて、 `igxIconButton` ディレクティブは、アイコンとしての SVG 画像の使用もサポートしています。これを行うには、まず [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) 依存関係を挿入し、次に [`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addSvgIcon) メソッドを使用して SVG ファイルをキャッシュにインポートする必要があります。詳細については、Icon トピックの [SVG セクション](icon.md#svg-アイコン)を参照してください。

```typescript
constructor(private _iconService: IgxIconService) { }

public ngOnInit() {
    // register custom SVG icon
    this._iconService.addSvgIcon('rain', 'assets/images/card/icons/rain.svg', 'weather-icons');
}
```

```html
<button igxIconButton>
    <igx-icon family="weather-icons" name="rain"></igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/svg-icon-button">
</iframe></div>

### Size (サイズ) 

ユーザーは、`--ig-size` カスタム CSS プロパティを使用して、3 つの事前定義された `igxIconButton` サイズのいずれかを選択できます。デフォルトでは、コンポーネントのサイズは medium に設定されています。 

<code-view style="height: 70px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/icon-button-size/" alt="Angular Icon Button サイズの例">
</code-view>
<div class="divider--half"></div>


上記のサンプルからわかるように、`igxIconButton` ディレクティブを使用して、`span` や `div` などの要素を Ignite UI for Angular スタイルのアイコン ボタンに変換することもできます。 

## Icon Button のスタイル設定

### Icon Button テーマのプロパティ マップ

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
			<h4>Flat アイコン ボタン</h4>
			<table class="collapsible-table">
				<thead>
					<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
				</thead>
				<tbody class="group">
					<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカス + ホバー アイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景</td></tr>
					<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景</td></tr>
					<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス + ホバー時の背景</td></tr>
					<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景</td></tr>
				</tbody>
			</table>
			<h4>Contained アイコン ボタン</h4>
			<table class="collapsible-table">
				<thead>
					<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
				</thead>
				<tbody class="group">
					<tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>アイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景</td></tr>
					<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景</td></tr>
					<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス + ホバー時の背景</td></tr>
					<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景</td></tr>
					<tr class="dependent"><td></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカス + ホバー アイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$shadow-color</td><td>フォーカス時のシャドウ</td></tr>
					<tr class="dependent"><td></td><td>$focus-border-color</td><td>フォーカス時の境界線の色</td></tr>
					<tr class="dependent"><td></td><td>$disabled-background</td><td>無効時の背景</td></tr>
					<tr class="dependent"><td></td><td>$disabled-foreground</td><td>無効なアイコンの色</td></tr>
				</tbody>
			</table>
			<h4>Outlined アイコン ボタン</h4>
			<table class="collapsible-table">
				<thead>
					<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
				</thead>
				<tbody class="group">
					<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカス + ホバー アイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
					<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景</td></tr>
					<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景</td></tr>
					<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス + ホバー時の背景</td></tr>
					<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景</td></tr>
					<tr class="dependent"><td></td><td>$border-color</td><td>デフォルトの境界線の色</td></tr>
					<tr class="dependent"><td></td><td>$focus-border-color</td><td>フォーカス時の境界線の色</td></tr>
				</tbody>
			</table>
		</div>
        <div class="theme-table fluent">
			<h4>Flat アイコン ボタン</h4>
			<table class="collapsible-table">
			<thead>
			<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
			</thead>
			<tbody class="group">
			<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカスかつホバー時のアイコン色</td></tr>
			<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス時とホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景の色</td></tr>
			</tbody>
			</table>
			<h4>Contained アイコン ボタン</h4>
			<table class="collapsible-table">
			<thead>
			<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
			</thead>
			<tbody class="group">
			<tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>アイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス時とホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカスかつホバー時のアイコン色</td></tr>
			<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$shadow-color</td><td>フォーカス時のシャドウの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-border-color</td><td>フォーカス時の境界線の色</td></tr>
			<tr class="dependent"><td></td><td>$disabled-background</td><td>無効な背景の色</td></tr>
			<tr class="dependent"><td></td><td>$disabled-foreground</td><td>無効なアイコンの色</td></tr>
			</tbody>
			</table>
			<h4>Outlined アイコン ボタン</h4>
			<table class="collapsible-table">
			<thead>
			<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
			</thead>
			<tbody class="group">
			<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカスかつホバー時のアイコン色</td></tr>
			<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス時とホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$border-color</td><td>境界線の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-border-color</td><td>フォーカス時の境界線の色</td></tr>
			</tbody>
			</table>
		</div>
        <div class="theme-table bootstrap">
			<h4>Flat アイコン ボタン</h4>
			<table class="collapsible-table">
			<thead>
			<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
			</thead>
			<tbody class="group">
			<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカスかつホバー時のアイコン色</td></tr>
			<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
            <tr class="dependent"><td></td><td>$disabled-foreground</td><td>無効なアイコンの色</td></tr>
            <tr class="dependent"><td></td><td>$shadow-color</td><td>アイコン ボタンのシャドウの色</td></tr>
			</tbody>
			</table>
			<h4>Contained アイコン ボタン</h4>
			<table class="collapsible-table">
			<thead>
			<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
			</thead>
			<tbody class="group">
			<tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>アイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス時とホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカスかつホバー時のアイコン色</td></tr>
			<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$shadow-color</td><td>シャドウの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-border-color</td><td>フォーカス時の境界線の色</td></tr>
			<tr class="dependent"><td></td><td>$disabled-background</td><td>無効な背景の色</td></tr>
			<tr class="dependent"><td></td><td>$disabled-foreground</td><td>無効なアイコンの色</td></tr>
			</tbody>
			</table>
			<h4>Outlined アイコン ボタン</h4>
			<table class="collapsible-table">
			<thead>
			<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
			</thead>
			<tbody class="group">
			<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカスかつホバー時のアイコン色</td></tr>
			<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス時とホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$border-color</td><td>境界線の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-border-color</td><td>フォーカス時の境界線の色</td></tr>
            <tr class="dependent"><td></td><td>$shadow-color</td><td>シャドウの色</td></tr>
            <tr class="dependent"><td></td><td>$disabled-foreground</td><td>無効なアイコンの色</td></tr>
            <tr class="dependent"><td></td><td>$disabled-border-color</td><td>無効なアイコン ボタンの境界線</td></tr>
			</tbody>
			</table>
		</div>
        <div class="theme-table indigo">
			<h4>Flat アイコン ボタン</h4>
			<table class="collapsible-table">
			<thead>
			<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
			</thead>
			<tbody class="group">
			<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカスかつホバー時のアイコン色</td></tr>
			<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
            <tr class="dependent"><td></td><td>$disabled-foreground</td><td>無効なアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス時とホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景の色</td></tr>
            <tr class="dependent"><td></td><td>$focus-border-color</td><td>フォーカス時の境界線の色</td></tr>
			</tbody>
			</table>
			<h4>Contained アイコン ボタン</h4>
			<table class="collapsible-table">
			<thead>
			<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
			</thead>
			<tbody class="group">
			<tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>アイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-background</td><td>フォーカス時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-background</td><td>フォーカス時とホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$active-background</td><td>アクティブ時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカスかつホバー時のアイコン色</td></tr>
			<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$shadow-color</td><td>シャドウの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-border-color</td><td>フォーカス時の境界線の色</td></tr>
			<tr class="dependent"><td></td><td>$disabled-background</td><td>無効な背景の色</td></tr>
			<tr class="dependent"><td></td><td>$disabled-foreground</td><td>無効なアイコンの色</td></tr>
			</tbody>
			</table>
			<h4>Outlined アイコン ボタン</h4>
			<table class="collapsible-table">
			<thead>
			<tr><th>プライマリ プロパティ</th><th>依存プロパティ</th><th>説明</th></tr>
			</thead>
			<tbody class="group">
			<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-foreground</td><td>ホバー時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-foreground</td><td>フォーカス時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>フォーカスかつホバー時のアイコン色</td></tr>
			<tr class="dependent"><td></td><td>$active-foreground</td><td>アクティブ時のアイコンの色</td></tr>
			<tr class="dependent"><td></td><td>$hover-background</td><td>ホバー時の背景の色</td></tr>
			<tr class="dependent"><td></td><td>$border-color</td><td>境界線の色</td></tr>
			<tr class="dependent"><td></td><td>$focus-border-color</td><td>フォーカス時の境界線の色</td></tr>
			</tbody>
			</table>
		</div>
	</div>
</div>

最も簡単な方法は、CSS 変数を使用してアイコン ボタンの外観をカスタマイズする方法です。

```scss
[igxIconButton="contained"] {
  --background: #011627;
  --foreground: #fefefe;
  --hover-foreground: #011627dc;
  --hover-background: #ecaa53;
  --focus-foreground: #011627dc;
  --focus-background: #ecaa53;
  --focus-border-color: #0116276c;
  --active-foreground: #011627dc;
  --active-background: #ecaa53;
}
```

ボタンのスタイル設定に使用できるパラメーターの完全なリストについては、[`icon-button-theme`]({environment:sassApiUrl}/themes#function-icon-button-theme) セクションを参照してください。

特定のタイプのアイコン ボタン (`flat`、`outlined`、`contained`) のみをスタイリングすることもできます。
そのためには、次のタイプ別テーマ関数を使用します: [`flat-icon-button-theme`]({environment:sassApiUrl}/themes#function-flat-icon-button-theme)、[`outlined-icon-button-theme`]({environment:sassApiUrl}/themes#function-outlined-icon-button-theme)、[`contained-icon-button-theme`]({environment:sassApiUrl}/themes#function-contained-icon-button-theme)。

以下は、`contained-icon-button-theme` 関数を使用して SCSS でカスタム テーマを定義する例です。

```scss
@use "igniteui-angular/theming" as *;

$custom-contained: contained-icon-button-theme(
    $background: #ECAA53,
);
```

これにより、ホバー、フォーカス、アクティブなどのさまざまな状態に適した前景の色と背景の色を含む、完全にテーマ設定された `contained icon button` が生成されます。

<code-view style="height: 100px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/icon-button-styling/" >
</code-view>
<div class="divider--half"></div>

### Tailwind によるスタイル設定

カスタム Tailwind ユーティリティ クラスを使用して icon button をスタイル設定できます。まず [Tailwind を設定して](themes/misc/tailwind-classes.md)ください。

グローバル スタイルシートに Tailwind をインポートした上で、以下のように必要なテーマ ユーティリティを適用します:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

ユーティリティ ファイルには、`light` テーマと `dark` テーマの両方のバリエーションが含まれています。

- `light-*` クラスはライト テーマ用です。
- `dark-*` クラスはダーク テーマ用です。
- プレフィックスの後にコンポーネント名を追加します (例: `light-icon-button`、`dark-icon-button`)。

これらのクラスを適用すると、動的なテーマの計算が可能になります。そこから、`任意のプロパティ`を使用して、生成された CSS 変数をオーバーライドできます。コロンの後に、有効な CSS カラー形式 (HEX、CSS 変数、RGB など) を指定します。

プロパティの完全なリストは、[icon-button-theme]({environment:sassApiUrl}/themes#function-icon-button-theme) で確認できます。構文は次のとおりです:

```html
<button igxIconButton class="!light-icon-button ![--icon-color:#FF4E00]">
  <igx-icon>edit</igx-icon>
</button>
```

>[!NOTE]
>ユーティリティ クラスが優先されるようにするには、感嘆符 (`!`) が必要です。Tailwind はスタイルをレイヤーに適用しますが、これらのスタイルを重要としてマークしないと、コンポーネントのデフォルトのテーマによってオーバーライドしてしまいます。

最終的に、icon button は次のようになります:

<div class="sample-container loading" style="height:100px">
    <iframe id="icon-buttons-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-entries/icon-button-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API リファレンス
<div class="divider--half"></div>

* [IgxIconButtonDirective]({environment:angularApiUrl}/classes/igxiconbuttondirective.html)
* [IgxIconButton スタイル]({environment:sassApiUrl}/themes#function-icon-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
