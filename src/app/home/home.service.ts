import { Home } from '../mocks/home';
import { HOMES } from '../mocks/mock-homes';
import { Injectable } from '@angular/core';

@Injectable()

export class HomeService {
    getHomes(): Promise<Home[]> {
        return Promise.resolve(HOMES);
    }
    getHome(id: number): Promise<Home> {
        return this.getHomes()
                .then(homes => homes.find(home => home.id === id));
    }
}