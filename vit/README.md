# vite 
- vite is a modern build tool

* ## immporting Images
```js
import logo from "path"
const logo = new URL("./ASSERTS/LOGO.png",import.meta.url).here

//importing javascript modules globally in mian js


const autoImportModules = import.meta.globalEager("./autoImports/*ja");


//creating alia '@' in vite config
import path from "path";
resolve:{
    alias:{
        "@":path.resolve(pathSegments[0]:__dirname,pathSegments[1]:"./src)
    }
}
// build option for image inlining or sizing

build:{
    assetslinelimit:0, // turn of //4090 for 4 kilobytes

    // enble and disble of code splitting

    // false to import all the css file into a sinle css file

    cssCodeSplit:true

    sourcemap:false
}



// environmental variables

console.log(import.meta.env)

// VITE_(SOMEKY)=SOMEVALUE
```