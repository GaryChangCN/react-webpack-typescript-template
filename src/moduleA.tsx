export default async () => {
    const res = await new Promise((resolve) => {
        setTimeout(function () {
            resolve('true')
        }, 1000)
    })
    return res
}