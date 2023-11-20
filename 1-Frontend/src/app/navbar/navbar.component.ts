import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service'

@Component({
  selector: 'app-encabezado',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {

  navForm: FormGroup
  constructor(private fb: FormBuilder,
              private router: Router,
              private actRouter: ActivatedRoute,
              private _productoService: ProductoService) {
  
  this.navForm = this.fb.group({
    search: ['', Validators.required]
  })
}

  search(): void {
      let bici = this.navForm.getRawValue()
          this._productoService.getProducto(bici).subscribe(
            (res) => {
              this.router.navigate(['/lista']);
              console.log(bici)
            },
            (error) => {
              console.error('Error en la busqueda', error);
            }
          );
        }

}


