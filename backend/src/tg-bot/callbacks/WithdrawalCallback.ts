import { Callback } from "./Callback";
import { CALLBACKS } from "../constants/Callbacks";
import { MyContext } from "../../types/context";
export class WithdrawalCallback extends Callback {
  name = CALLBACKS.WITHDRAWAL;

  execute(ctx: MyContext) {
    ctx.reply("Hello withdrawal callback");
    // ctx.scene.enter(SCENES.WITHDRAWAL);
  }
}
