import { Router, Request, Response } from "express";

const pageRouter = Router();

function sendMessage(email: string, message: string) {
  console.log(`Message is send by ${email}, message: ${message}`);
}
pageRouter.get("/", (req: Request, res: Response) => {
  const { message } = req.query;
  const passingMessage = message ? message : "";
  res.status(200).render("index", { message: passingMessage });
});
pageRouter.get("/about", (req: Request, res: Response) => {
  res.status(200).render("about");
});
pageRouter.get("/contact", (req: Request, res: Response) => {
  res.status(200).render("contact");
});
pageRouter.post("/contact", (req: Request, res: Response) => {
  const { email, message } = req.body;
  if (!email) {
    res.status(400).json({ success: false, message: "Emial is missing" });
  }

  sendMessage(email, message);
  res.status(201).redirect(`/?message="Message was sent to ${email}"`);
});

export default pageRouter;
