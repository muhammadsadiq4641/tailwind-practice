import { Context, Hono } from "hono";
import { HTTPException } from "hono/http-exception";

export const userRouter = new Hono();

userRouter.post("/users", async (ctx: Context) => {
  const employee = await ctx.req.json();
  console.log("Employee: ", employee);
  return ctx.json({ response: "success", data: employee });
});
