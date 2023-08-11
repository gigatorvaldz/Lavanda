import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Code } from './code.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CodeService {

    constructor(@InjectModel(Code) private codeRepository: typeof Code
    ) {

    }

    async getCode(userId: number) {
        const candidate = await this.codeRepository.findOne({ where: { userId } });
        if (candidate) {
            return candidate.code;
        }
    }

    async compareCode(userId: number, sendCode: number) {
        const codeSlot = await this.codeRepository.findOne({ where: { userId } })
        const code = codeSlot.code;
        const updatedAt: Date = codeSlot.updatedAt;

        if (!code) {
            throw new HttpException('Code is not exists', HttpStatus.BAD_REQUEST)
        }

        if (code !== sendCode) {
            throw new HttpException('Wrong code', HttpStatus.BAD_REQUEST)
        }

        const currentTime = new Date().getTime();
        const lastUpdateTime = updatedAt.getTime();
        const timeLeft = (currentTime - lastUpdateTime) / 60000;

        if (timeLeft > 1) {
            throw new HttpException('Code has expired', HttpStatus.BAD_REQUEST)
        }

        return true;
    }

    async updateCode(userId: number, code: number) {
        const candidate = await this.codeRepository.findOne({ where: { userId } })

        if (candidate) {
            const updatedUser = await this.codeRepository.update({ code }, { where: { userId } })
            return updatedUser;
        }

        const codeSlot = await this.codeRepository.create({ code, userId })

        return codeSlot.code;
    }
}
