using System;
using System.IO;
using System.Xml.Linq;
using System.Xml;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

class Program
{
    static void Main(string[] args)
    {
        string inputFilePath = "pytania_raw.json";
        string outputFilePath = "pytania_filtered.json";

        // Wczytaj JSON z pliku
        string jsonContent = File.ReadAllText(inputFilePath);

        // Parsowanie JSON-a
        JArray jsonArray = JArray.Parse(jsonContent);

        // Zestaw dozwolonych kluczy
        string[] allowedKeys = { "Id", "QuestionNo", "Question", "AnswerA", "AnswerB", "AnswerC", "Answer", "Media", "Kategorie" };

        // Filtracja obiektów
        JArray filteredArray = new JArray();

        foreach (JObject obj in jsonArray)
        {
            JObject filteredObject = new JObject();

            foreach (var key in allowedKeys)
            {
                if (obj.ContainsKey(key))
                {
                    filteredObject[key] = obj[key];
                }
            }

            filteredArray.Add(filteredObject);
        }

        // Zapis przefiltrowanego JSON-a do pliku
        File.WriteAllText(outputFilePath, filteredArray.ToString(Newtonsoft.Json.Formatting.Indented));

        Console.WriteLine("JSON został przefiltrowany i zapisany do pliku: " + outputFilePath);
    }
}