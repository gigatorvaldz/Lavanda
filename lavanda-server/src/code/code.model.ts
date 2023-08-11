import { Column, Table, DataType, Model, HasMany, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript"
import { User } from "src/users/user.model";

interface CodeCreationAttrs {
    code: number;
    userId: number;
}

@Table({ tableName: "code" })
export class Code extends Model<Code, CodeCreationAttrs> {

    @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, allowNull: false, autoIncrement: true })
    id: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    code: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @BelongsTo(() => User)
    user: User
}