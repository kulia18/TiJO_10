describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });
        it('should assign person under 3 to kids group', function () {
            expect(app.assignToSwimmingCourse('Ana', '10/07/2012')).toEqual({
                name: 'Ana', age: 3, course: 'kids'
            });
        });
        it('should do something...', function () {

        });

    });

    describe('calculateArea', function () {
        it('should return false, if the third parametr is not a number', function () {
            expect(app.calculateArea(1, 15, 'ala', 'Zle', 'Dobrze')).toBe(false);
        });
        it('should return false, if the fifth parametr is not a string', function () {
            expect(app.calculateArea(5, 5, 5, 'Dobrze', 999)).toBe(false);
        });
        it('should return false, if there is not enough parametrs', function () {
            expect(app.calculateArea(1, 1)).toBe(false);
        });
        it('should return false, if the first parametr is not a number', function () {
            expect(app.calculateArea('x', 5, 5, 'Dobrze', 'Zle')).toBe(true);
        });

    });
});


