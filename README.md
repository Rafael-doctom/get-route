<h1 align="center"><img src="https://user-images.githubusercontent.com/76014502/213812867-d5169761-aaa0-4105-8fe9-a171ba5bf4c3.png"/></h1>

<div align="center">A simple utility to calculate route between multiple CEPs.</div>

## Installation

    npm i get-route

## How to use
````javascript
import getRoute from 'get-route';
...

const ceps = ['04336000', '04335000'];

const response = await getRoute(ceps);

console.log(response);


````
### Response 
````javascript
{
  ok: true,
  distance: '1,2 km',
  distanceRaw: 1179,
  time: '5 min',
  timeRaw: 283
}
````
