using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HospitalsManagementSystem.Startup))]
namespace HospitalsManagementSystem
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
