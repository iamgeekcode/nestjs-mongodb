import { Document } from 'mongoose';

export interface UserModel extends Document {
    username: string;
    password: string;
}
