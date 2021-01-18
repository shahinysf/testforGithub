describe('Return functions', () => {

    it('retrieveScores() should return an object', () => {
        expect(retrieveScores()).toEqual(jasmine.any(Object))
    })
    it('orderScores() should return an object', () => {
        expect(orderScores()).toEqual(jasmine.any(Object))
    })
    it('getRanking() should return a number', () => {
        expect(getRanking()).toEqual(jasmine.any(Number))
    })
    it('deleteScores() should return boolean', () => {
        expect(deleteScores()).toEqual(jasmine.any(Boolean))
    })
})