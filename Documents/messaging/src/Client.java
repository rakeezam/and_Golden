// Usage:
//        java Client user-nickname server-hostname
//
// After initializing and opening appropriate sockets, we start two
// client threads, one to send messages, and another one to get
// messages.
//
// A limitation of our implementation is that there is no provision
// for a client to end after we start it. However, we implemented
// things so that pressing ctrl-c will cause the client to end
// gracefully without causing the server to fail.
//
// Another limitation is that there is no provision to terminate when
// the server dies.
import java.io.*;
import java.net.*;
class Client {
  public static void main(String[] args) {
    // Check correct usage:
    if (args.length != 1) {
      Report.errorAndGiveUp("Usage: java Client server-hostname");
    }
    // Initialize information:
    String hostname = args[0];
    //-1
    // Open sockets:
    PrintStream toServer = null;
    BufferedReader fromServer = null;
    Socket server = null;
    try {
      server = new Socket(hostname, Port.number); // Matches AAAAA in Server.java
      toServer = new PrintStream(server.getOutputStream());
      fromServer = new BufferedReader(new InputStreamReader(server.getInputStream()));
    } 
    catch (UnknownHostException e) {
      Report.errorAndGiveUp("Unknown host: " + hostname);
    } 
    catch (IOException e) {
      Report.errorAndGiveUp("The server doesn't seem to be running " + e.getMessage());
    }
    // Tell the server what my nickname is:
    int iD = Integer.parseInt(fromServer.readLine());//wait for sever to send what its called //change everything to String now
    toServer.println(iD); // Matches BBBBB in Server.java
    
    // Create two client threads of a diferent nature:
    ClientSender sender = new ClientSender(String.valueOf(iD),toServer);//clientID able without a username/nickname, this is recognised by Server
    ClientReceiver receiver = new ClientReceiver(fromServer);
    // Run them in parallel:
    sender.start();
    receiver.start();
    
    // Wait for them to end and close sockets.
    try {
      sender.join();
      toServer.close();
      receiver.join();
      fromServer.close();
      server.close();
    }
    catch (IOException e) {
      Report.errorAndGiveUp("Something wrong " + e.getMessage());
    }
    catch (InterruptedException e) {
      Report.errorAndGiveUp("Unexpected interruption " + e.getMessage());
    }
  }
}