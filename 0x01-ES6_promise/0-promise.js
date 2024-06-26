export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      const condition = true;
      if (condition) {
        resolve('success');
      } else {
        reject(new Error('error'));
      }
    });
  }
