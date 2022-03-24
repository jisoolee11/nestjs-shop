import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
    private items: Item[] = [];

    getAll(): Item[] {
        return this.items;
    }

    getOne(id:number): Item {
        const item = this.items.find(item => item.id === id);
        if(!item) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }
        return item;
    }

    
}
