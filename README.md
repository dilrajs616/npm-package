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
    initials: boolean;
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
        <td>initials</td>
        <td><pre><code>boolean:</code></pre>true or false</td>
      </tr>
    </tbody>
  </table>
</div>

<h5 class="my-1">Return Value Based On searchType</h5>
<div class="table-responsive" id="table">
  <table class="table table-bordered table-striped table-hover">
    <thead class="table-primary">
      <tr>
        <th>searchType</th>
        <th>Return Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>true</td>
        <td><pre><code>transcript(string)</code></pre>First letter of each word in a variable called "transcript"</td>
      </tr>
      <tr>
        <td>false</td>
        <td><pre><code>transcript(string)</code></pre>Proper transcript in a variable called "transcript"</td>
      </tr>
    </tbody>
  </table>
</div>