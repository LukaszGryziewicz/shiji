import {expect} from 'chai';

class Reservation {
    static DATE_FORMAT: string = "YYYY-MM-DD";
    arrival: string = '';
    numberOfNights: number = 0;

    changeStayPeriod(today: string, newArrival: string, newLength?: number) {
        if (new Date(newArrival) < new Date(today)) {
            throw new Error('Invalid arrival date');
        }

        if (newLength !== undefined && newLength <= 1) {
            throw new Error('New length has to be greater than 1');
        }

        if (newLength && newLength <= 366) {
            this.numberOfNights = newLength;
        }

        this.arrival = newArrival;
    }
}

describe('Change reservation stay period', function () {
    const date = new Date();
    const month = date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getDate() + 1;

    const today = `${date.getFullYear()}-${month}-${date.getDate()}`;
    const tomorrow = `${date.getFullYear()}-${month}-${date.getDate() + 1}`;

    it('should change arrival when reservation is from the future, otherwise an error should be thrown', function () {
        const reservation = new Reservation();
        const invalidArrival = '1990-06-24';
        const newLength = 5;

        expect(() => reservation.changeStayPeriod(today, invalidArrival, newLength))
            .to
            .throw('Invalid arrival date');

        reservation.changeStayPeriod(today, tomorrow, newLength);

        expect(reservation.arrival)
            .to
            .equal(tomorrow);

    });
    it('should change stay length when new value is positive and greater than 1', function () {
        const reservation = new Reservation();
        const newLength = 2;

        reservation.changeStayPeriod(today, tomorrow, newLength)

        expect(reservation.numberOfNights)
            .to
            .equal(newLength)
    });

    it('should throw an error when new length is defined and is lower than 1', function () {
        const reservation = new Reservation();
        const newLength = 0;

        expect(() => reservation.changeStayPeriod(today, tomorrow, newLength))
            .to
            .throw('New length has to be greater than 1')
    });

    it('should not change stay length when new length is greater than 366', function () {
        const reservation = new Reservation();
        const newLength = 367;

        reservation.changeStayPeriod(today, tomorrow, newLength)

        expect(reservation.numberOfNights)
            .to
            .equal(0);
    });
});
