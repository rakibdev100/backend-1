import type { Request, Response } from "express";
export declare const UserServices: {
    createUser: (req: Request, res: Response) => Promise<import("mongoose").Document<unknown, {}, {
        name: string;
        email: string;
        password: string;
        avatar: string;
        isVerified: boolean;
        isPremium: boolean;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
        versionKey: false;
    }> & {
        name: string;
        email: string;
        password: string;
        avatar: string;
        isVerified: boolean;
        isPremium: boolean;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    }>;
};
//# sourceMappingURL=user.services.d.ts.map