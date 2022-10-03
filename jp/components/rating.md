---
title: Angular Rating | 評価 | Ignite UI | インフラジスティックス
_description: Ignite UI Angular Rating を使用すると、ユーザーは Unicode シンボル、SVG、またはアイコンを使用してフィードバックを表示および提供できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, Native Angular コンポーネント Library, Angular Rating コンポーネント, Angular Rating コントロール
_language: ja
---
# Rating (評価)

Ignite UI Rating コンポーネントを使用すると、ユーザーのフィードバックを表示および入力できます。

## Angular Rating の例

<code-view style="height: 550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-with-rating" alt="Angular Rating の例">
</code-view>


<div class="divider--half"></div>


## 基本的な使用方法

Ignite UI Rating は標準の[ウェブ コンポーネント](https://developer.mozilla.org/ja/docs/Web/Web_Components)であるため、Angular アプリケーションで使用できます。

以下の手順に従って、Ignite UI Web Components のパッケージを Angular プロジェクトに追加し、コンポーネントを使用するためにセットアップします。

最初に、`igniteui-webcomponents` パッケージをインストールします。

```cmd
npm install igniteui-webcomponents --save
```

次に、`main.ts` ファイルまたは `IgcRating` を使用しているコンポーネントの `.ts` ファイルで `IgcRatingComponent` 引数を指定して `defineCustomElements()` 関数を呼び出す必要があります。

```typescript
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);
```

また、`AppModule` に `CUSTOM_ELEMENTS_SCHEMA` スキーマを含める必要があります。

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

これらを使用して、Angular コンポーネント テンプレートに Rating コンポーネントを追加し、その入力と表示を使用できるようになります:

```html
<igc-rating value="ratingVal" min="1" max="5" (igcChange)="ratingChanged($event);"></igc-rating>
```

## Angular フォームで Rating を使用する

Angular フォームでは、多くの場合、コンポーネントはその値を `ngModel` にバインドしたり、Angular の `ControlValueAccessor` インターフェイスの実装を必要とする `formControl` を使用したりできる必要があります。Ignite UI for Angular パッケージは、要素セレクターを使用してサポートされているウェブ コンポーネントにアタッチするディレクティブの形式で、このような実装を提供します。現在、サポートされているコンポーネントは `IgcRating` のみです。ディレクティブを使用するには、ライブラリから `IgcFormsModule` をインポートするだけです。

```typescript
import { IgcFormsModule } from 'igniteui-angular';

@NgModule({
    imports: [
        IgcFormsModule
    ]
})
export class AppModule { }
```

>[!NOTE]
>`IgcFormsModule` をインポートして `ngModel` または `formControl` を使用する場合、Angular はカスタム `ControlValueAccessor` ディレクティブによって `igc-rating` タグを認識するため、`CUSTOM_ELEMENTS_SCHEMA` を含める必要はありません。

たとえば、値に ngModel を使用して評価を追加すると、問題なくモデルと双方向にバインドされます。

```html
<igc-rating name="modelRating" [(ngModel)]="model.Rating" max="10" label="Model Rating"></igc-rating>
```

次のアプリケーションは、フォームを使用した実際のユースケースでこの統合がどのように機能するかを示す一例です。

<code-view style="height: 550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/rating-form" alt="Angular Rating の例">
</code-view>

Rating コンポーネントの使用方法の詳細については、[このトピック]({environment:infragisticsBaseUrl}/products/ignite-ui-web-components/web-components/components/inputs/rating.html)を参照してください。
