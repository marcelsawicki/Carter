using AngularApp1.Server;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
using System.ComponentModel.DataAnnotations.Schema;
namespace AngularApp1.Server.Models
{
    [Table("Questions")]
    public class QuestionModel
    {
        public int Id { get; set; }
        public int? QuestionNo { get; set; }
        public string? Question { get; set; }
        public string? AnswerA { get; set; }
        public string? AnswerB { get; set; }
        public string? AnswerC { get; set; }
        public string? Answer { get; set; }
        public string? Media { get; set; }
        public string? Kategorie { get; set; }
    }

}