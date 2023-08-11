import { Column, Table, DataType, Model, HasMany, AllowNull, HasOne } from "sequelize-typescript"
import { Code } from "src/code/code.model";

interface UserCreationAttrs {
    email: string
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    birthDay: Date;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {

    @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, allowNull: false, autoIncrement: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, allowNull: false })
    firstName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    lastName: string;

    @Column({ type: DataType.TEXT, allowNull: false, unique: true })
    phone: string;

    @Column({ type: DataType.DATE, allowNull: false })
    birthDay: Date;

    @HasOne(() => Code)
    code: Code;
}