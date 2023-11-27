import { Customer } from "@prisma/client";
import { prismaClient } from "../../../helpers/prismaClient";

const insertIntoDB = async (payload: Customer): Promise<Customer> => {
    
    const result = await prismaClient.customer.create({
        data: payload
    })
    return result
}

export const customerService = {
    insertIntoDB
}