import { Component, OnInit, EventEmitter , Output , Input} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Dish } from 'src/app/models/dish.model';

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css']
})
export class CommonDialogComponent implements OnInit {

  @Output() additem: EventEmitter<any> = new EventEmitter();
  @Input() submitted: boolean;
  dish: Dish;
  fileToUpload: File = null;
  DishForm: FormGroup;
  isImageSaved: boolean;
  cardImageBase64: string;
  imageError: string;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.createFormControls();
  }
  createFormControls() {
    this.DishForm = this.formBuilder.group({
      Ordernumber: [0],
      Dishimage:  [''],
      Dishname: ['', [Validators.required]],   
      Dishquantity: ['', [Validators.required]],
      Dishstatus: ['', [Validators.required]],
      Dishamount: ['', [Validators.required]]
    });
  }
  get f() { return this.DishForm.controls }

  
  onSubmit(){
    this.additem.emit(true);
  }
  // close dish popup
  close_popup(){
    document.getElementById("dish_popup").style.display="none";
    document.getElementById("freeze").style.display = "none";
    this.DishForm.reset();
    this.cardImageBase64= "";
  }
  // only Alphabets
  keyPressAlphabets(event){
    var inp = String.fromCharCode(event.keyCode);
  
    if (/^[A-Za-z ]+$/.test(inp)) {
      return true;
    } 
    else {
      event.preventDefault();
      return false;
    }
   }
  
   // Only Integer Numbers
  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;   
    } else {      
      return true;
    }
  }
  
  keyPressAlphanumeric(event) {
  
    var inp = String.fromCharCode(event.keyCode);
  
    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } 
    else {
      event.preventDefault();
      return false;
    }
  }
   /****************IMAGE PREVIEW*******************/
   fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }

        // if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        //     this.imageError = 'Only Images are allowed ( JPG | PNG )';
        //     return false;
        // }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    this.isImageSaved = true;
                    this.DishForm.controls.Logo.setValue(this.cardImageBase64);
                    // this.previewImagePath = imgBase64Path;
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
 }
}
