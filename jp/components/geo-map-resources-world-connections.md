---
title: Angular マップ | ワールド コネクション | データソース | インフラジスティックス
_description: インフラジスティックスの Angular JavaScript マップ データ ユーティリティを使用して、空港の位置、飛行経路、および地理的なグリッド線を生成します。Ignite UI for Angular マップのサンプルを是非お試しください!
_keywords: Angular map, map data, Ignite UI for Angular, Infragistics, Angular マップ, マップ データ, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---

# Angular ワールド コネクション

リソース トピックは、空港の位置、飛行経路、および地理的なグリッド線を生成するためのデータユーティリティの実装を提供します。これらのデータソースを独自の地理データを作成するための参照点として使用できます。このユーティリティは [WorldUtil](geo-map-resources-world-util.md) と [WorldLocations](geo-map-resources-world-locations.md) スクリプトに依存していることに注意してください。

## コード スニペット

```ts
import WorldLocations from "./WorldLocations";
import WorldUtils from "./WorldUtils"

export default class WorldConnections {

    private static airports: any[] = [];
    private static airportsLookup = new Map<string, any>();

    private static flights: any[] = [];
    private static flightsLookup: string[] = [];

    public static getFlights(): any[] {
        if (this.flights.length == 0) this.init();
        return this.flights;
    }

    public static getAirports(): any[] {
        if (this.airports.length == 0) this.init();
        return this.airports;
    }

    public static comparePopulation(a: any, b: any): number {
        if (a.pop < b.pop) {
            return 1;
        }
        if (a.pop > b.pop) {
            return -1;
        }
        return 0;
    }

    public static init() {

        const cities: any[] = WorldLocations.getAll();
        cities.sort(this.comparePopulation);
        let count = cities.length;
        let minDistance = 200;
        let maxDistance = 9000;
        let flightsLimit = 1500;
        let flightsCount  = 0;

        for (let i = 0; i < count; i++) {
            let origin = cities[i];
            let connectionsCount = 0;
            let connectionsMax = Math.min(20, Math.round(origin.pop * 4));

            for (let ii = 0; ii < count; ii++)
            {
                let dest = cities[ii];
                if (origin.name != dest.name)
                {
                    let route = [origin.name, dest.name].sort().join('-');
                    let routeIsValid = this.flightsLookup.indexOf(route) == -1;
                    let distance = Math.round(WorldUtils.calcDistance(origin, dest));
                    let distanceIsValid = distance > minDistance && distance < maxDistance;
                    let pass = Math.round((Math.random() * 200)) + 150;
                    let time = distance / 800;
                    let trafficIsValid = origin.pop > 3 && dest.pop > 1.0;

                    if (routeIsValid && distanceIsValid && trafficIsValid) {
                         this.flightsLookup.push(route);

                        let paths = WorldUtils.calcPaths(origin, dest);
                        flightsCount++;
                        connectionsCount++;
                        let id = origin.name.substring(0,3).toUpperCase() + "-" + flightsCount;
                        let flight = { id: id, origin: origin, dest: dest, time: time, passengers: pass, distance: distance, points: paths };
                        this.flights.push(flight);
                    }
                    if (connectionsCount > connectionsMax) {
                        break;
                    }
                }
            }
            if (flightsCount > flightsLimit)  {
                break;
            }
        }

        for (const flight of this.flights) {
            this.addAirport(flight.origin);
            this.addAirport(flight.dest);
        }

        this.airports = Array.from(this.airportsLookup.values());
    }

    private static addAirport(city: any) {
        if (this.airportsLookup.has(city.name)) {
            this.airportsLookup.get(city.name).flights += 1;
        } else {
            let airport = Object.assign({flights: 1}, city );
            this.airportsLookup.set(city.name, airport);
        }
    }

    public static getGridlines(): any[] {
        let gridlines = [];
        // longitude lines
        for (let lon = -180; lon <= 180; lon += 30) {

            let line: any[] = [{x: lon, y: -90}, {x: lon, y: 90}];
            let points: any[] = [line];

            let coordinateLine = {points: points,
                degree: lon,
                direction: lon > 0 ? "E" : "W"
              };
              gridlines.push(coordinateLine);
        }
        // latitude lines
        for (let lat = -90; lat <= 90; lat += 30) {

            let line: any[] = [{x: -180, y: lat}, {x: 180, y: lat}];
            let points: any[] = [line];
            let coordinateLine = {points: points,
                degree: lat,
                direction: lat > 0 ? "N" : "S"
              };
              gridlines.push(coordinateLine);
        }
        return gridlines;
    }
}
```
