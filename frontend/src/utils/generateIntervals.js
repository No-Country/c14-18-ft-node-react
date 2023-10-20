export const generateTimeInterval = (availability) => {
    const [start, end] = availability.split(' - ');
    const startTime = new Date(`01/01/2000 ${start}`);
    const endTime = new Date(`01/01/2000 ${end}`);
    const intervalMinutes = 30;
    const intervals = [];

    for (let time = startTime; time < endTime ; time.setMinutes(time.getMinutes() + intervalMinutes)) {
        intervals.push({
            start: new Date(time)
        })
    }

    return intervals
}