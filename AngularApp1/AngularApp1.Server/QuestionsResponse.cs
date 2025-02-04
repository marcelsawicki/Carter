using AngularApp1.Server;
using AngularApp1.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
namespace AngularApp1.Server
{
    public class QuestionsResponse
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("questionno")]
        public int? QuestionNo { get; set; }
        [JsonPropertyName("question")]
        public string? Question { get; set; }
        [JsonPropertyName("answera")]
        public string? AnswerA { get; set; }
        [JsonPropertyName("answerb")]
        public string? AnswerB { get; set; }
        [JsonPropertyName("answerc")]
        public string? AnswerC { get; set; }
        [JsonPropertyName("answer")]
        public string? Answer { get; set; }
        [JsonPropertyName("media")]
        public string? Media { get; set; }
        [JsonPropertyName("kategorie")]
        public string? Kategorie { get; set; }
    }
}
