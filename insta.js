
const accessToken = 'Token';
// Instagram API token hentes fra Facebook for develepors

function getInstagramFeed() {
  fetch(`https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp,username&access_token=${accessToken}`)
    .then(response => response.json())
    .then(data => {
      const feedContainer = document.getElementById('instagram-feed');

      const posts = data.data;
      const paginatedPosts = Array.from(posts).slice(0, 12);
// Henter data baseret på det link du indsætter og smider det i et Array. vi slicer det her array i 12 altså vi vil have 12 instagram post diplayed


      paginatedPosts.forEach(post => {
        const postLink = document.createElement('a');
        postLink.href = post.permalink;
        postLink.target = '_blank';

        const userIconContainer = document.createElement('div');
        userIconContainer.classList.add('user-icon-container');

        const userIcon = document.createElement('img');
        userIcon.src = `img/Standard Logo.png`;
        userIcon.alt = `@${post.username}`;
        userIcon.classList.add('user-icon');

        userIconContainer.appendChild(userIcon);
        postLink.appendChild(userIconContainer);

        if (post.media_type === 'VIDEO') {
          const videoContainer = document.createElement('div');
          videoContainer.classList.add('video-container');

          const video = document.createElement('video');
          video.src = post.media_url ;
          video.controls = true;
     

          videoContainer.appendChild(video);
          postLink.appendChild(videoContainer);
        } else {
          const postImage = document.createElement('img');
          postImage.src = post.media_url;
          postImage.alt = post.caption;
          postImage.classList.add('post-img');
          postLink.appendChild(postImage);
        }

        const userIconContainer1 = document.createElement('div');
        userIconContainer1.classList.add('symbol-container');

        const userIcon1 = document.createElement('img');
        userIcon1.src = `/img/instagram-likes.webp`;
        userIcon1.classList.add('symbol-icon');

      
        userIconContainer1.appendChild(userIcon1);
        postLink.appendChild(userIconContainer1);

        const postInfo = document.createElement('div');
        postInfo.classList.add('post-info');

        const postTitle = document.createElement('h3');
        postTitle.textContent = post.caption;
        postInfo.appendChild(postTitle);

        postLink.appendChild(postInfo);
        feedContainer.appendChild(postLink);

        // Alt hvad de her gør er at hente HTML elementer og gemme dem i en VAR og derefter post dem i elementer vi skaber her i JS, fx ligesom i den først hvor vi skaber en DIV, og giver den VAR userIconContainer og derefter skaber et img vi så poster i den her skabte DIV
// Der bliver brugt alt fra skabe DIV, til at skabe Classes, h3 osv osv.
      });
    })

    .catch(error => console.error(error));
    // Error handler
}

getInstagramFeed();