export function formatDOB(dateString: string, format: "dash" | "month" = "month") {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = date.getUTCMonth(); // 0-indexed
    const year = date.getUTCFullYear();

    if (format === "dash") {
        const monthNum = String(month + 1).padStart(2, "0");
        return `${day}-${monthNum}-${year}`;
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${day}.${monthNames[month]}.${year}`;
}