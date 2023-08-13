const TERMINATE = 'stop';
const dataObject = {};

while (true) {
    const key = prompt('Enter key');
    
    if (key === TERMINATE) {
        break;
    }
    
    const value = prompt('Enter value');
    
    if (value === TERMINATE) {
        break;
    }
    
    dataObject[key] = value;
}

console.log('Generated Object:', dataObject);
