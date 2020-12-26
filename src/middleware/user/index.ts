import Express from "express";
import UserController from "../../controller/user";

export const getUsersFiltered = (
  req: Express.Request,
  res: Express.Response
) => {
  UserController.getUsersFiltered({}).then((response) => res.send(response));
};
