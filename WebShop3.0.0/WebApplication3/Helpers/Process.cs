using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Helpers
{
    public class Process
    {
        public void Main() 
        {
            PasswordResetHelper passwordResetHelper = new PasswordResetHelper(new MyEmailSender());
            passwordResetHelper.ResetPassword();
        }
        
        
    }
}
