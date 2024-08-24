
### **Step-by-Step Guide: Running Your Student Portfolio Locally**

#### **Step 1: Install Node.js and npm (if not already installed)**
Before using `serve`, you need to have Node.js and npm (Node Package Manager) installed on your machine.

1. **Download Node.js:**
   - Visit the [Node.js official website](https://nodejs.org/).
   - Download the LTS (Long-Term Support) version for your operating system.
   - Follow the installation instructions to install Node.js.

2. **Verify Installation:**
   - Open your terminal (Command Prompt, PowerShell, or any terminal emulator).
   - Run the following commands to verify that Node.js and npm are installed correctly:
     
     
     node -v
     npm -v
     
   - You should see version numbers for both, indicating successful installation.

#### **Step 2: Install `serve` Globally**
`serve` is a static site server that can be installed via npm. This step installs it globally, so you can use it anywhere on your system.

1. **Open Your Terminal:**
   - Use Command Prompt, PowerShell, or a terminal emulator.

2. **Install `serve`:**
   - Run the following command:
     
     npm install -g serve
     
   - The `-g` flag installs `serve` globally, making it accessible from any directory.

3. **Verify Installation:**
   - Check that `serve` is installed correctly by running:
     
     serve -v
     
   - You should see the version number of `serve`.

#### **Step 3: Navigate to Your Project Directory**
You need to be in the directory where your project files (HTML, CSS, JS, etc.) are located.

1. **Open Your Terminal:**
   - Open a new terminal window or tab.

2. **Navigate to Your Project Folder:**
   - Use the `cd` command to change directories.
   - For example:
     
     cd C:\Users\91709\Desktop\Intern Mini\Abishek Portfolio
     
   - Ensure you are now in the correct directory by running:
     
     dir
     
   - This command will list all files and folders in your current directory. You should see your project files.

#### **Step 4: Serve Your Project**
Now that you're in the correct directory, you can start the server.

1. **Run the Serve Command:**
   - In the terminal, simply type:
     
     serve
     
   - This command will start a local server to serve your project files.

2. **Check the Output:**
   - After running the command, you should see something like this:
     
     Serving!
     
     - Local:    http://localhost:3000
     - Network:  http://172.28.224.1:3000
   
   - The `Local` address (`http://localhost:3000`) is the one you'll usually use to view your site.

#### **Step 5: Access Your Portfolio Site in the Browser**
You can now view your project in a web browser.

1. **Open Your Browser:**
   - Open any web browser (Chrome, Firefox, Edge, etc.).

2. **Visit the Local Address:**
   - Enter the local address provided by `serve`, typically:
     
     http://localhost:3000
     
   - Press `Enter` to load your site.

3. **Check the Terminal for Requests:**
   - As you navigate your site, your terminal will show logs of requests being made by the browser. For example:
     
     HTTP  8/22/2024 3:48:28 PM ::1 GET /
     HTTP  8/22/2024 3:48:28 PM ::1 GET /styles/style.css
     HTTP  8/22/2024 3:48:28 PM ::1 GET /assets/images/Mine.jpg
     HTTP  8/22/2024 3:48:28 PM ::1 GET /scripts/app.js
     ```

#### **Step 6: Stop the Server**
When you’re done testing your site, you’ll need to stop the server.

1. **Return to the Terminal:**
   - Make sure the terminal window where the server is running is active.

2. **Stop the Server:**
   - Press `CTRL + C` on your keyboard.
   - You’ll see the following message indicating the server is shutting down:
     ```plaintext
     INFO  Gracefully shutting down. Please wait...
     ```
   - The server will stop, and your site will no longer be accessible via `http://localhost:3000`.

#### **Step 7 (Optional): Additional Serve Command Options**
`serve` offers various options to customize the server behavior:

1. **Specify a Port:**
   - By default, `serve` uses port `3000`. To use a different port, run:
     
     serve -l 5000
     
   - This will serve your site on `http://localhost:5000`.

2. **Serve a Different Directory:**
   - To serve a directory other than the current one, specify the path:
     
     serve path/to/your/directory
     

3. **Enable HTTPS:**
   - To serve your site over HTTPS, use:
     
     serve -s
     
   ### **Final Step: Testing and Troubleshooting**

After completing all the steps to set up and serve your Student Portfolio site locally, it's important to ensure everything is working as expected. Here's how you can test and troubleshoot any issues that may arise:

#### **Step 8: Testing Your Site**

1. **Test Different Pages and Features:**
   - Navigate through all the pages of your portfolio site.
   - Test all interactive features like forms, buttons, and navigation links to ensure they are functioning correctly.

2. **Check Media Files:**
   - Verify that all images, videos, and other media files load properly.
   - Ensure that your `style.css` and `app.js` files are correctly linked and working.

3. **Responsive Design Testing:**
   - Resize your browser window or use developer tools (F12 in most browsers) to test how your site responds to different screen sizes.
   - Ensure that your portfolio looks good on both desktop and mobile devices.

#### **Step 9: Troubleshooting Common Issues**

1. **Port Conflicts:**
   - If you receive an error about the port being in use, change the port using:
     
     serve -l 5000
    
   - Then, access My site via `http://localhost:5000`.

2. **File Not Found Errors:**
   - If you encounter 404 errors in the terminal for specific files, check your file paths and ensure that all referenced files are correctly located in your project directory.

3. **CSS/JS Not Loading:**
   - If your styles or scripts aren’t loading, verify the links to these files in your HTML. Make sure the paths are correct relative to your HTML file’s location.

4. **Permission Issues:**
   - On some systems, you may need administrative privileges to install global npm packages or to run certain commands. If you encounter permission errors, try running your terminal as an administrator.

5. **Network Address Access:**
   - If you’re trying to access your site using the network address from another device on the same network and it’s not working, ensure that your firewall allows traffic on the specified port.


#### **Step 10: Reporting and Documenting**
Documenting my process and any issues encountered is essential for future reference or for sharing with others who may work on the project.


Portfolio Screenshot 

![Portfolio Screenshot](https://github.com/user-attachments/assets/81725146-00eb-4a42-8c36-88e3f11ba3ea)
