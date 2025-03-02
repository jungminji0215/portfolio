import { sendEmail } from "@/service/nodemailer";

export async function POST(request) {
  const body = await request.json();

  try {
    sendEmail(body);

    return new Response(
      JSON.stringify({ message: "메일을 성공적으로 보냈습니다." }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("error :>> ", error);

    return new Response(
      JSON.stringify({ message: "메일 전송에 실패하였습니다!" }),
      {
        status: 400,
      }
    );
  }
}
