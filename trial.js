fetch('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });