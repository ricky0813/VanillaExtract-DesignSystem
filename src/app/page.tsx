import Image from "next/image";
import { main } from "./app.css";
import Button from "@/components/button/Button";
import { style } from "@vanilla-extract/css";
import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";

export default function Home() {
  return (
    <main>
      <div className={main}>
        <Button
          variant="primary"
          text="버튼"
          className={sprinkles({ color: "primary-100" })}
          // color="red"
        />
      </div>
    </main>
  );
}
