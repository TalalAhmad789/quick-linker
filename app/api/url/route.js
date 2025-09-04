import { connectionMongoDB } from "@/app/db/mongoDb";
import Url from "@/app/models/Url.model";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        await connectionMongoDB()
        const body = await req.json()
        if (body.url.length > 0 && body.shortUrl.length > 0) {
            const isUrlAvailable = await Url.findOne({ shortUrl: body.shortUrl })
            if (isUrlAvailable) {
                return NextResponse.json({
                    success: false,
                    message: "Short Url already in used. Try another!",
                }, {
                    status: "400"
                })
            } else {
                const form = await Url.create({
                    url: body.url,
                    shortUrl: body.shortUrl
                })
                return NextResponse.json({
                    success: true,
                    message: "Short Url generated!",
                }, {
                    status: "201"
                })
            }
        }
        else {
            return NextResponse.json({
                success: false,
                message: "All field is required",
            }, {
                status: "400"
            })
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message,
        }, {
            status: "500"
        })
    }
}