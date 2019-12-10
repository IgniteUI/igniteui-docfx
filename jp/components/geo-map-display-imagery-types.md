---
title: マップ|データ可視化ツール|Ignite UI for Angular|地理的画像|Infragistics
_description: マップを使用すると、ビューモデルからの地理的位置を含むデータ、またはシェープファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## 地理的画像

地理的画像は、上空から見た世界の詳細な表現です。マルチ スケール画像タイル構造の航空衛星地図または道路地図で構成できます。地理的なマップ構成要素は、エンドユーザーに豊かでインタラクティブな世界地図や地理空間データのための地理的状況を提供するために地理的画像を表示できます。

### 地理的画像のタイプ

マップ コンポーネントは、サポートされている 3 つのマッピング サービスまたはアプリケーションに簡単に実装できる他のマッピング サービスからの地理的画像タイルを表示できます。

以下の表は、マップ コンポーネントでサポートされているカスタムの地理的画像ソースをまとめたものです。

| 画像               | 説明                                                                                                                           |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Open Street Maps | 1 色のテーマで道路地図スタイルだけを表示するためのオプションで、Open Street Maps サービスから地理的画像を提供します。                                                         |
| Bing Maps        | Bing Maps サービスの地理的画像に、以下の地図スタイルを表示するための設定可能なオプションがあります。<ul><li> 衛星地図のスタイル</li><li> ラベル付きの衛星地図のスタイル</li><li> ロードマップ スタイル</li> |

<!-- | Map Quest |Provides custom geographic imagery from Map Quest service with configurable options to display the following map styles:<ul><li>Satellite Map Style</li><li>Road Map Style</li></ul> -->

### マップ背景コンテンツ

マップ コンポーネントの BackgroundContent プロパティは、サポートされているすべての種類の地理的画像ソースを表示するために使用されます。画像ソースごとに、対応する地理的画像タイルのレンダリングに使用される画像クラスがあります。

以下の表は、xamGeographicMap  コントロールによって提供される画像クラスを簡単に説明します。

| 画像クラス                                                                                                              | 説明                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| [`GeographicMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/geographicmapimagery.html) | サポートされている地理的画像タイルのすべてのタイプを表示するすべての画像クラスの基本コントロールを表します。このクラスは、Map Quest マッピング サービスなどの他の地理的画像ソースから地理的画像タイルのサポートを実装する目的のために拡張できます。 |
| [`OpenStreetMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/openstreetmapimagery.html) | Open Street Maps サービスから地理的画像タイルを表示するためのマルチスケール画像コントロールを表します。                                                                    |

<!-- |`BingMapsMapImagery`|Represents the multi-scale imagery control for displaying geographic imagery tiles from the Bing Maps service.| -->

デフォルトでは、`BackgroundContent` プロパティは [`OpenStreetMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/openstreetmapimagery.html) オブジェクトに設定され、マップコンポーネントはOpen Street Mapsサービスからの地理的画像タイルを表示します。さまざまな種類の地理的画像タイルを表示するには、マップ コンポーネントを再設定する必要があります。

さらに、`BackgroundContent` プロパティは、このクラスを継承するオブジェクトに設定できます。ただし、[`GeographicMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/geographicmapimagery.html) クラスを継承するオブジェクトだけが、マップ背景コンテンツのパンおよびズームができます。

マップ コンポーネントでは、マップの背景コンテンツは常にすべての地理的シリーズの背後にレンダリングされます。つまり、地理的画像タイルは常に最初にレンダリングされ、マップ コンポーネントの Series プロパティ内の地理的シリーズは地理的画像タイルの上にレンダリングされます。地理的画像タイルはマップ ビューにすばやく埋め込まれるため、これは、マップ コンポーネントの同じプロット領域に複数の地理的シリーズを表示する場合に特に重要です。

### コード スニペット

このコード例では、マップコンポーネントの `BackgroundContent` を、[`OpenStreetMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/openstreetmapimagery.html) の地理的画像タイルを提供する OpenStreetMapImagery オブジェクトに明示的に設定しています。
