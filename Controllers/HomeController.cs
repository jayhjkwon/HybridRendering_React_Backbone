using HybridRendering_React_Backbone.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HybridRendering_React_Backbone.Controllers
{
    public class HomeController : Controller
    {
        private List<User> _users;

        public HomeController()
        {
            if (_users == null)
            {
                _users = new List<User>();
                _users.Add(new User { Id = 1, Name = "Jay", Suburb = "Clayton", Birthday = "5/5/1980" });
                _users.Add(new User { Id = 2, Name = "Sujin", Suburb = "Camberwell", Birthday = "12/31/1990" });
                _users.Add(new User { Id = 3, Name = "Uyoung", Suburb = "Melbourne", Birthday = "12/9/2014" });
            }
        }

        [Route("~/")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("~/users")]
        public ActionResult Users()
        {
            if (!Request.IsAjaxRequest())
            {
                return View(_users);
            }
            else
            {
                return Json(_users, JsonRequestBehavior.AllowGet);
            }
        }

        [Route("~/users/{id}")]
        public ActionResult Details(int id)
        {
            if (!Request.IsAjaxRequest())
            {
                return View(_users.Find(x=>x.Id==id));
            }
            else
            {
                return Json(_users.Find(x=>x.Id==id), JsonRequestBehavior.AllowGet);
            }
        }
    }
}