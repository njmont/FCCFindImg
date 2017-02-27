<div class="padding main-div">
    <h1>Image Search Abstraction Layer</h1>
    <div class="inset-div">
        <p>
            <strong>
              User stories:
            </strong>
        </p>
        <div class="push-left">
          <p>
               1) I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
          </p>
        </div>
        <div class="push-left">
          <p>
               2) I can paginate through the responses by adding a ?offset=2 parameter to the URL.
          </p>
        </div>
        <div class="push-left">
          <p>
               3) I can get a list of the most recently submitted search strings.
          </p>
        </div>
        <div class="push-left">
          <p>
               *bonus)I have added a frequency for how many times something is searched. If a search is searched multiple times there is also a most_recent search field.
          </p>
        </div>
    </div>
    <p>
      <strong>
        Usage:
      </strong>
    </p>
<pre>
<a href="https://find-img.herokuapp.com/api/imagesearch/sweet?offset=2">https://find-img.herokuapp.com/api/imagesearch/sweet?offset=2</a>
<b>To view searches:</b>
<a href="https://find-img.herokuapp.com/api/latest/imagesearch">https://find-img.herokuapp.com/api/latest/imagesearch</a>
</pre>
    <p>
      <strong>
        Example output:
      </strong>
    </p>
<pre>
{
  url: "http://www.bing.com/cr?IG=5EE1D3E4A919454F9ECA0FB94213A682&CID=3EF51D0938756D822383173F39926C33&rd=1&h=-pMwjQCVKHxQ3mM41Tks_FtFWU2UgsSFUQn-1A8YwT8&v=1&r=http%3a%2f%2ffc05.deviantart.net%2ffs35%2fi%2f2008%2f292%2fe%2f4%2fLogo____Sweet_by_kotsuki_yuka.jpg&p=DevEx,5008.1",
  snippet: "Logo :: Sweet by kotsuki-yu...",
  thumbnail: "https://tse1.mm.bing.net/th?id=OIP.M6385535d0206ad75135be34dd3984c59o0&pid=Api",
  context: "http://www.bing.com/cr?IG=5EE1D3E4A919454F9ECA0FB94213A682&CID=3EF51D0938756D822383173F39926C33&rd=1&h=uJOcE5wTMy6-ZeVSXr9c_FFCzPOzmoy3qFNyzsAfDCc&v=1&r=http%3a%2f%2fkotsuki-yuka.deviantart.com%2fart%2fLogo-Sweet-101056202&p=DevEx,5007.1"
}
</pre>
</div>
