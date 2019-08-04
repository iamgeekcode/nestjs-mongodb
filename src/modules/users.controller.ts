import { Controller, Get, Param, Post, Body, Put, Delete, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserModel } from '../models/user.model';

@Controller('api/v1/users')
export class UsersController {
    constructor(
        private _service: UsersService,
    ) { }

    @Get()
    findAll(@Req() req) {
        return this._service.findAll(req.query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this._service.findOne(id);
    }

    @Post()
    create(@Body() data: UserModel) {
        return this._service.create(data);
    }

    @Put(':id')
    update(@Body() data: UserModel, @Param('id') id: string) {
        return this._service.update(data, id);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this._service.delete(id);
    }
}
