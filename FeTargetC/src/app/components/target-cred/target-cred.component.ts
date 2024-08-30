
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TargetService } from '../../services/target.service';
import { error } from 'console';

@Component({
  selector: 'app-target-cred',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importa ReactiveFormsModule aquí
  templateUrl: './target-cred.component.html',
  styleUrls: ['./target-cred.component.css'] // Corrige el nombre de la propiedad de styleUrls
})
export class TargetCredComponent {
  listTarjetas: any[] = [];

  accion = "Agregar";

  id: number | undefined;


  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private _TargetService: TargetService) {

    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.maxLength(16), Validators.required, Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    });
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.obtenerTarjetas();

  }
  obtenerTarjetas() {

    this._TargetService.getListTargets().subscribe(data => {
      console.log(data)
      this.listTarjetas = data

    }, error => {
      console.log(error)
    })
  }


  guardarTarjeta() {

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }
console.log(tarjeta)

    if (this.id == undefined) {
      this._TargetService.saveTarget(tarjeta).subscribe(data => {
        this.toastr.success('Tarjeta agregada con éxito!', 'Éxito');
        this.obtenerTarjetas()
        this.form.reset();
      }, error => {
        this.toastr.error("Oops.. Ocurrió un error", "Error")
        console.log(error)
      })
    } else {
      tarjeta.id = this.id
      this._TargetService.updateTarget(this.id,tarjeta).subscribe(data => {
     
        this.form.reset()
        this.accion = "Agregar"
        this.id = undefined;
        this.toastr.info("La tarjeta fue actualizada con exito", "Tarjeta Actualizada")
        this.obtenerTarjetas()
      }, error => {
        this.toastr.error("Oops.. Ocurrió un error", "Error")
      })


    }

  }

  eliminarTarjeta(id: number) {
   this._TargetService.deleteTarjeta(id).subscribe(data => {
    this.toastr.error("La tarjeta fue eliminada con exito", "Tarjeta Eliminada")
    this.obtenerTarjetas()

  
  }, error => {
    console.log(error);
  })

}  

editTarget(tarjeta: any){

  this.accion = "Editar"

  this.id = tarjeta.id

  this.form.setValue({
    titular: tarjeta.titular,
    numeroTarjeta: tarjeta.numeroTarjeta,
    fechaExpiracion: tarjeta.fechaExpiracion,
    cvv: tarjeta.cvv
  })

}

  
}
