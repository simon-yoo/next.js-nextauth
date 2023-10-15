import prisma from '../../../../../lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
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
