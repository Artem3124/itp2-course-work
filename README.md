## Case study 3: Audio visualiser

In this case study I completed a simple music visualisation
program that contains five separate visualisations.

To turn the sound into something that can be visualised p5.js provides
a Fast Fourier Transform object. Take a look at its description in the
[p5.sound documentation](https://p5js.org/reference/#/p5.FFT).

## Features

I implemented fully functional WEB-UI without using any html flags, i.e. I created the rendering system written in pure p5.js. Kind of useless, but I really wanted to get some extra marks in uni. 

### UML Class Diagram
![image](https://github.com/Artem3124/itp2-course-work/assets/101733343/d4cb87d7-d02e-49bd-952b-aaaa43148aec)

### How to run
Fork this repo, and run *live-server .* using terminal with [live server](https://www.npmjs.com/package/live-server) or with vs code [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension open index.html

### Tests 
In jasmine folder run SpecRunner.html with [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### P.S.:
Yeah, I know that OOP paradigm contradicts basic JS idea of Functional and Prototype inherited paradigm. I cannot justify myself on that matter. Therefore I'm opened to be shamed
