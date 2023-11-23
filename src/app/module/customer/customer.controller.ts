import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { customerService } from "./customer.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await customerService.insertIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer created successfully",
        data: result
    })
})

export const customerController = {
    insertIntoDB
}