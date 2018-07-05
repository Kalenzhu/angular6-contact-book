
## Installing loopback CLI
```ssh
npm install -g loopback-cli
```

## Create new Loopback app
Create new app using CLI's `lb` command
Once you hit `lb` command you need to provide the details like project name, etc and loopback will generate app for you.


Below it shows how i used lb command in my terminal. For detailed step checkout [Loopback documentation](https://loopback.io/doc/en/lb3/Create-a-simple-API.html#create-new-application)
```ssh
Varuns-MacBook-Air:angular6-contact-book varunsukheja$ lb
? What's the name of your application? angular6-contact-book
? Which version of LoopBack would you like to use? 3.x (current)
? What kind of application do you have in mind? api-server (A LoopBack API server with local User auth)
Generating .yo-rc.json
.
.
.
```

> NOTE: You can also create project using `slc` or `apic` but it is recommended to use `lb` with version 3.x of loopback, because slc and apic are legacy since v3.x.


## Create new Data Source
Loopback provides you to have various databases like
  - Memory
  - MongoDB
  - MySQL
  - Elastic Search
  - Oracle
  and many more

> For creating data sources to connect to various databases checkout [loopback documentation](https://loopback.io/doc/en/lb2/Memory-connector.html#creating-a-data-source)

I am going to create a new data source named as **fileSystem** which will be a **In-memory db** and it will store all of its data in a json file to which I will name as **data.json**.

```ssh
Varuns-MacBook-Air:angular6-contact-book varunsukheja$ lb datasource
? Enter the datasource name: fileSystem
? Select the connector for fileSystem: In-memory db (supported by StrongLoop)
? window.localStorage key to use for persistence (browser only):
? Full path to file for persistence (server only): data/data.json
```

> Persisting data in file check [loopback documentation](https://loopback.io/doc/en/lb2/Memory-connector.html#data-persistence)


## Create new Data Model
I am going to create a new data model **Contact**, which will have below mentioned attributes

| Field         | Description      |
| ------------- |:---------------: |
| firstName     | First Name       |
| lastName      | Last Name        |
| phoneNumber   | Phone Number     |
| email         | Email            |
| isActive      | Status (Active/Inactive)|
| country       | Country (India)  |
| countryCode   | Country Code(+91)|

To create a data model we use cmd
```
Varuns-MacBook-Air:angular6-contact-book varunsukheja$ lb model
? Enter the model name: Contact
? Select the datasource to attach Contact to: fileSystem (memory)
? Select model's base class PersistedModel
? Expose Contact via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? common
Let's add some Contact properties now.

Enter an empty property name when done.
? Property name: firstName
   invoke   loopback:property
? Property type: string
? Required? Yes
? Default value[leave blank for none]:

Let's add another Contact property.
Enter an empty property name when done.
? Property name:

.
.
.

```

Keep adding the rest attributes as shown in above snippet and once done just hit enter, and that's it you are done with creating new model.


> For step by step explanation please look here in  [loopback documentation](https://loopback.io/doc/en/lb3/Create-a-simple-API.html#create-models)



## Run server and API explorer
To run your loopback server just type cmd `node .`

```ssh
Varuns-MacBook-Air:angular6-contact-book varunsukheja$ node .
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer
```

Once you see above message it means your server is running at http://localhost:3000.
To browse API explorer just http://localhost:3000/explorer into your browser.
You will see Contact and User model. Contact is created by us and User is created by loopback.
When you click on Contact you will come to see various auto-generated REST APIs, you can try to hit those APIs from API explorer itself.

> Loopback explains how to use API explorer very brilliantly here in [loopback documentation](http://loopback.io/doc/en/lb3/Use-API-Explorer.html)
