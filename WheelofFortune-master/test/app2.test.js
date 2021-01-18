describe('Beginning value', () => {

    it('wheelvalue should appear', () => {
        expect(wheelvalue).toEqual([700, 500, 250, 800, 400, 0, 300, 650, 3000, 700, 500, 800, 450, 0, 2000, 300, 600, 500, 750, 50, 900, 600, 350, 1000])
    })
    it('degree should be 0'), () => {
        expect(deg).toBe(0)
    }
    it('puzzle should be empty', () => {
        expect(puzzle).toBe('')
    })
    it('total score should be 0', () => {
        expect(totalScore).toBe(0)
    })
    it('round score should be 0', () => {
        expect(roundScore).toBe(0)
    })
    it('points should be 0', () => {
        expect(points).toBe(0)
    })
    it('round number should be at 0', () => {
        expect(round).toBe(0)
    })
})

describe('Return function', () => {

    it('random() should return a randomized number', () => {
        expect(random()).toEqual(jasmine.any(Number))
    })
    it('addPoints() should add the correct values', () => {
        let roundScore = 10
        let points = 10
        expect(addPoints(roundScore, points)).toBe(20)
    })
    it('subtractPoints() should subtract the correct values', () => {
        let roundScore = 15
        let points = 10
        expect(subtractPoints(roundScore, points)).toBe(5)
    })
    it('addTotal() should add the correct values', () => {
        let roundScore = 10
        let totalScore = 10
        expect(addTotal(totalScore, roundScore)).toBe(20)
    })
    it('getPoints() should return a randomized number', () => {
        let pointArray = []
        expect(getPoints()).toEqual(jasmine.any(Number))
    })
    it('getPuzzle() should return a random object from the word bank', () => {
        expect(getPuzzle()).toEqual(jasmine.any(Object))
    })
})


describe('Message', () => {

    beforeEach(function () {
        var fixture = '<div id="fixture"></div>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });

    it('displayMessage() should return message', () => {
        let testMessage = 'Test message'
        displayMessage(testMessage)
        expect(document.getElementById("message").innerHTML).toBe(testMessage);
    })
})


describe('Button', () => {

    beforeEach(function () {
        var fixture = '<div id="fixture"><input id="spinBtn" type="button">' +
            '<input id="playBtn" type="button">' +
            '<input id="hintBtn" type="button"></div>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });

    it('spin button disabled', () => {
        disableSpinButton()
        expect(document.getElementById("spinBtn").disabled).toBeTruthy();
    })
    it('spin button enabled', () => {
        enableSpinButton()
        expect(document.getElementById("spinBtn").disabled).toBeFalsy();
    })
    it('play button disabled', () => {
        disablePlayButton()
        expect(document.getElementById("playBtn").disabled).toBeTruthy();
    })
    it('changePlayButton()', () => {
        changePlayButton('Test')
        expect(document.getElementById("playBtn").innerHTML).toBe('');
    })
    it('hint button enabled', () => {
        enableHintButton()
        expect(document.getElementById("hintBtn").disabled).toBeFalsy();
    })
})

