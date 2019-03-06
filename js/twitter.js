const twitter = (container) => {
  const button = document.createElement('a');
  button.innertText = 'Tweet';
  button.setAttribute('class', 'twitter-share-button');
  button.setAttribute('data-size', 'large');
  button.setAttribute('data-hashtags', 'mocaspike150');
  button.setAttribute('data-show-count', true);

  const js = document.createElement('script');
  js.src = 'https://platform.twitter.com/widgets.js';
  js.async = true;

  container.appendChild(button);
  document.body.appendChild(js);
}
