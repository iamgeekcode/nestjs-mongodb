import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly _model: Model<UserModel>,
    ) { }

    async findAll() {
        return await this._model.find().exec();
    }

    async findOne(id: string) {
        return await this._model.findById(id).exec();
    }

    async create(data: UserModel) {
        return await this._model(data).save();
    }

    async update(data: UserModel, id: string) {
        return await this._model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await this._model.findByIdAndRemove(id);
    }
}
