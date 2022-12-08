# React Component Library gov-ua-ui. Progress bars

## [Components List](COMPONENTS_LIST.md)

## New component template

## [COMPONENT_NAME]

### [Component props]

- **prop1**: string - some string value
- **prop2**: boolean - some boolean value
- **prop3**: (e: ChangeEvent<HTMLInputElement>) => void -  some change event handler

### [Component examples]

```js
import { Component } from "gov-ua-ui";

const handelChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
 ...
}

<Component
  prop1="es"
  prop2={false}
  prop3={handelChangeEvent}
/>
```

## Progress bars: 

- [ProgressBar](#ProgressBar)

### ProgressBar
<a name="ProgressBar"></a>

#### props
- **progress**: number;
- **className?**: boolean;

#### Examples
```tsx
import CircleProgressBar from "components/CircleProgressBar";

return (
  <div>
    <CircleProgressBar progress={50} />
  </div>
);
```
![img_2.png](mdImages/ProgressBar.png)
