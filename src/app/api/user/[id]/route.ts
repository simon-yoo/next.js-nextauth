import { verifyJwt } from '../../../../../lib/jwt';
import prisma from '../../../../../lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  // checks if the access token is inside the header of the request
  const accesTolken = request.headers.get('authorization');
  if (!accesTolken || !verifyJwt(accesTolken)) {
    return new Response(
      JSON.stringify({
        error: 'unauthorized',
      }),
      {
        status: 401,
      }
    );
  }
  const userPosts = await prisma.post.findMany({
    where: { authorId: +params.id },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(userPosts));
}
