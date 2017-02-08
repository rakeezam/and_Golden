import java.net.*;
import java.io.*;
// Continuously reads from message queue for a particular client,
// forwarding to the client.
public class ServerSender extends Thread {
  private MessageQueue clientQueue;
  private PrintStream client;
  private boolean check = true;
  public ServerSender(MessageQueue q, PrintStream c) {
    clientQueue = q;   
    client = c;
  }
  public void run() {
	  
    while (check) {
    	Message msg = clientQueue.take(); // Matches EEEEE in ServerReceiver
    	if(msg.toString().contains("quit")) 
    	  check =false;
      
      client.println(msg); // Matches FFFFF in ClientReceiver
    }
    
   
      
  }
}