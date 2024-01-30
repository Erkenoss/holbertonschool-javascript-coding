const fs = require('fs').promises;

module.exports = function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8')
            .then(content => {
                const lines = content.trim().split('\n');

                let sweCount = 0;
                let csCount = 0;

                const sweList = [];
                const csList = [];

                for (const line of lines) {
                    const fields = line.split(',');
                    const [firstName, lastName, age, field] = fields;
                    if (firstName && lastName && age && field) {
                        if (field === 'CS') {
                            csCount += 1;
                            csList.push(firstName);
                        } else if (field === 'SWE') {
                            sweCount += 1;
                            sweList.push(firstName);
                        }
                    }
                }

                console.log(`Number of students: ${csCount + sweCount}`);
                console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
                console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);

                resolve();
            })
            .catch(err => {
                reject('Cannot load the database');
            });
    });
};
