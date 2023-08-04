import { Column, Table, DataType, Model, HasMany } from "sequelize-typescript"

interface UserCreationAttrs {
    email: string
    password: string;
    name: string;
    lastName: string;
    phone: string;
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
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    lastName: string;

    @Column({ type: DataType.TEXT, allowNull: false, unique: true })
    phone: string;

}