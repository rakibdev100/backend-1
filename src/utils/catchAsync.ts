import type { NextFunction, Request, Response } from "express";

type Fn = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export const catchAsync = (fn: Fn) => {

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (err: any) {

            next(err)
        }
    };

}

export default catchAsync;