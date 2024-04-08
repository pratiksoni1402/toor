export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import bcrypt from 'bcrypt';
import { getSession } from '@/lib/session';
export async function POST(request) {
  let fnStatus = true
  let responseData = {}
  let message = null
  try {

    const session = await getSession();
    const requestBody = await request.json();
    console.log("Email and password received", requestBody);
    if (fnStatus) {
      const authorization = await prisma.useraccount.findFirst({
        where: {
          email: requestBody.email,
        }
      })

      if (authorization == null) {
        fnStatus = false
        message = "No record found"
        console.log("No record found")
      }
    }

    const verfiyPassword = await bcrypt.compare(requestBody.password, authorization.password)
    
    if (!verfiyPassword) {
      console.log("Invalid password");
      return Response.json({ error: "Invalid Password" }, { status: 401 });
    }

    // If no user found
    if (!authorization) {
      console.log("User not found");
      return Response.json({ error: "Invalid Email" }, { status: 402 });
    }
    // End

    if (authorization && verfiyPassword) {
      session.user = {
        id: authorization.id,
        name: authorization.name,
      }
      await session.save()
    }


    console.log("Login successful", { authorization: authorization });
    return Response.json({ success: "Login successful" });

  } catch (error) {

    console.error("Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
