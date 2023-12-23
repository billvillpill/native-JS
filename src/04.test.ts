test('should take old men then 90', () => {
    const ages = [18, 20, 22, 1, 100, 50, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', () => {
    const courses = [
        {title: 'CSS',  price: 110},
        {title: 'js',  price: 200},
        {title: 'react',  price: 150}
    ];

    const chipPredicate = (course: CourseType) => course.price < 160;

    const chipCourse = courses.filter(chipPredicate);

    expect(chipCourse.length).toBe(2);
    expect(chipCourse[0].title).toBe('CSS')
    expect(chipCourse[1].title).toBe('react')
})