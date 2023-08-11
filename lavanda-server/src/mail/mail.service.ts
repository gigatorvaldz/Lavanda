import { Injectable } from '@nestjs/common';
import { createTransport } from "nodemailer";
import { MailerService } from '@nestjs-modules/mailer/dist';
@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {

    }

    async sendCodeMail(to: string, code: number) {
        await this.mailerService.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Activation mail on" + process.env.API_URL,
            text: "",
            html: `
          <div>
            <h1>Activate code: ${code}</h1>
          </div>
          `,
        });
    }
}
