import {Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { User } from "./User";

export enum STATUSAPP {
    INVALID_SECRET = 'Invalid secret, this secret is already in use',
    OK = 'Secret successfully registered',
    INVALID_ID = 'The IDs do not match',
    INVALID_ID_APP = 'The ID is already in use',
    NOT_AUTHORIZED = 'User not authorized',
    REGISTER_ERROR = 'App has not been registered'
}
@Entity()
export class App {
    constructor(id_app: string, secret: string, expiresIn: string){
        this.id_app = id_app
        this.secret = secret
        this.expiresIn = expiresIn
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_app: string;

    @Column()
    secret: string;

    @Column()
    expiresIn: string;

    @ManyToMany(type => User, user => user.email)
    user: User[];

    isValid(): STATUSAPP {
        return STATUSAPP.OK
    }
}
