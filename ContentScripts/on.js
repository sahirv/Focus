var posts = document.querySelectorAll('[data-testid="fbfeed_story"]');
for (let i = 0; i < posts.length; i++){
  posts[i].style.display = 'none';
}

var observer = new MutationObserver(function(mutations){
  mutations.forEach(function(mutation){
    let newPosts = document.querySelectorAll('[data-testid="fbfeed_story"]');
    for (let i = 0; i < newPosts.length; i++){
      newPosts[i].style.display = 'none';
    };
    window.scrollTo(0,0);
  })
})

var body = document.body
observer.observe(body, {
	childList: true,
	characterData: true
});
