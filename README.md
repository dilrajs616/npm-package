# Punjabi Voice Search

> Returns punjabi language transcript using google speech to text api.

<a href="https://www.npmjs.com/package/punjabi-voice-search?activeTab=readme">
<img alt="Static Badge" src="https://img.shields.io/badge/npm-Punjabivoice-search?style=flat-square&logoColor=%231e90ff&color=%231e90ff&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fpunjabi-voice-search">
</a>

## Installation
``` bash
$ npm install punjabi-voice-search
or
$ yarn add punjabi-voice-search
```

## Usage
> With required parametres
```js
import PunjabiVoiceSearch from "punjabi-voice-search";
import {useState} from "react";

export default function(){
  const[anyState,setanyState]=useState();
  return(
    <>
    <PunjabiVoiceSearch 
    initials={false}
    setState={setanyState}/>
    </>
  )
}

```

> With all required and optional parameters

```js
import PunjabiVoiceSearch from "punjabi-voice-search";
import {useState} from "react";
import { IoIosMic } from "react-icons/io";

export default function(){
  const[anyState,setanyState]=useState();
  return(
    <>
    <PunjabiVoiceSearch 
    initials={false}
    setState={setanyState}
    Mic={IoIosMic}
    micSize={50}
    activeMicColor="#000"
    micActiveBGColor="black"
    borderRadius="50"
    micDefaultBGColor="blue"
    micDefaultColor="white"
    />
    </>
  )
}

```
## Props

| Parameters Name   | Required / Optional |
| ----------------- | ------------------- |
| initials          | Required            |
| setState          | Required            |
| Mic               | Optional            |
| micSize           | Optional            |
| activeMicColor    | Optional            |
| micActiveBGColor  | Optional            |
| borderRadius      | Optional            |
| micDefaultBGColor | Optional            |
| micDefaultColor   | Optional            |


## Props Description
| Parameter Name    | Description                                                                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| intitals          | This is the boolean value which is used for to get only initals character of the word or to get full transcript. True means to get initals only and false means to get full transcript                                 |
| setState          | This is the useState variable in which the data will be stored after you get the result                                                                                                                                |
| Mic               | This is an optional  parameter which is used to change the apperance of mic icon you can import any icon you want to use. And pass the whole component in that prop (e.g.- IoIosMic).                                  |
| micSize           | This is an  optional paramenter which used to adjust the size of the mic icon. I accepts only the number value                                                                                                         |
| activeMicColor    | This is an another optional parameter which is used to change the color of the mic icon when it active i.e. when the mic is listening. It accepts the string value it can be in rgb mode, hexadecimal mode, hsl mode . |
| micActiveBGColor  | This is another optional parameter for changing the background color of mic when mic is ON/active.It accepts the string value it can be in rgb mode, hexadecimal mode, hsl mode .                                      |
| borderRadius      | This is an optional parameter which accepts an number value and it will add border radius to the background on the mic.                                                                                                |
| micDefaultBGColor | This is an optional parameter which is accepts string value which is used to change the background color of mic when mic is in OFF/inactivce state. It accepts colors in rgb mode, hsl, mode and hexadecimal mode.     |
| micDefaultColor   | This is an optional parameter which accepts string value which is used to change the color of mic icon when mic is in OFF/Inactive state. It accepts colors in rgb mode. hexadecimal mode and hsl mode.                |



### Authors

***Dilraj Singh , Simarjot Singh*** 