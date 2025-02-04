using System;
using System.IO;
using System.Xml.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

class Program
{
    static void Main(string[] args)
    {
        string inputFilePath = "pytania_filtered.json";
        string outputFilePath = "insert_script.sql";

        // Wczytaj JSON z pliku
        string jsonContent = File.ReadAllText(inputFilePath);

        // Parsowanie JSON-a
        JArray jsonArray = JArray.Parse(jsonContent);

        // Rozpocznij budowanie skryptu SQL
        using (StreamWriter writer = new StreamWriter(outputFilePath))
        {
            writer.WriteLine("-- Skrypt SQL do wstawiania danych do tabeli Pytania");
            writer.WriteLine("INSERT INTO Pytania (Id, QuestionNo, Question, AnswerA, AnswerB, AnswerC, Answer, Media, Kategorie) VALUES");

            for (int i = 0; i < jsonArray.Count; i++)
            {
                JObject obj = (JObject)jsonArray[i];

                // Przygotuj wartości dla SQL-a, uwzględniając obsługę NULL i znaków specjalnych
                string id = obj["Id"]?.ToString() ?? "NULL";
                string questionNo = obj["QuestionNo"]?.ToString() ?? "NULL";
                string question = EscapeSqlString(obj["Question"]?.ToString());
                string answerA = EscapeSqlString(obj["AnswerA"]?.ToString());
                string answerB = EscapeSqlString(obj["AnswerB"]?.ToString());
                string answerC = EscapeSqlString(obj["AnswerC"]?.ToString());
                string answer = EscapeSqlString(obj["Answer"]?.ToString());
                string media = EscapeSqlString(obj["Media"]?.ToString());
                string kategorie = EscapeSqlString(obj["Kategorie"]?.ToString());

                // Buduj wiersz SQL
                string sqlRow = $"({id}, {questionNo}, {question}, {answerA}, {answerB}, {answerC}, {answer}, {media}, {kategorie})";

                // Dodaj przecinek, jeśli to nie jest ostatni wiersz
                if (i < jsonArray.Count - 1)
                {
                    sqlRow += ",";
                }

                writer.WriteLine(sqlRow);
            }

            writer.WriteLine(";");
        }

        Console.WriteLine("Skrypt SQL został zapisany do pliku: " + outputFilePath);
    }

    static string EscapeSqlString(string value)
    {
        if (string.IsNullOrEmpty(value))
        {
            return "NULL";
        }

        // Ucieczka znaków specjalnych w SQL-u (pojedynczy apostrof)
        return $"'" + value.Replace("'", "''") + "'";
    }
}
