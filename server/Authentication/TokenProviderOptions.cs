using System;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace Pnld.Authentication
{
    public class TokenProviderOptions
    {
        public static string Audience { get; } = "PnldAudience";
        public static string Issuer { get; } = "Pnld";
        public static SymmetricSecurityKey Key { get; } = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("PnldSecretSecurityKeyPnld"));
        public static TimeSpan Expiration { get; } = TimeSpan.FromMinutes(20);
        public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);
    }
}
