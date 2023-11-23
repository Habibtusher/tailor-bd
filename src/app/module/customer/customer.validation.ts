import { z } from "zod";

const create = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is required" }),
        gender: z.string({ required_error: "Gender is required" }),
        mobile: z.string({ required_error: "Number is required" }),
        address: z.string({ required_error: "Gender is required" }),
    })
})

export const customerValidation = {
    create
}