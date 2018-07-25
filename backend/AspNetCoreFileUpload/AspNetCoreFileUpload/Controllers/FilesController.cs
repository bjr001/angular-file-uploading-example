using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace AspNetCoreFileUpload.Controllers
{
    [Route("api/[controller]")]
    public class FilesController : Controller
    {
        [HttpPost("upload")]
        public async Task<IActionResult> UploadVideos(List<IFormFile> files)
        {
            long size = files.Sum(f => f.Length);
            // TODO: Do something with your files here.
            return Ok(new { count = files.Count, size });
        }
    }
}
