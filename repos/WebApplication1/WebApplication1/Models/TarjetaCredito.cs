using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class TarjetaCredito
    {
        public int Id { get; set; }

        [Required]
        public string Titulo { get; set; }
        [Required]
        public string NumeroTarjeta { get; set; }
        [Required]
        public string Cvv { get; set; }
    }
}
