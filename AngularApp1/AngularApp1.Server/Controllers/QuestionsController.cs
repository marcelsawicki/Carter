using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public QuestionsController(ApplicationDbContext context)
        {
            _context = context;
        }


        // GET: api/Questions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuestionsResponse>>> GetQuestions()
        {
            var first = _context.Questions.FirstOrDefault();
            var questions = await _context.Questions.Take(4000).ToListAsync();

            return Ok(questions);
        }

        // GET api/<QuestionsController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<QuestionsResponse>> Get(int id)
        
       {
            var question = await _context.Questions.FindAsync(id);

            if (question == null)
            {
                return NotFound();
            }

            var response = new QuestionsResponse
            {
                Id = question.Id,
                QuestionNo = question.QuestionNo,
                Question = question.Question,
                AnswerA = question.AnswerA,
                AnswerB = question.AnswerB,
                AnswerC = question.AnswerC,
                Answer = question.Answer,
                Media = question.Media,
                Kategorie = question.Kategorie
            };

            return Ok(response);
        }
    }
}
