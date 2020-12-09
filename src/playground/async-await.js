import database from '../firebase/firebase'

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async() => {
    const sum1 = await add(1,4)
    const sum2 = await add(sum1,4)
    const returnSave = await database.ref('sum').set(sum2)
    console.log(returnSave)
}

doWork()