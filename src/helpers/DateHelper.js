export default class DateHelper {
    static parseDate(dateToParse) {
        const date = new Date(dateToParse);
        const day = date.getDate();
        const month = ([
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ])[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
}