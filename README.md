<div class="container my-5">
    <h5 class="mb-0">Customization Of Component</h5>
    <div class="card mt-3">
      <div class="card-body">
        <pre class="bg-light p-3 rounded">
<code>
interface Props {
    Mic?: React.ElementType;
    activeMicColor?: string;
    micDefaultColor?: string;
    micDefaultBGColor?: string;
    micActiveBGColor?: string;
    micSize?: number;
    borderRadius?: string;
    searchType: string;
}</code>
        </pre>
        </div>
    </div>
</div>

<h5 class="my-1">Input Parameters</h5>
<div class="table-responsive" id="table">
  <table class="table table-bordered table-striped table-hover">
    <thead class="table-primary">
      <tr>
        <th>Variable Name</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>audioData</td>
        <td><pre><code>string:</code></pre>Audio Data in base64 format</td>
      </tr>
      <tr>
        <td>searchType</td>
        <td><pre><code>string:</code></pre></td>
      </tr>
    </tbody>
  </table>
</div>

If the "initials" value is false, then the backend will return the normal transcript as it is. But if the value of "initials" is true, then the backend will return a string that contains the first letter of each word, separated with spaces.


<p class="lead my-4">
  Just like our Demo Project, this project is first sending the audio data to the <a href="week4.html#demo-project">express backend.</a> 
  It simply returns the transcript in a variable called "transcript". 
  The only problem that we are facing right now is with <a href="week4.html#hosting-project">the hosted backend.</a> 
  It was hosted on Render at <a href="https://gurbani-search.onrender.com/">https://gurbani-search.onrender.com/</a>. 
  Responses from Render are pretty slow, so we were using localhost for testing. 
  But we cannot use either of them in the final npm package. 
  We will explore this further in <a href="week8.html">Week 8.</a>.
</p>
