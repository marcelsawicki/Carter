using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Model
{
    public class EMail
    {
        private int id;
        private string name;
        private string subject;
        private string message;

        public int Id {
            get { return id;  }
            set { id = value;  }
        }
        public string Name {
            get { return name; }
            set { name = value; }
        }

        public string Subject {
            get { return subject; }
            set { subject = value;  }
        }

        public string Message {
            get { return message;  }
            set { message = value;  }
        }
    }
}
