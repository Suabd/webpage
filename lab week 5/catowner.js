let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
  ]
  let CatOwnerName =(ownerName)=> {
    return  cats_and_owners.filter(x => x.name == ownerName)[0].cat;
  }

  console.log(CatOwnerName('Gary Oldman'));

  cats_and_owners.forEach(owner =>{
    console.log(owner.cat)
  })
  // TODO print Gary Oldman's cat's name
  // TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
  // TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
  //   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"