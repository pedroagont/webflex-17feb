/* Question 01

Implement a function which can run a given function after a delay.

Arguments:
 - callback: the function to execute after the delay
 - delay: number of milliseconds to wait
 - data: the one (and only) argument to pass to the callback
*/

// SIDE EFFECT FUNCTION
const doShortly = (callback, delay, data) => {
    setTimeout(() => callback(data), delay)
}

doShortly((name) => console.log(`Hi ${name} after 3 seconds`), 3000, 'Pedro')