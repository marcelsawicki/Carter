using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Helpers
{
    public class PasswordResetHelper
    {
        private IEmailSender _emailSender;
        public PasswordResetHelper(IEmailSender emailSender)
        {
            this._emailSender = emailSender;
        }

        public void ResetPassword() 
        {
            this._emailSender.SendEmail();
        }
    }
}
