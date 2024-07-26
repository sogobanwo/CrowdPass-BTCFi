export function formatDateTime(epochTime) {
    const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
    // Create a new Date object with the epoch time in milliseconds
    const date = new Date(epochTime * 1000);
  
    // Get the month name, day, and year from the date object
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    // Get the hours, minutes, and seconds from the date object
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Pad single-digit day, hours, minutes, and seconds with leading zero
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    // Return the formatted date and time string
    return `${monthName} ${formattedDay}, ${year}, ${formattedHours}:${formattedMinutes}`;
  }
  

  