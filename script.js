fetch("https://randomuser.me/api")
  .then((r) => r.json())
  .then(({ results }) => {
    const [{ name }] = results;
    console.log(`Ciao ${name.title} ${name.first} ${name.last}!`);
  })
  .catch((err) => console.log(err));
