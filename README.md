# Punjabi Voice Search

# punjabi-voice-search

> Returns punjabi language transcript using google speech-to-text api.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install punjabi-voice-search
```

## Usage

```js
import React, { useState } from 'react';
import PunjabiVoiceSearch from 'punjabi-voice-search'; // Import from your package

const App: React.FC = () => {
  const [transcript, setTranscript] = useState<string>(''); // For managing transcript state

  return (
    <div>
      <h1>Punjabi Voice Search Example</h1>

      {/* Using PunjabiVoiceSearch with initials as false */}
      <h2>Transcript Mode</h2>
      <PunjabiVoiceSearch
        initials={false} // Transcript mode
        micSize={40}
        state={transcript} // Pass transcript state
        setState={setTranscript} // Set transcript state
      />

      {/* Using PunjabiVoiceSearch with initials as true */}
      <h2>Gurbani Mode</h2>
      <PunjabiVoiceSearch
        initials={true} // Gurbani search mode
        micSize={40}
        state={transcript} // Pass transcript state
        setState={setTranscript} // Set transcript state
      />

      {/* Displaying the transcript */}
      {transcript && (
        <div>
          <h3>Transcript Output:</h3>
          <p>{transcript}</p>
        </div>
      )}
    </div>
  );
};

export default App;

```

## Customization Of Component

```ts
interface Props {
    Mic?: React.ElementType;
    activeMicColor?: string;
    micDefaultColor?: string;
    micDefaultBGColor?: string;
    micActiveBGColor?: string;
    micSize?: number;
    borderRadius?: string;
    initials: boolean;
}
```

## Input Parameters

| Variable Name | Value                                 |
| ------------- | ------------------------------------- |
| audioData     | `string:` Audio Data in base64 format |
| initials      | `boolean:` true or false              |

## Return Value Based On "initials"

| initials | Return Value                                                                     |
| -------- | -------------------------------------------------------------------------------- |
| true     | `transcript(string)` First letter of each word in a variable called "transcript" |
| false    | `transcript(string)` Proper transcript in a variable called "transcript"         |

### Authors

***Dilraj Singh , Simarjot Singh***