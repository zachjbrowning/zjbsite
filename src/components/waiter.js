export default async function waiter(exec, time) {
    await new Promise(() => setTimeout(exec, time));
}