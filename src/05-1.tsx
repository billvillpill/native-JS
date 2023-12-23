const userName = {
    name: 'Vlad',
    age: 28,
    address: {
        city: {
            title: 'Grodno',
        },
    },
}
let usersPeopele = ['Dmitry', 'Vlad', 'Ira', 'Roman']

usersPeopele['map'](e => e.toUpperCase());
let userObj = {
    '0': 'Roman',
    '1': 'Vlad',
    '2': 'Tania',
    '3': 'Nastily',
}
console.log(Object.keys(userObj))
console.log(Object.values(userObj))