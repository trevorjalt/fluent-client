# fluent Client

Welcome to fluent, an app where you can practice learning a language with the spaced reptition revision technique.

`fluent Client` is the frontend for `fluent`.  To see `fluent` in action, check out [fluent](https://fluent-live.vercel.app/ "fluent").

The `fluent` backend can be found at: [fluent-api](https://github.com/trevorjalt/fluent-api/ "fluent Api")

`fluent` supports the creation of your own user account.  If you'd like to see it in action before signing up, use the demo account details below.

### demo account details

* username: admin
* password: pass

## what is spaced repetition?

Spaced repetition is a learning technique which exploits the psychological spacing effect.  Within `fluent`, this means that words that you translate correctly will pop up with increasingly less frequency with consecutive correct answers.  Conversely, get a word wrong and that word will begin to pop up more frequently.

## table of contents.

* [demo account details](#demo-account-details)
* [a quick look at our lewk](#a-quick-look-at-our-lewk)
* [the tech](#the-tech)
  * [frontend](#frontend)
  * [testing](#testing)
  * [production](#production)
* [setup](#setup)
  * [local setup](#local-setup)
* [quick start](#quick-start-scripts)
* [component overview](#component-overview)
  * [registration route](#registration-route)
  * [login route](#login-route)
  * [dashboard route](#dashboard-route)
  * [learning route](#learning-route)
  * [learning route correct](#learning-route-correct)
  * [learning route incorrect](#learning-route-incorrect)

## a quick look at our lewk.

![fluent app overview](/images/fluent-app-full-page-view.png)

## the tech.

### frontend.

* React
  * Create React App
  * React Router
* HTML5
* CSS3

### testing.

* Cypress

### production.

* Deployed via Vercel

## setup.

### local setup.

Clone this repository to your local machine 

````
git clone https://github.com/trevorjalt/fluent-client fluent-client
````

Change directory into the cloned repository

````
cd fluent-client
````

Make a fresh start of the git history for this project

```` 
rm -rf .git && git init
````

Install the node dependencies 

````
npm install
````

Follow the [setup](https://github.com/trevorjalt/fluent-api#setup "setup") instructions to get `fluent Api` up and running.

## quick start scripts.

Start the application

````
npm start
````

With the client running, open a new terminal.  Navigate to the `fluent-client` root.  Run the `fluent` tests.

````
npm run cypress:open
````

## component overview.

### registration route.

![fluent registration route component structure](/images/fluent-component-overview-registration.png)

### login route.

![fluent login route component structure](/images/fluent-component-overview-login.png)

### dashboard route.

![fluent dashboard route component structure](/images/fluent-component-overview-dashboard.png)

### learning route.

![fluent learning route component structure](/images/fluent-component-overview-learning.png)

### learning route correct.

![fluent learning route Correct component structure](/images/fluent-component-overview-learning-correct.png)

### learning route incorrect. 

![fluent learning route incorrect component structure](/images/fluent-component-overview-learning-incorrect.png)

## lets get fluent. 