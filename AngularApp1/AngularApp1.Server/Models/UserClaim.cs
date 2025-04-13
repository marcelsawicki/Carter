using System.Text.Json.Serialization;

namespace AngularApp1.Server.Models
{
    public class UserClaim
    {
        [JsonPropertyName("type")]
        public string Type { get; set; } = string.Empty;
        [JsonPropertyName("value")]
        public object Value { get; set; } = string.Empty;
    }
}
