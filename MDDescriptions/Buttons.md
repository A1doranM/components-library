# React Component Library gov-ua-ui. Buttons

## [Components List](COMPONENTS_LIST.md)

## New component template

## [COMPONENT_NAME]

### [Component props]

- **prop1**: string - some string value
- **prop2**: boolean - some boolean value
- **prop3**: (e: ChangeEvent<HTMLInputElement>) => void - some change event handler

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

## Buttons:
[CommonButton](#CommonButton)

### CommonButton

#### props

- **label?**: string;
- **outlined?**: boolean;
- **disabled?**: boolean;
- **dashed?**: boolean;
- **className?**: string;
- **large?**: boolean;
- **image?**: string; - button image.
- **round?**: boolean; - is button round if true, the label will not be displayed, but image if exists will be displayed.
- **onClick?**: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

#### Examples

```tsx
import CommonButton from "src/components/buttons/CommonButton";
import PlusIcon from "src/assets/images/ui-icons/plus.svg";

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
...
}

return (
  <div>
    {/*Default button*/}
    <CommonButton
      label="Send"
      onClick={handleButtonClick}
    />
    {/*Disabled button*/}
    <CommonButton
      label="Send"
      disabled={true}
      onClick={handleButtonClick}
    />
    {/*Default button with image*/}
    <CommonButton
      label="Click me"
      image={PlusIcon}
      onClick={handleButtonClick}
    />
    {/*Round button*/}
    <CommonButton
      round={true}
      onClick={handleButtonClick}
    />
    {/*Round button with image*/}
    <CommonButton
      round={true}
      image={PlusIcon}
      onClick={handleButtonClick}
    />
  </div>
);
```
