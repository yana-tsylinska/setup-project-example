(() => {
  const postRequestPromise = new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject(this.statusText);
        }
      }
    };
    xhttp.open('GET', 'http://apistaging.theatre.pp.ua/posts.json?limit=5&page=1');
    xhttp.send();
  });

  postRequestPromise.then((response) => {
    const posts = JSON.parse(response);
    console.dir(posts);

    return JSON.parse(posts);
  }).catch(console.error);


  async function postRequestAsync() {
    const posts = await postRequestPromise();
    console.dir(posts);
  }
  postRequestAsync.catch(console.error);
})();
