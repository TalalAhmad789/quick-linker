import { connectionMongoDB } from "../db/mongoDb"
import Url from "../models/Url.model";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
    const { shorturl } = await params
    await connectionMongoDB();
    const urlData = await Url.findOne({
        shortUrl: shorturl
    })
    if (urlData) {
        redirect(urlData.url);
    }
    else {
        redirect(process.env.NEXT_PUBLIC_HOST);
    }
}