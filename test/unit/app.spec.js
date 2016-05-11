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
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });
    });

    describe('calculateArea', function () {
        it('should return false, if the third parametr is not a number', function () {
            expect(app.calculateArea(1, 15, 'x', 'Zle', 'Dobrze')).toBe(false);
        });
        it('should return false, if the fifth parametr is not a string', function () {
            expect(app.calculateArea(5, 5, 5, 'Dobrze', 999)).toBe(false);
        });
        it('should return false, if there is not enough parametrs', function () {
            expect(app.calculateArea(1, 1)).toBe(false);
        });
        it('should return false, if the first parametr is not a number', function () {
            expect(app.calculateArea('x', 'x', 5, 'Dobrze', 'Zle')).toBe(false);
        });
        it('should return Dobrze message, if all parametrss are proper', function () {
            expect(app.calculateArea(30, 10, 1, 'Dobrze', 'Zle')).toEqual({ area : 20, message : 'Dobrze' });
        });
        it('should return Zle message, if all paramsetrs are proper', function () {
            expect(app.calculateArea(10, 10, 2, 'Dobrze', 'Zle')).toEqual({ area : -10, message : 'Zle' });
        });
        it('should return Big null message, if all parametrss are proper', function () {
            expect(answer.calculateArea(0, 0, 0, 'Dobrze', 'Zle')).toEqual({area: 0, message: 'Big null'});
        });
    });
});


