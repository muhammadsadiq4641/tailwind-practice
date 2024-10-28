import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
namespace UserController {
  export const create = async (ctx: Context) => {
    try {
      const employee = await ctx.req.json();

      console.log("Employee: ", employee);

      return ctx.json({ response: "success", data: employee });
    } catch (error: any) {
      throw new HTTPException(500, { message: error?.message ?? error });
    }
  };
}

export default UserController;
