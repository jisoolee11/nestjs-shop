import { Controller, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity'
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {        
    }

    @Get()
    getAll(): Item[] {
        return this.itemsService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') itemId: number) {
        return this.itemsService.getOne(itemId);
    }

}
