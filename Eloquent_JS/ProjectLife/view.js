/* eslint-disable no-restricted-syntax */
import { randomElement, charFromElement, directions } from './tools';

export default class View {
    constructor(world, vector) {
        this.world = world;
        this.vector = vector;
    }

    look(dir) {
        const target = this.vector.plus(directions[dir]);
        if (this.world.grid.isInside(target)) {
            return charFromElement(this.world.grid.get(target));
        }

        return '#';
    }

    findAll(ch) {
        const found = [];
        for (const dir in directions) {
            if (this.look(dir) === ch) { found.push(dir); }
        }
        return found;
    }

    find(ch) {
        const found = this.findAll(ch);
        if (found.length === 0) return null;
        return randomElement(found);
    }
}
