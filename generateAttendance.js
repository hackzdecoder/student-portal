// generateAttendance.js
const fs = require('fs');

function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday (0), Saturday (6)
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function generateAttendance(startDate, endDate) {
    const records = [];
    let id = 1;
    let current = new Date(startDate);

    while (current <= endDate) {
        if (!isWeekend(current)) {
            // sample times (could be randomized or fixed)
            records.push({
                id: id++,
                date: formatDate(current),
                time_in: "08:05",
                time_out: "15:00"
            });
        }
        current.setDate(current.getDate() + 1);
    }
    return records;
}

const start = new Date("2025-01-01");
const end = new Date("2025-09-26"); // today

const data = generateAttendance(start, end);

fs.writeFileSync("attendanceData.json", JSON.stringify(data, null, 4));
console.log("✅ attendanceData.json generated with", data.length, "records");
