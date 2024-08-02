function formatDateTime() {
    // Get the current date and time
    const now = new Date();
  
    // Get date components
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
  
    // Get time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Format date and time as "DD-MM-YYYY HH:MM:SS"
    const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  
    // Output the formatted date and time to the console
    console.log(formattedDateTime);
  }
  
  // Call the function to display the current date and time
  formatDateTime();
  