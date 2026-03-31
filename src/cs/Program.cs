using C;
using System.Text.RegularExpressions;

namespace C
{
    public class Result
    {
        public char A { get; set; }
        public int C { get; set; }
    }
}

partial class Program
{
    static readonly string path = "https://tcfshsu.github.io/law/json/laws.json";
    static readonly string pathc = "https://tcfshsu.github.io/law/json/cases.json";
    static readonly HttpClient http = new();
    static async Task Main()
    {
        try
        {
            using HttpResponseMessage response = await http.GetAsync(path);
            response.EnsureSuccessStatusCode();
            using HttpResponseMessage responsec = await http.GetAsync(pathc);
            responsec.EnsureSuccessStatusCode();
            string ljson = await response.Content.ReadAsStringAsync();
            string cjson = await responsec.Content.ReadAsStringAsync();
            List<Result> r = [];
            List<Result> rc = [];
            List<Result> rl = [];
            string l = CJK().Replace(ljson, ""); 
            for (int i = 0; i < l.Length; i++)
            {
                int ii = l.Where(j => j == l[0]).ToArray().Length;
                rl.Add(new Result
                {
                    A = l[0],
                    C = ii
                });
                l = l.Replace(l[0].ToString(), "");
                if (string.IsNullOrEmpty(l))
                {
                    break;
                }
            }
            ljson = NonCJK().Replace(ljson, "");//「」（）《》、，。【】○：；｢｣─
            cjson = NonCJK().Replace(cjson, "");
            int wc = 0; 
            for (int i = 0; i < ljson.Length; i++)
            {
                int ii = ljson.Where(j => j == ljson[0]).ToArray().Length;
                r.Add(new Result
                {
                    A = ljson[0],
                    C = ii
                });
                ljson = ljson.Replace(ljson[0].ToString(), "");
                if (string.IsNullOrEmpty(ljson))
                {
                    break;
                }
            }
            foreach (var x in r)
            {
                wc += x.C;
            }
            for (int i = 0; i < cjson.Length; i++)
            {
                int ii = cjson.Where(j => j == cjson[0]).ToArray().Length;
                rc.Add(new Result
                {
                    A = cjson[0],
                    C = ii
                });
                cjson = cjson.Replace(cjson[0].ToString(), "");
                if (string.IsNullOrEmpty(cjson))
                {
                    break;
                }
            }
            using StreamWriter sw = File.CreateText("../csv/s_csv.ts");
            {
                sw.Write( "export default \"" );
                string temp = "";
                foreach (var x in r.OrderByDescending(r => r.C).ThenBy(r => r.A))
                {
                    int xa = x.A;
                    decimal xc = x.C * 1000 ; 
                    temp += x.A + ",U+" + xa.ToString("X4") + ',' + x.C.ToString() + ',' + ( xc / wc ) + '|';
                }
                sw.Write( temp[..^1] + "\"" ) ; 
            }
            using StreamWriter swc = File.CreateText("../csv/s_csv_c.ts");
            {
                swc.Write( "export default \"" );
                string temp = ""; 
                foreach (var x in rc.OrderByDescending(r => r.C).ThenBy(r => r.A))
                {
                    int xa = x.A;
                    temp += x.A + ",U+" + xa.ToString("X4") + ',' + x.C.ToString() + '|';
                }
                swc.Write( temp[..^1] + "\"" ); 
            }
        }
        catch (HttpRequestException err)
        {
            Console.WriteLine("Exception Caught!");
            Console.WriteLine("Message :{0} ", err.Message);
        }
    }

    [GeneratedRegex(@"[^!-⬍⿰-㏿ﬓ-�]")]
    private static partial Regex CJK();
    [GeneratedRegex(@"[!-⬍⿰-㏿ﬓ-�\s]")]
    private static partial Regex NonCJK();
}