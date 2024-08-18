using CountryExplorerAPI.Models;
using Newtonsoft.Json.Linq;

namespace CountryExplorerAPI.Services
{
    public interface ICountryService
    {
        Task<List<Country>> GetCountriesAsync();
        Task<Country> GetCountryByNameAsync(string name);
    }

    public class CountryService : ICountryService
    {
        private readonly HttpClient _httpClient;

        public CountryService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Country>> GetCountriesAsync()
        {
            var response = await _httpClient.GetStringAsync("https://restcountries.com/v3.1/all");
            var countries = JArray.Parse(response);
            return countries.Select(c => new Country
            {
                Name = c["name"]["common"].ToString(),
                Capital = c["capital"]?.FirstOrDefault()?.ToString(),
                Currency = c["currencies"]?.First?.First?["name"].ToString(),
                Language = c["languages"]?.First?.First?.ToString(),
                Region = c["region"]?.ToString(),
                FlagUrl = c["flags"]["svg"].ToString(),
                MapUrl = c["maps"]["googleMaps"].ToString()
            }).ToList();
        }

        public async Task<Country> GetCountryByNameAsync(string name)
        {
            var response = await _httpClient.GetStringAsync($"https://restcountries.com/v3.1/name/{name}");
            var country = JArray.Parse(response).FirstOrDefault();
            return new Country
            {
                Name = country["name"]["common"].ToString(),
                Capital = country["capital"]?.FirstOrDefault()?.ToString(),
                Currency = country["currencies"]?.First?.First?["name"].ToString(),
                Language = country["languages"]?.First?.First?.ToString(),
                Region = country["region"]?.ToString(),
                FlagUrl = country["flags"]["svg"].ToString(),
                MapUrl = country["maps"]["googleMaps"].ToString()
            };
        }
    }
}
