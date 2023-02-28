let user = {username:'suban', password: 'zebra' }

console.log(user.username)
console.log(user['username'])


console.log(user.password )
console.log(user['password'] )

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

user.password = 'elephant'
console.log(user)

user['password'] = 'allugator'
console.log(user)

user.email = 'suban@minneapolis.edu'
console.log(user)
console.log(user.email)
