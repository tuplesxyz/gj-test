
## Getting Started

First, clone the project:

```bash
 git clone git@github.com:tuplesxyz/gj-test.git
```

Second, cd into the directoy: 

```bash
cd gj-test
```

Third, install dependancies:

```bash
npm i 
```

Fourth, run the development server:

```bash
npm run dev
# or
yarn dev
```

# Why did I choose x

### Next js 

I chose next js as that is the framework of choice when creating static site generated websites.

### Tailwind CSS

I chose tailwind as it makes it easy to create responsive layouts.

### Typescript

I used typescript with next js to get the benefits of static typing and a better IDE experience specifically with vs code as using typescript improves intellisense features such as code completion and parameter information. I also know the cons of using typescript as it has a learning curve and when used incorrectly can be a nightmare to deal with for example using *any* instead you should use *unknown* which is a type safe alternative.

### using getStaticProps 

I chose to use getStaticProps to fetch ticker values from several apis as the data didn't change often. It was only needed to calculate a value also the request was not dependant on any user input. By using getStaticProps I got the benefit of faster loadtimes as the page was pre-rendered.

### using client side rendering to fetch TradingPair data 

I used client side redendering to fetch TradingPair data as it was dependant on user interaction and is dynamic.  

### Improvements

I would have written tests testing the data fetching logic which was done in getStaticProps for the homepage. I would also have improved the css as it isn't pixel perfect. 

## Deployment

I used vercel to deploy the project as it is pretty straight forward and works seamlessly with next.js.

To deploy the project commit any changes then push to branch to deploy.

```bash
git push
```
