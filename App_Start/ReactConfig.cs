using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(HybridRendering_React_Backbone.ReactConfig), "Configure")]

namespace HybridRendering_React_Backbone
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            ReactSiteConfiguration.Configuration
                .SetUseHarmony(true)
                .SetReuseJavaScriptEngines(true)
                .AddScript("~/Scripts/underscore.js")
                .AddScript("~/Scripts/app.jsx");
		}
	}
}