<script>
  const requestUrl =
    'https://api.unsplash.com/search/photos?query=london&client_id=TH_hAxlm82Yz_GKltWgLe6TMVOzDX0AT796zQd_OT0o';
  const getImagesButton = document.querySelector('.getImagesButton');
  const imageToDisplay = document.querySelector('.imageToDisplay');

  getImagesButton.addEventListener('click', async () => {
    let randomImage = await getNewImage();
    imageToDisplay.src = randomImage;
  });

  async function getNewImage() {
    let randomNumber = Math.floor(Math.random() * 10);
    return fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => {
        let allImages = data.results[randomNumber];
        return allImages.urls.regular;
      });
  }
</script>
