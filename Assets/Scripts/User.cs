using System.Collections;
using System.Collections.Generic;

public class User
{
    public string username;
    public string email;
    public string userID;
    public string userToken;

    public User()
    {
    }

    public User(string email, string userID, string userToken)
    {
        this.username = username;
        this.email = email;
        this.userID = userID;
        this.userToken = userToken;
    }
}
