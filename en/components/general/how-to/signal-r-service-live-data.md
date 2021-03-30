---
title: How to create ASP.NET Core SignalR service for live-data streaming.
_description: Modern data grid & dock manager are used for application creation along with ASP.NET Core SignalR.
_keywords: angular, signalr, .net core, infragistics
---

# Real-time Web App with ASP.NET Core SignalR
In this topic, we’ll see how to create applications for both *streaming* and *receiving* data with **ASP.NET Core SignalR**. 

What you'll need:
- A basic knowledge of ASP.NET Core and Angular.
- .NET Core 3.1 installed and IDE such as Visual Studio.

What you'll know by the end of this article:
- How to add and use SignalR.
- How to open Client connection and use the *method invocation* concept to stream data per Client.
- How to consume the SignalR service with Angular application by using Observables.

SignalR takes advantage of several transports and it automatically selects the best available transport given the client and server's capabilities - [WebSockets, Server Send Events or Long-polling](https://stackoverflow.com/a/12855533/2940502).

When we talk in terms of [WebSockets](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-5.0) (Putting SSE and Long-polling out of the equation) when the client is real-time connected to the server, whenever something happens the server will know to send a message over that WebSocket back to the client. With old-school clients and servers, the Long-polling transport would be used.

This is how SignalR handles modern clients and servers, it uses WebSockets under the hood when available, and gracefully falls back to other techniques and technologies when it isn't:

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 950px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/ws-party-1.jpg"
  data-src="../../../images/general/how-to/ws-party-1.jpg"
  alt="How to party"
  title="How to party" />

It's like a handshake, the Client and Server agree on what to use and they use it. This is called **process negotiation**.

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/ws-lets-party.jpg"
  data-src="../../../images/general/how-to/ws-lets-party.jpg"
  alt="Let's use WebSocket"
  title="Let's use WebSocket" />

## SignalR Example
The purpose of this demo is to showcase a financial screen board with a Real-time data stream using [ASP.NET Core SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr).

<code-view style="height:700px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/grid-finjs-dock-manager/grid-finjs-dock-manager" alt="Angular Live-data Update Example with a service">
</code-view>

## SignalR Server Configuration

### Create ASP.NET Core App
Let's see how to set up the ASP.NET Core SignalR application.
In Visual Studio from *File* >> *New project* choose ASP.NET Core Web Application and follow the setup. Feel free to follow [the official Microsoft documentation tutorial](https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-3.1&tabs=visual-studio) if you experience any configuration difficulties.

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/create-new-project.jpg"
  data-src="../../../images/general/how-to/create-new-project.jpg"
  alt="Create new asp.net core project"
  title="Create new asp.net core project" />


### SignalR Config Setup

Add the following code to the [Startup.cs file](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Startup.cs):
- Endpoint part of the `Configure` method.

```cs
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapHub<StreamHub>("/streamHub");
});
```

- Add SignalR usage to the `ConfigureServices` method.

```cs
services.AddSignalR(options =>
{
    options.EnableDetailedErrors = true;
});
```

The changes above are adding SignalR to the ASP.NET Core dependency injection and routing system.

Now, let's set up additional basic configuration. Open the [properties/launchSettings.json](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Properties/launchSettings.json#L11) file and modify it accordingly:

