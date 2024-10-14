# punjabi-voice-search

> Returns punjabi language transcript using google speech-to-text api.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install punjabi-voice-search
```

## Usage

Works with audioData in base64 string format.

```js
import PunjabiVoiceSearch from 'punjabi-voice-search'; 

const [transcript, setTranscript] = useState<string | null>(null);

// Function to handle the transcript received from the API
const handleTranscript = (transcript: string) => {
  setTranscript(transcript);
  console.log("Transcript received:", transcript);
};

<PunjabiVoiceSearch
  initials={false} // Set to false for transcript-only mode
  onTranscript={handleTranscript} // Callback to get the transcript from API
/>

<PunjabiVoiceSearch
  initials={true} // Set to true for Gurbani search mode
  micSize={40} // Optional: Size of the microphone icon
  onTranscript={handleTranscript} // Callback to get the transcript from API
/>
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

| Variable Name | Value                                     |
|---------------|-------------------------------------------|
| audioData     | `string:` Audio Data in base64 format      |
| initials      | `boolean:` true or false                  |

## Return Value Based On "initials"

| initials | Return Value                                                                 |
|------------|------------------------------------------------------------------------------|
| true       | `transcript(string)` First letter of each word in a variable called "transcript" |
| false      | `transcript(string)` Proper transcript in a variable called "transcript"     |

### Authors

***Dilraj Singh , Simarjot Singh***