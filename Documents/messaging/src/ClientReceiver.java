import java.io.*;
import java.net.*;
// Gets messages from other clients via the server (by the
// ServerSender thread).
public class ClientReceiver extends Thread {
  private BufferedReader server;
  private boolean check = true;
  ClientReceiver(BufferedReader server) {
    this.server = server;
  }
  public void run() {
    // Print to the user whatever we get from the server:
    try {
      while (check) { 
        String s = server.readLine(); // Matches FFFFF in ServerSender.java
        if(s.equals("quit")) {
        	check = false;
        }
        if (s != null)
          System.out.println(s);
        else
          Report.errorAndGiveUp("Server seems to have died"); 
       
      }
    }
    catch (IOException e) {
      Report.errorAndGiveUp("Server seems to have died " + e.getMessage());
    }
  }
} 