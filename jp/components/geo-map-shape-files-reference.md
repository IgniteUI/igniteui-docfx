---
title: Angular マップ | データ可視化ツール | シェープ ファイル リファレンス | シェープ ファイルの編集 | インフラジスティックス
_description: インフラジスティックスの Angular マップで使用するシェープ ファイル形式について説明します。Ignite UI for Angular マップ チュートリアルを是非お試しください!
_keywords: Angular map, shape files, Ignite UI for Angular, Infragistics, shape editing, Angular マップ, シェープ ファイル, シェイプの編集, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
---

# Angular シェープ ファイルの参照

## 目的

このトピックでは、マップおよび関連する地理的素材についてのリソースおよびシェープ ファイルの情報を提供します。これらのリソースを使用して、Ignite UI for Angular マップ コンポーネント™ コントロールに地理空間データをバインドする前に編集で使用するツールおよびシェープ ファイルを取得します。

## リソース

## 地理空間の概要

以下はコントロールで地理空間データをプロットする際に役立つマップおよび地理空間データについての一般的な情報を提供します (英語)。

-   [Wikipedia - マップ製作法](http://en.wikipedia.org/wiki/Cartography)

-   [米国国勢地図 - 地理的位置](http://nationalatlas.gov/articles/mapping/a_latlong.html)

-   [米国国勢地図 - マップ プロジェクション](http://nationalatlas.gov/articles/mapping/a_projections.html)

-   [米国地質調査所](http://www.usgs.gov/)

-   [Wikipedia – マップ プロジェクション](http://en.wikipedia.org/wiki/Map_projection)

-   [コロラド大学 – マップ プロジェクション](http://www.colorado.edu/geography/gcraft/notes/mapproj/mapproj_f.html)

-   [CSISS – マップ プロジェクション](http://www.csiss.org/map-projections/index.html)

## シェイプ ファイルのフォーマット

Angular [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html)コントロールは、地理空間データのソースとして人気の高い[シェープ ファイル (英語)](http://en.wikipedia.org/wiki/Shapefile#Overview) フォーマットを使用します。シェープ ファイルは他のファイル タイプと一緒に配布されます。一般的なファイルには、_.shp_、_.shx_、および _.dbf_ の拡張子が付いています。

以下の表は、シェープ ファイルの各タイプの基本情報および目的を提供しています。

| ファイルの拡張子 | 説明                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.shp`   | シェープ ファイルは、ポイント、ポリライン、および多角形を記述する地理空間ベクトルのデータ項目を含みます。このファイルでは、ポイントは都市、ポリラインは道路、多角形は地理的コンテキストの国々の図形 / 境界線を表します。                                          |
| `.shx`   | シェイプ インデックス ファイルには、地理空間ベクトルのデータ項目を素早く検索するためのインデックスが含まれます。                                                                                               |
| `.dbf`   | シェイプ データベース ファイルには、シェイプ (.shp) ファイルからの各地理空間のデータ項目に行が対応するテーブルが含まれます。シェイプ データベース ファイルでは、文字列の列は、文字列 (国、地域、都市の名前) と数値列 (国々の人口、都市の場所) などの地理空間のデータ項目の属性を表します。 |

地理空間データがシェープ ファイルでどのように保存されるかについての情報と仕様は、以下のリソースを参照してください。

-   [シェープファイル技術解説 (英語)](http://www.esri.com/library/whitepapers/pdfs/shapefile.pdf)

-   [Wikipedia - シェープファイル概要](http://ja.wikipedia.org/wiki/シェープファイル#概要)

## シェイプ ファイルのツール

以下のリストは、シェープ ファイルを編集するためのリソース ツールを提供しています。(英語)

-   [MapWindow – Shape (.shp) および Database (.dbf) ファイル エディター](http://www.mapwindow.org/)

-   [Open Office – Database (.dbf) ファイル エディター](http://openoffice.org/)

-   [DBF Editor - Database (.dbf) ファイル エディター](http://dbfeditor.com/)

-   [DBF View - Database (.dbf) ファイル エディター](http://dbfview.com/view-dbf-file.html)

-   [Satellite Signals – 地理空間の計算機](http://www.satsig.net/degrees-minutes-seconds-calculator.htm)

-   [RITA – NORTAD ファイル-シェイプ ファイルのコンバーター](http://www.bts.gov/publications/north_american_transportation_atlas_data/html/data_converter.html)

## シェイプ ファイル データ ソース (英語)

以下のリストは、シェープ ファイルを取得するためのリソースを提供しています。また、[`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) コントロールのサンプルは、シェープ ファイルの良い情報源になります。これらのシェープ ファイルは、Samples Browser のインストーラーに含まれています。

-   [ESRI - 世界地図データ](http://www.esri.com/data/download/basemap/index.html)

-   [ESRI - Census 2010 Tiger/Line® - シェープ ファイル](http://www.census.gov/geo/www/tiger/tgrshp2010/tgrshp2010.html)

-   [米国国勢地図 - シェープ ファイル](http://www.nationalatlas.gov/atlasftp.html)

-   [米商務省統計局 - 地図製作の境界ファイル](http://www.census.gov/geo/www/cob/index.html)

-   [米商務省統計局 - 2007 Tiger/Line® - シェープ ファイル](http://www.census.gov/cgi-bin/geo/shapefiles/national-files)

-   [U.S. Federal Executive Branch – Raw Data](https://explore.data.gov/catalog/raw/)

-   [NOAA – シェープ ファイル](http://www.nws.noaa.gov/geodata/)

-   [CDC - シェープ ファイル](http://wwwn.cdc.gov/epiinfo/script/shapefiles.aspx)

-   [マサチューセッツ地域情報システム](http://www.mass.gov/mgis/massgis.htm)

-   [Geo Commons – シェープ ファイル](http://geocommons.com/searches?query=shapefiles)

-   [Geo Community – シェープ ファイル](http://data.geocomm.com/catalog/)

-   [RITA – NORTAD ファイル (シェープ ファイルに変換する必要がある)](http://www.bts.gov/publications/north_american_transportation_atlas_data/)

-   [MapCruzin – シェープ ファイル](http://www.mapcruzin.com/download-free-arcgis-shapefiles.htm)

#### その他リソース

このトピックに関連する追加情報については、以下のトピックを参照してください。

-   [シェープファイルのバインディング](geo-map-binding-shp-file.md)
-   [地理的シリーズ](geo-map-type-series.md)
