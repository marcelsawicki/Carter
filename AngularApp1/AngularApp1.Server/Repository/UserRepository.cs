using AngularApp1.Server.Models;
using Microsoft.CodeAnalysis.Elfie.Extensions;

namespace AngularApp1.Server.Repository
{
    public class UserRepository
    {
        private List<User> users = new()
    {
        new User { Id = 3522, Login = "scrooge", Password = "BPtrN3moYs/g/e5g1cUmOaNnAtP4DkHf8AsaFsqSE9E=" } //tajne1haslo5
    };

        public User? GetByUsernameAndPassword(string username, string password)
        {
            var user = users.SingleOrDefault(u => u.Login.ToLower() == username.ToLower() && u.Password == password.Sha256());
            return user;
        }
    }
}
