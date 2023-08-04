import Link from "next/link";
import css from "./Footer.module.scss";
import Image from "next/image";

import ViberIcon from "@/assets/viber.png";
import TelegramIcon from "@/assets/telegram.png";
import WhatsAppIcon from "@/assets/whatsapp.png";

const Footer = () => {
  return (
    <footer className={css.container}>
      <Link className={css.Viber} href={"/"}>
        <Image fill className={css.icon} src={ViberIcon} alt="Viber Icon" />
        <span>Viber</span>
      </Link>
      <Link className={css.Telegram} href={"/"}>
        <Image fill className={css.icon} src={TelegramIcon} alt="Telegram Icon" />
        <span>Telegram</span>
      </Link>
      <Link className={css.WhatsApp} href={"/"}>
        <Image fill className={css.icon} src={WhatsAppIcon} alt="WhatsApp Icon" />
        <span>WhatsApp</span>
      </Link>
    </footer>
  );
};

export default Footer;
