import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../models/user.model';
import { QueryOptions } from '../configs/query-options.config';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly _model: Model<UserModel>,
    ) { }

    async findAll(options: QueryOptions) {
        if (options.fields) {
            const results = await this._model
                .find({ [options.fields]: { $regex: `.*${options.text}.*` } }, (err, doc) => {
                    return doc;
                })
                .skip(Number(options.offset))
                .limit(Number(options.limit))
                .exec();
            return { results, total: results.length };
        } else {
            const results = await this._model
                .find()
                .skip(Number(options.offset))
                .limit(Number(options.limit))
                .exec();
            return { results, total: results.length };
        }
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
