export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from '@/db';
import bcrypt from 'bcrypt';
import { getSession } from '@/lib/session';

export async function POST(request) {
  let fnStatus = true;
  let authorization;

  try {
    const session = await getSession();
    const requestBody = await request.json();
    console.log("Email and password received", requestBody);

    if (fnStatus) {
      authorization = await prisma.useraccount.findFirst({
        where: {
          email: requestBody.email,
        }
      });

      if (!authorization) {
        fnStatus = false;
        // Changed to proper response format
        return new Response(JSON.stringify({ errorMessage: "Invalid Email" }));
      }
    }

    const verifyPassword = await bcrypt.compare(requestBody.password, authorization.password);

    if (!verifyPassword) {
      console.log("Invalid password");
      // Changed to proper response format
      return new Response(JSON.stringify({ errorMessage: "Invalid Password" }));
    }

    if (authorization && verifyPassword) {
      session.user = {
        id: authorization.id,
        name: authorization.name,
      };
      await session.save();
    }

    console.log("Login successful", { authorization: authorization });
    // Changed to proper response format
    return new Response(JSON.stringify({ successMessage: "Login successful" }));

  } catch (error) {
    console.error("Error:", error);
    // Returning error message in response
    return new Response(JSON.stringify({ errorMessage: "Internal Server Error" }));
  }
}
