using CountryExplorerAPI.Models;
using CountryExplorerAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace CountryExplorerAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountryController : ControllerBase
    {
        private readonly ICountryService _countryService;

        public CountryController(ICountryService countryService)
        {
            _countryService = countryService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Country>>> GetCountries()
        {
            var countries = await _countryService.GetCountriesAsync();
            return Ok(countries);
        }

        [HttpGet("{name}")]
        public async Task<ActionResult<Country>> GetCountryByName(string name)
        {
            var country = await _countryService.GetCountryByNameAsync(name);
            return Ok(country);
        }
    }
}
