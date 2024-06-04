import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        },
        select: {   // the data you want back as res
            username: true,
            firstName: true
        }
    })
    console.log(res);
}


async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: { username },
        data: {
            firstName,
            lastName
        }
    });
    console.log(res);
}

// updateUser("admin1", {
//     firstName: "new name",
//     lastName: "singh"
// })

insertUser("admin2", "123456", "aditya", "saini")


