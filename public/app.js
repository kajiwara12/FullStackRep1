console.log("test");

//get request-----------------------------------
fetch("/api")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let names of data) {
      let name = document.createElement("p");
      name.innerHTML = names;
      body.append(name);
    }
  });
//
fetch("/api/delete/", {
  method: "DELETE",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let name = document.createElement("p");
    name.innerHTML = names;
    body.append(name);
  });
