---
title: カスケーディング
_description: igx-combo と igx-select は、ユーザーが一方または両方のコントロールを使用してカスケード シナリオを簡単に構築できるようにするイベント、プロパティ、およびメソッドを公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール、Angular カスケーディング Combo, Angular Select, Angular カスケーディング
_language: ja
---

# カスケーディング
<p class="highlight">
Ignite UI for Angular の Combo と Select コンポーネントは、コントロールの一方または両方を使用して簡単にカスケーディングを作成できるイベント、プロパティ、メソッドを公開します。
</p>

## Angular カスケーディングの例
以下のサンプルは、[igx-select]({environment:angularApiUrl}/classes/igxselectcomponent.html) と [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) コンポーネントが一緒に使用されています。


<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/cascading-combos" alt="Angular カスケーディングの例">
</code-view>

<div class="divider--half"></div>

## 使用方法

### はじめに
まず `IgxComboModule` と `IgxSelectModule` を **app.module.ts** ファイルにインポートします。

```typescript
import { IgxComboModule, IgxSelectModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule, IgxSelectModule],
    ...
})
export class AppModule {}
```

### テンプレートの構成
両方のコンポーネントの API は、選択された項目を取得し、次の Select または Combo のコンポーネントのデータソースを読み込み、選択をクリアしてデータソースをリセットします。

```html
<igx-select type="box" #cntr placeholder="Choose Country..."
    (onSelection)="selectCountry($event)" [(ngModel)]="location.country">
    <igx-select-item *ngFor="let c of countryData" [value]="c"> {{ c }} </igx-select-item>
</igx-select>
<igx-select type="box" #prvnc placeholder="Choose Province..." [disabled]="!cntr.value"
    (onSelection)="selectProvince($event)" [(ngModel)]="location.province">
    <igx-select-item *ngFor="let p of provinceData" [value]="p"> {{ p }} </igx-select-item>
</igx-select>
<igx-combo #twn [itemsMaxHeight]="225" [data]="townData" [disabled]="!prvnc.value"
    placeholder="Choose Town..." searchPlaceholder="Search..." [allowCustomValues]="false"
    [(ngModel)]="location.towns">
</igx-combo>

```

### コンポーネント定義
```typescript
import { Component } from "@angular/core";
import { data } from "./local-data";

@Component({
    selector: "app-combo",
    styleUrls: ["./cascading-combos.component.scss"],
    templateUrl: "./cascading-combos.component.html"
})
export class CascadingCombos {
    public location: { country: string, province: string, towns: string[] } = { country: "", province: "", towns: [] };
    public data = data;
    public countryData = [];
    public provinceData = [];
    public townData = [];

    constructor() {
        this.countryData = Object.keys(data);
    }

    public selectCountry(args) {
        this.provinceData = Object.keys(this.data[args.newSelection.value]);
        this.location.province = "";
        this.location.towns = [];
    }

    public selectProvince(args) {
        this.townData = this.data[this.location.country][args.newSelection.value];
        this.location.towns = [];
    }
}
```

## API まとめ
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-combo-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:
* [IgxSelectComponent]({environment:angularApiUrl}/classes/igxselectcomponent.html)  

## その他のリソース
<div class="divider--half"></div>

* [コンボ コンポーネント](combo.md)
* [コンボ機能](combo-features.md)
* [コンボ リモート バインディング](combo-remote.md)
* [コンボ テンプレート](combo-templates.md)
* [テンプレート駆動フォームの統合](input-group.md)
* [リアクティブ フォームの統合](input-group-reactive-forms.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)