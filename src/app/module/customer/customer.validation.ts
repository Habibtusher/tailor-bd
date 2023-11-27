import { z } from "zod";

const create = z.object({
    body: z.object({
        customerName: z.string({ required_error: "Customer name is required" }),
        gender: z.string({ required_error: "Gender is required" }),
        mobileNumber: z.string({ required_error: "Mobile number is required" }),
        address: z.string({ required_error: "Gender is required" }),
    })
})

export const customerValidation = {
    create
}