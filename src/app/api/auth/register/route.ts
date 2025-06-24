import { NextRequest, NextResponse } from "next/server";
import vine,{errors} from "@vinejs/vine";
import { registerSchema } from "@/validator/authSchema";
import { CustomErrorReporter } from "@/validator/customErrorReporter";

export async function POST(request: NextRequest) {
    try{
        const data = await request.json();
        vine.errorReporter = () => new CustomErrorReporter()
        const validator = vine.compile(registerSchema);
        const output = await validator.validate(data);
        return NextResponse.json({ status: 200, data:output });
    }

    catch(error){
        if(error instanceof errors.E_VALIDATION_ERROR){
            return NextResponse.json({ status: 400, errors: error.messages });
        }
    }


}
