import { signJWTAccessToken } from '../../../../lib/jwt';
import prisma from '../../../../lib/prisma';
import * as bcrypt from 'bcrypt';
interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  // find user through body email comparing with the database
  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  // checking user through bctypt password comparing with the database
  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const accessToken = signJWTAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}
