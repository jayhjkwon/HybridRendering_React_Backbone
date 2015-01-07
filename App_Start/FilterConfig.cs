using System.Web;
using System.Web.Mvc;

namespace HybridRendering_React_Backbone
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
