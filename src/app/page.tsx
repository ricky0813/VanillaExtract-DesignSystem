import Image from "next/image";
import { main } from "./app.css";
import { style } from "@vanilla-extract/css";
import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import {
  IconCreditCard,
  IconShoppingBagFilled,
  IconShoppingBagOutline,
} from "@/components/icons/system";
import { styleClass } from "@/components/test/test.css";

export default function Home() {
  return (
    <main>
      <div className={main}>
        <IconShoppingBagOutline
          size="24px"
          fill={vars.global.colors.primary[50]}
        />
        <IconShoppingBagFilled
          size="24px"
          fill={vars.global.colors.primary[50]}
        />
        <IconCreditCard size="32px" fill={vars.global.colors.blue[30]} />
        <div className={styleClass} />
      </div>
    </main>
  );
}
