// Write an asynchronous function that accepts 
// a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time




const delaymessage = millisecond => new Promise(resolve=>setTimeout(resolve,millisecond));
const displaymessage=async (messagedelay,delaytime)=>{
    await delaymessage(delaytime);
    console.log(messagedelay);
}

displaymessage("Hello there",3000)

// function delaymess(message,time){
//     console.log(message);
//     console.log(time);
// };
// setTimeout(delaymess,3000);

// delaymess('Hello there',3000)



// You have an array of user IDs and a function 
// getUserData(id) that returns a Promise with 
// user data when given a user ID.
//  Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
function getUserData(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { id, name: `Lisa ${id}`, age: `20years${id}` };
        resolve(userData);
      }, 1000);
    });
  }
  const userIds = [1, 2, 3];
  async function fetchAndLogUserData(userIds) {
    for (const id of userIds) {
      try {
        const userData = await getUserData(id);
        console.log(`User Data for ID ${id}:`, userData);
      } catch (error) {
        console.error(`Failed to fetch data for ID ${id}:`, error);
      }
    }
  }
  fetchAndLogUserData(userIds);
// You have an asynchronous function performTask()
//  that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error.
//  Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
async function performTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Task incomplete");
        });
    });
}
function checkPerformance() {
    performTask()
       .then(message => {
            console.log(`Success: ${message}`);
        })
       .catch(error => {
            console.error(`Error: ${error}`);
        });
}
checkPerformance();
