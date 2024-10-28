import { Command } from "./Command";
import { COMMANDS } from "../constants/Commands";
import { constants, utils } from "ethers";
import { MyContext } from "../../types/context";

export class ClaimableCommand extends Command {
  name = COMMANDS.CLAIMABLE_REWARD;
  description = "View user claimable rewards";
  async execute(ctx: MyContext) {
    if (!ctx.message || !("text" in ctx.message)) return;

    const inputParts = ctx.message.text.trim().split(/\s+/);

    if (inputParts.length < 2) {
      return ctx.reply(`Usage: /${COMMANDS.CLAIMABLE_REWARD} <address>`);
    }

    const address = inputParts[1];
    // const amount = inputParts[2]; //if second input value

    if (!this.isValidAddress(address)) {
      return ctx.reply("Invalid Ethereum address.");
    }

    try {
      const message = `Your claimable rewards: 20 ABC`;
      await ctx.reply(message);
    } catch (error) {
      await ctx.reply(
        "An error occurred while fetching your rewards. Please try again later."
      );
    }
  }

  private isValidAddress(address: string): boolean {
    return utils.isAddress(address) && address !== constants.AddressZero;
  }
}
