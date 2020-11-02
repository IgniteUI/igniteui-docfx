---
title: コンボ テンプレート
_description: igx-combo コンポーネントの異なる領域 (項目、ヘッダー、フッター、空リスト、ボタンの追加) にカスタム テンプレートを定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント,  Angular テンプレート, Angular Combo テンプレート
_language: ja
---

# コンボ テンプレート
<p class="highlight">
Ignite UI for Angular Combo コンポーネントでは、ヘッダー、フッター、項目、空のリスト、追加ボタンなどのさまざまな領域にカスタム テンプレートを定義できます。
</p>

## デモ

<div class="sample-container loading" style="height: 450px;">
    <iframe id="combo-templates-sample" frameborder="0" seamless="" width="700px" height="100%" src="{environment:demosBaseUrl}/lists/combo-template" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-templates-sample" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-templates-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

## 使用方法
Combo コンポーネントを初期化にするには、まず `IgxComboModule` を **app.module.ts**  ファイルにインポートします。

```typescript
import { IgxComboModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxComboModule,
        ...
    ]
})
export class AppModule {}
```

## テンプレート タイプ
`igx-combo` のテンプレートを定義する場合、定義済みの参照名を使用して参照してください。

### 項目テンプレート
セレクター `[igxComboItem]` の使用:

```html
<igx-combo #templateCombo [data]="lData" [valueKey]="'field'" >
    <ng-template igxComboItem let-display let-key="valueKey">
        <div class="item">
            <span class="state">{{ display[key] }}</span>
            <span class="region">{{ display.region }}</span>
        </div>
    </ng-template>
</igx-combo>
```

### ヘッダー テンプレート
セレクター `[igxComboHeader]` の使用:

```html
<igx-combo>
    <ng-template igxComboHeader>
        <div class="header-class">State - Region</div>
    </ng-template>
</igx-combo>
```

### フッター テンプレート
セレクター `[igxComboFooter]` の使用:

```html
<igx-combo>
    <ng-template igxComboFooter>
        <div class="footer-class">Infragistics 2018</div>
    </ng-template>
</igx-combo>
```

### 空のテンプレート
セレクター `[igxComboEmpty]` の使用:

```html
<igx-combo>
    <ng-template igxComboEmpty>
        <span class="empty-class">No available states</span>
    </ng-template>
</igx-combo>
```

### テンプレートの追加
セレクター `[igxComboAddItem]` の使用:

```html
<igx-combo>
    <ng-template igxComboAddItem>
        <button igxButton="flat">
            Add Location
        </button>
    </ng-template>
</igx-combo>
```

### トグル アイコン テンプレート
セレクター `[igxComboToggleIcon]` の使用:

```html
<igx-combo>
    <ng-template igxComboToggleIcon let-collapsed>
        <igx-icon>{{ collapsed ? 'expand_more' : 'expand_less'}}</igx-icon>
    </ng-template>
</igx-combo>
```

### クリア アイコン テンプレート
セレクター `[igxComboClearIcon]` の使用:

```html
<igx-combo>
    <ng-template igxComboClearIcon>
        <igx-icon>cancel</igx-icon>
    </ng-template>
</igx-combo>
```

## コンボ入力のテンプレート化
テンプレートで使用した場合、`igxComboClearIcon` および `igxComboToggleIcon` セレクターがコンボ入力での各ボタンの表示方法を変更します。`igx-combo` 内のコンテンツを渡すと、`igx-input-group` をテンプレート化する方法 (`igx-prefix`、`igx-suffix`、`igxLabel` を使用) と同様に、コンボ入力のテンプレート化も可能になります。以下のコード スニペットは、適切なラベルやプレフィックスをコンボに追加する方法を示します。

```html
    <igx-combo>
        <label igxLabel>Locations</label>
        <igx-prefix><igx-icon>pin_drop</igx-icon></igx-prefix>
    </igx-combo>
```

## API まとめ
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-combo-theme)

## その他のリソース
<div class="divider--half"></div>

* [コンボ コンポーネント](combo.md)
* [コンボ機能](combo_features.md)
* [コンボ リモート バインディング](combo_remote.md)
* [テンプレート駆動フォームの統合](input_group.md)
* [リアクティブ フォームの統合](input_group_reactive_forms.md)
* [カスケーディング](combo_cascading.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)