```json
"profiles": {
    "WebAPI": {
      "commandName": "Project",
      "launchBrowser": false,
      "applicationUrl": "https://localhost:5001;http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
```
Our server-side project will run on `localhost:5001` and the client side will run on `localhost:4200`, so in order to establish communication between those two, we need to enable CORS. Let’s open the [Startup.cs](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Startup.cs#L31) class and modify it:

```cs
public void ConfigureServices(IServiceCollection services)
{
    services.AddCors(options =>
    {
        options.AddPolicy("CorsPolicy", builder => builder
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials()
        .WithOrigins("http://localhost:4200"));
    });
    ...

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        ...
        app.UseCors("CorsPolicy");
        ...
```

If you experience a specific problem with enabling Cross-origin resource sharing, check out the [official Microsoft topic](https://docs.microsoft.com/en-us/aspnet/core/signalr/security?view=aspnetcore-5.0#cross-origin-resource-sharing).
### SignalR Hub Setup
Let's start by explaining what is a [SignalR hub?](https://docs.microsoft.com/en-us/aspnet/core/signalr/hubs?view=aspnetcore-5.0#what-is-a-signalr-hub)
The SignalR Hub API enables you to call methods on connected clients from the server. In the server code, you define methods that are called by the client. In SignalR there is this concept called *Invocation* - you can actually be calling the hub from the client with a particular method. In the client code, you define methods that are called from the server.

The actual hub lives on the server-side. Imagine you have *Clients* and *the Hub* is between all of them. You can say something to all the Clients with `Clients.All.doWork()` by invoking a method on the hub. This will goes to all connected clients. Also, you can communicate with only one client, which is the Caller, because he is the caller of that particular method.

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/ws-hub-callers.jpg"
  data-src="../../../images/general/how-to/ws-hub-callers.jpg"
  alt="Hub example with callers"
  title="Hub example with callers" />

We've created a [StreamHub class](https://github.com/IgniteUI/finjs-web-api/blob/d493f159e0a6f14b5ffea3e893f543f057fdc92a/WebAPI/Models/StreamHub.cs#L9) that inherits the base Hub class, which is responsible for managing connections, groups, and messaging. It's good to keep in mind that the Hub class is stateless and each new invocation of a certain method is in a new instance of this class. It's useless to save state in instance properties, rather we suggest using static properties, in our case we use static key-value pair collection to store data for each connected client. 

Other useful properties of this class are *Clients*, *Context*, and *Groups*. They can help you to manage certain behavior based on the unique *ConnectionID*. Also, this class provides you with the following useful methods:
- OnConnectedAsync() - Called when a new connection is established with the hub.
- OnDisconnectedAsync(Exception) - Called when a connection with the hub is terminated.

They allow us to perform any additional logic when a connection is established or closed. In our application, we've also added *UpdateParameters* method that gets a *Context connection ID* and use it to send back data at a certain interval. As you can see we communicate over a unique *ConnectionID* which prevents a streaming intervention from other Clients.

```cs
public async void UpdateParameters(int interval, int volume, bool live = false, bool updateAll = true)
{
    ...
    var connection = Context.ConnectionId;
    var clients = Clients;
    ...
    if (!clientConnections.ContainsKey(connection))
    {
        clientConnections.Add(connection, new TimerManager(async() =>
        {
            ...
            await Send(newDataArray, client, connection);
        }, interval));
    } else
    {
        clientConnections[connection].Stop();
        clientConnections[connection] = new TimerManager(async () =>
        {
            var client = clients.Client(connection);
            ..
            await Send(newDataArray, client, connection);
        }, interval);
    }
    ...
}
```

When the data is ready we transfer it by emitting a `transferdata` event with the help of `SendAsync` Method.

```cs
public async Task Send(FinancialData[] array, IClientProxy client, string connection)
{
    await client.SendAsync("transferdata", array);
}
...

// Called when a connection with the hub is terminated
public override Task OnDisconnectedAsync(Exception exception)
{
    StopTimer();
    clientConnections.Remove(Context.ConnectionId);
    return base.OnDisconnectedAsync(exception);
}
```

Our client application would be listening to the registered events:

```ts
private registerSignalEvents() {
    this.hubConnection.onclose(() => {
        this.hasRemoteConnection = false;
    });
    this.hubConnection.on('transferdata', (data) => {
        this.data.next(data);
    })
}
```

The public GitHub repository of the [ASP.NET Core Application could be found here](https://github.com/IgniteUI/finjs-web-api).

## Create SignalR Client Library

We will create an Angular project in order to consume the SignalR service.
Github repository with the actual application can be found [here](https://github.com/IgniteUI/igniteui-angular-samples/tree/master/projects/app-lob/src/app/grid-finjs-dock-manager).

First, start by installing SignalR:

```
npm install @microsoft/signalr
```

Keep in mind that we are going to send the HTTP request towards our server, so we need HttpClientModule as well.

Below you will find the [signal-r.service.ts](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/projects/app-lob/src/app/services/signal-r.service.ts#L10) file that handles the hub connection builder.

```ts
export class SignalRService implements OnDestroy {
    public data: BehaviorSubject<any[]>;
    public hasRemoteConnection: boolean;
    private hubConnection: signalR.HubConnection;
    ...

    constructor(private zone: NgZone, private http: HttpClient) {
        this.data = new BehaviorSubject([]);
    }
    ...

    // Start Hub Connection and Register events
    public startConnection = (interval = 500, volume = 1000, live = false,  updateAll = true) => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Trace)
            .withUrl('https://www.infragistics.com/angular-apis/webapi/streamHub')
            .build();
        this.hubConnection
            .start()
            .then(() => {
                ...
                this.registerSignalEvents();
                this.broadcastParams(interval, volume, live, updateAll);
            })
            .catch(() => { ... });
    }

    // Change the broadcast parameters like frequency and data volume
    public broadcastParams = (frequency, volume, live, updateAll = true) => {
        this.hubConnection.invoke('updateparameters', frequency, volume, live, updateAll)
            .then(() => console.log('requestLiveData', volume))
            .catch(err => {
                console.error(err);
            });
    }

    // Register events
    private registerSignalEvents() {
        this.hubConnection.onclose(() => {
            this.hasRemoteConnection = false;
        });
        this.hubConnection.on('transferdata', (data) => {
            this.data.next(data);
        })
    }
    ...
```

In your app.component add use the newly created `startConnection` method

```ts
constructor(public dataService: SignalRService) {}
    public ngOnInit() {
        this.dataService.startConnection(this.frequency, this.dataVolume, true, false);
    }
...
```
### Grid Data Binding

As we have seen so far in our client code we set up a listener for `transferdata` event, which receives as an argument the updated data array. To pass the newly received data to our grid we use an observable. To set that, we need to bind the grid's data source to the data observable like so:

```html
<igx-grid [data]='data | async'> ... </igx-grid>
```

Every time when new data is received from the server to the client we call the `next()` method of the data observable.

```ts
    this.hubConnection.on('transferdata', (data) => {
        this.data.next(data);
    })
```

## Topic Takeaways

If you don’t want to refresh your application, rather just see when the data is updated, you should consider ASP.NET Core SignalR. I definitely recommend going for streaming content when you think your data is large, or if you want a smooth user experience without blocking the client by showing endless spinners.

Using SignalR Hub communication is easy and intuitive and with the help of Angular Observables, you can create a powerful application that uses data streaming with WebSockets.