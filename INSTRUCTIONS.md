- [Pre-requisites](#pre-requisites)
  - [1- Environment Setup](#1--environment-setup)
  - [2- Creating tv-shows project](#2--creating-tv-shows-project)
- [Implementation](#implementation)
  - [1- Creating ShowsListComponent](#1--creating-showslistcomponent)
  - [2- Installing bootstrap & font-awesome](#2--installing-bootstrap--font-awesome)
  - [3- Databinding](#3--databinding)
  - [4- Directives](#4--directives)
  - [5- Nested Components](#5--nested-components)
  - [6- Interfaces](#6--interfaces)
  - [7- Shows Service](#7--shows-service)
  - [8- HTTP](#8--http)
  - [9- Routing](#9--routing)
  - [10- Finalization](#10--finalization)

# Pre-requisites

## 1- Environment Setup

To setup your development environment please do the following steps:
- Download and Install [VSCode](https://code.visualstudio.com/download)  
- Install Angular Essentials (Version 11) extension in VSCode
- Install latest [Node.js LTS](https://nodejs.org/en/) 
- Install the *angular cli* by running `npm install -g @angular/cli`
- Run the below commands to make sure the steps above are done successfully:
    - `node -v`
    - `npm -v`
    - `ng v` (this should return an Angular version greater than 9)
    - Download the [repository](https://github.com/murex/tv-shows-app/) main branch [here](https://github.com/murex/tv-shows-app/archive/refs/heads/main.zip) 


## 2- Creating tv-shows project

Now let's create our **Angular** tv-shows project:
- Go to the desired directory
- Open CMD
- Run: `ng new tv-shows --skip-tests --prefix tv`
- This launches the project wizard:
    - If prompted for stricter type checking
        - type: **y**
    - If prompted to add Angular routing
        - type: **y**
    - If asked for which stylesheet format (default is CSS)
        - hit **enter**
- Run: `cd tv-shows`
- To open VS code, run: `code .`


# Implementation

`Note: Each of the following steps corresponds to one of the branches in the application's repository. You can navigate to the corresponding branch by click on the section's title`

## [1- Creating ShowsListComponent](https://github.com/murex/tv-shows-app/tree/1-tv-shows-shows-list-component)

In this section, we will create a new component called ShowsListComponent and render it. Here are the steps to do so:

- Open terminal in VS code
- Create the ShowsList component by running: `ng g c ShowsList`
- Empty the **app.component.html**
- Remove the title property from the **app.component.ts**
- Render the **ShowsListComponent** by adding its **selector** to the **app.component.html** as follows: `<tv-shows-list></tv-shows-list>`
- In **package.json**, in order to have the default browser automatically open when the application is served replace **“ng serve”** with **“ng serve -o”** 
- Run the application: `npm start`


## [2- Installing bootstrap & font-awesome](https://github.com/murex/tv-shows-app/tree/2-tv-shows-bootstrap-fontawesome)

In this section, we will install bootstrap and font-awesome in our project for styling and icons and define the layout (header, main, footer) of our application. Here are the steps to do so:

- Open terminal in VS code
- Install bootstrap and font-awesome libraries
- Run: `npm install bootstrap font-awesome`
- Copy app.component.html from the repo [here](https://github.com/murex/tv-shows-app/blob/main/data/html%20files/app.component.html) 
- In the **app.component.html**, render the **ShowsListComponent** by adding its *selector* as follows:
```html    
    <main class="app-content">
        <div class="py-5 container">
        <tv-shows-list><tv-shows-list>
        </div>
    </main>
```
- Copy **style.css** from the repo [here](https://github.com/murex/tv-shows-app/blob/main/data/css/styles.css)
- Run the application: `npm start`


## [3- Databinding](https://github.com/murex/tv-shows-app/tree/3-tv-shows-add-databinding)

In this section, we will use databinding to display show cards based on sample data. Here are the steps to do so:

- Copy **shows-list.component.html** from the repo [here](https://github.com/murex/tv-shows-app/blob/main/data/html%20files/shows-list.component.html) 
- In the **shows-list.component.ts** file, define the below shows array in the class:
```js
shows: any[] = [
    {
        name: 'Wonder Woman',
        summary:
            "A colorful spin on Charles Moulton's comic about the Amazon goddess battling evil during World War II and later, in more recent times, against new enemies",
        genres: ['Action', 'Adventure', 'Science-Fiction'],
        img: 'https://static.tvmaze.com/uploads/images/medium_portrait/7/18638.jpg',
        rating: 6.3,
    },
    {
        name: 'The Pioneer Woman',
        summary:
            "The Pioneer Woman is an open invitation into Ree Drummond's life",
        genres: ['Food'],
        img: 'https://static.tvmaze.com/uploads/images/medium_portrait/228/571473.jpg',
        rating: 6.9,
    },
    {
        name: 'The Bionic Woman',
        summary: "She's no ordinary schoolteacher…she's The Bionic Woman",
        genres: ['Action', 'Adventure', 'Science-Fiction'],
        img: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2303.jpg',
        rating: 7.6,
    },
    {
        name: 'A Passionate Woman',
        summary:
            'Feeling trapped inside her conventional marriage, she abandons herself to a passion she never before dared believe possible',
        genres: ['Drama', 'Romance'],
        img: 'https://static.tvmaze.com/uploads/images/medium_portrait/27/68133.jpg',
        rating: 2,
    },
];
```
- Add **string interpolation** to bind the card header and card paragraph to the show name and show summary respectively.
-  Then add **property binding** to bind the img src attribute to the show img. 
- Finally add **event binding** to invoke `onSearchChanged()` when the input change event is fired. 
- Your **shows-list.component.html** and **shows-list-component.ts** files should look similar to the ones in the repo [here](https://github.com/murex/tv-shows-app/tree/3-tv-shows-add-databinding/3-tv-shows-add-databinding/src/app/shows-list)
- Run the application: `npm start`

## [4- Directives](https://github.com/murex/tv-shows-app/tree/4-tv-shows-add-directives)

In this section, we will use angular built-in directives to display multiple show cards dynamically. Here are the steps to do so:

- In the **app.module.ts**
    - Import **FormsModule** as such 
        ```js
        import { FormsModule } from '@angular/forms'
        ```
    - Add **FormsModule** (for the ngModel to work) to the imports array right after AppRoutingModule
- In the **shows-list.component.ts**:
    - Define a property searchString and set its default value to *“woman”*
    - Change the `onSearchChanged` method to look like this:
        ```js
            onSearchChanged() {
                console.log(`Search string has changed to ${this.searchString}`;
            }
        ```
- In the **shows-list.component.html**:
    - Remove the duplicated section `<div class="col">....</div>`
    - Loop over the shows using `*ngFor` and display a column per show
    - Add a conditional using `*ngIf` to display the shows when the array is not empty
    - Loop over the show genres using `*ngFor` and display each in a badge
    - Use **2 way binding**, ngModel, to bind the input field value to the  searchString property
    - Format the rating using the **number pipe**.
    
    The resulting files should look similar to [this](https://github.com/murex/tv-shows-app/blob/4-tv-shows-add-directives/4-tv-shows-add-directives/src/app/shows-list/)
    - Run the application: `npm start`
    - Change **woman** in the **search field** to **engineer** for example then hit enter, click **F12** and check the **console**

## [5- Nested Components](https://github.com/murex/tv-shows-app/tree/5-tv-shows-show-card-component)

In this section, we will be introducting nested components and parent->child communication. Here are the steps to do so:

- Navigate to `.\src\app\shows-list\`
- Create the **ShowCard** component by running: `ng g c ShowCard`
- Cut the below from **shows-list.component.html** and paste it into the newly created **show-card-component.html**
    ```html
    <div class="card h-100 show-list-card">
        <img class="card-img-top" [src]="show.img" />
        <div class="card-body">
          <h5 class="text-center">{{ show.name }}</h5>
          <p class="card-text">{{ show.summary }}</p>
        </div>
        <div class="card-footer">
          <span class="badge rounded-pill bg-secondary" *ngFor="let genre of show.genres">{{genre}}</span>
          <span class="float-end"
            ><i class="fa fa-star">{{ show.rating | number: "1.1-1" }}</i>
          </span>
        </div>
        <a class="stretched-link"></a>
      </div>
    ```
- In **show-card.component.ts**, define a show **input** property as follows (don't forget to import **Input**): 
    ```js
    import { Input } from '@angular/core';
    @Input() show: any
    ```
- Add the **tv-show-card selector** in the **shows-list.component.html** and **pass in** the show from the container component **ShowsListComponent** to the **nested** **ShowCardComponent** like this: 
    ```html
    <div class="col" *ngFor="let show of shows">
      <tv-show-card *ngIf="show" [show]="show"></tv-show-card>
    </div>
    ``` 
- Run the application: `npm start`

## [6- Interfaces](https://github.com/murex/tv-shows-app/tree/6-tv-shows-show-data-type)
In this section, we will define a new datatype and use it for safe type checking. Here are the steps to do so:

- Navigate to `.\src\app\` in the terminal
- Run `mkdir models` to create the models directory
- Run `cd .\models\`
- Create the **Show** interface by running: `ng i Show`
- Inside the newly created, **show.ts** file, define the different Show properties as follows:
    ```js
    export interface Show {
        name: string;
        summary: string;
        rating: number;
        img: string;
        genres: string[];
    }
    ```
- In the **shows-list.component.ts**:
    - Replace **any** with **Show** as it is now a data type
    - Populate the shows inside the **ngOnInit** instead + add the import statement for **Show**
    - Your file should look similar to the below:
        ```js
        import { Show } from 'src/app/models/show';
        // component class declaration ...
        shows: Show[] = [];

        ngOnInit(): void {
            this.shows = [
                // use the previously defined data
            ]
        }
        ```
- In the **show-card.component.ts**, replace **any** with **Show** and add the import statement
    ```js
    import { Show } from 'src/app/models/show';

    @Input() show!: Show;
    ```
- Run the application: `npm start`

To avoid having an empty page in case no data was available, in the **shows-list.component.html** add an else block for when the list of shows is empty. The result should look like this:

```html
<div class="container py-5">
<div
    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"
    *ngIf="shows.length > 0; else elseblock"
>
    <div class="col" *ngFor="let show of shows">
        <tv-show-card *ngIf="show" [show]="show"></tv-show-card>
    </div>
</div>
<ng-template #elseblock>
    <h2 class="text-center text-muted">
        <i>There are no shows to be displayed</i>
    </h2>
</ng-template>
</div>
```

To see this newly added header in the else block, temporarily comment out the content of the shows array in **shows-list.component.ts**. (Do not forget to uncomment it back 😊)

## [7- Shows Service](https://github.com/murex/tv-shows-app/tree/7-tv-shows-shows-service)

In this section, we will create the **ShowsService** which will populate the list of shows for us instead of populating it in our **ShowsListComponent**. Here are the steps to do so:

- Navigate to `.\src\app\`
- Run `mkdir services` to create the services directory
- Run `cd .\services\`
- Create the Shows service using: `ng g s Shows`
- In the newly create **show.service.ts**, create a `getShows` method that returns an array of shows (don't forget to **import Show**) as such:
    ```js
    import { Show } from 'src/app/models/show';
    // service class definition ...
    getShows(): Show[] {
        return [
            // use the previously defined data
        ]
    }

    ```
- In the **shows-list.component.ts** inject the **ShowsService**, import it and call the **getShows()** inside the **ngOnInit()** instead of initalizing the shows in the component itself as such:
    ```js
    // component class definition...
    constructor(private showsService: ShowsService) {}

    ngOnInit(): void [
        this.shows = this.showsService.getShows();
    ]
    ```
- Run the application: `npm start`

## [8- HTTP](https://github.com/murex/tv-shows-app/tree/8-tv-shows-plug-http)

In this section, we will interact with a **backend** using **http** to retrieve real data and have this data change automatically based on user input. Here are the steps to do so:

- In the **app.module.ts** add the **HttpClientModule** in the imports array and import it as such:
    ```js
    import { HttpClientModule } from '@angular/core/http'
    ```
- In the **shows.service.ts**:
    - Inject the **HttpClient** service and import it from` @angular/core/http`
    - Add a **searchShowsUrl** property whose value = `http://api.tvmaze.com/search/shows?q=woman`
- Replace the content of **show.ts** with that in the repo [here](https://github.com/murex/tv-shows-app/blob/main/data/interfaces/show.ts) to match the json response returned by the **API call** at `http://api.tvmaze.com/search/shows?q=woman`
- Back to the **show.service.ts**, implement the `getShows()` by calling http.get() instead of returning hardcoded sample data. For this you need to add imports for the **ShowResponse** and **Observable**. The service will eventually look like this:

    ```js
    import { Observable } from 'rxjs';
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Show, ShowResponse } from '../models/show';

    @Injectable({
    providedIn: 'root'
    })
    export class ShowsService {

    searchShowsUrl = "http://api.tvmaze.com/search/shows?q=woman";

    constructor(private http: HttpClient) { }

    getShows(): Observable<ShowResponse[]> {
        return this.http.get<ShowResponse[]>(this.searchShowsUrl);
    }
    }
    ```
- In the **shows-list.component.ts**:
    - Change the shows data type to **ShowResponse** and import it. Then subscribe to the **observable** returned by `getShows()`
    - **Unsubscribe** from the observable by implementing the **OnDestroy** hook (import OnDestroy)
    - Your file should now look similar to this:
        ```js
        import { Subscription } from 'rxjs';
        import { Show } from '../models/show';
        import { ShowsService } from '../services/shows.service';
        import { Component, OnDestroy, OnInit } from '@angular/core';

        @Component({
        selector: 'tv-shows-list',
        templateUrl: './shows-list.component.html',
        styleUrls: ['./shows-list.component.css']
        })
        export class ShowsListComponent implements OnInit, OnDestroy {
            searchString = "woman";
            shows: ShowResponse[] = [];
            subscription!: Subscription;

            constructor(private showsService: ShowsService) {}

            ngOnInit(): void {
                this.subscription = this.showsService.getShows().subscribe( response => this.shows = response);
            }

            onSearchChanged() {
                console.log(`Search string has changed to ${this.searchString}`);
            }

            ngOnDestroy(): void {
            this.subscription.unsubscribe();
            }
        }
        ```
- In the **show.card.component.ts** rename **show** to **showResponse** and change its type to **ShowResponse**
    ```js
    @Input() showResponse!: ShowResponse;
    ```
- In the **shows-list.component.html** bind the **showResponse** to the show as such
    ```html
        <tv-show-card *ngIf="show" [showResponse]="show"></tv-show-card>
    ```
- In **show-card.component.html** fix the binding accordingly:
    ```html
    <div class="card h-100 show-list-card">
    <img class="card-img-top" [src]="showResponse.show.image.medium" />
    <div class="card-body">
        <h5 class="text-center">{{ showResponse.show.name }}</h5>
        <p class="card-text">{{ showResponse.show.summary }}</p>
    </div>
    <div class="card-footer">
        <span class="badge rounded-pill bg-secondary" *ngFor="let genre of showResponse.show.genres">{{genre}}</span>
        <span class="float-end"
        ><i class="fa fa-star">{{ showResponse.show.rating.average| number: "1.1-1" }}</i>
        </span>
    </div>
    <a class="stretched-link"></a>
    </div>
    ```
- Run the application: `npm start`

Notice the show summaries have `<p>` in them! This is coming from the Json response.
In the **show-card.component.html** remove the **string interpolation** for the show summary and instead use **property binding** to bind the **inner html attribute** of the `<p> ` to  the show summary
    ```html
    <p class="card-text" [innerHtml]="showResponse.show.summary"></p>
    ```
The card summary looks prettier now 😊

- To retrieve data from the backedn based on the input search field:
    - In **shows-service.ts**:
        - Change the value of `searchShowsUrl` to `“http://api.tvmaze.com/search/shows?q=”`
        - Pass an input seach string the the `getShows()` and concatenate it with the url
            ```js
            getShows(searchString: string): Observable<ShowResponse[]> {
                return this.http.get<ShowResponse[]>(this.searchShowsUrl + searchString);
            }
            ```
    - In **shows-list.component.ts**:
        - Pass the `searchString` to the `getShows` method:
            ```js
            ngOnInit(): void {
                this.subscription = this.showsService.getShows(this.searchString).subscribe(response => this.shows = response);
            }
            ```
        - In the `onSearchChanged()` also call `getShows` passing the `searchString` as input similar to `ngOnInit`
        - Your file should now be similar to the one in the repo [here](https://github.com/murex/tv-shows-app/blob/8-tv-shows-plug-http/8-tv-shows-plug-http/src/app/shows-list/shows-list.component.ts)
- Run the application: `npm start`
- Change the filter to *engineer*

Notice in the console an **error**: `Cannot read property 'medium' of null`, this is because some shows have *no images*!

To solve this, in **the show-card.component.html** add `?` before **.medium** as such
```html
<img class="card-img-top" [src]="showResponse.show.image?.medium" />
```
Console should be clean now 😊

You can also notice that the shows with no rating just have a star. It would be nice to show “-” next to it. 
In the *show-card.component.html* you can replace the rating *string interpolation* with:

```html
<span class="float-end"
    ><i class="fa fa-star">{{ showResponse.show.rating.average? (showResponse.show.rating.average | number: "1.1-1" ) : "-"}}</i>
</span>
```

## [9- Routing](https://github.com/murex/tv-shows-app/tree/9-tv-shows-show-details-component)

In this section we will define routes to the **Shows** page and **Show Details** page to navigate to alongside fill in the details page.

- Create the **ShowDetailsComponent** using `ng g c ShowDetails`
- Copy the content of the html file from [here](https://github.com/murex/tv-shows-app/blob/main/data/html%20files/show-details-temp.component.html)
- In the **app-routing.module.ts** configure the routes to the **ShowListComponent** and **ShowDetailsComponent**

    ```js
    const routes: Routes = [
        { path: 'shows', component: ShowsListComponent },
        { path: 'show/:id', component: ShowDetailsComponent },
        { path: '**', redirectTo: '/shows' },
    ];
    ```
- In the **app.component.html**:
  - use property binding to bind the router link of the Tv Shows hyperlink to the shows path. 
  - set the router link active attribute to active for the link to be highlighted upon selection
  - remove the **tv-shows-list selector**
  - instead add the router-outlet directive to indicate where the matching components should show
  - The final **app.component.html** should look like the one in the repo [here](https://github.com/murex/tv-shows-app/blob/tv-shows-app/tv-shows-app/src/app/app.component.html)
- In the **show-card.component.html**, use property binding to bind the router link of the show card to the show path. Don’t forget to pass in the show id parameter
    ```html
    <a class="stretched-link"
    [routerLink]="['/show', showResponse.show.id]">
    </a>
    ```
- Run the application: `npm start`

Now we will fill in the show details component data fetched from **tvmaze**. To do so:

- Under the models folder, run: `ng g i CastMember` and copy the content from the file [here](https://github.com/murex/tv-shows-app/blob/main/data/interfaces/cast-member.ts) into the newly created **cast-member.ts**
- In the **shows.service.ts**:
  - Define a method `getShow` that takes in a show id as input and returns an **Observable<Show>** Use the url `https://api.tvmaze.com/shows/${id}`
  - Define a method `getCast` that takes in a show id as input and returns an **Observable<CastMember[]>** Use the url `https://api.tvmaze.com/shows/${id}/cast`
  - The resulting file should look like the one [here](https://github.com/murex/tv-shows-app/blob/tv-shows-app/tv-shows-app/src/app/services/shows.service.ts)
- In the **show-details.component.ts**:
  - Retrieve the id from the **activated route**
    - Inject and import the **ActivatedRoute**
        ```js
        import {ActivatedRoute} from '@angular/router';
        ```
    - Retrieve the id from the snapshot params map:
        ```js
        const id = this.route.snapshot.params.get("id");
        ```
  - Define a `show` proeprty and assign the corresponding value to it in the `ngOnInit` using the show's id (hint: you need to inject the **ShowsService**)
  - Define an `array of cast members` and populate it in the `ngOnInit`
  - Don't forget to **unsubscribe** in the `OnDestroy` lifecycle hook 
  - The resulting **show-details.components.ts** should look like the one [here](https://github.com/murex/tv-shows-app/blob/9-tv-shows-show-details-component/9-tv-shows-show-details-component/src/app/show-details/show-details.component.ts)
- In the **show-details.component.html** bind the data to show and cast data like [here](https://github.com/murex/tv-shows-app/blob/9-tv-shows-show-details-component/9-tv-shows-show-details-component/src/app/show-details/show-details.component.ts)
- Run the application: `npm start`

Click on show card, the details should show according to the selected show

Finally, we will make the back button **navigate** to the shows page. To do this:

- In the **show-details.component.ts** define a `back` method which will navigate back to the shows page. Use the angular router to do so:
  - Inject the angular `Router` and import it as such:
    ```ts
    import { Router } from '@angular/router';

    constructor(private route: ActivatedRoute, private showService: ShowService, private router: Router) {}
    ```
  - Implement the back method
    ```js
    back(): void {
        this.router.navigate(['/shows']);
    }
    ```
- Back to the **shows-details.component.html**, use **event binding** to bind the click event to invoke the back method
    ```html
    <button class="btn btn-outline-secondary" (click)="back()">
            <i class="fa fa-chevron-left"></i> Back
    </button>
    ```
- Run the application: `npm start`

Click on a show card then click on back to the return to the shows page.

## [10- Finalization](https://github.com/murex/tv-shows-app/tree/tv-shows-app)

In this section we will extract the show cast table into a separate component to polish our app. The steps to do so are:

- Create the **ShowCast** component inside the show-details folder Run: `ng g c ShowCast`
- Extract the cast table from the **show-details.component.html** and paste it in the **show-cast.component.html**
- It should look like this file [here](https://github.com/murex/tv-shows-app/blob/tv-shows-app/tv-shows-app/src/app/show-details/show-cast/show-cast.component.html)
- Render the ShowCastComponent in the show-details.component.html by adding its selector where the table element was. Don’t forget to only show the cast table if there are cast members, otherwise show a nice message saying so!
- Pass the cast members as input from the show details to the show cast
    ```js
    @Input() castMembers: CastMember[] = [];
    ```
- Your **show-details.component.html** should now contain this block
    ```html
    <div class="py-5">
            <button class="btn btn-secondary">Show Cast</button>
            <div class="py-5" *ngIf="castMembers.length>0; else elseblock">
                <tv-show-cast [castMembers]="castMembers"></tv-show-cast>
            </div>
            <ng-template #elseblock>
                <h3 class="text-center text-muted">
                    <i>There are no cast memebers to be displayed</i>
                </h3>
            </ng-template>
    </div>
    ```

Lastly, implement the Show/Hide functionality. Your ShowDetailsComponent's files should now look like the ones [here](https://github.com/murex/tv-shows-app/tree/tv-shows-app/tv-shows-app/src/app/show-details)
