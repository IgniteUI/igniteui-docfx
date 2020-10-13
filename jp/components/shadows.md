---
title: エレベーション/シャドウ
_description:
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# Shadows

Shadows は、Document Object Model ツリーの間に境界線を描画し、機能のカプセル化を向上します。

## エレベーション
<div class="elevations row">
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-1">
            <p class="variable">
                Level 1
            </p>
            <p class="css">
                box-shadow:
                <br>0 1px 3px 0 palette(gray, 400),
                <br>0 1px 1px 0 palette(gray, 300),
                <br>0 2px 1px -1px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-2">
            <p class="variable">
                Level 2
            </p>
            <p class="css">
                box-shadow:
                <br>0 1px 5px 0 palette(gray, 400),
                <br>0 2px 2px 0 palette(gray, 300),
                <br>0 3px 1px -2px palette(gray, 200);
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-3">
            <p class="variable">
                Level 3
            </p>
            <p class="css">
                box-shadow:
                <br>0 1px 8px 0 palette(gray, 400),
                <br>0 3px 4px 0 palette(gray, 300),
                <br>0 3px 3px -2px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-4">
            <p class="variable">
                Level 4
            </p>
            <p class="css">
                box-shadow:
                <br>0 2px 4px -1px palette(gray, 400),
                <br>0 4px 5px 0 palette(gray, 300),
                <br>0 1px 10px 0 palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-6">
            <p class="variable">
                Level 6
            </p>
            <p class="css">
                box-shadow:
                <br>0 3px 5px -1px palette(gray, 400),
                <br>0 6px 10px 0 palette(gray, 300),
                <br>0 1px 18px 0 palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-8">
            <p class="variable">
                Level 8
            </p>
            <p class="css">
                box-shadow:
                <br>0 5px 5px -3px palette(gray, 400),
                <br>0 8px 10px 1px palette(gray, 300),
                <br>0 3px 14px 2px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-9">
            <p class="variable">
                Level 9
            </p>
            <p class="css">
                box-shadow:
                <br>0 5px 6px -3px palette(gray, 400),
                <br>0 9px 12px 1px palette(gray, 300),
                <br>0 3px 16px 2px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-12">
            <p class="variable">
                Level 12
            </p>
            <p class="css">
                box-shadow:
                <br>0 7px 8px -4px palette(gray, 400),
                <br>0 12px 17px 2px palette(gray, 300),
                <br>0 5px 22px 4px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-16">
            <p class="variable">
                Level 16
            </p>
            <p class="css">
                box-shadow:
                <br>0 8px 10px -5px palette(gray, 400),
                <br>0 16px 24px 2px palette(gray, 300),
                <br>0 6px 30px 5px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-24">
            <p class="variable">
                Level 24
            </p>
            <p class="css">
                box-shadow:
                <br>0 11px 15px -7px palette(gray, 400),
                <br>0 24px 38px 3px palette(gray, 300),
                <br>0 9px 46px 8px palette(gray, 200)
            </p>
        </div>
    </div>
</div>

## 使用方法

<div class="elevate-image">
    <img width="100%" height="100%" src="../images/whatismaterial_3d_elevation2.jpg" alt="Shadows Usage">
</div>

## エレベーションの追加方法

以下はコンポーネントにエレベーションを設定する方法を示します。この例では card コンポーネントを使用しています。

はじめに以下の方法で [igx-elevation]({environment:sassApiUrl}/index.html#function-igx-elevation) をカードに適用します。

```scss
$myCard: igx-card-theme(
    $resting-shadow: igx-elevation($elevations, 10)
);

@include igx-card($myCard);

// 以下にコンパイルされます。

.igx-card {
  box-shadow: 
    0 6px 6px -3px rgba(0, 0, 0, 0.26),
    0 10px 14px 1px rgba(0, 0, 0, 0.12),
    0 4px 18px 3px rgba(0, 0, 0, 0.08);
}
```

マテリアル ガイドラインに沿ってシャドウが生成されました。

シャドウの色を変更するには igx-elevations 関数を使用してデフォルトをオーバーライドします。
 ```scss
...
// Define the 3 elevation colors

$color-1: rgb(153, 191, 170); // Umbra
$color-2: rgb(92, 134, 141); // Penumbra
$color-3: rgb(92, 61, 70); // Ambient

// igx-elevations使用して 3 つすべてのボックスシャドウに
// コスチューム カラーで sass マップを生成します。

$elevations-color: igx-elevations($color-1, $color-2, $color-3);

// igx-elevation を使用してエレベーション レベルを設定します。
$mySpecialCard: igx-card-theme(
    $resting-shadow: igx-elevation($elevations-color, 10)
);

// カスタム エレベーションを特定のセレクターにスコープすることもできます。
.special-card {
  @include igx-card($mySpecialCard);
}

// 次にコンパイルされます。

.special-card .igx-card {
  box-shadow: 
    0 6px 6px -3px rgb(153, 191, 170),
    0 10px 14px 1px rgb(92, 134, 141),
    0 4px 18px 3px rgb(92, 61, 70);
}

```

また関数を利用せずに box-shadow を設定することもできます。
```scss
$myboringCard: igx-card-theme(
    $resting-shadow: 0 10px 10px 10px #666
);

.boring-card{
  @include igx-card($myboringCard);
}

// 以下にコンパイルされます。

.boring-card .igx-card {
  box-shadow: 0 10px 10px 10px #666;
}
```


以下は上記コードスニペットの結果です。

<div class="sample-container loading" style="height: 470px">
    <iframe id="card-sample-shadow-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/theming/card-sample-shadow" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="card-sample-shadow-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-shadow-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>


<div class="divider--half"></div>


## API リファレンス

* [IGX-ELEVATION]({environment:sassApiUrl}/index.html#function-igx-elevation)
* [IGX-ELEVATIONS]({environment:sassApiUrl}/index.html#function-igx-elevations)


