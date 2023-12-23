const user = {
    name: 'Vlad',
    age: 28,
    address: {
        city: {
            title: 'Grodno',
        },
    },
}
let users = ['Dmitry', 'Vlad', 'Ira', 'Roman']

users['map'](e => e.toUpperCase());
let userObj = {
    '0': 'Roman',
    '1': 'Vlad',
    '2': 'Tania',
    '3': 'Nastily',
}
userObj['4'] = 'bye'