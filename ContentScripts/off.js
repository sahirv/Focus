var posts = document.querySelectorAll('[data-testid="fbfeed_story"]');
for (let i = 0; i < posts.length; i++){
  posts[i].style.display = 'block';
}
var feedContainer = document.querySelectorAll('[id*="topnews_main_stream"]');
for (let i = 0; i < feedContainer.length; i++){
  feedContainer[i].style.display = 'block';
};
