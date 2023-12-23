const ages = [18, 20, 22, 1, 100, 50, 14];

const predicate = (age: number) => {
    return age > 90;
}
const oldAges = [100];

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS',  price: 110},
    {title: 'js',  price: 200},
    {title: 'react',  price: 150}
];

const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

const chipCourse = [
    {title: 'CSS',  price: 110},
    {title: 'react',  price: 150}
];