import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
    versionKey: false;
}> & {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    versionKey: false;
}, {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    versionKey: false;
}>> & mongoose.FlatRecord<{
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
}>>;
//# sourceMappingURL=user.model.d.ts.map