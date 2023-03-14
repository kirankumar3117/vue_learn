# Vue custome directives 
- Reusable ways to customize DOM functionality.  

## Hook Arguments 

- ***el*** - The element our directive is bound to.
    * This is how we can edit CSS, inner content, and more.
- ***binding*** - How we can pass extra parameters or modifiers to our directive.
    * We can access ou rdirective's name.
    * ## binding properties 
        * **value** - evaluated JS expression passed to our directive.
         * **oldValue** - previous value (in updated hook)
         * **expression** - The JS expression passed to our directive.
         * **arg** - Optional argument passed from template.
         * **modifiers** - additional parameters passed from template.
- ***vnode*** - virtual node.
- ***prevVnode*** -  previous virtual node.

```
A directive's name doesn't include "  v- "
```