/* eslint-disable implicit-arrow-linebreak */
import Ship from './ship';

const ship = new Ship(3);
test('increase the hit variable by one ', () => expect(ship.hit()).toEqual(1));
